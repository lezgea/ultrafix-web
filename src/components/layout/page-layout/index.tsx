import { FC, memo } from 'react';


interface IPageLayout {
    title?: string,
    largeYPadding?: boolean,
    children: React.ReactNode,
}

const PageLayout: FC<IPageLayout> = ({
    children,
    title,
    largeYPadding,
}) => {

    return (
        <div className={`min-h-screen flex flex-col ${largeYPadding ? ' py-[100px] lg:py-20' : 'py-[50px] lg:py-10'}`}>
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <main id="main-content" className="w-full">
                {
                    !!title &&
                    <h1 className="sr-only">{title}</h1>
                }
                {children}
            </main>
        </div>
    );
};

export default memo(PageLayout);