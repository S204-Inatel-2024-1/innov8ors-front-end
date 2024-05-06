import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { ProjCreatorComponent } from './proj-creator/proj-creator.component';

const materialModules = [
  CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ...materialModules,
  ],
  exports:[
    ...materialModules
  ],
  providers: [],
  declarations: [ AppComponent, AuthComponent, ProjCreatorComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }