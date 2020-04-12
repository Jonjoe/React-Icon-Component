# React Icon Component

This is my implementation of React Font Awesome performed in the simplest way possible.

## Setting this up to work with your project

You will need a pro licence of font awesome to use this properly. If you dont want to buy it then you can remove the pro depednancies and libs. Ill add documentation on how to do that.

Add these to your package.json's `dependencies` node

```
  ...
  dependencies: {
    ...
    "@fortawesome/react-fontawesome": "^0.1.9",
    "@fortawesome/fontawesome-svg-core": "^1.2.28",
    "@fortawesome/free-brands-svg-icons": "^5.13.0",
    "@fortawesome/free-regular-svg-icons": "^5.13.0",
    "@fortawesome/pro-duotone-svg-icons": "^5.13.0",
    "@fortawesome/pro-light-svg-icons": "^5.13.0",
    "@fortawesome/pro-solid-svg-icons": "^5.13.0",
    ...
  },
  ...
```

create an `.npmrc` in the root of your project and add the below code
```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOUR_AUTH_TOKEN_OR_ENV_VARIABLE
```

## Adding a new Icon

- Look up the icon you wish in the website: https://fontawesome.com/icons
- You will need to find the html classes for the icon and convert them into the array structure the font awesome lib needs.
- For example `<i class="fas fa-adjust"></i>` will become `['fas', 'adjust']`
- Decide a project appropriate name for the icon
- Add that name to the `IconName` union type
