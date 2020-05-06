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
            alert("ログインします。");
            viewMainPage();
        }
        else {
            alert("ログインに失敗しました");
        }
    })["catch"](function (err) {
        console.log(err);
    });
}
function viewMainPage() {
    window.location.href = 'main.html';
}
