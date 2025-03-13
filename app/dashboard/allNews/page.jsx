"use client";
import React from "react";
import { useApi } from "@/hooks/useApi";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";

const TABLE_HEAD = ["SL", "Image", "Headline", "Type", "Description", "Action"];

const AllNews = () => {
  const { data: allNews, error, isLoading } = useApi("/api/news", "GET", { queryKey: ["news"] });

  // if (isLoading) return <p className="text-center text-white">Loading news...</p>;
  if (error) return <p className="text-center text-red-500">Error loading news: {error.message}</p>;

  return (
    <div>
      <Breadcrumb
        label="All News"
      />
      <div className="overflow-x-auto shadow-md">
        <table className="w-full min-w-[800px] text-sm text-center text-gray-300">
          <thead>
            <tr className="bg-gray-900 text-white uppercase text-xs border border-gray-700">
              {TABLE_HEAD.map((head) => (
                <th key={head} className="px-4 py-3">
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {allNews?.map((item, index) => (
              <tr key={item?.id} className="border border-gray-700 hover:bg-gray-800 transition duration-200">
                <td className="p-2 border-r border-gray-700">{index + 1}</td>
                <td className="p-2 border-r border-gray-700">
                  <Image
                    className="h-12 w-20 object-cover rounded mx-auto"
                    src={`data:image/jpeg;base64,${item?.image}`}
                    alt="news"
                    width={100}
                    height={100}
                  />
                </td>
                <td className="p-2 border-r border-gray-700">{item?.headline}</td>
                <td className="p-2 border-r border-gray-700">{item?.type}</td>
                <td className="p-2 border-r border-gray-700 truncate max-w-[200px]">{item?.description}</td>
                <td className="p-2 border-r border-gray-700">
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-lg transition">
                    Edit
                  </button>
                  <button className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-lg transition ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllNews;
