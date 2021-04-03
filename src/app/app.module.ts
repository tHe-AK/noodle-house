import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoodleCardComponent } from './shared/components/noodle-card/noodle-card.component';
import { HomeComponent } from './home/home.component';
import { NoodleService } from './shared/services/noodle.service';
import { HttpClientModule } from '@angular/common/http';
import { NoodleDetailComponent } from './noodle-detail/noodle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NoodleCardComponent,
    HomeComponent,
    NoodleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NoodleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
