import React from 'react';
import { MuiButton } from './MuiButton';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
export default {
    title: 'Form/Button', //madetory and unique
    component: MuiButton,
} as ComponentMeta<typeof MuiButton>

const Template :ComponentStory<typeof MuiButton> = args => <MuiButton {...args} />

export const Button = Template.bind({})
Button.args= {
    variantname: "contained",
    children: "BUY NOW"
}