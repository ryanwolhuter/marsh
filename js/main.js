"use strict";
document.addEventListener('DOMContentLoaded', function () {
    // Get all `navbar-burger` elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function (el) {
            el.addEventListener('click', function () {
                // Get the target from the `data-target` attribute
                var target = el.dataset.target;
                var $target = document.getElementById(target);
                // Toggle the `is-active` class on both the `navbar-burger` and the `navbar-menu`
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
    var modals = document.querySelectorAll('.modal');
    var modalButtons = document.querySelectorAll('.open-modal-button');
    var modalClose = document.querySelectorAll('.close-modal-button');
    if (modalButtons.length > 0) {
        modalButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                document.getElementById(this.dataset.target).classList.add('is-active');
            });
        });
    }
    if (modalClose.length > 0) {
        modalClose.forEach(function (closeButton) {
            closeButton.addEventListener('click', function () {
                modals.forEach(function (modal) {
                    modal.classList.remove('is-active');
                });
            });
        });
    }
});
