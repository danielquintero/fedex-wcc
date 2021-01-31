import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarNavigationComponent } from './sidebar-navigation/sidebar-navigation.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FileUploaderComponent,
    NavbarComponent,
    SidebarNavigationComponent,
    IconComponent,
  ],
  exports: [FileUploaderComponent, NavbarComponent, SidebarNavigationComponent],
})
export class SharedDesignSystemUiModule {}
