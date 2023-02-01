import { Button } from '@mui/material';

interface Props {
    variantname: "text" | "contained" | "outlined" | undefined
    children:string
}
export const MuiButton= (props:Props) => {
    return (
        <Button variant={props.variantname} sx={{
            width:'400px',
            padding:'10px',
            margin:'20px 70px'
        }}>{props.children}</Button>
    )
}