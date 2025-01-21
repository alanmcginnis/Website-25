module.exports = (config) => {
  config.addPassthroughCopy("src/assets/img/**/*");

  // Copy everything in CSS
  config.addPassthroughCopy({
    "src/assets/css/": "assets/css",
  });
  config.addPassthroughCopy({ "src/assets/js/**/*": "assets/js" });

  config.addWatchTarget("src/assets/js/");

  config.addLayoutAlias("default", "layouts/default.njk");

  // Transforms
  // ==========

  config.addTransform("minifyHtml", require("./lib/transforms/minifyHtml"));

  // const md = new markdownIt({
  //   html: true
  // });

  // Server Options
  // ==============

  // config.setServerOptions({
	// 	port: 8085,
	// });

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
    },
    // pathPrefix: "/",
    templateFormats: ["md", "njk", "html"],
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
