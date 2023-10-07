directory='./images'
mv $directory temp
find temp -type f -name "*image*" -exec bash -c 'mv "$1" "${1//image/icon}"' _ {} \;
mv temp $directory 