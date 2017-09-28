import { Component, OnInit } from '@angular/core';
import { UserJeather } from '../models/UserJeather';
import { User } from '../models/User';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
  providers: [ UserService ]
})
export class DatosComponent implements OnInit {

  public personas: UserJeather[];
  public usuarios: User[];

  constructor( private _userService: UserService) { }

  ngOnInit() {

    this._userService.getDatosJeather().subscribe(
      result => {
        console.log('datos jeather');
        this.personas = result;
        console.log(JSON.stringify(result));
      },
      error => {
        console.log(error);
      }
    );
    this._userService.getDatos().subscribe(
      result => {
        console.log(result.code);
        if (result.code === 200) {
          this.usuarios = result.data;
        } else {
          console.log('ERROR!!!!!!!');
        }
          console.log('Datos cargados');
      },
      error => {
        console.log(error);
        console.log('Nel no te cargo nada xdxdxd');
      }
    );
  }

}
