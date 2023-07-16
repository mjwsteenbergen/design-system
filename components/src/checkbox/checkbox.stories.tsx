import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './index';
import { StoryWrapper } from '../utils/storywrapper';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Checkbox/Checkbox',
    component: Checkbox,
    decorators: [
        StoryWrapper
    ]
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        defaultChecked: false,

    },
};
