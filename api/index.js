const express = require('express');
const mongoose = require('mongoose');
const db = require('./db');

const api = express.Router();

api.get('/todos', async (req, res, next) => {
    if(req.cookies.uid) {
        try{
            let todos = await db.findTodos(req.cookies.uid);
            await res.json(todos);
        } catch (e) {
            res.sendStatus(400);
        }
    } else {
        res.json([]);
    }
});

api.post('/todos', async (req, res, next) => {
    let text = req.body.text.trim();
    let uid = req.cookies.uid;

    if(!text) {
        res.status(400).json({error: "Todo cannot be empty"});
        return;
    }

    if(!uid) {
        res.sendStatus(400);
        return;
    }
    
    try{
        let result = await db.saveTodo(uid, text);
        res.json(result);
    } catch (e) {
        res.sendStatus(500);
    }
    
});

api.put('/todos/:id', async (req, res, next) => {
    let id = req.params.id;
    let text = req.body.text.trim();

    if(!text) {
        res.sendStatus(400);
        return;
    }
 
    try{
        let result = await db.updateTodo(id, text);
        res.json(result);
    } catch (e) {
        res.sendStatus(500);
    }
});

api.delete('/todos/:id', async (req, res, next) => {
    let id = req.params.id;
    let result = await db.deleteTodo(id);
    res.status(200).json({message: "deleted", _id: id});
});

module.exports = api;
