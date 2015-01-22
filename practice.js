//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
	if (name === 'Tyler') {
		return true;
	} else {
		return false;
	}
};


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function() {
	return prompt("What is your name");
};


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
	var name = getName();
	alert("Welcome, " + name);
};


//Next problem




//What is the difference between arguments and parameters?

/*
	Consider the following:

	var helloWorld = function(name) {
		alert(name);
	}

	Parameters are the things defined by functions as input, in the case above its name. 

	Now consider this:

	helloWord("Jesse");

	Arguments are the things passed into the function call. In the case above its "Jesse".
*/


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

/*The following values are always falsy:
	false
	0 (zero)
	"" (empty string)
	null
	undefined
	NaN (a special Number value meaning Not-a-Number!)*/

/*The below code will test whether or not a value is truthy or falsy.*/
var falsyTest = function(test) {
	if(test) {
		alert("value is truthy");
	} else {
		alert("value is falsy");
	}
};



//Next Problem



//Create a function called myName that returns your name

var myName = function() {
	return "Jesse";
};

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName



alert(newMyName);



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
	return function() {
		return myName();
	};
};

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();