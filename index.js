const express = require('express');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '<THE DIRECTORY TO SAVE AND STORE FILES RESIVED>')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage })

app.post('/uploaded', upload.single('upload'), function(req, res, next) {
    res.status(200).send({ 'answer': "file uploaded" });
});

app.use('/uploaded', express.static('<THE DIRECTORY TO SAVE AND STORE FILES RESIVED>'));
