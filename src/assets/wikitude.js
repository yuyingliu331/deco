var app = {
    // Url/Path to the augmented reality experience you would like to load
    arExperienceUrl: 'assets/experience/index.html',
    // The features your augmented reality experience requires, only define the ones you really need
    requiredFeatures: [ '2d_tracking', 'geo' ],
    // Represents the device capability of launching augmented reality experiences with specific features
    isDeviceSupported: false,
    // Additional startup settings, for now the only setting available is camera_position (back|front)
    startupConfiguration:
    {
        'camera_position': 'back'
    },
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        app.wikitudePlugin = cordova.require('com.wikitude.phonegap.WikitudePlugin.WikitudePlugin');
        app.wikitudePlugin.isDeviceSupported(app.onDeviceSupported, app.onDeviceNotSupported, app.requiredFeatures);
        console.log('check on device ready?');
    },
    // Callback if the device supports all required features
    onDeviceSupported: function() {
        console.log('device supported!');
        app.wikitudePlugin.loadARchitectWorld(
            app.onARExperienceLoadedSuccessful,
            app.onARExperienceLoadError,
            app.arExperienceUrl,
            app.requiredFeatures,
            app.startupConfiguration
        );
    },
    // Callback if the device does not support all required features
    onDeviceNotSupported: function(errorMessage) {
        console.log(errorMessage);
    },
    // Callback if your AR experience loaded successful
    onARExperienceLoadedSuccessful: function(loadedURL) {
        /* Respond to successful augmented reality experience loading if you need to */
    },
    // Callback if your AR experience did not load successful
    onARExperienceLoadError: function(errorMessage) {
        console.log('Loading AR web view failed: ' + errorMessage);
    }

};

app.initialize();
