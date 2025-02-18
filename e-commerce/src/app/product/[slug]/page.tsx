
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
        <div className="mt-[30px] md:mt-[70px] mb-[100px] md:mb-[200px]">
            <div className="flex flex-col md:flex-row gap-[50px] md:gap-[100px] w-[90%] m-auto">
                <div>
                {product.image && (
                    <Image src={urlFor(product.image).url()} alt="image" width={653} height={653}></Image>
                )}
                </div>
                <div>
                    <h1 className="text-[30px] md:text-[48px] md:mb-[60px] md:w-[367px] md:h-[96px] md:leading-[48px] text-left text-[#111111]">{product.productName}</h1>
                    <p className="w-[100%] px-2 md:px-0 md:w-[374.92px] mb-[20px] md:mb-[50px] text-[13px] md:text-[15px] md:leading-[28px] text-[#111111] text-left">{product.description}</p>
                    <h3 className="md:w-[229px] mb-[10px] md:mb-[30px] md:h-[34px] text-[20px] md:text-[36px] md:leading-[28px] text-[#111111] text-left">₹ {product.price}</h3>
                    <AddToCartButton product={product} />
                </div>
            </div>
        </div>
    );
};