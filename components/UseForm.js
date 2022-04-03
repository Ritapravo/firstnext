import React from 'react';
import { useState } from 'react';
import formstyle from './../styles/EmployeeForm.module.css'

const UseForm = (initialValues) => {

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) =>{
        
        const name = e.target.name;
        const value = e.target.type==='checkbox' ? e.target.checked :e.target.value;
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        handleInputChange
    }
}




const Form = (props) => {
    return (
        <form className={formstyle.root}>
            {props.children}
        </form>
    )
}

export  {UseForm, Form};