"use strict";

var LeapManager = require('leap-events').LeapManager
  , FrameState  = require('leap-events').FrameState

FrameState.screenSize = { width: 1024
	                    , height: 768
	                    }

var manager = new LeapManager()
manager.on('oneFingerMove', function (state) {
  console.log(state.screenPosition().x)
})
manager.start()
