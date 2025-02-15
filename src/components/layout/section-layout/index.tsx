import { FC, memo } from 'react';



interface ISectionLayout {
    title?: string,
    description?: string,
    noYPadding?: boolean,
    scrollId?: string,
    children: React.ReactNode,
}

const SectionLayout: FC<ISectionLayout> = ({
    children,
    title,
    description,
    noYPadding,
    scrollId,
}) => {

    return (
        <section id={scrollId} className={`w-full ${noYPadding ? '' : 'pt-20 md:py-20'} px-5 md:px-10`}>
            <div className="relative w-full flex flex-col container mx-auto max-w-[1200px] gap-10">
                {
                    (!!title || !!description) &&
                    <div className='flex flex-col items-center space-y-2'>
                        {!!title && (
                            <h2 className="md:max-w-[80%] text-[1.7rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[4rem] text-center font-semibold text-primaryDark">
                                {title}
                            </h2>
                        )}
                        {
                            !!description &&
                            <p className="text-sm font-light text-center text-gray-500 md:px-20">{description}</p>
                        }
                    </div>
                }
                {children}
            </div>
        </section>
    );
};

export default memo(SectionLayout);
