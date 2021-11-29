# Top-Down Phaser Game with React UI Template

This project came from this Medium post: https://javascript.plainenglish.io/i-made-a-top-down-game-version-of-my-blog-with-phaser-and-react-faf5c28cf768

# Features
- Create React App
- Phaser 3
- Redux
- React 17 as game UI
- Arcade physics
- Grid Engine for grid movements
- Automatically resize game when browser window change size
- Automatically load Tilesets into Tiled maps
- Automatically pre-load assets with the `LoadAssetsScene` scene
- Automatically load items and enemies from Tiled objects layer
- Script to automatically generate atlases sheets
- Adjustable tile sizes
- Integration between Phaser and React via Redux
- Dialog system (with React)
- Game menu (with React)
- Virtual Gamepad for mobile (with React)
- Free 2D assets by Kenney.nl (assets God)

# How to use it

## Maps
Add your Tiled tilesets JSON and images to `/src/assets/tilesets` and your Tiled maps to `/src/assets/maps`. Then call the `LoadAssetsScene` scene like:

```javascript
this.scene.start('LoadAssetsScene', {
    nextScene: 'GameScene', // scene to be loaded after the assets are loaded
    assets: {
        mapKey: 'sample_map', // name of your map, like sample_map.json in this case
    },
});
```

Any tileset inside your `sample_map.json` will be automatically loaded, as long as they are in the `/src/assets/tilesets` directory.

## Other assets
To load any other asset, call the `LoadAssetsScene` with a list of the assets you need it to be automatically loaded.

```javascript
this.scene.start('LoadAssetsScene', {
    nextScene: 'GameScene', // scene to be loaded after the assets are loaded
    assets: {
        fonts: ['"Press Start 2P"'], // fonts to be loaded
        atlases: ['hero'], // atlases to be loaded, must be in `/src/assets/atlases/generated/` as hero.json and hero.png
        images: ['background'], // images to be loaded, must be in `/src/assets/images` as background.png
    },
});
```

## The 'GameScene'
This file is where the game map is rendered, with all items, enemies, etc. The `create` function is split into smaller functions that can be found in the `sceneHelpers.js` file.

## Virtual Gamepad
The Virtual Gamepad will be loaded automatically if the game is being run in a mobile device. The Virtual Gamepad is a React component that simulate keyboard keys to control que game, using the function `simulateKeyEvent` found in [this GitHub Gist](https://gist.github.com/GlauberF/d8278ce3aa592389e6e3d4e758e6a0c2).

## Dialog System
A dialog box will automatically show up whenever the `state.dialog.messages` variable is filled with messages. You can call the `setDialogMessagesAction` Redux action to do this.

```javascript
dispatch(setDialogMessagesAction(['hello world', 'hello world 2']));
```

# CRACO
This project uses [CRACO](https://github.com/gsoft-inc/craco) to force Webpack to load images as files and not as base64 strings, which are not supported by Phaser.

# Assets by Kenney.nl:
https://www.kenney.nl/assets/rpg-urban-pack
https://www.kenney.nl/assets/roguelike-rpg-pack
https://www.kenney.nl/assets/pixel-platformer
https://www.kenney.nl/assets/onscreen-controls
