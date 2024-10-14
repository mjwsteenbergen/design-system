import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Foundation/base",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;
/* START | Generated colors */
const colors = {
  'green-50': 'bg-[#9DCF7C]',
  'green-100': 'bg-[#82C257]',
  'green-200': 'bg-[#69B637]',
  'green-300': 'bg-[#52A919]',
  'green-400': 'bg-[#3E9D00]',
  'green-500': 'bg-[#348300]',
  'green-600': 'bg-[#296800]',
  'green-700': 'bg-[#1F4E00]',
  'green-800': 'bg-[#153400]',
  'green-900': 'bg-[#0A1A00]',
  'blue-50': 'bg-[#BFE4FF]',
  'blue-100': 'bg-[#8FD1FF]',
  'blue-200': 'bg-[#60BDFF]',
  'blue-300': 'bg-[#30A9FF]',
  'blue-400': 'bg-[#0095FF]',
  'blue-500': 'bg-[#007AD1]',
  'blue-600': 'bg-[#005FA3]',
  'blue-700': 'bg-[#004475]',
  'blue-800': 'bg-[#002A47]',
  'blue-900': 'bg-[#000F1A]',
  'gray-50': 'bg-[#CECECF]',
  'gray-100': 'bg-[#B1B1B7]',
  'gray-200': 'bg-[#97979F]',
  'gray-300': 'bg-[#7D7D87]',
  'gray-400': 'bg-[#64646F]',
  'gray-500': 'bg-[#51515E]',
  'gray-600': 'bg-[#3F3F4D]',
  'gray-700': 'bg-[#2F2F3C]',
  'gray-800': 'bg-[#20202B]',
  'gray-900': 'bg-[#12121A]',
  'purple-50': 'bg-[#E5BFFF]',
  'purple-100': 'bg-[#CA92F0]',
  'purple-200': 'bg-[#B068E0]',
  'purple-300': 'bg-[#9843D1]',
  'purple-400': 'bg-[#8223C1]',
  'purple-500': 'bg-[#6917A0]',
  'purple-600': 'bg-[#510E7E]',
  'purple-700': 'bg-[#3A075D]',
  'purple-800': 'bg-[#24023B]',
  'purple-900': 'bg-[#0F001A]',
  'black-50': 'bg-[#FFFFFF]',
  'black-100': 'bg-[#FCFCFC]',
  'black-200': 'bg-[#DBDBDB]',
  'black-300': 'bg-[#B9B9B9]',
  'black-400': 'bg-[#979797]',
  'black-500': 'bg-[#757575]',
  'black-600': 'bg-[#535353]',
  'black-700': 'bg-[#313131]',
  'black-800': 'bg-[#0F0F0F]',
  'black-900': 'bg-[#000000]',
  'red-50': 'bg-[#FFB8B8]',
  'red-100': 'bg-[#EC6A6A]',
  'red-200': 'bg-[#DA3434]',
  'red-300': 'bg-[#C71212]',
  'red-400': 'bg-[#B40000]',
  'red-500': 'bg-[#9B0000]',
  'red-600': 'bg-[#820C0C]',
  'red-700': 'bg-[#691919]',
  'red-800': 'bg-[#502424]',
  'red-900': 'bg-[#362727]',
  'transparent': 'bg-[transparent]',
  'white': 'bg-[#FCFCFC]'
}
/* END | Generated colors */
/* START | Generated functional colors */
const functionalColors = {
  text: [
  "text-current",
  "text-transparent",
  "text-neutral-text-high",
  "text-neutral-text-medium",
  "text-neutral-text-inverse",
  "text-neutral-text-light-onbackground",
  "text-neutral-text-dark-onbackground",
  "text-neutral-text-interactive-disabled",
  "text-primary-text-high",
  "text-primary-text-interactive-default",
  "text-primary-text-interactive-hover",
  "text-primary-text-interactive-active",
  "text-accent1-text-high",
  "text-accent3-text-high",
  "text-accent2-text-high"
],
  background: [
  "bg-current",
  "bg-transparent",
  "bg-neutral-background-low",
  "bg-neutral-background-medium",
  "bg-neutral-background-interactive-default",
  "bg-neutral-background-interactive-disabled",
  "bg-neutral-background-interactive-hover",
  "bg-primary-background-high",
  "bg-primary-background-medium",
  "bg-primary-background-low",
  "bg-primary-background-interactive-default",
  "bg-primary-background-interactive-hover",
  "bg-primary-background-interactive-active",
  "bg-accent1-background-high",
  "bg-accent1-background-medium",
  "bg-accent1-background-low",
  "bg-accent1-background-interactive-default",
  "bg-accent1-background-interactive-hover",
  "bg-accent1-background-interactive-active",
  "bg-accent2-background-high",
  "bg-accent2-background-medium",
  "bg-accent2-background-low",
  "bg-accent3-background-high",
  "bg-accent3-background-medium",
  "bg-accent3-background-low",
  "bg-accent3-background-interactive-default"
],
  border: [
  "border-current",
  "border-transparent",
  "border-neutral-border-high",
  "border-neutral-border-medium",
  "border-neutral-border-low",
  "border-neutral-border-interactive-disabled",
  "border-primary-border-high",
  "border-primary-border-interactive-default",
  "border-primary-border-interactive-hover",
  "border-primary-border-interactive-active",
  "border-promo-border-high",
  "border-select-border-high",
  "border-accent1-border-high",
  "border-accent3-border-high",
  "border-accent2-border-high"
],
  other: [
  "-transparent",
  "-neutral-background-low",
  "-neutral-background-medium",
  "-neutral-background-interactive-default",
  "-neutral-background-interactive-disabled",
  "-neutral-background-interactive-hover",
  "-neutral-text-high",
  "-neutral-text-medium",
  "-neutral-text-inverse",
  "-neutral-text-light-onbackground",
  "-neutral-text-dark-onbackground",
  "-neutral-text-interactive-disabled",
  "-neutral-border-high",
  "-neutral-border-medium",
  "-neutral-border-low",
  "-neutral-border-interactive-disabled",
  "-primary-background-high",
  "-primary-background-medium",
  "-primary-background-low",
  "-primary-background-interactive-default",
  "-primary-background-interactive-hover",
  "-primary-background-interactive-active",
  "-primary-text-high",
  "-primary-text-interactive-default",
  "-primary-text-interactive-hover",
  "-primary-text-interactive-active",
  "-primary-border-high",
  "-primary-border-interactive-default",
  "-primary-border-interactive-hover",
  "-primary-border-interactive-active",
  "-accent1-background-high",
  "-accent1-background-medium",
  "-accent1-background-low",
  "-accent1-background-interactive-default",
  "-accent1-background-interactive-hover",
  "-accent1-background-interactive-active",
  "-accent1-text-high",
  "-accent1-border-high",
  "-accent2-background-high",
  "-accent2-background-medium",
  "-accent2-background-low",
  "-accent3-background-high",
  "-accent3-background-medium",
  "-accent3-background-low",
  "-accent3-background-interactive-default",
  "-accent3-text-high",
  "-accent3-border-high",
  "-accent2-text-high",
  "-accent2-border-high"
],
}
/* END | Generated functional colors */

