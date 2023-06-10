import { Product } from "../interfaces/product"

export class ProductService {
    products: Product[] = []

    async find() {
        return this.products
    }

    async create(data: Partial<Product>) {
        const product: Product = {
            id: this.products.length,
            name: data.name ?? '',
            description: data.description ?? ''
        }

        this.products.push(product)

        return product
    }
}