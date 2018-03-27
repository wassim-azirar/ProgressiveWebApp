import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { DataService } from './services/data.service';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeolocationService } from './services/geolocation.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule
  } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import 'hammerjs';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'coffee/:id', component: CoffeeComponent }
];

@NgModule({
  declarations: [AppComponent, ListComponent, CoffeeComponent, LoginComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
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
  providers: [
    GeolocationService,
    DataService,
    HttpClient,
    AuthService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
