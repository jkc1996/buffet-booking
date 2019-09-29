import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BuffetModel } from './buffetModel';

@Injectable()
export class BookingService {

  constructor(private http: HttpClient) { }

  geturl = 'http://localhost:3020/Book';

  bookbuffet(data): Observable<any> {    // observable type should be of buffetbooking model
    console.log(data);
    return this.http.post('http://localhost:3020/addBook', data);
  }

  getDetails(id: number): Observable<BuffetModel> {     //here also observable type should be of buffetbooking model
    console.log(id, 'hello');
    //const url = `${this.geturl}/${id}`;
    //console.log(url);
    return this.http.get<BuffetModel>('https://api.github.com/users/seeschweiler');
  }
}