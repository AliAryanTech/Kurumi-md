require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const { Character } = require('mailist')
const moment = require('moment-timezone')
const usere = JSON.parse(fs.readFileSync('./lib/user.json'))
const { JSDOM } = require('jsdom')
const { createWorker } = require('tesseract.js');
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const cron = require('node-cron')
const { Primbon } = require('scrape-primbon')
const Carbon = require("unofficial-carbon-now")
const primbon = new Primbon()
const { Simp, Pokemon, Ship, IShipOptions } = require('@shineiichijo/canvas-chan')
const { smsg, formatp,  formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention,GIFBufferToVideoBuffer, getRandom } = require('./lib/myfunc')
const Levels = require('discord-xp')
const mongoose = require('mongoose');
const user = require("./models/user")
const bot = require("./models/bot")
const group = require("./models/group")
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
Levels.setURL(mongodb)
console.log("Connected to the database1")
const canvacord=require('canvacord')
const xfar = require("xfarr-api")
const akaneko = require('akaneko')
const gen = require("images-generator")
const { soyultro } = require("soyultro")
const hxz = require("hxz-api")
const cheerio = require('cheerio')
const msgFilter= require('./lib/msgFilter.js')
const { Chalk } = require("cfonts/lib/Chalk")
const { Doujin } = require("@shineiichijo/nhentai-pdf")
const { tmpdir } = require("os");
const { readFile } = require ("fs/promises")
const nHentai = require("shentai")                              
const db = require('quick.db')
module.exports = arus = async (arus, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const icmd = body.startsWith(prefix)
        const isCmd = prefix.includes(body != '' && body.slice(0, 1)) && body.slice(1) != ''
        const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await arus.decodeJid(arus.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
		 const botName = process.env.NAME || "Mizuhara"
		const ter = args.join(' ') 
        const contant = q = args.join(" ")
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
if(icmd&&!isGroup) return m.reply("You cannot use any command in dm")

if (icmd) {	

			 const randomXp = Math.floor(Math.random() * 3) + 1;//Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(m.sender, "bot", randomXp); 
    if (hasLeveledUp) {
        const user = await Levels.fetch(m.sender, "bot");
        // ROLE (Change to what you want, or add) and you can change the role sort based on XP.
        const levelRole = user.level
        var role = '1st Dan'
        if (levelRole <= 2) {
            var role = '2nd Dan'
        } else if (levelRole <= 4) {
            var role = '3rd Dan'
        } else if (levelRole <= 6) {
            var role = 'Mentor'
        } else if (levelRole <= 8) {
            var role = 'Expert'
        } else if (levelRole <= 10) {
            var role = 'Master'
        } else if (levelRole <= 12) {
            var role = 'Grand Master'
        } else if (levelRole <= 14) {
            var role = 'Brawler'
        } else if (levelRole <= 16) {
            var role = 'Marauder'
        } else if (levelRole <= 18) {
            var role = 'Fighter'
        } else if (levelRole <= 20) {
            var role = 'Berserker'
        } else if (levelRole <= 22) {
            var role = 'Warrior'
        } else if (levelRole <= 24) {
            var role = 'Avenger'
        } else if (levelRole <= 26) {
            var role = 'Vindicator'
        } else if (levelRole <= 28) {
            var role = 'Juggernaut'
        } else if (levelRole <= 30) {
            var role = 'Usurper'
        } else if (levelRole <= 32) {
            var role = 'Vanquisher'
        } else if (levelRole <= 34) {
            var role = 'Destroyer'
        } else if (levelRole <= 36) {
            var role = 'Savior'
        } else if (levelRole <= 38) {
            var role = 'Overlord'
        } else if (levelRole <= 40) {
            var role = 'Genbu'
        } else if (levelRole <= 42) {
            var role = 'Byakko'
        } else if (levelRole <= 44) {
            var role = 'Seiryu'
        } else if (levelRole <= 46) {
            var role = 'Suzaku'
        } else if (levelRole <= 50) {
            var role = 'Mighty Ruler'
        } else if (levelRole <= 52) {
            var role = 'Revered Ruler'
        } else if (levelRole <= 53) {
            var role = 'Divine Ruler'
        } else if (levelRole <= 54) {
            var role = 'Enternal Ruler'
        } else if (levelRole <= 56) {
            var role = 'Fujin'
        } else if (levelRole <= 58) {
            var role = 'Raijin'
        } else if (levelRole <= 60) {
            var role = 'Yaksa'
        } else if (levelRole <= 62) {
            var role = 'Ryujin'
        } else if (levelRole <= 64) {
            var role = 'Emperor'
        } else if (levelRole <= 66) {
            var role = 'Anime God'
        } else if (levelRole <= 68) {
            var role = 'True God'
        } else if (levelRole <= 70) {
            var role = 'The Prime'
        }
        await arus.sendMessage(m.chat, { image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5kFSuoFniw90CNXW8z1FkDma4WF6fJyL3Q&usqp=CAU" }, caption: `* LEVEL UP! *\n\n*📃️Name*: ${pushname}\n*🍀Exp*: ${user.xp} / ${Levels.xpFor(user.level + 1)}\n*🎐Level*: ${user.level} 🆙 \n*🔮️Role*: *${role}*\n\nCongrats!! 🎉🎉`}, { quoted: m });
    }
}
		try {
		let Igroup = await group.findOne({ id: m.chat})
		if (Igroup) {
			let hh = Igroup.mod || "false"
    if (isGroup && hh == 'true') {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isAdmins) return 
        if (isBotAdmins) return 
let response = await arus.groupInviteCode(m.chat)
if (budy.includes(`//chat.whatsapp.com/${response}`)) return
        m.reply("Group Link Detected!!");
        await arus.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }
		}
		} catch (err) {
			console.log(err)
		}
     ///////////////pokemon-game////////////
	 /////////////////////////////////////
   

        // Push Message To Console && Auto Read
        if (m.message) {
            arus.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ ICHIKA ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> MSG'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
    let Iban = await user.findOne({ id: m.sender})
		if(icmd && Iban.ban == 'true') return m.reply(`You are banned from using commands ❌`)
	 
       switch(command) {
case '':
    if(icmd){


    const dbut = [
{buttonId: `${prefix}help`, buttonText: {displayText: 'Commands'}, type: 1},
{buttonId: `${prefix}info`, buttonText: {displayText: 'Bot status'}, type: 1}
]
let buttonMessaged = {
        text: `Hey *${pushname}* I am ${name}. Do you mean: ${prefix}help`,
        footer: '@AKU',
        buttons: dbut,
        headerType: 4
    }

 await arus.sendMessage(m.chat,buttonMessaged,{quoted:m})
}
 break
 

case "react":
case "r": {
let react = "🍀 *Reaction*\n *pat, hug, kick, slap, kiss, cuddle*"
m.reply(react)
}
break

 case 'info':{
	     const formater = (seconds) => {
        const pad = (s) => {
            return (s < 10 ? '0' : '') + s
        }
        const hrs = Math.floor(seconds / (60 * 60))
        const mins = Math.floor(seconds % (60 * 60) / 60)
        const secs = Math.floor(seconds % 60)
        return ' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
    }
	    const dbut = [
{buttonId: `${prefix}help`, buttonText: {displayText: 'Commands'}, type: 1}
]
    const uptime = process.uptime()
	let tr = await user.countDocuments()
	                let getGroups = await arus.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
	let ur = anu.length
	let b = await user.countDocuments({ ban : "true" })
let ter = `🧧 *Commands*: 55\n🔧 *Users*: ${tr}\n💚 *Groups*: ${ur}\n🚫 *Ban_Users*: ${b}\n⛩ *Moderators*: ${owner.length}`
console.log(ter)
   let buttonMessaged = {
        text: ter,
        footer: '@AKU',
        buttons: dbut,
        headerType: 4
    }
await arus.sendMessage(m.chat,buttonMessaged,{quoted:m})
}
 break
       
case 'pokemon': {
if (!ter) return m.reply("❌ No query provided!")
		try {
		let { data: data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ter}`)
	 if (!data.name) return m.reply(`❌ No such pokemon`)
	 let yu =`💫 *Name: ${data.name}*\n〽️ *Pokedex ID: ${data.id}*\n⚖ *Weight: ${data.weight}*\n🔆 *Height: ${data.height}*\n🌟 *Base Experience: ${data.base_experience}*\n📛 *Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n🎀 *Type: ${data.types[0].type.name}*\n✳ *HP: ${data.stats[0].base_stat}*\n⚔ *Attack: ${data.stats[1].base_stat}*\n🔰 *Defense: ${data.stats[2].base_stat}*\n☄ *Special Attack: ${data.stats[3].base_stat}*\n🛡 *Special Defense:${data.stats[4].base_stat}*\n🎐 *Speed: ${data.stats[5].base_stat}*\n`
arus.sendMessage(m.chat, { image: { url: data.sprites.front_default }, caption: yu }, { quoted: m })
		} catch (err) {
m.reply("An Error Occurred")
console.log(err)
}
}
break
case 'help': case 'allmenu': case 'h':

    const hlp=`
     *♡ Hajimemashite ${pushname}-san, Watashiwa tokisaki kurumi dis*
    
     ♥ perfix ♥ :- ${prefix}
    🎋🆁🆄🅻🅴🆂 :-
    ●︎ Don't call the bot
    ●︎ Don't message the mods for fun
    ●︎ If bot is not working then wait for bot to come online
    ●︎ Respect bot bcoz you ain't pay for it 
    
    ------{If you break any rule yo will be ban}------
    
    *Let the date begin!!!*
    ━━━『🔰General🔰』━━━
    profile, rank, exp, delete, help, creator, mods, info, groupinfo
    
    ━━━『🏮Weeb🏮』━━━
    neko, waifu, holo, fox_girl, baka, kemonomimi, manga, wallpaper, shinobu, megumin, awoo, marry, divorce, couple, coffee, ppcouple, mysoulmate
    
    ━━『❄️Group Commands❄️』━━
    ping, add, kick, promote, demote, group open/close, invite, enable/act disable/deact, antilink, events
    
    ━━━『💻Economy💻』━━━
    bank, daily, wallet, deposit, withdraw, deck, buy, rob, gamble, shop, leaderboard
    
    ━━━『💻Utils💻』━━━
    sticker, toimg, togif, tourl, steal, emojimix, google, image
    
    ━━━『🎵Media🎵』━━━
    yts, ytv, yta, lyrics, pinterest
    
    ━━━『💦NSFW💦』━━━
    spank, blowjob,lick, lesbian, pussy, cum, boobs, hentai-waifu, trap, hneko, ero, ass, hentai, milf, oral, paizuri, ecchi, uniform, maid, marin-kitagawa, oppai, mori-calliope, feet, succubus, school
    
     🍁 *Modified by Aku & Powered by Arus* 🍁`
    
     const AKU = [
        {buttonId: '.info', buttonText: {displayText: '📤 Info'}, type: 1},
        {buttonId: '.profile', buttonText: {displayText: '🧧 Profile'}, type: 1}
        ]
        let AKUo = {
            file: arus.sendMessage(m.chat,{video:fs.readFileSync('./src/assest/help.mp4'),gifPlayback:true,caption:hlp},{quoted:m}),
            caption: hlp,
            footer: 'Ari-Ani',
            buttons: AKU,
            headerType: 4
           }
    break
		   case 'session': {
			   if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
			   const session = require(`./${sessionName}.json`)
			   //console.log(session)
			   let sess = JSON.stringify(session);
			   m.reply(sess)
			   
	   }
			   break
		   case 'report': {
			   const time = 100000;
    const cd = await db.get(`${m.sender}report`)
    if (time - (Date.now() - cd) > 0) {
      return m.reply(
        `You have recently reported your problem.`
      );
		if (!ter) return m.reply("❌ No query provided!")
		   }
		   }
			   break
			   
    case'lead':
    case'leaderboard':
  const mems_id = new Array()
      const lb = await Levels.fetchLeaderboard("bot", 10);
					 let lbtext = "*━━━━『💫LeaderBoard💫』━━━━*\n\n"
	  for (let i = 0; i < lb.length; i++) {
		          const levelRole = lb[i].level
            var role = '1st Dan'
            if (levelRole <= 2) {
        var role = '2nd Dan'
    } else if (levelRole <= 4) {
        var role = '3rd Dan'
                  } else if (levelRole <= 6) {
                      var role = 'Mentor'
                  } else if (levelRole <= 8) {
                      var role = 'Expert'
                  } else if (levelRole <= 10) {
                      var role = 'Master'
                  } else if (levelRole <= 12) {
                      var role = 'Grand Master'
                  } else if (levelRole <= 14) {
                      var role = 'Brawler'
                  } else if (levelRole <= 16) {
                      var role = 'Marauder'
                  } else if (levelRole <= 18) {
                      var role = 'Fighter'
                  } else if (levelRole <= 20) {
                      var role = 'Berserker'
                  } else if (levelRole <= 22) {
                      var role = 'Warrior'
                  } else if (levelRole <= 24) {
                      var role = 'Avenger'
                  } else if (levelRole <= 26) {
                      var role = 'Vindicator'
                  } else if (levelRole <= 28) {
                      var role = 'Juggernaut'
                  } else if (levelRole <= 30) {
                      var role = 'Usurper'
                  } else if (levelRole <= 32) {
                      var role = 'Vanquisher'
                  } else if (levelRole <= 34) {
                      var role = 'Destroyer'
                  } else if (levelRole <= 36) {
                      var role = 'Savior'
                  } else if (levelRole <= 38) {
                      var role = 'Overlord'
                  } else if (levelRole <= 40) {
                      var role = 'Genbu'
                  } else if (levelRole <= 42) {
                      var role = 'Byakko'
                  } else if (levelRole <= 44) {
                      var role = 'Seiryu'
                  } else if (levelRole <= 46) {
                      var role = 'Suzaku'
                  } else if (levelRole <= 50) {
                      var role = 'Mighty Ruler'
                  } else if (levelRole <= 52) {
                      var role = 'Revered Ruler'
                  } else if (levelRole <= 53) {
                      var role = 'Divine Ruler'
                  } else if (levelRole <= 54) {
                      var role = 'Enternal Ruler'
                  } else if (levelRole <= 56) {
                      var role = 'Fujin'
                  } else if (levelRole <= 58) {
                      var role = 'Raijin'
                  } else if (levelRole <= 60) {
                      var role = 'Yaksa'
                  } else if (levelRole <= 62) {
                      var role = 'Ryujin'
                  } else if (levelRole <= 64) {
                      var role = 'Emperor'
                  } else if (levelRole <= 66) {
                      var role = 'Anime God'
                  } else if (levelRole <= 68) {
                      var role = 'True God'
                  } else if (levelRole <= 70) {
                      var role = 'The Prime'
                  }
		let name = await user.findOne({ id: lb[i].userID })
    lbtext += `${i + 1}#\n*🔰Name*: ${name.name }\n*🎐Level*: ${lb[i].level}\n*🍀Exp*: ${lb[i].xp}\n*〽️Role*: ${role}\n\n`;
	mems_id.push(lb[i].userID)
}
    m.reply(lbtext)

break
case "carbon":
case "code":
if (!ter) return m.reply("❌ No query provided!")
try {



        const carbon = new Carbon.createCarbon()
           .setCode(ter).setBackgroundColor('#1b3648')
       
     const bufferr =  await Carbon.generateCarbon(carbon) 
       arus.sendMessage(m.chat, {image: bufferr}, {quoted: m})
     

} catch (err) {
m.reply("An Error Occurred")   
console.log(err)
 
    
}
break
case 'getgif':
case 'gify': 
	if (!ter) return m.reply("❌ No query provided!")  
		try {
		               let { data: gi } = await axios.get(`https://g.tenor.com/v1/search?q=${ter}&key=LIVDSRZULELA&limit=8`)
				  
 arus.sendMessage(m.chat, { video: { url: gi.results?.[Math.floor(Math.random() * gi.results.length)]?.media[0]?.mp4?.url }, caption: "Here you go",gifPlayback: true }, { quoted: m })
		} catch (err) {
			m.reply("No gif found")
		}
break

case 'rank':
          
const userq = await Levels.fetch(m.sender, "bot");
				        const levelRoleq = userq.level
    var role = '1st Dan'
                        if (levelRole <= 2) {
                            var role = '2nd Dan'
                        } else if (levelRole <= 4) {
                            var role = '3rd Dan'
                        } else if (levelRole <= 6) {
                            var role = 'Mentor'
                        } else if (levelRole <= 8) {
                            var role = 'Expert'
                        } else if (levelRole <= 10) {
                            var role = 'Master'
                        } else if (levelRole <= 12) {
                            var role = 'Grand Master'
                        } else if (levelRole <= 14) {
                            var role = 'Brawler'
                        } else if (levelRole <= 16) {
                            var role = 'Marauder'
                        } else if (levelRole <= 18) {
                            var role = 'Fighter'
                        } else if (levelRole <= 20) {
                            var role = 'Berserker'
                        } else if (levelRole <= 22) {
                            var role = 'Warrior'
                        } else if (levelRole <= 24) {
                            var role = 'Avenger'
                        } else if (levelRole <= 26) {
                            var role = 'Vindicator'
                        } else if (levelRole <= 28) {
                            var role = 'Juggernaut'
                        } else if (levelRole <= 30) {
                            var role = 'Usurper'
                        } else if (levelRole <= 32) {
                            var role = 'Vanquisher'
                        } else if (levelRole <= 34) {
                            var role = 'Destroyer'
                        } else if (levelRole <= 36) {
                            var role = 'Savior'
                        } else if (levelRole <= 38) {
                            var role = 'Overlord'
                        } else if (levelRole <= 40) {
                            var role = 'Genbu'
                        } else if (levelRole <= 42) {
                            var role = 'Byakko'
                        } else if (levelRole <= 44) {
                            var role = 'Seiryu'
                        } else if (levelRole <= 46) {
                            var role = 'Suzaku'
                        } else if (levelRole <= 50) {
                            var role = 'Mighty Ruler'
                        } else if (levelRole <= 52) {
                            var role = 'Revered Ruler'
                        } else if (levelRole <= 53) {
                            var role = 'Divine Ruler'
                        } else if (levelRole <= 54) {
                            var role = 'Enternal Ruler'
                        } else if (levelRole <= 56) {
                            var role = 'Fujin'
                        } else if (levelRole <= 58) {
                            var role = 'Raijin'
                        } else if (levelRole <= 60) {
                            var role = 'Yaksa'
                        } else if (levelRole <= 62) {
                            var role = 'Ryujin'
                        } else if (levelRole <= 64) {
                            var role = 'Emperor'
                        } else if (levelRole <= 66) {
                            var role = 'Anime God'
                        } else if (levelRole <= 68) {
                            var role = 'True God'
                        } else if (levelRole <= 70) {
                            var role = 'The Prime'
                        }
		let disc = m.sender.substring(3, 7)
			let textr = "";
            if (pushname) {
             textr += `*${pushname}#${disc}'s* Exp\n\n`
			} else {
				textr += `*${m.sender}#${disc}'s* Exp\n\n`
			}
			textr += `*🍀Exp*: ${userq.xp} / ${Levels.xpFor(userq.level + 1)}\n*🎐Level*: ${userq.level}\n*🔮️Role*: ${role}`
			
			try {
                    ppuser = await arus.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                }
				

			                const rank = new canvacord.Rank()
                    .setAvatar(ppuser)
                    .setLevel(userq.level)
                    .setLevelColor('#ffa200', '#ffa200')
                    .setCurrentXP(userq.xp)
                    .setOverlay('#000000', 100, false)
                    .setRequiredXP(Levels.xpFor(userq.level + 1))
                    .setProgressBar('#ffa200', 'COLOR')
				    .setRank(0, role, false)
                    .setBackground('COLOR', '#000000')
                    .setUsername(pushname)
                    .setDiscriminator(disc)
                rank.build().then(async(data)=>{
					arus.sendMessage(m.chat,{image:data,caption:textr},{quoted:m})
  })

break


//////////////////////////UTILS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    
case  'sticker': case 's': case 'stickergif': case 'sgif':
   {
	 if (!quoted) return m.reply(`❌ Could not find any Image/Video in context`)
		 if (q) {
	anu = args.join(' ').split('|')
    pack = anu[0] !== '' ? anu[0] : global.packname
    author = anu[1] !== '' ? anu[1] : global.author
    } else {
    	pack = global.packname
        author = global.author
        }
    if (/image/.test(mime)) {

		let media = await quoted.download()
    m.reply("wait your request is under process")
let sticker = new Sticker(media, {
    pack: pack, // The pack name
    author: author, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 75, // The quality of the output file
    background: 'transparent' // The sticker background color (only for full stickers)
})

const buffer = await sticker.toBuffer()
arus.sendMessage(m.chat, {sticker: buffer}, {quoted: m})
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 20) return m.reply('🕐 Cannot fetch videos longer than *21 Seconds*')
        let media = await quoted.download()
    let sticker = new Sticker(media, {
        pack: pack, // The pack name
        author: author, // The author name
        type: StickerTypes.FULL, // The sticker type
        categories: ['🤩', '🎉'], // The sticker category
        id: '12345', // The sticker id
        quality: 75, // The quality of the output file
        background: 'transparent' // The sticker background color (only for full stickers)
    })
   
    const stikk = await sticker.toBuffer() 
   
    
    arus.sendMessage(m.chat, {sticker: stikk}, {quoted: m})
    } else {
        m.reply("❌ Could not find any Image/Video in context")
        }

 }
 break
    case 'profile':
const userw = await Levels.fetch(m.sender, "bot");
				        const levelRole = userw.level
                        var role = '1st Dan'
                        if (levelRole <= 2) {
                            var role = '2nd Dan'
                        } else if (levelRole <= 4) {
                            var role = '3rd Dan'
                        } else if (levelRole <= 6) {
                            var role = 'Mentor'
                        } else if (levelRole <= 8) {
                            var role = 'Expert'
                        } else if (levelRole <= 10) {
                            var role = 'Master'
                        } else if (levelRole <= 12) {
                            var role = 'Grand Master'
                        } else if (levelRole <= 14) {
                            var role = 'Brawler'
                        } else if (levelRole <= 16) {
                            var role = 'Marauder'
                        } else if (levelRole <= 18) {
                            var role = 'Fighter'
                        } else if (levelRole <= 20) {
                            var role = 'Berserker'
                        } else if (levelRole <= 22) {
                            var role = 'Warrior'
                        } else if (levelRole <= 24) {
                            var role = 'Avenger'
                        } else if (levelRole <= 26) {
                            var role = 'Vindicator'
                        } else if (levelRole <= 28) {
                            var role = 'Juggernaut'
                        } else if (levelRole <= 30) {
                            var role = 'Usurper'
                        } else if (levelRole <= 32) {
                            var role = 'Vanquisher'
                        } else if (levelRole <= 34) {
                            var role = 'Destroyer'
                        } else if (levelRole <= 36) {
                            var role = 'Savior'
                        } else if (levelRole <= 38) {
                            var role = 'Overlord'
                        } else if (levelRole <= 40) {
                            var role = 'Genbu'
                        } else if (levelRole <= 42) {
                            var role = 'Byakko'
                        } else if (levelRole <= 44) {
                            var role = 'Seiryu'
                        } else if (levelRole <= 46) {
                            var role = 'Suzaku'
                        } else if (levelRole <= 50) {
                            var role = 'Mighty Ruler'
                        } else if (levelRole <= 52) {
                            var role = 'Revered Ruler'
                        } else if (levelRole <= 53) {
                            var role = 'Divine Ruler'
                        } else if (levelRole <= 54) {
                            var role = 'Enternal Ruler'
                        } else if (levelRole <= 56) {
                            var role = 'Fujin'
                        } else if (levelRole <= 58) {
                            var role = 'Raijin'
                        } else if (levelRole <= 60) {
                            var role = 'Yaksa'
                        } else if (levelRole <= 62) {
                            var role = 'Ryujin'
                        } else if (levelRole <= 64) {
                            var role = 'Emperor'
                        } else if (levelRole <= 66) {
                            var role = 'Anime God'
                        } else if (levelRole <= 68) {
                            var role = 'True God'
                        } else if (levelRole <= 70) {
                            var role = 'The Prime'
                        }
		let bio = ''
try {
bio = (await arus.fetchStatus(m.sender)).status
} catch (error) {
	console.log(error)
bio = 'None'
}
let disec = m.sender.substring(3, 7)
			let tex = "";
            if (pushname) {
             tex += `*🍃Name*: ${pushname}#${disec}\n\n`
			 tex += `*🔰Number*: ${m.sender}\n\n`
			}
			if (bio.status) {
				tex += `*🏳 Bio*: ${bio}\n\n`
			}
			
			tex += `*🕹XP*: ${userw.xp} / ${Levels.xpFor(userw.level + 1)}\n\n*❤Level*: ${userw.level}\n\n*🏮 Role*: ${role}\n`
			
			try {
                    ppuser = await arus.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                }
				if (isCreator){
					tex += `\n*🔱Owner*: True\n\n`
				}
				if (groupName) {
					tex += `\n*🚥Group*: ${groupName}\n\n`
				}
				if (isAdmins) {
					tex += `*♨️Admim*: true\n`
				}
				arus.sendMessage(m.chat, { image: { url: ppuser }, caption: tex }, { quoted: m })
break

  case 'img': case 'togif': case 'toimg': case 'gif': {
	  if(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
		                  if (!quoted) return m.reply(`❌ Could not find any sticker in context`)
                if (!/webp/.test(mime)) return m.reply(`❌ Couldn't find any sticker in context`)
                m.reply("wait your request is under process")
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) m.reply(err)
                    let buffer = fs.readFileSync(ran)
                    arus.sendMessage(m.chat, { image: buffer,caption:'©MIZUHARA-2022' }, { quoted: m })
                    fs.unlinkSync(ran)
                })
	  } else if (m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true){
		            if (!quoted) return m.reply(`❌ Could not find any sticker in context`)
                if (!/webp/.test(mime)) return m.reply(`❌ Couldn't find any sticker in context`)
                m.reply("wait your request is under process")
        let { webp2mp4File } = require('./lib/uploader')
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await arus.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '©MIZUHARA-2022' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
	  }

            }    
break
case 'pin':
case 'pinterest':{
	if (!ter) return m.reply("❌ No query provided!")  
	try {
		let result = await hxz.pinterest(ter)
				let rando =  result[Math.floor(Math.random() * result.length)]			
    arus.sendMessage(m.chat,{image:{url: rando},caption:"here you go"},{quoted:m,})
	} catch {
		m.reply('')
	}
}
break
case 'tourl': {
	if (!quoted) return m.reply(`❌ Could not find any Image/Video in context`)
                m.reply("wait your request is under process")
				try {
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
				} catch {
m.reply("An Error Occurred")
				}
            }
            break
          
        case 'chatid':
        m.reply(`${m.chat}`)
        break
	
		//case 'gn':
		 // let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		//let namT =  await db.get(`${user}-con`) || 'no name'
		//console.log(namT)
		//break
		
//////////////////////////GROUP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    case 'kick': {
					if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
	try {
                            let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant
	  if (!users) return m.reply("❌ Couldn't find any userID in context")
        await arus.groupParticipantsUpdate(m.chat, [users], 'remove')
 arus.sendMessage(m.chat,{text:`Kicked @${users.split("@")[0]} successfuly `,contextInfo: { mentionedJid: [users] }})
 	} catch {
	return m.reply("❌ Please tag the user you want to kick")
	}
    }
    break
    case 'promote': {
		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
	try {
                            let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant
	  if (!users) return m.reply("❌ Couldn't find any userID in context")
        await arus.groupParticipantsUpdate(m.chat, [users], 'promote')
         arus.sendMessage(m.chat,{text:`woh woh!! looks like someone promoted @${users.split("@")[0]}`,contextInfo: { mentionedJid: [users] }})
		 			} catch {
		return m.reply("❌ Please tag the user you want to make admin")
	}
    }
    break
    case 'demote': {
		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
	try {
                            let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant
	  if (!users) return m.reply("❌ Couldn't find any userID in context")
        await arus.groupParticipantsUpdate(m.chat, [users], 'demote')
        arus.sendMessage(m.chat,{text:`OOPs!! looks like someone demoted @${users.split("@")[0]}`,contextInfo: { mentionedJid: [users] }})
					} catch {
return m.reply("❌ Please tag the user you want to demote")
	}
   }
    break
  case 'setdesc': {
        		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
                 if (!q) m.reply(`❌ No query provided!`)
                await arus.groupUpdateDescription(m.chat, text)
            m.reply('*Group Description Changed successfuly*')
            }
            break 
case 'seticon': case 'setppgrup': case 'setgpfp': {
     		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
                if (!/image/.test(mime)) m.reply("❌ Could not find any Image in context")
                if (/webp/.test(mime)) m.reply("❌ Could not find any Image in context")
                let media = await arus.downloadAndSaveMediaMessage(quoted)
                await arus.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply('💡 Group icone has been changed.')
                }
                break 
case 'tagall':
case 'ping':
  
if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
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
        		if (!m.isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin")
             if (args[0] === 'open'){
                await arus.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Group open*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await arus.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Group closed*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
					const sections = [
    {
	title: "GROUP settings",
	rows: [
	    {title: "close", rowId: `${prefix}group close`, description: "This will close the group"},
	    {title: "open", rowId: `${prefix}group open`, description: "This will open the group"}
	]
    }
]
const listMessage = {
  text: "Choose the required setting",
  footer: "@AKU",
  title: "",
  buttonText: "settings",
  sections
}
                    await arus.sendMessage(m.chat, listMessage)

            }
}

             break
case 'linkgroup': case 'invitelink': {
                if (!m.isGroup) return m.reply(mess.group)
					let Igroup = await group.findOne({ id: m.chat})
				let hh = Igroup.invite || "false"
				if (hh == 'false') return m.reply("❌ *Invite* is not active in this group")
                let response = await arus.groupInviteCode(m.chat)
         //   m.reply('Has been sent to you in peronal message')
         await arus.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
 break
  case 'delete': case 'del': {
                if (!m.quoted) m.reply("📎 Tag the massage you want to delete")
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) m.reply('❌ I can not delete massage from another userID except mine.')
                arus.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
  case 'enable':
  case 'register':
 case 'act':
 if (!ter) return m.reply(`❌ No option provided!`)
                                  
                                      if (!isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin");
                                      if (args[0] == "mod") {
									  group.findOne({ id : m.chat }).then(async(gc) => {
         if (!gc) {
			 await new group({ id: m.chat, mod: "true" }).save()	
return m.reply('💮 Successfully Enabled *Mod*')
		 } else {
		 if(gc.mod == "true") return m.reply("🛡 *Mod* is already enabled")
									await group.updateOne({ id: m.chat }, {mod: "true"})
							return m.reply('💮 Successfully Enabled *Mod*')
//m.reply(gc.mod)						
						}							
				})
                                      } else if(args[0] == "events"){
									    group.findOne({ id : m.chat }).then(async(gc) => {
         if (!gc) {
			 await new group({ id: m.chat, events: "true" }).save()	
return m.reply("💮 Successfully Enabled *Events*")
		 } else {
		 if(gc.events == "true") return m.reply("🗞 *Events* is already enabled")
									await group.updateOne({ id: m.chat }, {events: "true"})
							return m.reply("💮 Successfully Enabled *Events*")
//m.reply(gc.events)							
						}							
				})
                                  } else if(args[0] == "invite"){
									    group.findOne({ id : m.chat }).then(async(gc) => {
         if (!gc) {
			 await new group({ id: m.chat, invite: "true" }).save()	
return m.reply("🎏 Successfully Enabled *Invite*")
		 } else {
		 if(gc.invite == "true") return m.reply("🖌️ *Invite* is already enabled")
									await group.updateOne({ id: m.chat }, {invite: "true"})
								console.log(gc.invite)
							return m.reply("🌐 Successfully Enabled *Invite*")
							
//m.reply(gc.events)							
						}							
				})
                                   } else if(args[0] == "nsfw"){
									    group.findOne({ id : m.chat }).then(async(gc) => {
         if (!gc) {
			 await new group({ id: m.chat, nsfw: "true" }).save()	
return m.reply("💫 Successfully Enabled *NSFW*")
		 } else {
		 if(gc.nsfw == "true") return m.reply("💫 *NSFW* is already enabled")
									await group.updateOne({ id: m.chat }, {nsfw: "true"})
								console.log(gc.invite)
							return m.reply("💫 Successfully Enabled *NSFW*")
							
//m.reply(gc.events)							
						}							
				})
                                  }
								  else {
                                        m.reply("No such options")
                                      } 

                                
  break
 case 'disable':
  case 'unregister':
   case 'deact':
    if (!ter) return m.reply(`❌ No option provided!`)
                                      if (!isGroup) return m.reply("Sorry its a group command.Couldn't process the request!")
if (!isAdmins) return m.reply("❌ This is an Admin only Command")
if (!isBotAdmins) return m.reply("❌ Cannot execute without being admin");
  if (args[0] == "mod") {
group.findOne({ id : m.chat }).then(async(usr) => {
         if (!usr) {
return m.reply("🛡 *Mod* is already disabled")
		 } else {
		 if(usr.mod !== "true") return m.reply("🛡 *Mod* is already disabled")
									await group.updateOne({ id: m.chat }, {mod: "false"})
return m.reply("🧩 Successfully Disabled *Mod*");
						}							
				})
 }else if (args[0] == "events") { 
group.findOne({ id : m.chat }).then(async(usr) => {
         if (!usr) {
 return m.reply("🗞 *Events* is already disabled")
		 } else {
		 if(usr.events !== "true") return m.reply("🗞 *Events* is already disabled")
									await group.updateOne({ id: m.chat }, {events: "false"})
return m.reply("🧩 Successfully Disabled *Events*"); 
						}							
				})
 } else if (args[0] == "invite") { 
group.findOne({ id : m.chat }).then(async(usr) => {
         if (!usr) {
 return m.reply("🎏 *Invite* is already disabled")
		 } else {
		 if(usr.invite !== "true") return m.reply("🎏 *Invite* is already disabled")
									await group.updateOne({ id: m.chat }, {invite: "false"})
return m.reply("🧩 Successfully Disabled *Invite*"); 
						}							
				})
 } else if (args[0] == "nsfw") { 
group.findOne({ id : m.chat }).then(async(usr) => {
         if (!usr) {
 return m.reply("🧧 *NSFW* is already disabled")
		 } else {
		 if(usr.nsfw !== "true") return m.reply("🧧 *NSFW* is already disabled")
									await group.updateOne({ id: m.chat }, {nsfw: "false"})
return m.reply("🧩 Successfully Disabled *NSFW*"); 
						}							
				})
 }
 else {
    m.reply("No such options")
 }
break
///////////////////////////owner//////////////////////

 case 'ban': {
	 if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
		 try {
                            let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant
	  if (!users) return m.reply("❌ Couldn't find any userID in context")
	 user.findOne({ id : users }).then(async(usr) => {
         if (!usr) {
			 //console.log(usr.ban)
			 await new user({ id: users, ban: "true" }).save()	
							console.log("user banned")	
return m.reply(`Successfully Banned ${users} from Using Commands`)
		 } else {
			 console.log(usr.ban)
		 if(usr.ban == "true") return m.reply(`${users} is already Banned from Using Commands`)
									await user.updateOne({ id: users }, {ban: "true"})
						console.log("user banned")
							return m.reply(`Successfully Banned ${users} from Using Commands`)	
						}							
				})
						 } catch {
return m.reply("❌ Couldn't find any userID in context")
		 }

	}
  break

   case 'unban':{
	   if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
		   try {
                            let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant
	  if (!users) return m.reply("❌ Couldn't find any userID in context")

	 user.findOne({ id : users }).then(async(usr) => {
         if (!usr) {
			 console.log(usr.ban)
return m.reply(`${users} is not banned`)
		 } else {
			 console.log(usr.ban)
		 if(usr.ban !== "true") return m.reply(`${users} is not banned`)
									await user.updateOne({ id: users }, {ban: "false"})
						console.log("user banned")
							return m.reply(`${users} is now allowed to use Commands again`)	
						}							
				})
						 } catch {
return m.reply("❌ Couldn't find any userID in context")
		 }

	} 
  break
//////////////////////////YOUTUBE\\\\\\\\\\\\\\\\\\\\\\\\\\\\

case  'play': case 'ytplay': {
    if (!ter) return m.reply(`❌ No query provided!`)
    let yts = require("yt-search")
let { yta  } = require('./lib/y2mate')
m.reply(`🕣 Downloading ${ter}`)
    let search = await yts(ter)
    let quality = args[1] ? args[1] : '128kbps'
    let media = await yta(search.all[0].url, quality)
	arus.sendMessage(m.chat, { audio: { url: media.dl_link }, contextInfo: {
                    externalAdReply: {
                        title: search.all[0].title.substr(0, 30),
                        body: `author : ${search.all[0].author.name.substr(0, 20)}`,
                        mediaType: 2,
                        thumbnail: await getBuffer(`https://i.ytimg.com/vi/${search.all[0].videoId}/hqdefault.jpg`),
                        mediaUrl: media.url
                    }
                }, mimetype: 'audio/mpeg', fileName: `${search.all[0].title}.mp3` }, { quoted: m})
	
}
break
case 'ytmp3': case 'ytaudio': case 'yta': {
    let { yta  } = require('./lib/y2mate')
    if (!ter) return m.reply(`❌ No query provided!`)
		if (!isUrl(ter) && !ter.includes('https://youtube.com.com')) return m.reply("🔍 Please provide the youtube link")
   m.reply(`🕣 Downloading ${ter}`)
    var search = await yts(ter)
    //console.log(search)
    // anu = search.videos[Math.floor(Math.random() * search.videos.length)]
    search=search.all
    let quality = args[1] ? args[1] : '128kbps'
    let media = await yta(ter, quality)
    if (media.filesize >= 100000) return m.reply("🕐 Can not fetch audio longer than *10 Minutes*")
    const ycp=`*📓Title* : ${search[0].title}
*🎤Type* : MP3
*🎬Description* : ${search[0].description}
*🌐Link* : ${ter}`
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
    if (!ter) return m.reply(`❌ No query provided!`)
				if (!isUrl(ter) && !ter.includes('https://youtube.com.com')) return m.reply("🔍 Please provide the youtube link")
					m.reply(`🕣 Downloading ${ter}`)
    let quality = '360p'
    let media = await ytv(ter, quality)
    if (media.filesize >= 100000) return m.reply("🕐 Can not fetch audio longer than *10 Minutes*")

arus.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🌸 *Title* : ${media.title}\n🎗️ *File Size* : ${media.filesizeF}\n📓 *Url* : ${ter}\n📌 *Ext* : MP3\n` }, { quoted: m })
}
break
case 'yts': case 'ytsearch': {
    if (!ter) return m.reply(`❌No query provided!`)
    let yts = require("yt-search")
    let search = await yts(ter)
    let teks = 'YouTube Search\n\n Result From '+ ter +'\n\n'
    let no = 1
    for (let i of search.all) {
        teks += `*#${no++}*\n🏜️ *Title*: ${i.title}\n🌸 *Duration*: ${i.timestamp}\n🌐 *Url*: ${i.url}\n`
    }
    arus.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },jpegThumbnail:fs.readFileSync('./src/assest/yts.jpg'),  caption: teks, }, { quoted: m, })
}
break
case 'sr':
case 'subraddit': {
	if (!ter) return m.reply(`❌ No query provided!`)

							let Igroup = await group.findOne({ id: m.chat})
				let hh = Igroup.nsfw || "false"
				const res = await axios.get('https://meme-api.herokuapp.com/gimme/' + q + '/');
	if (res.data.nsfw&& hh == 'false') return m.reply("❌ *nsfw* is not active in this group")
		if (!res.data.url) return m.reply("Subraddit dosen't exsist") 
				arus.sendMessage(m.chat,{image:{url: res.data.url},caption:`🖌️ *Title:* ${res.data.title}\n*👨‍🎨 Author:* ${res.data.author}\n*🎏 Subreddit:* ${res.data.subreddit}\n🌐 *Post:* ${res.data.postLink}`},{quoted:m,})


				
}
break
case 'meme':{
	const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes');
	const { title, url } = response.data
	arus.sendMessage(m.chat,{image:{url:url},caption:`*${title}*`},{quoted:m,})
}
break
case 'join': {
                if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
                if (!ter) return m.reply("🔍 Please provide the group link")
                if (!isUrl(ter) && !ter.includes('whatsapp.com')) return m.reply("🔍 Please provide the group link")
                m.reply("wait your request is under process")
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await arus.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) =>m.reply(`Invalid 📘 *URL: ${q}*`))
            }
            break
            case 'leave': {
                if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
                await arus.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply("Error"))
            }
            break

