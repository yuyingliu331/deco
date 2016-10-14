# Deco
---
### Description
Deco is an augmented reality mobile app for interior designers.  

It uses image recognition to place a life-size 3d model of a piece of furniture on top of a physical marker recognized by the phone's camera.  

### Technologies Used

- [Ionic2](http://ionicframework.com/docs/v2/getting-started/installation/)
- [Angular2](https://angular.io/)
- [Cordova](https://cordova.apache.org/)
- [Wikitude](http://www.wikitude.com/)'s Javascript & Cordova SDK
- [Sequelize](http://docs.sequelizejs.com/en/v3/)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Sketchfab Viewer](https://sketchfab.com/developers/viewer)

### Features

###### 3D Model Preview

![alt text][model]

[model]: https://s3-us-west-2.amazonaws.com/deco-development/3dmodelpreview.gif "3d model preview"

###### Augmented Reality Mode

![alt text][augmentedreality]

[augmentedreality]: https://s3-us-west-2.amazonaws.com/deco-development/rotate2.gif "augmented reality mode"

### How to Install

Install all dependencies

```
npm install
```

Build assets and serve ionic app

```
ionic serve
```

Create db `deco` and `deco_testing` if you haven't already.

Migrate and seed`deco` db:

```
npm run migrate
npm run seed
```

Migrate `deco_testing` db:

```
NODE_ENV=testing npm run migrate
```

Run tests:

```
npm run test
```

### How to build for iOS
First, add your development team id to build.json

```
ionic platform add ios
ionic build ios
```

Open the Xcode project generated within `platforms/ios` in Xcode and build to your iOS device.
