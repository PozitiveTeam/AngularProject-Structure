import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({

  declarations: [LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(LoginRoutes),
  ],
})
export class LoginModule { }
