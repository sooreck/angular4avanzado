import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { User } from '../models/user';
import { UserJeather } from '../models/userJeather';

@Injectable()
export class UserService {
    public url: string;
    data: any = null;
    identity;
    token;
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
       // this.getJeather();
    }

    register(user_to_register: User) {
        console.log('entro');
        const params = JSON.stringify(user_to_register);
        console.log(params);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers: headers });
        return this._http.post(this.url + 'register', params, { headers: headers })
                         .map(res => res.json());
    }

    sigin(user_to_login, gettoken = null) {
        if (gettoken != null) {
          user_to_login.gettoken = gettoken;
        }
        const params = JSON.stringify(user_to_login);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post(this.url + 'login', params, {headers: headers})
                   .map(res => res.json());
      }
    getIdentity() {
        const user = JSON.parse(localStorage.getItem('identity'));
        if (user !== 'undefined') {
                this.identity = user;
        } else {
            this.identity = null;
        }
        return this.identity;
    }

    getToken() {
        const tok = localStorage.getItem('token');
        if (tok !== 'undefined') {
                this.token = tok;
        } else {
            this.token = null;
        }
        return this.token;
    }

    pruebas2() {
        console.log('entro');
        const headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200'});
        return this._http.get(this.url + 'pruebas', {headers: headers})
                         .map(res => res.json());
    }
    pruebas() {
        console.log('entro pruebas 2');
        return this._http.get('https://jsonplaceholder.typicode.com/posts')
                         .map(res => res.json());
    }
    pruebas3() {
        console.log('entro pruebas 3');
        const headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'POST'});
        headers.append('Access-Control-Allow-Origin', 'http://localhost:4200/api/register' );
        return this._http.get('http://192.168.0.32:8080/test', {headers: headers})
                         .map(res => res.json());
    }
    getJeather() {
        return this._http.get('http://192.168.0.32:8080/test')
                         .map((res: Response) => res.json())
                     .subscribe(data => {
                            this.data = data;
                            console.log(this.data);
                    });
      }
    getPhp() {
        return this._http.get('http://localhost/pruebaphp/index.php/getusers')
                         .map((res: Response) => res.json());
      }
      postJeather(user_to_register) {
        const params = JSON.stringify(user_to_register);
        console.log('OBJETO JEATHER');
        console.log(params);
        const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
        headers.append('Access-Control-Allow-Origin', '*' );
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        return this._http.post('http://192.168.0.32:8080/registro', params, {headers: headers})
                         .map(res => res.json());
      }

      postPhp(user_to_register) {
        let paraaams;
        paraaams = {
            'json': user_to_register
        };
        console.log(paraaams);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers: headers });
        headers.append('Access-Control-Allow-Origin', '*' );
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return this._http.post('http://localhost/pruebaphp/index.php/adduser', paraaams, options)
                         .map(res => res.json());
      }

      getDatosJeather() {
        return this._http.get('http://192.168.0.32:8080/test').map(res => res.json());
    }
  getDatos() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.get(this.url + 'getusers', {headers: headers}).map(res => res.json());
  }
}
