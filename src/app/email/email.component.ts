// import { Component, OnInit } from '@angular/core';
// import { EmailService } from '../email.service';
// import { EmailModel } from '../email.model';

// @Component({
//   selector: 'app-email',
//   templateUrl: './email.component.html',
//   styleUrls: ['./email.component.scss'],
// })
// export class EmailComponent implements OnInit {
//   email = [];
//   listEmail() {
//   	this.es.emailList().subscribe(
//        (data)=> {
//         this.email=data;
// 	   });
//   };
//   constructor(public es: EmailService) { }

//   ngOnInit() {
//     this.listEmail();
//   }
// }
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { EmailModel } from '../email.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  email = [];
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
  	this.es.emailList(this.login, this.cari).subscribe(
       (data)=> {
        this.email=data['data'];
	   });
  };

  constructor(public es: EmailService, private storage:Storage) { }

  async ngOnInit() {
    this.login = await this.storage.get('user_email');
    this.listEmail();
  }
}