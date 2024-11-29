"use client";

import React from 'react';
import Link from 'next/link';
import PageLayout from '@components/layout/page-layout';
import TextEditor from '@components/shared/text-editor';
import SectionLayout from '@components/layout/section-layout';
import withProtectedRoute from '@utils/withProtectedRoute';
import BlogImageUploader from '@components/features/admin/blog-image-uploader';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '@components/shared';
import { useCreateBlogMutation } from '@api/blogs-api';
import { toast } from 'react-toastify';



interface IFormInput {
    title: string,
    description?: string,
    content: string,
    read_time: number,
}

const AdminBlogsCreate: React.FC = () => {
    const router = useRouter();

    const [imageId, setImageId] = React.useState<number | string | null>(null);

    const [createBlog, { isLoading, isError, isSuccess }] = useCreateBlogMutation();

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
            await createBlog({
                cover: imageId,
                ...data,
            }).unwrap();
            toast.success('Blog has been created!');
            onResetData();
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'An unexpected error occurred');
        }
    };


    const onResetData = () => {
        reset();
        router.push('/admin/blogs')
    }


    return (
        <PageLayout>
            <SectionLayout noYPadding>
                <div>
                    <nav className="text-sm flex justify-start items-center text-gray-600 space-x-3">
                        <Link href="/" className="hover:text-primary">Home Page</Link>
                        <span className="text-lg">&gt;</span>
                        <Link href={`/admin/blogs`} className="hover:text-primary">Admin Blogs</Link>
                        <span className="text-lg">&gt;</span>
                        <span>Blog Create</span>
                    </nav>
                    <div className='flex items-center justify-between py-5'>
                        <h2 className="text-[1.7rem] leading-[2.5rem] md:text-[2.5rem] text-center font-semibold text-primaryDark">
                            Create Blog
                        </h2>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout noYPadding>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="pb-5 text-start space-y-1 space-y-5">
                        <BlogImageUploader setImageId={setImageId} />

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
                                initialValue=' '
                                register={register}
                                setValue={setValue}
                            />
                        </div>
                    </div>
                    <div className='flex gap-3 border-t justify-end py-3'>
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
                </form>
            </SectionLayout>
        </PageLayout>
    );
};

export default withProtectedRoute(AdminBlogsCreate);
