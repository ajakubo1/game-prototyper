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

PROTOTYPER.prototype.drawRect = function (context, x, y, width, height, lineWidth, strokeStype, fillStyle) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.closePath();
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeStype;
    context.stroke();
    context.fillStyle = fillStyle;
    context.fill();
};

PROTOTYPER.prototype.generateRect = function (width, height, drawConfig) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    PROTOTYPER.drawRect(
        canvas.getContext('2d'),
        drawConfig.x,
        drawConfig.y,
        drawConfig.width,
        drawConfig.height,
        drawConfig.lineWidth,
        drawConfig.strokeStyle,
        drawConfig.fillStyle
    );
    return canvas;
};

PROTOTYPER = new PROTOTYPER();