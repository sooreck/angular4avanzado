import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgModel} from '@angular/forms';
import { AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/user';
import { UserJeather } from '../models/UserJeather';
import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.services';


declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ UserService ]
})
export class RegisterComponent implements OnInit {

  public user: User;
  public userJeather: UserJeather;
  seregistro: boolean;

  formRegister: FormGroup;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '', '', '');
    this.userJeather = new UserJeather('', '', '');
    this.seregistro = null;

    /*this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16) ]),
      dateOfBirth: new FormControl('', [Validators.required]),
    });*/
     // this.angular = document.getElementById('surname');

  }


  saveData() {
    alert(JSON.stringify(this.formRegister.value));
  }

  ngOnInit() {

    $('#dateOfB').datepicker({
      format: 'dd/mm/yyyy',
      startDate: '01/01/1900',
      endDate: 'today',
      maxViewMode: 3,
      clearBtn: true,
      language: 'es',
      multidate: false,
      autoclose: true,
      toggleActive: false
    })
      .on('change', e => this.user.dateOfBirth = e.target.value)
      .on('changeDate', function(e) {
        // $('#surname').val($('#dateOfB').datepicker('getFormattedDate').toString()).change();
        // jQuery('#inputDateOfBirth').trigger('input');
      });
  }

  onSubmit() {
    /*this.userJeather.nombre = this.user.name;
    this.userJeather.apellido = this.user.surname;
    this.userJeather.password = this.user.password;
      this._userService.postJeather(this.userJeather).subscribe(
        response => {
          console.log(response);
    },
    error => {
      console.log(<any>error);
    });*/

    console.log('paso 1');
    this._userService.register(this.user).subscribe(
      response => {
          if (response.user && response.user._id) {
              this.user = response.user;
              this.seregistro = true;
          } else {
            this.user = new User('', '', '', '', '', 'ROLE_USER', '', '', '');
            this.seregistro = false;
            console.log('neeeeeeeeelllll!');
          }
      },
      error => {
        console.log(<any>error);
      }
    );
    console.log(this.user);


    /*this._userService.postPhp(this.userJeather).subscribe(
      response => {
        console.log('SE AGREGO A PHP');
  },
  error => {
    console.log(<any>error);
  });*/

  }
  getUserJeather(): string {
    return JSON.stringify(this.userJeather);
  }
  getUser(): string {
    return JSON.stringify(this.user);
  }
  setDateOfBirth(value: string) {
    this.user.dateOfBirth = value;
  }

  prueba(component: HTMLElement) {
    alert('hola');
    component.remove();
  }

}
