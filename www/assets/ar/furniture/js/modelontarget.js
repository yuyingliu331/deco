var World = {
  loaded: false,
  rotating: false,

  init: function initFn(path) {
    this.createOverlays(path);
  },

  createOverlays: function createOverlaysFn(path) {
    // custom tracker
    this.tracker = new AR.ClientTracker('assets/tracker.wtc', {
      onLoaded: this.worldLoaded
    });
    // 3dmodel
    this.model = new AR.Model(path.slice(0, path.length - 4), {
      onLoaded: this.worldLoaded,
      scale: {
        x: +path.slice(-4) / 1000,
        y: +path.slice(-4) / 1000,
        z: +path.slice(-4) / 1000
      },
      translate: {
        x: 0.0,
        y: 0.0,
        z: 0.0
      },
      rotate: {
        roll: 0
      }
    });

    // The last line combines everything by creating an AR.Trackable2DObject with the previously created tracker, the name of the image target and the drawable that should augment the recognized image.
    var trackable = new AR.Trackable2DObject(this.tracker, '*', {
      drawables: {
        cam: [this.model]
      }
    });

    this.rotationAnimation = new AR.PropertyAnimation(this.model, 'rotate.roll', 0, 360, 3000);
  },

  toggleRotate: function toggleRotateFn() {
    if (!World.rotationAnimation.isRunning()) {
      if (!World.rotating) {
        // Starting an animation with .start(-1) will loop it indefinitely.
        World.rotationAnimation.start(-1);
        World.rotating = true;
      } else {
        // Resumes the rotation animation
        World.rotationAnimation.resume();
      }
    } else {
      // Pauses the rotation animation
      World.rotationAnimation.pause();
    }

    return false;
  },

  captureScreen: function captureScreenFn() {
    document.location = 'architectsdk://button?action=captureScreen';
  },
};

// gets the model path from native app and starts AR world
var getModelFromNative = function(path) {
  World.init(path);
};
