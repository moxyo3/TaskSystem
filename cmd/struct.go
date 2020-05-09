package main

//フォーム入力された情報
type UserInput struct {
	UserId string `json:"userId"`
	Pass   string `json:"userPass"`
}

//DB情報
type DBUser struct {
	UserId     string
	Pass       string
	MentorFlag int
}
