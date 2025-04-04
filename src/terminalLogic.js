// terminalLogic.js

import { fileSystem } from './fileStructure'

const state = {
    currentPath: ['root'],
    fileSystem,
    currentFile: fileSystem.root['about.md'],
    output: []
}

const getCurrentDirectory = () => {
    return state.currentPath.reduce((dir, subdir) => dir[subdir], state.fileSystem)
}

const handleCommand = (command) => {
    const [cmd, arg] = command.split(' ')

    switch (cmd) {
        case 'ls':
        case 'dir':
            listFiles()
            break
        case 'cd':
            changeDirectory(arg)
            break
        case 'view':
            viewFile(arg)
            break
        case 'help':
            showHelp()
            break
        default:
            state.output = [`Unknown command: ${cmd}`]
    }
}

const listFiles = () => {
    const currentDir = getCurrentDirectory()
    const files = Object.keys(currentDir).map((key) => {
        return {
            name: key,
            type: typeof currentDir[key] === 'object' ? 'folder' : 'file'
        }
    })
    state.output = files
}

const changeDirectory = (path) => {
    if (path === '..') {
        if (state.currentPath.length > 1) {
            state.currentPath.pop()
            state.output = [`Changed directory to ${state.currentPath.join('/')}`]
        } else {
            state.output = ['Already at the root directory']
        }
    } else if (getCurrentDirectory()[path] && typeof getCurrentDirectory()[path] === 'object') {
        state.currentPath.push(path)
        state.output = [`Changed directory to ${state.currentPath.join('/')}`]
    } else {
        state.output = [`No such directory: ${path}`]
    }
}

const viewFile = (fileName) => {
    const file = getCurrentDirectory()[fileName]
    if (file && typeof file === 'string') {
        state.currentFile = file
        state.output = [`Viewing file: ${fileName}`]
    } else {
        state.output = [`No such file: ${fileName}`]
    }
}

const showHelp = () => {
    state.output = [
        '- Navigate: Use "cd <foldername>" to move into another folder. Use "cd .." to back a folder.',
        '- List Files: Use "ls" or "dir" to see a list of content in the current folder.',
        '- Open Files: Use "view <filename>" to open a file.',
        '- Clear Terminal: Use "clear" to empty the terminal.',
        '- Help: Type "help" to read this stuff again.'
    ]
}

export default {
    state,
    handleCommand
}
