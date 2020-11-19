import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookService } from './BookService.service';
import { RetrievebooksComponent } from './retrievebooks/retrievebooks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RetrievebooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
