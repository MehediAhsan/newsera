"use client";
import React from "react";
import { useApi } from "@/hooks/useApi";
import Image from "next/image";

const AllNews = () => {
  const { data: allNews, error, isLoading } = useApi("/api/news",'GET', { queryKey: ['news'] });

  if (isLoading) return <p>Loading news...</p>;
  if (error) return <p>Error loading news: {error.message}</p>;

  return (
    <div className="mt-12 shadow-sm rounded-lg">
      <table className="text-sm text-left table-auto w-full mx-auto overflow-x-scroll">
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
          {allNews?.map((news, idx) => (
            <tr key={idx}>
              <td className="p-4">
                <Image
                  className="h-20 w-20 object-cover"
                  src={`data:image/jpeg;base64,${news?.image}`}
                  alt="news"
                  width={100}
                  height={100}
                />
              </td>
              <td className="px-6 py-4">{news.headline}</td>
              <td className="px-6 py-4">{news.type}</td>
              <td className="px-6 py-4">{news.description}</td>
              <td className="text-right px-6">
                <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                  Edit
                </button>
                <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllNews;
