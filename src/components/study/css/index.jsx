import React from 'react';
import {
    DescriptionWrapper, //
    DescriptionTitle,
} from 'assets/style/DescriptionStyle';

const CssMain = props => {
    return (
        <React.Fragment>
            <DescriptionWrapper>
                <DescriptionTitle className="title">CSS를 공부하면서 이것저것 적어놓은 곳</DescriptionTitle>
            </DescriptionWrapper>
        </React.Fragment>
    );
};

export default CssMain;
