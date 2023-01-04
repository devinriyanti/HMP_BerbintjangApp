import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { EmailService } from './email.service';
import {Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Camera } from '@ionic-native/camera/ngx';
import { ProfileComponent } from './profile/profile.component';
import { SpamComponent } from './spam/spam.component';
import { ComposeemailComponent } from './composeemail/composeemail.component';
import { EmailComponent } from './email/email.component';
import { StarredComponent } from './starred/starred.component';
import { DetailemailComponent } from './detailemail/detailemail.component';
import { ReplyComponent } from './reply/reply.component';
import { SentComponent } from './sent/sent.component';

const appRoutes:Routes=[
  {path:'profile', component: ProfileComponent},
  {path:'spam', component: SpamComponent},
  {path:'composeemail', component: ComposeemailComponent},
  {path:'email', component: EmailComponent},
  {path:'starred', component: StarredComponent},
  {path:'detailemail/:id',component:DetailemailComponent},
  {path:'reply/:id', component: ComposeemailComponent},
  {path:'sent', component: SentComponent},
];  

@NgModule({
  declarations: [AppComponent, ProfileComponent, SpamComponent,ComposeemailComponent, StarredComponent,
    SentComponent, EmailComponent,DetailemailComponent, ReplyComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(),HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,
    RouterModule.forRoot(appRoutes)],
  providers: [Camera, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
