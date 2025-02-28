const modal = document.querySelector('.modal');
const actions = document.querySelectorAll('a, button, .item-card, .trade-panel');
const loginButtons = document.querySelectorAll('.link-login');
const allowedSelector = 'allowed-action';

function changeModalVisibility() {
    modal.classList.toggle('modal-hidden');
}

function goToLogin() {
    window.location.href = 'https://example.com/';
}

actions.forEach(action => {
    if (!action.classList.contains(allowedSelector)) {
        if (action.tagName === 'A') {
            action.href = '#!';
            action.target = '_self';
        } else if (action.tagName === 'button') {
            action.type = 'BUTTON';
        }

        action.addEventListener('click', changeModalVisibility);
    }
});

loginButtons.forEach(btn => {
    btn.classList.add('showAuthWin');
})

modal.querySelector('.modal__close').addEventListener('click', changeModalVisibility);