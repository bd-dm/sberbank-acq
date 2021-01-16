<h1 align="center">Welcome to sberbank-acq 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/sberbank-acq" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/sberbank-acq.svg">
  </a>
  <a href="https://github.com/bd-dm/sberbank-acq#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/bd-dm/sberbank-acq/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/bd-dm/sberbank-acq/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/bd-dm/sberbank-acq" />
  </a>
</p>

> Sberbank acquiring module for Node.JS

Official Docs: [Sberbank API Docs](https://securepayments.sberbank.ru/wiki/doku.php/integration:api:rest:start)
## Install

```sh
npm i sberbank-acq
```
---
## Example usage
```typescript
import SberbankAcquiring from "sberbank-acq";

const sberbankAcquiring = new SberbankAcquiring({
    credentials: {
        username: 'username',
        password: 'password',
    },
    restConfig: {
        apiUri: 'https://3dsec.sberbank.ru/payment/rest/',
    },
});

const result = sberbankAcquiring.register(options); // options contains request properties, ex.: orderNumber, amount, etc.
                                                    // see official docs for details of specific request
```
---

## API
| Methods                                                            |
| -----------------------------------------------------------------  |
| register                                                           |
| registerPreAuth                                                    |
| deposit                                                            |
| reverse                                                            |
| refund                                                             |
| getOrderStatusExtended                                             |
| verifyEnrollment                                                   |
| decline                                                            |
| getReceiptStatus                                                   |
| unBindCard                                                         |
| bindCard                                                           |
| getBindings                                                        |
---

## Author

👤 **Dmitry Bardyshev**

* Github: [@bd-dm](https://github.com/bd-dm)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/bd-dm/sberbank-acq/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Dmitry Bardyshev](https://github.com/bd-dm).<br />
This project is [ISC](https://github.com/bd-dm/sberbank-acq/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
