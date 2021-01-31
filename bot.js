///////////// config-dc /////////////
var mc_chat_to_discord = true
var minecraft_bot = true
var discord_bot = true
var enable_mc_path_commands = true
var mc_bot_chat_suffix = true
//////// 1 = ON | 0 = OFF ////////

const {Client,MessageEmbed} = require('discord.js');
const client = new Client();
const config_dc = require('./config-dc.json');
const channelid = config_dc.channel;
const dcprefix = config_dc.prefix
const inv = config_dc.invlink
client.login(config_dc.token);
const request = require("request");
const cheerio = require("cheerio");
const QueryString = require(`qs`);
const fs = require('fs');

const mineflayer = require('mineflayer')
const config_mc = require('./config-mc.json');
const mcprefix = config_mc.prefix
const tpsPlugin = require('mineflayer-tps')(mineflayer);
const {pathfinder, Movements,} = require('mineflayer-pathfinder');
const {GoalNear,GoalBlock,GoalXZ,GoalY,GoalInvert,GoalFollow} = require('mineflayer-pathfinder').goals

var email = config_mc.email
var pass = config_mc.password
var host = config_mc.ip
var port = config_mc.port
var version = config_mc.version

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (discord_bot === true) {
client.on('ready', () => {
  console.clear
  console.log(`Client has logged in with user ID ${client.user.tag}`);
  client.user.setActivity(`server chat (and ${dcprefix}help)`, {
    type: 'LISTENING'
  });
});

client.on('message', message => {
  if (!message.content.startsWith(dcprefix) || message.author.bot) return;
  const args = message.content.slice(dcprefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'help' || command === 'info' || command === 'commands' || command === 'halp') {
    const Embed = new MessageEmbed()
      .setColor(randomembedcolor())
      .setTitle('Bot Commands')
      .setDescription('```' + dcprefix + 'mcskin <username> <head/face/body>```\n```' + dcprefix + 'penis <@user>```\n```' + dcprefix + 'pfp <@username>```\n```' + dcprefix + 'poll <content> <option1> <option2>```\n```' + dcprefix + 'randomsentence```\n```' + dcprefix + 'randomimg```\n```' + dcprefix + 'randomnumber <length>```\n```' + dcprefix + 'invitebot```\n```' + dcprefix + 'rate <@username>```\n```' + dcprefix + 'say (msg)```\n To see my minecraft integrations, go to https://github.com/TheRealCmanBrine/Bhelp')
    message.channel.send(Embed)
  }
  else if (command === 'mcskin' || command === 'mincraftskin' || command === 'mcavatar' || command === 'skin') {
    if (!args.length) {
      const Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Incorrect Usage!')
        .setDescription('Usage: ' + dcprefix + command + ' <username> <head/body/face> \n (not case sensitive)')
      message.channel.send(Embed)
    }
    else {
      if (args[1] === 'head') {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(args[0] + "'s " + command)
          .setURL('https://mine.ly/' + args[0])
          .setDescription('**(hint) Click Title For NameMC**')
          .setImage('https://mc-heads.net/head/' + args[0])
        message.channel.send(Embed);
      }
      else if (args[1] === 'body') {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(args[0] + "'s " + command)
          .setURL('https://mine.ly/' + args[0])
          .setDescription('**(hint) Click Title For NameMC**')
          .setImage('https://mc-heads.net/body/' + args[0])
        message.channel.send(Embed);
      }
      else if (args[1] === 'face') {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(args[0] + "'s " + command)
          .setURL('https://mine.ly/' + args[0])
          .setDescription('**(hint) Click Title For NameMC**')
          .setImage('https://mc-heads.net/avatar/' + args[0])
        message.channel.send(Embed);
      }
      else if (!args[1]) {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + dcprefix + command + ' <username> <head/body/face> \n You provided a username, but not a type!')
        message.channel.send(Embed)
      }
      else {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + dcprefix + command + ' <username> <head/body/face> \n (not case sensitive)')
        message.channel.send(Embed)
      }
    }
  }
  else if (command === 'pp' || command === 'penis' || command === 'dick' || command === 'balls') {
    if (!args.length) {
      const items = [
        "**()**",
        "**8==D**",
        "**8===D**",
        "**8====D**",
        "**8=====D**",
        "**8======D**",
        "**8=======D**",
        "**8========D**",
        "**8=========D**",
        "**8===========D**",
        "**8============D**",
        "**8=============D**",
        "**8==============D**",
        "**8===============D**",
        "**8================D**",
        "**8=================D**",
      ]
      var item = items[Math.floor(Math.random() * items.length)];
      const Embed = new MessageEmbed()
        .setColor(randomembedcolor())
        .setTitle(message.author.username + `'s ` + command)
        .setDescription(item)
      message.channel.send(Embed)

    }
    else {
      const user = getUserFromMention(args[0]);
      if (!user) {

      }
      else {
        const items = [
          "**()**",
          "**8==D**",
          "**8===D**",
          "**8====D**",
          "**8=====D**",
          "**8======D**",
          "**8=======D**",
          "**8========D**",
          "**8=========D**",
          "**8===========D**",
          "**8============D**",
          "**8=============D**",
          "**8==============D**",
          "**8===============D**",
          "**8================D**",
          "**8=================D**",
        ]
        var item = items[Math.floor(Math.random() * items.length)];
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(user.username + `'s ` + command)
          .setDescription(item)
        message.channel.send(Embed)
      }
    }
  }
  else if (command === 'avatar' || command === 'pfp') {
    if (!args.length) {
      const user = message.author
      if (!user) {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + dcprefix + command + ' <username>')
        message.channel.send(Embed)
      }
      else {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(`${user.username}'s ${command}`)
          .setURL(user.displayAvatarURL({
            dynamic: true
          }))
          .setImage(user.displayAvatarURL({
            dynamic: true
          }))
        message.channel.send(Embed);
      }
    }
    else {
      const user = getUserFromMention(args[0]);
      if (!user) {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + dcprefix + command + ' <username>')
        message.channel.send(Embed)
      }
      else {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(`${user.username}'s ${command}`)
          .setURL(user.displayAvatarURL({
            dynamic: true
          }))
          .setImage(user.displayAvatarURL({
            dynamic: true
          }))
        message.channel.send(Embed);
      }
    }
  }
  else if (command === 'poll') {
    if (!args.length) {
      const Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Incorrect Usage!')
        .setDescription('Usage: ' + dcprefix + command + ' <content> <option1> <option2>')
      message.channel.send(Embed)
    }
    else if (!args[1] || !args[2]) {
      const Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Incorrect Usage!')
        .setDescription('Usage: ' + dcprefix + command + ' <content> <option1> <option2>')
      message.channel.send(Embed)
    }
    else {


      const embed = new MessageEmbed()
        .setColor(randomembedcolor())
        .setDescription('▬▬▬▬▬▬▬▬▬**«    Poll    »**▬▬▬▬▬▬▬▬▬\n' + message.content.slice(command.length += 1) + '\n▬▬▬▬▬▬▬**«    @everyone    »**▬▬▬▬▬▬▬▬ ')
        .setFooter(message.author.username, client.user.avatarURL)
      message.channel.send(embed).then(sentEmbed => {
        sentEmbed.react("👍")
        sentEmbed.react("👎")
        sentEmbed.react("✅")
        sentEmbed.react("❎")
        sentEmbed.react("😐")
      })
    }
  }
  else if (command === 'sentence' || command === 'sen' || command === 'randomsentence' || command === 's') {
    const SENTENCEGEN_URL = "https://randomword.com/sentence";
    request(SENTENCEGEN_URL, (err, response, body) => {
      const $ = cheerio.load(body);
      var rans = ($("#random_word").text());
      const Embed = new MessageEmbed()
        .setColor(randomembedcolor())
        .setTitle('Random Sentence')
        .setDescription(rans)
      message.channel.send(Embed)
    })
  }
  else if (command === 'img' || command === 'i' || command === 'image' || command === 'randomimg') {
    const Embed = new MessageEmbed()
      .setColor(randomembedcolor())
      .setTitle('Random Image')
      .setImage('https://picsum.photos/' + makeid(3) + '/' + makeid(3))
    message.channel.send(Embed)
  }
  else if (command === 'randomnumber' || command === 'number' || command === 'rng' || command === 'generatenumber' || command === 'n') {
    if (!args.length) {
      const Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Incorrect Usage!')
        .setDescription('Usage: ' + dcprefix + command + ' <length>')
      message.channel.send(Embed)
    }
    else {
      if (args[0] <= 100) {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle('Random Number')
          .setDescription(makeid(isNumeric(args[0])))
        message.channel.send(Embed)
      }
      else {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + dcprefix + command + ' <length> \n (you can\'t enter a number larger than 100)')
        message.channel.send(Embed)
      }
    }
  }
  else if (command === 'invite' || command === 'inv' || command === 'invitebot') {
    const Embed = new MessageEmbed()
      .setColor(randomembedcolor())
      .setTitle('Invite Me To A Server!')
      .setURL(inv)
      .setDescription('Click the link above to invite this bot to any server you have permissions to do so in.')
    message.channel.send(Embed)
  }
  else if (command === 'askgod' || command === '8ball' || command === 'god') {
    const Embed = new MessageEmbed()
      .setColor(randomembedcolor())
      .setTitle('God')
      .setDescription(askgod())
    message.channel.send(Embed)
  }
  else if (command === 'rate' || command === 'rateuser') {
    if (!args.length) {
      const Embed = new MessageEmbed()
        .setColor(randomembedcolor())
        .setTitle(message.author.username + `'s ` + command)
        .setDescription(`${message.author.username} is ${makeid(2)}/100`)
      message.channel.send(Embed)
    }
    else {
      const user = getUserFromMention(args[0]);
      if (!user) {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + dcprefix + command + ' <@username>')
        message.channel.send(Embed)
      }
      else {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(user.username + `'s ` + command)
          .setDescription(`${user.username} is ${makeid(2)}/100`)
        message.channel.send(Embed)
      }
    }
  }
  else if (command === '_______') {
    ////////////////////////////////
    if (!args.length) {
      const Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Incorrect Usage!')
        .setDescription('Usage: ' + dcprefix + command + ' <> <> <>')
      message.channel.send(Embed)
    }
    else {
      ////////////////////////////////
      message.channel.send(`${args[0]} ${args[1]} ${args[2]}`)
      ////////////////////////////////
    }
  }

})

