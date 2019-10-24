<h2 align="center">
case-modifier
<a href="https://www.npmjs.com/package/case-modifier"><img src="https://img.shields.io/npm/l/case-modifier.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/case-modifier"><img src="https://img.shields.io/npm/v/case-modifier.svg" alt="Version"></a>
</h2>

Convert string to target CaseType, like: camelCase, snakeCase, properCase, constantCase

## Install

```
npm i case-modifier
```

## Usage

```js
import * as CaseModifier from 'case-modifier'

// type: camelCase
CaseModifier.CASE_CAMEL

CaseModifier.camelCase('we-will-rock-the-word') // weWillRockTheWord

// type: snakeCase
CaseModifier.CASE_SNAKE
CaseModifier.snakeCase('we-will-rock-the-word') // we_will_rock_the_word

// type: kebabCase
CaseModifier.CASE_KEBAB
CaseModifier.CASE_DASH
CaseModifier.kebabCase('WeWillRockTheWord') // we-will-rock-the-word

// type: properCase
CaseModifier.CASE_PROPER
CaseModifier.CASE_PASCAL
CaseModifier.properCase('we-will-rock-the-word') // WeWillRockTheWord

// type: constantCase
CaseModifier.CASE_CONSTANT
CaseModifier.constantCase('WeWillRockTheWord') // WE_WILL_ROCK_THE_WORD


// covert(str, caseType)
CaseModifier.convert('we-will-rock-the-word') // weWillRockTheWord
CaseModifier.convert('we-will-rock-the-word', CaseModifier.CASE_PROPER) // WeWillRockTheWord


// if not support, just return source string
CaseModifier.convert('We will rock the word') // We will rock the word

```
