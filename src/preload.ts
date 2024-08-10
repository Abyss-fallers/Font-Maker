import { TabLink } from '../src/types/custom-types'

document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll<TabLink>('.nav-buttons a')
  const tabContents = document.querySelectorAll<HTMLElement>('.tab-content')

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault()
      const targetTabId = tabLink.dataset.tab
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active')
      })
      if (targetTabId) {
        const activeTab = document.getElementById(targetTabId)
        if (activeTab) {
          activeTab.classList.add('active')
        }
      }
    })
  })
})
