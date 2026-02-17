import {Injectable} from '@angular/core';
import {Product} from '../models/producto.model';

@Injectable ({providedIn:'root'})
export class ProductService{
	private readonly products: Product[] = [
		{
			id: 1,
			name: 'Audifonos',
			price: 599,
			imageUrl: 'ruta_imagen.jpg',
			category: 'Audio',
			description: 'Audifonos inalámbricos',
			inStock: true
		},
		{
			id: 2,
			name: 'Teclado',
			price: 599,
			imageUrl: 'teclado_imagen.jpg',
			category: 'Dispositivos de entrada',
			description: 'Teclado mecánico',
			inStock: true
		},
		{
			id: 3,
			name: 'Micrófono',
			price: 599,
			imageUrl: 'microfono_imagen.jpg',
			category: 'Audio',
			description: 'Micrófono alámbrico HD',
			inStock: false
		}
	];
	getAll():Product[]{
		return this.products;
	}
}