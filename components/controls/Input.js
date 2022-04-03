import React from 'react'
import formstyle from './../../styles/EmployeeForm.module.css'
import { TextField } from '@mui/material';

const Input = (props) => {

    const { name, label, value, onChange } = props;
    return (
        <TextField className={formstyle.input}
            variant='outlined'
            name={name}
            label={label}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;