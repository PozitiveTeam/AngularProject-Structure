import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { EmptyModule } from './layouts/empty/empty.module';
import { VerticalModule } from './layouts/vertical/vertical.module';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


const layoutModules = [
  // Empty
  EmptyModule,

  // Vertical navigation
  VerticalModule
];

@NgModule({ 
  declarations: [LayoutComponent],
  imports: [
    RouterModule,
    SharedModule,
    ...layoutModules
  ],
  exports: [
    LayoutComponent,
    ...layoutModules
  ]
})
export class LayoutModule { }
