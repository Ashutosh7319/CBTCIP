const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>
{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const email = document.getElementById("email");
const submit = document.getElementsByClassName("full-con")[0];
const name = document.getElementById("name");
const phone = document.getElementById("number");
const subject = document.getElementById("subject");
const query = document.getElementById("area");

submit.addEventListener('submit', (e)=>
{
    e.preventDefault();
    console.log('clicked');

    Email.send({
        SecureToken: "6ef54bdf-0dad-4e60-b0db-d69dd44dd38b",
        To: "sahaashutosh108@gmail.com",
        From:"sahaashutosh108@gmail.com",
        Subject: "Test",
        Body: "Name: " + name.value
            + "<br> Email: " + email.value 
            + "<br> Phone Number: " + phone.value
            + "<br> Subject: " + subject.value
            + "<br> Query: " + query.value
    }).then(
        message => alert(message)
    );
})



