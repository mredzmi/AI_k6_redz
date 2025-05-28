// cucumber.js
module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['step_definitions/**/*.js', 'support/**/*.js'],
    format: ['summary', 'progress-bar', 'json:reports/cucumber-report.json'], // Updated line
    publishQuiet: true,
  }
};
