---
title: Drupal module assets
tags:
  - Drupal
description: Sample files that belong to modules
pubDatetime: 2023-06-27
---

### example.info.yml

```yml
name: Example Module
description: Provides customizations for the website.
package: Core
type: module
core_version_requirement: ^9.5 || ^10
dependencies:
  - drupal:core
```

### example.libraries.yml

```yml
example_library:
  version: VERSION
  css:
    theme:
      css/example-library.css: {}
```
The library name will be: `example/example_library`
