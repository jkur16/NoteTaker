// Dependencies
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
// read and return JSON

    // fs.readFile("../db/db.json", "utf8", (err, jsonString) => {
    //     if (err) {
    //         console.log("File read failed:", err);
    //         return;
    //     }
    //     console.log("File data:", jsonString);
    // })
    // API GET Requests
    app.get('/api/notes', (req, res) => { 
        // 1. Read db.json file
        // fs.readFile("./db/db.json", "utf8", (err, jsonString) => {
        //     if (err) {
        //         console.log("File read failed:", err);
        //         return;
        //     }
        //     console.log("File data:", jsonString);
       
        // 2. Return all saved notes as json
        res.sendFile(path.join(__dirname, '../db/db.json'));
      });
    
      app.post('/api/notes', (req, res) => {
        fs.readFile("./db/db.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            let allNotes = JSON.parse(jsonString);
            allNotes.push(req.body);
        
            fs.writeFile('./db/db.json', JSON.stringify(allNotes), (err) =>
            err ? console.error(err) : console.log('Success!')
          );
          res.json(allNotes)

    //     // 1. Getting request body (look req.body)
    //     // 2. Add request body to json file
    //     // 3. Response will be new note
      });
    })
}