function getUserFromMention(mention) {
  if (!mention) return;

  if (mention.startsWith('<@') && mention.endsWith('>')) {
    mention = mention.slice(2, -1);

    if (mention.startsWith('!')) {
      mention = mention.slice(1);
    }

    return client.users.cache.get(mention);
  }
}



function randomembedcolor() {
  var embedcolors = [
    "ff0000",
    "ff7000",
    "ffd600",
    "d6ff00",
    "47ff00",
    "00ff99",
    "00ffeb",
    "008fff",
    "0029ff",
    "4700ff",
    "ad00ff",
    "ff00eb",
    "ff0066",
    "ff003d",
    "491200",
    "f79401",
    "f7ed01",
    "a8f701",
    "8cf859",
    "43c596",
    "4391c5",
    "4352c5",
    "8c43c5",
    "c543c0",
    "c54377",
    "441010",
    "442710",
    "444010",
    "2b4410",
    "104421",
    "104044",
    "101744",
    "2b1044",
    "441044"
  ]
  var randomcolor = embedcolors[Math.floor(Math.random() * embedcolors.length)];
  return `0x` + randomcolor
}

function makeid(length) {
  var result = '';
  var characters = '123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function isNumeric(num) {
  if (!isNaN(num)) {
    return (num)
  }
  else {
    return (1)
  }
}}

