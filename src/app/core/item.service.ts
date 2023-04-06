import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = 'http://localhost:3000/shopItemsData';
  products : any[] = [];

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get(this.baseUrl).pipe(map((myproduct:any) => {
      this.products = myproduct;
      return myproduct;
      console.log(myproduct);
    }));
  }
}
