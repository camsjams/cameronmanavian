(() => {
    const $current = document.getElementById('current-theme');
    document.getElementById('theme-switch').addEventListener('click', (e) => {
        const attr = e.target.attributes['data-theme'];
        if (attr) {
            document.body.className = attr.value;
            $current.innerText = e.target.innerText;
        }
    })
})();