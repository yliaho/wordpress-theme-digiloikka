#!/usr/bin/env bash

GREEN='\033[1;32m'
NC='\033[0m' # No Color

which yarn
if [ "$?" -ne 0 ]; then
  echo "Yarn not found. Exiting..."
  exit 1
fi
echo "========================================================"
echo -e "${GREEN}Installing node dependencies...${NC}"
echo "========================================================"
echo
yarn
clear

which composer
if [ "$?" -ne 0 ]; then
  echo "Composer not found. Exiting"
  exit 1
fi
echo "========================================================"
echo -e "${GREEN}Installing php dependencies...${NC}"
echo "========================================================"
echo
composer install
clear

read -p "Do you want Webpack to watch for file changes in src directory now? [y/n] " -n 1 -r
echo 
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "========================================================"
  echo -e "${GREEN}Starting Webpack...${NC}"
  echo "========================================================"
  echo
  yarn run watch
else 
  echo "========================================================"
  echo -e "${GREEN}Building distribution...${NC}"
  echo "========================================================"
  echo
  yarn run build
  echo -e "${GREEN}All done!${NC}"
  echo
fi