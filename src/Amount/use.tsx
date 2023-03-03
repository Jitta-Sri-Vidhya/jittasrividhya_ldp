import React , {useState} from 'react'
import {Card, Paper, Slider} from '@mui/material';
import {createTheme, ThemeProvider, colors} from '@mui/material';
import { Typo } from '../atoms/Typo';
import { ButtonMui } from '../atoms/Button';
import {styled} from '@mui/material';
const StyledPaper = styled(Paper)(()=>({
        height:'350px',
        width:'800px',
        margin: '10% 20%',
        padding:'10px 15px 10px 15px'
}))
const StyledCard = styled(Card)(()=>({
    margin: '20px 20px 1px 20px',
    padding:'15px 20px',
    gap:"520px",
    display: 'flex',
    flexDirection: 'row',
}))
const StyledPaperSX = {
    height:'100px',
    padding:'0px 50px'
}
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
    <StyledPaper elevation={2}>
        <Typo Variant='h6' FontFamily='Roboto'>Amount Details</Typo>
        <StyledCard elevation={2}>
            <Typo FontWeight='bold' Variant="h6">`${amount}`</Typo>
            <ButtonMui variant="outlined">Buy max</ButtonMui>
        </StyledCard>

        <Paper sx={StyledPaperSX} elevation={0}>
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

        <StyledCard elevation={2}>
            <Typo Variant='h6' FontWeight= 'bold'>0.0234510</Typo>
            <Typo>BTC</Typo>
        </StyledCard>
    </StyledPaper>
    )
}
