
// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
requirejs.config({
    "baseUrl": "js/vendor",
    "paths": {
      "app": "../app",
    },
    "shim": {
    	"jquery.extend": ["jquery"],
        "backbone": ["jquery", "underscore"],
        "hammer.min": ["jquery"],
        "materialize": [
            "https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.js",
        	"jquery",         	
        	"https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.js",     
        	    	
        	]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);