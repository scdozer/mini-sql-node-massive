const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();


const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  // dbInstance.new_planes()
  // .then( (planes) => console.log(planes));
  // .catch( (error) => console.log(error));
  //
  // dbInstance.get_planes()
  //   .then(planes => console.log('here are our planes', planes))
  //   .catch(error => console.log(error))
});

app.use(express.static(__dirname + '/build')); //This serves the build static folder so the api is serving the front end, which makes it work in a browser yayyy

app.use( bodyParser.json() );
app.use( cors() );

app.post('/api/planes', controller.addPlane);
app.get('/api/planes/', controller.getPlanes);

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );
