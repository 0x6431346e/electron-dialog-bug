// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { remote } = require('electron')

// this works on win and linux, but not on mac
const result = remote.dialog.showMessageBox({
    message: 'This dialog as defaultId set, pressing ESC should close the modal',
    buttons: ['Cancel', 'Do something'],
    cancelId: 0,
    defaultId: 1,
})

console.log(result)