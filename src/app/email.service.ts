import { Injectable } from '@angular/core';
import { EmailModel } from './email.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
// import { DeleteModel } from './deleteModel';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  emailList(recipent_email:string, cari:string): Observable<any> {
    let body = new HttpParams();
    body = body.set('email_penerima', recipent_email)
    body = body.set('cari',cari)
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/email.php",body);
  }

  sendEmail(sender_email:string, cari:string): Observable<any> {
    let body = new HttpParams();
    body = body.set('sender_email', sender_email)
    body = body.set('cari',cari)
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/send.php",body);
  }

  detailEmail(id:number): Observable<any> {
    let body = new HttpParams();
    body = body.set('id', id)
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/detailemail.php",body);
  }

  spamEmail(recipent_email:string):Observable<any>{
    let body = new HttpParams();
    body = body.set('recipent_email',recipent_email)
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/spam.php",body);
  }

  starredEmail(recipent_email:string, cari:string):Observable<any>{
    let body = new HttpParams();
    body = body.set('recipent_email',recipent_email)
    body = body.set('cari', cari)
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/starred.php",body);
  }

  newEmail(sender_email: string, recipent_email: string, subject: string, body_email: string, time_stamp: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('sender_email', sender_email);
    body = body.set('recipent_email', recipent_email);
    body = body.set('subject', subject);
    body = body.set('body_email', body_email);
    body = body.set('time_stamp', time_stamp);
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/send_email.php", body);
  }

  replyEmail(recipentMail: string, bodyMail: string) {
    let body = new HttpParams();
    body = body.set('recipentMail', recipentMail);
    body = body.set('bodyMail', bodyMail);
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/reply.php", body);
  }

  deleteMessage(id: number) {
    let body = new HttpParams();
    body = body.set('id', id);
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/delete_email.php", body);
  }

  readMessage(id: number) {
    let body = new HttpParams();
    body = body.set('id', id);
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/read.php", body);
  }

  loginService(): Observable<any> {
    return this.http.get("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/email.php");
  }

  setStarred(message_id: number) {
    let body = new HttpParams();
    body = body.set('message_id', message_id);
    body = body.set('starred', '1');
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/set_starred.php", body);
  }

  setUnstarred(message_id: number) {
    let body = new HttpParams();
    body = body.set('message_id', message_id);
    body = body.set('starred', '0');
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/set_unstarred.php", body);
  }

  setSpam(message_id: number) {
    let body = new HttpParams();
    body = body.set('message_id', message_id);
    body = body.set('spam', '1');
    return this.http.post("https://ubaya.fun/hybrid/160419158/ionic/berbintjang/set_spam.php", body);
  }
  constructor(private http: HttpClient) { }
}
