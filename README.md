# React Icon Component
This is my implementation of React Font Awesome performed in the simplest way possible. 

## Adding a new Icon

- Look up the icon you wish in the website: https://fontawesome.com/icons
- You will need to find the html classes for the icon and convert them into the array structure the font awesome lib needs.
- For example `<i class="fas fa-adjust"></i>` will become `['fas', 'adjust']`
- Decide a project appropriate name for the icon
- Add that name to the `IconName` union type
