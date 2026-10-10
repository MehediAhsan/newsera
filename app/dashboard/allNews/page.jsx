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
            showAlert({ title: "Success!", text: "News deleted successfully." });
          },
        }
      );
    }
  };

  if (error) return <p className="text-center text-red-500">Error loading news: {error.message}</p>;

  return (
    <>
      <Breadcrumb label="All News" />

      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/30">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm text-slate-200">
            <thead>
              <tr className="bg-slate-900 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                {["SL", "Image", "Headline", "Category", "Status", "Action"].map((head) => (
                  <th key={head} className="px-4 py-3">{head}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {isPending && (
                <tr>
                  <td colSpan="6" className="py-4 text-center">
                    <div className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                      Loading...
                    </div>
                  </td>
                </tr>
              )}
              {!isPending && allNews?.map((item, index) => (
                <tr key={item?._id} className="border-t border-white/10 bg-slate-950/60">
                  <td className="px-4 py-3 text-slate-400">{index + 1}</td>
                  <td className="px-4 py-3">
                    {item?.image ? (
                      <Image className="h-12 w-20 rounded-xl object-cover" src={item.image} alt={item.title || item.headline} width={100} height={100} />
                    ) : "N/A"}
                  </td>
                  <td className="px-4 py-3 font-medium text-white">{item?.title || item?.headline}</td>
                  <td className="px-4 py-3 text-slate-300">{item?.category || item?.type}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-200">
                      {item?.status || 'draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-4">
                      <FilePen className="cursor-pointer text-blue-400" size={18} onClick={() => openModal(item)} />
                      <Trash2 className="cursor-pointer text-red-400" size={18} onClick={() => handleDelete(item._id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && <EditNewsModal isOpen={isModalOpen} onClose={closeModal} newsItem={selectedNews} />}
    </>
  );
};

export default AllNews;
