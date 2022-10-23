const { app, BrowserWindow } = require('electron')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts')
    }
  })

  console.log(NODE_ENV);

  const loadURL= NODE_ENV === 'dev' ? 'http://localhost:5173' : `file://${path.join(__dirname, `../dist/index.html`)}`

  mainWindow.loadURL(loadURL)
}

app.whenReady().then(() => {
  createWindow()
})

