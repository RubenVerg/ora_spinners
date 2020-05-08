# ora_spinners

A collection of [Ora](https://github.com/sindresorhus/ora) spinners that are compliant with the standard of [cli-spinners](https://github.com/sindresorhus/cli-spinners) but with some additions.

## Installation

```shell
npm install ora_spinners
```

## Usage

Import with

```js
const ora_spinners = require('ora-spinners');
```

Spinners are divided into categories. You can see all the spinners here.

```js
const Ora = require('ora');
const spinners = require('ora_spinners');

const spin = Ora({
  text: 'Hello World!',
  spinner: spinners.slidingDots.five
});

spin.start();
```

### Additions to the `cli-spinners` standard

A spinner might have properties that define which symbols should be used when a spinner succeeds, fails, warns or infos instead of the standard Ora ones.

#### Example

```json
{
  "slidingDots": {
    "five": {
      "interval" : 80,
      "frames": [...],
      "succeed": {
        "text": "◉◉◉◉◉"
      },
      "fail": {
        "text": "◯◯◯◯◯"
      },
      "warn": {
        "text": "◯◉◯◉◯"
      },
      "info": {
        "text": "◯◉◯◉◯"
      }
    }
  }
}
```

```js
const Ora = require('ora'), sp = require('ora_spinners'), spin = Ora({
  text: "Hello World!",
  spinner: sp.slidingDots.five
}), { exec } = require('child-process');

const succeed = (s,t) => {
  s.stopAndPersist({
    text: t || '',
    symbol: sp.succeed('slidingDots.five');
  })
};

const reallyImportantWork = `for (let i = 0; i < 1e7; i++) {}`

spin.start();

exec(`node -e ${reallyImportantWork}`, e => {
  if (e) throw e;
  succeed('Yay!');
});
```

## Exported object

```js
const S = require('ora_spinners');
```

is assumed.

All the spinners listed here are in this object.

### `S.succeed(path)`

```ts
function succeed(path: string): string
```

Given a `path` for a spinner in the format `category.name`, get the colored symbol to use with it on success. If none is defined, returns the standard one.

### `S.fail(path)`

```ts
function fail(path: string): string
```

Given a `path` for a spinner in the format `category.name`, get the colored symbol to use with it on failure. If none is defined, returns the standard one.

### `S.warn(path)`

```ts
function warn(path: string): string
```

Given a `path` for a spinner in the format `category.name`, get the colored symbol to use with it on warning. If none is defined, returns the standard one.

### `S.info(path)`

```ts
function succeed(path: string): string
```

Given a `path` for a spinner in the format `category.name`, get the colored symbol to use with it when logging an information. If none is defined, returns the standard one.

## License

MIT

## Authors, contributors, etc

[RubenVerg](https://rubenverg.com)
