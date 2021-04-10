import { useReducer, useEffect, createContext } from 'react';
import { createStateFramework } from './utils/createFormAnswersTemplate'

import AreaTest from './components/AreaTest'

export const FormContext = createContext();

export const products = ["Ulgicid", "AminoGuard", "Myozox", "Cetlevo", "Masks"]; // will be filled in the useEffect

const initialState = createStateFramework(products);
const reducer = (state, action) => {
    switch(action.type) {
        case 'TOWN':
            return {...state, town: action.value}
        case 'PHARMACY':
            return {...state, pharmacyName: action.value}
        case 'PRODUCT_AVAILABLE':
            return {
                ...state, 
                products: {
                    ...state.products,
                    [action.productName]: {
                        ...[action.productName],
                        available: action.available,
                    }
                }
            }
        case 'PRODUCT_AVAILABILITY':
            return {
                ...state, 
                products: {
                    ...state.products,
                    [action.productName]: {
                        ...[action.productName],
                        availability: action.availability,
                    }
                }
            }
        case 'PRODUCT_OTC_MOVEMENT':
            return {
                ...state, 
                products: {
                    ...state.products,
                    [action.productName]: {
                        ...[action.productName],
                        otcMovement: action.otcMovement,
                    }
                }
            }
        case 'PRODUCT_PRESCRIPTION_MOVEMENT':
            return {
                ...state, 
                products: {
                    ...state.products,
                    [action.productName]: {
                        ...[action.productName],
                        presciptionMovement: action.presciptionMovement,
                    }
                }
            }
        case 'PRODUCT_PRESCRIPTION_SOURCES':
            return {
                ...state, 
                products: {
                    ...state.products,
                    [action.productName]: {
                        ...[action.productName],
                        presciptionMovementSources: [
                            ...[action.productName].presciptionMovementSources,
                            action.presciptionMovementSource,
                        ]
                    }
                }
            }
        default:
            return state
    }
}

function Root(props) {
    const [formState, dispatch] = useReducer(reducer, initialState)
    
    return (
        <>
            <FormContext.Provider value={{formState: formState, formDispatch: dispatch}}>
                {console.log('formState is: ', formState)}
                <AreaTest />
            </FormContext.Provider>
        </>
    );
}

export default Root;