import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from './booking.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService) { }

  buffetForm: FormGroup;
  successMessage: string;
  errorMessage: string;
  unamePattern = "^[0-9]*$";

  ngOnInit() {
    this.buffetForm = this.formBuilder.group({
      buffetName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      noOfPlates: ['', [Validators.required,Validators.min(1),Validators.pattern(this.unamePattern)]],
      bookedOn: ['', Validators.required],
    })
  }

  bookBuffet() {  //after subscribing the method we can access success.id
   // console.log(typeof(this.buffetForm.value)); success should be also type of model (success: model) => ... this is called typed response.
    this.bookingService.bookbuffet(this.buffetForm.value).subscribe(
      success=> this.successMessage = success,
      error=> this.errorMessage = <any>error);
    
    }
}
