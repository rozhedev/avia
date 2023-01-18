# Avia

It's template of the site to purchases airline tickets. 

Consist of 3 pages: 

* Main
* News
* Typical

All pages have 4 adaptive versions (2 tablet & 2 mobile).

The main emphasis it's quality of the layout. Use CSS Grid, BEM and component approach.

## Demo

**Main page**

![main-page](blob/main-demo.png)

**News page**

![news-page](blob/news-demo.png)

**Typical page**

![typical-page](blob/typical-demo.png)

## Usage

I use an improved Gulp-based build taken from this video: [Click](https://youtu.be/stFOy0Noahg)

First of all, open project in [VS Code](https://code.visualstudio.com). After that, open terminal.

If you do not have Gulp installed, write the commands:

```bash
  npm i gulp -D

  npm i gulp-cli -D
```

After that, install dependencies:

```bash
  npm i
```

For start the project in development mode:

```bash
  gulp
```

If the project is finished, minify the code and images, use command:

```bash
  gulp --production
```

### Troubleshooting

1. Set VS Code to run as an administrator [Click](https://qastack.ru/programming/37700536/visual-studio-code-terminal-how-to-run-a-command-with-administrator-rights) 
2. Open PowerShell with administrator rights and type command: "Set-ExecutionPolicy RemoteSigned" after that displaying confirm dialog, press "Y". This step need for allow execute local scripts in PowerShell.
3. **Node JS v16** and **Gulp v4** is required to work correctly (NodeJS v16.16 and Gulp v4.0.2 is based version).
4. **npm rebuild** - if not all packages are installed after **npm i** command.
5. **npm cache verify** - If after restarting, build doesn't catch changes "on the fly".

### Folder structure

**#src** - source folder.

**dist** - project bundle.

For all files in #src folder, write path as like **from dist** folder.

```
project
│   readme.md
│   package.json 
|   package-lock.json
|   gulpfile.js
|   .gitignore
│
└───blob                          # Demo images
|
└───#src
│   └───fonts                     # Fonts in .ttf, .otf format
│   │
│   └───html                      # All .html files
│   |   └───components            # Components layout (e.g. _news-card.html)
|   |   └───chunks                # Layout of big parts of pages (e.g. _footer.html)
|   |
│   └───img                       # All images
|   |   └───...    
|   |
│   └───js                        # All .js files
│   |   └───components            # Components logic
|   |       script.js             # For import component files
|   |       vendor.js             # For import external libs
|   |
|   └───json                      # All .json files
|   |   └───...
|   |
|   └───scss                      # All .scss files
|       └───base                  # Basic stylisation files (vars, null, fonts etc.)
|       └───chunks                # Styles of big parts of pages (e.g. _footer.html)
|       └───components            # Components styles
|       └───pages                 # Pages styles
|       |   style.scss            # For import all styles
│   
└───dist
|   └───css
|   └───fonts
|   └───img
|   └───js
|   *.html
|
└───docs (optional)               # Additional information files
|
└───node_modules
    └───...
```
