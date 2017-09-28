import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

import { User } from '../models/user';

@Injectable()
export class UploadService {
  public url: string;
  public token;

  constructor(
    private _http: Http
  ) {
    this.url = GLOBAL.url;
  }

  makeFileRequest(url: string, params: Array<string>,  files: Array<File>, token: string, name: string) {
    return new Promise(function (resolve, reject) {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append(name, files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open('POST', url , true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);
    });
  }
}
