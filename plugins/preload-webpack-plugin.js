const HtmlWebpackPlugin = require("html-webpack-plugin");

class PreloadWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("PreloadWebpackPlugin", (compilation) => {
      //获取HtmlWebpackPlugin向compilation添加的钩子
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tap(
        "PreloadWebpackPlugin",
        (htmlData) => {
          const { chunks } = compilation;

          // 拿到所有的动态import内容
          const files = chunks
            .filter((chunk) => !chunk.canBeInitial()) // 获取异步的import
            .reduce((files, chunk) => {
              return files.add(...chunk.files);
            }, new Set());

          // 添加一个script标签
          // <link rel="preload" as="script" href="utils.js">
          files.forEach((file) => {
            htmlData.assetTags.styles.unshift({
              tagName: "link",
              attributes: {
                rel: "preload",
                href: file,
              },
            });
          });
        }
      );
    });
  }
}

module.exports = PreloadWebpackPlugin;
/**
 * 原理和思路
 * 此插件会查找本项目中所有的异步代码块，
 * 把这些异步代码块对应的JS文件都添加一个link标签, rel="preload"
 */
