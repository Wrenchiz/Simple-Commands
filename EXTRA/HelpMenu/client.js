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
            let commandsText = `COMMANDS`;
            let helpStart = (game.height / 2) - 80;
            let listWidth = game.width / 2.5;
            let listLeft = Math.round(game.width / 2) - (listWidth / 2);
            
            titleFont.measure(commandsText, listWidth, 0.0, 1.0, 10, false, false);
            titleFont.render(commandsText, [game.width / 2, helpStart], 0, 0.5, 0.0, titleFont.size, COLOUR_WHITE, false, false, false, true);

            let cmds = [
                ["TYPE_CMD_HERE_1", "TYPE_DESC_HERE_1", "TYPE_CMD_HERE_2", "TYPE_DESC_HERE_2", "TYPE_CMD_HERE_3", "TYPE_DESC_HERE_3"],
                ["TYPE_CMD_HERE_4", "TYPE_DESC_HERE_4", "TYPE_CMD_HERE_5", "TYPE_DESC_HERE_5", "TYPE_CMD_HERE_6", "TYPE_DESC_HERE_6"]
            ];

            let colWidth = Math.round(listWidth / 3);

            for (let row = 0; row < cmds.length; row++) {
                for (let col = 0; col < 3; col++) {
                    let x = listLeft + col * colWidth;
                    let y = helpStart + 45 + row * 44;
                    
                    listFont.render(cmds[row][col * 2], [x, y], colWidth, 0.5, 0.0, listFont.size, COLOUR_GREEN, false, false, false, true);
                    listFont.render(cmds[row][col * 2 + 1], [x, y + 18], colWidth, 0.5, 0.0, listFont.size, COLOUR_WHITE, false, false, false, true);
                }
            }
        }
    }
});