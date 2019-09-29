import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingService } from './booking.service';
import { BuffetDetailsComponent } from './buffet-details/buffet-details.component';
import { BookingPipe } from './booking.pipe';
import { BuffetBookingComponent } from './buffet-booking/buffet-booking.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  declarations: [ AppComponent, BuffetDetailsComponent, BookingPipe, BuffetBookingComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BookingService]
})
export class AppModule { }
