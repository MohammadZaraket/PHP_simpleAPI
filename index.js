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
