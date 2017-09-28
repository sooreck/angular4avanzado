import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgModel} from '@angular/forms';
import { AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/user';
import { UserJeather } from '../models/UserJeather';
import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.services';
import { UploadService } from '../services/upload.service';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, UploadService]
})
export class UserComponent implements OnInit {
  user: User;
  identity;
  token;
  public filesToUpload: Array<File>;
  public url: string;

  constructor( private _route: ActivatedRoute,
               private _router: Router,
               private _userService: UserService,
               private _uploadService: UploadService) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;
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
  onSumbit() {
   this._uploadService.makeFileRequest(this.url + 'uploadImage/' + this.identity._id, [], this.filesToUpload, this.token, 'image')
                      .then((result: any) => {
                          this.user.image = result.image;
                          localStorage.setItem('identity', JSON.stringify(this.identity));
                          console.log(this.identity);
                      } );
  }


  fileChange(fileInput: any ) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
