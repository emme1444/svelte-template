const production = process.env.NODE_ENV === "production";

module.exports = {
  purge: {
    enabled: production,
    mode: "all",
    content: ["./public/**/*.html", "./src/**/*.svelte"],
    options: {
      whilelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
