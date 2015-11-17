# track-digests.js

trackDigests for AngularJS. Include the `<track-digests>` element to see how frequent `$digest` cycles run, and see what triggers them.

<img style="max-width: 100%; width: 100%;" alt="Track $digests" src="https://cloud.githubusercontent.com/assets/1655968/11213174/8321b932-8d32-11e5-97cc-27a443ce936a.png">

> [Working jsFiddle example](http://jsfiddle.net/toddmotto/6t5wy6wx)

#### Usage
Include `track-digests.js` in your AngularJS application as a dependency:

```js
angular.module('app', [
  'trackDigests'
]);
```

Then simple include the `<track-digests>` element anywhere inside your `ng-app` :

```html
<div ng-app="app">
  <div ng-controller="ExampleCtrl as example">
    <track-digests></track-digests>
  </div>
</div>
```

## Installing with Bower

```
bower install https://github.com/toddmotto/track-digests.git
```

## Manual installation
Ensure you're using the files from the `dist` directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.

```html
<body>
  <!-- html above -->
  <script src="angular.js"></script>
  <script src="dist/track-digests.js"></script>
  <script>
  angular.module('app', [
    'trackDigests'
  ]);
  </script>
</body>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Gulp.

## Release history

- 1.0.0
  - Initial release
