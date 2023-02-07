import { Typography } from "@mui/material"

interface Prop {
    Variant?:  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | undefined
    FontFamily?:string
    children:string | any[]
    FontWeight?:"bold" | "light" | undefined
}

export const Typo = (props:Prop) => {
    return (
        <>
            <Typography variant={props.Variant} fontFamily={props.FontFamily} fontWeight={props.FontWeight}>{props.children}</Typography>
        </>
    )
} 