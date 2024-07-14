const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="damiruimo@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94768806865";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94743747913";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "truw" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "image" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_09_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDkxLFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICA3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU4LFxuICAgICAgICAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NixcbiAgICAgICAgODEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc4LFxuICAgICAgICA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDY2LFxuICAgICAgICAyMCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlUxRDd6NVVBWFVPeXdUWnFRVHVsRFlJVE1hdERWUk1sK2xJNy82Wkg4M2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldUa3pNaUFwVEhPVWk1QVRoek56OUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODQ2MTkxMDctMGZiZS00YzM3LWJkODgtYzA5NjMwYjRjMzdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNixcbiAgICAgIDY1LFxuICAgICAgMjA0LFxuICAgICAgNyxcbiAgICAgIDE4NSxcbiAgICAgIDU0LFxuICAgICAgMjQyLFxuICAgICAgMTEyLFxuICAgICAgMzMsXG4gICAgICAzNyxcbiAgICAgIDE4MyxcbiAgICAgIDY1LFxuICAgICAgMTk0LFxuICAgICAgMjQsXG4gICAgICA1OSxcbiAgICAgIDIyMyxcbiAgICAgIDczLFxuICAgICAgMTE5LFxuICAgICAgMjQwLFxuICAgICAgMTE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMjUwLFxuICAgICAgMTUwLFxuICAgICAgMTc3LFxuICAgICAgMTQ3LFxuICAgICAgMTcxLFxuICAgICAgMjA5LFxuICAgICAgMTQ5LFxuICAgICAgMTQyLFxuICAgICAgNzYsXG4gICAgICAxMDEsXG4gICAgICAxNzksXG4gICAgICA2OCxcbiAgICAgIDIwLFxuICAgICAgNDcsXG4gICAgICAyMjUsXG4gICAgICAxOTcsXG4gICAgICAxOTcsXG4gICAgICA0NSxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBNVZRWVdOMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDM3NDc5MTM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzODAxMDY4NzQ0NzI1NzozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLU0N3NWdFRUt6VXo3UUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJybDdSRkN6Z0FSVU9vSXFRVXBXVDlEWEt6MHZ3YUttMnpua01lVmVpbHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSHV3ZnMxakF6aWhsUEJXT2cxbjVEUkNtdGtRRGcvamdGYk51UVAyQ1RjRGhhbjBjeXMwWmFFcjl3aElRZFozbVgwOWFqUERVRW1td2s4VTExblJXQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMFN6QVorb29Id1VVbE1HalRlaGMyY0F4ZW82NC8rQ21CYnB2OEJ0YUNyQjkxNmZrY1FLZ1lYOVEyWGVhbjNrMU5LdENhSVpmRmNha01lQzdhb1FNQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDM3NDc5MTM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5Njk3NzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNV1RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1XVC5qc29uIjogIntcImtleURhdGFcIjpcIlk3SGlldVU3UTNFcjAwY0N4eng4SWVQeUUzT3hydXY2c2NvdjVGNTk1R3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEyNTE3MTQ5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODQ5NDM5ODI5XCJ9Igp9"  // PUT your SESSION_ID 


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
