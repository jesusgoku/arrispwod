# ARRISPWOD - Arris Password Of Day

[![Build Status](https://travis-ci.org/jesusgoku/arrispwod.svg?branch=master)](https://travis-ci.org/jesusgoku/arrispwod)
[![codecov](https://codecov.io/gh/jesusgoku/arrispwod/branch/master/graph/badge.svg)](https://codecov.io/gh/jesusgoku/arrispwod)

Javascript library for generate password of the day for Arris routers.

## Install

```bash
npm install arrispwod

# Or with yarn
yarn add arrispwod
```

## Usage

### NodeJS

```javascript
// CommonJS
const genPassOfDay = require('arrispwod');

// Or with ESNext
import genPassOfDay from 'arrispwod';


const passOfDay = getPassOfDay(new Date());
console.log(passOfDay);
```

### Browser

Use UMD package from: [https://unpkg.com/arrispwod](https://unpkg.com/arrispwod)

## API

See API [here](docs/api.md)

## Related

- [arrispwod-cli - Utility for CLI](https://www.npmjs.com/package/arrispwod-cli)
