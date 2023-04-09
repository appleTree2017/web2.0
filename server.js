// const express =require("express");
// const app=express();
// const bodyParser=require("body-parser");
// // console.log("Hello Web 2.0");
// app.use(bodyParser.json());
// app.get("/",(req,res) =>{
//
//   res.send("Hello web 2.0");
//
//   var email=req.body.email;
//   var amount =req.body.amount;
//
//   res.send({"amount": amount,"email":email});
// }
//
// );
//
// app.listen(3000,()=>{
//   console.log("server is running on port 3000");
// });


const express =require("express");
const app=express();
const bodyParser=require("body-parser");
// console.log("Hello Web 2.0");
app.use(bodyParser.json());
app.post("/",(req,res) =>{



  var email=req.body.email;
  var amount =req.body.amount;

  res.send({"amount": amount,"email":email});
}

);

app.listen(3000,()=>{
  console.log("server is running on port 3000");
});
