"use client"

import { useUploadBlogImageMutation, useUploadFileMutation } from '@api/upload-api';
import React from 'react';
import { UseFormSetValue } from 'react-hook-form';




interface ImageUploaderProps {
    blogId?: string,
    image?: string,
    setImageId: (val: number | string | null) => void,
}

const BlogImageUploader: React.FC<ImageUploaderProps> = ({ blogId, image, setImageId }) => {
    const [uploadedImage, setUploadedImage] = React.useState<File | null>(null);
    const [initialImage, setInitialImage] = React.useState<string>('');

    const [uploadFile, { isLoading }] = useUploadFileMutation();
    const [uploadBlogImage] = useUploadBlogImageMutation();

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (!uploadedFile) {
            return;
        }

        setUploadedImage(uploadedFile);

        try {


            if (!!blogId) {
                const formData = new FormData();
                formData.append("id", blogId);
                formData.append("type", "images");
                formData.append("file", uploadedFile);
                let response = await uploadBlogImage({ file: formData }).unwrap();
                setImageId(response.data.id)
            } else {
                const formData = new FormData();
                formData.append("file", uploadedFile);
                let response = await uploadFile({ file: formData }).unwrap();
                setImageId(response.data.id)
            }
        } catch (error) {
            console.log(error)
        }
    };

    const onDeleteImage = () => {
        setInitialImage('');
        setImageId(null);
    }

    React.useEffect(() => {
        if (image) setInitialImage(image);
    }, [image])

    return (
        <div>
            {
                (uploadedImage || initialImage) ?
                    <>
                        <div
                            id="FileUpload"
                            className="relative w-full h-60 flex items-center justify-center content-center cursor-pointer appearance-none rounded-2xl border-2 border-dashed border-gray-300 dark:bg-meta-4 overflow-hidden"
                        >
                            {
                                !!uploadedImage
                                    ?
                                    <img
                                        src={URL.createObjectURL(uploadedImage)} // Create a URL for the uploaded image
                                        alt="Uploaded Preview"
                                        className="w-full h-full object-cover"
                                    />
                                    :
                                    <img
                                        src={initialImage} // Create a URL for the uploaded image
                                        alt="Uploaded Preview"
                                        className="w-full h-full object-cover"
                                    />
                            }
                            <button
                                onClick={onDeleteImage}
                                className="absolute z-2330 w-auto text-center items-center px-6 py-2.5 text-white transition-all bg-gray-700 rounded-xl sm:w-auto hover:bg-dark shadow-neutral-300 focus:shadow-none animate-button"
                            >
                                Delete Image
                            </button>
                        </div>
                        {
                            uploadedImage &&
                            <p className="text-gray-400 text-sm">Uploaded Image: {uploadedImage.name}</p>
                        }
                    </>

                    :
                    <div
                        id="FileUpload"
                        className="relative w-full h-60 inline-block items-center content-center cursor-pointer appearance-none rounded-2xl border-2 border-dashed border-gray-300 hover:border-primary hover:bg-gray-50 p-[4rem] sm:py-7.5"
                    >
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                            onChange={handleImageChange}
                        />
                        <div className="flex flex-col items-center justify-between h-full text-gray-400 font-light">
                            <p className="text-md">Click to Upload Image</p>
                            <p className='text-xl text-gray-300'>OR</p>
                            <p className="text-md">Drag and Drop</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default BlogImageUploader;
