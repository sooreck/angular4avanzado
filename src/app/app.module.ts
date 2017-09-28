import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserService } from './services/user.services';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AnimalesComponent } from './animales/animales.component';
import { CuidadoresComponent } from './cuidadores/cuidadores.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';

import { appRoutingProviders, routing} from './app.routing';
import { AdminModule} from './admin/admin.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DatosComponent } from './datos/datos.component';





// dirctives
import { EmailDirective } from './directives/email.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';

import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnimalesComponent,
    CuidadoresComponent,
    TiendaComponent,
    ContactoComponent,
    ErrorComponent,
    RegisterComponent,
    LoginComponent,
    DatosComponent,
    EmailDirective,
    EqualValidatorDirective,
    UserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [appRoutingProviders, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
