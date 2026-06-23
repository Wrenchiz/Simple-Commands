"use strict";

let messageFont = null;
let subFont = null;
let showMessage = false;
let messageText = "";
let subText = "";
let messageTimer = null;
let lockedVehicles = [];

bindEventHandler("OnResourceReady", thisResource, function(event, resource) {
    let fontStream = openFile("coolvetica-rg.otf");
    if (fontStream != null) {
        messageFont = lucasFont.createFont(fontStream, 20.0);
        subFont = lucasFont.createFont(fontStream, 13.0);
        fontStream.close();
    }
});

addEventHandler("OnKeyDown", function(event, keyCode, scanCode, mod) {
    if (keyCode == SDLK_l) {
        if (localPlayer.vehicle) {
            let veh = localPlayer.vehicle;
            let vehId = veh.id;
            
            if (lockedVehicles.indexOf(vehId) == -1) {
                natives.lockCarDoors(veh, 2);
                lockedVehicles.push(vehId);
                showMessageText("Vehicle Locked", "Unlock before exiting! Otherwise you won't be able to re-enter.");
            } else {
                natives.lockCarDoors(veh, 0);
                lockedVehicles.splice(lockedVehicles.indexOf(vehId), 1);
                showMessageText("Vehicle Unlocked", "");
            }
        }
    }
});

function showMessageText(text, sub) {
    messageText = text;
    subText = sub;
    showMessage = true;
    
    if (messageTimer != null) {
        clearTimeout(messageTimer);
    }
    
    messageTimer = setTimeout(function() {
        showMessage = false;
        messageTimer = null;
    }, 3000);
}

addEventHandler("OnDrawnHUD", function(event) {
    if (showMessage && messageFont != null) {
        let posX = game.width / 2;
        let posY = 50;
        
        messageFont.measure(messageText, 500, 0.0, 1.0, 10, false, false);
        messageFont.render(messageText, [posX, posY], 0, 0.5, 0.0, messageFont.size, COLOUR_YELLOW, false, false, false, true);
        
        if (subText != "" && subFont != null) {
            subFont.measure(subText, 500, 0.0, 1.0, 10, false, false);
            subFont.render(subText, [posX, posY + 25], 0, 0.5, 0.0, subFont.size, COLOUR_WHITE, false, false, false, true);
        }
    }
});