import { createApp } from 'vue'
import Notification from '../components/notification.vue'

export function notify(message) {
  const notificationApp = createApp(Notification, {
    message: message
  })
  const notificationComponent = notificationApp.mount(document.createElement('div'))
  document.body.appendChild(notificationComponent.$el)
  setTimeout(() => {
    notificationApp.unmount()
  }, 3000)
}
