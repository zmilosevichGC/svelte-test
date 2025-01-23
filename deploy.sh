#!/bin/bash

# Build the project
npm run build

# Your Cloudways server details
SERVER="phpstack-1393490-5203776.cloudwaysapps.com"
USERNAME="YOUR_SFTP_USERNAME"
REMOTE_PATH="/public_html"

# Upload the dist contents
sftp $USERNAME@$SERVER << EOF
cd $REMOTE_PATH
put -r dist/*
put .htaccess
bye
EOF

echo "Deployment complete!"