case 'lyrics':
  const Genius =require("genius-lyrics")
const Client = new Genius.Client();
if (!ter) return m.reply(`❌ No query provided!`)
  const searches = await Client.songs.search(ter);

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
        if (!ter) return m.reply(`❌ No query provided!`)
        let gis = require('g-i-s')
        gis(ter, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        arus.sendMessage(m.chat, { image: { url: images }, caption: "Here you go" }, { quoted: m })
        })
        }
        break
 case 'google': {
                if (!ter) return m.reply(`❌ No query provided!`)
                let google = require('google-it')
                google({'query': ter}).then(res => {
                let teks = `Google Search From : ${q}\n\n`
                for (let g of res) {
                teks += `*📒Title* : ${g.title}\n`
                teks += `*🍃Description* : ${g.snippet}\n`
                teks += `*🌐Link* : ${g.link}\n\n`
                } 
                m.reply(teks)
                })
                }
                break
				case 'take': case 'steal':
if (!quoted) return m.reply(`❌ Could not find any sticker in context`)
		 if (q) {
	anu = args.join(' ').split('|')
    pack = anu[0] !== '' ? anu[0] : global.packname
    author = anu[1] !== '' ? anu[1] : global.author
    } else {
    	pack = global.packname
        author = global.author
        }
if(/webp/.test(mime)) {
let media = await quoted.download()
let sticker = new Sticker(media, {
    pack: pack, // The pack name
    author: author, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 75, // The quality of the output file
    background: 'transparent' // The sticker background color (only for full stickers)
})

const buffer = await sticker.toBuffer()
arus.sendMessage(m.chat, {sticker: buffer}, {quoted: m})
}
break
case 'iguser':
try {
if (!q)  return m.reply(`Please provide a valid instagram ID.`)
fids = await axios.get(`https://api.popcat.xyz/instagram?user=${q}`)
const reply = `
*🀄 Username:* ${fids.data.username}
*📃 Name:* ${fids.data.full_name}
*🗣 Private:* ${fids.data.private}
*✔ Verified:* ${fids.data.verified}
*🗻 Followers:* ${fids.data.followers}
*🍃 Following:* ${fids.data.following}
*🎛 Post:* ${fids.data.posts}
*🧑🏻‍🎤 reels:* ${fids.data.reels}
*📖 Bio:* ${fids.data.biography}
              `
arus.sendMessage(m.chat, {image: { url: fids.data.profile_pic }, caption:reply}, {quoted:m})
} catch (err) {
console.log(err)
return m.reply (`Please give me valid insagram ID.`)
              }
