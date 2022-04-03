import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import { Paper } from '@mui/material';

const Employee = () => {
  return (
    <div >
        <Paper style={{width:'94%', margin:'3%', padding:'10px'}} >
            <EmployeeForm/>
        </Paper>
        
    </div>
  )
}

export default Employee;