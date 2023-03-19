import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  id!:string
  name!: string
  price!: Number
  stock!: Number 
  description!: string
  image!: string 
  category!: string
  constructor(private http: HttpClient) { }


  get_product() {
    return this.http.get("http://localhost:3000/allproducts")
  }

  Add_Products(data:any) {

    return this.http.post("http://localhost:3000/addproducts",data)

  }


  Update_Products(id:string, new_data:any) {
    this.http.put("http://localhost:3000/allproducts/"+id,new_data).subscribe()
  }


  Delete_Products(id:String){
    return this.http.delete("http://localhost:3000/allproducts/"+id).subscribe()
  }



}
