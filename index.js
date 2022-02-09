
let age_url = new URL('http://localhost/PHP_simpleAPI/hashpassword.php?password=');


let form = document.getElementById("form");
let h1 = document.getElementById("h1");


form.onsubmit = async (event) => {
    event.preventDefault();

    let input_name = document.getElementById("name").value;
   

        let age_response = await fetch(age_url+input_name);
        let age_result = await age_response.json();

        h1.innerHTML=age_result.status;
};