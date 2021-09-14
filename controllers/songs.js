const mongoose = require('mongoose');
const Song = require('../DB/song');

const findAllSongs = (req,res)=>{
    Song.find((err,songs)=>{
        err && res.status(500).sen(err.message);

        res.status(200).json(songs);
    });
}

module.exports = {findAllSongs};