import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DummyPageModule],
  imports: [CommonModule, RouterModule],
  exports: [DummyPageModule],
})
export class DummyPageModule {}
