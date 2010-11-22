/**
 * Utility routines.
 * This file is slowly getting obsoleted.
 * Instead of Util.serialize and Util.deserialize, use JSON.stringify and JSON.parse.
 */

/**
 * MD5 and SHA routines, along with their supplemental sub-routines are
 * Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet, Ondrej Zara
 * Distributed under the BSD License
 */

var Util = {
    base64encode:function(str) {
		var input = Util.utf8decode(str);
		var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		do {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) { 
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
		} while (i < input.length);
		return output;
	},
    base64decode:function(input) {
		var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		do {
			enc1 = keyStr.indexOf(input.charAt(i++));
			enc2 = keyStr.indexOf(input.charAt(i++));
			enc3 = keyStr.indexOf(input.charAt(i++));
			enc4 = keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) { output = output + String.fromCharCode(chr2); }
			if (enc4 != 64) { output = output + String.fromCharCode(chr3); }
		} while (i < input.length);

		return Util.utf8encode(output);
	},
	utf8encode:function(str) {
		var result = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while (i < str.length ) {
			c = str.charCodeAt(i);
			if (c < 128) {
				result += String.fromCharCode(c);
				i += 1;
			} else if ((c > 191) && (c < 224)) {
				c1 = str.charCodeAt(i+1);
				result += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
				i += 2;
			} else {
				c1 = str.charCodeAt(i+1);
				c2 = str.charCodeAt(i+2);
				result += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
				i += 3;
			}
		}
		return result;	
	},
	utf8decode:function(str) {
		var result = "";

		for (var i=0;i<str.length;i++) {

			var c = str.charCodeAt(i);
			if (c < 128) {
				result += String.fromCharCode(c);
			} else if((c > 127) && (c < 2048)) {
				result += String.fromCharCode((c >> 6) | 192);
				result += String.fromCharCode((c & 63) | 128);
			}
			else {
				result += String.fromCharCode((c >> 12) | 224);
				result += String.fromCharCode(((c >> 6) & 63) | 128);
				result += String.fromCharCode((c & 63) | 128);
			}
		}
		return result;
	},
	mail:function(to, subject, body, headers, auth) {
		var from = Config["smtpFrom"];
		var rcpt = [];
		var h = {
			"To":[],
			"Cc":[]
		};
		if (to) { 
			rcpt.push(to); 
			h["To"].push(to); 
		}
		if (subject) { h["Subject"] = subject; }
		
		for (var p in headers) {
			var val = headers[p];
			if (p.match(/^to$/i)) {
				rcpt.push(val);
				h["To"].push(val);
			} else if (p.match(/^cc$/i)) {
				rcpt.push(val);
				h["Cc"].push(val);
			} else if (p.match(/^bcc$/i)) {
				rcpt.push(val);
			} else if (p.match(/^subject$/i)) {
				h["Subject"] = val;
			} else {
				h[p] = val; 
			}
		}
		
		function send(text, nowait) {
			// system.stdout("S: "+text+"\n");
			sock.send(text+"\r\n");
			if (!nowait) {
				var data = sock.receive(1024);
				// system.stdout("R: "+data);
			}
		}

		var host = Socket.getHostName();
		var sock = new Socket(Socket.PF_INET, Socket.SOCK_STREAM, Socket.SOL_TCP);
		sock.connect(Config["smtpHost"], Config["smtpPort"]);
		
		if (auth && auth.type.match(/^login$/i)) {
			send("HELO "+host);
		} else {
			send("EHLO "+host); 
			send("AUTH LOGIN"); 
			send(Util.base64encode(auth.user));
			send(Util.base64encode(auth.password)); 
		}
		
		send("MAIL FROM:<"+from+">");
		for (var i=0;i<rcpt.length;i++) {
			send("RCPT TO:<"+rcpt[i]+">");
		}
		send("DATA");
		
		for (var name in h) {
			var value = h[name];
			if (!(value instanceof Array)) { value = [value]; }
			for (var i=0;i<value.length;i++) {
				send(name+": "+value[i], true);
			}
		}
		send("", true);
		var b = body.replace(/\n\./g,"\n..");
		send(b+"\r\n.");
		send("QUIT");
		sock.close();
	}
}

exports.Util = Util;
