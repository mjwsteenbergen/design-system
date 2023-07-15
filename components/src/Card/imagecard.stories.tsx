import type { Meta, StoryObj } from '@storybook/react';

import { ImageCard } from './imagecard';
import { StoryWrapper } from '../utils/storywrapper';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Card/ImageCard',
    component: ImageCard,
    decorators: [
        StoryWrapper
    ]
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        src: "https://unsplash.it/640/425",
        children: <h1>Test</h1>,
        alt: "",
        contained: false
    },
};

export const Contained: Story = {
    args: {
        src: "https://unsplash.it/640/425",
        children: <h1>Test</h1>,
        alt: "",
        contained: true
    },
};
