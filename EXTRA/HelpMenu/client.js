"use strict";

let titleFont = null;
let listFont = null;

bindEventHandler("OnResourceReady", thisResource, function(event, resource) {
    let fontStream = openFile("pricedown.ttf");
    if (fontStream != null) {
        titleFont = lucasFont.createFont(fontStream, 28.0);
        fontStream.close();
    }
    
    let listFontStream = openFile("coolvetica-rg.otf");
    if (listFontStream != null) {
        listFont = lucasFont.createFont(listFontStream, 13.0);
        listFontStream.close();
    }
});

addEventHandler("OnDrawnHUD", function(event) {
    if (isKeyDown(SDLK_F1)) {
        if (listFont != null && titleFont != null) {
            let listWidth = game.width / 4;
            let listLeft = Math.round(game.width / 2) - (listWidth / 2);
            
            // Commands title
            let commandsY = (game.height / 2) - 130;
            let commandsText = `COMMANDS`;
            titleFont.measure(commandsText, listWidth, 0.0, 1.0, 10, false, false);
            titleFont.render(commandsText, [game.width / 2, commandsY], 0, 0.5, 0.0, titleFont.size, COLOUR_WHITE, false, false, false, true);

            // Command list
            let cmds = [
                ["TYPE_CMD_HERE_1", "TYPE_DESC_HERE_1", "TYPE_CMD_HERE_2", "TYPE_DESC_HERE_2", "TYPE_CMD_HERE_3", "TYPE_DESC_HERE_3"],
                ["TYPE_CMD_HERE_4", "TYPE_DESC_HERE_4", "TYPE_CMD_HERE_5", "TYPE_DESC_HERE_5", "TYPE_CMD_HERE_6", "TYPE_DESC_HERE_6"]
            ];

            let colWidth = Math.round(listWidth / 3);

            for (let row = 0; row < cmds.length; row++) {
                for (let col = 0; col < 3; col++) {
                    let x = listLeft + col * colWidth;
                    let y = commandsY + 50 + row * 42;
                    
                    listFont.render(cmds[row][col * 2], [x, y], colWidth, 0.5, 0.0, listFont.size, COLOUR_GREEN, false, false, false, true);
                    listFont.render(cmds[row][col * 2 + 1], [x, y + 20], colWidth, 0.5, 0.0, listFont.size, COLOUR_WHITE, false, false, false, true);
                }
            }
            
            // Shortcuts title
            let shortcutsY = commandsY + 50 + cmds.length * 42 + 40;
            let shortcutsText = `SHORTCUTS`;
            titleFont.measure(shortcutsText, listWidth, 0.0, 1.0, 10, false, false);
            titleFont.render(shortcutsText, [game.width / 2, shortcutsY], 0, 0.5, 0.0, titleFont.size, COLOUR_WHITE, false, false, false, true);
            
            // Shortcut list
            let shortcuts = [
                ["TYPE_KEY_HERE_1", "TYPE_DESC_HERE_1", "TYPE_KEY_HERE_2", "TYPE_DESC_HERE_2", "TYPE_KEY_HERE_3", "TYPE_DESC_HERE_3"]
            ];

            for (let row = 0; row < shortcuts.length; row++) {
                for (let col = 0; col < 3; col++) {
                    let x = listLeft + col * colWidth;
                    let y = shortcutsY + 50 + row * 42;
                    
                    listFont.render(shortcuts[row][col * 2], [x, y], colWidth, 0.5, 0.0, listFont.size, COLOUR_GREEN, false, false, false, true);
                    listFont.render(shortcuts[row][col * 2 + 1], [x, y + 20], colWidth, 0.5, 0.0, listFont.size, COLOUR_WHITE, false, false, false, true);
                }
            }
        }
    }
});