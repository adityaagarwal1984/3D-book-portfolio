// Turn page while click on next or preview
const pageTurnBtn = document.querySelectorAll('.nextpre-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page')
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);

        }
    }
})

//turn pages when clicked on contact me 
const pages =document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');
contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        },(index+1 )*200+100)
    })
}
// creating a reverse index function 
let totalPages  =pages.length;
let pageNumber=0;
function reverseindex(){
    pageNumber--;
    if(pageNumber<0){
        pageNumber=totalPages-1;
    }
}

//trun pages when click on profile button
const profileBtn = document.querySelector('.back-profile');
profileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            pages[pageNumber].classList.remove('turn');
            
            setTimeout(() => {
                reverseindex();
                pages[pageNumber].style.zIndex = 10 + index;
            }); // Add delay similar to the contact me button
        }, (index + 1) * 200 + 100); // Adjust timing to match the contact me button
    });
}


// coverright=document.querySelector('.cover.cover-right');
// setTimeout(() => {
//     coverright.classList.add('turn');
// },2100)
pages.forEach((_, index) => {
    setTimeout(() => {
        pages[pageNumber].classList.remove('turn');
        
        setTimeout(() => {
            reverseindex();
            pages[pageNumber].style.zIndex = 10 + index;
        }); // Add delay similar to the contact me button
    }, (index + 1) * 200 + 100); // Adjust timing to match the contact me button
});


//contact me adding jaan to it.
// const form=document.querySelector("form");
// function sendemail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "adityaagarwal7983@gmail.com",
//         Password : "C0766FB6B584871D5BE2ED894DF4418E0F7F",
//         To : "adityaagarwal7983@gmail.com",
//         From : "adityaagarwal7017@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     sendemail(); // Call the function to send the email
// });


function sendmail(){
    let param={
        name: document.getElementById("name").value,
        mail: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    }
    emailjs.send("service_1uddbn2","template_wps9wzx",param).then(alert("success"))}