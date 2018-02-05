import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [UsersService, HttpModule, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }