import Slider from '@/components/Slider/Slider';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main className={'w-full mx-auto mb-20'}>
      <Slider />
      <ProductCard />
    </main>
  );
}
