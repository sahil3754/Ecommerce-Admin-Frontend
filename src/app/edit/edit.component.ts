import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  new_data:any=[]
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


  update_name!:String;
  update_price!:Number;
  update_stock!:Number;
  update_category!:String;
  update_description!:String;
  update_image!:String;


  constructor(private product:ProductService) { 
    this.get_Product()
  
  
  }
       
  ngOnInit(): void {
  }

  get_Product(){
    this.product.get_product()
    .subscribe((data:any)=>{
      this.new_data=data
    })
  }



  Edit_Product(id:string){
    this.data[0].product_Name=this.update_name;
    this.data[0].product_Price=this.update_price;
    this.data[0].product_Stock=this.update_stock;
    this.data[0].product_Description=this.update_description;
    this.data[0].product_Category=this.update_category;
    this.data[0].product_Image=this.update_image;
    this.product.Update_Products(id,this.data[0]);
    console.log("data Updated");
  }


}
