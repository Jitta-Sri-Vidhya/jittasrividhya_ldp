import React from 'react';
import { MuiIcon } from './MuiIcon';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default {
    title: 'Form/Icon', //madetory and unique
    component: MuiIcon,
} as ComponentMeta<typeof MuiIcon>

const Template1 :ComponentStory<typeof MuiIcon> = args => <MuiIcon {...args}></MuiIcon>

export const Icon1 = Template1.bind({})
Icon1.args= {
     Icon: <PaymentOutlinedIcon/>
}

export const Icon2 = Template1.bind({})
Icon2.args= {
     Icon: < DeliveryDiningIcon />
}

export const Icon3 = Template1.bind({})
Icon3.args= {
     Icon: <AccountBalanceWalletIcon/>
}