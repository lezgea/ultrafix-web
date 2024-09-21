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
        <section id={scrollId} className={`w-full ${noYPadding ? '' : 'py-20'} px-10`}>
            <div className="relative w-full flex flex-col container mx-auto max-w-[1200px] space-y-10">
                {
                    (!!title || !!description) &&
                    <div className='space-y-2'>
                        {!!title && (
                            <h2 className="text-[2.5rem] leading-[4rem] text-center font-semibold text-gray-800">
                                {title}
                            </h2>
                        )}
                        {
                            !!description &&
                            <p className="text-md font-light text-center text-gray-500 px-20">{description}</p>
                        }
                    </div>
                }
                {children}
            </div>
        </section>
    );
};

export default memo(SectionLayout);
