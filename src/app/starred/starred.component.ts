import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss'],
})
export class StarredComponent implements OnInit {

  starredEmail = [];
  login="";

  cari:string="";

  search(event:any){
    let value = event.target.value;
    this.cari = value;
    this.listEmail();
  }

  refresh(event:any){
    setTimeout(()=>{
      event.target.complete();
      this.listEmail();
    },1000);
  }
 
  listEmail() {
  	this.es.starredEmail(this.login, this.cari).subscribe(
       (data)=> {
        this.starredEmail=data['data'];
	   });
  };
  constructor(public es:EmailService, private storage:Storage) { }

  async ngOnInit() {
    this.login = await this.storage.get('user_email');
    this.listEmail();
  }
}
