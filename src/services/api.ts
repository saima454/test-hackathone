"use server"

import { client } from "@/sanity/lib/client";

async function uploadImageToSanity(imageUrl: string) {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`Image upload failed: ${response.statusText}`);
        }
        const blob = await response.blob();
        const asset = await client.assets.upload("image", blob);
        return asset;

        
    } catch (error) {
        console.log("Image upload failed.", error);
        throw error;
    }
}

export async function fetchData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const products = await response.json();
        console.log("Fetched products:", products);

        const uploadPromises = products.map(async (product: { id: string; title: string; category: string; price: number; discountPersentage: number; image: string; description: string; rating: { rate: number; count: number } }) => {
            const imageAsset = await uploadImageToSanity(product.image);

            const sanityProduct = {
                _type: "product",
                _id: `product-${product.id}`,
                name: product.title,
                category: product.category,
                price: product.price,
                discountPersentage: product.discountPersentage,
                tags: product.category ? [product.category] : [],
                image: {
                    _type: "image",
                    asset: {
                        _type: "reference",
                        _ref: imageAsset._id,
                    }
                },
                description: product.description,
                rating: product.rating?.rate || 0,
                ratingCount: product.rating?.count || 0,
            };
            await client.createOrReplace(sanityProduct);
        });

        await Promise.all(uploadPromises);
    } catch (error) {
        console.log("Data fetching failed", error);
        throw error;
    }
}
