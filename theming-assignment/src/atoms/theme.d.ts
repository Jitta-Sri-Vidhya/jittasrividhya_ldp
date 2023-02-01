import { TypographyStyle } from '@mui/material';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import {ThemeProvider, createTheme} from '@mui/material';
import React from 'react';


declare module '@mui/materials/styles' {
    interface TypographyVariants {
        caption1 : {
            fontFamily: React.CSSProperties,
            fontSize: React.CSSProperties,
            lineHeight: React.CSSProperties
        }
        caption2? : TypographyStyle;
    }
    interface TypographyVariantsOptions {
        caption1? :  {
            fontFamily: React.CSSProperties,
            fontSize: React.CSSProperties,
            lineHeight: React.CSSProperties
        }
        caption2? : TypographyStyleOptions;
    }
    
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      caption1: true;
      caption2: true;
    }
  }


export const theme = createTheme({
  typography: {
    h4: {
      fontFamily: ['Graphik Semi-bold'].join(','),
      fontSize: '40px',
      lineHeight: '54px'
    },
    h6: {
      fontFamily: ['Graphik Semi-bold'].join(','),
      fontSize: '24px',
      lineHeight: '34px'
    },
    subtitle1: {
      fontFamily: ['Graphik Semi-bold'].join(','),
      fontSize: '20px',
      lineHeight: '28px'
    },
    subtitle2: {
      fontFamily: ['Graphik Regular'].join(','),
      fontSize: '20px',
      lineHeight: '28px'
    },
    body1: {
      fontFamily: ['Graphik Semi-bold'].join(','),
      fontSize: '16px',
      lineHeight: '22px'
    },
    body2: {
      fontFamily: ['Graphik Regular'].join(','),
      fontSize: '16px',
      lineHeight: '22px'
    },
    button: {
      fontFamily: ['Graphik Semi-bold'].join(','),
      fontSize: '14px',
      lineHeight: '42px'
    },
    caption1: {
      fontFamily: 'Graphik Medium',
      fontSize: '14px',
      lineHeight: '16px'
    },
    caption2: {
      fontFamily: 'Graphik Regular',
      fontSize: '14px',
      lineHeight: '16px'
    },
    overline: {
      fontFamily: ['Graphik Regular'].join(','),
      fontSize: '12px',
      lineHeight: '14px'
    },

  }
})