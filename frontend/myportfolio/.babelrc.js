const env = require('./env-config.js')

module.exports = {
  "env": {
    "development": {
      "plugins": [
        [
          "babel-plugin-styled-components",
          { "ssr": true, "displayName": true, "preprocess": false }
        ]
      ],
      "presets": ["next/babel"]
    },
    "production": {
      "plugins": [
        [
          "babel-plugin-styled-components",
          { "ssr": true, "displayName": true, "preprocess": false }
        ]
      ],
      "presets": ["next/babel"]
    }
  },
  "plugins": [
    ["transform-define", env],
    [
      "babel-plugin-styled-components",
      { "ssr": true, "displayName": true, "preprocess": false }
    ]
  ]
}