break
			       case 'update': {
					   if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
      stdout = execSync('git remote set-url origin https://github.com/Arus-Bots/Mizuhara.git && git pull')
      m.reply(stdout.toString())
    }
			   break
case 'ship':{
	const { Ship, IShipOptions } = require('@shineiichijo/canvas-chan')
let usep = m.sender
let recp=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} x  themselves`
     console.log(recp)

} else {
let rcpp =`@${users.split("@"[0])}`
 recp = `@${m.sender.split("@")[0]} x  @${users.split("@")[0]}`

console.log(recp)
}
const ll = Math.floor(Math.random() * 100)
if ( ll < 30 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\tThere's still time to reconsider your choices`
rate = "Not Good"
}
else if ( ll < 40 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\tThere's still time to reconsider your choices`
rate = "Not Good"
}
else if ( ll > 50 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t Good enough, I guess!💫`
rate = "Avarage"
}
else if ( ll > 60 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t Good enough, I guess!💫`
rate = "Avarage"
}
else if ( ll > 70 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t\tStay together and you'll find a way⭐️`
rate = "Good"
}
else if ( ll > 80 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\t\t\tStay together and you'll find a way⭐️`
rate = "Good"
}
else if ( ll > 90 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\tAmazing! You two will be a good couple💖`
rate = "Amazing"
} else if ( ll == 100 ){
jj = `\t\t\t\t\t*ShipCent : ${ll}%* \n\tYou two are fated to be together💙`
rate = "Fated to be together"
}
        let caption = `\t❣️ *Matchmaking...* ❣️ \n`
        caption += `\t\t---------------------------------\n`
        caption += `*${recp}*\n`
        caption += `\t\t---------------------------------\n`
        caption += `${jj}`
		try {
                    ppuser = await arus.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                }
				if(users == 'none'){
							try {
                    ppuser2 = await arus.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser2 = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                    }
				  } else {
												try {
                    ppuser2 = await arus.profilePictureUrl(users, 'image')
                } catch {
                    ppuser2 = 'https://www.linkpicture.com/q/IMG-20220118-WA0387.png'
                    }
				}
		    const options = [
        {
            name: 'Person1',
            image: ppuser
        },
        {
            name: 'Person2',
            image: ppuser2
        }
    ]
    const ship = await new Ship(options, ll, rate).build()
	arus.sendMessage(m.chat,{image:ship,caption:caption,mentions:ment},{quoted:m})
		}

break

case "quote":
try {
quoo = await axios.get(`https://favqs.com/api/qotd`)
const reply = `
📝 *Content:* ${quoo.data.quote.body}
*✍️ Author:* ${quoo.data.quote.author}
              `
arus.sendMessage(m.chat, { text:reply },  {quoted:m})
} catch (err) {
console.log(err)
return m.reply (`*❌ Something went wrong.*`)
    }
