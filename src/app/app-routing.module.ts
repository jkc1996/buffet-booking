import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuffetDetailsComponent } from './buffet-details/buffet-details.component';
import { BuffetBookingComponent } from './buffet-booking/buffet-booking.component';

const routes: Routes = [
  { path: 'booking', component: BuffetBookingComponent },
  { path: 'details', component: BuffetDetailsComponent },
  { path: '',   redirectTo: '/booking', pathMatch: 'full' },
  { path: '**', redirectTo: '/booking' }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }