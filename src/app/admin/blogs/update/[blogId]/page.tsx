"use client";

import React from 'react';
import Link from 'next/link';
import PageLayout from '@components/layout/page-layout';
import SectionLayout from '@components/layout/section-layout';
import { AdminBlogsList } from '@components/features/admin';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useRouter } from 'next/navigation';
import withProtectedRoute from '@utils/withProtectedRoute';
import BlogImageUploader from '@components/features/admin/blog-image-uploader';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ConfirmationModal, FormInput } from '@components/shared';
import TextEditor from '@components/shared/text-editor';



interface IFormInput {

}


const AdminBlogsUpdate: React.FC = () => {
    const router = useRouter();

    const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);
    const { isAuthenticated } = useSelector((state: RootState) => state.user);


    const validationSchema = Yup.object().shape({
        // title: Yup.string().required(t('titleIsRequired')),
        // description: Yup.string().required(t('descriptionIsRequired'))
    });


    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<IFormInput>({
        // resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });


    // const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    //     try {
    //         // await createDataset({
    //         //     datasetImageId: imageId,
    //         //     ...data,
    //         //     tags
    //         // }).unwrap();
    //         // toast.success('Dataset has been created');
    //         // setSidebarOpen(false);
    //         // onResetData();
    //     } catch (err: any) {
    //         console.error('Unknown error:', err);
    //         toast.error(err.data?.message || 'An unexpected error occurred');
    //     }
    // };


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
                        {/* <Link
                        href="/admin/blogs/create"
                        className="px-10 h-[45px] flex items-center justify-center font-regmed bg-primary text-white py-2 rounded-lg ring-2 ring-primary hover:shadow-lg hover:shadow-neutral-300 hover:-tranneutral-y-px focus:outline-none focus:ring-2 focus:ring-primaryDark focus:shadow-none focus:bg-primaryDark transition duration-200 ease-in-out transform disabled:bg-gray-400 disabled:ring-gray-400 disabled:cursor-not-allowed"
                    >
                        Create Blog
                    </Link> */}
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout noYPadding>
                <form
                // onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="pb-5 text-start space-y-1 overflow-auto space-y-5">
                        <BlogImageUploader />

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
                                name='description'
                                initialValue=' '
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
                                    // onClick={onCancel}
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
                onConfirm={() => { }}
                onClose={() => setShowDeleteModal(false)}
            />
        </PageLayout>
    );
};

export default withProtectedRoute(AdminBlogsUpdate);
