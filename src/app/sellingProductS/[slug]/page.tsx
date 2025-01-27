import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Define the Product type directly in this file
interface Product {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  discountPercentage?: number;
  priceWithoutDiscount?: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  badge?: string;
  slug: string;
}

// Define Params interface for dynamic route handling
interface Params {
  slug: string;
}

const ProductPage = async ({ params }: { params: Params }) => {
  const { slug } = params;

  // Fetch product data from Sanity using the slug
  const data: Product | null = await client.fetch(
    `*[_type == "product2" && slug.current == $slug][0] {
      name,
      description,
      "imageUrl": image.asset->url,
      price,
      discountPercentage,
      priceWithoutDiscount,
      rating,
      ratingCount,
      tags,
      badge,
      slug
    }`,
    { slug }
  );

  // Handle the case where no product data is found
  if (!data) {
    return (
      <main className="max-w-5xl my-20 mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-5xl my-20 shadow-xl rounded-lg mx-auto p-6 flex flex-col gap-8 items-center">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src={data.imageUrl}
            alt={data.name}
            height={500}
            width={500}
            className="rounded-lg object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="flex-grow">
          <h2 className="text-3xl font-bold mb-6">{data.name}</h2>
          <p className="text-gray-700 mb-4">{data.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-2">
            ${data.price}
          </p>
          {data.discountPercentage && (
            <p className="text-xl text-red-500 mb-2">
              Discount: {data.discountPercentage}%
            </p>
          )}
          <p className="text-lg text-gray-500">
            Rating: {data.rating} / 5 ({data.ratingCount} reviews)
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
