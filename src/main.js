import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiSolidSun, IoMoon, FaRobot, MdRatereview } from 'oh-vue-icons/icons'

addIcons(HiSolidSun, IoMoon, FaRobot, MdRatereview)

const app = createApp(App)
app.component('v-icon', OhVueIcon)

app.mount('#app')
