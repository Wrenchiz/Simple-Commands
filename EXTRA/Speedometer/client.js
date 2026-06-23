"use strict";

let speedFont = null;

bindEventHandler("OnResourceReady", thisResource, function(event, resource) {
    let fontStream = openFile("pricedown.ttf");
    if (fontStream != null) {
        speedFont = lucasFont.createFont(fontStream, 26.0);
        fontStream.close();
    }
});

addEventHandler("OnDrawnHUD", function(event) {
    if (speedFont != null && localPlayer.vehicle) {
        let vel = localPlayer.vehicle.velocity;
        let speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);
        let kmh = Math.floor(speed * 3.6);
        
        let colour = COLOUR_GREEN;
        if (kmh > 80) colour = COLOUR_YELLOW;
        if (kmh > 120) colour = COLOUR_ORANGE;
        if (kmh > 160) colour = COLOUR_RED;
        
        let text = kmh + " km/h";
        let posX = game.width - 200;
        let posY = game.height - 100;
        
        speedFont.measure(text, 190, 0.0, 1.0, 10, false, false);
        speedFont.render(text, [posX, posY], 0, 0.5, 0.0, speedFont.size, colour, false, false, false, true);
        
        if (kmh > 160) {
            let warnText = "CHILL DUDE";
            let warnY = posY + 30;
            speedFont.measure(warnText, 190, 0.0, 1.0, 10, false, false);
            speedFont.render(warnText, [posX, warnY], 0, 0.5, 0.0, speedFont.size, COLOUR_RED, false, false, false, true);
        }
    }
});