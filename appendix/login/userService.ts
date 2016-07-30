import {Injectable} from '@angular/core';
import {Http, Response, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Config} from "../app.config";
import {LocalStorage, SessionStorage} from "angular2-localstorage/dist";
import {IUserService} from "./user.service.interface";

@Injectable()
export class UserService implements IUserService {

    @LocalStorage() private currentSystem: any = {
        id: '',
        name: ''
    };

    @LocalStorage() private currentUser: any = {
        id: '',
        name: ''
    };

    constructor(private http: Http) {
    }

    public login(mail: String, password: String) {
        return this.http.post(Config.BASEPATH + '/users/login', JSON.stringify({
                mail: mail,
                password: password
            }))
            .map((res) => {
                let data = res.json();
                this.currentUser.name = data.name;
                this.currentUser.id = data._id;
                return data;
            })
    }

    public logout() {
        this.currentUser.id = '';
        return this.http.get(Config.BASEPATH + '/users/logout')
            .map(res => {
                this.currentUser.name = '';
                this.currentUser.id = '';
                return res.json()
            })
    }

    public register(mail: String, password: String, name: String, surname: String) {
        return this.http.post(Config.BASEPATH + '/users', JSON.stringify({
                mail: mail,
                password: password,
                name: name,
                surname: surname
            }))
            .map(res => {
                let data = res.json();
                this.currentUser.name = data.name;
                this.currentUser.id = data._id;
                return data;
            })
    }

    public getLocalMe(): any {
        return {
            user: this.currentUser,
            system: this.currentSystem
        }
    }

    public setUser(user: any) {
        this.currentUser = user;
    }

    public setSystem(system: any) {
        this.currentSystem = system;
    }

}
