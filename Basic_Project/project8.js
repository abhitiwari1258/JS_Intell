// EmailJS lets frontend developers send real emails directly from their website, securely, without writing backend code.

// emailjs.init -> connects your website → to your EmailJS account using your public key.

(function(){  
    emailjs.init("w39J3ZWoljoik0oDa")
})()

let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    emailjs.sendForm("service_ihroxzi", "template_16aiijj", form)
    .then(()=>{
        alert("Msg Sent SuccessFully")
    })
    .catch((err)=>{
        alert("Failed to send message: " + JSON.stringify(err) )
    })
})

// this = the form element itself
// this = <form id="contact-form">...</form>

/**
 What emailjs.sendForm Does

This function takes your HTML form, extracts the values from its input fields, and sends them to EmailJS servers.
Then, EmailJS delivers them as an email to you

 */