export const FunctionalColors: Story = {
  render: () => {
    return (
      <div className="w-full p-20">
        <h1>Functional colors</h1>
        <h2>Text</h2>
        <div
          id="text"
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] w-full"
        >
          {functionalColors.text.map((i) => (
            <div className={`${i} p-6`}>{i}</div>
          ))}
        </div>
        <h2>Background</h2>
        <div
          id="background"
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] w-full"
        >
          {functionalColors.background.map((i) => (
            <div className={`${i} p-6`}>{i}</div>
          ))}
        </div>
        <h2>Border</h2>
        <div
          id="border"
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] w-full"
        >
          {functionalColors.border.map((i) => (
            <div className={`${i} p-6 border-2`}>{i}</div>
          ))}
        </div>
        <h2>Other</h2>
        <div
          id="other"
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] w-full"
        >
          {functionalColors.other.map((i) => (
            <div className={`${i} p-6`}>{i}</div>
          ))}
        </div>
      </div>
    );
  },
};

export const BaseColors: Story = {
  render: () => {
    return (
      <div className="w-full p-20">
        <h1>Colors</h1>
        <div
          id="text"
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] w-full"
        >
          {Object.entries(colors).map(([name, value]) => (
            <div className={`${value} p-6`}>{name}</div>
          ))}
        </div>
      </div>
    );
  },
};
