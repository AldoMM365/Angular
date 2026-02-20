import { Component, inject } from '@angular/core';
import { ProductoCardComponent } from '../producto/producto.component';
import { toSignal } from '@angular/core/rxjs-interop';
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
  productsService = inject(ProductService);
  products = toSignal<Product[]>(
    this.productsService.getAll()
  );
}
