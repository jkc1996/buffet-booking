import { Component, OnInit } from '@angular/core';
import { BookingService } from './../booking.service';
import { BuffetModel } from './../buffetModel';

@Component({
  selector: 'app-buffet-details',
  templateUrl: './buffet-details.component.html',
  styleUrls: ['./buffet-details.component.css']
})
export class BuffetDetailsComponent implements OnInit {
  bookingdata: BuffetModel;
  errorMessage: any;
  submitted = false;
  id = '';
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  }
  getdetails(id) {
    console.log(id);
    this.bookingService.getDetails(id).subscribe(
      (data: BuffetModel) => {
        this.bookingdata = data;
        console.log("User Login: " + this.bookingdata.login);
        console.log("Bio: " + this.bookingdata.bio);
        console.log("Company: " + this.bookingdata.company);
      },
      error => this.errorMessage = <any>error);
  }
}