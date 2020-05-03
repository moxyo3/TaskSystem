function loginCheck() {
    var userName = document.getElementById("name");
    var userPass = document.getElementById("pass");
    var userInput = {
        name: userName.value,
        pass: userPass.value
    };
    fetch("/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInput)
    }).then(function (response) {
        if (response.ok) {
            alert("ログインしました。");
        }
        else {
            alert("ログインに失敗しました");
        }
    })["catch"](function (err) {
        console.log(err);
    });
}
function createUser() {
    var userName = document.getElementById("name");
    var userPass = document.getElementById("pass");
    var userCreate = {
        name: userName.value,
        pass: userPass.value
    };
}
