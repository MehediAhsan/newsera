"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import Breadcrumb from "@/components/common/Breadcrumb"; // Import Breadcrumb

const AddNews = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { mutate: addNews, isMutating } = useApi("/api/news", "POST", { queryKey: ["news"] });

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(btoa(reader.result));
      reader.readAsBinaryString(file);
    }
  };

  const onSubmit = (data) => {
    addNews(
      { ...data, image },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
      }
    );
  };

  return (
    <>
      <Breadcrumb
        label="Add News"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-1/2 mx-auto">
        <input
          {...register("headline")}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
          placeholder="Enter News Headline..."
        />

        <select
          {...register("type")}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
        >
          <option value="">Choose News Type</option>
          <option value="International">International</option>
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Politics">Politics</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
        </select>

        <textarea
          {...register("description")}
          rows="5"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
          placeholder="Enter News Description..."
        />

        <div>
          <label className="text-sm font-medium mb-2 block">Upload News Banner</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 transition text-white font-semibold rounded-lg disabled:bg-gray-600"
          disabled={isMutating}
        >
          {isMutating ? "Adding..." : "Add News"}
        </button>
      </form>
    </>
  );
};

export default AddNews;
