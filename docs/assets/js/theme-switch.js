(() => {
    const CODE_ID = 'code';
    const $current = document.getElementById('current-theme');
    document.getElementById('theme-switch').addEventListener('click', (e) => {
        const attr = e.target.attributes['data-theme'];
        if (attr) {
            document.body.className = attr.value;
            $current.innerText = e.target.innerText;

            if (attr.value === CODE_ID) {
                fetch('assets/css/style.css')
                    .then((result) => {
                        return result.text();
                    })
                    .then((css) => {
                        const co = document.createElement('div');
                        co.id = "code-editor";
                        document.body.prepend(co);
                        document.getElementById('code-editor').innerHTML = `
                            <details class="html" open>
                                <summary>HTML</summary>
                                <textarea rows="25">${document.querySelector('main').innerHTML}</textarea>
                            </details>
                            <details class="css" open>
                                <summary>CSS</summary>
                                <textarea rows="25">${css}</textarea>
                            </details>`;
                    })
                    .catch((error) => {
                        console.log('Sorry, this theme seems to have failed:', error);
                    });
            } else if (document.getElementById('code-editor') !== null) {
                document.body.removeChild(document.getElementById('code-editor'));
            }
        }
    })
})();