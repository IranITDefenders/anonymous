# Typescript npm package starter.
This starter helps you to build your packages like a charm.
Just read the logic and add the files or modify them as you like.

## Features

- Tsyringe included.
- ESLint included (xo).
- Jest included and ready to function.
- Short imports implemented using module_alias.

## Import logic for developers

For simplicity and increasing code readability i use this logic to imports and definition of my code.

| pointers  | types     | description                  |
| --------- | --------- | ---------------------------- |
| interface | entity    | Entity interfaces            |
| interface | abstract  | Class abstraction interfaces |
| core      | entity    | Core implemented Entity      |
| constant  | --------- | Import any constant          |
| service   | http      | Http related services        |
| service   | scrape    | Scraping related services    |

```
# Logic
import {***} from '@pointer/{type}/{name}';
```
