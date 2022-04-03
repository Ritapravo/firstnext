import React from 'react';
import { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import formstyle from './../styles/EmployeeForm.module.css'
import { UseForm, Form } from './UseForm';
import Controls from './controls/Controls';
import { Button } from '@mui/material';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'others', title: 'Others' },
]

const initialValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

const EmployeeForm = () => {

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

    const handleButtonClick = () =>{
        console.log(values);
    }


    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name='fullName'
                        label='Full Name'
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name='email'
                        label='Email'
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name='gender'
                        label='Gender'
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select 
                        name='departmentId'
                        label='Department ID'
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={genderItems}
                    />
                    
                    <Controls.Checkbox 
                        name='isPermanent'
                        label='Is Permanent'
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Button variant='contained' onClick={handleButtonClick}>Button</Button>
        </Form>
    )
}

export default EmployeeForm;





{/* <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row
                            name='gender'
                            value={values.gender}
                            onChange={handleInputChange}>

                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl> */}