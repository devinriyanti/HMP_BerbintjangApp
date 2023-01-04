import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage-angular';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-composeemail',
  templateUrl: './composeemail.component.html',
  styleUrls: ['./composeemail.component.scss'],
  providers: [DatePipe]
})

export class ComposeemailComponent implements OnInit {
  senderName: string = "";
  recipentName: string = "";
  subjectEmail: string = "";
  bodyEmail: string = "";
  timeStamp: string = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en');
  
  sendEmail() {
    this.es.newEmail(this.senderName, this.recipentName,
    this.subjectEmail,this.bodyEmail,this.timeStamp).subscribe(
    (data) => {
       if(data["result"] == "success"){
        alert("Email berhasil terkirim");
       }
       else
       {
         alert("Email gagal terkirim");
       }
     });
    }
  constructor(private storage: Storage,public es:EmailService,private datePipe: DatePipe) { }
  async ngOnInit() {
    this.senderName= await this.storage.get('user_email');
  }
}