break 
case 'fact':{
				 await axios
            .get(`https://nekos.life/api/v2/fact`)
            .then((response) => {
                // console.log(response);
                const tet = `📛 *Fact:* ${response.data.fact}`
                m.reply(tet)
            })
            .catch((err) => {
                m.reply(`✖  An error occurred.`)
            })
			}
				break
							case 'advice':{
        await axios
            .get(`https://api.adviceslip.com/advice`)
            .then((response) => {
                // console.log(response);
                const tet = `*Advice for you🔖:* ${response.data.slip.advice}`
                m.reply(tet)
            })
            .catch((err) => {
                m.reply(`🔍 Error: ${err}`)
            })
							}
				break
			case 'bot':{
				        if (!q) return m.reply(' *Baka!* ')
        await axios.get(`https://api.simsimi.net/v2/?text=${q}&lc=en`)
        .then((response) => {
                // console.log(response);
                const txt = `🎍 *Bot*:  ${response.data.success}`
                m.reply(txt);
            }).catch(err => {
                m.reply(`Sorry ${packname} I did not get you`)
            }
            )
			}
				break
 //////////////////////////ANIME\\\\\\\\\\\\\\\\\\\\\\\\      
case 'pat':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)
	try {
		let usep = m.sender
let recp=``
try {
      let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} patted themselves`
     console.log(recp)

} else {
const rcpp =`@${users.split("@"[0])}`
 recp= `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
case 'hug':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)
	try {
		let usep = m.sender
let recp=``
try {
      let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} hugged themselves`
     console.log(recp)

} else {
const rcpp =`@${users.split("@"[0])}`
 recp= `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
case 'kiss':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)
	try {
		let usep = m.sender
let recp=``
try {
      let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} kissed themselves`
     console.log(recp)

} else {
const rcpp =`@${users.split("@"[0])}`
 recp= `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
case 'slap':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)
	try {
		let usep = m.sender
let recp=``
try {
      let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} slapped themselves`
     console.log(recp)

} else {
const rcpp =`@${users.split("@"[0])}`
 recp= `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
case 'cuddle':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)
	try {
		let usep = m.sender
let recp=``
try {
      let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} cuddled themselves`
     console.log(recp)

} else {
const rcpp =`@${users.split("@"[0])}`
 recp= `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
case 'kick':{
	var pat = await fetchJson(`https://api.waifu.pics/sfw/kick`)
	try {
		let usep = m.sender
let recp=``
try {
      let mention = mentionByTag
      let users = await (mention[0]) || m.msg.contextInfo.participant

 ment=[usep,users]
} catch {
	users = "none"
	 ment=[usep,m.sender]
}
if(users == 'none'){
     recp =`@${m.sender.split("@")[0]} kicked themselves`
     console.log(recp)

} else {
const rcpp =`@${users.split("@"[0])}`
 recp= `@${m.sender.split("@")[0]} kicked @${users.split("@")[0]} `

console.log(recp)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var sgif = await GIFBufferToVideoBuffer(buffer)
		arus.sendMessage(m.chat,{video: sgif, gifPlayback:true,mentions:ment,caption:recp},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break 
 case 'waifu': {
               let waifud = await axios.get('https://waifu.pics/api/sfw/waifu')
 arus.sendMessage(m.chat, { image: { url: waifud.data.url }, caption: "Here you go" }, { quoted: m })
 }
                break  
 case 'couplepp': case 'ppcouple': {
                //replay(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                arus.sendMessage(m.chat, { image: { url: random.male }, caption: `Male` }, { quoted: m })
                arus.sendMessage(m.chat, { image: { url: random.female }, caption: `Female` }, { quoted: m })
            }
        break


case 'neko':{
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
 arus.sendMessage(m.chat, { image: { url: waifud.data.url }, caption: "Here you go" }, { quoted: m })
 }             
                break                                
case 'anime':
if (!q) return m.reply(`❌ No query provided!`)
const { data: jap } = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${q}`)
if(!jap.results[0].title) return m.reply(`❌ Couldn't find any results on the term *${q}*`)
const { data } = (await axios.get(`https://api.jikan.moe/v4/anime?q=${jap.results[0].title}`)).data;
			let data3 =
				`*Result:* ${0 + 1} of ${data.length}\n\n*📕Title:* ${data[0].title}/${
					data[0].title_english
				}/${data[0].title_japanese}\n*🔖Trailer:* ${data[0].trailer.url}\n` +
				`*🔍MAL_ID:* ${data[0].mal_id}\n*✴️Type:* ${data[0].type}\n*🎬Episode(s):* ${data[0].episodes}\n*📢Airing:* ${data[0].status}\n*🔔Date:* ${data[0].aired.string}\n` +
				`*🔱Rating:* ${data[0].rating}\n*⚜️Duration:* ${data[0].duration}\n*♨️Score:* ${
					data[0].score
				}\n*📦Studio(s):* ${data[0].studios.map((val) => `${val.name}`).join(", ")}\n` +
				`*🎞️Genre(s):* ${data[0].genres.map((val) => `${val.name}`).join(", ")}\n*📚Synopsis:* ${
					data[0].synopsis
				}`;
arus.sendMessage(m.chat,{image:{url:data[0].images.jpg.image_url},caption:data3},{quoted:m})   
break
case 'chara':
case 'charecter':{
	if (!q) return m.reply(`❌ No query provided!`)
			const client = new Character();
		const chara = await client.character(q).catch((err) => {
			return m.reply(`❌ Couldn't find any results on the term *${q}*`)
		});
		let texty = "";
		texty += `💙 *Name: ${chara.data.characters.results[0].name.full}*\n`;
		texty += `💛 *Source: ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}*\n\n`;
		texty += `🌐 *URL: ${chara.data.characters.results[0].siteUrl}*\n\n`;
		texty += `❤ *Description:* ${chara.data.characters.results[0].description}\n`;
			const { data: char } = (
				await axios.get(`https://api.jikan.moe/v4/characters?q=${chara.data.characters.results[0].name.full}`)
			).data;
			const { data: anime } = (
				await axios.get(`https://api.jikan.moe/v4/characters/${char[0].mal_id}/anime`)
			).data;
			const { data: voice } = (
				await axios.get(`https://api.jikan.moe/v4/characters/${char[0].mal_id}/voices`)
			).data;
			let data2 =
				`*📕Name:* ${char[0].name}\n*⚜️About:* ${
					char[0].about
				}\n*🔍MAL_ID:* ${char[0].mal_id}\n🌐 *URL:*  ${chara.data.characters.results[0].siteUrl}\n` +
				`\n*🔖Appears:*${anime
					.map((val) => `\n*🔮Role:* ${val.role}\n*🎬Title:* ${val.anime.title}`)
					.join("\n")}\n❤ *Description:* ${chara.data.characters.results[0].description}\n` +
				`\n*👥VA:*${voice
					.map((val) => `\n*🌐Language:* ${val.language}\n*👤Person:* ${val.person.name}`)
					.join("\n")}`;
arus.sendMessage(m.chat,{image:{url:char[0].images.jpg.image_url},caption:data2},{quoted:m})  
}

break
case 'haigusha':
                case 'hg' :  {
		try{
	const r = require("@shineiichijo/marika")
	const charaClient = new r.Character();
	let charaoo = await charaClient.getRandomCharacter();
	const client = new Character();
		const chara = await client.character(charaoo.name).catch((err) => {
			return m.reply(`❌ Error`)
		});
		let texty = "";
		texty += `*💛Source:* ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}\n\n`;
			const { data: cha } = (
				await axios.get(`https://api.jikan.moe/v4/characters?q=${chara.data.characters.results[0].name.full}`)
			).data;
			const { data: anim } = (
				await axios.get(`https://api.jikan.moe/v4/characters/${cha[0].mal_id}/anime`)
			).data;
			let data2 =
				`*📕Name:* ${cha[0].name}\n${texty}\n*⚜️About:* ${
					cha[0].about
				}\n*🔍MAL_ID:* ${cha[0].mal_id}\n🌐 *URL:*  ${chara.data.characters.results[0].siteUrl}\n` +
				`\n`;
				await db.set(m.chat, charaoo.name)
await arus.sendMessage(m.chat,{image:{url:cha[0].images.jpg.image_url},caption:data2},{quoted:m})
}catch(err){
	const animeCharacter = require('anime-character-random')
	let a = await animeCharacter.getRandomChar(async (anime) => {
		const client = new Character();
		const chara = await client.character(anime.tags[0]).catch((err) => {
			return m.reply(`❌ Error`)
		});
		let texty = "";
		texty += `💙 *Name: ${chara.data.characters.results[0].name.full}*\n`;
		texty += `💛 *Source: ${chara.data.characters.results[0].media.edges[0].node.title.userPreferred}*\n\n`;
		texty += `🌐 *URL: ${chara.data.characters.results[0].siteUrl}*\n\n`;
		texty += `❤ *Description:* ${chara.data.characters.results[0].description}\n`;
			const { data: cha } = (
				await axios.get(`https://api.jikan.moe/v4/characters?q=${chara.data.characters.results[0].name.full}`)
			).data;
			const { data: anim } = (
				await axios.get(`https://api.jikan.moe/v4/characters/${cha[0].mal_id}/anime`)
			).data;
			let data2 =
				`*📕Name:* ${cha[0].name}\n*⚜️About:* ${
					cha[0].about
				}\n*🔍MAL_ID:* ${cha[0].mal_id}\n🌐 *URL:*  ${chara.data.characters.results[0].siteUrl}\n` +
				`\n`;
await arus.sendMessage(m.chat,{image:{url:cha[0].images.jpg.image_url},caption:data2},{quoted:m})
})
		console.log(err)
			}
				}
			break
case 'manga':
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if (!ter) return m.reply(`❌ No query provided!`)
	try {
let srh = await manga.searchManga(ter)

    let mang = `🎀 *Title:* ${srh.data[0].title}\n`;
    mang += `📈 *Status:* ${srh.data[0].status}\n`;
    mang += `🌸 *Total Volumes:* ${srh.data[0].volumes}\n`;
    mang += `🎗 *Total Chapters:* ${srh.data[0].chapters}\n`;
    mang += `🧧 *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `✨ *Published on:* ${srh.data[0].published.from}\n`;
    mang += `🌟 *Score: ${srh.data[0].scored}*\n`;
    mang += `🎐 *Popularity:* ${srh.data[0].popularity}\n`;
    mang += `🎏 *Favorites:* ${srh.data[0].favorites}\n`;
    mang += `✍ *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n🌐 *URL:* ${srh.data[0].url}\n\n`;
    if (srh.data[0].background !== null)
      mang += `🎆 *Background:* ${srh.data[0].background}`;
    mang += `❄️ *Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
arus.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
	} catch { 
	return m.reply(`❌ Couldn't find any results on the term *${q}*`)
	}

break

case 'wallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if (!ter) return m.reply(`❌ No query provided!`)
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: ter, type: "sfw", page: pages })
            .catch(() => null);
			if(!wallpaper) return m.reply(`❌ Couldn't find any results on the term *${ter}*`)
const i = Math.floor(Math.random() * wallpaper.length);    
            await arus.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`Here you go`},{quoted:m}) 
//arus.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break

 case 'bc': case 'bcgroup': {
    if (!isCreator) return m.reply("📍The user of this command must be the owner of the bot")
                if (!ter) return m.reply("❌ No query provided!")
                const bct = ter
                let getGroups = await arus.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(` Broadcasting in ${anu.length} Group Chat, in ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    //await sleep(1500)

  let txt = `🔰</ _*Arus Broadcast*_ >🔰\n\n🍀 *Author:* ${pushname}\n\n🔖 *Message:* ${bct}`
//const stick=fs.readFileSync(`./src/right.webp`)
//await arus.sendMessage(m.chat,{sticker:stick},{quoted:m})
await arus.sendMessage(i, { video: { url: "https://telegra.ph/file/3c3f94c8463e7f9c29d73.mp4" }, mimetype: 'video/mp4', fileName: `bc.mp4`, caption: `${txt}` })
                    }
                m.reply(`Successfuly Broadcasted in ${anu.length} Groups`)
            }
            break          
            default:
arus.sendMessage(m.chat,{text:`❗ Couldn't find any matching commands. Try again with the commands from the help list`},{quoted:m})
        }
        

    } catch (err) {
        console.log(util.format(err))
        const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
        //arus.sendMessage("12033039020236931@g.us",{text:`*Time:* ${time}\n\n`+`*ERROR:* ${util.format(err)}`})
    
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
