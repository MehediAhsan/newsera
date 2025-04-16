import NewsScroll from '@/components/NewsScroll';
import Banner from '@/components/home/Banner';
import InternationalNews from '@/components/home/InternationalNews';
import TopStories from './_components/TopStories';
import Card from './_components/Card';
import LatestNews from './_components/LatestNews';
import SpecialInfo from './_components/SpecialInfo';
import LatestBlogs from './_components/LatestBlogs';
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
        </div>
      </div>
    </div>
  </main>;
}
