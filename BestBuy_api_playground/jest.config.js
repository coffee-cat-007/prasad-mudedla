module.exports = {
    "testEnvironment": "node",
    "testPathIgnorePatterns": [
        "/node_modules/"
    ],
    "reporters": [
        "default", [
            "./node_modules/jest-html-reporter",
            {
                "pageTitle": "Test Report",
                "outputPath": "Report/index.html",
                "includeFailureMsg": true
            }
        ]
    ]
};