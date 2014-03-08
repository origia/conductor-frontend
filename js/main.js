window.App = window.App || {};

//var LeapManager = require('leap-events').LeapManager;
var LeapManager = require('leap-events').LeapManager,
    FrameState  = require('leap-events').FrameState;

FrameState.screenSize = { width: 1280, height: 1080};
FrameState.leapFrameSize = { width: 300, height: 250};


App.leapManager = new LeapManager({
});

App.leapManager.start();
