import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => cleanup())

// jsdom aún no implementa <dialog>.showModal(): un polyfill mínimo para las pruebas.
if (typeof HTMLDialogElement !== 'undefined' && !HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function (this: HTMLDialogElement) {
    this.setAttribute('open', '')
  }
  HTMLDialogElement.prototype.close = function (this: HTMLDialogElement) {
    this.removeAttribute('open')
    // Como en el navegador, el evento "close" llega de forma asíncrona.
    queueMicrotask(() => this.dispatchEvent(new Event('close')))
  }
}
