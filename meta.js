module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Hapi Vue project"
    },
    "author": {
      "type": "string",
      "label": "Author"
    },
    "private": {
      "type": "boolean",
      "default": true
    },
    "lint": {
      "type": "confirm",
      "message": "Include code linter (ESlint)?",
      "default": true
    },
    "unit": {
      "type": "confirm",
      "message": "Include unit tests (Karma + Mocha + Sinon + Chai)?",
      "default": false
    },
    "headlessBrowser": {
      "when": "unit",
      "type": "list",
      "message": "Pick a browser",
      "choices": [
        {
          "name": "ChromeHeadless (Chrome >=59)",
          "value": "ChromeHeadless"
        },
        {
          "name": "ChromiumHeadless (Chromium >=59)",
          "value": "ChromiumHeadless"
        },
        {
          "name": "FirefoxHeadless (FF [Linux] >=55 [Win/Mac] >=56)",
          "value": "FirefoxHeadless"
        },
        {
          "name": "PhantomJS",
          "value": "PhantomJS"
        }
      ]
    },
    "unitApi": {
      "type": "confirm",
      "message": "Include dedicated, Hapi unit test utility (Lab + Chai)?",
      "default": false
    }
  },
  "helpers": {
    "if_or": function (a, b, opts) {
      if (a || b) {
        return opts.fn(this)
      }
      return opts.inverse(this)
    },
    "if_eq_or": function (option, a, b, opts) {
      if (option === a || option === b) {
        return opts.fn(this)
      }
      return opts.inverse(this)
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    "test": "unit || unitApi",
    "test/unit/**/*": "unit",
    "test/api/**/*": "unitApi"
  },
  "completeMessage": "To run dev version:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\n"
}
