"use client";
import React, { useState } from "react";
import { useApi } from "@/hooks/useApi";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";
import { FilePen, Trash2 } from "lucide-react";
import EditNewsModal from "../_components/EditNewsModal";
import { showAlert, showConfirmAlert } from "@/utils/sweetAlert";

const AllNews = () => {
  const { data: allNews, error, isPending } = useApi("/api/news", "GET", { queryKey: ["news"] });
  const { mutate: deleteNews } = useApi(`/api/news`, "DELETE", { queryKey: ["news"] });

  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    const result = await showConfirmAlert({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });
    if (result.isConfirmed) {

      deleteNews(
        { _id: id },
        {
          onSuccess: () => {
            showAlert({ title: "Success!", text: "News deleted successfully." })
          },
        }
      );
    }
  };

  if (error) return <p className="text-center text-red-500">Error loading news: {error.message}</p>;

  return (
    <>
      <Breadcrumb label="All News" />

      <div className="overflow-x-auto shadow-md">
        <table className="w-full min-w-[800px] text-sm text-center text-gray-300">
          <thead>
            <tr className="bg-gray-900 text-white uppercase text-xs border border-gray-700">
              {["SL", "Image", "Headline", "Type", "Description", "Action"].map((head) => (
                <th key={head} className="px-4 py-3">{head}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {isPending && (
              <tr>
                <td colSpan="6" className="py-4">
                  <div className="loader"></div>
                </td>
              </tr>
            )}
            {!isPending && allNews?.map((item, index) => (
              <tr key={item?._id} className="border border-gray-700 hover:bg-gray-800 transition duration-200">
                <td className="p-2 border-r border-gray-700">{index + 1}</td>
                <td className="p-2 border-r border-gray-700">
                  {item?.image ? (
                    <Image className="h-10 w-full object-contain rounded mx-auto" src={item?.image} alt="news" width={100} height={100} />
                  ) : "N/A"}
                </td>
                <td className="p-2 border-r border-gray-700">{item?.headline}</td>
                <td className="p-2 border-r border-gray-700">{item?.type}</td>
                <td className="p-2 border-r border-gray-700 truncate max-w-[200px]">{item?.description}</td>
                <td className="p-2 border-r border-gray-700">
                  <div className="flex items-center justify-center gap-4">
                    <FilePen className="text-blue-500 cursor-pointer" size={20} onClick={() => openModal(item)} />
                    <Trash2 className="text-red-500 cursor-pointer" size={20} onClick={() => handleDelete(item._id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && <EditNewsModal isOpen={isModalOpen} onClose={closeModal} newsItem={selectedNews} />}
    </>
  );
};

export default AllNews;
