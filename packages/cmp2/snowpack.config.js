/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: '../../snowpack.config.js',
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd:
          '../../node_modules/.bin/sass src/Cmp2.sass public/styles.css --no-source-map',
        watch: '$1 --watch',
      },
    ],
  ],
};
