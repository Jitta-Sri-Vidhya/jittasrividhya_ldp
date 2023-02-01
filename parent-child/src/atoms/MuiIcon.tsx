import { IconButton } from "@mui/material";

interface Props {
    Icon: JSX.Element
}

export const MuiIcon = (props:Props) => {
    return (
        <IconButton aria-label="icon">{props.Icon}</IconButton>
    )
}