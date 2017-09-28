import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AdminComponent} from './admin/admin.component';
import { AdminAddComponent} from './admin-add/admin-add.component';
import { AdminEditComponent} from './admin-edit/admin-edit.component';
import { AdminListComponent} from './admin-list/admin-list.component';
import { DatosComponent } from '../datos/datos.component';
import { AdminGuard } from '../services/admin.guard';


const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'add', component: AdminAddComponent},
        {path: 'list', component: AdminListComponent},
        {path: 'edit', component: AdminEditComponent},
        {path: 'users', component: DatosComponent},
        {path: '**', redirectTo: 'admin', pathMatch: 'full'}
      ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}

