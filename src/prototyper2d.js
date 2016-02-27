/**
 * Created by Adam on 11/14/2015.
 */
"use strict";

var PROTOTYPER = {};

PROTOTYPER.prototype.defaultDrawValues = function () {
    return {
        x: 0,
        y: 0,
        width: 10,
        height: 10,
        lineWidth: 1,
        strokeStyle: "blue",
        fillStyle: "red"
    };
};

/**
 *
 * @param context
 * @param config
 * @param config.x
 * @param config.y
 * @param config.width
 * @param config.height
 * @param config.lineWidth
 * @param config.strokeStyle
 * @param config.fillStyle
 */
PROTOTYPER.prototype.drawRect = function (context, config) {
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
 * @param width
 * @param height
 * @returns {Element}
 */
PROTOTYPER.prototype.generateCanvas = function (width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
};

/**
 *
 * @param width
 * @param height
 * @param config
 * @param config.x
 * @param config.y
 * @param config.width
 * @param config.height
 * @param config.lineWidth
 * @param config.strokeStyle
 * @param config.fillStyle
 * @returns {Element}
 */
PROTOTYPER.prototype.generateRectCanvas = function (width, height, config) {
    var canvas = this.generateCanvas(width, height);
    this.drawRect(canvas.getContext('2d'), config);
    return canvas;
};
