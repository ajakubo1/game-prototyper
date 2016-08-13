/**
 * Created by Adam on 11/14/2015.
 */
"use strict";

var PROTOTYPER = {};

PROTOTYPER.defaultDrawConfigRect = {
    x: 0,
    y: 0,
    width: 10,
    height: 10,
    lineWidth: 1,
    strokeStyle: "blue",
    fillStyle: "red"
};

PROTOTYPER.defaultDrawConfigCircle = {
    x: 5,
    y: 5,
    width: 10,
    height: 10,
    radius: 5,
    startAngle: 0,
    endAngle: 360,
    anticlockwise: false,
    lineWidth: 1,
    strokeStyle: "blue",
    fillStyle: "red"
};

/**
 *
 * @param context
 * @param config
 * @param [config.x = 0]
 * @param [config.y = 0]
 * @param [config.width = 10]
 * @param [config.height = 10]
 * @param [config.lineWidth = 1]
 * @param [config.strokeStyle = "blue"]
 * @param [config.fillStyle = "red"]
 */
PROTOTYPER.drawRect = function (context, config) {
    config = config || this.defaultDrawConfigRect;
    config.x = config.x || this.defaultDrawConfigRect.x;
    config.y = config.y || this.defaultDrawConfigRect.y;
    config.width = config.width || this.defaultDrawConfigRect.width;
    config.height = config.height || this.defaultDrawConfigRect.height;
    config.lineWidth = config.lineWidth || this.defaultDrawConfigRect.lineWidth;
    config.strokeStyle = config.strokeStyle || this.defaultDrawConfigRect.strokeStyle;
    config.fillStyle = config.fillStyle || this.defaultDrawConfigRect.fillStyle;

    context.beginPath();
    context.rect(config.x, config.y, config.width, config.height);
    context.closePath();
    context.lineWidth = config.lineWidth;
    context.strokeStyle = config.strokeStyle;
    context.stroke();
    context.fillStyle = config.fillStyle;
    context.fill();
};

/**
 *
 * @param context
 * @param config
 * @param [config.x = 5]
 * @param [config.y = 5]
 * @param [config.radius = 5]
 * @param [config.startAngle = 0]
 * @param [config.endAngle = 360]
 * @param [config.anticlockwise = false]
 * @param [config.strokeStyle = "blue"]
 * @param [config.fillStyle = "red"]
 */
PROTOTYPER.drawCircle = function (context, config) {
    config = config || this.defaultDrawConfigCircle;
    config.x = config.x || this.defaultDrawConfigCircle.x;
    config.y = config.y || this.defaultDrawConfigCircle.y;
    config.radius = config.radius || this.defaultDrawConfigCircle.radius;
    config.startAngle = config.startAngle || this.defaultDrawConfigCircle.startAngle;
    config.endAngle = config.endAngle || this.defaultDrawConfigCircle.endAngle;
    config.strokeStyle = config.strokeStyle || this.defaultDrawConfigCircle.strokeStyle;
    config.fillStyle = config.fillStyle || this.defaultDrawConfigCircle.fillStyle;
    config.anticlockwise = config.anticlockwise || this.defaultDrawConfigCircle.anticlockwise;

    context.beginPath();
    context.arc(config.x, config.y, config.radius, config.startAngle, config.endAngle, config.angiclockwise);
    context.closePath();
    context.lineWidth = config.lineWidth;
    context.strokeStyle = config.strokeStyle;
    context.stroke();
    context.fillStyle = config.fillStyle;
    context.fill();
};

/**
 *
 * @param width
 * @param height
 * @returns {Element}
 */
PROTOTYPER.generateCanvas = function (width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
};

/**
 *
 * @param [width = PROTOTYPER.defaultDrawConfigRect.width]
 * @param [height = PROTOTYPER.defaultDrawConfigRect.height]
 * @param [config = PROTOTYPER.defaultDrawConfigRect]
 * @param [config.x = 0]
 * @param [config.y = 0]
 * @param [config.width = 10]
 * @param [config.height = 10]
 * @param [config.lineWidth = 1]
 * @param [config.strokeStyle = "blue"]
 * @param [config.fillStyle = "red"]
 * @returns {Element}
 */
PROTOTYPER.generateRectCanvas = function (width, height, config) {
    config = config || this.defaultDrawConfigRect;
    width = width || this.defaultDrawConfigRect.width;
    height = height || this.defaultDrawConfigRect.height;
    var canvas = this.generateCanvas(width, height);
    this.drawRect(canvas.getContext('2d'), config);
    return canvas;
};

/**
 *
 * @param [width = PROTOTYPER.defaultDrawConfigCircle.width]
 * @param [height = PROTOTYPER.defaultDrawConfigCircle.height]
 * @param [config = PROTOTYPER.defaultDrawConfigCircle]
 * @param [config.x = 5]
 * @param [config.y = 5]
 * @param [config.radius = 5]
 * @param [config.startAngle = 0]
 * @param [config.endAngle = 360]
 * @param [config.anticlockwise = false]
 * @param [config.strokeStyle = "blue"]
 * @param [config.fillStyle = "red"]
 * @returns {Element}
 */
PROTOTYPER.generateCircleCanvas = function (width, height, config) {
    config = config || this.defaultDrawConfigCircle;
    width = width || this.defaultDrawConfigCircle.width;
    height = height || this.defaultDrawConfigCircle.height;
    var canvas = this.generateCanvas(width, height);
    this.drawCircle(canvas.getContext('2d'), config);
    return canvas;
};
