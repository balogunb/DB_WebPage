// Entry Point of the API Server  
  
const express = require('express'); 
  
/* Creates an Express application.  
   The express() function is a top-level  
   function exported by the express module. 
*/
const app = express(); 
const Pool = require('pg').Pool; 


 const pool = new Pool({
	user: "balogunb",
	host: "localhost",
	password: "{Ofyers8",
	database: "balogunb",
	port: "5432"
});


const bodyParser = require('body-parser'); 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



pool.connect((err, client, release) => { 
    if (err) { 
        return console.error( 
            'Error acquiring client', err.stack) 
    } 
    client.query('SELECT NOW()', (err, result) => { 
        release() 
        if (err) { 
            return console.error( 
                'Error executing query', err.stack) 
        } 
        console.log("Connected to Database !") 
    }) 
}) 
  


app.get('/counties', (req, res, next) => { 

    let queryStr = `
		SELECT * FROM counties`
    pool.query(queryStr) 
        .then(data => { 
            console.log(data.rows); 
            res.send(data.rows); 
        }) 
})


app.get('/colleges', (req, res, next) => {  

    let queryStr = `
		SELECT * FROM colleges`
    pool.query(queryStr) 
        .then(data => { 
            console.log(data.rows); 
            res.send(data.rows); 
        }) 
})

app.get('/allcountydata', (req, res, next) => { 

    let queryStr = `
		SELECT * FROM county_weekly_cases order by date desc`  
    pool.query(queryStr) 
        .then(data => { 
            console.log(data.rows); 
            res.send(data.rows); 
        }) 
})


app.get('/countycolleges', (req, res, next) => { 
    const county_name = req.query.county_name
    console.log(county_name)

    let queryStr = `
        SELECT * FROM colleges where county_name =$1`  
    pool.query(queryStr,[county_name]) 
        .then(data => { 
            console.log(data.rows); 
            res.send(data.rows); 
        }) 
})


app.get('/countydata', (req, res, next) => { 
    const county_name = req.query.county_name
    console.log(county_name)

    let queryStr = `
		SELECT * FROM county_weekly_cases where county_name =$1 order by date asc`  
    pool.query(queryStr,[county_name]) 
        .then(data => { 
            console.log(data.rows); 
            res.send(data.rows); 
        }) 
})



app.get('/collegedata', (req, res, next) => { 
    const college_name = req.query.college_name

    let queryStr = `
		SELECT * FROM college_weekly_cases where college_name =$1 order by date asc`  
    pool.query(queryStr,[college_name]) 
        .then(data => { 
            console.log(data.rows); 
            res.send(data.rows); 
        }) 
})





const server = app.listen(80, '139.147.9.191',() => {
 console.log("Server running on port 80");
}); 