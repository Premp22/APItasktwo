let http = require("http");
let express = require("express");
let app = express();
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let userInfo = [
	{
		id: 1,
		username: "prem",
		fullname: "prem p",
	},
	{
		id: 2,
		username: "akash12",
		fullname: "akash s",
	},
	{
		id: 3,
		username: "shareef",
		fullname: "shareef u",
	},
	{
		id: 4,
		username: "jasi",
		fullname: "jaisal m",
	},
	{
		id: 5,
		username: "ijas",
		fullname: "ijas m",
	},
];

//To get All users

app.get("/", (req, res) => {
	res.render("index", { userInfo });
});
app.get("/add", (request, response) => {
	response.render("add");
});
//add new user
app.post("/user", (req, res) => {
	let newuser = {
		id: userInfo.length + 1,

		username: req.body.username,
		fullname: req.body.fullname,
	};

	userInfo.push(newuser);

	res.render("result", { userInfo });
});

app.listen(3000);
