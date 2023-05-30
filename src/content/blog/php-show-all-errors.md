---
title: PHP Show All Errors
featured: true
tags:
  - PHP
  - Initial
description: Display All PHP Errors using runtime ini configuration
pubDatetime: 2023-05-30
---

```php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
```
