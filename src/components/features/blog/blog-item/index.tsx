import { RootState } from "@store/store";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";


interface IBlogItemsProps {
    id: string | number,
    image: string,
    title: string,
    description: string,
};


const BlogItem: React.FC<IBlogItemsProps> = (props) => {
    let { id, title, description, image } = props

    const { isAuthenticated } = useSelector((state: RootState) => state.user);
    const imageUrl = "svg/noimg.svg";


    return (
        <Link href={'#'} className="h-md rounded-custom_md select-none cursor-pointer overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg group active:shadow-none bg-white">
            <div className="relative overflow-hidden">
                <Image
                    src={imageUrl}
                    height="300"
                    width="300"
                    className="w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 h-[15rem] object-cover"
                    alt={title}
                    priority={true}
                />
            </div>
            <div className="flex flex-col px-5 py-4 space-y-5 text-start items-between">
                <div className="space-y-2">
                    <h3 className="text-xl font-medium text-customBlue-900 truncate-text-1">{title}</h3>
                    <p className="text-sm text-gray-500 truncate-text description-font">{description}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            {/* <div className="relative w-[35px] h-[35px] min-w-[35px] min-h-[35px] rounded-full overflow-hidden">
                                <Image
                                    src={"/png/user.png"}
                                    alt="Avatar"
                                    fill={true}
                                    className="object-cover"
                                    priority={true}
                                />
                            </div> */}
                            {/* <p className="text-md text-gray-500 truncate-text">by <strong className="font-medium">{userDto?.fullName}</strong></p> */}
                        </div>
                        {/* <p className="text-md text-primary truncate-text font-regular">{!!datasetFileDownloadDto?.length ? `${datasetFileDownloadDto?.length} File` : ` `}</p> */}
                    </div>
                </div>
                {/* <div className="flex justify-between items-center">
                </div> */}
            </div>
        </Link>
    );
};

export default BlogItem;
