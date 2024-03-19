"use client";
import React from "react";
import { useForm } from "react-hook-form";

const AddNews = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    console.log(data)
    try {
      const res = await fetch("http://localhost:3000/api/news", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-7/12 mx-auto mt-20">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <input {...register("headline")} className="px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2" placeholder="Type News Headline"/>
        <select {...register("type")} className="px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
        <option value="">Choose News Type</option>
          <option value="female">international</option>
          <option value="male">sports</option>
          <option value="other">health</option>
        </select>
        <input type="submit" className="bg-primary p-2 rounded cursor-pointer" />
      </form>
    </div>
  );
};

export default AddNews;
