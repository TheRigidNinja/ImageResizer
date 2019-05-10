    
const express = require("express");
    app = express(),
    http = require("http").Server(app);



app.set("view engine", "ejs");

// ---- // Middleware
app.use("/public",express.static("public")); 

app.get("/",(req,res)=>{
    res.render("Index")
})


http.listen(process.env.PORT || 8080, function(){
    console.table({"Host URL --> ":"http://localhost:8080"});
});


// Reloading HTML fILE
const path = require("path");
const livereload = require("livereload").createServer({
  exts:["ejs","js","css"]
});

livereload.watch(path.join(__dirname,"views"));
livereload.watch(path.join(__dirname,"public"));