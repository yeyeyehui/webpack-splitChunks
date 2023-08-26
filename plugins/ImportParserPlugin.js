class ImportParserPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    // import(
    //   `./video.js`
    //   /* webpackPreload: true */
    //   /* webpackChunkName: "video" */
    // )
    // 动态import触发勾子
    compiler.hooks.importCall.tap("ImportParserPlugin", (expr) => {
      // 解析动态import形成info信息
      const { options: importOptions } = compiler.parseCommentOptions(
        expr.range
      );

      //   {
      // 	webpackChunkName: true,
      // 	webpackChunkName: 'video'
      //   }
      console.log(importOptions);
    });
  }
}
module.exports = ImportParserPlugin;
