const conecction= require('../DB/connection');
const express = require('express');

const router = express.Router();

router.get('/',function(req,res){
    res.send('ASTRAOKE *.*');

});

///USERS
//get users
router.get('/users',(req,res)=>{
    let sql='SELECT * FROM users';
    conecction.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        };
    });

});

//get user
router.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    let sql='SELECT * FROM users WHERE id_user = ?';
    conecction.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        };
    });

});

//add user
router.post('/users',(req,res)=>{
    const{username, pass, premium} = req.body;
    let sql=`INSERT INTO users(username, pass, premium) VALUES('${username}','${pass}','${premium}');`;
    conecction.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'User added'});
        };
    });

});

//delete user
router.delete('/users/:id',(req,res)=>{
    const {id} = req.params;
    let sql=`DELETE FROM users WHERE id_user = ${id}`;
    conecction.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'User delete'});
        };
    });

});

//modify user
router.put('/users/:id',(req,res)=>{
    const {id} = req.params;
    const{username, pass, premium} = req.body;
    let sql = `UPDATE users set 
            username ='${username}',
            pass='${pass}',
            premium='${premium}'
            WHERE id_user='${id}'`;
    conecction.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'User modifed'});
        };
    });

});




/// SONGS
//get songs
router.get('/songs',(req,res)=>{
    let sql='SELECT * FROM songs';
    conecction.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        };
    });

});

//get song
router.get('/songs/:id',(req,res)=>{
    const {id} = req.params;
    let sql='SELECT * FROM songs WHERE id_song = ?';
    conecction.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        };
    });

});


//add song
router.post('/songs/',(req,res)=>{
    const{name_song, artist, album, imglogo, url, lyric} = req.body;
    let sql=`INSERT INTO songs(name_song,artist,album,imglogo,url,lyric) VALUES('${name_song}','${artist}','${album}','${imglogo}','${url}','${lyric}');`;
    conecction.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'Song added'});
        };
    });

});

//delete song

router.delete('/songs/:id',(req,res)=>{
    const {id} = req.params;
    let sql=`DELETE FROM songs WHERE id_song = ${id}`;
    conecction.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'Song delete'});
        };
    });

});
//modify song
router.put('/songs/:id',(req,res)=>{
    const {id} = req.params;
    const{name_song, artist, album, imglogo, url, lyric} = req.body;
    let sql = `UPDATE songs set 
            name_song ='${name_song}',
            artist='${artist}',
            album='${album}',
            imglogo='${imglogo}',
            url='${url}',
            lyric='${lyric}'
            WHERE id_song='${id}'`;
    conecction.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status:'Song modifed'});
        };
    });

});



module.exports = router;