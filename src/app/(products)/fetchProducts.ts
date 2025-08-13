import { ProductCardProps } from '@/types/product';

const fetchProductsByCategory = async (category: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=${category}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) throw new Error(`Ошибка получения продуктов ${category}`);
    const products: ProductCardProps[] = await res.json();

    const availableProducts = products.filter((products) => products.quantity > 0);

    return availableProducts;
  } catch (e) {
    console.error('Ошибка при загрузке акционных товаров в Actions: ', e);
    throw e;
  }
};

export default fetchProductsByCategory;
