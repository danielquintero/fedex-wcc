import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Request, Response, createServer } from 'miragejs';
import { AppRegistry, makeServer } from '@fedex/shared-util-mock-server';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).Cypress ? setCypressServerHandler() : makeServer();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/**
 * If Cypress boots the application we delegate app's network requests to handleFromCypress available on window.
 * handleFromCypress is registered in the cypress e2e application. (support/index.ts)
 */
function setCypressServerHandler() {
  createServer({
    environment: 'test',
    routes() {
      const methods = ['get', 'put', 'patch', 'post', 'delete'];
      methods.forEach((method) => {
        this[method]('/*', async (schema: AppRegistry, request: Request) => {
          const [
            status,
            headers,
            body,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ] = await (window as any).handleFromCypress(request);
          return new Response(status, headers, body);
        });
      });
      this.passthrough('https://demo-api.now.sh/users');
    },
  });
}
