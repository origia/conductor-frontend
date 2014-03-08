window.App = window.App || {};

//var LeapManager = require('leap-events').LeapManager;
var LeapManager = require('leap-events').LeapManager,
    FrameState  = require('leap-events').FrameState;

FrameState.screenSize = { width: 1280, height: 1080};
FrameState.leapFrameSize = { width: 300, height: 250};

App.conductorServer = App.conductorServer || new ConductorServer();

App.leapManager = new LeapManager({
});

document.getElementById("Video1").play();

App.leapManager.start();
