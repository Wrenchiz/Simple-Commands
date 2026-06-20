addCommandHandler('kill', function(cmd, args)
    localPlayer.health = -1
    outputChatBox("✘ İntihar Edildi.", 255, 0, 0)
end)