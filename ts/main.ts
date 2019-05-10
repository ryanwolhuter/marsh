document.addEventListener('DOMContentLoaded', () => {

  // Get all `navbar-burger` elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the `data-target` attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the `is-active` class on both the `navbar-burger` and the `navbar-menu`
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }

  const modals = document.querySelectorAll('.modal')
  const modalButtons = document.querySelectorAll('.open-modal-button')
  const modalClose = document.querySelectorAll('.close-modal-button')

  if (modalButtons.length > 0) {
    modalButtons.forEach(button => {
      button.addEventListener('click', function (this: HTMLAnchorElement | HTMLButtonElement) {
        document.getElementById(this.dataset.target).classList.add('is-active')
      })
    })
  }

  if (modalClose.length > 0) {
    modalClose.forEach(closeButton => {
      closeButton.addEventListener('click', function () {
        modals.forEach(modal => {
          modal.classList.remove('is-active')
        })
      })
    })
  }
})