import React from 'react';
import styled from '@emotion/styled';

const CssMain = props => {
    return (
        <React.Fragment>
            <DescriptionWrapper>
                <DescriptionTitle className="title">CSS를 공부하면서 이것저것 적어놓은 곳</DescriptionTitle>
            </DescriptionWrapper>
        </React.Fragment>
    );
};

const DescriptionWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 88%;
    padding: 7rem 5rem 3rem 35rem;
    margin-bottom: 3rem;
`;

const DescriptionTitle = styled.h4`
    margin: 5rem 0 3rem 0;
    font-size: 3rem;
    text-align: center;
`;

export default CssMain;
