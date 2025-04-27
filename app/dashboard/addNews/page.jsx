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

const AddNews = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { mutate: addNews, isMutating } = useApi("/api/news", "POST", { queryKey: ["news"] });

  const { user } = useSelector((state) => state.auth);

  const [image, setImage] = useState(null);

  const onSubmit = (data) => {
    addNews(
      { ...data, image, authorName: user?.name, authorEmail: user?.email },
      {
        onSuccess: () => {
          reset();
          setImage(null);
          showAlert({ title: "Success!", text: "News created successfully." })
        },
      }
    );
  };

  return (
    <>
      <Breadcrumb label="Add News" />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-1/2 mx-auto rounded-lg shadow-lg">
        <Input label="News Headline" register={register} required errors={errors} name="headline" placeholder="Enter News Headline..." />

        <Select
          label="News Type"
          register={register}
          required
          errors={errors}
          name="type"
          options={["International", "Sports", "Entertainment", "Politics", "Education", "Health"]}
        />

        <Textarea label="News Description" register={register} required errors={errors} name="description" placeholder="Enter News Description..." />

        <FileUpload label="Upload News Banner" data={image} setData={setImage} />

        <button
          type="submit"
          className="w-full py-2 bg-orange-900 hover:bg-orange-800 transition text-white rounded-lg disabled:bg-gray-600"
          disabled={isMutating}
        >
          {isMutating ? "Adding..." : "Add News"}
        </button>
      </form>
    </>
  );
};

export default AddNews;
