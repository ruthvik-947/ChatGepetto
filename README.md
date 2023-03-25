# My First Extension

Build your first Chrome extension using the template, and exploring the wonderful documentation.

- [Getting Started with Chrome Extensions](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [API Reference](https://developer.chrome.com/docs/extensions/reference/)

## The Manifest File

`manifest.json` contains all the metadata about your extension. From the name and version, to the file locations for each feature. For example, under the `action` field, we describe than when a user clicks an action (the little button with your logo to the right address bar) we want to open a popup using the file `popup.html`.

The `permissions` field is perhaps the most important. If you want to use features like the `storage` api, you must declare that you require this permission. These permissions are then granted by the user when they install the extenson.

- [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Options

You can add configurable options to your extension using an options page, like the one in `options.html`. You'll need the `storage` permission to save your options.

- [Getting Started - Options](https://developer.chrome.com/docs/extensions/mv3/getstarted/#options)

## Content Scripts

Content scrips can be run on a page to modify the page contents, and interact with certain extension apis.

- [Content Scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
