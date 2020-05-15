package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func main() {
	var err error
	db, err = sql.Open("mysql", "moxyo3:moxyo3@/test_db")
	if err != nil {
		log.Print("DB error")
	}

	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("../src"))))
	http.HandleFunc("/loginCheck", loginCheck)

	log.Println("start http server :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))

	defer db.Close()
}

func loginCheck(w http.ResponseWriter, r *http.Request) {
	//入力された情報をjsonからデコード、構造体へ格納
	var userInput UserInput
	if err := json.NewDecoder(r.Body).Decode(&userInput); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	log.Print(userInput)

	//dbから一致したレコードを格納
	var user DBUser

	//userid,passが一致するものを検索
	if err := db.QueryRow("SELECT * FROM users WHERE user_id=? AND pass=?", (&userInput).UserId, (&userInput).Pass).Scan(&user.UserId, &user.Pass, &user.MentorFlag); err != nil {
		switch {
		case err == sql.ErrNoRows:
			http.Error(w, "account error", 401)
		case err != nil:
			http.Error(w, "error", 500)
		}
	}
	log.Print(user)
	//userInputとDBUser比較
}

/*func createUser(w http.ResponseWriter, r *http.Request) {
	var newUser UserInput
	if err := json.NewDecoder(r.Body).Decode(&newUser); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	//dbのレコードを格納
	//var user DBUser = DBUser{}

	//user_idが重複していないかチェック
}*/
