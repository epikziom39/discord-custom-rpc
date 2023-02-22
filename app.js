const DiscordRPC = require('discord-rpc');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const config = require('./config.json');

rpc.on('ready', () => {
  console.log('Discord RPC works!');
  rpc.setActivity({
    details: config.details,
    state: config.state,
    largeImageKey: config.largeImageKey,
    largeImageText: config.largeImageText,
    startTimestamp: new Date(),
    buttons: [{ label: config.buttonLabel, url: config.buttonUrl }]
  });
});

rpc.login({ clientId: config.clientId }).catch(console.error);
