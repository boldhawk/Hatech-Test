# Setup #

npm install -g protractor

webdriver-manager update

gem install hiptest-publisher

#Get Test#
hiptest-publisher -c hiptest-publisher.conf --only=tests --test-run-id=199977

(change id for the test run you want to complete)

#Run Test#
protractor protractor.conf

##To run test against a specific environment##
In /environments there are a number of files that can be used to store specific endpoints and data. The example below will read the production environment file, loading the vars that have been configured into the test tool.

protractor protractor.conf --params.env=prd

#Publish Tests#
hiptest-publisher -c hiptest-publisher.conf -p "results/results-*.xml"

#How this works#
