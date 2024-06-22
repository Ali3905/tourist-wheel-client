import React from 'react';
import * as S from '../styles/overViewCard';
import { FaMoneyBill, FaShoppingCart, FaStore, FaUsers, FaHandshake, FaPercentage } from 'react-icons/fa';

const AdminDashboardCard = ({ title, content, rate }) => {

    const iconMap = {
        "Invested": <FaMoneyBill />,
        "Online Sale": <FaShoppingCart />,
        "Offline Sale": <FaStore />,
        "Vendors": <FaUsers />,
        "Partner": <FaHandshake />,
        "Profit": <FaPercentage />,
    };
    return (
        <S.CardContainer>
            <S.ContentWrapper>
                <S.Title>{title}</S.Title>
                <div>{iconMap[title]}</div>
            </S.ContentWrapper>
            <S.ContentWrapper>
                <S.Value>{content}</S.Value>
                {rate !== undefined && (
                    <div>
                        <div>{rate}$</div>
                    </div>
                )}
            </S.ContentWrapper>
        </S.CardContainer>
    );
};

export default AdminDashboardCard;
