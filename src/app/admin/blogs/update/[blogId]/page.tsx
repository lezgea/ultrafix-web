"use client";

import React from 'react';
import Link from 'next/link';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { useParams, useRouter } from 'next/navigation';
import withProtectedRoute from '@utils/withProtectedRoute';
import BlogImageUploader from '@components/features/admin/blog-image-uploader';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ConfirmationModal, FormInput } from '@components/shared';
import TextEditor from '@components/shared/text-editor';
import { toast } from 'react-toastify';
import { useDeleteBlogMutation, useGetBlogInfoQuery, useUpdateBlogMutation } from '@api/blogs-api';



interface IFormInput {
    title: string,
    description: string,
    content: string,
    read_time: number,
}


const AdminBlogsUpdate: React.FC = () => {
    const router = useRouter();
    const { blogId } = useParams();
    const bId = Array.isArray(blogId) ? blogId[0] : blogId;

    const [imageId, setImageId] = React.useState<number | string | null>(null)
    const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);

    const { data: blogInfo, error, isLoading, refetch } = useGetBlogInfoQuery({ id: bId }, { skip: !bId });
    const [updateBlog] = useUpdateBlogMutation();
    const [deleteBlog] = useDeleteBlogMutation();


    const validationSchema = Yup.object().shape({
        // title: Yup.string().required(t('titleIsRequired')),
        // description: Yup.string().required(t('descriptionIsRequired'))
    });


    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<IFormInput>({
        // resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });


    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            await updateBlog({
                id: bId,
                ...data,
            }).unwrap();
            toast.success('Blog has been updated');
            onResetData();
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'An unexpected error occurred');
        }
    };


    const onDeleteBlog = async () => {
        try {
            await deleteBlog({ id: bId })
            setShowDeleteModal(false);
            toast.success('Blog has been deleted!');
            onResetData();
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'An unexpected error occurred');
        }
    }

    const onResetData = () => {
        reset();
        router.push('/admin/blogs')
    }


    React.useEffect(() => {
        if (blogInfo) {
            setValue('title', blogInfo?.data?.title);
            setValue('description', blogInfo?.data?.description);
            setValue('content', blogInfo?.data?.content);
            setValue('read_time', blogInfo?.data?.read_time);
        }
    }, [blogInfo])


    return (
        <PageLayout>
            <SectionLayout noYPadding>
                <div>
                    <nav className="text-sm flex justify-start items-center text-gray-600 space-x-3">
                        <Link href="/" className="hover:text-primary">Home Page</Link>
                        <span className="text-lg">&gt;</span>
                        <Link href={`/admin/blogs`} className="hover:text-primary">Admin Blogs</Link>
                        <span className="text-lg">&gt;</span>
                        <span>Blog Update</span>
                    </nav>
                    <div className='flex items-center justify-between py-5'>
                        <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2.5rem] text-center font-semibold text-primaryDark">
                            Update Blog
                        </h2>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout noYPadding>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="pb-5 text-start space-y-1 space-y-5">
                        <BlogImageUploader blogId="5" image={blogInfo?.data?.cover?.url} setImageId={setImageId} />

                        <div className="space-y-5 select-none">
                            <FormInput
                                type='text'
                                name='title'
                                placeholder="Blog Title"
                                register={register}
                                errors={errors}
                            />
                            <FormInput
                                isTextarea
                                type='text'
                                name='description'
                                placeholder="Description"
                                register={register}
                                errors={errors}
                            />
                            <TextEditor
                                name='content'
                                initialValue={blogInfo?.data?.content}
                                register={register}
                                setValue={setValue}
                            />
                        </div>
                    </div>
                    <div className="py-3 flex w-full gap-3 border-t justify-between">
                        <button
                            type="button"
                            onClick={() => setShowDeleteModal(true)}
                            className="flex w-40 text-center items-center justify-center px-4 py-3 text-white transition-all bg-red rounded-lg hover:bg-primaryDark hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                        >
                            Delete
                        </button>
                        <div className='flex gap-3'>
                            <Link href='/admin/blogs'>
                                <button
                                    type="button"
                                    onClick={onResetData}
                                    className="flex w-40 text-center items-center justify-center px-4 py-3 text-gray-500 transition-all bg-gray-100 rounded-lg hover:bg-primaryDark hover:text-white shadow-neutral-300 hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:shadow-none"
                                >
                                    Cancel
                                </button>
                            </Link>

                            <button
                                type='submit'
                                className="flex w-40 text-center items-center justify-center px-4 py-3 text-white transition-all bg-primary rounded-lg hover:bg-primaryDark hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </SectionLayout>
            <ConfirmationModal
                visible={showDeleteModal}
                onConfirm={onDeleteBlog}
                onClose={() => setShowDeleteModal(false)}
            />
        </PageLayout>
    );
};

export default withProtectedRoute(AdminBlogsUpdate);
