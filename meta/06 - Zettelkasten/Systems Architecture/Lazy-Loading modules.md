---
title: Advantages of Using Modules
date: 2024-06-15
completed: 
tags:
  - javascript
---

* Lazy-loading modules allow for dynamic imports so that modules won’t load up-front, but instead on demand when needed.

* Dynamic import introduces a new function-like form of import.

* `import(url)` returns a *promise* for the module namespace object of the requested module, which is created after fetching, instantiating, and evaluating all of the module’s dependencies, as well as the module itself.

*  

