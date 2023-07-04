const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const YAML=require("yamljs");
const swaggerJsdoc=YAML.load("./swagger.yaml");
const swaggerui=require("swagger-ui-express");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/mail-api",swaggerui.serve, swaggerui.setup(swaggerJsdoc));

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Sophie",
    database: "mailbox"
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    con.query("SELECT * FROM uesr WHERE Email = ? AND Passwor = ?", [email, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    
                
                    res.send(result);
                    console.log("yesss!");
                }else{
                    
                    res.send({message: "Invalid Username OR Password!"})
                    
                    
                }
            }
        }
    )
})
app.post("/message", (req, res) => {
const email = req.body.email;
 console.log("yEsss!");
     con.query("SELECT * FROM message WHERE email = ? ", [email], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    
                
                    res.send(result);
                   
                }else{
                    
                    res.send({message: "No Result Found!"})
                    
                    
                }
            }
        }
    )
})
app.post("/display", (req, res) => {
const id = req.body.id;
 console.log("ohhhsss!");
     con.query("SELECT * FROM message WHERE Id = ? ", [id], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    
                
                    res.send(result);
                   
                }else{
                    
                    res.send({message: "success!"})
                    
                    
                }
            }
        }
    )
})
app.listen(3005, () => {
    console.log("running backend server");
})