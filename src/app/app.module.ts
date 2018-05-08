import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetailsComponent } from '../app/details/app.details.component';
import { TemplatesComponent } from "../app/templates/app.templates.component";
import {ModalModule} from "ng2-modal";
import { RouterModule, Routes } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
