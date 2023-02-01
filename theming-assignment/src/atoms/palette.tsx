import {createTheme, colors, ThemeProvider} from '@mui/material'
import { Box } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#FAFCFF'
        },
        secondary: {
            main:'#46BF31',
            light:'#E9F7EC'
        },
        error: {
            main:'#FFA74F',
            light:'#FFF6ED'
        },
        warning: {
            main:'#B71A33',
            light:'#F3E6EB'
        },
        text: {
            primary: '#B2B2B9',
            secondary: '#7D7D89',
            disabled: '#343446'
        },
        grey: {
            700:'#F2F2F7',
            800:'#ECECF7',
            900:'#B4B4CF',
            A100:'#4B4B60'
        }
    }
    
})

export const PaletteColor = () => {
    return (
        <>
        <ThemeProvider theme={theme}>
            <Box sx={{ color: 'primary.main' }}>primary</Box>
            <Box sx={{ color: 'secondary-main' }}>secondary-main</Box>
            <Box sx={{ color: 'secondary.light' }}>secondary-light</Box>
            <Box sx={{ color: 'error.main' }}>error-main</Box>
            <Box sx={{ color: 'error.light' }}>error-light</Box>
            <Box sx={{ color: 'warning.main' }}>warning-main</Box>
            <Box sx={{ color: 'warning.light' }}>warning-light</Box>
            <Box sx={{ color: 'grey.700' }}>grey1</Box>
            <Box sx={{ color: 'grey.800' }}>grey2</Box>
            <Box sx={{ color: 'grey.900' }}>grey3</Box>
            <Box sx={{ color: 'grey.A100' }}>grey4</Box>
            <Box sx={{ color: 'text.primary' }}>text-primary</Box>
            <Box sx={{ color: 'text.secondary' }}>text-secondary</Box>
            <Box sx={{ color: 'text.disabled' }}>text-disabled</Box>
            </ThemeProvider>
        </>
    )
}