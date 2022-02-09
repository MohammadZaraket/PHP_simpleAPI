// First Block is dealing with first form that claculates the equation
let equation_url = new URL('http://localhost/PHP_simpleAPI/equation.php?');
let equation_form = document.getElementById("equation_form");
let result = document.getElementById("equation_result");

equation_form.onsubmit = async (event) => {
    event.preventDefault();

    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
   
    let equation_response = await fetch(equation_url+'x='+x+'&y='+y);
    let equation_result = await equation_response.json();

    result.innerHTML=equation_result.solution;
};


//Dealing with Second form that checks if the input string is palindrome or not

let palindrome_url = new URL('http://localhost/PHP_simpleAPI/palindrome.php?input=');
let palindrome_form = document.getElementById("palindrome_form");
let display_result = document.getElementById("palindrome_result");

palindrome_form.onsubmit = async (event) => {
    event.preventDefault();

    let input = document.getElementById("input").value;
   
    let palindrome_response = await fetch(palindrome_url+input);
    let palindrome_result = await palindrome_response.json();

    display_result.innerHTML=palindrome_result.status;
};


//Dealing with Third form that removes extra spaces from the input string

let extraspace_url = new URL('http://localhost/PHP_simpleAPI/extraspace.php?input=');
let extraspace_form = document.getElementById("extraspace_form");
let nospace_result = document.getElementById("extraspace_result");

extraspace_form.onsubmit = async (event) => {
    event.preventDefault();

    let input = document.getElementById("spaces_input").value;
   
    let extraspace_response = await fetch(extraspace_url+input);
    let extraspace_result = await extraspace_response.json();

    nospace_result.innerHTML=extraspace_result.return;
};


//Dealing with fourth form that checks if the input password is good and hash it using sha256

let hashpassword_url = new URL('http://localhost/PHP_simpleAPI/hashpassword.php?password=');
let hashpassword_form = document.getElementById("hashpassword_form");
let display_hashpassword_result = document.getElementById("hashpassword_result");
let display_hashpassword_result2 = document.getElementById("hash");

hashpassword_form.onsubmit = async (event) => {
    event.preventDefault();

    let input = document.getElementById("password_input").value;
   
    let hashpassword_response = await fetch(hashpassword_url+input);
    let hashpassword_result = await hashpassword_response.json();

    display_hashpassword_result.innerHTML=hashpassword_result.status;

    if (hashpassword_result.Hashed == undefined){  // in case the password isn't good it won't be hashed
        display_hashpassword_result2.innerHTML="Will Not Be Hashed!"
    }
    else{

        display_hashpassword_result2.innerHTML= hashpassword_result.Hashed;
    }
 
};