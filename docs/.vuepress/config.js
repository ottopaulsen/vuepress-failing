// import vue from "@vitejs/plugin-vue";

const { path } = require("@vuepress/utils");
const vue = require("@vitejs/plugin-vue");

module.exports = {
  lang: "en-US",
  title: "Test",
  description: "A test",
  base: "/",
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
  ],
  bundlerConfig: {
    viteOptions: {
      plugins: [vue()],
    },
  },
};
