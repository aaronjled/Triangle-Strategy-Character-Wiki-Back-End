const express = require('express');
const router = express();
const Character = require('../models/CharacterSchema')

router.get('/', async (req, res) => {
    try{
        const character = await Character.find();
        res.send({
            success: true,
            data: character
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})

router.post('/', async (req, res) => {
    try{
        const newCharacter = await Character.create(req.body);
        res.send({
            success: true,
            data: newCharacter
        })
    }catch(err) {
        res.send({
            success: false,
            data: err.message
        })
    }
})

router.get('/:id', async (req, res)=> {
    try{
        const character = await Character.findById(req.params.id);
        if(!character){
            throw new Error("No Character by that name exists.")
        }
        res.send({
            succes: true,
            data: character
        })
    }catch(err) {
        res.send({
            success: false,
            data: err.message
        })
    }
})
router.delete('/:id', async (req, res)=> {
    try{
        const character = await Character.findByIdAndDelete(req.params.id);
        res.send({
            succes: true,
            data: character
        })
    }catch(err) {
        res.send({
            success: false,
            data: err.message
        })
    }
})
router.put('/:id', async (req, res)=> {
    try{
        const character = await Character.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.send({
            succes: true,
            data: character
        })
    }catch(err) {
        res.send({
            success: false,
            data: err.message
        })
    }
})

module.exports = router;