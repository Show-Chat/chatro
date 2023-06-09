/* ShowChat
 *
 * Embed helper script
 */

'use strict';

function build_embed_src() {
    // Variables
    const base_url = 'https://kiwiirc.com/nextclient/';
	const plugins = 'conference';
	const theme = 'osprey';
    const server_url = 'irc.radioclick.ro';
	const server_port = '6667';
	const chan = '#Romania,#RadioClick';
    const nick = 'ShowChat??';
	
    // Get page URL information
    let url = new URL(window.location);

    // Construct the iframe src URL
    let src = base_url;
	if (plugins) {
        src += '?plugins=' + plugins;
    }
	if (theme) {
        src += '&theme=' + theme;
    } 
	if (server_url) {
        src += '#ircs://' + server_url;
    }
	if (server_port) {
        src += ':' + server_port;
    } 
	 if (chan) {
        src += '/' + chan;
    }
	if (nick) {
        src += '?&nick=' + nick;
    }
    return src;
}
function change_embed_dimensions() {
    let embed = document.getElementById('chat-iframe');
    embed.setAttribute('height', window.innerHeight);
    embed.setAttribute('width', window.innerWidth);
}
