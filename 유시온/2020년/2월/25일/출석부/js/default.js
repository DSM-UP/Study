const headerBtn = document.querySelector('#default-header-menu-button');
const modal = document.querySelector('.default-menu-modal');
const modal_overlay = document.querySelector('.default-modal-overlay');
const close_modal = document.querySelector('#close-modal-button');
const messageCloseBtn = document.querySelector('#message-close-button');
const meesage_modal_overlay = document.querySelector('.default-message-modal-overlay');
const message_modal = document.querySelector('.default-message-modal');
const messageBtn = document.querySelector('#default-header-message-button');

function modalOpen() {
    modal.classList.remove('default-menu-modal-hide');
    modal.classList.add('default-menu-modal-show');

    modal_overlay.classList.add('default-menu-overlay-show');
    modal_overlay.classList.remove('default-menu-overlay-hide');
}

function modalClose() {
    modal.classList.remove('default-menu-modal-show');
    modal.classList.add('default-menu-modal-hide');

    modal_overlay.classList.remove('default-menu-overlay-show');
    modal_overlay.classList.add('default-menu-overlay-hide');
}

function messageClose() {
    messageCloseBtn.classList.add('default-message-close');
    message_modal.classList.add('default-message-close');
    meesage_modal_overlay.classList.add('default-message-close');
}

function messageOpen() {
    messageCloseBtn.classList.remove('default-message-close');
    message_modal.classList.remove('default-message-close');
    meesage_modal_overlay.classList.remove('default-message-close');
}

headerBtn.addEventListener("click", modalOpen);
modal_overlay.addEventListener("click", modalClose);
close_modal.addEventListener("click", modalClose);
messageCloseBtn.addEventListener("click", messageClose);
meesage_modal_overlay.addEventListener("click", messageClose);
messageBtn.addEventListener("click", messageOpen);