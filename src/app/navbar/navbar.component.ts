import { Component, OnInit, DoCheck} from '@angular/core';
import { UserService } from '../services/user.services';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit, DoCheck {

  public brand: string;
  public token;
  public identity;
  constructor(
    private _router: Router,
    private _userService: UserService
  ) {
    this.brand = 'NGZOO';
  }

  ngOnInit() {
     this.identity = this._userService.getIdentity();
     this.token = this._userService.getToken();
  }
  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/home']);
  }

}
