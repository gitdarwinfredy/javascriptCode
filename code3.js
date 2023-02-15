var miString = "BCCFDEFEAZZa" 
var result,results = ""
let elements = ""
let text1,text2,text3,text4,text5,text6 = ""


text1 =miString.slice(0,2);
text2 =miString.slice(2,4);
text3 =miString.slice(4,6);
text4 =miString.slice(6,8);
text5 =miString.slice(8,10);
text6 =miString.slice(10,12);

//result = elements.join('')
result = `${text1}:${text2}:${text3}:${text4}:${text5}:${text6} hola mundo`
elements = result.toUpperCase()
results = elements.split(' ').join('-');

// for (i=0;i<miString.length-1;i++) { 
//    	//result += miString[i]
//    	result += `${miString.charAt(i)}:` 
// } 
// result += miString.charAt(miString.length-1)

console.log(results)