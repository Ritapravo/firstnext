import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import React from 'react'

function Checkbox(props) {
    const {name, label, value, onChange} = props;

    // const convertToDefEventPara = (name, value) => {
    //     console.log(name, value);
    //     target : {
    //         name, value
    //     }
    // }

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    color='primary'
                    checked={value}
                    onChange={onChange}
                    // onChange={ e => onChange(convertToDefEventPara(name, e.target.checked))}
                />}
                label={label}
            >
            </FormControlLabel>
        </FormControl>
    )
}

export default Checkbox