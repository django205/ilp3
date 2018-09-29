var issueApi = require('../data/issueApi'),
    express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    issueApi.getAllIssues((err, items) => {
        res.send(items)
    })
})


router.get('/get/:id',(req,res)=>{
    issueApi.getIssueById(req.params.id,(err,issue)=>{
        res.send(issue)
    })
})

// router.get('/create', (req, res) => {
//     severities = ["Low", "Medium", "High"];
//     statuses = ["Open", "In-Progress", "Closed"];
//     res.render('issue/create', { severities: severities, statuses: statuses })
// })

router.post('/create', (req, res) => {
    var issue = {};
    // severities = ["Low", "Medium", "High"];
    // statuses = ["Open", "In-Progress", "Closed"];
    issue.description = req.body.description;
    issue.severity = req.body.severity;
    issue.status = req.body.status;
    issue.createdDate = req.body.createdDate;
    issue.resolvedDate = req.body.resolvedDate;
    issue.selected = false;

    issueApi.saveIssue(issue, (err, issue) => {
        res.send(issue)
    })
})


// router.get('/edit/:id', (req, res) => {
//     issueApi.getIssueById(req.params.id, (err, issue) => {
//         severities = ["Low", "Medium", "High"];
//         statuses = ["Open", "In-Progress", "Closed"];
//         res.render('issue/edit', { issue: issue, severities: severities, statuses: statuses })
//     })
// })

router.post('/edit/:id', (req, res) => {
    var updatedIssue = {};
    updatedIssue.description = req.body.description;
    updatedIssue.severity = req.body.severity;
    updatedIssue.status = req.body.status;
    updatedIssue.createdDate = req.body.createdDate;
    updatedIssue.resolvedDate = req.body.resolvedDate;
    updatedIssue.selected = false;

    issueApi.updateIssueById(req.params.id, updatedIssue, function (err) {
        res.send("updated")
    })
})

router.get('/delete/:id', (req, res) => {
    issueApi.deleteIssueById(req.params.id, function (err) {
        res.send('Deleted')
    })
})

module.exports = router;