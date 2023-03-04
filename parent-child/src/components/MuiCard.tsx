import {Paper, Box, Divider} from '@mui/material';
import { MuiTypography } from '../atoms/MuiTypography';
import { MuiButton } from '../atoms/MuiButton';
import { MuiIcon } from '../atoms/MuiIcon';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Timeline from '@mui/lab/Timeline';
import TimelineItem,  { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {styled} from '@mui/material';

const StyleTimeLineConnector = styled(TimelineConnector)(()=> ( 
    {
        background: 'transparent',
        border: '1px dashed',
        width: '0px'
    }
))
const StyledPaper = styled(Paper)(()=>(
    {
        width:'550px',
        height:'auto',
        margin:'30px 500px',
    }
))

export const MuiCard = () => {
    
    return (
       <StyledPaper elevation={6}>

            <Box sx={{
                padding:'10px 150px'
            }}>
                <Box sx={{
                    padding:'10px 30px'
                }}>
                    <MuiTypography variantName='body1' fontweight="light" >You are Buying</MuiTypography>
                </Box>
                <Box>
                    <MuiTypography variantName='h5' fontweight="bold" >0.0234510 BTC</MuiTypography>
                </Box>
                <Box sx={{
                    padding:'10px 3px'
                }}>
                    <MuiTypography variantName='body1' fontweight="light" >1BTC = $3,406,069.54</MuiTypography>
                </Box>
            </Box>
        <Divider />
            <Box>
                <Timeline sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}>
                    <TimelineItem>
                        
                            <TimelineSeparator >
                                <TimelineDot>
                                    
                                        <MuiIcon Icon={<PaymentOutlinedIcon/>} ></MuiIcon>
                                    
                                </TimelineDot>
                                <StyleTimeLineConnector></StyleTimeLineConnector>
                            </TimelineSeparator>    
                        <TimelineContent sx={{ py: '25px', px: 2 }}>  
                                <Box sx={{ padding: '0px 20px'}}>
                                    <MuiTypography variantName="body1" fontweight='light' fontsize="15px">Payment method</MuiTypography>
                                    <MuiTypography variantName="body1" fontweight='bold' fontsize="20px">Visa credit ...8845</MuiTypography>
                                </Box>
                                
                        </TimelineContent> 
                       
                    </TimelineItem>
                    <TimelineItem>
                        
                            <TimelineSeparator>
                                <StyleTimeLineConnector/>
                                <TimelineDot>
                                    
                                        <MuiIcon Icon={<DeliveryDiningIcon/>} ></MuiIcon>
                                    
                                </TimelineDot>
                                <StyleTimeLineConnector/>
                            </TimelineSeparator>    
                            <TimelineContent sx={{ py: '25px', px: 2 }}>  
                                <Box sx={{padding: '0px 20px'}}>
                                    <MuiTypography variantName="body1" fontweight='light' fontsize="15px">Delivery fees</MuiTypography>
                                    <MuiTypography variantName="body1" fontweight='bold' fontsize="20px">0.001 BTC</MuiTypography>
                                </Box>
                            </TimelineContent>
                        
                    </TimelineItem>
                    <TimelineItem>
                        
                            <TimelineSeparator>
                            <StyleTimeLineConnector/>
                                <TimelineDot>
                                    
                                        <MuiIcon Icon={<AccountBalanceWalletIcon/>} ></MuiIcon>
                                    
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '25px', px: 2 }}>
                                <Box sx={{ padding: '0px 20px' }}>
                                    <MuiTypography variantName="body1" fontweight='light' fontsize="15px">Deposit to</MuiTypography>
                                    <MuiTypography variantName="body1" fontweight='bold' fontsize="20px">Bitcoin wallet</MuiTypography>
                                </Box>
                            </TimelineContent>
                        
                    </TimelineItem>
                </Timeline>
            </Box>

        <Divider />

            <Box sx={{
                padding:'0px 30px'
            }}>
            <Box sx={{
                padding:'5px'
            }}>
                <MuiTypography variantName='body1' fontweight="light" >0.0234510 BTC ................................................... $34,000.00</MuiTypography>
            </Box>
            <Box sx={{
                padding:'5px'
            }}>
                <MuiTypography variantName='body1' fontweight="light" >transacton fee ..................................................... $1,000.00</MuiTypography>
            </Box>
            <Box sx={{
                padding:'5px'
            }}>
                <MuiTypography variantName='body1' fontweight="bold" >Total ................................................................... $35,000.00</MuiTypography>
            </Box>
            </Box>
            <Box>
                <MuiButton variantname='contained' sx={ {
        width:'400px',
        padding:'10px',
        margin:'20px 70px',
    }}>BUY NOW</MuiButton>
            </Box>
       </StyledPaper>
    )
}

