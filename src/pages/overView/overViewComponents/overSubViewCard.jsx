import React from 'react';
import * as S from '../styles/overViewCard';


const AdminDashboardCard = ({ title, rate }) => {

    return (
        <S.SubCardContainer>
            <S.ContentWrapper>
                <S.SubTitle>{title}</S.SubTitle>
                {rate !== undefined && (
                    <div>
                        <div>{rate}</div>
                    </div>
                )}
            </S.ContentWrapper>
        </S.SubCardContainer>
    );
};

export default AdminDashboardCard;
