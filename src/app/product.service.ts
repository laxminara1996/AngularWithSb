import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDet } from './product-det';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl:string='http://localhost:8088/';
  constructor(private http:HttpClient) { }
getMessage():Observable<string>{
   return this.http.get<string>(this.baseUrl+'msg');
//console.log(data.subscribe(data=>console.log(data)));
}
getProducts():Observable<ProductDet[]>{
return this.http.get<ProductDet[]>(this.baseUrl+"products");

}

}
