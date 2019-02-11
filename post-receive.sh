#!/bin/bash

SITE=jfod

# Clone the upstream repo to a tmp directory
echo "Cloning upstream repository... "
git clone /srv/repos/jfod.git/ /var/tmp/$SITE/

# Install depdencies
echo "Installing npm dependencies... "
cd /var/tmp/$SITE/
npm i --production -s --loglevel silent

# Build site
echo "Building website... "
npm run prod

# Test site
echo "Testing website build... "
npm test

# Add changes from tmp to www
echo "Deploying website build... "
rsync -a /var/tmp/$SITE/ /var/www/$SITE/

# Clean up tmp directory
echo "Cleaning up.... "
rm -rf /var/tmp/jfod/

# Done
echo "Done. '$SITE' successfully deployed."
exit
