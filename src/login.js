function loginCheck() {
    var userId = document.getElementById("userId");
    var userPass = document.getElementById("userPass");
    var userInput = {
        userId: userId.value,
        userPass: userPass.value
    };
    fetch("/loginCheck", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInput)
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
    }).then(function (data) {
        //loginOK
        window.location.href = 'main.html';
        //loginNG
        console.log(data.message);
    })["catch"](function (err) {
        console.log(err);
    });
}
