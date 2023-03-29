import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [SidebarComponent],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
