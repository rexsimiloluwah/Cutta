// @desc : Contains the routes for redirecting the created shortened URLs to original URLs

const express = require('express')
const mongoose = require('mongoose')
const Url = require('../models/Url')

const router = express.Router()


//@route  GET :/urlCode
//@desc   Redirect to Original URL

router.get('/:urlCode', async (req,res,next) => {
    const urlCode = req.params.urlCode

    try{
        const url = await Url.findOne({ urlCode : urlCode})

        if(url){
            // console.log(url.longUrl)
            return res.redirect(url.longUrl)
        }

        else{
            console.error('No URL Found')
            res.status(500).json('No URL Found')
        }
    }

    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
})



module.exports = router