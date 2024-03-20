'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// const getAllNews = async () => {
//     try {
//         const res = await fetch("http://localhost:3000/api/news", {
//             cache: "no-store",
//         });

//         if (!res.ok) {
//             throw new Error("Failed to fetch news");
//         }

//         return res.json();
//     } catch (error) {
//         console.log("Error loading news: ", error);
//     }
// };

const AllNews = () => {
    const [allNews, setAllNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchNews = () => {
        fetch('http://localhost:3000/api/news')
        .then(res => res.json())
        .then(data => setAllNews(data))
    }

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const res = await fetch("http://localhost:3000/api/news", {
        //             cache: "no-store",
        //         });
        //         if (!res.ok) {
        //             throw new Error("Failed to fetch news");
        //         }
        //         const data = await res.json();
        //         setAllNews(data);
        //     } catch (error) {
        //         setError(error);
        //     } finally {
        //         setLoading(false);
        //     }
        // };
        // fetchData();
        fetchNews();
    }, []);

    console.log(allNews);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error loading news: {error.message}</div>;

    return (
        <div className="mt-12 shadow-sm rounded-lg overflow-scroll">
            <table className="text-sm text-left table-auto w-full mx-auto">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-6"></th>
                        <th className="py-3 px-6">Headline</th>
                        <th className="py-3 px-6">Type</th>
                        <th className="py-3 px-6">Description</th>
                        <th className="py-3 px-6"></th>

                    </tr>
                </thead>
                <tbody className="text-gray-300 divide-y w-full">
                    {
                        allNews?.map((news, idx) => (
                            <tr key={idx}>
                                <td className='p-4'>
                                    <img
                                        className="h-20 w-20 object-cover"
                                        src={`data:image/jpeg;base64,${news.image}`}
                                        alt=""
                                    />
                                </td>
                                <td className="px-6 py-4">{news.headline}</td>
                                <td className="px-6 py-4">{news.type}</td>
                                <td className="px-6 py-4">{news.description}</td>
                                <td className="text-right px-6">
                                    <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Edit
                                    </a>
                                    <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllNews;