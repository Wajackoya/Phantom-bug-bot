//base by DGXeon x Phantom
//YouTube: @phantom-hacks01
//Instagram: phantom-hacks01
//Telegram: t.me/Hackerzone25
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@phantom-hacks01

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "254102510747"
global.ownername = "*♝∆𝕎𝔸𝕁𝔸ℂ𝕂𝕊"
global.ytname = "YT: phantom-hacks01"
global.socialm = ""
global.location = "Africa, Kenya, Mombasa"

global.ownernumber = '254102510747'  //creator number
global.ownername = '♝∆𝕎𝔸𝕁𝔸ℂ𝕂𝕊' //owner name
global.botname = 'xbug bot' //name of the bot

//sticker details
global.packname = 'Sticker By ♝∆𝕎𝔸𝕁𝔸ℂ𝕂𝕊|•☷•|(♖)'
global.author = 'Hallo\n\nContact: 254102510747'

//console view/theme
global.themeemoji = '🇰🇪'
global.wm = "♝∆𝕎𝔸𝕁𝔸ℂ𝕂𝕊"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaBROanEquiLW3ii1n47'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v4'

//reply messages
global.mess = {
    done: 'nishafinish kumalo!',
    prem: 'nitumie 50 bob mpesa nikueke premium😊',
    admin: 'wewe si admin🤣anguka nayo',
    botAdmin: 'ebu mnipatie cheo kwanza ',
    owner: 'kumbavu zako, mushkila🤣',
    group: 'acha ufala🤣 enda gc ',
    private: 'tumia DM',
    wait: 'ngoja comrade... ',    
    error: 'Nimeanguka🤣!',
}

global.thumb = fs.readFileSync('./modsMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
