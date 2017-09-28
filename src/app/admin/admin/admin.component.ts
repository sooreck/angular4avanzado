import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]
})
export class AdminComponent implements OnInit {
  public token;
  public identity;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

}
