//模拟一下计算过程
let page1Chunk = {
  name: "page1",
  modules: ["A", "B", "C", "lodash"],
};

let page2Chunk = {
  name: "page2",
  module: ["C", "D", "E", "lodash"],
};

let cacheGroups = {
  vendor: {
    test: /lodash/,
  },

  default: {
    minChunks: 2,
  },
};

let vendorChunk = {
  name: `vendor`,
  modules: ["lodash"],
};

let defaultChunk = {
  name: `default`,
  modules: ["C"],
};
