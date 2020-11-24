var list = document.getElementsByTagName("tr");
var map = new Map();
var lastCRN = "";

for (var i = 0; i < list.length; i++) {
var sub = list[i].childNodes;
if (sub.length == 45) {
	
	var loc = sub[27].childNodes[0].innerHTML;
	var time = sub[25].childNodes[0].innerHTML;
	var crn = sub[5].childNodes[1].innerHTML.trim();
	var mon = sub[11].childNodes[0].innerHTML;
	var tue = sub[13].childNodes[0].innerHTML;
	var wed = sub[15].childNodes[0].innerHTML;
	var thu = sub[17].childNodes[0].innerHTML;
	var fri = sub[19].childNodes[0].innerHTML;
	var sat = sub[21].childNodes[0].innerHTML;
	var sun = sub[23].childNodes[0].innerHTML;

	lastCRN = crn;
	var stuff = [];
	if (map.get(loc) != undefined)
		stuff = map.get(loc);
	stuff.push(mon + tue + wed + thu + fri + sat + sun + " " + time + " "  + crn);
	map.set(loc, stuff);
} else if (sub.length == 29) {
	var loc = sub[21].childNodes[0].innerHTML;
	var time = sub[19].childNodes[0].innerHTML;
	var mon = sub[5].childNodes[0].innerHTML;
	var tue = sub[7].childNodes[0].innerHTML;
	var wed = sub[9].childNodes[0].innerHTML;
	var thu = sub[11].childNodes[0].innerHTML;
	var fri = sub[13].childNodes[0].innerHTML;
	var sat = sub[15].childNodes[0].innerHTML;
	var sun = sub[17].childNodes[0].innerHTML;

	var stuff = [];
	if (map.get(loc) != undefined)
		stuff = map.get(loc);
	stuff.push(mon + tue + wed + thu + fri + sat + sun + " " + time + " "  + lastCRN);
	map.set(loc, stuff);
}
}

var str = "";

for (let [key, value] of map.entries()) {
	str = str + key + "\n";
for (var i = 0; i < value.length; i++)
	str = str + "\t" + value[i] + "\n";
}

console.log(str);