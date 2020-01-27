import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';

// libs
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// pages
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { AuthorComponent } from './pages/author/author.component';
import { RegComponent } from './pages/auth/reg/reg.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RecoveryComponent } from './pages/auth/recovery/recovery.component';

// parts
import { NavComponent } from './parts/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    P404Component,
    AuthorComponent,
    NavComponent,
    RegComponent,
    LoginComponent,
    RecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
