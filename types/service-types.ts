import { MessageService } from "../services/message-service"
import { ProductService } from "../services/product-service"

// This tells TypeScript what services we are registering
export type ServiceTypes = {
    messages: MessageService
    products: ProductService
}