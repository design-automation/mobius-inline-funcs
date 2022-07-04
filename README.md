# mobius-inline-funcs
This library is part of the [Möbius Ecosystem](https://mobius.design-automation.net/index.html).
The Möbius Ecosystem encompasses various open-source tools and libraries for supporting spatial computational thinking. 
At the core of this ecosystem is Möbius Modeller, a parametric modelling application for the web.

mobius-inline-funcs provides the inline functions used when coding in Mobius. These can be used in conjunction with other libraries to embed Mobius functionality into your website. See [Mobius for your site](link) for more info. 

For more resources on embedding Mobius: https://mobius.design-automation.net/pages/mobius_for_your_site.html
## Installation and usage 

Mobius inline functions can be integrated into javascript or typescript projects. 
Typescript can give tips/auto-suggestions on the existing functions,
while javascript can show you the full documentation of each module. 
**Note**: Different editors may show different results. For **javascript**, 
beware that the `__model__` argument is **not required** for any functions. 

To setup a project: 
1. Setup the Javascript/Typescript folder. `cd` to the folder. 
2. Run the following to setup `package.json`:
```
npm init
```
3. Install typescript with save-dev:
```
npm i --save-dev typescript
```
4. Create a `tsconfig.json` file with tsc:
```
npx tsc -init
```


Using `mobius-inline-funcs`:

5. Install mobius-inline-funcs:
```
npm i @design-automation/mobius-inline-funcs
```
6. Create a .ts file (e.g. `test.ts`) with the following contents:
```
import * as inlFuncs from '@design-automation/mobius-inline-funcs'
const inl = new inlFuncs.InlineFuncs()
```
You can customize the import and constant names.
You can then write code with the Mobius functions.
For example:
```
const ray1 = inl.RY
console.log('ray: ' + ray1)
```
7. **Everytime** you make an update, recompile by entering:
```
npx tsc
```
8. Then run the compiled file:
```
node test.js
```



