const express = require("express")
const path=require("path")
const router = express.Router()

const aboutuscommentModel=require("../models/aboutusModel")
const contactusModel = require("../models/contactusModel")
const jointeamModel = require("../models/jointeamModel")
const volunteerModel=require("../models/volunteerModel")

const staticPath=path.join(__dirname,"../")

router.post("/aboutuscomment", async (req, res) => {
    
    try {
        let comment = new aboutuscommentModel()
        
        comment.name = req.body.name
        comment.email = req.body.email
        comment.comment = req.body.comment
        
        try {
            await comment.save()
            res.sendFile(staticPath+"/about.html")
        }
        catch (err)
        {
            res.send(err)
            console.log(err);
        }

    }
    catch (err)
    {
        res.status(400).send(err);
        console.log(err);
    }

})

router.post("/contactform", async (req, res) => {
    
    try {
        let contact = new contactusModel()
        
        contact.name = req.body.name
        contact.email = req.body.email
        contact.mobile = req.body.mobile
        contact.message=req.body.msg
        
        try {
            if (await contact.save())
            {
                res.sendFile(staticPath+"/contactus.html")
            }
        }
        catch (err)
        {
            res.send(err)
            console.log(err);
        }

    }
    catch (err)
    {
        res.status(400).send(err)
    }

})

router.post("/jointeam", async (req, res) => {
    
    try {
        let jointeam = new jointeamModel()
        
        jointeam.fname = req.body.fname
        jointeam.lname = req.body.lname
        jointeam.city = req.body.city
        jointeam.email = req.body.email
        jointeam.cemail = req.body.cemail
        jointeam.mnmbefore = req.body.check
        jointeam.date = req.body.date
        jointeam.mobile = req.body.tel
        jointeam.expreience = req.body.skills
        jointeam.address = req.body.address
        jointeam.time = req.body.time
        jointeam.comments = req.body.comment
        
        try {
            if (await jointeam.save())
            {
                res.sendFile(staticPath+"/formm.html")
            }
        }
        catch (err)
        {
            res.send(err)
            console.log(err);
        }

    }
    catch (err)
    {
        res.status(400).send(err)
    }

})

router.post("/joinasvolunteer", async (req, res) => {
    
    try {
        let volunteer = new volunteerModel()
        
        volunteer.fname = req.body.fname
        volunteer.lname = req.body.lname
        volunteer.city = req.body.city
        volunteer.email = req.body.email
        volunteer.cemail = req.body.cemail
        volunteer.mnmbefore = req.body.check
        volunteer.date = req.body.date
        volunteer.mobile = req.body.tel
        volunteer.expreience = req.body.skills
        volunteer.address = req.body.address
        volunteer.time = req.body.time
        volunteer.comments = req.body.comment
        
        try {
            if (await volunteer.save())
            {
                res.sendFile(staticPath+"/volunteer.html")
            }
        }
        catch (err)
        {
            console.log(err);
        }

    }
    catch (err)
    {
        res.status(400).send(err)
    }

})




module.exports=router
