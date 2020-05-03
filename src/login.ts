function loginCheck(){
    const userName : HTMLInputElement =<HTMLInputElement>document.getElementById("name");
    const userPass : HTMLInputElement =<HTMLInputElement>document.getElementById("pass");

    const userInput = {
        name : userName.value,
        pass : userPass.value,
    }

    fetch("/login",{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput),
    }).then((response)=> {
        if(response.ok){
            alert("ログインしました。")
        } else {
            alert("ログインに失敗しました")
        }
    }).catch((err) => {
        console.log(err);
    })
}

function createUser(){
    const userName : HTMLInputElement =<HTMLInputElement>document.getElementById("name");
    const userPass : HTMLInputElement =<HTMLInputElement>document.getElementById("pass");

    const userCreate = {
        name : userName.value,
        pass : userPass.value,
    }
}