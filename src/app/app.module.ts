import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeolocationService } from './services/geolocation.service';
import { environment } from '../environments/environment';
import { ListComponent } from './components/list/list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatSnackBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'coffee/:id', component: CoffeeComponent }
];

@NgModule({
  declarations: [AppComponent, ListComponent, CoffeeComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule,
    MatCardModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GeolocationService, DataService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
