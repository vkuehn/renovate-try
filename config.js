module.exports = {
     "automerge": false,
     "autodiscover": false,
     "debug": true,
     "autodiscoverFilter": ["renovate-try/*"],
     "docker-compose": {"enabled": true},
     "dryRun": "true",
     "extends": ["config:recommended", ":skipStatusChecks"],
     "gitLabIgnoreApprovals": false,
     "onboarding": false,
     "platformAutomerge": false,
     "platform": "github",
     "requireConfig": "optional"
}
