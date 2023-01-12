# Anonymous telegram bot
With this bot you protect your users from being detected by their telegram account information and in fact, you tunnel the user message through the bot as an anonymous account.

## Goals
* Very easy to setup and use.
* Installable as npm package.

## Extra Information
Please pay attention that this code is in development phase and you should not use this bot unless one safe version is published.

### Import logic for developers

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