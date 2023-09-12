module.exports = {
  presets: [
    ["@babel/preset-typescript", { allExtensions: true }],
    [
      "@babel/preset-env",
      {
        loose: true,
        useBuiltIns: "entry",
        corejs: 3,
        modules: false,
        shippedProposals: true,
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
};
