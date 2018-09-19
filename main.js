const {app, BrowserWindow} = require('electron')
const url=require('url')
const path=require('path')
  
  let win
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({frame: true,width: 1200, height: 700,minWidth: 800, minHeight: 700})
  win.setMenu(null);
  win.setTitle("Mfasha")
    // and load the index.html of the app.
    win.loadURL('http://localhost:3000');
   // win.loadURL(url.format({
   //  pathname: path.join(__dirname,'/src/logo.svg'),
   //  protocal: 'file:',
   //  slashes: true
   // }))
  }
  
  app.on('ready', createWindow)