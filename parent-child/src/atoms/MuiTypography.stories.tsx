import React from 'react';
import { MuiTypography } from './MuiTypography';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
export default {
    title: 'Form/Typography', //madetory and unique
    component: MuiTypography,
} as ComponentMeta<typeof MuiTypography>

const Template :ComponentStory<typeof MuiTypography> = args => <MuiTypography {...args}></MuiTypography>

export const Typography = Template.bind({})
Typography.args= {
    variantName:'h1',
    children:'buy',
    fontweight:'bold',
    fontsize:'50px'
}