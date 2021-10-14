console.log("It works!")

$(document).ready(function () {
    $("#submit").click(function (event) {
        console.log("Clicked")
        
        const email = $("#email").val()
        const subject = $("#subject").val()
        const message = $("#message").val()

        if(email.length > 5 && email.includes("@") && email.includes(".")){
            console.log("Email is valid")
        } else {
            event.preventDefault()
            alert("Email is invalid")
        }
    })
})