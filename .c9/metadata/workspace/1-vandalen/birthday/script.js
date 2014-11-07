{"changed":true,"filter":false,"title":"script.js","tooltip":"/1-vandalen/birthday/script.js","value":"\"use strict\";\r\n\r\nwindow.onload = function(){\r\n\r\n\t\r\n\tvar birthday = function(date){\r\n\t\t\r\n\t\t\tvar today = new Date();\r\n\t\t\ttoday.setHours(0,0,0,0);\r\n\t\t\t\r\n\t\t\tdate = new Date(date);\r\n\t\t\tdate.setHours(0,0,0,0);\r\n\r\n\t\t\tvar day = 1000 * 60 * 60 * 24;\r\n\t\t\tdate.setFullYear(today.getFullYear());\r\n\t\t\t\r\n\t\t\tif (date < today) {\r\n\t\t\t\tdate.setFullYear(today.getFullYear() + 1);\r\n\t\t\t}\r\n\r\n\t\t\tvar daysLeft = Math.round((date.getTime() - today.getTime()) / day);\r\n\t\t\t\r\n\t\t\treturn daysLeft;\r\n\t};\r\n\t// ------------------------------------------------------------------------------\r\n\r\n\r\n\t// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra\r\n\tvar p = document.querySelector(\"#value\"); // Referens till DOM-noden med id=\"#value\"\r\n\tvar input = document.querySelector(\"#string\");\r\n\tvar submit = document.querySelector(\"#send\");\r\n\r\n\t// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.\r\n\tsubmit.addEventListener(\"click\", function(e){\r\n\t\te.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.\r\n\r\n\t\tp.classList.remove( \"error\");\r\n\r\n\t\ttry {\r\n\t\t\tvar answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen \"convertString\"\r\n\t\t\tvar message;\r\n\t\t\tswitch (answer){\r\n\t\t\t\tcase 0: message = \"Grattis på födelsedagen!\";\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase 1: message = \"Du fyller år imorgon!\";\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tdefault: message = \"Du fyller år om \" + answer + \" dagar\";\r\n\t\t\t\t\tbreak;\r\n\t\t\t}\r\n\r\n\t\t\tp.innerHTML = message;\r\n\t\t} catch (error){\r\n\t\t\tp.classList.add( \"error\"); // Växla CSS-klass, IE10+\r\n\t\t\tp.innerHTML = error.message;\r\n\t\t}\r\n\t\r\n\t});\r\n\r\n\r\n\r\n};","undoManager":{"mark":98,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":35},"end":{"row":12,"column":36}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":36},"end":{"row":12,"column":37}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":10},"end":{"row":10,"column":11}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":69},"end":{"row":15,"column":70}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":25},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":3},"end":{"row":10,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":3},"end":{"row":10,"column":4}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":4},"end":{"row":10,"column":5}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":5},"end":{"row":10,"column":6}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":6},"end":{"row":10,"column":7}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":7},"end":{"row":10,"column":8}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":8},"end":{"row":10,"column":9}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":8},"end":{"row":10,"column":9}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":8},"end":{"row":10,"column":9}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":9},"end":{"row":10,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":10},"end":{"row":10,"column":11}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":8},"end":{"row":10,"column":11}},"text":"set"},{"action":"insertText","range":{"start":{"row":10,"column":8},"end":{"row":10,"column":21}},"text":"setFullYear()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":20},"end":{"row":10,"column":21}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":21},"end":{"row":10,"column":22}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":22},"end":{"row":10,"column":23}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":23},"end":{"row":10,"column":24}},"text":"4"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":25},"end":{"row":11,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":3},"end":{"row":12,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":3},"end":{"row":12,"column":4}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":4},"end":{"row":12,"column":5}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":5},"end":{"row":12,"column":6}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":6},"end":{"row":12,"column":7}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":7},"end":{"row":12,"column":8}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":8},"end":{"row":12,"column":9}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":9},"end":{"row":12,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":9},"end":{"row":12,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":8},"end":{"row":12,"column":9}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":7},"end":{"row":12,"column":8}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":6},"end":{"row":12,"column":7}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":5},"end":{"row":12,"column":6}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":3},"end":{"row":12,"column":5}},"text":"if"},{"action":"insertText","range":{"start":{"row":12,"column":3},"end":{"row":12,"column":14}},"text":"if (true) {"},{"action":"insertText","range":{"start":{"row":12,"column":14},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":13,"column":0},"end":{"row":14,"column":0}},"lines":["\t\t\t\t"]},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":4}},"text":"\t\t\t}"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":10},"end":{"row":12,"column":11}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":9},"end":{"row":12,"column":10}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":8},"end":{"row":12,"column":9}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":7},"end":{"row":12,"column":8}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":7},"end":{"row":12,"column":8}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":8},"end":{"row":12,"column":9}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":9},"end":{"row":12,"column":10}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":10},"end":{"row":12,"column":11}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":11},"end":{"row":12,"column":12}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":12},"end":{"row":12,"column":13}},"text":"<"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":13},"end":{"row":12,"column":14}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":14},"end":{"row":12,"column":15}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":15},"end":{"row":12,"column":16}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":16},"end":{"row":12,"column":17}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":17},"end":{"row":12,"column":18}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":18},"end":{"row":12,"column":19}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":4},"end":{"row":13,"column":5}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":5},"end":{"row":13,"column":6}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":6},"end":{"row":13,"column":7}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":7},"end":{"row":13,"column":8}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":8},"end":{"row":13,"column":9}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":8},"end":{"row":13,"column":9}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":8},"end":{"row":13,"column":9}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":9},"end":{"row":13,"column":10}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":9},"end":{"row":13,"column":10}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":9},"end":{"row":13,"column":10}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":10},"end":{"row":13,"column":11}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":11},"end":{"row":13,"column":12}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":9},"end":{"row":13,"column":12}},"text":"set"},{"action":"insertText","range":{"start":{"row":13,"column":9},"end":{"row":13,"column":22}},"text":"setFullYear()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":21},"end":{"row":13,"column":44}},"text":"today.getFullYear() + 1"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":33}},"text":"\t\t\tvar day = 1000 * 60 * 60 * 24;"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":33}},"text":"\t\t\tvar day = 1000 * 60 * 60 * 24;"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":36}},"text":"\t\t"},{"action":"insertText","range":{"start":{"row":9,"column":34},"end":{"row":10,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":3}},"text":"\t\t\t"},{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":10,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":33},"end":{"row":9,"column":34}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":20},"end":{"row":10,"column":24}},"text":"2014"},{"action":"insertText","range":{"start":{"row":10,"column":20},"end":{"row":10,"column":39}},"text":"today.getFullYear()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":3}},"text":"\t\t\t"},{"action":"removeLines","range":{"start":{"row":16,"column":0},"end":{"row":17,"column":0}},"nl":"\n","lines":[""]},{"action":"removeText","range":{"start":{"row":15,"column":3},"end":{"row":16,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":40},"end":{"row":10,"column":41}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":45},"end":{"row":13,"column":46}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":26},"end":{"row":18,"column":27}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":71}},"text":"\t\t\tvar daysLeft = Math.round((date.getTime() - today.getTime()) / day);"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":71},"end":{"row":21,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":3},"end":{"row":19,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":4},"end":{"row":19,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":18},"end":{"row":20,"column":29}},"text":"Math.round("}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":58},"end":{"row":20,"column":59}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":25},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":3},"end":{"row":10,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":3},"end":{"row":10,"column":26}},"text":"date.setHours(0,0,0,0);"},{"action":"insertText","range":{"start":{"row":10,"column":26},"end":{"row":11,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":11,"column":0},"end":{"row":14,"column":0}},"lines":["\t\tconsole.log(\"Input date: \" + date);","","\t\tvar today = new Date();"]},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":26}},"text":"\t\ttoday.setHours(0,0,0,0);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":37}},"text":"\t\tconsole.log(\"Input date: \" + date);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":25}},"text":"\t\tvar today = new Date();"},{"action":"removeLines","range":{"start":{"row":11,"column":0},"end":{"row":13,"column":0}},"nl":"\n","lines":["",""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":26}},"text":"\t\ttoday.setHours(0,0,0,0);"},{"action":"removeLines","range":{"start":{"row":11,"column":0},"end":{"row":12,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":26}},"text":"\t\ttoday.setHours(0,0,0,0);"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":29},"end":{"row":10,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":26},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":2},"end":{"row":8,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":27},"end":{"row":8,"column":30}},"text":"\t\t\t"},{"action":"insertText","range":{"start":{"row":8,"column":27},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":3}},"text":"\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":2},"end":{"row":10,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":3}},"text":"\t\t\t"},{"action":"removeText","range":{"start":{"row":10,"column":25},"end":{"row":11,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":3},"end":{"row":24,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":4},"end":{"row":24,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":4},"end":{"row":23,"column":5}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":3},"end":{"row":23,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":22,"column":0},"end":{"row":22,"column":27}},"text":"\t\t\tconsole.log(adjustYear);"},{"action":"removeLines","range":{"start":{"row":19,"column":0},"end":{"row":22,"column":0}},"nl":"\n","lines":["\t\t\t","\t\t\t// if date är nästa år setfullYear","\t\t\tvar adjustYear = today.getFullYear() + 1;"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":61}},"text":"\t\t\t//var daysLeft = (date.getTime() - today.getTime()) / day;"},{"action":"removeText","range":{"start":{"row":20,"column":71},"end":{"row":21,"column":0}},"text":"\n"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":71},"end":{"row":20,"column":71},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415366131939}