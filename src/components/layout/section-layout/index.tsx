import { FC, memo } from 'react';



interface ISectionLayout {
    title?: string,
    description?: string,
    noYPadding?: boolean,
    children: React.ReactNode,
}

const SectionLayout: FC<ISectionLayout> = ({
    children,
    title,
    description,
    noYPadding,
}) => {

    return (
        <section className={`w-full ${noYPadding ? '' : 'py-20'} px-10`}>
            <div className="relative w-full flex flex-col container mx-auto max-w-[1200px] space-y-20">
                {
                    (!!title || !!description) &&
                    <div>
                        {!!title && (
                            <h2 className="text-[3rem] leading-[4rem] text-center font-semibold text-gray-800">
                                {title}
                            </h2>
                        )}
                        {
                            !!description &&
                            <p className="text-md text-center text-gray-500 px-20">{description}</p>
                        }
                    </div>
                }
                {children}
            </div>
        </section>
    );
};

export default memo(SectionLayout);
