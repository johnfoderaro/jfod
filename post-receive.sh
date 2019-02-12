#!/bin/bash

set -e

SITE=jfod

# keep track of the last executed command
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG

# echo an error message before exiting
trap 'echo "\"${last_command}\" command failed with exit code $?."' EXIT

# remove previous tmp content in case last build failed
echo "Removing tmp directory... "
rm -rf /var/tmp/$SITE/

# clone the upstream repo to a tmp directory
echo "Cloning upstream repository... "
git clone /srv/repos/$SITE.git/ /var/tmp/$SITE/

# install depdencies
echo "Installing npm dependencies... "
cd /var/tmp/$SITE/
npm i --production -s --loglevel silent

# build site
echo "Building website... "
npm run prod

# test site
echo "Testing website build... "
npm test

# add changes from tmp to www
echo "Deploying website build... "
rsync -a /var/tmp/$SITE/public/* /var/www/$SITE/

# clean up tmp directory
echo "Cleaning up.... "
rm -rf /var/tmp/$SITE/

# done
echo "Done. '$SITE' successfully deployed."
exit 0
