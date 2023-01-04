import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailModel } from '../email.model';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-detailemail',
  templateUrl: './detailemail.component.html',
  styleUrls: ['./detailemail.component.scss'],
})
export class DetailemailComponent implements OnInit {
  id_email: number;
  sender_email: string = "";
  recipent_email: string = "";
  subject: string = "";
  body_email: string = "";
  time_stamp: string = "";
  starEmail = "";
  color = "";
  btnColor1 = "warning";
  btnColor2 = "danger";
  btnColor3 = "success";

  refresh(event: any) {
    setTimeout(() => {
      event.target.complete();
      var id: number = this.route.snapshot.params['id'];
      this.es.detailEmail(id).subscribe(
        (data) => {
          this.sender_email = data[0]['sender_email']
          this.recipent_email = data[0]['recipent_email']
          this.subject = data[0]['subject']
          this.body_email = data[0]['body_email']
          this.time_stamp = data[0]['time_stamp']
          this.starEmail = data[0]['starred']
          console.log(this.starEmail)
        }
      );
    }, 1000);
  }

  starred() {
    this.es.setStarred(this.id_email).subscribe
      ((data) => {
        if (data['result'] == 'success') {
          this.es.detailEmail(this.id_email).subscribe(
            (data) => {
              this.sender_email = data[0]['sender_email']
              this.recipent_email = data[0]['recipent_email']
              this.subject = data[0]['subject']
              this.body_email = data[0]['body_email']
              this.time_stamp = data[0]['time_stamp']
              this.starEmail = data[0]['starred']
              console.log(this.starEmail)
            }
          );
        }
        else {
          alert("gagal terubah");
        }
      }
      );
  }

  unstarred() {
    this.es.setUnstarred(this.id_email).subscribe
      ((data) => {
        if (data['result'] == 'success') {
          this.es.detailEmail(this.id_email).subscribe(
            (data) => {
              this.sender_email = data[0]['sender_email']
              this.recipent_email = data[0]['recipent_email']
              this.subject = data[0]['subject']
              this.body_email = data[0]['body_email']
              this.time_stamp = data[0]['time_stamp']
              this.starEmail = data[0]['starred']
            }
          );
        }
        else {
          alert("gagal terubah");
        }
      }
      );
  }

  spam() {
    this.es.setSpam(this.id_email).subscribe
      ((data) => {
        if (data['result'] == 'success') {
          alert("Spam Data");
        }
        else {
          alert("Gagal terubah");
        }
      }
      );
  }

  deleteM() {
    var id: number = this.route.snapshot.params['id'];
    this.es.deleteMessage(id).subscribe(
      (data) => {
        if (data['result'] == ['success']) {
          alert('Delete Success');
          this.router.navigateByUrl('/email');
        }
        else {
          alert('ERROR');
        }
      }
    );
  }

  constructor(public es: EmailService, public route: ActivatedRoute, private router: Router) { }

  public id: any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    var id: number = this.route.snapshot.params['id'];
    this.id_email = id;
    this.es.detailEmail(id).subscribe(
      (data) => {
        this.sender_email = data[0]['sender_email']
        this.recipent_email = data[0]['recipent_email']
        this.subject = data[0]['subject']
        this.body_email = data[0]['body_email']
        this.time_stamp = data[0]['time_stamp']
        this.starEmail = data[0]['starred']
        console.log(this.starEmail)
      }
    );

    this.es.readMessage(id).subscribe(
      (data) => {
      }
    );
  }
}