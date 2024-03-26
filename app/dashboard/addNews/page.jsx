"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

const AddNews = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the preview and the base64-encoded image
        setImage(btoa(reader.result))
      };

      reader.readAsBinaryString(file);
    }
  };


  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:3001/api/news", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({...data,image}),
      });

      console.log(res);

      if (res.ok) {
        router.push("/dashboard");
      } else {
        throw new Error("Failed to create a news");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-7/12 mx-auto mt-20">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <input {...register("headline")} className="px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2" placeholder="Enter News Headline..." />
        <select {...register("type")} className="px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
          <option value="">Choose News Type</option>
          <option value="International">International</option>
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Politics">Politics</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
        </select>
        <textarea {...register("description")} rows="5" className="px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2" placeholder="Enter News Description..." />

        <div className="grid w-full items-center gap-3">
          <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Upload News Banner</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" />
        </div>

        <input type="submit" className="bg-primary p-2 rounded cursor-pointer" />
      </form>
    </div>
  );
};

export default AddNews;
