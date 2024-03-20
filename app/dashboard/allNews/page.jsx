import Link from 'next/link';
import React from 'react';

const getAllNews = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/news", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch news");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading news: ", error);
    }
};

const AllNews = async () => {

    const { allNews } = await getAllNews();

    console.log(allNews);

    return (
        <div className="mt-12 shadow-sm border rounded-lg">
            <table className="text-sm text-left overflow-x-scroll">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-6">Username</th>
                        <th className="py-3 px-6">Email</th>
                        <th className="py-3 px-6">Position</th>
                        <th className="py-3 px-6">Salary</th>
                        <th className="py-3 px-6"></th>

                    </tr>
                </thead>
                <tbody className="text-gray-300 divide-y">
                    {
                        allNews.map((news, idx) => (
                            <tr key={idx}>
                                <td className="px-6 py-4">{news.headline}</td>
                                <td className="px-6 py-4">{news.type}</td>
                                <td className="px-6 py-4">{news.description}</td>
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