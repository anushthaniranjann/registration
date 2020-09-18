const express = require('express')

const user = require('./modes/user.model')

const router = express.Router()

router.get('/',async (req,res) => {
try {
    res.send('User route working fine')
} catch (err) {
    console.group(err.message)
    res.status(500).send('Server Error')
}
})

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    try{
        //Display msg if user already exists
        let user = await user.findOne({email})
        if(user){
            return res.status(400).json({errors:[{msg: "User already exists" }]})
        }
        user = new user ({
            name,email, password
        })
       await user.save()
       res.send("User Registered succesfully") 
    }catch(err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

router.post('/login', async (req,res) =>{

    const { email, password} = req.body

    try{
        //If user already exists
        let user = await User .findOne({email})
        if(user){
            return res.status(400).json({errors:[{msg: 'Invalid Credentials!'}]})
        }
        
        if(password != user.password){
            return res.status(400).json({errors:[{errors: 'Invalid Credentials!'}]})
        }
        res.send('Logged in Successfully')
    }catch(err){
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

router.get('/getAllUsers', async (req, res) => {
    const users = await User.find({})
    try {
        res.send(users)
    }catch (err) {
        res.send(err.message)
    }
})

module.exports = router