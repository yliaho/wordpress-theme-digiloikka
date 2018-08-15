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

which yarn
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

echo "========================================================"
echo -e "${GREEN}Building distribution...${NC}"
echo "========================================================"
echo
clear