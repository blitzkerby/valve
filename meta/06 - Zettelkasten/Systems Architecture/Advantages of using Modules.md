---
title: Advantages of Using Modules
date: 2024-06-15
completed: 
tags:
  - javascript
---

Modular programming and the use of modules offer several unique advantages. Some of these are as follows: 

* Modules scripts are evaluated only once: The browser evaluates module scripts only once, while classic scripts get evaluated as often as they are added to the DOM. This means that with JS modules, if you have an extended hierarchy of dependent modules, the module that depends on the innermost module will be evaluated first. This is a good thing because it means that the innermost module will be evaluated first and will have access to the exports of the modules that depend on it.

* Modules are auto-deferred: Unlike other script files, where you have to include the defer attribute if you don’t want to load them immediately, browsers automatically defer the loading of modules. 

* Modules are easy to maintain and reuse: Modules promote decoupling pieces of code that can be maintained independently without significant changes to other modules. They also allow you to reuse the same code in multiple different functions. 

* Modules provide namespacing: Modules create a private space for related variables and constants so that they can be referenced via the module without polluting the global namespace. 

* Modules enable dead code elimination: Before the introduction of modules, unused code files had to be manually removed from projects. With module imports, bundlers such as Webpack and rollup can automatically identify unused modules and eliminate them. Dead code may be removed before adding it to the bundle. This is known as tree shaking. 

All modern browsers support module import and export, and you can use them without any fallback.