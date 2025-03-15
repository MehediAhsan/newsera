"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import FileUpload from "@/components/ui/FileUpload";
import Modal from "@/components/common/Modal";

const EditNewsModal = ({ isOpen, onClose, newsItem }) => {
    const router = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { mutate: updateNews, isMutating } = useApi(`/api/news`, "PUT", { queryKey: ["news"] });

    const [image, setImage] = useState(newsItem?.image || null);

    useEffect(() => {
        if (newsItem) {
            setValue("headline", newsItem.headline);
            setValue("type", newsItem.type);
            setValue("description", newsItem.description);
        }
    }, [newsItem, setValue]);

    const onSubmit = (data) => {
        updateNews(
            { _id: newsItem._id, ...data, image }, 
            {
                onSuccess: () => {
                    onClose();
                },
            }
        );
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Edit News">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mx-auto">
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
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 transition text-white font-semibold rounded-lg disabled:bg-gray-600"
                    disabled={isMutating}
                >
                    {isMutating ? "Updating..." : "Update News"}
                </button>
            </form>
        </Modal>
    );
};

export default EditNewsModal;
