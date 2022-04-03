import React from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@mui/material';
import formstyle from './../../styles/EmployeeForm.module.css'

const RadioGroup = (props) => {

    const { name, label, value, onChange, items } = props;
    return (
        <FormControl className={formstyle.input}>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                
                {items.map(
                    (item, index) => (
                        <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                    )
                )}

                {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
            </MuiRadioGroup>
        </FormControl>
    )
}

export default RadioGroup;