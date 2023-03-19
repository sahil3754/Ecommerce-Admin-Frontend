import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   data:Array<any>=[]
   main_table=true;
   update_table=false;




  name!:String;
  category!:String;
  image!:String;
  description!:String;
  price!:Number;
  stock!:Number;
  new_data:Array<any>=[
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
   
  constructor(private product:ProductService,private route:Router) { 
    this.get_Product()
  }
 

  ngOnInit(): void {
  }


  get_Product(){
    this.product.get_product()
    .subscribe((ds:any)=>{
      this.data=ds
    })
  }



  Update(id:string){
    
    this.new_data[0].product_Name=this.update_name;
    this.new_data[0].product_Price=this.update_price;
    this.new_data[0].product_Stock=this.update_stock;
    this.new_data[0].product_Category=this.update_category;
    this.new_data[0].product_Description=this.update_description;
    this.new_data[0].product_Image=this.update_image;
    // console.log(this.dasas)
    this.product.Update_Products(id,this.new_data[0])
    console.log("data is updated")
     this.main_table=true
     this.update_table=false
     setTimeout(() => {
      this.get_Product()
    }, 1000);
  }


  Edit(id:string,names:string,prices:Number,stocks:Number,category:string,description:string,image:string){
    this.main_table=false
    this.update_table=true
    this.update_name=names
    this.update_price=prices
    this.update_stock=stocks
    this.update_category=category
    this.update_description=description
    this.update_image=image


    
  }


  Delete(id:string){
    this.product.Delete_Products(id);
    setTimeout(() => {
      this.get_Product()
    }, 1000);
  }
 


}
