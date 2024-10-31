import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'Uma mulher no...', price: 45.50, description: 'Raphael Montes ', image:'../image.png'},
    { id: 2, name: 'A furia', price: 36.27, description: 'Alex Michaelides', image:'../image copy.png'},
    { id: 3, name: 'As musas', price: 45.40, description: 'Alex Michaelide', image:'../image copy 2.png'},
    { id: 1, name: 'Uma familia feliz', price: 41.95, description: 'Raphael Montes', image:'../image copy 3.png '},
    { id: 2, name: 'Bom dia, Veronica', price: 60.5, description: 'Rafael Montes', image:'../image copy 4.png'},
    { id: 3, name: 'A magica mortal', price: 90.0, description: 'Rafael Montes', image:'../image copy 5.png'},
    { id: 1, name: 'A queda da casa...', price: 55.0, description: 'Robert Stevenson', image:'../image copy 6.png'},
    { id: 2, name: 'Imperfeitos', price: 20.5, description: 'Chistina Lauren', image:'../image copy 7.png'},
    { id: 3, name: 'Dayse jones', price: 34.0, description: 'Taylor Jenkins', image:'../image copy 8.png'},
    { id: 1, name: 'O medico e o monstro', price: 45.0, description: 'Robert Stevenson', image:'../image.png'},
  ];

  getProducts(): Iproducts[]{
    return this.products;
  }
}
