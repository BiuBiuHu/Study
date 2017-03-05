/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
(function (global, factory) {

	"use strict";

	if (typeof module === "object" && typeof module.exports === "object") {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call(Object);

	var support = {};

	function DOMEval(code, doc) {
		doc = doc || document;

		var script = doc.createElement("script");

		script.text = code;
		doc.head.appendChild(script).parentNode.removeChild(script);
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module


	var version = "3.1.1",


	// Define a local copy of jQuery
	jQuery = function (selector, context) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([a-z])/g,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function (all, letter) {
		return letter.toUpperCase();
	};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function () {
			return slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function (num) {

			// Return all the elements in a clean array
			if (num == null) {
				return slice.call(this);
			}

			// Return just the one element from the set
			return num < 0 ? this[num + this.length] : this[num];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function (elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function (callback) {
			return jQuery.each(this, callback);
		},

		map: function (callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function () {
			return this.pushStack(slice.apply(this, arguments));
		},

		first: function () {
			return this.eq(0);
		},

		last: function () {
			return this.eq(-1);
		},

		eq: function (i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function () {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if (typeof target !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {

			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {

				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {

						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function (msg) {
			throw new Error(msg);
		},

		noop: function () {},

		isFunction: function (obj) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function (obj) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function (obj) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type(obj);
			return (type === "number" || type === "string") &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN(obj - parseFloat(obj));
		},

		isPlainObject: function (obj) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if (!obj || toString.call(obj) !== "[object Object]") {
				return false;
			}

			proto = getProto(obj);

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if (!proto) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
		},

		isEmptyObject: function (obj) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for (name in obj) {
				return false;
			}
			return true;
		},

		type: function (obj) {
			if (obj == null) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function (code) {
			DOMEval(code);
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function (string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		nodeName: function (elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function (obj, callback) {
			var length,
			    i = 0;

			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function (text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function (arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArrayLike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function (elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function (first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			for (; j < len; j++) {
				first[i++] = second[j];
			}

			first.length = i;

			return first;
		},

		grep: function (elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function (elems, callback, arg) {
			var length,
			    value,
			    i = 0,
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function (fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = slice.call(arguments, 2);
			proxy = function () {
				return fn.apply(context || this, args.concat(slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	if (typeof Symbol === "function") {
		jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	}

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArrayLike(obj) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
		    type = jQuery.type(obj);

		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.3.3
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-08-08
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function (a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function (list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",


		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + identifier + ")"),
			"CLASS": new RegExp("^\\.(" + identifier + ")"),
			"TAG": new RegExp("^(" + identifier + "|[*])"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,


		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function (_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    fcssescape = function (ch, asCodePoint) {
			if (asCodePoint) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if (ch === "\0") {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function () {
			setDocument();
		},
		    disabledAncestor = addCombinator(function (elem) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		}, { dir: "parentNode", next: "legend" });

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var m,
			    i,
			    elem,
			    nid,
			    match,
			    groups,
			    newSelector,
			    newContext = context && context.ownerDocument,


			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

			results = results || [];

			// Return early from calls with invalid selector or context
			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			// Try to shortcut find operations (as opposed to filters) in HTML documents
			if (!seed) {

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
				context = context || document;

				if (documentIsHTML) {

					// If the selector is sufficiently simple, try using a "get*By*" DOM method
					// (excepting DocumentFragment context, where the methods don't exist)
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

						// ID selector
						if (m = match[1]) {

							// Document context
							if (nodeType === 9) {
								if (elem = context.getElementById(m)) {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}

								// Element context
							} else {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

									results.push(elem);
									return results;
								}
							}

							// Type selector
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;

							// Class selector
						} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					// Take advantage of querySelectorAll
					if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

						if (nodeType !== 1) {
							newContext = context;
							newSelector = selector;

							// qSA looks outside Element context, which is not what we want
							// Thanks to Andrew Dupont for this workaround technique
							// Support: IE <=8
							// Exclude object elements
						} else if (context.nodeName.toLowerCase() !== "object") {

							// Capture the context ID, setting it first if necessary
							if (nid = context.getAttribute("id")) {
								nid = nid.replace(rcssescape, fcssescape);
							} else {
								context.setAttribute("id", nid = expando);
							}

							// Prefix every selector in the list
							groups = tokenize(selector);
							i = groups.length;
							while (i--) {
								groups[i] = "#" + nid + " " + toSelector(groups[i]);
							}
							newSelector = groups.join(",");

							// Expand context for sibling selectors
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (nid === expando) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
		function assert(fn) {
			var el = document.createElement("fieldset");

			try {
				return !!fn(el);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (el.parentNode) {
					el.parentNode.removeChild(el);
				}
				// release memory in IE
				el = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = arr.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
		function createDisabledPseudo(disabled) {

			// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
			return function (elem) {

				// Only certain elements can match :enabled or :disabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
				if ("form" in elem) {

					// Check for inherited disabledness on relevant non-disabled elements:
					// * listed form-associated elements in a disabled fieldset
					//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
					// * option elements in a disabled optgroup
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
					// All such elements have a "form" property.
					if (elem.parentNode && elem.disabled === false) {

						// Option elements defer to a parent optgroup if present
						if ("label" in elem) {
							if ("label" in elem.parentNode) {
								return elem.parentNode.disabled === disabled;
							} else {
								return elem.disabled === disabled;
							}
						}

						// Support: IE 6 - 11
						// Use the isDisabled shortcut property to check for disabled fieldset ancestors
						return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
					}

					return elem.disabled === disabled;

					// Try to winnow out elements that can't be disabled before trusting the disabled property.
					// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
					// even exist on them, let alone have a boolean value.
				} else if ("label" in elem) {
					return elem.disabled === disabled;
				}

				// Remaining elements are neither :enabled nor :disabled
				return false;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    subWindow,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// Return early if doc is invalid or already selected
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Update global variables
			document = doc;
			docElem = document.documentElement;
			documentIsHTML = !isXML(document);

			// Support: IE 9-11, Edge
			// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
			if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

				// Support: IE 11, Edge
				if (subWindow.addEventListener) {
					subWindow.addEventListener("unload", unloadHandler, false);

					// Support: IE 9 - 10 only
				} else if (subWindow.attachEvent) {
					subWindow.attachEvent("onunload", unloadHandler);
				}
			}

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (el) {
				el.className = "i";
				return !el.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (el) {
				el.appendChild(document.createComment(""));
				return !el.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(document.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programmatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (el) {
				docElem.appendChild(el).id = expando;
				return !document.getElementsByName || !document.getElementsByName(expando).length;
			});

			// ID filter and find
			if (support.getById) {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var elem = context.getElementById(id);
						return elem ? [elem] : [];
					}
				};
			} else {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};

				// Support: IE 6 - 7 only
				// getElementById is not reliable as a find shortcut
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var node,
						    i,
						    elems,
						    elem = context.getElementById(id);

						if (elem) {

							// Verify the id attribute
							node = elem.getAttributeNode("id");
							if (node && node.value === id) {
								return [elem];
							}

							// Fall back on getElementsByName
							elems = context.getElementsByName(id);
							i = 0;
							while (elem = elems[i++]) {
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}
							}
						}

						return [];
					}
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See https://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(document.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (el) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// https://bugs.jquery.com/ticket/12359
					docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (el.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!el.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
					if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!el.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibling-combinator selector` fails
					if (!el.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (el) {
					el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = document.createElement("input");
					input.setAttribute("type", "hidden");
					el.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (el.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (el.querySelectorAll(":enabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Support: IE9-11+
					// IE's :disabled selector does not pick up the children of disabled fieldsets
					docElem.appendChild(el).disabled = true;
					if (el.querySelectorAll(":disabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					el.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (el) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(el, "*");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(el, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully self-exclusive
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return document;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.escape = function (sel) {
			return (sel + "").replace(rcssescape, fcssescape);
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function (match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function (match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function (match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function (nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function (className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function (name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function (type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    uniqueCache,
						    outerCache,
						    node,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType,
						    diff = false;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[expando] || (node[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

								cache = uniqueCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = nodeIndex && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										uniqueCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}
							} else {
								// Use previously-cached element index if available
								if (useCache) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if (diff === false) {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

											// Cache the index of each encountered element
											if (useCache) {
												outerCache = node[expando] || (node[expando] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

												uniqueCache[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function (pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function (elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function (elem) {
					return elem === docElem;
				},

				"focus": function (elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": createDisabledPseudo(false),
				"disabled": createDisabledPseudo(true),

				"checked": function (elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function (elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function (elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function (elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function (elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function (elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function (elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    skip = combinator.next,
			    key = skip || dir,
			    checkNonElements = base && key === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    uniqueCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

							if (skip && skip === elem.nodeName.toLowerCase()) {
								elem = elem[dir] || elem;
							} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[key] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function (seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						if (!context && elem.ownerDocument !== document) {
							setDocument(elem);
							xml = !documentIsHTML;
						}
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context || document, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is only one selector in the list and no seed
			// (the latter of which guarantees us context)
			if (match.length === 1) {

				// Reduce context if the leading compound selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (el) {
			// Should return 1, but returns 4 (following)
			return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (el) {
			el.innerHTML = "<a href='#'></a>";
			return el.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (el) {
			el.innerHTML = "<input/>";
			el.firstChild.setAttribute("value", "");
			return el.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (el) {
			return el.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;

	var dir = function (elem, dir, until) {
		var matched = [],
		    truncate = until !== undefined;

		while ((elem = elem[dir]) && elem.nodeType !== 9) {
			if (elem.nodeType === 1) {
				if (truncate && jQuery(elem).is(until)) {
					break;
				}
				matched.push(elem);
			}
		}
		return matched;
	};

	var siblings = function (n, elem) {
		var matched = [];

		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				matched.push(n);
			}
		}

		return matched;
	};

	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		// Single element
		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if (typeof qualifier !== "string") {
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not;
			});
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if (risSimple.test(qualifier)) {
			return jQuery.filter(qualifier, elements, not);
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter(qualifier, elements);
		return jQuery.grep(elements, function (elem) {
			return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
		});
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		if (elems.length === 1 && elem.nodeType === 1) {
			return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
		}

		return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function (selector) {
			var i,
			    ret,
			    len = this.length,
			    self = this;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			ret = this.pushStack([]);

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			return len > 1 ? jQuery.uniqueSort(ret) : ret;
		},
		filter: function (selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function (selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function (selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {

							// Properties of context are called as methods if possible
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					if (elem) {

						// Inject the element directly into the jQuery object
						this[0] = elem;
						this.length = 1;
					}
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || root).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (jQuery.isFunction(selector)) {
			return root.ready !== undefined ? root.ready(selector) :

			// Execute immediately if ready is not present
			selector(jQuery);
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,


	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.fn.extend({
		has: function (target) {
			var targets = jQuery(target, this),
			    l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function (selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    targets = typeof selectors !== "string" && jQuery(selectors);

			// Positional selectors never match, since there's no _selection_ context
			if (!rneedsContext.test(selectors)) {
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

						// Always skip document fragments
						if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},

		// Determine the position of an element within the set
		index: function (elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if (typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return indexOf.call(this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem);
		},

		add: function (selector, context) {
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function (selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) {}
		return cur;
	}

	jQuery.each({
		parent: function (elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function (elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil: function (elem, i, until) {
			return dir(elem, "parentNode", until);
		},
		next: function (elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function (elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function (elem) {
			return dir(elem, "nextSibling");
		},
		prevAll: function (elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil: function (elem, i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil: function (elem, i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings: function (elem) {
			return siblings((elem.parentNode || {}).firstChild, elem);
		},
		children: function (elem) {
			return siblings(elem.firstChild);
		},
		contents: function (elem) {
			return elem.contentDocument || jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {

				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.uniqueSort(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});
	var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

	// Convert String-formatted options into Object-formatted ones
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

		var // Flag to know if list is currently firing
		firing,


		// Last fire value for non-forgettable lists
		memory,


		// Flag to know if list was already fired
		fired,


		// Flag to prevent firing
		locked,


		// Actual callback list
		list = [],


		// Queue of execution data for repeatable lists
		queue = [],


		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,


		// Fire callbacks
		fire = function () {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift();
				while (++firingIndex < list.length) {

					// Run callback and check for early termination
					if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if (!options.memory) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if (locked) {

				// Keep an empty list if we have data for future add calls
				if (memory) {
					list = [];

					// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},


		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function () {
				if (list) {

					// If we have memory from a past run, we should fire after adding
					if (memory && !firing) {
						firingIndex = list.length - 1;
						queue.push(memory);
					}

					(function add(args) {
						jQuery.each(args, function (_, arg) {
							if (jQuery.isFunction(arg)) {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && jQuery.type(arg) !== "string") {

								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);

					if (memory && !firing) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function () {
				jQuery.each(arguments, function (_, arg) {
					var index;
					while ((index = jQuery.inArray(arg, list, index)) > -1) {
						list.splice(index, 1);

						// Handle firing indexes
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function (fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function () {
				if (list) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function () {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function () {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function () {
				locked = queue = [];
				if (!memory && !firing) {
					list = memory = "";
				}
				return this;
			},
			locked: function () {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function (context, args) {
				if (!locked) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					queue.push(args);
					if (!firing) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function () {
				self.fireWith(this, arguments);
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function () {
				return !!fired;
			}
		};

		return self;
	};

	function Identity(v) {
		return v;
	}
	function Thrower(ex) {
		throw ex;
	}

	function adoptValue(value, resolve, reject) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if (value && jQuery.isFunction(method = value.promise)) {
				method.call(value).done(resolve).fail(reject);

				// Other thenables
			} else if (value && jQuery.isFunction(method = value.then)) {
				method.call(value, resolve, reject);

				// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call(undefined, value);
			}

			// For Promises/A+, convert exceptions into rejections
			// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
			// Deferred#then to conditionally suppress rejection.
		} catch (value) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call(undefined, value);
		}
	}

	jQuery.extend({

		Deferred: function (func) {
			var tuples = [

			// action, add listener, callbacks,
			// ... .then handlers, argument index, [final state]
			["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
			    state = "pending",
			    promise = {
				state: function () {
					return state;
				},
				always: function () {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				"catch": function (fn) {
					return promise.then(null, fn);
				},

				// Keep pipe for back-compat
				pipe: function () /* fnDone, fnFail, fnProgress */{
					var fns = arguments;

					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								} else {
									newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				then: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve(depth, deferred, handler, special) {
						return function () {
							var that = this,
							    args = arguments,
							    mightThrow = function () {
								var returned, then;

								// Support: Promises/A+ section 2.3.3.3.3
								// https://promisesaplus.com/#point-59
								// Ignore double-resolution attempts
								if (depth < maxDepth) {
									return;
								}

								returned = handler.apply(that, args);

								// Support: Promises/A+ section 2.3.1
								// https://promisesaplus.com/#point-48
								if (returned === deferred.promise()) {
									throw new TypeError("Thenable self-resolution");
								}

								// Support: Promises/A+ sections 2.3.3.1, 3.5
								// https://promisesaplus.com/#point-54
								// https://promisesaplus.com/#point-75
								// Retrieve `then` only once
								then = returned && (

								// Support: Promises/A+ section 2.3.4
								// https://promisesaplus.com/#point-64
								// Only check objects and functions for thenability
								typeof returned === "object" || typeof returned === "function") && returned.then;

								// Handle a returned thenable
								if (jQuery.isFunction(then)) {

									// Special processors (notify) just wait for resolution
									if (special) {
										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

										// Normal processors (resolve) also hook into progress
									} else {

										// ...and disregard older resolution values
										maxDepth++;

										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
									}

									// Handle all other returned values
								} else {

									// Only substitute handlers pass on context
									// and multiple values (non-spec behavior)
									if (handler !== Identity) {
										that = undefined;
										args = [returned];
									}

									// Process the value(s)
									// Default process is resolve
									(special || deferred.resolveWith)(that, args);
								}
							},


							// Only normal processors (resolve) catch and reject exceptions
							process = special ? mightThrow : function () {
								try {
									mightThrow();
								} catch (e) {

									if (jQuery.Deferred.exceptionHook) {
										jQuery.Deferred.exceptionHook(e, process.stackTrace);
									}

									// Support: Promises/A+ section 2.3.3.3.4.1
									// https://promisesaplus.com/#point-61
									// Ignore post-resolution exceptions
									if (depth + 1 >= maxDepth) {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Thrower) {
											that = undefined;
											args = [e];
										}

										deferred.rejectWith(that, args);
									}
								}
							};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if (depth) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					return jQuery.Deferred(function (newDefer) {

						// progress_handlers.add( ... )
						tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

						// fulfilled_handlers.add( ... )
						tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));

						// rejected_handlers.add( ... )
						tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
					}).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function (obj) {
					return obj != null ? jQuery.extend(obj, promise) : promise;
				}
			},
			    deferred = {};

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[5];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[3 - i][2].disable,

					// progress_callbacks.lock
					tuples[0][2].lock);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add(tuple[3].fire);

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function (singleValue) {
			var

			// count of uncompleted subordinates
			remaining = arguments.length,


			// count of unprocessed arguments
			i = remaining,


			// subordinate fulfillment data
			resolveContexts = Array(i),
			    resolveValues = slice.call(arguments),


			// the master Deferred
			master = jQuery.Deferred(),


			// subordinate callback factory
			updateFunc = function (i) {
				return function (value) {
					resolveContexts[i] = this;
					resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
					if (! --remaining) {
						master.resolveWith(resolveContexts, resolveValues);
					}
				};
			};

			// Single- and empty arguments are adopted like Promise.resolve
			if (remaining <= 1) {
				adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject);

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while (i--) {
				adoptValue(resolveValues[i], updateFunc(i), master.reject);
			}

			return master.promise();
		}
	});

	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function (error, stack) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
			window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
		}
	};

	jQuery.readyException = function (error) {
		window.setTimeout(function () {
			throw error;
		});
	};

	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function (fn) {

		readyList.then(fn)

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch(function (error) {
			jQuery.readyException(error);
		});

		return this;
	};

	jQuery.extend({

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function (hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},

		// Handle when the DOM is ready
		ready: function (wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);
		}
	});

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed);
		window.removeEventListener("load", completed);
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout(jQuery.ready);
	} else {

		// Use the handy event callback
		document.addEventListener("DOMContentLoaded", completed);

		// A fallback to window.onload, that will always work
		window.addEventListener("load", completed);
	}

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {

				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function (elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		if (chainable) {
			return elems;
		}

		// Gets
		if (bulk) {
			return fn.call(elems);
		}

		return len ? fn(elems[0], key) : emptyGet;
	};
	var acceptData = function (owner) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	};

	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function (owner) {

			// Check if the owner object already has a cache
			var value = owner[this.expando];

			// If not, create one
			if (!value) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if (acceptData(owner)) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if (owner.nodeType) {
						owner[this.expando] = value;

						// Otherwise secure it in a non-enumerable property
						// configurable must be true to allow the property to be
						// deleted when data is removed
					} else {
						Object.defineProperty(owner, this.expando, {
							value: value,
							configurable: true
						});
					}
				}
			}

			return value;
		},
		set: function (owner, data, value) {
			var prop,
			    cache = this.cache(owner);

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if (typeof data === "string") {
				cache[jQuery.camelCase(data)] = value;

				// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for (prop in data) {
					cache[jQuery.camelCase(prop)] = data[prop];
				}
			}
			return cache;
		},
		get: function (owner, key) {
			return key === undefined ? this.cache(owner) :

			// Always use camelCase key (gh-2257)
			owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
		},
		access: function (owner, key, value) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined || key && typeof key === "string" && value === undefined) {

				return this.get(owner, key);
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function (owner, key) {
			var i,
			    cache = owner[this.expando];

			if (cache === undefined) {
				return;
			}

			if (key !== undefined) {

				// Support array or space separated string of keys
				if (jQuery.isArray(key)) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map(jQuery.camelCase);
				} else {
					key = jQuery.camelCase(key);

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
				}

				i = key.length;

				while (i--) {
					delete cache[key[i]];
				}
			}

			// Remove the expando if there's no more data
			if (key === undefined || jQuery.isEmptyObject(cache)) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if (owner.nodeType) {
					owner[this.expando] = undefined;
				} else {
					delete owner[this.expando];
				}
			}
		},
		hasData: function (owner) {
			var cache = owner[this.expando];
			return cache !== undefined && !jQuery.isEmptyObject(cache);
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();

	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /[A-Z]/g;

	function getData(data) {
		if (data === "true") {
			return true;
		}

		if (data === "false") {
			return false;
		}

		if (data === "null") {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if (data === +data + "") {
			return +data;
		}

		if (rbrace.test(data)) {
			return JSON.parse(data);
		}

		return data;
	}

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = getData(data);
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function (elem) {
			return dataUser.hasData(elem) || dataPriv.hasData(elem);
		},

		data: function (elem, name, data) {
			return dataUser.access(elem, name, data);
		},

		removeData: function (elem, name) {
			dataUser.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function (elem, name, data) {
			return dataPriv.access(elem, name, data);
		},

		_removeData: function (elem, name) {
			dataPriv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function (key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = dataUser.get(elem);

					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						dataPriv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if (typeof key === "object") {
				return this.each(function () {
					dataUser.set(this, key);
				});
			}

			return access(this, function (value) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, key);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {

					// We always store the camelCased key
					dataUser.set(this, key, value);
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function (key) {
			return this.each(function () {
				dataUser.remove(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function (elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = dataPriv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = dataPriv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function (elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function () {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function (elem, type) {
			var key = type + "queueHooks";
			return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					dataPriv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function (type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// Ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function (type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function (type) {
			return this.queue(type || "fx", []);
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function (type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function () {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = dataPriv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" || elem.style.display === "" &&

		// Otherwise, check computed style
		// Support: Firefox <=43 - 45
		// Disconnected elements can have computed display: none, so first confirm that elem is
		// in the document.
		jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
	};

	var swap = function (elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted,
		    scale = 1,
		    maxIterations = 20,
		    currentValue = tween ? function () {
			return tween.cur();
		} : function () {
			return jQuery.css(elem, prop, "");
		},
		    initial = currentValue(),
		    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


		// Starting value computation is required for potential unit mismatches
		initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

		if (initialInUnit && initialInUnit[3] !== unit) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[3];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style(elem, prop, initialInUnit + unit);

				// Update scale, tolerating zero or NaN from tween.cur()
				// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
		}

		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}

	var defaultDisplayMap = {};

	function getDefaultDisplay(elem) {
		var temp,
		    doc = elem.ownerDocument,
		    nodeName = elem.nodeName,
		    display = defaultDisplayMap[nodeName];

		if (display) {
			return display;
		}

		temp = doc.body.appendChild(doc.createElement(nodeName));
		display = jQuery.css(temp, "display");

		temp.parentNode.removeChild(temp);

		if (display === "none") {
			display = "block";
		}
		defaultDisplayMap[nodeName] = display;

		return display;
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    values = [],
		    index = 0,
		    length = elements.length;

		// Determine new display value for elements that need to change
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			display = elem.style.display;
			if (show) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if (display === "none") {
					values[index] = dataPriv.get(elem, "display") || null;
					if (!values[index]) {
						elem.style.display = "";
					}
				}
				if (elem.style.display === "" && isHiddenWithinTree(elem)) {
					values[index] = getDefaultDisplay(elem);
				}
			} else {
				if (display !== "none") {
					values[index] = "none";

					// Remember what we're overwriting
					dataPriv.set(elem, "display", display);
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for (index = 0; index < length; index++) {
			if (values[index] != null) {
				elements[index].style.display = values[index];
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		show: function () {
			return showHide(this, true);
		},
		hide: function () {
			return showHide(this);
		},
		toggle: function (state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHiddenWithinTree(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});
	var rcheckableType = /^(?:checkbox|radio)$/i;

	var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

	var rscriptType = /^$|\/(?:java|ecma)script/i;

	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [1, "<select multiple='multiple'>", "</select>"],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		_default: [0, "", ""]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll(context, tag) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if (typeof context.getElementsByTagName !== "undefined") {
			ret = context.getElementsByTagName(tag || "*");
		} else if (typeof context.querySelectorAll !== "undefined") {
			ret = context.querySelectorAll(tag || "*");
		} else {
			ret = [];
		}

		if (tag === undefined || tag && jQuery.nodeName(context, tag)) {
			return jQuery.merge([context], ret);
		}

		return ret;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
		}
	}

	var rhtml = /<|&#?\w+;/;

	function buildFragment(elems, context, scripts, selection, ignored) {
		var elem,
		    tmp,
		    tag,
		    wrap,
		    contains,
		    j,
		    fragment = context.createDocumentFragment(),
		    nodes = [],
		    i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			elem = elems[i];

			if (elem || elem === 0) {

				// Add nodes directly
				if (jQuery.type(elem) === "object") {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

					// Convert non-html into a text node
				} else if (!rhtml.test(elem)) {
					nodes.push(context.createTextNode(elem));

					// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild(context.createElement("div"));

					// Deserialize a standard representation
					tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
					wrap = wrapMap[tag] || wrapMap._default;
					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while (j--) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, tmp.childNodes);

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while (elem = nodes[i++]) {

			// Skip elements already in the context collection (trac-4087)
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) {
					ignored.push(elem);
				}
				continue;
			}

			contains = jQuery.contains(elem.ownerDocument, elem);

			// Append to fragment
			tmp = getAll(fragment.appendChild(elem), "script");

			// Preserve script evaluation history
			if (contains) {
				setGlobalEval(tmp);
			}

			// Capture executables
			if (scripts) {
				j = 0;
				while (elem = tmp[j++]) {
					if (rscriptType.test(elem.type || "")) {
						scripts.push(elem);
					}
				}
			}
		}

		return fragment;
	}

	(function () {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var documentElement = document.documentElement;

	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	function on(elem, types, selector, data, fn, one) {
		var origFn, type;

		// Types can be a map of types/handlers
		if (typeof types === "object") {

			// ( types-Object, selector, data )
			if (typeof selector !== "string") {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for (type in types) {
				on(elem, type, selector, data, types[type], one);
			}
			return elem;
		}

		if (data == null && fn == null) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if (typeof selector === "string") {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if (fn === false) {
			fn = returnFalse;
		} else if (!fn) {
			return elem;
		}

		if (one === 1) {
			origFn = fn;
			fn = function (event) {

				// Can use an empty set, since event contains the info
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function () {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function (elem, types, handler, data, selector) {

			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if (selector) {
				jQuery.find.matchesSelector(documentElement, selector);
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}
		},

		// Detach an event or set of events from an element
		remove: function (elem, types, handler, selector, mappedTypes) {

			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove data and the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				dataPriv.remove(elem, "handle events");
			}
		},

		dispatch: function (nativeEvent) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix(nativeEvent);

			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue,
			    args = new Array(arguments.length),
			    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;

			for (i = 1; i < arguments.length; i++) {
				args[i] = arguments[i];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function (event, handlers) {
			var i,
			    handleObj,
			    sel,
			    matchedHandlers,
			    matchedSelectors,
			    handlerQueue = [],
			    delegateCount = handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			if (delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!(event.type === "click" && event.button >= 1)) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
						matchedHandlers = [];
						matchedSelectors = {};
						for (i = 0; i < delegateCount; i++) {
							handleObj = handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matchedSelectors[sel] === undefined) {
								matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matchedSelectors[sel]) {
								matchedHandlers.push(handleObj);
							}
						}
						if (matchedHandlers.length) {
							handlerQueue.push({ elem: cur, handlers: matchedHandlers });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if (delegateCount < handlers.length) {
				handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		addProp: function (name, hook) {
			Object.defineProperty(jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction(hook) ? function () {
					if (this.originalEvent) {
						return hook(this.originalEvent);
					}
				} : function () {
					if (this.originalEvent) {
						return this.originalEvent[name];
					}
				},

				set: function (value) {
					Object.defineProperty(this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					});
				}
			});
		},

		fix: function (originalEvent) {
			return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function () {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function () {
					if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function (event) {
					return jQuery.nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function (event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {

		// This "if" is needed for plain objects
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle);
		}
	};

	jQuery.Event = function (src, props) {

		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

			// Support: Android <=2.3 only
			src.returnValue === false ? returnTrue : returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function () {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && !this.isSimulated) {
				e.preventDefault();
			}
		},
		stopPropagation: function () {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function (event) {
			var button = event.button;

			// Add which for key events
			if (event.which == null && rkeyEvent.test(event.type)) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
				if (button & 1) {
					return 1;
				}

				if (button & 2) {
					return 3;
				}

				if (button & 4) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp);

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function (event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	jQuery.fn.extend({

		on: function (types, selector, data, fn) {
			return on(this, types, selector, data, fn);
		},
		one: function (types, selector, data, fn) {
			return on(this, types, selector, data, fn, 1);
		},
		off: function (types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if (typeof types === "object") {

				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		}
	});

	var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,


	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget(elem, content) {
		if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

			return elem.getElementsByTagName("tbody")[0] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);

		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (dataPriv.hasData(src)) {
			pdataOld = dataPriv.access(src);
			pdataCur = dataPriv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (dataUser.hasData(src)) {
			udataOld = dataUser.access(src);
			udataCur = jQuery.extend({}, udataOld);

			dataUser.set(dest, udataCur);
		}
	}

	// Fix IE bugs, see support tests
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip(collection, args, callback, ignored) {

		// Flatten any nested arrays
		args = concat.apply([], args);

		var fragment,
		    first,
		    scripts,
		    hasScripts,
		    node,
		    doc,
		    i = 0,
		    l = collection.length,
		    iNoClone = l - 1,
		    value = args[0],
		    isFunction = jQuery.isFunction(value);

		// We can't cloneNode fragments that contain checked, in WebKit
		if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
			return collection.each(function (index) {
				var self = collection.eq(index);
				if (isFunction) {
					args[0] = value.call(this, index, self.html());
				}
				domManip(self, args, callback, ignored);
			});
		}

		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;

			if (fragment.childNodes.length === 1) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for (; i < l; i++) {
					node = fragment;

					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);

						// Keep references to cloned scripts for later restoration
						if (hasScripts) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(scripts, getAll(node, "script"));
						}
					}

					callback.call(collection[i], node, i);
				}

				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;

					// Reenable scripts
					jQuery.map(scripts, restoreScript);

					// Evaluate executable scripts on first document insertion
					for (i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

							if (node.src) {

								// Optional AJAX dependency, but won't run scripts if not present
								if (jQuery._evalUrl) {
									jQuery._evalUrl(node.src);
								}
							} else {
								DOMEval(node.textContent.replace(rcleanScript, ""), doc);
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove(elem, selector, keepData) {
		var node,
		    nodes = selector ? jQuery.filter(selector, elem) : elem,
		    i = 0;

		for (; (node = nodes[i]) != null; i++) {
			if (!keepData && node.nodeType === 1) {
				jQuery.cleanData(getAll(node));
			}

			if (node.parentNode) {
				if (keepData && jQuery.contains(node.ownerDocument, node)) {
					setGlobalEval(getAll(node, "script"));
				}
				node.parentNode.removeChild(node);
			}
		}

		return elem;
	}

	jQuery.extend({
		htmlPrefilter: function (html) {
			return html.replace(rxhtmlTag, "<$1></$2>");
		},

		clone: function (elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			// Fix IE cloning issues
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function (elems) {
			var data,
			    elem,
			    type,
			    special = jQuery.event.special,
			    i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (acceptData(elem)) {
					if (data = elem[dataPriv.expando]) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataPriv.expando] = undefined;
					}
					if (elem[dataUser.expando]) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataUser.expando] = undefined;
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		detach: function (selector) {
			return remove(this, selector, true);
		},

		remove: function (selector) {
			return remove(this, selector);
		},

		text: function (value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},

		append: function () {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function () {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function () {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function () {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		empty: function () {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function (dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function (value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = jQuery.htmlPrefilter(value);

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function () {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip(this, arguments, function (elem) {
				var parent = this.parentNode;

				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) {
						parent.replaceChild(elem, this);
					}
				}

				// Force callback invocation
			}, ignored);
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});
	var rmargin = /^margin/;

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles = function (elem) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (!view || !view.opener) {
			view = window;
		}

		return view.getComputedStyle(elem);
	};

	(function () {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if (!div) {
				return;
			}

			div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild(container);

			var divStyle = window.getComputedStyle(div);
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild(container);

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal,
		    boxSizingReliableVal,
		    pixelMarginRightVal,
		    reliableMarginLeftVal,
		    container = document.createElement("div"),
		    div = document.createElement("div");

		// Finish early in limited (non-browser) environments
		if (!div.style) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
		container.appendChild(div);

		jQuery.extend(support, {
			pixelPosition: function () {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function () {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function () {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function () {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		});
	})();

	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,
		    style = elem.style;

		computed = computed || getStyles(elem);

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function () {
				if (conditionFn()) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "Moz", "ms"],
	    emptyStyle = document.createElement("div").style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name) {

		// Shortcut for names that are not vendor prefixed
		if (name in emptyStyle) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in emptyStyle) {
				return name;
			}
		}
	}

	function setPositiveNumber(elem, value, subtract) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec(value);
		return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i,
		    val = 0;

		// If we already have the right measurement, avoid augmentation
		if (extra === (isBorderBox ? "border" : "content")) {
			i = 4;

			// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for (; i < 4; i += 2) {

			// Both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {

				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// At this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// At this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
		    valueIsBorderBox = true,
		    styles = getStyles(elem),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if (elem.getClientRects().length) {
			val = elem.getBoundingClientRect()[name];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if (val <= 0 || val == null) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS(elem, name, styles);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}

			// Computed unit is not pixels. Stop here and return.
			if (rnumnonpx.test(val)) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

			// Normalize "", auto, and prepare for extra
			val = parseFloat(val) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function (elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function (elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    style = elem.style;

			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if (value == null || value !== value) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if (type === "number") {
					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
				}

				// background-* props affect original clone's values
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

					style[name] = value;
				}
			} else {

				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function (elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = jQuery.camelCase(name);

			// Make sure that we're working with the right name
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			// Convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function (elem, computed, extra) {
				if (computed) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test(jQuery.css(elem, "display")) && (

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},

			set: function (elem, value, extra) {
				var matches,
				    styles = extra && getStyles(elem),
				    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

				// Convert to pixels if value adjustment is needed
				if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

					elem.style[name] = value;
					value = jQuery.css(elem, name);
				}

				return setPositiveNumber(elem, value, subtract);
			}
		};
	});

	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
		if (computed) {
			return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
				return elem.getBoundingClientRect().left;
			})) + "px";
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function (value) {
				var i = 0,
				    expanded = {},


				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function (name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (jQuery.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function (elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function () {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function (percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function (tween) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
					return tween.elem[tween.prop];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css(tween.elem, tween.prop, "");

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function (tween) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function (tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function (p) {
			return p;
		},
		swing: function (p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    timerId,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rrun = /queueHooks$/;

	function raf() {
		if (timerId) {
			window.requestAnimationFrame(raf);
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = jQuery.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		var prop,
		    value,
		    toggle,
		    hooks,
		    oldfire,
		    propTween,
		    restoreDisplay,
		    display,
		    isBox = "width" in props || "height" in props,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHiddenWithinTree(elem),
		    dataShow = dataPriv.get(elem, "fxshow");

		// Queue-skipping animations hijack the fx hooks
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {

				// Ensure the complete handler is called before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Detect show/hide animations
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.test(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;

						// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject(props);
		if (!propTween && jQuery.isEmptyObject(orig)) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if (isBox && elem.nodeType === 1) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if (restoreDisplay == null) {
				restoreDisplay = dataPriv.get(elem, "display");
			}
			display = jQuery.css(elem, "display");
			if (display === "none") {
				if (restoreDisplay) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide([elem], true);
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css(elem, "display");
					showHide([elem]);
				}
			}

			// Animate inline elements as inline-block
			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
				if (jQuery.css(elem, "float") === "none") {

					// Restore the original display value at the end of pure show/hide animations
					if (!propTween) {
						anim.done(function () {
							style.display = restoreDisplay;
						});
						if (restoreDisplay == null) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}

		// Implement show/hide animations
		propTween = false;
		for (prop in orig) {

			// General show/hide setup for this element animation
			if (!propTween) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if (toggle) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if (hidden) {
					showHide([elem], true);
				}

				/* eslint-disable no-loop-func */

				anim.done(function () {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if (!hidden) {
						showHide([elem]);
					}
					dataPriv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
			}

			// Per-property setup
			propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
			if (!(prop in dataShow)) {
				dataShow[prop] = propTween.start;
				if (hidden) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = Animation.prefilters.length,
		    deferred = jQuery.Deferred().always(function () {

			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function () {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


			// Support: Android 2.3 only
			// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			if (percent < 1 && length) {
				return remaining;
			} else {
				deferred.resolveWith(elem, [animation]);
				return false;
			}
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function (prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function (gotoEnd) {
				var index = 0,


				// If we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// Resolve when we played the last frame; otherwise, reject
				if (gotoEnd) {
					deferred.notifyWith(elem, [animation, 1, 0]);
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (jQuery.isFunction(result.stop)) {
					jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
				}
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		// attach callbacks from options
		return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweeners: {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value);
				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
				return tween;
			}]
		},

		tweener: function (props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.match(rnothtmlwhite);
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},

		prefilters: [defaultPrefilter],

		prefilter: function (callback, prepend) {
			if (prepend) {
				Animation.prefilters.unshift(callback);
			} else {
				Animation.prefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if (jQuery.fx.off || document.hidden) {
			opt.duration = 0;
		} else {
			if (typeof opt.duration !== "number") {
				if (opt.duration in jQuery.fx.speeds) {
					opt.duration = jQuery.fx.speeds[opt.duration];
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function (speed, to, easing, callback) {

			// Show any hidden elements after setting opacity to 0
			return this.filter(isHiddenWithinTree).css("opacity", 0).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function (prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function () {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || dataPriv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function (type, clearQueue, gotoEnd) {
			var stopQueue = function (hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = dataPriv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function (type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = dataPriv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// Look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// Look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    i = 0,
		    timers = jQuery.timers;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];

			// Checks the timer has not already been removed
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		if (timer()) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function () {
		if (!timerId) {
			timerId = window.requestAnimationFrame ? window.requestAnimationFrame(raf) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};

	jQuery.fx.stop = function () {
		if (window.cancelAnimationFrame) {
			window.cancelAnimationFrame(timerId);
		} else {
			window.clearInterval(timerId);
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function () {
				window.clearTimeout(timeout);
			};
		});
	};

	(function () {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();

	var boolHook,
	    attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function (name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function (name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function (elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
			}

			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				}

				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				elem.setAttribute(name, value + "");
				return value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			ret = jQuery.find.attr(elem, name);

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function (elem, value) {
					if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function (elem, value) {
			var name,
			    i = 0,


			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match(rnothtmlwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					elem.removeAttribute(name);
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function (elem, value, name) {
			if (value === false) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};

	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = function (elem, name, isXML) {
			var ret,
			    handle,
			    lowercaseName = name.toLowerCase();

			if (!isXML) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[lowercaseName];
				attrHandle[lowercaseName] = ret;
				ret = getter(elem, name, isXML) != null ? lowercaseName : null;
				attrHandle[lowercaseName] = handle;
			}
			return ret;
		};
	});

	var rfocusable = /^(?:input|select|textarea|button)$/i,
	    rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function (name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function (name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});

	jQuery.extend({
		prop: function (elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				return elem[name] = value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			return elem[name];
		},

		propHooks: {
			tabIndex: {
				get: function (elem) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					if (tabindex) {
						return parseInt(tabindex, 10);
					}

					if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function (elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function (elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex;

					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse(value) {
		var tokens = value.match(rnothtmlwhite) || [];
		return tokens.join(" ");
	}

	function getClass(elem) {
		return elem.getAttribute && elem.getAttribute("class") || "";
	}

	jQuery.fn.extend({
		addClass: function (value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, getClass(this)));
				});
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		removeClass: function (value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, getClass(this)));
				});
			}

			if (!arguments.length) {
				return this.attr("class", "");
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {

							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") > -1) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		toggleClass: function (value, stateVal) {
			var type = typeof value;

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
				});
			}

			return this.each(function () {
				var className, i, self, classNames;

				if (type === "string") {

					// Toggle individual class names
					i = 0;
					self = jQuery(this);
					classNames = value.match(rnothtmlwhite) || [];

					while (className = classNames[i++]) {

						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (value === undefined || type === "boolean") {
					className = getClass(this);
					if (className) {

						// Store className if set
						dataPriv.set(this, "__className__", className);
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if (this.setAttribute) {
						this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
					}
				}
			});
		},

		hasClass: function (selector) {
			var className,
			    elem,
			    i = 0;

			className = " " + selector + " ";
			while (elem = this[i++]) {
				if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
					return true;
				}
			}

			return false;
		}
	});

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function (value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if (typeof ret === "string") {
						return ret.replace(rreturn, "");
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function (elem) {

					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elem));
				}
			},
			select: {
				get: function (elem) {
					var value,
					    option,
					    i,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one",
					    values = one ? null : [],
					    max = one ? index + 1 : options.length;

					if (index < 0) {
						i = max;
					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) &&

						// Don't return options that are disabled or in a disabled optgroup
						!option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function (elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];

						/* eslint-disable no-cond-assign */

						if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function (elem, value) {
				if (jQuery.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend(jQuery.event, {

		trigger: function (event, data, elem, onlyHandlers) {

			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") > -1) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function (type, elem, event) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true
			});

			jQuery.event.trigger(e, null, elem);
		}

	});

	jQuery.fn.extend({

		trigger: function (type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function (type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function (fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});

	support.focusin = "onfocusin" in window;

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if (!support.focusin) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function (event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
			};

			jQuery.event.special[fix] = {
				setup: function () {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					dataPriv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown: function () {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						dataPriv.remove(doc, fix);
					} else {
						dataPriv.access(doc, fix, attaches);
					}
				}
			};
		});
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = /\?/;

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = new window.DOMParser().parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (jQuery.isArray(obj)) {

			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {

					// Treat each array item as a scalar.
					add(prefix, v);
				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {

			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {

			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function (key, valueOrFunction) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
		};

		// If an array was passed in, assume that it is an array of form elements.
		if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&");
	};

	jQuery.fn.extend({
		serialize: function () {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function () {
			return this.map(function () {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				if (val == null) {
					return null;
				}

				if (jQuery.isArray(val)) {
					return jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					});
				}

				return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	var r20 = /%20/g,
	    rhash = /#.*$/,
	    rantiCache = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*"),


	// Anchor tag for parsing the document origin
	originAnchor = document.createElement("a");
	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

			if (jQuery.isFunction(func)) {

				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {

					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {

			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},


		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {

									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s.throws) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test(location.protocol),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function (target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function (url, options) {

			// If url is an object, simulate pre-1.5 signature
			if (typeof url === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,


			// URL without anti-cache param
			cacheURL,


			// Response headers
			responseHeadersString,
			    responseHeaders,


			// timeout handle
			timeoutTimer,


			// Url cleanup var
			urlAnchor,


			// Request state (becomes false upon send and true upon completion)
			completed,


			// To know if global events are to be dispatched
			fireGlobals,


			// Loop variable
			i,


			// uncached part of the url
			uncached,


			// Create the final options object
			s = jQuery.ajaxSetup({}, options),


			// Callbacks context
			callbackContext = s.context || s,


			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),


			// Status-dependent callbacks
			statusCode = s.statusCode || {},


			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},


			// Default abort message
			strAbort = "canceled",


			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function (key) {
					var match;
					if (completed) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function () {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function (name, value) {
					if (completed == null) {
						name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function (type) {
					if (completed == null) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function (map) {
					var code;
					if (map) {
						if (completed) {

							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for (code in map) {
								statusCode[code] = [statusCode[code], map[code]];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function (statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR);

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if (s.crossDomain == null) {
				urlAnchor = document.createElement("a");

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
				} catch (e) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (completed) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace(rhash, "");

			// More options handling for requests with no content
			if (!s.hasContent) {

				// Remember the hash so we can put it back
				uncached = s.url.slice(cacheURL.length);

				// If data is available, append data to url
				if (s.data) {
					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if (s.cache === false) {
					cacheURL = cacheURL.replace(rantiCache, "$1");
					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

				// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
				s.data = s.data.replace(r20, "+");
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add(s.complete);
			jqXHR.done(s.success);
			jqXHR.fail(s.error);

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}

				// If request was aborted inside ajaxSend, stop there
				if (completed) {
					return jqXHR;
				}

				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = window.setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					completed = false;
					transport.send(requestHeaders, done);
				} catch (e) {

					// Rethrow post-completion exceptions
					if (completed) {
						throw e;
					}

					// Propagate others as results
					done(-1, e);
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Ignore repeat invocations
				if (completed) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if (timeoutTimer) {
					window.clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(statusCode);
				statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function (url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function (url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {

			// Shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax(jQuery.extend({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject(url) && url));
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function (html) {
			var wrap;

			if (this[0]) {
				if (jQuery.isFunction(html)) {
					html = html.call(this[0]);
				}

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function (html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function (html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function (selector) {
			this.parent(selector).not("body").each(function () {
				jQuery(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});

	jQuery.expr.pseudos.hidden = function (elem) {
		return !jQuery.expr.pseudos.visible(elem);
	};
	jQuery.expr.pseudos.visible = function (elem) {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	};

	jQuery.ajaxSettings.xhr = function () {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	};

	var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function (headers, complete) {
					var i,
					    xhr = options.xhr();

					xhr.open(options.type, options.url, options.async, options.username, options.password);

					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}

					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

					// Callback
					callback = function (type) {
						return function () {
							if (callback) {
								callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if (typeof xhr.status !== "number") {
										complete(0, "error");
									} else {
										complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status, xhr.statusText);
									}
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback("error");

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if (xhr.onabort !== undefined) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function () {

							// Check readyState before timeout as it changes
							if (xhr.readyState === 4) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout(function () {
									if (callback) {
										errorCallback();
									}
								});
							}
						};
					}

					// Create the abort callback
					callback = callback("abort");

					try {

						// Do send the request (this may raise an exception)
						xhr.send(options.hasContent && options.data || null);
					} catch (e) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if (callback) {
							throw e;
						}
					}
				},

				abort: function () {
					if (callback) {
						callback();
					}
				}
			};
		}
	});

	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function (s) {
		if (s.crossDomain) {
			s.contents.script = false;
		}
	});

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, callback;
			return {
				send: function (_, complete) {
					script = jQuery("<script>").prop({
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", callback = function (evt) {
						script.remove();
						callback = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild(script[0]);
				},
				abort: function () {
					if (callback) {
						callback();
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// Force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {

				// If previous value didn't exist - remove it
				if (overwritten === undefined) {
					jQuery(window).removeProp(callbackName);

					// Otherwise restore preexisting value
				} else {
					window[callbackName] = overwritten;
				}

				// Save back as free
				if (s[callbackName]) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = function () {
		var body = document.implementation.createHTMLDocument("").body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	}();

	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (typeof data !== "string") {
			return [];
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if (!context) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if (support.createHTMLDocument) {
				context = document.implementation.createHTMLDocument("");

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement("base");
				base.href = document.location.href;
				context.head.appendChild(base);
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec(data);
		scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off > -1) {
			selector = stripAndCollapse(url.slice(off));
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && typeof params === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);

				// If the request succeeds, this function gets "data", "status", "jqXHR"
				// but they are ignored because response was set above.
				// If it fails, this function gets "jqXHR", "status", "error"
			}).always(callback && function (jqXHR, status) {
				self.each(function () {
					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
				});
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.pseudos.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	/**
  * Gets a window from an element
  */
	function getWindow(elem) {
		return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function (elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call(elem, i, jQuery.extend({}, curOffset));
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({
		offset: function (options) {

			// Preserve chaining for setter
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var docElem,
			    win,
			    rect,
			    doc,
			    elem = this[0];

			if (!elem) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if (!elem.getClientRects().length) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if (rect.width || rect.height) {
				doc = elem.ownerDocument;
				win = getWindow(doc);
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function () {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    elem = this[0],
			    parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if (jQuery.css(elem, "position") === "fixed") {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!jQuery.nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
					left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function () {
			return this.map(function () {
				var offsetParent = this.offsetParent;

				while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {
				var win = getWindow(elem);

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length);
		};
	});

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable);
			};
		});
	});

	jQuery.fn.extend({

		bind: function (types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function (types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function (selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function (selector, types, fn) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	jQuery.parseJSON = JSON.parse;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "It works from runoob222.js.";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "body {\r\n    background:url(" + __webpack_require__(6) + ") no-repeat center;\r\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _babelLoaderJquery = __webpack_require__(0);

var _babelLoaderJquery2 = _interopRequireDefault(_babelLoaderJquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(2);
// import './css/style.css';
document.write(__webpack_require__(1));

/***/ })
/******/ ]);