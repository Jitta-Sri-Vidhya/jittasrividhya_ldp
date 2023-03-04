import { MuiIcon } from '../atoms/MuiIcon';
import { List, ListItem, ListItemAvatar,ListItemText, Avatar} from '@mui/material';
import { MuiTypography } from '../atoms/MuiTypography';
import { Box } from '@mui/material';
interface Props {
    Icon: JSX.Element
    heading: string
    body: string
    children?: JSX.Element|JSX.Element[];
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
