

function run() {
    //step 1

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let msg = document.getElementById("msg").value

    
    if (username === "") {
        document.getElementById("userfield").innerHTML = "This is reqiered field"
        document.getElementById("username").style.border = "1px solid red"
    }


    if (username === "") {
        document.getElementById("emailfield").innerHTML = "This is reqiered field"
        document.getElementById("email").style.border = "1px solid red"
    }


    if (username === "") {
        document.getElementById("msgfield").innerHTML = "This is reqiered field"
        document.getElementById("msg").style.border = "1px solid red"
    }



    // Step 2 
    //condition Statement (if/else)

    // if (username === "" || email === "" || msg === "") {
    //     alert("Please fillout all values")
    // }

    else {

        let feedbackData = {
            username: username,
            email: email,
            msg: msg
        }

        console.log(feedbackData);

        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("msg").value = ""

        alert("your Form has been sumitted! Thankyou")


    }

}