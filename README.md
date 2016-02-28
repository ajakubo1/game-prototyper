# game-prototyper
Little library which allows me to create canvas game prototypes (squares, circles, texts, all of that ;))

Right now it only supports drawing squares, I will be probably extending that when I need new functionalities.

## Installation

```bash
npm install game-prototyper
```

To use library in your project, you have to include gamegine.js in your html file
```
<script src="node_modules/game-prototyper/prototyper2d.min.js"></script>
```

## API

- ``defaultDrawConfigRect`` - a set of default values for drawing rectangle (config)
- ``defaultDrawConfigCircle`` - a set of default values for drawing circle (config)
- ``drawRect`` - draws rectangle on provided 2d context with provided config
- ``generateCanvas`` - generates canvas with provided width and height
- ``generateRectCanvas`` - generates canvas with drawn rectangle
- ``generateCircleCanvas`` - generates canvas with drawn circle

For function parameters and default parameters, browse source code

## From the author

If you have any suggestions for the library, write me an email (ajakubo1@gmail.com) or open new issue on github!