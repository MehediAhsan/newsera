import NewsScroll from '@/components/NewsScroll';
import TopStories from './_components/TopStories';
import Card from './_components/Card';
import LatestNews from './_components/LatestNews';
import SpecialInfo from './_components/SpecialInfo';
import LatestBlogs from './_components/LatestBlogs';
import TopRatedNews from './_components/TopRatedNews';
import BestNews from './_components/BestNews';
import Coupon from './_components/Coupon';
import DailyNews from './_components/DailyNews';
import TrendingNews from './_components/TrendingNews';
import Subscribe from './_components/Subscribe';
import InternationalNews from './_components/InternationalNews';
import Banner from './_components/Banner';
export default function Home() {
  return <main className='container mx-auto'>
    <div className="mx-6">
      <NewsScroll></NewsScroll>
      <Banner />
      <InternationalNews />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        <div className="col-span-1 flex flex-col gap-5">
          <Card
            img="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={96}
          />
          <LatestNews />
          <SpecialInfo />
          <Card
            img="https://images.unsplash.com/photo-1559631658-9705048d977e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={96}
          />
          <LatestBlogs />
          <TopRatedNews />
        </div>

        <div className="col-span-4">
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-2 row-span-2">
              <BestNews />
            </div>
            <div className="md:col-span-2 lg:col-span-1 flex flex-row justify-between lg:flex-col gap-6">
              <Card
                img="https://images.unsplash.com/photo-1620231151090-fdda59dc7832?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={"h-[200px]"}
              />
              <Card
                img="https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={"h-[200px]"}
              />
            </div>
          </div>

          <div className="my-6 hidden lg:block">
            <Coupon />
          </div>

          <div>
            <DailyNews />
          </div>

          <Card
            img="https://images.unsplash.com/photo-1708381487798-87f5d211b655?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={"h-28"}
          />

          <TrendingNews />
        </div>
      </div>
      <TopStories />
    </div>
    <Subscribe />
  </main>;
}
