import { ProductService } from "../services/product-service"

// This tells TypeScript what services we are registering
export type ServiceTypes = {
    products: ProductService
}