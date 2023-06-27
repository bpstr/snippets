---
title: Drupal Twig snippets
tags:
  - Drupal
description: Drupal twig samples
pubDatetime: 2023-06-27
---

## Attach library from twig template

```twig
{{ attach_library('bartik/messages') }}
```

Example library definition:
```
library_name:
  version: VERSION
  css:
    theme:
      css/fixtures.css: {}
```

## Drupal twig get image field url

```twig
{{ file_url(node.field_image.entity.fileuri) }}
```

## Drupal twig get media reference url

Image:
```
{{ file_url(node.field_video.entity.field_media_image.entity.fileuri) }}
```

Video:
```
{{ file_url(node.field_video.entity.field_media_video_file.entity.fileuri) }}
```


