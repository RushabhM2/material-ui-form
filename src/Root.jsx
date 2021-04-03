import React from 'react';
import { products, createStateFramework } from './utils/createFormAnswersTemplate'

function Root(props) {
    const formAnswers = createStateFramework(products)
    
    return (
        <>
            {console.log('formAnswers', formAnswers)}
            <p>Hello world formAnswers</p>
        </>
    );
}

export default Root;