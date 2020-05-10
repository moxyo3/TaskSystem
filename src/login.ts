function loginCheck(): void {
    const userId: HTMLInputElement =<HTMLInputElement>document.getElementById("userId");
    const userPass : HTMLInputElement =<HTMLInputElement>document.getElementById("userPass");

    interface UserInput {
        userId: string;
        userPass: string;
    }

    const userInput: UserInput = {
        userId: userId.value,
        userPass : userPass.value,
    }

    fetch("/loginCheck",{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput),
    }).then((response:any)=> {
        if(response.ok){
            window.location.href = 'main.html';
        }
    }).catch((err) => {
        console.log(err);
    })
}