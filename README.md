# React GUI Builder
Write code using User-friendly GUI Builder 🍇


## Run react-gui-builder

```
yarn install && yarn dev
```


## Modify react-gui-builder

```
cd react-gui-builder && npm install && npm run build-client-dev
```

## Export App

Press Export App at 'list of pages' pannel,

then find result app using
```
npm run start
```

## How To Deploy

1. Export App or Pages to apply changes to 'React App'

2. Add your git info in below two files
- deploy.sh
- internals/webpack/webpack.base.babel.js

Then, run deploy script
```
yarn deploy
```

## Folder Structure
```
.
├── .structor               # GUI Builder(structor) Settings (http://localhost:2223)
│   ├── modules             # modules made by GUI Builder
│   ├── webpack.app.js      # webpack settings for the GUI Builder (http://localhost:2223)
│   └── webpack.base.js     # webpack settings for the GUI Builder (http://localhost:2223)
├── app                     # React App using GUI Builder modules (http://localhost:3000)
│   ├── modules             # modules made by GUI Builder
│   └── appStyle.js         # Global App Style
├── build                   # build files  
├── internals               # webpack settings for the React App (http://localhost:3000)
├── server
├── structor                # GUI Builder App (structor)
├── .gitignore
├── deploy.sh               # deploy script (yarn deploy)
├── package.json
└── README.md
```
## Credit
Original Source Codes from here [ipselon/structor](https://github.com/ipselon/structor)
