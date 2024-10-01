module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/images')
    eleventyConfig.addPassthroughCopy('favicon.png')
  
    return {
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dir: {
        input: "src",
        output: "_site",
      }
    }
  
  };