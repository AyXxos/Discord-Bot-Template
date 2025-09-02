# Here is a template to make your discord bot in Javascript with Node.js

## Everything is included in the files you just need to install **[Node here](https://nodejs.org/en/download)** to start the bot.

## Installation
1. Clone the repository
```bash
git clone https://github.com/AyXxos/Discord-Bot-Template.git
```
2. Navigate to the project directory
```bash
cd your-repo
```
3. Install the dependencies
```bash
npm install
```
4. In the `.env` file in the root directory, add your bot token
```
DISCORD_TOKEN=your-bot-token
```
5. Start the bot
```bash
node main.js
```

## Discord Developer Portal

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
   
2. Click on **"New Application"**
   
3. Give your application a name and click **"Create"**
   
4. Go to the **"Bot"** tab tick all the Privileged Gateway Intents *(Presence Intent, Server Members Intent, Message Content Intent)*
   
5. Under **"Token"**, click **"Copy"** to copy your bot token
   
6. Paste your bot token into the `.env` file

7. To invite the bot, go to the **"OAuth2"** tab

8.  Under **"Scopes"**, select **"bot"** and **"applications.commands"**

9.  Under **"Bot Permissions"**, select the permissions you want to grant your bot

10. Copy the generated URL and paste it into your browser to invite the bot to your server