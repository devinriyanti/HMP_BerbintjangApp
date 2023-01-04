import { Component, OnInit } from '@angular/core';
import { EmailModel } from '../email.model';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage-angular';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
})

export class ReplyComponent implements OnInit {
  from: string = "";
  bodyMail: string = "";
  to: string = "";
  from_db: string = "";
  timeStamp: string = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en');

  sendMail() {
    this.from_db = this.from;
    this.es.newEmail(this.from_db, this.to, "balasan", this.bodyMail, this.timeStamp).subscribe(
      (data) => {
        if (data["result"] == "success") {
          alert("Email berhasil terkirim");
          this.router.navigateByUrl('/email');
        }
        else {
          alert("Email gagal terkirim");
        }
      }
    );
  }

  constructor(private storage: Storage, public es: EmailService, public route: ActivatedRoute, private router: Router) { }

  // id: number = 0;
  public id: any;
  async ngOnInit() {
    this.from = await this.storage.get('user_email');
    this.id = this.route.snapshot.paramMap.get('id');
    alert(this.id);
    this.es.detailEmail(this.id).subscribe(
      (data)=>{
        this.to = data[0]['sender_email']
      }
    );
  }
}
