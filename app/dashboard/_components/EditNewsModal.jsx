"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useApi } from "@/hooks/useApi";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import FileUpload from "@/components/ui/FileUpload";
import Modal from "@/components/common/Modal";
import { showAlert } from "@/utils/sweetAlert";

const categoryOptions = ["Technology", "Business", "Politics", "World", "Climate", "Culture", "Sports", "General"];
const statusOptions = ["draft", "pending_review", "published", "archived"];

const EditNewsModal = ({ isOpen, onClose, newsItem }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { mutate: updateNews, isMutating } = useApi(`/api/news`, "PUT", { queryKey: ["news"] });

    const [image, setImage] = useState(newsItem?.image || newsItem?.featuredImage || null);

    useEffect(() => {
        if (newsItem) {
            setValue("title", newsItem.title || newsItem.headline || '');
            setValue("category", newsItem.category || newsItem.type || 'General');
            setValue("status", newsItem.status || 'draft');
            setValue("excerpt", newsItem.excerpt || newsItem.description || '');
            setValue("content", newsItem.content || newsItem.description || '');
            setValue("tags", Array.isArray(newsItem.tags) ? newsItem.tags.join(', ') : '');
            setValue("readTime", newsItem.readTime || 5);
            setImage(newsItem.image || newsItem.featuredImage || null);
        }
    }, [newsItem, setValue]);

    const onSubmit = (data) => {
        updateNews(
            {
                _id: newsItem._id,
                title: data.title,
                category: data.category,
                status: data.status,
                excerpt: data.excerpt,
                description: data.description || data.excerpt,
                content: data.content || data.excerpt,
                tags: data.tags,
                type: data.category,
                featuredImage: image,
                image,
                readTime: Number(data.readTime) || 5,
            },
            {
                onSuccess: () => {
                    onClose();
                    showAlert({ title: "Success!", text: "News updated successfully." });
                },
            }
        );
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Edit News">
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex w-full flex-col gap-5">
                <Input label="News headline" register={register} required errors={errors} name="title" placeholder="Enter News Headline..." />

                <div className="grid gap-5 md:grid-cols-2">
                    <Select label="Category" register={register} required errors={errors} name="category" options={categoryOptions} />
                    <Select label="Status" register={register} required errors={errors} name="status" options={statusOptions} />
                </div>

                <Textarea label="Short excerpt" register={register} required errors={errors} name="excerpt" placeholder="Enter News Description..." />
                <Textarea label="Full story" register={register} required errors={errors} name="content" placeholder="Write the updated article content..." />
                <Input label="Tags" register={register} errors={errors} name="tags" placeholder="ai,product,markets" />
                <Input label="Read time" register={register} errors={errors} name="readTime" placeholder="5" />

                <FileUpload label="Upload News Banner" data={image} setData={setImage} />

                <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 font-semibold text-white transition hover:opacity-95 disabled:bg-slate-600"
                    disabled={isMutating}
                >
                    {isMutating ? "Updating..." : "Update News"}
                </button>
            </form>
        </Modal>
    );
};

export default EditNewsModal;
