require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp,  formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention,GIFBufferToVideoBuffer, getRandom } = require('./lib/myfunc')
const yts= require("yt-search")
global.db = require('quick.db')
global.tb = new db.table('exp')
global.gp= new db.table('grp')
const canvacord=require('canvacord')
const msgFilter= require('./lib/msgFilter.js')
    const { Chalk } = require("cfonts/lib/Chalk")
const { Doujin } = require("@shineiichijo/nhentai-pdf")
const { tmpdir } =require("os");
const { readFile } =require ("fs/promises")
const nHentai =require("shentai")
module.exports = arus = async (arus, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
      const icmd=body.startsWith(prefix)
     const isCmd = prefix.includes(body != '' && body.slice(0, 1)) && body.slice(1) != ''
     const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await arus.decodeJid(arus.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
    
        // Group
        const isGroup=  m.chat.endsWith("@g.us");
        const groupMetadata = m.isGroup ? await arus.groupMetadata(m.chat).catch(e => {}) : ''

        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
    const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
       const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
        //db fetch
    let _exp = tb.get(`${m.sender}.exp`)
    let _items = tb.get(`${m.sender}.items`)
    let anti=gp.get(`${m.chat}.link`)
   global.wel=gp.get(`${m.chat}.welc`)
   let _bank=tb.get(`${m.sender}.bank`)
   let _casino= gp.get(`${m.chat}.casino`)
   let _haigusha=tb.get(`${m.sender}.haigusha`)
   const suu=tb.get(`${m.chat}.hp`)
//db validation
let _anti= (anti)? anti : []
global._wel= (wel)?wel:[]
let expa = (_exp) ? _exp : 0
  let items = (_items) ? _items : []
_exp = tb.get(`${m.sender}.exp`)
 expa = (_exp) ? _exp : 0
exps = tb.get(`${m.sender}.exp`)
let casino=(_casino) ? _casino : []
let haigusha=(_haigusha) ? _haigusha : []
const _suu= (suu)?suu : []
//Exp
let charm = (items.includes('Exp Charm 💫️')) ? 2 : 1
    let rx = charm*Math.floor(Math.random() * 20) + 5
    const addxp = (expa) ? expa+rx : rx
    tb.set(`${m.sender}.exp`, addxp)

 
  

     function expc(exps) {

    
        if (exps < 500) {
                    var role = '⭐️ Citizen'
            var maxExp = 500
                } else if (exps < 1500) {
                    var role = '🔍️ Cleric'
            var maxExp = 1500
                } else if (exps < 4000) { 
                    var role = '🔮️Wizard'
            var maxExp = 4000
                } else if (exps < 7500) {
                    var role = '♦️ Mage'
            var maxExp = 7500
                } else if (exps < 10000) {
                    var role = '🎯️ Noble'
            var maxExp = 10000
                } else if (exps < 35000) {
                    var role = '✨️ Elite'
            var maxExp = 35000
                } else if (exps < 50000) {
                    var role = '🔶️ Ace'
            var maxExp = 50000
                } else if (exps < 100000) {
                    var role = '💎️ Supreme' 
            var maxExp = 100000
        } else if (exps < 250000) {
                    var role = '🛡️ Legendary' 
            var maxExp = 250000
        } else if (exps < 375000) {
                    var role = '🛡️ Legendary II' 
            var maxExp = 375000
            } else if (exps < 500000) {
                    var role = '🛡️ Legendary III' 
            var maxExp = 500000
        } else if (exps < 750000) {
                    var role = '❄️ Mystic' 
            var maxExp = 750000
        } else if (exps < 875000) {
                    var role = '❄️ Mystic II' 
            var maxExp = 875000
        } else if (exps < 1000000) {
                    var role = '❄️ Mystic III' 
            var maxExp = 1000000
        } else if (exps < 1250000) {
                    var role = '🔺️ Areo' 
            var maxExp = 125000
         } else if (exps < 1500000) {
                    var role = '🔺️ Areo II' 
            var maxExp = 150000
                } else if (exps < 1750000) {
                    var role = '🔺️ Areo III' 
            var maxExp = 1750000
        } else if (exps < 2000000) {
                    var role = '⚔️ Master' 
            var maxExp = 2000000
        } else if (exps < 225000) {
                    var role = '⚔️ Master' 
            var maxExp = 2250000
        } else if (exps < 250000) {
                    var role = '⚔️ Master II' 
            var maxExp = 2500000
        } else if (exps < 2750000) {
                    var role = '⚔️ Master III' 
            var maxExp = 2750000
        } else { 
                    var role = 'God👽'
            var maxExp = 10000000
                }
        return { role: role, maxE : maxExp }
}
function lz(val) {
  try {
    let expa = (val.data.us['exp']) ? val.data.us['exp'] : 0
    return true
  } catch(err) {
    //console.log('[ERR]', val)
    return false
    //console.log(val.data, val.id)
}

}    
    if (isGroup && _anti.includes(`${m.chat}`)) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isAdmins) return m.reply("*You are admin I wont remove you,cool*");
        m.reply("*Group Link Detected!!!*");
        await arus.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }
     
   

        // Push Message To Console && Auto Read
        if (m.message) {
            arus.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ ICHIKA ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> MSG'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
    

        switch(command) {
case 'hi':
    m.reply('hello')
       break
case '':
    if(icmd){


    const dbut = [
{buttonId: '=help', buttonText: {displayText: '🍂 Help'}, type: 1},
{buttonId: '=mods', buttonText: {displayText: '💥 Arus Team'}, type: 1}
]
let buttonMessaged = {
        image: {url:"https://telegra.ph/file/645707c1698c8a9515953.jpg"},
        caption: `*DID YOU MEAN =help ?*`,
        footer: '©Arus 2022',
        buttons: dbut,
        headerType: 4
    }

 await arus.sendMessage(m.chat,buttonMessaged,{quoted:m})
}
 break
      

case 'help':

const hlp=`
 *U^I^U ♡ Konichiwa ${pushname} Senpai, I'm Mizuhara*

🎋 \`\`\`Here are my listed commands, Have fun in using them:-\`\`\`

🈸 *GENERAL* 🈸

\`\`\`🎯 profile

🎯 rank

🎯 exp

🎯 delete

🎯 help

🎯 creator

🎯 mods

🎯 info\`\`\`
  
⛩️ *ANIME* ⛩️

\`\`\`🎯 neko

🎯 waifu

🎯 holo

🎯 fox_girl

🎯 kemonomimi

🎯 anime

🎯 manga

🎯 wallpaper\`\`\`

❄️ *GROUP COMMANDS* ❄️

\`\`\`🎯 ping

🎯 add

🎯 kick

🎯 promote

🎯 demote

🎯 group open

🎯 group close

🎯 linkgc

🎯 setgpfp

🎯 enable/disable

    🍂 antilink

    🍂 events\`\`\`

🍁 *UTILS* 🍁

\`\`\`🎯 sticker

🎯 toimg

🎯 togif

🎯 tourl\`\`\`

🏷️ *MEDIA* 🏷️

\`\`\`🎯 yts

🎯 ytv

🎯 yta

🎯 play

🎯 google

🎯 image\`\`\`

 🍁 *©Powered by Arus* 🍁`
  const hhbut = [
{buttonId: '=info', buttonText: {displayText: '📤 Info'}, type: 1},
{buttonId: '=profile', buttonText: {displayText: '🧧 Profile'}, type: 1}
]
let hbutto = {
        image: {url:"https://telegra.ph/file/9e58cb8f7cb23d7e7f94d.jpg"},
        caption: hlp,
        footer: '©Arus 2022',
        buttons: hhbut,
        headerType: 4
    }
arus.sendMessage(m.chat,hbutto,{quoted:m})

           //arus.sendMessage(m.chat,{video:fs.readFileSync('./src/help.mp4'),gifPlayback:true,caption:hlp},{quoted:m})

break
    case'lead':
    case'leaderboard':
  
    const a = tb.all()
  const all = a.filter(o => lz(o))
//  console.log(all)
  const srt = all.sort((x, y) => y.data.us['exp'] - x.data.us['exp'])
  //console.log(srt)
  const noa = (srt.length < 10) ? srt.length : 10
    
  let lb = '♕ *GLOBAL LEADERBOARD* ♕\n\n'
  for (let i = 0; i < noa; i++) {
   // let dt = await client.getContactById(`${srt[i].ID}.us`)
    //console.log(dt)
        
    //let pm = (srt[i].data.us.pokedex) ? srt[i].data.us.pokedex.length : 0
    let un = (srt[i].ID.pushname) ? srt[i].ID.pushname : 'User'
    lb += `*#${i+1}*\n🎖️ *Rank:* ${expc(srt[i].data.us['exp']).role}\n📠 *Exp:* ${srt[i].data.us['exp']}\n🪙 *Gold:* ${srt[i].data.us.gold}\n🎯️ *Tag:* ${srt[i].ID.substring(7, 11)}\n\n`

    }
    m.reply(lb)

break
case 'te':
 const au = tb.all()
 const counu=au.ID.length
 console.log(au)
break
case 'info':

const ibut = [
{buttonId: '=profile', buttonText: {displayText: '🎋 Profile'}, type: 1},
{buttonId: '=help', buttonText: {displayText: '🍂 Help'}, type: 1},
{buttonId: '=mods', buttonText: {displayText: '💥 Arus Team'}, type: 1}
]
const inf=`❁ ════ ❃•💙 *MIZUHARA* 💙•❃ ════ ❁
\`\`\`A FULL FLEDGED MULTI DEVICE WHATSAPP BOT WITH COOL FEATURES\`\`\`
❁ ═══ ❃•📕 *INFORMATION*📕•❃ ═══ ❁
\`\`\`A simple and easy-to-use WhatsApp bot project based on Multi-Device Baileys and written in JavaScript\`\`\`
❁ ══════ ❃•📄 *NOTE* 📄•❃ ══════ ❁
\`\`\`This bot is a free open source project by THE TEAM ARUS\`\`\`
❁ ═════ ❃•📑 *GITHUB* 📑•❃ ═════ ❁
*_LINK:- https://github.com/Arus-Bots/Mizuhara_*
❁ ═══ ❃•✍🏻 *CONTRIBUTE* ✍🏻•❃ ═══ ❁
\`\`\`Feel free to open issues regarding any problems or if you have any feature feel free to contact owner by typing =owner or =mods\`\`\` 
`
let buttonMessagei = {
        image: { url: "https://telegra.ph/file/05a5910097d3dd9743ebb.jpg" },
        caption: inf,
        footer: '©Arus 2022',
        buttons: ibut,
        headerType: 4
    }

 await arus.sendMessage(m.chat,buttonMessagei,{quoted:m})
break

case 'mods':
const mod=`❁ ════ ❃• *MODERATORS* •❃ ════ ❁
#1
💥 *Username: Pratyush*
🍁 *Contact: https://wa.me/+918231033230*
#2
💥 *Username: AiZen*
🍂 *Contact: https://wa.me/+918709022955*
#3
💥 *Username: Tomioka*
🍁 *Contact: https://wa.me/+917003213983*
#4
💥 *Username: Death*
🍁 *Contact: https://wa.me/+917604016334*
#5
💥 *Username: Arin*
🍁 *Contact: https://wa.me/+919330880626*
#6
💥 *Username: Manish*
🍁 *Contact: https://wa.me/+919106196230*
━━━━°❀•°:🤍 *MIZUHARA* 🤍:°•❀°━━━━`
const mbut = [
{buttonId: '=creator', buttonText: {displayText: '🎋 Creator'}, type: 1},
{buttonId: '=help', buttonText: {displayText: '🍂 Help'}, type: 1},
{buttonId: '=mods', buttonText: {displayText: '💥 Arus Team'}, type: 1}
]
let buttonMessagem = {
        image: { url: "https://telegra.ph/file/05a5910097d3dd9743ebb.jpg" },
        caption: mod,
        footer: '©Arus 2022',
        buttons: mbut,
        headerType: 4
    }

 await arus.sendMessage(m.chat,buttonMessagem,{quoted:m})
 break
    case 'owner': case 'creator': {
                arus.sendContact(m.chat, global.owner, m)
            }
            break
//////////////////////////GENERAL\\\\\\\\\\\\\\\\\\\\\\\\\\
case 'exp':
  const oo = tb.get(`${m.sender}.exp`)
  var exps = (oo) ? oo : 0
  const rdataa = expc(exps)
  var maxExp = rdataa.maxE
  m.reply(`🏷️ _*USERNAME 🏷️ :*_ ${pushname}
🧮 _*EXP 🧮 :*_ ${exps}/${maxExp}`)
break

case'rank':
                                

        if(m.isGroup){
          const canvacord = require('canvacord')
          const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
  const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
  const randomHexz = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
 //  const contact = await msg.getContact()
  //  foto1= await contact.getProfilePicUrl([sender]);
try {
        
    pfp=await arus.profilePictureUrl(m.sender, 'image')

      } catch (e) {
  //let [pfp ] = await Promise.all([ contacts.getProfilePicUrl(contacts)])
  pfp ='https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
// 
}
bgp=await getBuffer('https://www.wallpapermaiden.com/wallpaper/36472/download/1920x1080/kanojo-okarishimasu-mizuhara-chizuru-lying-down-pretty-anime-girl-sweater-anime.jpeg')
  const o = tb.get(`${m.sender}.exp`)
  var exps = (o) ? o : 0
  const rdata = expc(exps)
  var maxExp = rdata.maxE
  var status = 'online' 
  const rank = new canvacord.Rank()
        .setBackground("IMAGE",bgp)
        .renderEmojis(true)
        .setAvatar(pfp)
        .setCurrentXP(Number(exps))
        .setRequiredXP(Number(maxExp))
        .setStatus(status)
        .setRankColor('#2c2f33', '#2c2f33')
        .setProgressBar([randomHexs, randomHex], 'GRADIENT',true)
        .setUsername(pushname )
       .setDiscriminator("0007")
        .setLevel(0, '1', false)
        .setRank(2, '1', false)

  rank.build().then(async(data)=>{
   // const rjpg=await getBuffer(data)
const rcpt=`*🍁 ${pushname}\'s rank 🍁*
*🔖 Rank: ${exps}/${maxExp}*
*🧮 Role: ${rdata.role}*
`
arus.sendMessage(m.chat,{image:data,caption:rcpt},{quoted:m})
  })

}
break


//////////////////////////UTILS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


 
    
case  'sticker': case 's': case 'stickergif': case 'sgif':
 {
    if (!quoted) m.reply(`*Tag/Reply a image/video*`)

    m.reply(mess.wait)
            if (/image/.test(mime)) {
        let media = await quoted.download()
        let encmedia = await arus.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return m.reply('*OOps I cant\'s make sticker of videos more than 10sec !*')
        let media = await quoted.download()
        let encmedia = await arus.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
    } else {
        m.reply(`*Please caption or tag a video/image*`)
        }
    }
    break
    case 'profile':
 const o = tb.get(`${m.sender}.exp`)
var exps = (o) ? o : 0
const rdata = expc(exps)
var maxExp = rdata.maxE
var bio= await arus.fetchStatus(m.sender)
var bioo = bio.status
const s = tb.get(`${m.sender}.haigusha`)
  var SO = (s) ? s : 'None'
//console.log(bio)
const adn= isAdmins? "True":"False"
try {
        
    pfp=await arus.profilePictureUrl(m.sender, 'image')

      } catch (e) {
 
  pfp ='https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
}
 const   profile = `
🏷️ _*USERNAME 🏷️ :*_ ${pushname}

💥 _*BIO 💥 :*_ ${bioo}

🧧 _*GROUP 🧧 :*_ ${groupName}

♠️ _*ADMIN ♠️ :*_ ${adn}

🧮 _*EXP 🧮 :*_ ${exps}/${maxExp}

🎗️ _*ROLE 🎗️ :*_ ${rdata.role}

🎋 _*HAIGUSHA 🎋 :*_ ${SO}
` 
const buttonsd = [
{buttonId: '=rank', buttonText: {displayText: '🎋 Rank'}, type: 1},
{buttonId: '=help', buttonText: {displayText: '🍂 Help'}, type: 1}
]
let buttonMessage = {
        image: { url: pfp },
        caption: profile,
        footer: '©Arus 2022',
        buttons: buttonsd,
        headerType: 4
    }
arus.sendMessage(m.chat,buttonMessage,{quoted:m})
break

case  'take':
 {
    if (!quoted) m.reply(`*Tag/Reply a image/video*`)

    m.reply(mess.wait)
 if (/sticker/.test(mime)) {
    const hamma_sticker = require('wa-sticker-hamma')
   mediaa = await arus.downloadAndSaveMediaMessage(quoted)
                anu = args.join(' ').split('|')
                satu = anu[0] !== '' ? anu[0] : `lol`
                dua = typeof anu[1] !== 'undefined' ? anu[1] : `${pushname}`  
                const webpWithMetadata = await hamma_sticker.setMetadata(`${satu}`, `${dua}`,mediaa) 
arus.sendMessage(m.chat,{sticker:{url: webpWithMetadata}},{quoted:m})
            }
  }
  break    
  case 'toimage': case 'toimg': {
                if (!quoted) m.reply('Reply Image')
                if (!/webp/.test(mime)) m.reply(`Reply to a sticker`)
                m.reply(mess.wait)
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    arus.sendMessage(m.chat, { image: buffer,caption:'©MIZUHARA-2022' }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }    
break
case 'tourl': {
                m.reply(mess.wait)
        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
 case 'togif': {
                if (!quoted) m.reply('Reply to a sticker')
                if (!/webp/.test(mime)) m.reply(`Reply to a sticker`)
                m.reply(mess.wait)
        let { webp2mp4File } = require('./lib/uploader')
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await arus.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '©MIZUHARA-2022' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
          
        case 'chatid':
        m.reply(`${m.chat}`)
        break
//////////////////////////GROUP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    case 'kick': {
        if (!m.isGroup) m.reply(mess.group)
                if (!isBotAdmins) m.reply(mess.botAdmin)
                if (!isAdmins) m.reply(mess.admin)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await arus.groupParticipantsUpdate(m.chat, [users], 'remove')
 arus.sendMessage(m.chat,{text:`Kicked @${users.split("@")[0]} successfuly `,contextInfo: { mentionedJid: [users] }})
    }
    break
    case 'add': {
        if (!m.isGroup) m.reply(mess.group)
                if (!isBotAdmins) m.reply(mess.botAdmin)
                if (!isAdmins) m.reply(mess.admin)
        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await arus.groupParticipantsUpdate(m.chat, [users], 'add')
        arus.sendMessage(m.chat,{text:`Added @${users.split("@")[0]} successfuly `,contextInfo: { mentionedJid: [users] }})
    }
    break
    case 'promote': {
        if (!m.isGroup) m.reply(mess.group)
                if (!isBotAdmins) m.reply(mess.botAdmin)
                if (!isAdmins) m.reply(mess.admin)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await arus.groupParticipantsUpdate(m.chat, [users], 'promote')
         arus.sendMessage(m.chat,{text:`woh woh!! looks like someone promoted @${users.split("@")[0]}`,contextInfo: { mentionedJid: [users] }})
    }
    break
    case 'demote': {
        if (!m.isGroup) m.reply(mess.group)
                if (!isBotAdmins) m.reply(mess.botAdmin)
                if (!isAdmins) m.reply(mess.admin)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await arus.groupParticipantsUpdate(m.chat, [users], 'demote')
        arus.sendMessage(m.chat,{text:`OOPs!! looks like someone demoted @${users.split("@")[0]}`,contextInfo: { mentionedJid: [users] }})
   }
    break
  case 'setdesc': {
                if (!m.isGroup) m.reply(mess.group)
                if (!isBotAdmins) m.reply(mess.botAdmin)
                if (!isAdmins) m.reply(mess.admin)
                if (!text) m.reply('Text ?')
                await arus.groupUpdateDescription(m.chat, text)
            m.reply('*Group Description Changed successfuly*')
            }
            break 
case 'setppgroup': case 'setppgrup': case 'setgpfp': {
                if (!m.isGroup) m.reply(mess.group)
                if (!isAdmins) m.reply(mess.admin)
                if (!quoted) m.reply(`*reply to a image/video* ${prefix + command}`)
                if (!/image/.test(mime)) m.reply(`*reply to a image/video* ${prefix + command}`)
                if (/webp/.test(mime)) m.reply(`*reply to a image/video* ${prefix + command}`)
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                await arus.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply('Group pfp has been changed...')
                }
                break 
case 'tagall':
case 'ping':
  if (!m.isGroup) m.reply(mess.group)
                if (!isBotAdmins) m.reply(mess.botAdmin)
                if (!isAdmins) m.reply(mess.admin) 

if(q) { var Text =`📌 *Message - ${q}*\n*🍁 Group name - ${groupName}*` } else {  var Text = `*${groupName}*`}

let menText = `${Text}\n*💫 ping by - ${pushname}*\n*🕛 time - ${time}*\n\n`
for (let memNum of participants) {
    
    if( groupAdmins.includes(memNum.id) === true ) { var emo = '👑'} else { var emo = '❄️'} 
    menText += `${emo} *@${memNum.id.split('@')[0]}*\n`
    //members_id.push(memNum.jid)
}
arus.sendMessage(m.chat,{text:menText,mentions: participants.map(a => a.id)},{quoted:m})
break

  case 'group': {
                if (!m.isGroup) m.reply(mess.group)
                if (!isBotAdmins) m.reply(mess.botAdmin)
                if (!isAdmins) m.reply(mess.admin)
             if (args[0] === 'open'){
                await arus.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Group open*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await arus.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Group closed*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: '=group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: '=group close', buttonText: { displayText: 'Close' }, type: 1 },
                        { buttonId: '=linkgc', buttonText: { displayText: 'Group link' }, type: 1 }
                    ]
                    await arus.sendButtonText(m.chat, buttons, `*Group Open/Close*`, '©MIZUHARA-BOTTO 2022', m)

            }
}
         
             break
case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) m.reply(mess.group)
                let response = await arus.groupInviteCode(m.chat)
         //   m.reply('Has been sent to you in peronal message')
         await       arus.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
 break
  case 'delete': case 'del': {
                if (!m.quoted) m.reply("Shall I Delete you?")
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) m.reply('only my messages can be deleted')
                arus.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
  case 'enable':
                                  
                                      if (!isGroup) return m.reply("Only groups");
                                      if (!isAdmins && !m.key.fromMe) return m.reply("Only group admins");
                                      if (args[0] == "antilink") {
                                        if (_anti.includes(`${m.chat}`)) return m.reply("Activated!!");
                                      gp.set(`${m.chat}.link`,anti+`${m.chat}`)
                                      m.reply('Activated,feeling sorry for those link senders.')
                                      } else if(args[0] == "events"){
                                       if (_wel.includes(`${m.chat}`)) return m.reply("Activated!!");
                                      gp.set(`${m.chat}.welc`,wel+`${m.chat}`)
                                      m.reply("Yeah I am ready to welcome new members...")
                                  }
                                      else if(args[0] == 'casino'){
                                        if(casino.includes(`${m.chat}`)) return m.reply("Already activated!!")
                                         gp.set(`${m.chat}.casino`,_casino+`${m.chat}`)  
                                         m.reply("Casino has been activated.") 
                                      }
                                   else{
                                        m.reply("No such options")
                                      } 

                                
  break
 case 'disable':
 if (!m.isGroup) return m.reply("Only groups");
if (!isAdmins && !m.key.fromMe) return m.reply("Only group admins");
  if (args[0] == "antilink") {
gp.delete(`${m.chat}.link`,`${m.chat}`)
m.reply("Successfully deactivated antilink!");  
 }if (args[0] == "events") {
gp.delete(`${m.chat}.welc`,`${m.chat}`)
m.reply("Successfully deactivated events!");  
 }
 if (args[0] == "casino") {
gp.delete(`${m.chat}.casino`,`${m.chat}`)
m.reply("Successfully deactivated casino!");  
 }else{
    m.reply("No such options")
 }
break
//////////////////////////YOUTUBE\\\\\\\\\\\\\\\\\\\\\\\\\\\\
case  'play': case 'ytplay': {
    if (!q) m.reply(`Example : ${prefix + command} story wa anime`)
    let yts = require("yt-search")
    let search = await yts(q)
    let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
    let buttons = [
        {buttonId: `=ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
        {buttonId: `=ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
    ]
    let buttonMessage = {
        image: { url: anu.thumbnail },
        caption: `
🎯 Title : ${anu.title}
🎗️ ID : ${anu.videoId}
⏱️ Duration : ${anu.timestamp}
🌸 Viewers : ${anu.views}
🍁 Upload At : ${anu.ago}
📌 Author : ${anu.author.name}
📓 Channel : ${anu.author.url}
🎬 Description : ${anu.description}
🌐 Url : ${anu.url}`,
        footer: '©Arus 2022',
        buttons: buttons,
        headerType: 4
    }
    arus.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ytmp3': case 'ytaudio': case 'yta': {
    let { yta  } = require('./lib/y2mate')
    if (!q) m.reply(`*Where is the yt-link dude?*`)
   
    var search = await yts(q)
    //console.log(search)
    // anu = search.videos[Math.floor(Math.random() * search.videos.length)]
    search=search.all
    let quality = args[1] ? args[1] : '128kbps'
    let media = await yta(q, quality)
    if (media.filesize >= 100000) return m.reply('Oops too big '+util.format(media))
    const ycp=`*🎬YOUTUBE MUSIC🎬*
          
0:04 ━━●──────────── 3:15     
              
⇆ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻
                     
*📓Title* : ${search[0].title}
*🎤Type* : MP3
*🎬Description* : ${search[0].description}
*🌐Link* : ${q}`
arus.sendMessage(m.chat,{image:{url:search[0].thumbnail},caption:ycp},{quoted:m,})
arus.sendMessage(m.chat, { audio: { url: media.dl_link }, contextInfo: {
                    externalAdReply: {
                        title: search[0].title.substr(0, 30),
                        body: `author : ${search[0].author.name.substr(0, 20)}`,
                        mediaType: 2,
                        thumbnail: await getBuffer(`https://i.ytimg.com/vi/${search[0].videoId}/hqdefault.jpg`),
                        mediaUrl: media.url
                    }
                }, mimetype: 'audio/mpeg', fileName: `${search[0].title}.mp3` }, { quoted: m})
}
break
case 'ytmp4': case 'ytvideo': case 'ytv': {
    let { ytv } = require('./lib/y2mate')
    if (!q) m.reply(`*Where is the yt-link dude?*`)
    let quality = args[1] ? args[1] : '360p'
    let media = await ytv(q, quality)
    if (media.filesize >= 100000) return m.reply('Oops!!'+util.format(media))

arus.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🎯 Title : ${media.title}\n🎗️ File Size : ${media.filesizeF}\n📓 Url : ${isUrl(text)}\n📌 Ext : MP3\n🏷️ Resolution : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'yts': case 'ytsearch': {
    if (!q) m.reply(`Example : ${prefix + command} story wa anime`)
    let yts = require("yt-search")
    let search = await yts(q)
    let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
    let no = 1
    for (let i of search.all) {
        teks += `📓 No : ${no++}\n🎬 Type : ${i.type}\n📌 Video ID : ${i.videoId}\n🎯 Title : ${i.title}\n🌸 Views : ${i.views}\n🎗️ Duration : ${i.timestamp}\n🍁 Upload At : ${i.ago}\n🏷️ Author : ${i.author.name}\n🌐 Url : ${i.url}\n\n────────────────────────────\n\n`
    }
    arus.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },jpegThumbnail:fs.readFileSync('./src/yts.jpg'),  caption: teks, }, { quoted: m, })
}
break
case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await arus.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) =>m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await arus.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
     case 'instagram': case 'ig': case 'igdl': {
                if (!q) return m.reply('Enter Query Url!')
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(q)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(q)[0] }, 'apikey'))
                    for (let media of anu.data) arus.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(q)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(q)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(q)[0] }, 'apikey'))
                    arus.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(q)[0]}`, m)
                }
            }
            break

case 'lyrics':
  const Genius =require("genius-lyrics")
const Client = new Genius.Client();
  const searches = await Client.songs.search(q);

  // Pick first one
  const firstSong = searches[0];
  console.log("About the Song:\n", firstSong, "\n");
  
  // Ok lets get the lyrics
  const lyrics = await firstSong.lyrics();
  console.log("Lyrics of the Song:\n", lyrics, "\n");
  const reactionMessage = {
    react: {
        text: "🎶",
        key:m.key
    }
}

 await arus.sendMessage(m.chat, reactionMessage)
  arus.sendMessage(m.chat, { text:lyrics, contextInfo: {
    externalAdReply: {
        title:'Lyrics-',
        body:firstSong.title,
        thumbnail: await getBuffer(firstSong.thumbnail),
        //mediaUrl: media.url
    }
}}, { quoted: m})

break
case 'gimage':case 'image': {
        if (!text) m.reply(`Baka!! what image you wnt?`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `${prefix}gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `
💥 *Query* : ${text}
`,
                    footer: '©Arus 2022',
                    buttons: buttons,
                    headerType: 4
                }
                arus.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
 case 'google': {
                if (!text) m.reply(`Example : ${prefix + command} Russia vs Ukraine`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `📒 *Title* : ${g.title}\n`
                teks += `🎯 *Description* : ${g.snippet}\n`
                teks += `🌐 *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
 //////////////////////////ANIME\\\\\\\\\\\\\\\\\\\\\\\\               
 case 'waifu':
                waifud = await axios.get('https://waifu.pics/api/sfw/waifu')
              
                var wbutss = [
        {buttonId: `${prefix}waifu`, buttonText: {displayText: `➡️NEXT`}, type: 1},
        {buttonId: `${prefix}neko`, buttonText: {displayText: `🐱Neko`}, type: 1},
        ]
      let buttonsMessage = {
       image: await getBuffer(waifud.data.url),
       caption:  `*Here is your waifu*`,
      footer: '©Arus 2022',
      buttons: wbutss,
      headerType: 4
      }
            await arus.sendMessage(m.chat,buttonsMessage, { quoted:m }).catch(err => {
                    return('error..')
                })
                break  
 case 'couplepp': case 'ppcouple': {
                //replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                arus.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                arus.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
        break


case 'neko':
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
              
                var wbutsss = [
        {buttonId: `${prefix}neko`, buttonText: {displayText: `➡️NEXT`}, type: 1},
        {buttonId :`${prefix}waifu`,buttonText:{displayText:`👯‍♀️Waifu`},type:1}
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `*Here is your 🐱Neko*`,
      footer: '©Arus 2022',
      buttons: wbutsss,
      headerType: 4
      }
            await arus.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('error..')
                })               
                break                               
 case 'holo':
case 'fox_girl':
case 'kemonomimi':
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                
                           var wbuttsss = [
        {buttonId: `${prefix}${command}`, buttonText: {displayText: `➡️NEXT`}, type: 1},
        
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `*Here You Go...*`,
      footer: '©Arus 2022',
      buttons: wbuttsss,
      headerType: 4
      }     
            await arus.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('error..')
                })
                break   
                case 'haigusha' : 
const waifu= await axios.get(`https://reina-api.vercel.app/api/mwl/random`)
//const avv = `❤️ *Name : ${waifu.data.name}*\n\n💎️ Description : ${waifu.data.description}\n\n💚️ Source : ${waifu.data.series.name}\n\n✨️ URL: ${waifu.data.url}`
//console.log(hai.data.display_picture)
let hait = "";
hait += `💙 *Name: ${waifu.data.name}*\n`;
if (waifu.data.original_name !== "" && waifu.data.original_name !== null)
    hait += `💚 *Original Name: ${waifu.data.original_name}*\n`;
if (waifu.data.weight !== null) hait += `⚖ *Weight: ${waifu.data.weight}*\n`;
if (waifu.data.height !== null) hait += `📍 *Height: ${waifu.height}*\n`;
if (waifu.data.bust !== null) hait += `💠 *Bust: ${waifu.data.bust}*\n`;
if (waifu.data.hip !== null) hait += `🎗 *Hip: ${waifu.data.hip}*\n`;
if (waifu.data.waist !== null) hait += `🎀 *Waist: ${waifu.data.waist}*\n`;
if (waifu.data.blood_type !== null)
    hait += `🩸 *Blood Type: ${waifu.data.blood_type}*\n`;
if (waifu.data.origin !== null && waifu.data.origin !== "") hait += `🎐 *Origin: ${waifu.data.origin}*\n`;
if (waifu.data.age !== null&& waifu.data.age !== 0) hait += `🎂 *Age: ${waifu.data.age}*\n`;
if (waifu.data.likes !== null) hait += `🖤 *Likes: ${waifu.data.likes}*\n`;
hait += `🏅 *Like Rank: ${waifu.data.like_rank}*\n`;
hait += `📈 *Popularity Rank: ${waifu.data.popularity_rank}*\n\n`;
hait += `💛 *Source: ${waifu.data.series.name}*\n\n`;
hait += `🌐 *URL: ${waifu.data.url}*\n\n`;
hait += `❤ *Description:* ${waifu.data.description}\n`;
console.log(hait)

const suu =tb.set(`${m.chat}.hp`,waifu.data.display_picture )
//console.log(suu)

   const wname = ` ${waifu.data.name}`
   //var wan = wname.replace(' (husbu)', '')
   const wanarr = [wname]
   await fs.writeFileSync(`./src/${m.sender}.json`, JSON.stringify(wanarr))
   const haibu=[{buttonId:'=marry',buttonText:{displayText:'💕 Marry'},type:1},
   {buttonId:'=divorce',buttonText:{displayText:'💔 Divorce'},type:1}]
   const haib={
 image:{url:waifu.data.display_picture},
 caption:hait,
buttons:haibu,
footer:'ARUS 2022',
headerType:4
   }
arus.sendMessage(m.chat,haib,{quoted:m})
console.log(waifu.data.name)
break

case'marry':
case'claim':
const hp = tb.get(`${m.chat}.hp`)
 tb.set(`${m.sender}.hp`,hp)
const ssar = JSON.parse(fs.readFileSync('./src/hai.json'))
const hs = fs.readFileSync(`./src/${m.sender}.json`)
    const hs1 = JSON.parse(hs)
    try {
        
    pfp=await arus.profilePictureUrl(m.sender, 'image')

      } catch (e) {
  //let [pfp ] = await Promise.all([ contacts.getProfilePicUrl(contacts)])
  pfp ='https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
// 
}
    if (ssar.includes(hs1[0])) {
       
        await m.reply('Already Taken! 💔️')

    } else {
       
        tb.set(`${m.sender}.haigusha`, hs1[0])
     
            ssar.push(hs1[0])
           
            fs.writeFileSync('./src/hai.json', JSON.stringify(ssar))
            const thu=axios.get(`https://api.popcat.xyz/ship?user1=${hp}&user2=${pfp}`)
            console.log(thu)
            
  
            const sp = `Congratulations! You are now married to *${hs1[0]}* 🎉️`
        // await msg.reply( `Congratulations! You are now married to *${hs1[0]}* 🎉️`)
        //msg.reply(mediacd,from,{caption: sp})
       // const thuu=await getBuffer(thu)
  //  arus.sendMessage(m.chat,{image:{url:thuu},caption:sp},{quoted:m})
  m.reply(sp)
}
break


case'divorce':
if(isGroup){
const none = 'none'
//const mon = tb.get(`${sender}.gold`)
//f(mon < 2000 )  return msg.reply('you broke. make sure you have atleast 2k gold before you marry')
//tb.set(`${sender}.gold`,mon - 2000)
 
const ds=fs.readFileSync(`./src/${m.sender}.json`)
   const namee = tb.get(`${m.sender}.haigusha`)
     tb.delete(`${m.sender}.haigusha`,ds[0])
         await m.reply( `Sadddd! you have divorced ${namee}`)

  //  tb.const(`${sender}.haigusha`)
}

break
case 'anime':
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
    
    
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `🎀 *Title: ${result.title}*\n`;
    details += `🎋 *Format: ${result.type}*\n`;
    details += `📈 *Status: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
    details += `🍥 *Total episodes: ${result.episodes}*\n`;
    details += `🎈 *Duration: ${result.duration}*\n`;
    details += `🧧 *Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `✨ *Based on: ${result.source.toUpperCase()}*\n`;
    details += `📍 *Studios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `🎴 *Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `💫 *Premiered on: ${result.aired.from}*\n`;
    details += `🎗 *Ended on: ${result.aired.to}*\n`;
    details += `🎐 *Popularity: ${result.popularity}*\n`;
    details += `🎏 *Favorites: ${result.favorites}*\n`;
    details += `🎇 *Rating: ${result.rating}*\n`;
    details += `🏅 *Rank: ${result.rank}*\n\n`;
    if (result.trailer.url !== null)
      details += `♦ *Trailer: ${result.trailer.url}*\n\n`;
    details += `🌐 *URL: ${result.url}*\n\n`;
    if (result.background !== null)
      details += `🎆 *Background:* ${result.background}*\n\n`;
    details += `❄ *Description:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
arus.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   

break
case 'manga':
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) m.reply('*Don\'t be a stupid dude what u want to search*')
let srh = await manga.searchManga(q)

    let mang = `🎀 *Title: ${srh.data[0].title}*\n`;
    mang += `📈 *Status: ${srh.data[0].status}*\n`;
    mang += `🌸 *Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `🎗 *Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `🧧 *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `✨ *Published on: ${srh.data[0].published.from}*\n`;
    mang += `🌟 *Score: ${srh.data[0].scored}*\n`;
    mang += `🎐 *Popularity: ${srh.data[0].popularity}*\n`;
    mang += `🎏 *Favorites: ${srh.data[0].favorites}*\n`;
    mang += `✍ *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n🌐 *URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null)
      mang += `🎆 *Background:* ${srh.data[0].background}`;
    mang += `❄️ *Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
arus.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break

case 'wallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) m.reply('Tell me clearly what wallpaper you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `${prefix}${command} ${q}`, buttonText: {displayText: `➡️NEXT`}, type: 1},
        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: '©Arus 2022',
      buttons: walb,
      headerType: 4
      }     
            await arus.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('error..')
                })
