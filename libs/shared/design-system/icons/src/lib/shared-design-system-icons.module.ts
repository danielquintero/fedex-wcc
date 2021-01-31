import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsRegistryService } from './icons-registry.service';

@NgModule({
  imports: [CommonModule],
  providers: [IconsRegistryService],
})
export class SharedDesignSystemIconsModule {}
