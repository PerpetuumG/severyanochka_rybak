import Slider from '@/components/Slider/Slider';
import Actions from '@/components/Actions';
import NewProducts from '@/components/NewProducts';

export default function Home() {
  return (
    <main className={'w-full mx-auto mb-20'}>
      <Slider />

      <div
        className={'px-[max(12px,calc((100%-1208px)/2))] flex flex-col gap-y-20 md:md-25 xl:mb-30'}
      >
        <Actions />
        <NewProducts />
      </div>
    </main>
  );
}
