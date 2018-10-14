//issueApi = require('../data/issueApi'),
var express = require('express'),
    router = express.Router();
var Issue = require('../model/issue');

//get all issues
router.get('/', (req, res) => {
    Issue.find({}, (err, issues) => {
        if (err) res.send(err)
        else res.json(issues)
    })
});

//get issue by id
router.get('/get/:id', (req, res) => {
    Issue.findOne({ _id: req.params.id }, (err, issue) => {
        if (err) res.send(err)
        else res.json(issue)
    })
})

//create issue
router.post('/create', (req, res) => {
    var issue = new Issue();
    issue.description = req.body.description;
    issue.severity = req.body.severity;
    issue.status = req.body.status;
    issue.createdDate = req.body.createdDate;
    issue.resolvedDate = req.body.resolvedDate;
    issue.selected = false;
    issue.save((err, issue) => {
        if (err) res.send(err)
        else res.json(issue)
    })
})

//update issue
router.post('/edit/:id', (req, res) => {

    Issue.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            description: req.body.description,
            severity: req.body.severity, status: req.body.status,
            createdDate: req.body.createdDate, resolvedDate: req.body.resolvedDate,
            selected: false
        }
    }, { new: true }, (err, issue) => {
        if (err) res.send(err)
        else res.json(issue)
    })
})

router.get('/delete/:id', (req, res) => {
    Issue.findOneAndRemove({ _id: req.params.id }, function (err, issue) {
        if (err)
            res.send(err);
        else {
            res.json(issue);
        }
    });
})

module.exports = router;