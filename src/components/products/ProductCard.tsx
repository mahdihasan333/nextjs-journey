import { IProduct } from "@/type";
import Image from "next/image";
import Link from "next/link";



export default function ProductCard({product}: {product: IProduct}) {
    return(
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-52 object-contain">
                <Image 
                src={product.image}
                alt={product.product_name}
                width={1500}
                height={800}
                className="rounded-t-lg h-56"
                />
            </div>

            <div>

            </div>
        </div>
    )
}