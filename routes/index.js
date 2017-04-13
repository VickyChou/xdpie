var express = require('express');
var router = express.Router();
var dataFactory = require('../db/data-factory');
var message = require('../routes/message');

/* 提交问卷调查表*/
router.post('/quesForm', function (req, res, next) {
    var charging = req.body.charging;
    var cost = req.body.costs;
    var imp = req.body.improvements;
    var sug = req.body.suggestions;
    dataFactory.charging().create({
        charge: charging,
        costs: cost,
        improvements: imp,
        suggestions: sug
    }).then(function (obj) {
        if (obj) res.send(new message(true));
        else res.send(new message(false));
    });
});

module.exports = router;
