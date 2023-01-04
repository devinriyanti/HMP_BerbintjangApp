import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    loginMethod(user_email:string,user_password:string) : Observable<any>{
        let body = new HttpParams()
        body = body.set('user_email',user_email)
        body = body.set('user_password',user_password)
        
        return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/login.php",body)
    }

    signupMethod(email: string, password: string, full_name: string): Observable<any> {
      let body = new HttpParams();
      body = body.set('email', email);
      body = body.set('password', password);
      body = body.set('full_name', full_name);
      return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/signup.php", body);
    }

    ProfilList(user_email:string): Observable<any> {
      let body = new HttpParams();
      body = body.set('user_email', user_email)
      return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/show_profile.php",body);
    }

    editProfil(email: string, password: string, full_name: string): Observable<any> {
      let body = new HttpParams();
      body = body.set('email', email);
      body = body.set('password', password);
      body = body.set('full_name', full_name);
      return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/edit_profile.php", body);
    }

  constructor(private http: HttpClient) { }
}
