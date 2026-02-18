import { Component, Input } from '@angular/core';
import {Product} from '../../models/producto.model'

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})

export class ProductoCardComponent{
  @Input({required:true})product!:Product;
  
}