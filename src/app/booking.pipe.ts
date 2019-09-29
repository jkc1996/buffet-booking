import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booking'
})
export class BookingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value > 5) {
      return 'plates are 5 or grater than that'
    }
    else {
      return 'plates are less than 5'
    }
  }

}