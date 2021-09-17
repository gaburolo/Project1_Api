const mysql = require('mysql');
const conecction =mysql.createConnection({
   host: '127.0.0.1',
   user: 'root',
   password: 'mysql22x',
   port: '3306',
   database: 'astraoke_db',
   //socketPath: '/var/run/mysqld/mysqld.sock'

});
conecction.connect((err)=>{
   if(err){
      console.log('ERROR ERROR:' +err);
   }else{
      console.log('Conectado pá')
   }

});
module.exports = conecction;