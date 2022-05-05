const fs = require('fs')
const os = require('os')
const path = require('path')
const { Command } = require('commander')
const program = new Command()

const defaultState = {
  tree: [],
  current: null,
  selection: [],
  history: [],
}

const loadState = () => {
  let diaryFile = path.join(os.homedir(), '.config', 'dear-diary.json')
  try {
    let rawJson = fs.readFileSync(diaryFile, 'utf8')
    return JSON.parse(rawJson)
  } catch (e) {
    return defaultState
  }
}
const state = loadState()

program
  .name('ls')
  .action((options) => {
    console.log(state)
  })


program.parse()