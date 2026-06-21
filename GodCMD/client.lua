addCommandHandler('god', function(cmd, args)
    if args == "on" then
        localPlayer.invincible = true
        outputChatBox("✔ Godmode acildi.", 0, 255, 0)
    elseif args == "off" then
        localPlayer.invincible = false
        outputChatBox("✘ Godmode kapatildi.", 255, 0, 0)
    else
        outputChatBox("Kullanim: /god on veya /god off", 255, 255, 0)
    end
end)