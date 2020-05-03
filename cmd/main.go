package main

import {
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
}

var db *sql.DB

struct loginUser{
	Name string `json:"userName"`
	Pass string `json:"userPass"`
	Login bool 
}

func main(){
	http.Handle("/login",func(w http.ResponseWriter, r *http.Request){
		loginCheck(w,r)
	})
}

func loginCheck(){
}