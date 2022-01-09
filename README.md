# Crayta typescript 

## Features
* Fully typed and documented api
* Typescript to lua transplilation thanks to https://typescripttolua.github.io/
* Code snippets to speed up coding.
* Preprocessor for .ts and .html file formats https://github.com/jsoverson/preprocess
* Macros by https://github.com/kentcdodds/babel-plugin-macros
* Embed external css and js files in html widgets.
* Sass compiles your .scss files to css to be used in widgets.

## Installation
Crayta Typescript depends on

* Visual Studio Code https://code.visualstudio.com/
* Node js with npm https://nodejs.org/
* Gulp js https://gulpjs.com/
* Git (optional as you can download the project as zip)

Visual Studio Code should be installed manually. 
Install.bat guides you in the installation of node js and gulp js.

#### Errors after installation (Windows)
To run Crayta Typescript tasks in visual studio code you need to start VsCode as Administrator every time or call just once "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned" in a powershell terminal started as admin.

## Quick Start 
Samples directory contain project templates with all the necessary to start a new project. 
SampleProject is the first and most basic starter project others may follow in future for more advanced workflows.

Copy SampleProject folder from ./Samples and paste it into ./Projects directory then rename the one in ./Projects to the name of your new project.

Open the workspace in your project directory with visual studio code and start coding and running visual studio code tasks.

### Lua workflow (preview)
It is intended to write code from scratch specific for Lua and Crayta.
It isn't meant to run previous .ts code without modifications.
##### lua array indexing 
being intended for code made from scratch also means that code follows some lua conventions one for all array indexing with arrays starting from 1.

#### Lua compilation tasks
Lua workflow is divided in preprocessing and transpilation.

preprocessing applies preprocessor and macros and generate intermediate ts files in XformPreprocess directory.

Transpilation translate files in XformPreprocess directory to lua in  OUT/Scripts directory.

Files in XformPreprocess and OUT directory should not modified by hand compiler will overwrite any modification.

Both passes have a specific visual studio code task that runs in watch mode() or you can run both steps with a single task named "Lua Workflow Watch".

### Widgets workflow (early preview)
All .html files in ./Widgets/html get processed and placed in ./OUT/widgets.
 .css and .js files from  ./Widgets/html/assets will be embedded in place of imports.
 Typescript widget workflow can be started with

### Todo
* Complete API documentation.
* Complete API typing.
* Document and add samples of all eventual edge cases
* Full Typescript sample projects
* Unit testing workflow