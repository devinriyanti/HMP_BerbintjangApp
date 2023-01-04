import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  user_email = '';
  login_user = "";
  login_passwd = "";
  login_error = "";
  signup_user = "";
  signup_pwd = "";
  signup_full_name = "";
  signup_error = "";
  user = [];
  pwdType: string = 'password';
  pwdShow: boolean = false;

  constructor(private storage: Storage,public us:UserService) { }

  async ngOnInit() {
    await this.storage.create();
    this.user_email = await this.storage.get('user_email');
  }

  login() {
    this.us.loginMethod(this.login_user, this.login_passwd).subscribe(
      (data) => {
        if (data['result'] == 'success') {
          this.user_email = this.login_user;
          this.storage.set('user_email', this.user_email);
          this.login_user = '';
          this.login_passwd = '';
          alert("Login Success");
        }
        else {
          this.login_error = "username atau password salah";
        }
      }
    )
  }

  async logout() {
    await this.storage.remove('user_email');
    this.user_email = "";
  }

  showText() {

  }
  signup() {
    this.us.signupMethod(this.signup_user, this.signup_pwd,this.signup_full_name).subscribe(
      (data) => {
        if (data['result'] == 'success') {
          this.signup_user = '';
          this.signup_pwd = '';
          this.signup_full_name = '';
          alert("Sign Up Success");
        }
        else {
          this.signup_error = "Email sudah terpakai";
        }
      }
    )
  }

  public togglePwd(){
    if (this.pwdShow){
      this.pwdType='password';
      this.pwdShow = false;
    } else{
      this.pwdType='text';
      this.pwdShow = true;
    }
  }
}
