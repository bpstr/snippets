To retrieve the current language in use on a Drupal 8 site, you can use the following code:

```php
$language = \Drupal::languageManager()->getCurrentLanguage()->getId();
```

The 2-character ISO code (639-1) for the language will be returned. So for French, it will be "fr" and for English "en" for example.

To retrieve the name of the language rather than the code, you can use this:

```
$language =  \Drupal::languageManager()->getCurrentLanguage()->getName();
```

Note also that to retrieve the language in use for the content, you must use the constant LanguageInterface::TYPE_CONTENT :

```
$language = \Drupal::languageManager()->getCurrentLanguage(LanguageInterface::TYPE_CONTENT)->getId();
```
