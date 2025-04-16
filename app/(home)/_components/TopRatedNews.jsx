import React from 'react';
import LatestNewsCard from './LatestNewsCard';
import { latestNewsItems } from '../_lib/data';

const TopRatedNews = () => {
    return (
        <div>
            <h1 className='left-news-title'>Top rated</h1>
            <div className='mt-6 flex flex-col gap-4'>
                {
                    latestNewsItems.slice(0, 4).map((item, i) => (
                        <LatestNewsCard key={i} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default TopRatedNews;