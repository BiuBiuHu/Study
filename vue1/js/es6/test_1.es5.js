var $__initTailRecursiveFunction = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/initTailRecursiveFunction.js", "test_1.js")).default;
var $__continuation = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/continuation.js", "test_1.js")).default;
var $__call = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/call.js", "test_1.js")).default;
var $__createClass = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/createClass.js", "test_1.js")).default;
var es6Code = 'let x = n => n + 1';
var Calc = $__initTailRecursiveFunction(function() {
  return $__call(function() {
    "use strict";
    function Calc() {
      console.log('Calc constructor');
    }
    return $__continuation($__createClass, null, [Calc, {add: function(a, b) {
        return a + b;
      }}, {}]);
  }, this, arguments);
})();
var c = new Calc();
console.log(c.add(4, 5));
