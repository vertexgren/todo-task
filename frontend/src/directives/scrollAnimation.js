
const animationObserver = new IntersectionObserver((entries, animationObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('enter')
        animationObserver.unobserve(entry.target)
      }, 500)
    }
  })
})
export default {
  mounted(el, ) {
    el.classList.add('before-enter')
    animationObserver.observe(el)
  }
}

