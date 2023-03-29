import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalComponent } from './vertical.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    HeaderModule
  ],
  declarations: [VerticalComponent],
  exports: [
    VerticalComponent
  ],
})
export class VerticalModule { }
