// ==UserScript==
// @name         YouTube color changer
// @description  change youtube color
// @version      2.0
// @author       Davi SH
// @match        *://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

const color = 'green'

window.onload = () => {
  const [head] = document.getElementsByTagName('head')
  const path = document.getElementsByTagName('path')

  const customStyle = `
    <style>
      .ytp-swatch-background-color,
      tp-yt-paper-button.ytd-subscribe-button-renderer,
      ytd-button-renderer.style-destructive[is-paper-button],
      .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
        background: ${color}
      }

      .badge-style-type-live-now.ytd-badge-supported-renderer, .badge-style-type-starting-soon.ytd-badge-supported-renderer {
        border: 1px solid ${color};
        color: ${color}
      }
    </style>
  `

  Array.from(path).forEach(path => {
      if (path.getAttribute('fill') === '#FF0000') {
          path.setAttribute('fill', color)
      }
  })

  head.insertAdjacentHTML('beforeend', customStyle)
}
