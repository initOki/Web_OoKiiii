import React, { useState, useEffect } from 'react';
import QnAList from './list/QnAList';

const QnA = props => {
    const [state, setState] = useState({});

    const handleClick = () => {
        setState({
            toggleOpen: !state.toggleOpen,
        });
    };

    return (
        <React.Fragment>
            <ul className="list-toggle">
                {QnAList.map((data, index) => {
                    return (
                        <li key={index}>
                            <input type="radio" id={'accordion' + index} name="qna-accordion" />
                            <label htmlFor={'accordion' + index} className="title-qna">
                                {data.title}
                            </label>

                            <div className="accordion-open">
                                <span>{data.description}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
};

export default QnA;
