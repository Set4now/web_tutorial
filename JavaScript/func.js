function yearAlert (){
	var current_year = 2020;
	alert ("The current year is " + current_year);
}

yearAlert();




function helloWorld (name,age){


	alert (name + " is " + age + " years old");

}

helloWorld("suman", 32);


// Operatiors ( + - // / * ++ += --)




// Conditionals 
// if

var food = "chicken";
if (food == "chicken") {

	alert ("I ate chicken!")
}

else if (food == "mutton") {

	alert ("I ate mutton!")
}

else {

	alert ("I ate something else")
}

// Loops
 
// while (condition) {

// 	if condition true then this will get exceuted 
// }


var i = 5;
while ( i < 6 ) {
	document.write (" i got exceuted")
	i++
}


// for

for ( var i = 5, i < 5, i++) {
	document.write (" i got exceuted")
}

// function return statement

function returnMe(name) {
	return name;
}

var result = returnMe("suman");
document.write(result);


// Global and Local variables ( scopes of variables )
// variables defined outside of function ( global )
// variables defined inside of function ( local )
// NOTE:- if you don't put the var keyword with a local variable inside a fucn then it will be considered as global variable



// Arrays 
// var names = ['x','y','z',];
// index starts with 0
// names[1] is 'y'
// empty array is []



// OBJECTS
// objects have properties| attributes
/*
var obj1 = {
	color: "red",
	height: "14"
};

*/

// get obj1 attributes --> obj1.height; 
// delete attribute 
// delete obj1.height;

// functions assocated with objects are methods 

// var obj1 = {

// 	yell: function(){

// 		document.write('i can do something');
// 	}

// };

// obj1.yell();


