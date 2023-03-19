import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {


  name!:String;
  category!:String;
  image!:String;
  description!:String;
  price!:Number;
  stock!:Number;
  data:Array<any>=[
    {
      product_Name:this.name,
      product_Category:this.category,
      product_Image:this.image,
      product_Description:this.description,
      product_Price:this.price,
      product_Stock:this.stock
    }
  
  ]


  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }

  Add(){
    this.data[0].product_Name=this.name;
    this.data[0].product_Category=this.category;
    this.data[0].product_Image=this.image;
    this.data[0].product_Description=this.description;
    this.data[0].product_Price=this.price;
    this.data[0].product_Stock=this.stock;
    
    this.product.Add_Products(this.data).toPromise();
    console.log(this.data)

  }





}
