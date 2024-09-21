import { FC, memo } from 'react';



interface IPageLayout {
    title?: string,
    children: React.ReactNode,
}

const PageLayout: FC<IPageLayout> = ({
    children,
    title,
}) => {

    return (
        <div className="min-h-screen flex flex-col py-20">
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <main id="main-content" className="w-full">
                {!!title && (
                    <div className={`flex flex-col`}>
                        <h1 className="sr-only">{title}</h1>
                        {/* <SectionHeader
                            {...{
                                pageName,
                                isCenter,
                                isSmallTitle,
                                showAllButtonText,
                                isShowAllButtonVisible,
                            }}
                        /> */}
                    </div>
                )}
                {children}
            </main>
        </div>
    );
};

export default memo(PageLayout);
