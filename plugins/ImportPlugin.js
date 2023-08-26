class ImportPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(
      "ImportPlugin",
      (compilation, { normalModuleFactory }) => {
        normalModuleFactory.hooks.parser
          .for("javascript/auto")
          .tap("ImportPlugin", (parser) => {
            parser.hooks.importCall.tap("ImportParserPlugin", (expr) => {
              const { options } = parser.parseCommentOptions(expr.range);
              console.log(options);
            });
          });
      }
    );
  }
}
module.exports = ImportPlugin;
