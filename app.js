var tmi = require('tmi.js');

var options = {
		options: {
			debug: true
		},
		connection: {
			cluster: "aws",
			reconnect: true
		},
		identity: {
			username: "twitchtvchat",
			password: "oauth:ddpu9jwyysr4sm835564a62kyu4k7p"
		},
		channels: ["SilentmanAE"]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
	if(message === "!twitter") {
		client.action("twitchtvchat", "twitter.com/matthewmariner")
		;
	}
	client.action("twitchtvchat", user['display-name'] + " you are a total noob.");
});

client.on('connected', function(address, port){
	console.log("address: " + address + " Port: " + port);
	client.action("twitchtvchat", "Hello I am a noob bot and you are a total noob");
});