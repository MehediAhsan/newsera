"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useApi } from "@/hooks/useApi";
import Breadcrumb from "@/components/common/Breadcrumb";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import FileUpload from "@/components/ui/FileUpload";
import { showAlert } from "@/utils/sweetAlert";
import { useSelector } from "react-redux";

const categoryOptions = ["Technology", "Business", "Politics", "World", "Climate", "Culture", "Sports", "General"];
const statusOptions = ["draft", "pending_review", "published", "archived"];

const AddNews = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      category: "Technology",
      status: "draft",
      tags: "ai,newsroom,product",
    },
  });
  const { mutate: addNews, isMutating } = useApi("/api/news", "POST", { queryKey: ["news"] });

  const { user } = useSelector((state) => state.auth);

  const [image, setImage] = useState(null);

  const onSubmit = (data) => {
    const payload = {
      title: data.title || data.headline,
      headline: data.headline || data.title,
      category: data.category,
      type: data.category,
      excerpt: data.excerpt || data.description,
      description: data.description || data.excerpt,
      content: data.content || data.description || data.excerpt,
      status: data.status,
      tags: data.tags,
      featuredImage: image || data.featuredImage,
      image: image || data.featuredImage,
      author: user?.userId || '000000000000000000000000',
      authorName: user?.name || data.authorName || 'NewsEra Staff',
      authorEmail: user?.email || data.authorEmail || 'editor@newsera.com',
      readTime: Number(data.readTime) || 5,
      locale: data.locale || 'bd',
      isBreaking: Boolean(data.isBreaking),
      isFeatured: Boolean(data.isFeatured),
    };

    addNews(payload, {
      onSuccess: () => {
        reset();
        setImage(null);
        showAlert({ title: "Success!", text: "News created successfully." });
      },
    });
  };

  return (
    <>
      <Breadcrumb label="Add News" />

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex w-full max-w-3xl flex-col gap-5 rounded-[30px] border border-white/10 bg-slate-950 p-6 shadow-2xl shadow-slate-950/30">
        <div className="mb-2 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-300">Publishing</div>
            <h2 className="mt-2 text-2xl font-black text-white">Create a story</h2>
          </div>
          <div className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
            {user?.role || 'editor'}
          </div>
        </div>

        <Input label="News headline" register={register} required errors={errors} name="title" placeholder="Enter a premium headline..." />

        <div className="grid gap-5 md:grid-cols-2">
          <Select
            label="Category"
            register={register}
            required
            errors={errors}
            name="category"
            options={categoryOptions}
          />

          <Select
            label="Status"
            register={register}
            required
            errors={errors}
            name="status"
            options={statusOptions}
          />
        </div>

        <Textarea label="Short excerpt" register={register} required errors={errors} name="excerpt" placeholder="Write a concise deck for the story..." />
        <Textarea label="Full story" register={register} required errors={errors} name="content" placeholder="Write the full article content here..." />
        <Input label="Tags" register={register} errors={errors} name="tags" placeholder="ai,product,markets" />
        <Input label="Read time (minutes)" register={register} errors={errors} name="readTime" placeholder="5" />

        <FileUpload label="Upload News Banner" data={image} setData={setImage} />

        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:opacity-95 disabled:bg-slate-600"
          disabled={isMutating}
        >
          {isMutating ? "Publishing..." : "Publish story"}
        </button>
      </form>
    </>
  );
};

export default AddNews;
