const core = require('@actions/core');
const github = require('@actions/github');

try{
    const reviewers = core.getInput('reviewers')

    core.setOutput('assigned', reviewers[0])
    
}catch(error){
    core.setFailed(error.message)
}