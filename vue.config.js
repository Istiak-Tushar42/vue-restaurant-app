module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/scss/style.scss";
          `
        }
      }
    }
};