const withTM = require("next-transpile-modules")(["@scope/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
