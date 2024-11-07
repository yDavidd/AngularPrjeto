import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    
    {id:1, name:'O Livro de Eli', price:50.0, image:'../eli.png'},
    {id:2, name:'A Garota do Livro', price:30.5,image:'../garota.png'},
    {id:3, name:'A cinco passos de você', price:61.0,image:'../cinco.png'},
    {id:4, name:'Capítulos Mortais', price:50.0, image:'../mortais.png'},
    {id:5, name:'A Garota do Livro', price:30.5,image:'../garota.png'},
    {id:6, name:'A Historia do Amor', price:61.0,image:'../historia.png'},
    {id:7, name:'Finalmente Livres ', price:50.0, image:'../livres.png'},
    {id:8, name:'Matilda', price:30.5,image:'../matilda.png'},
    {id:9, name:'Livres como o Vento', price:61.0,image:'../vento.png'},
    {id:10, name:'Acrescente Amor', price:61.0,image:'../amor.png'},
  ];
  getProducts():Iproducts[]{
    return this.products;
  }
}
