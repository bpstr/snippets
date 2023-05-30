---
title: Find Large Files with Mac Terminal
tags:
  - MacOS
description: Steps to find largest files on Mac in specific folder, including hidden files
pubDatetime: 2023-05-30
---

```bash
find . -size +200M -exec du -hs {} \;
```

