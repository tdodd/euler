#!/bin/sh

#
# Code coverage script
#

# Configuration
TEST_FILES="src/**/test.js"
TEST_TIMEOUT=5000
REPORT_DIR="code_coverage/report"
TEMP_DIR="code_coverage/json"

echo "Running unit test coverage.."

# Istanbul command + options
node node_modules/nyc/bin/nyc \
    --report-dir ${REPORT_DIR} \
    --temp-directory ${TEMP_DIR} \
    node_modules/mocha/bin/_mocha --timeout ${TEST_TIMEOUT} ${TEST_FILES}
