# Concrete Base64

## Minimal Online Base64 Encoder and Decoder!

Visit https://B64.Lict.me/

Enjoy this project

## Speed and Capacity

Concrete Base64 Site is using builtin functions to encode and decode.

If you use Firefox or Safari, it will help this program process fast and handle a large file.

The reason is the existence of the `Uint8Array.prototype.toBase64` and `Uint8Array.fromBase64` functions.

Chromium or old browsers do not currently support these functions (I think Chromium will support these soon).

(for more informations about these functions, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64)

If these functions are not available, this program will use the `btoa` and `atob` functions instead.
