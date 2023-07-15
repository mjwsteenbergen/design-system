import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './index';
import { StoryWrapper } from '../utils/storywrapper';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Card/Card',
    component: Card,
    decorators: [
        StoryWrapper
    ]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        children: <h1>Hi!</h1>,
        contained: true
    },
};
