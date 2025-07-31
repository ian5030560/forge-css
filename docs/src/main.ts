import { mount } from 'svelte'
import './forge-css.css'
import './app.css'
import App from './App.svelte'
import hljs from 'highlight.js'
import javascript from "highlight.js/lib/languages/javascript"
import json from "highlight.js/lib/languages/json"
import bash from "highlight.js/lib/languages/bash"
import "highlight.js/styles/github.css";

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
