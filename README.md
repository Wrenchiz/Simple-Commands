# Simple Commands by 88

![GTA Connected](https://img.shields.io/badge/GTA%20Connected-1.7.x-0066cc?style=for-the-badge)
![GTA IV](https://img.shields.io/badge/GTA%20IV-000000?style=for-the-badge&logo=rockstar-games&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Lua](https://img.shields.io/badge/Lua-00007C?style=for-the-badge&logo=lua&logoColor=white)
![License](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-333333?style=for-the-badge&logo=creativecommons&logoColor=white)

## 🎮 Commands

| Command | Description | Resource |
|:-------:|-------------|:--------:|
| `/heal` | Restores health to 100 | HealCMD |
| `/armor` | Restores armor to 100 | ArmorCMD |
| `/kill` | Commits suicide | KillCMD |
| `/god on` / `/god off` | Toggles invincibility | GodCMD |
| `/wanted 0-6` | Sets wanted level | WantedCMD |
| `/fix` | Repairs your vehicle | FixCMD |

## ⭐ EXTRA

| Resource | Description | Key |
|:--------:|-------------|:---:|
| Speedometer | Shows vehicle speed with color indicator | Auto |
| HelpMenu | Opens help menu with commands and shortcuts | F1 |
| LockDoor | Locks/unlocks vehicle doors | L |

### HelpMenu Configuration
1. Open `client.js`
2. Find the `cmds` array for commands and `shortcuts` array for keys
3. Replace `TYPE_CMD_HERE` with your command and `TYPE_DESC_HERE` with description
4. Replace `TYPE_KEY_HERE` with your key and `TYPE_DESC_HERE` with description
5. Example:
```javascript
let cmds = [
    ["/heal", "Full health", "/armor", "Full armor", "/kill", "Suicide"],
    ["/god on/off", "God mode", "/wanted 0-6", "Wanted level", "/fix", "Fix vehicle"]
];

let shortcuts = [
    ["F1", "Help menu", "TAB", "Player list", "L", "Door lock"]
];
```

## 🔧 Installation

1. Place folders inside `resources/`
2. Add `<resource src="FolderName" />` to `server.xml`
3. Start server or type `start FolderName` in console

---

## ⚖️ License

This project is licensed under the **CC BY-NC-ND 4.0** License. 
See the [LICENSE](https://github.com/Wrenchiz/Simple-Commands/tree/main?tab=License-1-ov-file) file for the full legal text.

© 2026 88
