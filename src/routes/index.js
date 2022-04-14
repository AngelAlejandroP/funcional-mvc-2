const express=require('express');
const router=express.Router();

router.get('/', (req, res) => {
    res.render('../views/pages/index.ejs');
});

router.get('/about', (req, res) => {
    res.render('../views/pages/about.ejs');
});


module.exports=router;