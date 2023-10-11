const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const proxy = require("node-global-proxy").default;

const createWindow = () => {
    proxy.setConfig({
        http: "http://fady.kaisupy:12345@10.88.88.15:1080",
        https: "https://fady.kaisupy:12345@10.88.88.15:1080",
      });
    proxy.start();

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          }
    })
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    
    createWindow()
})