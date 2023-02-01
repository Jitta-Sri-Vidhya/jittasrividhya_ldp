import { Typography } from '@mui/material';

interface Props {
    variantName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | undefined
    fontweight: "bold" | "bolder" | "light" | undefined
    fontsize?:string
    children: string
}
export const MuiTypography = (props:Props) => {
    return (
        <Typography variant={props.variantName} fontWeight={props.fontweight} fontSize={props.fontsize}>{props.children}</Typography>
    )
}