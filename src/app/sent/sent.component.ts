import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {

  email = [];
  inbox="";
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
  	this.es.sendEmail(this.inbox, this.cari).subscribe(
       (data)=> {
        this.email=data['data'];
	   });
  };
  constructor(public es: EmailService, private storage:Storage) { }

  async ngOnInit() {
    this.inbox = await this.storage.get('user_email');
    this.listEmail();
  }

}
