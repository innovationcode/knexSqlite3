const express = require('express');

const router = express.Router();

//connect to database  .. from knexfile.js
const knexConfig = require('../knexfile.js'); //bring development object here in knexConfig ... which is exported from knexfile.js
const knex = require('knex');
const db = knex(knexConfig.development);


    //.get()  route to get all smurfMovies from Database ..smurfsPics table data
    //router.get('/smurfsPics', (req, res) => { **** NEED TO CHANGE ROUTE FROM '/smurfsPics' TO ONLY '/' FOR ROUTRES.. AS IT IS DEFINED IN INDEX.JS TO USE THESES ROUTES FOR ANY REQUEST RECEIVED WITH '/smurfsPics'... 
    router.get('/', (req, res) => {    
        db('smurfsPics')
            .then(movies => {
                res.status(200).json(movies);
            })
            .catch(err => {
                res.status(500).json(err);             
            })
    })

    //.post()  to add into smurfsPics table..
    router.post('/', (req, res) => {
        //db.insert(req.body).into('smurfsPics').then().catch()
        db('smurfsPics')
            .insert(req.body)
            .then(ids => {
                res.status(201).json(ids);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    })

    //.delete()  to delete a record from smurfsPics table by providing id..
    router.delete('/:id', (req, res) => {
        db('smurfsPics')
            .where({id : req.params.id})
            .del()
            .then(count => {
                res.status(200).json(count);
            })
            .catch(err => {
                res.status(500).json(err)     
            });
    })

    //.put() to update a record in smurfsPics table need to match record with id..
    router.put('/:id', (req, res) => {
        const changes = req.body;

        db('smurfsPics')
            .where({id : req.params.id})
            .update(changes)
            .then(count => {
                if(count) {
                    res.status(200).json(count);
                }else {
                    res.status(404).json({message : `Record not found with id..${req.params.id}`})
                }
            })
            .catch(err => {
                res.status(500).json(err);
            })
    })

    module.exports = router;