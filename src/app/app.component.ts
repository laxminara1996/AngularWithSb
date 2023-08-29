import { Component,OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ProductDet } from './product-det';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myapp';

  message:string='';
  productsData:ProductDet[]=[];
  constructor(private service:ProductService){

  }
  ngOnInit(): void {
    this.getMessageFromService();
this.getProducts();
  }
  getMessageFromService(){
    this.service.getMessage().subscribe((data)=>{
      console.log(data);
      this.message=JSON.stringify(data);
    })
  }
  getProducts(){
    this.service.getProducts().subscribe((data)=>this.productsData=data);
  }

}
