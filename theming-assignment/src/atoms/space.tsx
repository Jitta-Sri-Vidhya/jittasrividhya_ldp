import {Box} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material'
const theme = createTheme({
    spacing: 4,
})

export const Space = () => {
    return (
        <ThemeProvider theme={theme}>
        <Box  sx={{
            border:1,
            width: '2rem',
            height: '2rem',
            padding: theme.spacing(2)
        }}></Box>
         <Box  sx={{
            border:1,
            width: '2rem',
            height: '2rem',
            padding: theme.spacing(4)
        }}></Box>
         <Box  sx={{
            border:1,
            width: '2rem',
            height: '2rem',
            padding: theme.spacing(6)
        }}></Box>
         <Box  sx={{
            border:1,
            width: '2rem',
            height: '2rem',
            padding: theme.spacing(8)
        }}></Box>
        </ThemeProvider>
    )
}