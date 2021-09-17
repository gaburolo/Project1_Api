const conecction= require('../DB/connection');
const express = require('express');

const router = express.Router();

router.get('/',function(req,res){
    res.send('ASTRAOKE *.*');

});

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