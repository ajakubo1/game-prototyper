/**
 * Created by Adam on 11/14/2015.
 */
"use strict";

var PROTOTYPER = {};

PROTOTYPER.defaultDrawConfig = {
    x: 0,
    y: 0,
    width: 10,
    height: 10,
    lineWidth: 1,
    strokeStyle: "blue",
    fillStyle: "red"
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
PROTOTYPER.drawRect = function (context, config) {
    config = config || this.defaultDrawConfig;
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
PROTOTYPER.generateCanvas = function (width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
};

/**
 *
 * @param [width = PROTOTYPER.defaultDrawConfig.width]
 * @param [height = PROTOTYPER.defaultDrawConfig.height]
 * @param [config = PROTOTYPER.defaultDrawConfig]
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
    config = config || this.defaultDrawConfig;
    width = width || this.defaultDrawConfig.width;
    height = height || this.defaultDrawConfig.height;
    var canvas = this.generateCanvas(width, height);
    this.drawRect(canvas.getContext('2d'), config);
    return canvas;
};
