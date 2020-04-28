package task

import "net/http"

func main(){
	http.Handle("/",http.FileServer(http.Dir(".")))
	http.HandleFunc("/topic",func(w,http.ResponseWriter, r *http.Request)){
	}
}