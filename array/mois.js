var array = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];

console.log (array[2]); // afficher mars

console.log (array[5]); // affiche index 5

console.log (array[10]); // affiche novembre

array[7] = "août";
console.log (array[7]);

for (var index = 0; index < array.length; index++) {
	console.log (array[index]);
};
