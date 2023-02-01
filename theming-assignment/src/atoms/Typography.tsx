import {Typography} from '@mui/material'

import {ThemeProvider, createTheme} from '@mui/material';
import {  theme} from './theme.d'
// const theme = createTheme({
//   typography: {
//     h4: {
//       fontFamily: ['Graphik Semi-bold'].join(','),
//       fontSize: '40px',
//       lineHeight: '54px'
//     },
//     h6: {
//       fontFamily: ['Graphik Semi-bold'].join(','),
//       fontSize: '24px',
//       lineHeight: '34px'
//     },
//     subtitle1: {
//       fontFamily: ['Graphik Semi-bold'].join(','),
//       fontSize: '20px',
//       lineHeight: '28px'
//     },
//     subtitle2: {
//       fontFamily: ['Graphik Regular'].join(','),
//       fontSize: '20px',
//       lineHeight: '28px'
//     },
//     body1: {
//       fontFamily: ['Graphik Semi-bold'].join(','),
//       fontSize: '16px',
//       lineHeight: '22px'
//     },
//     body2: {
//       fontFamily: ['Graphik Regular'].join(','),
//       fontSize: '16px',
//       lineHeight: '22px'
//     },
//     button: {
//       fontFamily: ['Graphik Semi-bold'].join(','),
//       fontSize: '14px',
//       lineHeight: '42px'
//     },
//     caption1: {
//       fontFamily: 'Graphik Medium',
//       fontSize: '14px',
//       lineHeight: '16px'
//     },
//     caption2: {
//       fontFamily: 'Graphik Regular',
//       fontSize: '14px',
//       lineHeight: '16px'
//     },
//     overline: {
//       fontFamily: ['Graphik Regular'].join(','),
//       fontSize: '12px',
//       lineHeight: '14px'
//     },

//   }
// })

export const TypographyTheme = () => {
    return (
        <ThemeProvider theme={theme}>
        <Typography variant='h4'>heading h4</Typography>
        <Typography variant='h6'>heading h6</Typography>
        <Typography variant='subtitle1'>subtitle 1</Typography>
        <Typography variant='subtitle2'>subtitle 2</Typography>
        <Typography variant='caption1'>caption1 </Typography>
        </ThemeProvider>
    )
}