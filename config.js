const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_45_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICA2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDk3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAwLFxuICAgICAgICAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJDNUgzOXVsaVJLWUUvNG9taTMwZDFkaGc3Y2hLaEEwcUhLNE1mSnVNWDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMzM3NTY0OTY4MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA1RDUwMDk4MEM5RDM4REE3NkMxNEM5REMyMzhGMDJFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjUxMjcwMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjMzNzU2NDk2ODA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NkM1MUFCM0RGOEZCNDlCRDAyNDk5RjExQzBBMUREQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1MTI3MDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZmQ0NlF4SVBRWVNla2tiUTdWTWZHd1wiLFxuICBcInBob25lSWRcIjogXCJmMzJmNmEyYS03NGRkLTQ0MDUtOWQ4YS03YmYyNGM3Yjk0NDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMTczLFxuICAgICAgODMsXG4gICAgICA4MixcbiAgICAgIDEyNCxcbiAgICAgIDE0MSxcbiAgICAgIDQzLFxuICAgICAgMTk2LFxuICAgICAgMjM4LFxuICAgICAgMjM0LFxuICAgICAgMTAxLFxuICAgICAgNjEsXG4gICAgICAyMTYsXG4gICAgICAzNCxcbiAgICAgIDI0NyxcbiAgICAgIDEyNyxcbiAgICAgIDI0NixcbiAgICAgIDkzLFxuICAgICAgNjAsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTU1LFxuICAgICAgMTMwLFxuICAgICAgMjI4LFxuICAgICAgMjQ1LFxuICAgICAgOCxcbiAgICAgIDI2LFxuICAgICAgOTUsXG4gICAgICAyOCxcbiAgICAgIDIyMCxcbiAgICAgIDE0NCxcbiAgICAgIDE0OSxcbiAgICAgIDE0NCxcbiAgICAgIDE0OCxcbiAgICAgIDkzLFxuICAgICAgMTcwLFxuICAgICAgNjEsXG4gICAgICAxMzgsXG4gICAgICAyNSxcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVDMzlLN0RUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIzMzc1NjQ5NjgwNzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjkzNTY1ODgwMDc0OTE6MTRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+Yt1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s3eGo2QURFTGpxcmJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVdIdTZFbURPYXI1bVZiUnptOEFXdHpFOXJndHU0SXc3MTdTV25BR24zZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEc25ueFFrOHNEVXhvcWlDNXpNU1R5SEhYdEtwYW45akVseVRmNVMyV0pNMHBLU3VCNnFZNTZqOEgvUmN2N0M3eU1hWFVhdFlLdEIzVk43U1NCQW1Edz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2VU40U2NiQmlnUnFEeWwvMmpYN3dMVUNxU200cjJnYUh5cVBXS1dyanVISjZUTGI3S00xcHQ5TWZwRWFRUlI5TUJ3RFFJNm1qQVdLK29ESnQ1OThpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIzMzc1NjQ5NjgwNzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1MTI2OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNNnFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU02cS5qc29uIjogIntcImtleURhdGFcIjpcIlF0cjFrVm05Lyt1Z3hwOHQvSis2bWl6ZVNTQ21DcHIzRlhpTXAwSWdlV2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODcyNjc1NTAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1MTI3MDAyMDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
