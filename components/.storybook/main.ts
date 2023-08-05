import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      
    },
  },
  viteFinal: (v, o) => {
    const name = `https://${process.env.CODESPACE_NAME}-6006.app.github.dev`
    v.server = { ...v.server, port: 3000, https: true, hmr: { server: v.server?.hmr?.["server"], host: name, port: 6006, protocol: 'wss' } };
    return v;
  },
  staticDirs: [
    "../public"
  ],
  docs: {
    autodocs: "tag",
  },
};
export default config;
