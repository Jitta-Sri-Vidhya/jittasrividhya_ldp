import React , {useState} from 'react'
import {Paper, Slider} from '@mui/material';
import {createTheme, ThemeProvider, colors} from '@mui/material';
import { Typo } from '../atoms/Typo';
import { ButtonMui } from '../atoms/Button';
const theme= createTheme({
    palette:{
        primary:{
            main:colors.grey[600]
        }
    }
})

export const UseState = () => {
    const [amount, setAmount] = useState<number>(34000.00)

    const handleAmount = (event: Event, newValue: number| number[]) => {
        setAmount(newValue as number);
    };
    
    return (
    <Paper sx={{
        height:'350px',
        width:'800px',
        margin: '10% 20%',
        padding:'10px 15px 10px 15px'
    }} elevation={2}>

        <Typo Variant='h6' FontFamily='Roboto'>Amount Details</Typo>

        <Paper sx={{
            margin: '20px 20px 1px 20px',
            padding:'15px 20px',
            display: 'flex',
            gap:62,
            flexDirection: 'row',
        }} elevation={2}>

            <Typo FontWeight='bold' Variant="h6">`${amount}`</Typo>
            <ButtonMui variant="outlined">Buy max</ButtonMui>

        </Paper>

        <Paper sx={{
            height:'100px',
            padding:'0px 50px'
        }} elevation={0}>
            <ThemeProvider theme={theme}>
            <Slider
                color="primary"
                orientation="vertical"
                defaultValue={34000.00}
                aria-label="Amount"
                valueLabelDisplay="auto"
                min={30000}
                max={40000}
                value={amount}
                onChange={handleAmount}
            />
            </ThemeProvider>

        </Paper>

        <Paper sx={{
            margin: '2px 20px 20px 20px',
            padding:'20px 20px',
            display: 'flex',
            gap:70,
            flexDirection: 'row',
        }} elevation={2}>

            <Typo Variant='h6' FontWeight= 'bold'>0.0234510</Typo>
            <Typo>BTC</Typo>

        </Paper>
      
    </Paper>
    )
}