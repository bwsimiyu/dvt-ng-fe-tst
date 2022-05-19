import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImports } from './imports/material';
import { IndexComponent } from './components/index/index.component';
import { ArtistComponent } from './components/artist/artist.component';
import { FormatNumberPipe } from './pipes/format-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ArtistComponent,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...MaterialImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
