import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './compoenets/add-user/add-user.component';
import { DetailsComponent } from './compoenets/details/details.component';
import { ListComponent } from './compoenets/list/list.component';

const routes: Routes = [
  {
    path: 'create',
    component: AddUserComponent
  },
  {
    path: 'detail',
    component: DetailsComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];

export const UsersRoutes = RouterModule.forChild(routes);
