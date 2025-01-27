
import { client } from "@/sanity/lib/client";
import { Product } from "@/app/types/product";
import Image from "next/image";
import { notFound } from "next/navigation"; // For handling not-found cases

// Dynamic route parameter type
interface Params {
  slug: string;
}

// Page component for the product
const ProductPage = async ({ params }: { params: Params }) => {
  const { slug } = params;

  // Fetch product data from Sanity
  const product: Product | null = await client.fetch(
    `*[_type == "product2" && slug.current == $slug][0] {
      name,
      description,
      "image": image.asset->url,
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

  // Redirect to a 404 page if no product is found
  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto my-20">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg object-cover"
      />
      <p>{product.description}</p>
      <p className="text-xl font-semibold">Price: ${product.price}</p>
      {product.discountPercentage && (
        <p className="text-lg text-red-500">
          Discount: {product.discountPercentage}%
        </p>
      )}
      <p>Rating: {product.rating} / 5</p>
    </div>
  );
};

// Fetch dynamic routes for all product slugs
export async function generateStaticParams(): Promise<Params[]> {
  const products: Array<{ slug: { current: string } }> = await client.fetch(
    `*[_type == "product2"]{
      "slug": slug.current
    }`
  );

  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

export default ProductPage;