//arus.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break

case 'cry':
case 'kiss':
case 'bully':
case 'hug':
case 'lick':
case 'cuddle':
case 'smug':
case 'pat':
case 'highfive':
case 'bonk':
case 'yeet':
case 'blush':
case 'wave':
case 'smile':
case 'handhold':
case 'nom':
case 'bite':
case 'glomp':
case 'kill':
case 'slap':
case 'cringe':
case 'wink':
case 'happy':
case 'happy':
case 'poke':
case 'dance':
var slap = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
var buff = await getBuffer(slap.url)
var sgif = await GIFBufferToVideoBuffer(buff)
  mentioned = mentionByTag
let rtag =   await (mentioned[0])
//const rtag=rtagg.map(v => v.id)
let usep=m.sender
const ment=[usep,rtag]
let recp=``
if(command=='cry'){
    //console.log(recp)
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.cry} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]} ${reac.cry} @${rtag.split("@")[0]} `

console.log(recp)
}
}
if(command=='kiss'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.kiss} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.kiss}  @${rtag.split("@")[0]}`
}
console.log(recp)
}
if(command=='bite'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.bite} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.bite}  @${rtag.split("@")[0]}`
}
console.log(recp)
}if(command=='bully'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.bully} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.bully}  @${rtag.split("@")[0]}`
}
console.log(recp)
}if(command=='hug'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.hug} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.hug}  @${rtag.split("@")[0]}`
}
console.log(recp)
}if(command=='lick'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.lick} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.lick}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}if(command=='cuddle'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.cuddle} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.cuddle}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}if(command=='pat'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.pat} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.pat}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}if(command=='smug'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.smug} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.smug}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}if(command=='highfive'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.highfive} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.highfive}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}if(command=='bonk'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.bonk} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.bonk}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}if(command=='yeet'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.yeet} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.yeet}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}if(command=='blush'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.blush} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.blush}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}if(command=='wave'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.wave} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}` 
 recp=`@${m.sender.split("@")[0]}  ${reac.wave}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='smile'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.smile} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.smile}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='handhold'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.handhold} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.handhold}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='nom'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.nom} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.nom}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='glomp'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.glomp} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.glomp}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='kill'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.kill} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.kil}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='slap'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.slap} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.slap}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='cringe'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.cringe} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.cringe}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='wink'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.wink} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.wink}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='happy'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.happy} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.happy}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='poke'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.poke} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.poke}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
if(command=='dance'){
if(!q){
     recp=`@${m.sender.split("@")[0]} ${reac.dance} themselves`
     console.log(recp)
}else{
const rcpp=`@${rtag.split("@"[0])}`
 recp=`@${m.sender.split("@")[0]}  ${reac.dance}  @${rtag.split("@")[0]}  `
}
console.log(recp)
}
arus.sendMessage(m.chat,{video: sgif,gifPlayback:true,mentions:ment,caption:recp},{quoted:m})

break
case 'pick':
if(!q) return m.reply('Shall I pick you?')
  let member = participants.map(u => u.id)
            let me = m.sender
            let pick = member[Math.floor(Math.random() * member.length)]
arus.sendMessage(m.chat,{text:`${q} in this group\n *@${pick.split("@")[0]}*`,mentions:[pick]},{quoted:m})
break

  case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await arus.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(` Broadcasting in ${anu.length} Group Chat, in ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    
                      let txt = `「 MIZUHARA BROADCAST 」\n\n${text}\n\nRegards~${pushname}`
const bcbut=[{buttonId:"=info",buttonText:{displayText:"Info"},type:1},
{buttonId:"=creator",buttonText:{displayText:"Creator"},type:1},
{buttonId:"=mods",buttonText:{displayText:"Arus Team"},type:1}]

const bcbutt={
    image: fs.readFileSync('./bc.jpg'),
    caption:txt,
    footer:`©Arus 2022`,
    buttons: bcbut,
    headerType:1
} 
//const stick=fs.readFileSync(`./src/right.webp`)
//await arus.sendMessage(m.chat,{sticker:stick},{quoted:m})      
await arus.sendMessage(i,bcbutt)
                    }
                m.reply(`Successfuly Broadcasted in ${anu.length} Groups`)
            }
            break

  case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await arus.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 arus.sendTextWithMentions(m.chat, teks, m)
             }
             break            
            default:
arus.sendMessage(m.chat,{text:`Baka!! Try using the commands from help list`},{quoted:m})
        }
        

    } catch (err) {
        console.log(util.format(err))
        const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
        arus.sendMessage("120363039020236931@g.us",{text:`*Time:* ${time}\n\n`+`*ERROR:* ${util.format(err)}`})
    
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
