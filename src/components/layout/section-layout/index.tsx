import { FC, memo } from 'react';



interface ISectionLayout {
    title?: string,
    children: React.ReactNode,
}

const SectionLayout: FC<ISectionLayout> = ({
    children,
    title,
}) => {

    return (
        <section className="w-full py-10">
            <div className="relative container mx-auto max-w-[1200px]">
                {!!title && (
                    <div className={`flex flex-col`}>
                        <h2>{title}</h2>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default memo(SectionLayout);
