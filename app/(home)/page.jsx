import NewsScroll from '@/components/NewsScroll';
import Banner from '@/components/home/Banner';
import InternationalNews from '@/components/home/InternationalNews';
import TopStories from './_components/TopStories';
export default function Home() {
  return <main>
    <NewsScroll></NewsScroll>
    <Banner></Banner>
    <InternationalNews />
    <TopStories />
  </main>;
}
