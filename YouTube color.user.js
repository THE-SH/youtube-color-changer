// ==UserScript==
// @name         YouTube color
// @description  change youtube color
// @version      1.0
// @author       Davi SH
// @match        *://www.youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

const setColor = setInterval(_ => {
    const color = '#0073e6';

    const subscribeButton    = document.querySelector('paper-button#button.style-scope.ytd-button-renderer.style-destructive.size-default') || document.querySelector('.style-scope.ytd-subscribe-button-renderer');
    const progressBar        = document.querySelector('.ytp-play-progress.ytp-swatch-background-color');
    const progressBarPointer = document.querySelector('.ytp-scrubber-button.ytp-swatch-background-color');
    const pathElements       = document.getElementsByTagName('path');
    const liveElement        = document.querySelectorAll('.badge.badge-style-type-live-now.style-scope.ytd-badge-supported-renderer');
    const checkoutElement    = document.querySelector('.ytp-menuitem-toggle-checkbox');
    const progressBars       = document.querySelectorAll('.ytp-play-progress');

    if (subscribeButton && subscribeButton.style.backgroundColor !== color) {
        if (subscribeButton.getAttribute('subscribed') === null) {
            subscribeButton.style.backgroundColor = color;
            subscribeButton.addEventListener('click', function() {
                this.style.backgroundColor = null;
            })
        }
        progressBar.style.backgroundColor = color;
        progressBarPointer.style.backgroundColor = color;

        [...pathElements].forEach(e => e.getAttribute('fill') == '#FF0000' && e.setAttribute('fill', color));
        [...liveElement].forEach(e => e.setAttribute('style', `color: ${color}; border: 1px solid ${color}`));
        [...progressBars].forEach(e => e.style.backgroundColor = color);
    }
}, 500)

setTimeout(_ => document.querySelector('.style-scope.ytd-button-renderer.style-suggestive.size-small') != null && document.querySelector('.ytp-play-progress.ytp-swatch-background-color').style.backgroundColor === 'rgb(0, 115, 230)' && clearInterval(setColor), 7000)
