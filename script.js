let name_field = document.getElementById("iname");
let cardNumber_field = document.getElementById("inumber")
let date_field = document.getElementById("idate")
let cvc_field = document.getElementById("icvc")

if(name_field.length == 0){
    name_field.style.border = "1px solid hsl(0, 100%, 66%)"
}

function confirmButton(){
    if(form.style.display = "block"){
        form.style.display = "none"
        final.style.display = "block"
    }
}

function continueButton(){
   location.reload()
}