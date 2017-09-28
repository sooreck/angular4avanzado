import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgModel} from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.services';
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public user: User;
  public identity;
  public token;
  public status: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '', '', '');
  }

  ngOnInit() {
  }
  onSubmit() {
    // logear el usuario
    this._userService.sigin(this.user).subscribe(
      response => {
        this.identity = response.issetUser;
        console.log(response.issetUser);
        if (!this.identity || !this.identity._id) {
          console.log('El usuario no se ha logeado');
          console.log(response);
        } else {
          this.identity.password = '';
          console.log(this.identity);
          localStorage.setItem('identity', JSON.stringify(this.identity));
          // conseguir el token
          this._userService.sigin(this.user, 'true').subscribe(
            response2 => {
              this.token = response2.token;
              if (!this.token && this.token.length <= 0) {
                console.log('Token no generado');
              } else {
                console.log(this.token);
                localStorage.setItem('token', this.token);
                this._router.navigate(['/home']);
              }
            },
            error => {
              console.log(<any>error);
              const errorMessage = <any>error;
              if (errorMessage != null) {
                const body = JSON.parse(error._body);
                console.log('te lo puse error');
                this.status = 'error';

              }
            }
          );
        }
      },
      error => {
        console.log(<any>error);
        const errorMessage = <any>error;
        if (errorMessage != null) {
          const body = JSON.parse(error._body);
          console.log('te lo puse error');
          this.status = 'error';

        }
      }
    );
  }

}
