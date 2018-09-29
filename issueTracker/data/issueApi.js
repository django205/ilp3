"use strict";

var issues = require('./issue').issues;
var _ = require('lodash');

var currentId = 5;
var _clone = function (item) {
    return JSON.parse(JSON.stringify(item));
};

var issueApi = {

    getAllIssues: function (callback) {
        callback(null, _clone(issues));
    },

    getIssueById: function (id, callback) {
        var issue = _.find(issues, { id: parseInt(id) });
        callback(null, _clone(issue));
    },

    updateIssueById: function (id, issue, callback) {
        var existingIssueIndex = _.indexOf(issues, _.find(issues, { id: parseInt(id) }));
        issue.id = parseInt(id);
        issues.splice(existingIssueIndex, 1, issue);
        callback(null);
    },

    saveIssue: function (issue, callback) {
        currentId = currentId + 1;
        issue.id = currentId;
        issues.push(issue);
        callback(null, _clone(issue));
    },

    deleteIssueById: function (id, callback) {
        _.remove(issues, { id: parseInt(id) });
        callback(null);
    }
 
};

module.exports = issueApi;
