module.exports = function (grunt, options) {
  return {
      devmode: {
          src: [ "./target/webapp/index.html" ],
          overwrite: true,
          replacements: [
              {
                  from: "<script type=\"text/javascript\" src=\"bundle.js\"></script>",
                  to: "<!-- bundle.js script removed for devmode -->"
              }
          ]
      }
  };
};
