const body = document.querySelector('body');
const input = document.querySelector('.checkbox');
const modeText = document.querySelector('.mode-text');

const changeLightMode = () => {
	if (input.checked == true) {
        body.classList.add('dark-mode');
        modeText.textContent = 'Light Mode'
	} else {
        body.classList.remove('dark-mode');
        modeText.textContent = 'Dark Mode'
	}
};

input.addEventListener('click', changeLightMode);
