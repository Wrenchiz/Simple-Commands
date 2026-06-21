addCommandHandler('wanted', function(cmd, args)
    local level = tonumber(args)
    
    if level and level >= 0 and level <= 6 then
        localPlayer.wantedLevel = level
        outputChatBox("✔ Yildiz seviyesi: " .. level, 0, 255, 0)
    else
        outputChatBox("Kullanim: /wanted 0-6", 255, 255, 0)
    end
end)