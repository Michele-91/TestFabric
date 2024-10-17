
let canvasLoaded = false;

var canvas;
var blueSquare;
var gradient;
document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is fully loaded, attempting to initialize Fabric.js");

    function initializeFabric() {
        if (typeof fabric === 'undefined') {
            console.error('Fabric.js is not loaded');
            return;
        }

        console.log('Initializing Fabric.js canvas');

        // Initialize a Fabric.js canvas with the given ID
        var canvasElement = document.getElementById('fabricCanvas');
        if (!canvasElement) {
            console.error('Canvas element not found');
            return;
        }
        canvasLoaded = true;

        canvas = new fabric.Canvas('fabricCanvas');

        // Create a red square of size 50px by 50px
        var redSquare = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 50,
            height: 50
        });

        // Add the red square to the canvas
        canvas.add(redSquare);

        console.log('Red square added to the canvas');
    }


    // Call the initializeFabric function after a slight delay to ensure all scripts are loaded
    /*setTimeout(initializeFabric, 500);*/
    if (!canvasLoaded) {
        setTimeout(initializeFabric, 100);
    }
});


window.addBlueSquare = function() {
    blueSquare = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'blue',
        width: 50,
        height: 50
    });

    canvas.add(blueSquare);
}

window.addGradient = function() {
    gradient = new fabric.Gradient({
        type: 'linear',
        gradientUnits: 'pixels', // or 'percentage'
        coords: { x1: 0, y1: 0, x2: circle.width, y2: 0 },
        colorStops: [
            { offset: 0, color: 'red' },
            { offset: 0.2, color: 'orange' },
            { offset: 0.4, color: 'yellow' },
            { offset: 0.6, color: 'green' },
            { offset: 0.8, color: 'blue' },
            { offset: 1, color: 'purple' }
        ]
    });

    canvas.add(gradient);

}


//window.initializeFabric = function () {
//    if (typeof fabric === 'undefined') {
//        console.error('Fabric.js is not loaded');
//        return;
//    }

//    console.log('Initializing Fabric.js canvas');

//    // Initialize a Fabric.js canvas with the given ID
//    var canvas = new fabric.Canvas('fabricCanvas');

//    // Create a red square of size 50px by 50px
//    var redSquare = new fabric.Rect({
//        left: 100,
//        top: 100,
//        fill: 'red',
//        width: 50,
//        height: 50
//    });

//    // Add the red square to the canvas
//    canvas.add(redSquare);

//    console.log('Red square added to the canvas');
//};




