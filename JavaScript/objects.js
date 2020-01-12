var obj1 = {

	name : "suman",
	age : 32,
	skill : "Developer",
	info : function(){

		document.write("Name is " + obj1.name + "</br>" + "age is" + "\n" + obj1.age  + " skill is " + obj1.skill);

		// \n did not wor
		// br workes
	}
};

obj1.info();


// GLobal objects ( prebuilt )

// String:-

// var hello = "hello"
// hello.<method name>
// hello.toUpperCase();
// hello.length;
// hello.charAt(index);
// hello.replace('word', 'new word');
// hello.bold();
// hello.italics();

// Math:-

// var num = 4.7;
// var newnum = 26 + Math.round(num);
// math.ceil(num)
// math.floor(num);
// math.sqrt(16);

// date:-

// new allows you to copy a new object to a variable
// var todayDate = new Date();
// todayDate.toDateString();
// todayDate.getyear();
// todayDate.setYear(2020);





