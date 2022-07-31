# Common Expectations

[![test-build](https://github.com/cmmn-codes/common-expectations/actions/workflows/test-build.yml/badge.svg)](https://github.com/cmmn-codes/common-expectations/actions/workflows/test-build.yml)

A small collection of common typescript functions for asserting and guarding types.

## Installation

```shell
# using npm
npm install common-expectations
# or using yarn
yarn add common-expectations
```

## Usages

#### `exists<T>(value: T, message: string): void`

A utility for asserting existence of a value when the type may be `undefined` or `null`.

```ts
import { exists } from "common-expectations";

// where use params returns a partial type where `id` maybe undefined.
const { id } = useParams<{ id: string }>();
exists(value, 'Expected id to be defined.')

```

This is intended only to be used in those rare cases where you know based on context that a value
exists but the type system is unable to infer the fact.
A good example of this is when using params in React Router.

#### `isUnreachable(value: never, message?: string): void`

A utility for helping check type exhaustiveness.
It will raise typescript type error when a values type is anything other than `never`,
and will throw an error at runtime if a value is encountered.

```ts
import { isUnreachable } from "common-expectations";

type AnimalType = 'cat' | 'dog' | 'monkey';

function doSomthing(type: AnimalType) {
  switch (type) {
    case "cat":
    case "dog":
    case "monkey":
      break;
    default:
      isUnreachable(type, `Encountered unexpected animal type: ${type}`);
  }
}
```
