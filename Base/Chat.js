const { Client } = require('discord.js');

class Chat extends Client {
    /**
     * @constructor
     * @param { Object } options Client Options
     */
    constructor(options){
        super(options)
        this.config = require('../config')
        this.db = require('quick.db')
        this.fetch = require('node-fetch')
    }
    
    run() {
        this.login(this.config.token)
    }
}

module.exports = Chat;