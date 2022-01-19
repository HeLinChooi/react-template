## About

This front end template created solely for faster bootstrapping of front-end project.

## Setup

### Packages

```
npm install @mui/material clsx @craco/craco
```

_@mui/material_  
The out-of-the-box components will ease the development process a lot.

_clsx_  
Utility package to combine styles

_@craco/craco_  
Used to simplify importing in this project (by using `craco.config.js`)

### Formatting

```
npx husky-init
npm install --save-dev pretty-quick prettier
npx husky set .husky/pre-commit "npx pretty-quick --staged"
```

Used to format every files committed to maintain the readability of the code.

## Additonal folder/files compared to create-react-app

- `.env`
- `craco.config.js`
- `theme` folder (for material-ui)
