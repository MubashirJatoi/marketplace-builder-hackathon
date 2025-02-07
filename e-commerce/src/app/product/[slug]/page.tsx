
import Image from "next/image";

import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductPageProps {
    params : Promise<{slug : string}>
}

async function getProduct(slug:  string) : Promise<Product>  {
    return client.fetch(
        groq`*[_type == "product"  && slug.current == $slug][0]{
        _id,
        productName,
        _type,
        image,
        price,
        description,
        category,
        status,
        inventory,
        colors,
        }`, {slug}
    )
}

export default async function ProductPage({params} : ProductPageProps) {

    

    const {slug} = await params;
    const product = await  getProduct(slug)

    return(
        <div className="mt-[120px] mb-[250px]">
            <div className="flex gap-[100px] w-[90%] m-auto">
                <div>
                {product.image && (
                    <Image src={urlFor(product.image).url()} alt="image" width={653} height={653}></Image>
                )}
                </div>
                <div>
                    <h1 className="text-[48px] mb-[60px] w-[367px] h-[96px] leading-[48px] text-left text-[#111111]">{product.productName}</h1>
                    <p className="w-[374.92px] mb-[50px] text-[15px] leading-[28px] text-[#111111] text-left">{product.description}</p>
                    <h3 className="w-[229px] mb-[30px] h-[34px] text-[36px] leading-[28px] text-[#111111] text-left">₹ {product.price}</h3>
                    <AddToCartButton product={product} />
                </div>
            </div>
        </div>
    );
};