function askgod() {
  var ans = [
      "no.",
      "yes.",
      "he has no idea.",
      "to go away, he's busy.",
      "definitely.",
      "absoloutley not!",
      "he is 100% sure.",
      "you have problems.",
      "\"nah man.\"",
      "sure, whatever.",
      "that ain't his problem.",
      "he's been wondering that himself."
  ];
  var rans = ans[Math.floor(Math.random() * ans.length)];
  return 'God Says: ' + rans
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (minecraft_bot = true) {
function mcbot() {

  const bot = mineflayer.createBot({
    host: `${host}`,
    port: `${port}`,
    username: `${email}`,
    password: `${pass}`,
    version: `${version}`,
    auth: 'mojang'
  })

  console.log('Bot has logged into ' + email)

  setTimeout(() => {
    setInterval(() => {
      let channel = client.channels.cache.get(channelid);
      channel.send('I am a bot! Try ' + prefix + 'help for commands!')
    }, 300000);
  }, 10000);

  bot.on("chat", (username, message) => {
    if (mc_chat_to_discord = true) {
    let channel = client.channels.cache.get(channelid);
    if (username === (bot.username)) {
        var embed = new MessageEmbed()
        embed.setColor(0x000000)
            .setDescription(`${message}`)
            .setAuthor(`${bot.username} | ChatBot`, `https://mc-heads.net/avatar/${username}`, `https://namemc.com/search?q=${username}`)
        channel.send({embed})
    }
    if (message.startsWith(`>`)) {
        if (username === bot.username) return
        var embed = new MessageEmbed()
        embed.setColor(0x00ff00)
            .setDescription(`${message}`)
            .setAuthor(`${username}`, `https://mc-heads.net/avatar/${username}`, `https://namemc.com/search?q=${username}`)
        channel.send({
            embed
        })
    } else {
        if (username === bot.username) return
        var embed = new MessageEmbed()
        embed.setColor(randomembedcolor())
            .setDescription(`> ${message}`)
            .setAuthor(`${username}`, `https://mc-heads.net/avatar/${username}`, `https://namemc.com/search?q=${username}`)
        channel.send({
            embed
        })
    }}
  })

  client.on('message', message => {
    if (mc_chat_to_discord = true) {
    if (message.channel.id === channelid) {
        if (message.content.startsWith(dcprefix + 'say')) {
            mcchat('(' + message.author.tag + ') ' + (message.content.slice(4)))
        }
    }}
  });

  bot.loadPlugin(pathfinder)
  bot.loadPlugin(tpsPlugin)
  const mcData = require('minecraft-data')(bot.version)
  const defaultMove = new Movements(bot, mcData)

  setTimeout(() => {
    setInterval(() => {
      mcchat('I am a bot! Try: "' + mcprefix + 'help" for info!')
    }, 900000);
  }, 30000);

  setTimeout(() => {
    setInterval(() => {
      const SENTENCEGEN_URL = "https://randomword.com/sentence";
      request(SENTENCEGEN_URL, (err, response, body) => {
      const $ = cheerio.load(body);
      var rans = ($("#random_word").text());
      mcchat(rans)
      })
    }, 300000);
  }, 10000);
  
  bot.once('spawn', () => {
    setTimeout(() => {
      bot.setControlState('forward', true)
      bot.setControlState('sprint', true)
      bot.setControlState('jump', true)
    }, 0);
    setTimeout(() => {
      bot.setControlState('forward', false)
      bot.setControlState('back', true)
    }, 1000);
    setTimeout(() => {
      bot.setControlState('back', false)
    }, 3000);
    setTimeout(() => {
      bot.setControlState('forward', true)
    }, 3250);
    setTimeout(() => {
      bot.setControlState('forward', false)
      bot.setControlState('sprint', false)
      bot.setControlState('jump', false)
    }, 4250);
    setTimeout(() => {
      bot.setControlState('sneak', true)
    }, 5000);
    setTimeout(() => {
      bot.setControlState('sneak', false)
    }, 5250);
  })

  setInterval(() => {
    if (bot.pathfinder.isMoving() === false) {
      const entity = bot.nearestEntity()
      if (entity) {
      bot.lookAt(entity.position.offset(0, 1.6, 0))
      }
    }
  }, 20);

  setInterval(() => {
    bot.setControlState('sneak', true)
    bot.setControlState('jump', true)
    setTimeout(() => {
      bot.setControlState('jump', false)
      bot.setControlState('sneak', false)
    }, 100);
  }, 20000);

  function mcchat(msg) { 
    if (mc_bot_chat_suffix = 1) {
      bot.chat('> ' + msg + ` [` + randomstring(config_mc.suffixlength) + `]`) 
    } else {
      bot.chat('> ' + msg) 
    }
  }

  bot.on('chat', function (username, message) {
    if (!message.startsWith(mcprefix) || username === bot.username) return;
    const args = message.slice(mcprefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'help' || command === 'info' || command === 'commands' || command === 'halp') {
      mcchat('https://github.com/TheRealCmanBrine/Bhelp')
    }

    else if (command === 'coords' || command === 'pos' || command === 'position' || command === 'location') {
      var target = bot.blockAt(bot.entity.position.offset(0, -1, 0))
      mcchat('I am at ' + target.position)
    }

    else if (command === 'kill' || command === 'suicide' || command === 'killbot') {
      bot.chat('/kill')
    }

    else if (command === 'askgod' || command === 'god') {
      if (args[1]) {
        mcchat(askgod())
      } else {
        mcchat('You must ask something.') 
      }
    }

    else if (command === 'tps' || command === 'lag') {
      mcchat('Current server TPS is: ' + bot.getTps())
    }

    else if (command === 'randomsentence' || command === 'sentence') {
      const SENTENCEGEN_URL = "https://randomword.com/sentence";
      request(SENTENCEGEN_URL, (err, response, body) => {
      const $ = cheerio.load(body);
      var rans = ($("#random_word").text());
      mcchat(rans)
    })}

    else if (command === 'come' || command === 'comehere') {
      const target = bot.players[username] ? bot.players[username].entity : null
      if (!target) {
      mcchat('You are out of range.')
      return
    }
    const p = target.position
    bot.pathfinder.setMovements(defaultMove)
    bot.pathfinder.setGoal(new GoalNear(p.x, p.y, p.z, 1))
    }

    else if (command === 'stop' || command === 'stopmoving' || command === 'stay' || command === 'quit') {
      bot.pathfinder.setGoal(null)
      mcchat('Stopped.')
    }

    else if (command === 'attack' || command === 'hit' || command === 'ka' || command === 'killaura') {
    let target = null
    let entity
    entity = bot.nearestEntity()
    if (entity) {
    mcchat('Attacking ' + entity.type)
    bot.attack(entity, true)
    setTimeout(() => {
        bot.attack(entity, false)
        bot.attack(entity, true)
    }, 500);
    setTimeout(() => {
        bot.attack(entity, false)
        bot.attack(entity, true)
    }, 1000);
    setTimeout(() => {
        bot.attack(entity, false)
        bot.attack(entity, true)
    }, 1500);
    setTimeout(() => {
        bot.attack(entity, false)
        bot.attack(entity, true)
    }, 2000);
    setTimeout(() => {
        bot.attack(entity, false)
        bot.attack(entity, true)
    }, 2500);
    setTimeout(() => {
        bot.attack(entity, false)
        bot.attack(entity, true)
    }, 3000);
    setTimeout(() => {
        bot.attack(entity, false)
        bot.attack(entity, true)
    }, 3500);
    setTimeout(() => {
        bot.attack(entity, false)
        bot.attack(entity, true)
    }, 4000);
    setTimeout(() => {
        bot.attack(entity, false)
        bot.attack(entity, true)
    }, 4500);
    setTimeout(() => {
        bot.attack(entity, false)
    }, 5000);
    } else {
    mcchat('Nothing to attack.')
    }}

    else if (command === 'goto' || command === 'path') {
      if (args[2]) {
        const x = parseInt(args[0], 10)
        const y = parseInt(args[1], 10)
        const z = parseInt(args[2], 10)
        bot.pathfinder.setMovements(defaultMove)
       bot.pathfinder.setGoal(new GoalBlock(x, y, z))
      } else if (!args[2]) {
        const x = parseInt(args[0], 10)
        const z = parseInt(args[1], 10)
        bot.pathfinder.setMovements(defaultMove)
        bot.pathfinder.setGoal(new GoalXZ(x, z))
      } if (!args[1]) {
        const y = parseInt(args[0], 10)
        bot.pathfinder.setMovements(defaultMove)
        bot.pathfinder.setGoal(new GoalY(y))
      }
    }

    else if (command === 'follow' || command === 'chase') {
      const target = bot.players[username] ? bot.players[username].entity : null
      if (!target) {
        mcchat('You are out of range.')
      return
    }
    bot.pathfinder.setMovements(defaultMove)
    bot.pathfinder.setGoal(new GoalFollow(target, 3), true)
    }
  })
  
  bot.on('goal_reached', (goal) => {
    mcchat('I have arrived!')
  })

  function randomstring(length) {
    var result = '';
    var characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMｑｗｅｒｔｙｕｉｏｐａｓｄｆｇｈｊｋｌｚｘｃｖｂｎｍＱＷＥＲＴＹＵＩＯＰＡＳＤＦＧＨＪＫＬＺＸＣＶＢＮＭ1234567890!@#$%&';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  bot.on('error', (err) => console.log(err))
  bot.on('end', waitrelog)
   
}
function waitrelog() {
  setTimeout(() => {
      mcbot()
  }, 8000);
}
mcbot()
}