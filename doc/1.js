let compilation = {
  hooks: {
    emit: new SyncHook(),
  },
};

let HtmlWebpackPlugin = {
  addAlterAssetTags() {
    compilation.hooks100.alterAssetTags = new SyncHook();
  },

  getHooks(compilation) {
    return {
      alterAssetTags: compilation.hooks100.alterAssetTags,
    };
  },
};

//如何获取加的钩子
HtmlWebpackPlugin.getHooks(compilation).alterAssetTags;
