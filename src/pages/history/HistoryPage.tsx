import React from 'react';
import PageContainer from '../../components/containers/PageContainer';

const HistoryPage = () => {
    return (
        <PageContainer withNavbar withMenu>
            <div className="w-full max-w-[710px] h-full mx-auto px-[10px] pt-[40px] animate-appearance pb-[40px]">
                History
            </div>
        </PageContainer>
    );
};

export default HistoryPage;