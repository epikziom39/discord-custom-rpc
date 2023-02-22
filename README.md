This is a program that allows users to show what they are watching on their Discord status. To use this program, Node.js must be installed on your device.

To customize your status, you need to modify the configuration file. Here are the fields you need to edit:

"clientId": The client ID of your Discord application.
"details": The details of what you're watching. For example, "nice rpc bro!".
"state": The state of what you're doing. For example, "watching".
"largeImageKey": The key of the large image you want to display. This needs to be set up in the Discord developer portal.
"largeImageText": The text to display when hovering over the large image.
"buttonLabel": The label for the button that will be displayed in Discord.
"buttonUrl": The URL to open when the button is clicked.
To get started, clone this repository and run the program using the command node app.js. You will also need to install the necessary packages by running npm install discord-rpc.

Note that this program is distributed under the MIT license, so you are free to use, modify, and distribute it as you see fit. If you have any questions or issues, please feel free to open an issue on GitHub.
