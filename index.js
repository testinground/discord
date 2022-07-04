const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on('message', msg => {
  msg.reply('pong');
});

client.login('token');
