"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";

const AddNews = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { mutate: addNews, isMutating } = useApi("/api/news", "POST", { queryKey: ['news'] });

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
    <div className="w-7/12 mx-auto mt-20 text-black">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <input {...register("headline")} className="px-3 py-2 border rounded-lg" placeholder="Enter News Headline..." />
        <select {...register("type")} className="px-3 py-2 border rounded-lg">
          <option value="">Choose News Type</option>
          <option value="International">International</option>
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Politics">Politics</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
        </select>
        <textarea {...register("description")} rows="5" className="px-3 py-2 border rounded-lg" placeholder="Enter News Description..." />

        <div>
          <label className="text-sm font-medium">Upload News Banner</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="px-3 py-2 border rounded-lg" />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={isMutating}>
          {isMutating ? "Adding..." : "Add News"}
        </button>
      </form>
    </div>
  );
};

export default AddNews;
