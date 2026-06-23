"use strict";

addCommandHandler("fix", function(cmd, args) {
    if (localPlayer.vehicle) {
        localPlayer.vehicle.fix();
        outputChatBox("✔ Araç tamir edildi.", COLOUR_GREEN);
    } else {
        outputChatBox("✘ Araçta değilsin.", COLOUR_RED);
    }
});