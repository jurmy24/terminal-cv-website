import './styles/style.css'
import './styles/scrollbar.css'

import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiSolidSun, BiMoonFill, FaRobot, MdRatereview } from 'oh-vue-icons/icons'

addIcons(HiSolidSun, BiMoonFill, FaRobot, MdRatereview)

const app = createApp(App)
app.component('v-icon', OhVueIcon)

app.mount('#app')
