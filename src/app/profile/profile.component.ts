import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../profile.model';
import { Storage } from '@ionic/storage-angular';
import { UserService } from '../user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  profile = [];
  user_email="";
  edit_profile_error="";
  email:string ="";
  full_name:string="";
  password:string="";
  pwdType: string = 'password';
  pwdShow: boolean = false;

  listprof() {
    this.us.ProfilList(this.user_email).subscribe(
      (data)=> {
        this.profile=data;
      }
    );
  };
  constructor(public us: UserService, private storage:Storage) { }

  async ngOnInit() {
    this.user_email = await this.storage.get('user_email');
    console.log(this.user_email);
    this.us.ProfilList(this.user_email).subscribe(
      (data)=>{
        this.email = data[0]['email']
        this.full_name = data[0]['full_name']
        this.password = data[0]['password']
      }
    );
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

  edit_profile() {
    this.us.editProfil(this.email, this.password,this.full_name).subscribe(
      (data) => {
        if (data['result'] == 'success') {
          this.email = '';
          this.password = '';
          this.full_name = '';
          alert("Edit Data Success");
        }
        else {
          this.edit_profile_error = "gagal terubah";
        }
      }
    )
  }
}