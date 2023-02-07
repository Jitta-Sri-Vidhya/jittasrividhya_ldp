import { Button } from "@mui/material"

interface Prop {
    children: string
    variant: "contained" | "outlined" | "text" | undefined
}

export const ButtonMui = (props:Prop) => {
    return (
        <>
        <Button variant={props.variant}>{props.children}</Button>
        </>
    )
}