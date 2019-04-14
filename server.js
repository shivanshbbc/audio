var express = require('express');
var request = require('request');
const fileUpload = require('express-fileupload');
var app = express();

app.use(fileUpload());

app.set("view engine", "ejs");
app.get("/",function(req, res) {
    res.render("index");

});
app.post('/upload', function(req, res) {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let audiodata = req.files.audiodata;

    // Use the mv() method to place the file somewhere on your server
    audiodata.mv('views/upload/audio.ogg', function(err) {
        if (err) {
            console.log("here");
            return res.status(500).send(err);

        }
        res.send('File uploaded!');
    });
});

app.get('/music',function(req,res) {
    res.sendFile(__dirname + '/views/upload/audio.ogg')
});

app.listen(process.env.PORT || 8080, process.env.ID, function() {

    console.log("server started");
    let port = 8080;


});
