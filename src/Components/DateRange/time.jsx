import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function BasicTimePicker({ onChange }) {
    const handleTimeChange = (time) => {
        onChange(time); // Call the onChange callback function with selected time
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
                <TimePicker 
                    label="Select Time"
                    onChange={handleTimeChange} // Pass the handleTimeChange function
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
