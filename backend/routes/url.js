/* eslint-disable promise/always-return */
// @desc : Storing the Long URLs in the database and assigning Short URLs to them

const express = require('express')
const mongoose = require('mongoose')
const validUrl = require('valid-url')
const shortid = require('shortid')
const path = require('path')
const Url = require('../models/Url')

const router = express.Router()

// Testing the url routes
// router.get( '/test', (req,res,next) => {
//     res.status(200).json({
//         message : "It Works !"
//     })
// })

// @route  POST  /api/url/shorten
// @desc   Create Short URL

router.post('/shorten', async (req,res,next) => {
    const longUrl  = req.body.longUrl
    const customUrl = req.body.customUrl
    const baseUrl = process.env.BASE_URL
    

    if (!validUrl.isUri(baseUrl)){
        // 401 - Unauthorized Error
        res.status(401).json({
            message : "Invalid Base URL"
        })
    }




    if(validUrl.isUri(longUrl)){

        try{
            let url = await Url.findOne({longUrl : longUrl})

            if(url){
                res.status(200).json(url)
            }

            else{

                if(customUrl){
                    let checkCustom = await Url.findOne({urlCode : customUrl})

                    if(checkCustom){
                        res.status(500).json("Custom URL already exists, Kindly select another custom name")
                    }

                    else{
                        const urlCode = customUrl
                        const shortUrl = path.join(baseUrl, urlCode)
                        
                        
                        const newUrl = {
                            _id : mongoose.Types.ObjectId(),
                            urlCode : urlCode,
                            shortUrl : shortUrl,
                            longUrl : longUrl
                        }
                        
                        await Url.create(newUrl)

                        res.status(200).json(newUrl)
                    }

                }

                else{
                      // Create shortened URL Code
                    const urlCode = shortid.generate()

                    const shortUrl = path.join(baseUrl, urlCode)
                    
                    const newUrl = {
                        _id : mongoose.Types.ObjectId(),
                        urlCode : urlCode,
                        shortUrl : shortUrl,
                        longUrl : longUrl
                    }
                    
                    await Url.create(newUrl)

                    res.status(200).json(newUrl)

                }
                
                
            }
        }

        catch(err){
            console.error(err)
            res.status(500).json(err)
        }

    }

    else{
        res.status(401).json({
            message : "Invalid URL"
        })
    }


})


// @route GET /api/url/
// @desc :- Fetches all the shortened routes from the MongoDB database

router.get('/', async (req, res, next) => {

    Url.find()
    .exec()
    .then( (result) => {
        response = {
            desc : "Returns all shortened links",
            length : result.length,
            data : result

        }
        res.status(200).json(response)
    })
    .catch( (err) => {
        console.log(err)
        res.status(500).json(err)
    })
})



module.exports = router