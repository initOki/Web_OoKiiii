import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HTMLMain = props => {
    return (
        <React.Fragment>
            <DescriptionWrapper>
                <DescriptionTitle>HTML을 공부하면서 이것저것 적어놓은 곳</DescriptionTitle>
            </DescriptionWrapper>
        </React.Fragment>
    );
};

const DescriptionWrapper = styled.div`
    /* display: flex;
    align-items: flex-start;
    justify-content: flex-start; */
    width: 100%;
    min-height: 88%;
    margin-bottom: 3rem;
    padding: 7rem 5rem 3rem 35rem;
`;

const DescriptionTitle = styled.h4`
    margin: 5rem 0 3rem 0;
    font-size: 3rem;
`;

export default HTMLMain;
