import getData from '@/components/common/serverData';
import React from 'react';

const AllNews = async () => {
    const {allNews} = await getData('/api/news');

    // console.log(allNews);

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
                                        src={`data:image/jpeg;base64,${news?.image}`}
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