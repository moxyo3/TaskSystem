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
        }
        else {
            alert("ログインに失敗しました");
        }
    })["catch"](function (err) {
        console.log(err);
    });
    //
}
function createUser() {
    var userId = document.getElementById("userId");
    var userPass = document.getElementById("userPass");
    var userCreate = {
        userId: userId.value,
        userPass: userPass.value
    };
    fetch("/createUser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCreate)
    }).then(function (response) {
        if (response.ok) {
            alert("アカウントを新規作成します。");
        }
        else {
            alert("アカウントの作成に失敗しました");
        }
    })["catch"](function (err) {
        console.log(err);
    });
}
