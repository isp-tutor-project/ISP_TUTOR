#!/bin/bash

# This install script is a work in progress.....
# You can look at Part1, Part2, and Part 3, but I do not guarantee that this script installs everything

if false; then
# Part 1, install the experiment modules
echo Installing EFMod_Algae...
cd EFMod_Algae
cd code_exts
npm install 
tsc
cd ..
cd code_mixins
npm install
tsc
cd ../..

echo Installing EFMod_Balloon...
cd EFMod_Balloon
cd code_exts
npm install 
tsc
cd ..
cd code_mixins
npm install
tsc
cd ../..

echo Installing EFMod_Crystal...
cd EFMod_Crystal
cd code_exts
npm install 
tsc
cd ..
cd code_mixins
npm install
tsc
cd ../..

echo Installing EFMod_GrHouse...
cd EFMod_GrHouse
cd code_exts
npm install 
tsc
cd ..
cd code_mixins
npm install
tsc
cd ../..

echo Installing EFMod_IceMelt...
cd EFMod_IceMelt
cd code_exts
npm install 
tsc
cd ..
cd code_mixins
npm install
tsc
cd ../..

echo Installing EFMod_Ramps...
cd EFMod_Ramps
cd code_exts
npm install 
tsc
cd ..
cd code_mixins
npm install
tsc
cd ../..

echo Installing EFMod_Sinking...
cd EFMod_Sinking
cd code_exts
npm install 
tsc
cd ..
cd code_mixins
npm install
tsc
cd ../..

echo Installing EFMod_Soda...
cd EFMod_Soda
cd code_exts
npm install 
tsc
cd ..
cd code_mixins
npm install
tsc
cd ../..

# Part 2, install the TutorBuilder
echo Installing EFTutorBuilder
cd EFTutorBuilder
cd AdminClient
npm install
tsc
cd ..
cd AudioBuilder
npm install
tsc
cd ..
cd DataBuilder
npm install
tsc
cd ..
cd DevServer
npm install
tsc
cd ..
cd EdForge_TSEQ
npm install
tsc
cd ..
cd ModuleBuilder
npm install
tsc
cd ..
cd TestBuilder
npm install
tsc
cd ..
cd TutorBuilder
npm install
tsc
cd ..
cd ..
fi
# Part 3, install the tutors
echo Installing EFTutors...
cd EFTutors
cd EFTED_RQSelect
cd EFglobals
tsc
cd ..
cd EFdata
node ../../../EFTutorBuilder/DataBuilder/dist/builder.js GLOBALTHIS
cd ../..


