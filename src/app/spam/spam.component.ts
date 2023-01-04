import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.scss'],
})
export class SpamComponent implements OnInit {

  spamEmail = [];
  login="";
 
  listEmail() {
  	this.es.spamEmail(this.login).subscribe(
       (data)=> {
        this.spamEmail=data['data'];
	   });
  };
  constructor(public es:EmailService, private storage:Storage) { }

  async ngOnInit() {
    this.login = await this.storage.get('user_email');
    this.listEmail();
  }

}