class AssetWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("AssetWebpackPlugin", (compilation) => {
      compilation.hooks.chunkAsset.tap(
        "AssetWebpackPlugin",
        (chunk, filename) => {
          console.log(filename);
        }
      );
    });
  }
}

module.exports = AssetWebpackPlugin;
