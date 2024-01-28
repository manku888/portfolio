

/*==============================toggle icon navbar=============================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// circle Sill///////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(elem => {
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots * marked / 100);
        var points = "";
        var rotate = 360 / dots;


        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; 
              --rot:${rotate}deg"></div>`;
        }

        elem.innerHTML = points;


        const pointsMarked = elem.querySelectorAll('.points');
        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked')
        }
    })
});


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Scroll Section Active link>>>>>>>>>>>>>>>>>>>>>>>>>*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==============================Sticky navbar=============================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==============================remove toggle icon and navbar when click navbar scroll=============================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// function flipCard() {
//     const cardInner = document.querySelector('.card-inner');
//     cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
// }

function flipCard() {
    const cardInner = document.querySelector('.card-inner');
    const readMoreBtn = document.getElementById('Btn');

    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    
    // Toggle the visibility of the button
    readMoreBtn.style.display = readMoreBtn.style.display === 'none' || readMoreBtn.style.display === 'Btn' ? 'block' : 'none';
}













/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<contect-form>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
const form = document.querySelector("form");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


function sendsEmail() {
     const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;



    Email.send({
        SecureToken : "b2549cce-1747-4b4a-91fc-c04c8f5c30c8",
        To: 'mankusingh881@gmail.com',
        From: "mankusingh881@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message =>{
            if ( message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message send successfully!",
                    icon: "success"
                  });
            }
        }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");

    for(const item of items){
        if(item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }


        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail()
        });

        item.addEventListener("keyup", () => {
            if (item.value !="") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });


    }
}


function checkEmail(){
    const emailRegex =/^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");  

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a vaild email address";
        }
        else{
            errorTxtEmail.innerText = "Email Address can't be blank";
            
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");  
    }

}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && 
    !subject.classList.contains("error") && !message.classList.contains("error") ) {

     sendsEmail();
       

     form.reset();
     return false;
    }




});

// this is not work so tomoroow h.W