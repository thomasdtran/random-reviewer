const core = require('@actions/core');
const github = require('@actions/github');

try{
    const reviewers = require('./history.json')
    
    core.setOutput("reviewer", reviewers[0].userName)
    
}catch(error){
    core.setFailed(error.message)
}