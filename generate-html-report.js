const { htmlReport } = require("k6-html-reporter");
const fs = require("node:fs");

const k6SummaryFile = "summary.json";
const outputHtmlFile = "reports/k6-report.html";

console.log(`Reading k6 summary from ${k6SummaryFile}...`);

let jsonData;
try {
    const rawData = fs.readFileSync(k6SummaryFile, "utf-8");
    jsonData = JSON.parse(rawData);
} catch (ex) {
    console.error(`Error reading or parsing k6 summary json from ${k6SummaryFile}: `, ex);
    process.exit(1);
}

console.log(`Generating HTML report to ${outputHtmlFile}...`);

try {
    if (!fs.existsSync("reports")){
        fs.mkdirSync("reports", { recursive: true });
    }
} catch (ex) {
    console.error("Error creating reports directory: ", ex);
    process.exit(1);
}

try {
    htmlReport(jsonData, {
      title: "k6 Load Test Report",
      output: outputHtmlFile,
    });
} catch (ex) {
    console.error("Error generating HTML report: ", ex);
    process.exit(1);
}

console.log(`HTML report generated successfully at ${outputHtmlFile}`);
process.exit(0);
