function createUser(){
    const userId: HTMLInputElement =<HTMLInputElement>document.getElementById("userId");
    const userPass : HTMLInputElement =<HTMLInputElement>document.getElementById("userPass");

    interface UserInput {
        userId: string;
        userPass: string;
    }

    const userCreate = {
        userId: userId.value,
        userPass : userPass.value,
    }
    fetch("/createUser",{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCreate),
    }).then((response)=> {
        if(response.ok){
            alert("アカウントを新規作成します。")
        } else {
            alert("アカウントの作成に失敗しました")
        }
    }).catch((err) => {
        console.log(err);
    })

}