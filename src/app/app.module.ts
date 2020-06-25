
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RestaurantDirectory } from './restaurantDirectory/restaurantDirectory.component';
//Angular Router Module
import { RouterModule, Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { MustMatchDirective } from './restaurantDirectory/MustMatchDirective';

@NgModule({
  declarations: [
    AppComponent,
    MustMatchDirective,
    RestaurantDirectory
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule,
    RouterModule.forRoot([
      { path:'', component: RestaurantDirectory }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
