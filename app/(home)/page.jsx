import NewsScroll from '@/components/NewsScroll';
import Banner from '@/components/home/Banner';
import InternationalNews from '@/components/home/InternationalNews';
export default function Home() {
  return <main>
    <NewsScroll></NewsScroll>
    <Banner></Banner>
    <InternationalNews/>
  </main>;
}
