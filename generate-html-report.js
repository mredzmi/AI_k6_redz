const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false, // Set to true if you want the report to open automatically (not useful in this environment)
    metadata: {
        "App Version":"1.0.0", // Example metadata
        "Test Environment": "STAGING", // Example metadata
        "Browser": "Chromium", // Example metadata
        "Platform": "WebApp", // Example metadata
        "Parallel": "Scenarios", // Example metadata
        "Executed": "Remote" // Example metadata
    }
};

reporter.generate(options);
console.log('HTML report generated successfully at reports/cucumber-report.html');
