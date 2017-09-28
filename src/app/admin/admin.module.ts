import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AdminComponent} from './admin/admin.component';
import { AdminAddComponent} from './admin-add/admin-add.component';
import { AdminEditComponent} from './admin-edit/admin-edit.component';
import { AdminListComponent} from './admin-list/admin-list.component';

import { AdminRoutingModule} from './admin.routing.module';

import { AdminGuard } from '../services/admin.guard';

@NgModule({
  declarations: [
    AdminComponent,
    AdminListComponent,
    AdminAddComponent,
    AdminEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  exports: [
    AdminComponent,
    AdminListComponent,
    AdminAddComponent,
    AdminEditComponent
  ],
  providers: [AdminGuard]
})
export class AdminModule {
}
