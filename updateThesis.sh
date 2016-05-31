#!/bin/bash

timestamp() {
  date +"%Y-%m-%d_%H-%M-%S"
}
echo "moving bachelorthesis.zip from downloads into current directory"
mv ~/Downloads/bachelorthesis.zip ./
if [ $? -eq 0 ]; then
    echo "unzipping into ./writing"
    unzip -o bachelorthesis.zip -d ./


    echo "moving zip into prevImports with current timestamp"
    mv bachelorthesis.zip ../prevImports/$(timestamp).zip

    git status
else
    echo "there was no bachelorthesis.zip in your Downloads directory, exiting"
fi
