module.exports = {
  "schema": {
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
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    "test": "unit",
    "test/unit/**/*": "unit"
  },
  "completeMessage": "To run dev version:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\n"
}