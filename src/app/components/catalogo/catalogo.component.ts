import { Component } from '@angular/core';
import { ProductoCardComponent } from '../producto/producto.component'
import { ProductService } from '../../services/productos.service';
import { Product } from '../../models/producto.model';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductoCardComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class Catalogo {
  products: Product[]=[];
  constructor(private productService:ProductService){
    this.products = this.productService.getAll();
  }
}
