let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');
let navlinks = document.querySelectorAll('.nav-link-group');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});
console.log(navlinks);
navlinks.forEach((curElem)=>{
    curElem.addEventListener("click",()=>{
        hamburger.classList.toggle("active");
        navbar.classList.toggle("active");
    });

});


function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
    }

let serviceId = "service_zez3bhy";
let templateId = "template_yp4m9yv";

emailjs.send(serviceId,templateId,params).then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        let success = document.getElementById("success");
        let error = document.getElementById("error");
        
        success.innerHTML = "Message sent successfully !!";
        success.style.display = "block";
        error.style.display = "none"; // Hide error message if previously displayed
        setInterval(()=>{
            success.style.display = "none";
        },2000);

    }
).catch(err => {
    console.log(err);

    // Show error message
    let error = document.getElementById("error");
    let success = document.getElementById("success");

    error.innerHTML = "Message not sent. Please try again.";
    error.style.display = "block";
    success.style.display = "none"; // Hide success message if previously displayed

    setInterval(()=>{
        error.style.display = "none";
    },2000);
});
}

