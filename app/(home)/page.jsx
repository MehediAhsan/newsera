import NewsScroll from '@/components/NewsScroll';
import Banner from '@/components/home/Banner';
import InternationalNews from '@/components/home/InternationalNews';
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
export default function Home() {
  return <main>
    <NewsScroll></NewsScroll>
    <Banner></Banner>
    <InternationalNews />
    <TopStories />
    <div className="mx-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        <div className="col-span-1 flex flex-col gap-5">
          <Card
            img="https://images.unsplash.com/photo-1521488674203-62bf581664be?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

        <div className="col-span-4 my-6">
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-2 row-span-2">
              <BestNews />
            </div>
            <div className="md:col-span-2 lg:col-span-1 flex flex-row justify-between lg:flex-col gap-6">
              <Card
                img="https://images.unsplash.com/photo-1682364853446-db043f643207?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={"h-[200px]"}
              />
              <Card
                img="https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    </div>
  </main>;
}
