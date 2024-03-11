import Banner from '@/components/home/Banner';
import NewsScroll from './../components/NewsScroll';
import InternationalNews from '@/components/home/InternationalNews';
export default function Home() {
  return <main>
    <NewsScroll></NewsScroll>
    <Banner></Banner>
    <InternationalNews/>
  </main>;
}
