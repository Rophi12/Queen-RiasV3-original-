require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || ".", // Command prefix

    ownerName: process.env.OWNER_NAME || "Rophi", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "233209946303", // Your WhatsApp number

    sudo: process.env.SUDO ? process.env.SUDO.split(",") : ["233209946303"," 2347042081220"], // People Who can use the bot even in Private mode

    mode: process.env.MODE || "public", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "Nigeria", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Lagos", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "recording", // Bot presence status

    autoRead: process.env.AUTO_READ === "false", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "true", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0g1M2E3R0x0ZThxaW5wZGJzUkk3ci9tbm9KMUliK25QMUd6UmVQWHZYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JsWDRZUU9hM0E0c2wvT1paeGFZOE4yZUVPazE4ZUUxeTBZUU9tVGYzMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S1ZCTTVjaUZkSHNURDFSNUg2LzA2ODhtWkJUTjJpKzJMZllqRG1sajBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUcWpWN01kQXpVQ0pXaDN6OUpCOUJqUDZwMEkzVTk4ODVqT05hdkdjMFRvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFbEg0NFpwSzNqS21uZlNJNzVKNURlQzh0K2lhNzFkWWloOStub1FhWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdUNXRnaFZ0VGRad3FQS0lVRmhyNkNNOC92LzgzdE4zNFp6UW9oRWxKU2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0dJNnVJWGRrSVp0R2k4dFErbUN3WnAxVjFoeG8vdW4rU0lGWnJEc1FVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXRidVJib1FBVmRQK3MzcXZhWktWT1V5ZGZkbGg0TEI5VFIxaWJFelRHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZnTWFabDBvT21WQkNLekxTMHkvbjdjbEswdTNLcXoxTWxMWEJ5bUdEdTJsYWxpNVpFTHZMK3d3T0pYdWxQTmJSZks0c3htZEplb0hGK1RBUTA3K2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJUZGdJdjE4T04zWmc3S1l3MlpJT2NNemZSVldieEdhN1piUXdmeDJySXlnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJHU1JCWDVWRCIsIm1lIjp7ImlkIjoiMjMzMjA5OTQ2MzAzOjUwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg3Mjk1NTA0Mjk0MDgxOjUwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0hNMUtnREVMVHFsYndHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMkdKOVRBOExIR2l6QlVCUFZhMWZnTGNEbi95RFNlNWx2RXh0NStQdUxqOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ0ZGMXgwY0NxVmRBaUd1RTZmZVc5N0RuT3lCbm1nRFp6ekM0OGlNTC9WQXg1MEdoWmZicnhXbjFIT1U5V1BnenJMZVQvbDh6L0I1ZEFncEgxR3NmQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Inc2eUNSMEFza3RTYUZoR002eWxqSTMvZmhWNDRhdjVXTndtTEQzVGxSOTRjME9GSWVUSHhFL2RCU3pMV1VRQmJDTGJPVzdKWXpxQWcyKzVlak15ZWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzMjA5OTQ2MzAzOjUwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRoaWZVd1BDeHhvc3dWQVQxV3RYNEMzQTUvOGcwbnVaYnhNYmVmajdpNC8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjc5OTU1MywibGFzdFByb3BIYXNoIjoiSVhvRHAiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURhWSJ9", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED === "true", // Auto-reject calls feature (true or false)
};
