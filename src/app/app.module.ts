import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GeolocationService } from './services/geolocation.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
