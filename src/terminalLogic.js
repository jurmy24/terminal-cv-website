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
            state.output.push(`Unknown command: ${cmd}`)
    }
}

const listFiles = () => {
    const files = Object.keys(getCurrentDirectory())
    state.output.push(files.join(' '))
}

const changeDirectory = (path) => {
    if (path === '..') {
        if (state.currentPath.length > 1) {
            state.currentPath.pop()
            state.output.push(`Changed directory to ${state.currentPath.join('/')}`)
        } else {
            state.output.push('Already at the root directory')
        }
    } else if (getCurrentDirectory()[path] && typeof getCurrentDirectory()[path] === 'object') {
        state.currentPath.push(path)
        state.output.push(`Changed directory to ${state.currentPath.join('/')}`)
    } else {
        state.output.push(`No such directory: ${path}`)
    }
}

const viewFile = (fileName) => {
    const file = getCurrentDirectory()[fileName]
    if (file && typeof file === 'string') {
        state.currentFile = file
        console.log(state.currentFile)
        state.output.push(`Viewing file: ${fileName}`)
    } else {
        state.output.push(`No such file: ${fileName}`)
    }
}

const showHelp = () => {
    state.output.push('Available commands: ls, dir, cd <path>, view <file>, help')
}

export default {
    state,
    handleCommand
}
