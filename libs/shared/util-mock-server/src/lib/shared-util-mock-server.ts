import { Server, Registry, Request, createServer } from 'miragejs';
import Schema from 'miragejs/orm/schema';
import { UserFactory } from './factories/user';
import { UserModel } from './models/user';
import { signin } from './route-handlers/signin';
import { sharedScenario } from './scenarios/shared';

export type AppRegistry = Registry<
  /* factories can be defined here */
  {
    user: typeof UserModel;
  },
  /* factories can be defined here */
  {
    user: typeof UserFactory;
  }
>;

export type AppSchema = Schema<AppRegistry>;

export function makeServer({
  environment = 'development',
} = {}): Server<AppRegistry> {
  console.log(environment);
  const server = createServer({
    environment,
    models: {
      user: UserModel,
    },
    factories: {
      user: UserFactory,
    },
    seeds(_server: Server<AppRegistry>) {
      sharedScenario(_server);
    },
    routes() {
      this.passthrough('https://demo-api.now.sh/users');

      this.namespace = 'api';
      this.post('/signin', signin);

      this.get('/users', (schema: AppSchema, request: Request) => {
        console.log(request);
        return schema.all('user');
      });
    },
  });
  return server;
}
