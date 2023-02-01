import { MuiIcon } from '../atoms/MuiIcon';
import { List, ListItem, ListItemAvatar,ListItemText, Avatar} from '@mui/material';
import { MuiTypography } from '../atoms/MuiTypography';
import { Box } from '@mui/material';
interface Props {
    // PrimaryText: string
    // SecondaryText: string
    // Icon: React.ElementType
    Icon: JSX.Element
    children?: JSX.Element|JSX.Element[];
    heading: string
    body: string
  }
export const MuiIconTypo = (props:Props) => {
    return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MuiIcon Icon={props.Icon} ></MuiIcon>
          </Avatar>
        </ListItemAvatar>
        <Box>
        <ListItemText><MuiTypography variantName="body1" fontweight='light' fontsize="15px">{props.heading}</MuiTypography></ListItemText>
        <ListItemText><MuiTypography variantName="body1" fontweight='bold' fontsize="20px">{props.body}</MuiTypography></ListItemText>
        </Box>
      </ListItem>
    </List>
    )
}
//        <ListItemText  secondary={props.SecondaryText} primary={props.PrimaryText}/>
