import type { Meta, StoryObj } from '@storybook/react';

import { StoryWrapper } from '../utils/storywrapper';
import { HoverVideoCard } from './hovervideo';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Card/HoverVideoCard',
    component: HoverVideoCard,
    decorators: [
        StoryWrapper
    ]
} satisfies Meta<typeof HoverVideoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        src: "https://v4.cdnpk.net/videvo_files/video/free/video0453/large_watermarked/_import_605f65a0c8cfa7.70318750_FPpreview.mp4",
        children: <h1>Test</h1>,
        contained: false
    },
};

export const Contained: Story = {
    args: {
        src: "https://v4.cdnpk.net/videvo_files/video/free/video0453/large_watermarked/_import_605f65a0c8cfa7.70318750_FPpreview.mp4",
        children: <h1>Test</h1>,
        contained: true
    },
};
