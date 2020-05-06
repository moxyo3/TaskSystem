package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

//フォーム入力された情報
type UserInput struct {
	UserId string `json:"userName"`
	Pass   string `json:"userPass"`
}

//DB情報
type DBUser struct {
	UserId     string `json: "userId"`
	Pass       string `json: "userPass"`
	MentorFlag bool   `json: "mentorFlag`
}

func main() {
	http.Handle("/task/", http.StripPrefix("/task/", http.FileServer(http.Dir("../src"))))
	http.HandleFunc("/loginCheck", loginCheck)

	log.Println("start http server :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func loginCheck(w http.ResponseWriter, r *http.Request) {
	//入力された情報をjsonからデコード、構造体へ格納
	var userInput UserInput
	if err := json.NewDecoder(r.Body).Decode(&userInput); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	log.Print(userInput)

	//db処理
	db, err := sql.Open("mysql", "moxyo3:moxyo3@/test_db")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	//dbから一致したレコードを格納
	var user DBUser = DBUser{}

	//userid,passが一致するものを検索
	if err := db.QueryRow("SELECT * FROM users WHERE user_id=? AND pass=?", (&userInput).UserId, (&userInput).Pass).Scan(&user.UserId, &user.Pass, &user.MentorFlag); err != nil {
		log.Fatal(err)
	}
	switch {
	case err == sql.ErrNoRows:
		log.Fatalln("アカウントが存在しません")
	case err != nil:
		log.Fatal(err)
	}

}

func createUser(w http.ResponseWriter, r *http.Request) {
	var newUser UserInput
	if err := json.NewDecoder(r.Body).Decode(&newUser); err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	//db処理
	db, err := sql.Open("mysql", "moxyo3:moxyo3@/test_db")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	//dbのレコードを格納
	//var user DBUser = DBUser{}

	//user_idが重複していないかチェック
}
