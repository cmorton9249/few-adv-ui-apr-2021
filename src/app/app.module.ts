import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeRepairsComponent } from './containers/home-repairs/home-repairs.component';
import { HomeRepairEntryComponent } from './components/home-repair-entry/home-repair-entry.component';
import { HomeRepairListComponent } from './components/home-repair-list/home-repair-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HomeRepairsComponent,
    HomeRepairEntryComponent,
    HomeRepairListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
