/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server-src/api/blogRouter.js":
/*!**************************************!*\
  !*** ./server-src/api/blogRouter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_Blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Blog */ \"./server-src/models/Blog.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// packages\n\n\n // router\n\nvar blogRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router(); // routes\n// @method POST\n// @route /api/blogs\n// @desc upload a blog to db\n// @access private\n\nblogRouter.post('/', function (req, res) {});\nblogRouter.get('/', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var blogs;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _models_Blog__WEBPACK_IMPORTED_MODULE_2__.default.find();\n\n          case 2:\n            blogs = _context.sent;\n            res.json(blogs);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogRouter);\n\n//# sourceURL=webpack://martin/./server-src/api/blogRouter.js?");

/***/ }),

/***/ "./server-src/api/fileRouter.js":
/*!**************************************!*\
  !*** ./server-src/api/fileRouter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware */ \"./server-src/middleware.js\");\n/* harmony import */ var _models_Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Video */ \"./server-src/models/Video.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// packages\n\n\n // router \n\nvar fileRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router(); //routes\n// @method POST\n// @route /api/files/videos\n// @desc upload a video to db\n// @access private\n\nfileRouter.post('/videos', _middleware__WEBPACK_IMPORTED_MODULE_1__.fileExists, /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$body, title, url, newVideo;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n\n            if (!req.file) {\n              _context.next = 3;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(209).json({\n              messages: [{\n                type: 'error'\n              }, {\n                message: 'A video with that name already exists'\n              }]\n            }));\n\n          case 3:\n            _req$body = req.body, title = _req$body.title, url = _req$body.url;\n            newVideo = new _models_Video__WEBPACK_IMPORTED_MODULE_2__.default({\n              title: title,\n              url: url\n            });\n            _context.next = 7;\n            return newVideo.save();\n\n          case 7:\n            return _context.abrupt(\"return\", res.status(201).json({\n              messages: [{\n                type: 'success'\n              }, {\n                message: 'Video successfully uploaded'\n              }]\n            }));\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(500).send('Something went wrong: ' + _context.t0.message));\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}()); // @method GET\n// @route /api/files/videos\n// @desc get all videos \n// @access public\n\nfileRouter.get('/videos', /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    var videos;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _models_Video__WEBPACK_IMPORTED_MODULE_2__.default.find();\n\n          case 3:\n            videos = _context2.sent;\n            res.json(videos.map(function (video) {\n              return {\n                title: video.title,\n                url: video.url\n              };\n            }));\n            _context2.next = 10;\n            break;\n\n          case 7:\n            _context2.prev = 7;\n            _context2.t0 = _context2[\"catch\"](0);\n            return _context2.abrupt(\"return\", res.status(500).send('Something went wrong: ' + _context2.t0.message));\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 7]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fileRouter);\n\n//# sourceURL=webpack://martin/./server-src/api/fileRouter.js?");

/***/ }),

/***/ "./server-src/config/db.js":
/*!*********************************!*\
  !*** ./server-src/config/db.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDB\": () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar connectDB = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var connection;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://test:test@cluster0.1ltcy.mongodb.net/still-special--martin-agunwa?retryWrites=true&w=majority\", {\n              useNewUrlParser: true,\n              useUnifiedTopology: true\n            });\n\n          case 3:\n            connection = _context.sent;\n            console.log('DB Connected: ' + connection.connection.db.databaseName);\n            _context.next = 11;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            console.error('Error connecting to DB: ' + _context.t0.message);\n            process.exit(1);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function connectDB() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://martin/./server-src/config/db.js?");

/***/ }),

/***/ "./server-src/middleware.js":
/*!**********************************!*\
  !*** ./server-src/middleware.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fileExists\": () => (/* binding */ fileExists)\n/* harmony export */ });\n/* harmony import */ var _models_Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Video */ \"./server-src/models/Video.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar fileExists = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var title, video;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            title = req.body.title;\n            _context.next = 4;\n            return _models_Video__WEBPACK_IMPORTED_MODULE_0__.default.findOne({\n              title: title.toLowerCase()\n            });\n\n          case 4:\n            video = _context.sent;\n            video ? req.file = video : req.file = null;\n            next();\n            _context.next = 12;\n            break;\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(500).send('Something went wrong: ' + _context.t0.message));\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 9]]);\n  }));\n\n  return function fileExists(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://martin/./server-src/middleware.js?");

/***/ }),

/***/ "./server-src/models/Blog.js":
/*!***********************************!*\
  !*** ./server-src/models/Blog.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar BlogSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: {\n    type: String,\n    required: true\n  },\n  images: [{\n    src: {\n      type: String,\n      required: true\n    },\n    alt: {\n      type: String,\n      required: true\n    }\n  }],\n  chunks: {\n    type: Array,\n    required: true\n  },\n  url: {\n    type: String,\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Blog', BlogSchema));\n\n//# sourceURL=webpack://martin/./server-src/models/Blog.js?");

/***/ }),

/***/ "./server-src/models/Video.js":
/*!************************************!*\
  !*** ./server-src/models/Video.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar VideoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: {\n    type: String,\n    required: true\n  },\n  url: {\n    type: String,\n    required: true\n  }\n});\nVideoSchema.pre('save', function () {\n  this.title = this.title.toLowerCase();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Video', VideoSchema));\n\n//# sourceURL=webpack://martin/./server-src/models/Video.js?");

/***/ }),

/***/ "./server-src/server.js":
/*!******************************!*\
  !*** ./server-src/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ignore_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ignore-styles */ \"ignore-styles\");\n/* harmony import */ var ignore_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ignore_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/App */ \"./shared/App.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/db */ \"./server-src/config/db.js\");\n/* harmony import */ var _api_fileRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/fileRouter */ \"./server-src/api/fileRouter.js\");\n/* harmony import */ var _api_blogRouter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/blogRouter */ \"./server-src/api/blogRouter.js\");\n// packages\n\n\n\n\n\n\n\n\n\n\n\n // app init\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json()); // server\n\nvar port = \"MISSING_ENV_VAR\".PORT || 4000;\nhttp__WEBPACK_IMPORTED_MODULE_1___default().createServer(app).listen(port, function () {\n  console.log(\"server running in \".concat(\"development\", \" on port \").concat(port));\n}); // db\n\n(0,_config_db__WEBPACK_IMPORTED_MODULE_9__.connectDB)(); // SPA routes\n\napp.get('/:var(about|about/cv|blog|blog/[1-9999]|campaigns|case-study|case-study/[1-9999])?', function (req, res) {\n  var indexPath = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, '../', 'public', 'index.html');\n  var appHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_6___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.StaticRouter, {\n    location: req.url,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_shared_App__WEBPACK_IMPORTED_MODULE_7__.default, null))); // inject stringified <App /> component into html file\n\n  fs__WEBPACK_IMPORTED_MODULE_3___default().readFile(indexPath, 'utf-8', function (err, data) {\n    if (err) {\n      console.error(err);\n      return res.status(500).send('Something went wrong, please check server logs');\n    }\n\n    return res.status(200).send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(appHTML, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static('public')); // file router\n\napp.use('/api/files', _api_fileRouter__WEBPACK_IMPORTED_MODULE_10__.default); // blog router\n\napp.use('/api/blogs', _api_blogRouter__WEBPACK_IMPORTED_MODULE_11__.default);\n\n//# sourceURL=webpack://martin/./server-src/server.js?");

/***/ }),

/***/ "./shared/App.js":
/*!***********************!*\
  !*** ./shared/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"./shared/components/Header.js\");\n/* harmony import */ var _components_pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/Home */ \"./shared/components/pages/Home.js\");\n/* harmony import */ var _components_pages_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/About */ \"./shared/components/pages/About.js\");\n/* harmony import */ var _components_pages_Campaigns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/Campaigns */ \"./shared/components/pages/Campaigns.js\");\n/* harmony import */ var _components_pages_CaseStudies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/CaseStudies */ \"./shared/components/pages/CaseStudies.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Footer */ \"./shared/components/Footer.js\");\n/* harmony import */ var _components_pages_Blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/Blog */ \"./shared/components/pages/Blog.js\");\n/* harmony import */ var _context_BlogContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context/BlogContext */ \"./shared/context/BlogContext.js\");\n/* harmony import */ var _context_VideoContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context/VideoContext */ \"./shared/context/VideoContext.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_BlogContext__WEBPACK_IMPORTED_MODULE_9__.BlogProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_VideoContext__WEBPACK_IMPORTED_MODULE_10__.VideoProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_pages_Home__WEBPACK_IMPORTED_MODULE_3__.default, {\n    theme: \"dark\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, {\n    theme: \"dark\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/about\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_pages_About__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/campaigns\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_VideoContext__WEBPACK_IMPORTED_MODULE_10__.VideoProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_pages_Campaigns__WEBPACK_IMPORTED_MODULE_5__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/case-study\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_pages_CaseStudies__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/blog\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_BlogContext__WEBPACK_IMPORTED_MODULE_9__.BlogProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_pages_Blog__WEBPACK_IMPORTED_MODULE_8__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, null)));\n}\n\n//# sourceURL=webpack://martin/./shared/App.js?");

/***/ }),

/***/ "./shared/components/Article.js":
/*!**************************************!*\
  !*** ./shared/components/Article.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Article)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentBlock */ \"./shared/components/ContentBlock.js\");\n\n\n\nfunction Article(_ref) {\n  var title = _ref.title,\n      hero = _ref.hero,\n      chunks = _ref.chunks,\n      children = _ref.children;\n  var history = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useHistory)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    window.scrollTo(0, 0);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__.default, {\n    justifyText: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return history.goBack();\n    },\n    className: \"btn btn--primary\"\n  }, \"Back\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"content__block__heading\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"By Martin C. Agunwa\"))), hero ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"hero\",\n    src: hero.src,\n    alt: hero.alt\n  }) : null, chunks ? chunks : null, children ? children : null);\n}\n\n//# sourceURL=webpack://martin/./shared/components/Article.js?");

/***/ }),

/***/ "./shared/components/ContentBlock.js":
/*!*******************************************!*\
  !*** ./shared/components/ContentBlock.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContentBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ContentBlock(_ref) {\n  var theme = _ref.theme,\n      quote = _ref.quote,\n      children = _ref.children,\n      media = _ref.media,\n      mediaPosition = _ref.mediaPosition,\n      justifyText = _ref.justifyText;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\".concat(quote ? \"content__block--quote\" : \"\", \" content__block  \").concat(theme ? \"content__block--\" + theme : \"\")\n  }, media && mediaPosition == 'left' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content__block__media\"\n  }, media.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: item.src,\n      alt: item.alt\n    });\n  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\".concat(justifyText ? \"justify\" : \"\", \" content__block__body \").concat(mediaPosition ? \"content__block__body--margin-\" + mediaPosition : \"\")\n  }, children), media && mediaPosition == 'right' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content__block__media\"\n  }, media.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: item.src,\n      alt: item.alt\n    });\n  })) : null);\n}\n\n//# sourceURL=webpack://martin/./shared/components/ContentBlock.js?");

/***/ }),

/***/ "./shared/components/ContentCard.js":
/*!******************************************!*\
  !*** ./shared/components/ContentCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContentCard)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player */ \"react-player\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // carouselStrip prop applies classes to style component if it forms part of a carousel strip\n// type applies classes to style component depending on if it contains an image or video (images link to the article in question, videos are just playable)\n\nfunction ContentCard(_ref) {\n  var theme = _ref.theme,\n      carouselStrip = _ref.carouselStrip,\n      type = _ref.type,\n      content = _ref.content,\n      title = _ref.title;\n  var history = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useHistory)();\n\n  function preventRightClick(e) {\n    e.preventDefault();\n  }\n\n  function redirect() {\n    type != 'video' ? history.push(content.url) : history.push('/campaigns');\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: redirect,\n    className: \"\".concat(title ? \"\" : \"content__card--no-title\", \" content__card \").concat(theme ? \"content__card--\" + theme : \"\", \" content__card--\").concat(type, \" \").concat(carouselStrip ? \"content__card--carousel\" : \"\")\n  }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"content__card__heading\"\n  }, title) : null, type == 'video' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_player__WEBPACK_IMPORTED_MODULE_1___default()), {\n    controls: true,\n    onContextMenu: preventRightClick,\n    className: \"content__card__video \".concat(carouselStrip ? \"content__card__video--carousel\" : \"\"),\n    url: content\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"\".concat(title ? \"\" : \"content__card__image--no-title\", \" content__card__image \").concat(carouselStrip ? \"content__card__image--carousel\" : \"\"),\n    src: content.src ? content.src : content.images[0].src,\n    alt: content.alt ? content.alt : content.images[0].alt\n  }));\n}\n\n//# sourceURL=webpack://martin/./shared/components/ContentCard.js?");

/***/ }),

/***/ "./shared/components/Footer.js":
/*!*************************************!*\
  !*** ./shared/components/Footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Footer(_ref) {\n  var theme = _ref.theme;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"footer__block footer__block--\".concat(theme)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"footer__container footer__container--\".concat(theme)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\xA9 \", new Date().getFullYear(), \" by Chukwuemeka Martin Agunwa\")));\n}\n\n//# sourceURL=webpack://martin/./shared/components/Footer.js?");

/***/ }),

/***/ "./shared/components/Header.js":
/*!*************************************!*\
  !*** ./shared/components/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_NavContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/NavContext */ \"./shared/context/NavContext.js\");\n/* harmony import */ var _nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/Nav */ \"./shared/components/nav/Nav.js\");\n/* harmony import */ var _nav_NavbarBrand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/NavbarBrand */ \"./shared/components/nav/NavbarBrand.js\");\n\n\n\n\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header__block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_nav_NavbarBrand__WEBPACK_IMPORTED_MODULE_3__.default, {\n    title: \"Chukwuemeka Martin Agunwa\",\n    subtitle: \"Think. Lead. Inspire\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_NavContext__WEBPACK_IMPORTED_MODULE_1__.NavProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_nav_Nav__WEBPACK_IMPORTED_MODULE_2__.default, null))));\n}\n\n//# sourceURL=webpack://martin/./shared/components/Header.js?");

/***/ }),

/***/ "./shared/components/Quote.js":
/*!************************************!*\
  !*** ./shared/components/Quote.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Quote)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentBlock */ \"./shared/components/ContentBlock.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Quote(_ref) {\n  var text = _ref.text,\n      theme = _ref.theme,\n      author = _ref.author;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_1__.default, {\n    theme: theme,\n    quote: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n    className: \"quotations quote__start\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faQuoteLeft,\n    size: \"4x\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"quote quote__text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", null, text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n    className: \"quotations quote__end\",\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faQuoteRight,\n    size: \"4x\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"quote quote__text quote__author\"\n  }, \"- \", author));\n}\n\n//# sourceURL=webpack://martin/./shared/components/Quote.js?");

/***/ }),

/***/ "./shared/components/SocialBar.js":
/*!****************************************!*\
  !*** ./shared/components/SocialBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SocialBar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../links */ \"./shared/links.js\");\n\n\n\nfunction SocialBar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"social__bar\"\n  }, _links__WEBPACK_IMPORTED_MODULE_2__.socials ? _links__WEBPACK_IMPORTED_MODULE_2__.socials.map(function (social) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      className: \"social\",\n      href: social.url,\n      target: \"_blank\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n      className: \"social\",\n      icon: social.icon,\n      size: social.size\n    }));\n  }) : null);\n}\n\n//# sourceURL=webpack://martin/./shared/components/SocialBar.js?");

/***/ }),

/***/ "./shared/components/carousel/AutoCarousel.js":
/*!****************************************************!*\
  !*** ./shared/components/carousel/AutoCarousel.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AutoCarousel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ \"react-responsive-carousel\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CarouselSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarouselSlide */ \"./shared/components/carousel/CarouselSlide.js\");\n/* harmony import */ var _assets_slides_20191102_160240_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/slides/20191102_160240.jpg */ \"./shared/assets/slides/20191102_160240.jpg\");\n/* harmony import */ var _assets_slides_20191116_100837_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/slides/20191116_100837.jpg */ \"./shared/assets/slides/20191116_100837.jpg\");\n/* harmony import */ var _assets_slides_20191116_123414_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/slides/20191116_123414.jpg */ \"./shared/assets/slides/20191116_123414.jpg\");\n/* harmony import */ var _assets_slides_20191116_123421_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/slides/20191116_123421.jpg */ \"./shared/assets/slides/20191116_123421.jpg\");\n/* harmony import */ var _assets_slides_20191207_083856_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/slides/20191207_083856.jpg */ \"./shared/assets/slides/20191207_083856.jpg\");\n/* harmony import */ var _assets_slides_20201016_175254_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/slides/20201016_175254.jpg */ \"./shared/assets/slides/20201016_175254.jpg\");\n/* harmony import */ var _assets_slides_20201016_175308_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/slides/20201016_175308.jpg */ \"./shared/assets/slides/20201016_175308.jpg\");\n/* harmony import */ var _assets_slides_20201016_175319_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/slides/20201016_175319.jpg */ \"./shared/assets/slides/20201016_175319.jpg\");\n/* harmony import */ var _assets_slides_DSC_0312_JPG__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/slides/DSC_0312.JPG */ \"./shared/assets/slides/DSC_0312.JPG\");\n/* harmony import */ var _assets_slides_DSC_0356_JPG__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/slides/DSC_0356.JPG */ \"./shared/assets/slides/DSC_0356.JPG\");\n/* harmony import */ var _assets_slides_DSC_0374_JPG__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/slides/DSC_0374.JPG */ \"./shared/assets/slides/DSC_0374.JPG\");\n/* harmony import */ var _assets_slides_DSC_0437_JPG__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/slides/DSC_0437.JPG */ \"./shared/assets/slides/DSC_0437.JPG\");\n/* harmony import */ var _assets_slides_DSC_0442_JPG__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/slides/DSC_0442.JPG */ \"./shared/assets/slides/DSC_0442.JPG\");\n/* harmony import */ var _assets_slides_IMG_20190128_WA0000_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/slides/IMG-20190128-WA0000.jpg */ \"./shared/assets/slides/IMG-20190128-WA0000.jpg\");\n/* harmony import */ var _assets_slides_IMG_20190307_WA0000_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/slides/IMG-20190307-WA0000.jpg */ \"./shared/assets/slides/IMG-20190307-WA0000.jpg\");\n/* harmony import */ var _assets_slides_IMG_20190307_WA0002_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/slides/IMG-20190307-WA0002.jpg */ \"./shared/assets/slides/IMG-20190307-WA0002.jpg\");\n/* harmony import */ var _assets_slides_IMG_20190626_WA0014_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/slides/IMG-20190626-WA0014.jpg */ \"./shared/assets/slides/IMG-20190626-WA0014.jpg\");\n/* harmony import */ var _assets_slides_IMG_20191102_WA0015_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/slides/IMG-20191102-WA0015.jpg */ \"./shared/assets/slides/IMG-20191102-WA0015.jpg\");\n/* harmony import */ var _assets_slides_IMG_20191102_WA0019_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/slides/IMG-20191102-WA0019.jpg */ \"./shared/assets/slides/IMG-20191102-WA0019.jpg\");\n/* harmony import */ var _assets_slides_IMG_20191107_WA0010_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/slides/IMG-20191107-WA0010.jpg */ \"./shared/assets/slides/IMG-20191107-WA0010.jpg\");\n/* harmony import */ var _assets_slides_IMG_20191201_WA0005_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../assets/slides/IMG-20191201-WA0005.jpg */ \"./shared/assets/slides/IMG-20191201-WA0005.jpg\");\n/* harmony import */ var _assets_slides_IMG_20200301_WA0000_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../assets/slides/IMG-20200301-WA0000.jpg */ \"./shared/assets/slides/IMG-20200301-WA0000.jpg\");\n/* harmony import */ var _assets_slides_IMG_20200731_WA0004_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../assets/slides/IMG-20200731-WA0004.jpg */ \"./shared/assets/slides/IMG-20200731-WA0004.jpg\");\n/* harmony import */ var _assets_slides_IMG_20201013_WA0019_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assets/slides/IMG-20201013-WA0019.jpg */ \"./shared/assets/slides/IMG-20201013-WA0019.jpg\");\n/* harmony import */ var _assets_slides_IMG_20201013_WA0026_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../assets/slides/IMG-20201013-WA0026.jpg */ \"./shared/assets/slides/IMG-20201013-WA0026.jpg\");\n/* harmony import */ var _context_BlogContext__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../context/BlogContext */ \"./shared/context/BlogContext.js\");\n/* harmony import */ var _context_VideoContext__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../context/VideoContext */ \"./shared/context/VideoContext.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction AutoCarousel(_ref) {\n  var theme = _ref.theme;\n  var blogs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_BlogContext__WEBPACK_IMPORTED_MODULE_29__.BlogContext);\n  var videos = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_VideoContext__WEBPACK_IMPORTED_MODULE_30__.VideoContext);\n  var images = [{\n    src: _assets_slides_20191102_160240_jpg__WEBPACK_IMPORTED_MODULE_4__.default,\n    alt: 'Martin standing with a team holding #ClaimingOurSpace signs'\n  }, {\n    src: _assets_slides_20191116_100837_jpg__WEBPACK_IMPORTED_MODULE_5__.default,\n    alt: 'Martin with a croud of people emceeing'\n  }, {\n    src: _assets_slides_20191116_123414_jpg__WEBPACK_IMPORTED_MODULE_6__.default,\n    alt: 'Martin with two other people broadcasting in a radio station'\n  }, {\n    src: _assets_slides_20191116_123421_jpg__WEBPACK_IMPORTED_MODULE_7__.default,\n    alt: 'Martin with two other people broadcasting in a radio station'\n  }, {\n    src: _assets_slides_20191207_083856_jpg__WEBPACK_IMPORTED_MODULE_8__.default,\n    alt: 'Selfshot of Martin at a road safety awareness event'\n  }, {\n    src: _assets_slides_20201016_175254_jpg__WEBPACK_IMPORTED_MODULE_9__.default,\n    alt: 'Martin holding a sign advocating against police brutality'\n  }, {\n    src: _assets_slides_20201016_175308_jpg__WEBPACK_IMPORTED_MODULE_10__.default,\n    alt: 'Martin holding a sign advocating against police brutality'\n  }, {\n    src: _assets_slides_20201016_175319_jpg__WEBPACK_IMPORTED_MODULE_11__.default,\n    alt: 'Martin holding a sign advocating against police brutality'\n  }, {\n    src: _assets_slides_DSC_0312_JPG__WEBPACK_IMPORTED_MODULE_12__.default,\n    alt: 'Martin speaking to an audience'\n  }, {\n    src: _assets_slides_DSC_0356_JPG__WEBPACK_IMPORTED_MODULE_13__.default,\n    alt: 'A photo of Martin with organisers of an event'\n  }, {\n    src: _assets_slides_DSC_0374_JPG__WEBPACK_IMPORTED_MODULE_14__.default,\n    alt: 'Martin speaking to the organisers of an event'\n  }, {\n    src: _assets_slides_DSC_0437_JPG__WEBPACK_IMPORTED_MODULE_15__.default,\n    alt: 'Martin at Jesus Kids\\' Home Nigeria'\n  }, {\n    src: _assets_slides_DSC_0442_JPG__WEBPACK_IMPORTED_MODULE_16__.default,\n    alt: 'Martin at Jesus Kids\\' Home Nigeria'\n  }, {\n    src: _assets_slides_IMG_20190128_WA0000_jpg__WEBPACK_IMPORTED_MODULE_17__.default,\n    alt: 'Martin speaking at an event'\n  }, {\n    src: _assets_slides_IMG_20190307_WA0000_jpg__WEBPACK_IMPORTED_MODULE_18__.default,\n    alt: 'Martin speaking at an event'\n  }, {\n    src: _assets_slides_IMG_20190307_WA0002_jpg__WEBPACK_IMPORTED_MODULE_19__.default,\n    alt: 'Martin speaking at an event'\n  }, {\n    src: _assets_slides_IMG_20190626_WA0014_jpg__WEBPACK_IMPORTED_MODULE_20__.default,\n    alt: 'Martin speaking at an event'\n  }, {\n    src: _assets_slides_IMG_20191102_WA0015_jpg__WEBPACK_IMPORTED_MODULE_21__.default,\n    alt: 'Martin planning #ClaimingOurSpace event'\n  }, {\n    src: _assets_slides_IMG_20191102_WA0019_jpg__WEBPACK_IMPORTED_MODULE_22__.default,\n    alt: 'Martin standing with a team holding #ClaimingOurSpace signs'\n  }, {\n    src: _assets_slides_IMG_20191107_WA0010_jpg__WEBPACK_IMPORTED_MODULE_23__.default,\n    alt: 'Martin planning #ClaimingOurSpace event'\n  }, {\n    src: _assets_slides_IMG_20191201_WA0005_jpg__WEBPACK_IMPORTED_MODULE_24__.default,\n    alt: 'Martin speaking at an event'\n  }, {\n    src: _assets_slides_IMG_20200301_WA0000_jpg__WEBPACK_IMPORTED_MODULE_25__.default,\n    alt: 'Martin standing on a hill with a team of people'\n  }, {\n    src: _assets_slides_IMG_20200731_WA0004_jpg__WEBPACK_IMPORTED_MODULE_26__.default,\n    alt: 'Martin speaking at an event'\n  }, {\n    src: _assets_slides_IMG_20201013_WA0019_jpg__WEBPACK_IMPORTED_MODULE_27__.default,\n    alt: 'Martin speaking at an event'\n  }, {\n    src: _assets_slides_IMG_20201013_WA0026_jpg__WEBPACK_IMPORTED_MODULE_28__.default,\n    alt: 'Martin speaking at an event'\n  }];\n\n  function generateSlides() {\n    var max = Math.max(blogs.length, videos.length, images.length);\n    var slides = [];\n\n    for (var x = 0; x < max; x++) {\n      var randomBlogIndex = Math.floor(Math.random() * blogs.length);\n      var randomImageIndex = Math.floor(Math.random() * images.length);\n      slides.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CarouselSlide__WEBPACK_IMPORTED_MODULE_3__.default, {\n        theme: theme,\n        blog: blogs[randomBlogIndex],\n        video: videos.filter(function (video) {\n          return video.title == 'still special - visualised audio';\n        })[0],\n        image: images[randomImageIndex]\n      }));\n    }\n\n    return slides;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n    autoPlay: true,\n    transitionTime: 1500,\n    interval: 10000,\n    stopOnHover: false,\n    showArrows: true,\n    showStatus: false,\n    showThumbs: false,\n    showIndicators: false,\n    infiniteLoop: true\n  }, videos && blogs ? generateSlides() : null);\n}\n\n//# sourceURL=webpack://martin/./shared/components/carousel/AutoCarousel.js?");

/***/ }),

/***/ "./shared/components/carousel/CarouselSlide.js":
/*!*****************************************************!*\
  !*** ./shared/components/carousel/CarouselSlide.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CarouselSlide)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContentCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContentCard */ \"./shared/components/ContentCard.js\");\n\n\nfunction CarouselSlide(_ref) {\n  var theme = _ref.theme,\n      blog = _ref.blog,\n      video = _ref.video,\n      image = _ref.image;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"carousel__strip\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentCard__WEBPACK_IMPORTED_MODULE_1__.default, {\n    carouselStrip: true,\n    theme: theme,\n    title: blog.title,\n    type: \"image\",\n    content: blog\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentCard__WEBPACK_IMPORTED_MODULE_1__.default, {\n    carouselStrip: true,\n    theme: theme,\n    title: video.title,\n    type: \"video\",\n    content: video.url\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentCard__WEBPACK_IMPORTED_MODULE_1__.default, {\n    carouselStrip: true,\n    theme: theme,\n    type: \"image\",\n    content: image\n  }));\n}\n\n//# sourceURL=webpack://martin/./shared/components/carousel/CarouselSlide.js?");

/***/ }),

/***/ "./shared/components/carousel/CarouselStrip.js":
/*!*****************************************************!*\
  !*** ./shared/components/carousel/CarouselStrip.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CarouselStrip)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AutoCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoCarousel */ \"./shared/components/carousel/AutoCarousel.js\");\n\n\nfunction CarouselStrip(_ref) {\n  var theme = _ref.theme;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"carousel__block carousel__block--\".concat(theme)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"carousel__block__heading\"\n  }, \"Blogs and Campaign Videos\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AutoCarousel__WEBPACK_IMPORTED_MODULE_1__.default, {\n    theme: theme\n  }));\n}\n\n//# sourceURL=webpack://martin/./shared/components/carousel/CarouselStrip.js?");

/***/ }),

/***/ "./shared/components/nav/MobileNav.js":
/*!********************************************!*\
  !*** ./shared/components/nav/MobileNav.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MobileNav)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_NavContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/NavContext */ \"./shared/context/NavContext.js\");\n/* harmony import */ var _SocialBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SocialBar */ \"./shared/components/SocialBar.js\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar */ \"./shared/components/nav/NavBar.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction MobileNav() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_NavContext__WEBPACK_IMPORTED_MODULE_1__.NavContext),\n      _useContext2 = _slicedToArray(_useContext, 2),\n      mobileNavOpen = _useContext2[0],\n      setMobileNavOpen = _useContext2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: function onClick() {\n      return setMobileNavOpen(false);\n    },\n    className: \"modal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mobile__nav__container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavBar__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SocialBar__WEBPACK_IMPORTED_MODULE_2__.default, null)));\n}\n\n//# sourceURL=webpack://martin/./shared/components/nav/MobileNav.js?");

/***/ }),

/***/ "./shared/components/nav/Nav.js":
/*!**************************************!*\
  !*** ./shared/components/nav/Nav.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nav)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SocialBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SocialBar */ \"./shared/components/SocialBar.js\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ \"./shared/components/nav/NavBar.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _MobileNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileNav */ \"./shared/components/nav/MobileNav.js\");\n/* harmony import */ var _context_NavContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/NavContext */ \"./shared/context/NavContext.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction Nav() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( false ? 0 : null),\n      _useState2 = _slicedToArray(_useState, 2),\n      screenWidth = _useState2[0],\n      setScreenWidth = _useState2[1];\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_NavContext__WEBPACK_IMPORTED_MODULE_6__.NavContext),\n      _useContext2 = _slicedToArray(_useContext, 2),\n      mobileNavOpen = _useContext2[0],\n      setMobileNavOpen = _useContext2[1];\n\n  function toggleNav() {\n    setMobileNavOpen(!mobileNavOpen);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"navbar__nav\"\n  }, screenWidth && screenWidth < 1000 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n    onClick: toggleNav,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBars,\n    size: \"2x\"\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SocialBar__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavBar__WEBPACK_IMPORTED_MODULE_2__.default, null)), mobileNavOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MobileNav__WEBPACK_IMPORTED_MODULE_5__.default, null) : null);\n}\n\n//# sourceURL=webpack://martin/./shared/components/nav/Nav.js?");

/***/ }),

/***/ "./shared/components/nav/NavBar.js":
/*!*****************************************!*\
  !*** ./shared/components/nav/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavItem */ \"./shared/components/nav/NavItem.js\");\n/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../links */ \"./shared/links.js\");\n\n\n\nfunction NavBar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"nav__links\"\n  }, _links__WEBPACK_IMPORTED_MODULE_2__.routes.map(function (route) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavItem__WEBPACK_IMPORTED_MODULE_1__.default, {\n      link: route\n    });\n  }));\n}\n\n//# sourceURL=webpack://martin/./shared/components/nav/NavBar.js?");

/***/ }),

/***/ "./shared/components/nav/NavItem.js":
/*!******************************************!*\
  !*** ./shared/components/nav/NavItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavItem)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction NavItem(_ref) {\n  var link = _ref.link;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      dropdownOpen = _useState2[0],\n      setDropdownOpen = _useState2[1];\n\n  var match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useRouteMatch)();\n\n  function toggleDropdown(e) {\n    e.type == 'mouseover' ? setDropdownOpen(true) : setDropdownOpen(false);\n  }\n\n  function setActiveClass() {\n    return link.path == match.url ? 'nav__link--active' : '';\n  }\n\n  function renderLink(link) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      onMouseLeave: toggleDropdown,\n      className: \"nav__link--dropdown-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n      onMouseOver: toggleDropdown,\n      exact: true,\n      to: link.path,\n      className: \"nav__link \".concat(setActiveClass())\n    }, link.text), link.dropdown && dropdownOpen ? link.dropdown.map(function (dropdownLink) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n        exact: true,\n        to: dropdownLink.path,\n        className: \"nav__link nav__link--dropdown\"\n      }, dropdownLink.text);\n    }) : null);\n  }\n\n  return renderLink(link);\n}\n\n//# sourceURL=webpack://martin/./shared/components/nav/NavItem.js?");

/***/ }),

/***/ "./shared/components/nav/NavbarBrand.js":
/*!**********************************************!*\
  !*** ./shared/components/nav/NavbarBrand.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavbarBrand)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_Martin_Podcast_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/Martin-Podcast.png */ \"./shared/assets/Martin-Podcast.png\");\n\n\n\nfunction NavbarBrand(_ref) {\n  var title = _ref.title,\n      subtitle = _ref.subtitle;\n  var history = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useHistory)();\n\n  function goHome() {\n    history.push('/');\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: goHome,\n    className: \"navbar__brand\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"logo\",\n    src: _assets_Martin_Podcast_png__WEBPACK_IMPORTED_MODULE_2__.default,\n    alt: \"Website Logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"logo-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, subtitle)));\n}\n\n//# sourceURL=webpack://martin/./shared/components/nav/NavbarBrand.js?");

/***/ }),

/***/ "./shared/components/pages/About.js":
/*!******************************************!*\
  !*** ./shared/components/pages/About.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContentBlock */ \"./shared/components/ContentBlock.js\");\n/* harmony import */ var _assets_b90d69_1c81c3e0c0ee49408c5ee2e42ff0ed99_mv2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/b90d69_1c81c3e0c0ee49408c5ee2e42ff0ed99_mv2.jpg */ \"./shared/assets/b90d69_1c81c3e0c0ee49408c5ee2e42ff0ed99_mv2.jpg\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CV__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CV */ \"./shared/components/pages/CV.js\");\n\n\n\n\n\nfunction About() {\n  var match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useRouteMatch)();\n  var heroImage = {\n    src: _assets_b90d69_1c81c3e0c0ee49408c5ee2e42ff0ed99_mv2_jpg__WEBPACK_IMPORTED_MODULE_2__.default,\n    alt: 'Headshot of Martin Agunwa'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    exact: true,\n    path: match.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_1__.default, {\n    theme: \"light\",\n    media: [heroImage],\n    mediaPosition: \"right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"content__block__heading\"\n  }, \"ABOUT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Chukwuemeka Martin Agunwa\"), \" is a Public Relations, Branding and Strategic Communications professional with years of cognate experience working with non-profit Non-Government Organisations in Nigeria where he has served as Programmes and Communications Consultant.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"At Strategic Assembly for Leadership Thrust (SALT) Initiative, he was responsible for organising the Group's periodic town hall meetings aimed at spreading a campaign of positive social value reorientation. At Lifeline where he worked for a cumulative 7-year period, he rose to become the Executive Director and led several road safety awaremess campaigns whilst also responsible for the general administration of the organisation. \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"In 2017, he co-founded \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"Amara Consults Nigeria Ltd\"), \" - a creative communications boutique that offers PR campaign, branding, copywriting, media relations and allied creative communications services to clients.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Chukwuemeka is a Humanist, Social Advocate and a lover of art.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"He holds a Bachelor Degree in Mass Communication from the University of Benin, Nigeria and an MA. Public Relations and Strategic Communications from Leeds Beckett University, Leeds, UK. He is an Associate member of the Nigerian Institute of Public Relations and the Institute of Customer Relationship Management.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: match.url + '/cv',\n    className: \"btn btn--primary\"\n  }, \"Learn More\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: match.url + '/cv'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CV__WEBPACK_IMPORTED_MODULE_4__.default, null)));\n}\n\n//# sourceURL=webpack://martin/./shared/components/pages/About.js?");

/***/ }),

/***/ "./shared/components/pages/Blog.js":
/*!*****************************************!*\
  !*** ./shared/components/pages/Blog.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blog)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ContentBlock */ \"./shared/components/ContentBlock.js\");\n/* harmony import */ var _ContentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContentCard */ \"./shared/components/ContentCard.js\");\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Article */ \"./shared/components/Article.js\");\n/* harmony import */ var _context_BlogContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/BlogContext */ \"./shared/context/BlogContext.js\");\n\n\n\n\n\n\nfunction Blog() {\n  var blogs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_BlogContext__WEBPACK_IMPORTED_MODULE_5__.BlogContext);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/blog\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"content__block__heading\"\n  }, \"BLOG\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content__card__container\"\n  }, blogs ? blogs.map(function (blog) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n      type: \"image\",\n      title: blog.title,\n      content: blog\n    });\n  }) : null))), blogs ? blogs.map(function (blog) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n      exact: true,\n      path: blog.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Article__WEBPACK_IMPORTED_MODULE_4__.default, {\n      title: blog.title,\n      hero: blog.images[0],\n      chunks: blog.chunks\n    }));\n  }) : null);\n}\n\n//# sourceURL=webpack://martin/./shared/components/pages/Blog.js?");

/***/ }),

/***/ "./shared/components/pages/CV.js":
/*!***************************************!*\
  !*** ./shared/components/pages/CV.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CV)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContentBlock */ \"./shared/components/ContentBlock.js\");\n/* harmony import */ var _assets_CV_2_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/CV-2.pdf */ \"./shared/assets/CV-2.pdf\");\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pdf */ \"react-pdf\");\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pdf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_pdf_dist_esm_Page_AnnotationLayer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pdf/dist/esm/Page/AnnotationLayer.css */ \"react-pdf/dist/esm/Page/AnnotationLayer.css\");\n/* harmony import */ var react_pdf_dist_esm_Page_AnnotationLayer_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_pdf_dist_esm_Page_AnnotationLayer_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nreact_pdf__WEBPACK_IMPORTED_MODULE_3__.pdfjs.GlobalWorkerOptions.workerSrc = \"//cdnjs.cloudflare.com/ajax/libs/pdf.js/\".concat(react_pdf__WEBPACK_IMPORTED_MODULE_3__.pdfjs.version, \"/pdf.worker.js\");\n\n\nfunction CV() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      numPages = _useState2[0],\n      setNumPages = _useState2[1];\n\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();\n  var options = {\n    cMapUrl: 'cmaps/',\n    cMapPacked: true\n  };\n\n  function onLoadSuccess(_ref) {\n    var numPages = _ref.numPages;\n    setNumPages(numPages);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return history.goBack();\n    },\n    className: \"btn btn--primary\"\n  }, \"Back\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"content__block__heading\"\n  }, \"CV\"),  false ? /*#__PURE__*/0 : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n    to: '/' + _assets_CV_2_pdf__WEBPACK_IMPORTED_MODULE_2__.default.split('/')[3],\n    download: \"martin-agunwa-cv.pdf\",\n    target: \"_blank\",\n    className: \"btn btn--primary\"\n  }, \"Download\"));\n}\n\n//# sourceURL=webpack://martin/./shared/components/pages/CV.js?");

/***/ }),

/***/ "./shared/components/pages/Campaigns.js":
/*!**********************************************!*\
  !*** ./shared/components/pages/Campaigns.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Campaigns)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_VideoContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/VideoContext */ \"./shared/context/VideoContext.js\");\n/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ContentBlock */ \"./shared/components/ContentBlock.js\");\n/* harmony import */ var _ContentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContentCard */ \"./shared/components/ContentCard.js\");\n\n\n\n\nfunction Campaigns() {\n  var videos = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_VideoContext__WEBPACK_IMPORTED_MODULE_1__.VideoContext);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"content__block__heading\"\n  }, \"STILL SPECIAL CAMPAIGN\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", null, \"Advocacy campaign to raise awareness about special needs children (autism, cerebral palsy, down syndrome and other cognitive development sufferers) in Nigeria.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Unfortunately, there still exists widespread ignorance in many parts of Nigeria as it relates to children suffering various forms of cognitive disabilities - autism, cerebral palsy, down syndrome among others.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"it is very sad to see that these special kids in most instances are not only discriminated against or abused but are also being killed in many communities due to ignorant beliefs that they are curses.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"This campaign seeks to call attention to the plight of special needs children in Nigeria and makes a case for an end to their stigmatization while calling for their equal integration into society.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content__card__container\"\n  }, videos ? videos.map(function (video) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n      type: \"video\",\n      title: video.title,\n      content: video.url\n    });\n  }) : null));\n}\n\n//# sourceURL=webpack://martin/./shared/components/pages/Campaigns.js?");

/***/ }),

/***/ "./shared/components/pages/CaseStudies.js":
/*!************************************************!*\
  !*** ./shared/components/pages/CaseStudies.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CaseStudies)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ContentBlock */ \"./shared/components/ContentBlock.js\");\n/* harmony import */ var _ContentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContentCard */ \"./shared/components/ContentCard.js\");\n/* harmony import */ var _assets_Lekki_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/Lekki.png */ \"./shared/assets/Lekki.png\");\n/* harmony import */ var _assets_Lekki_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/Lekki-2.png */ \"./shared/assets/Lekki-2.png\");\n/* harmony import */ var _assets_Lekki_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/Lekki-3.png */ \"./shared/assets/Lekki-3.png\");\n/* harmony import */ var _assets_Lekki_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/Lekki-4.png */ \"./shared/assets/Lekki-4.png\");\n/* harmony import */ var _assets_Harmattan_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/Harmattan.png */ \"./shared/assets/Harmattan.png\");\n/* harmony import */ var _assets_Nivea_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/Nivea-1.png */ \"./shared/assets/Nivea-1.png\");\n/* harmony import */ var _assets_Nivea_2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/Nivea-2.png */ \"./shared/assets/Nivea-2.png\");\n/* harmony import */ var _assets_Harmattan_2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/Harmattan-2.png */ \"./shared/assets/Harmattan-2.png\");\n/* harmony import */ var _assets_Nivea_testemonial_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/Nivea-testemonial-1.png */ \"./shared/assets/Nivea-testemonial-1.png\");\n/* harmony import */ var _assets_Nivea_testemonial_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/Nivea-testemonial-2.png */ \"./shared/assets/Nivea-testemonial-2.png\");\n/* harmony import */ var _assets_Twitter_1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/Twitter-1.png */ \"./shared/assets/Twitter-1.png\");\n/* harmony import */ var _assets_Twitter_2_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/Twitter-2.png */ \"./shared/assets/Twitter-2.png\");\n/* harmony import */ var _assets_Insta_1_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/Insta-1.png */ \"./shared/assets/Insta-1.png\");\n/* harmony import */ var _assets_Insta_2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/Insta-2.png */ \"./shared/assets/Insta-2.png\");\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Article */ \"./shared/components/Article.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction CaseStudies() {\n  var match = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useRouteMatch)();\n  var caseStudies = [{\n    title: '100 days since Lekki shooting',\n    images: [{\n      src: _assets_Lekki_png__WEBPACK_IMPORTED_MODULE_4__.default,\n      alt: 'Protesters in Lekki'\n    }, {\n      src: _assets_Lekki_2_png__WEBPACK_IMPORTED_MODULE_5__.default,\n      alt: 'Protesters behind barriers'\n    }, {\n      src: _assets_Lekki_3_png__WEBPACK_IMPORTED_MODULE_6__.default,\n      alt: '\\'We want Justice\\' poster'\n    }, {\n      src: _assets_Lekki_4_png__WEBPACK_IMPORTED_MODULE_7__.default,\n      alt: 'Protesters holding signs'\n    }],\n    url: match.url + '/1'\n  }, {\n    title: 'Breakup with Harmattan',\n    images: [{\n      src: _assets_Harmattan_png__WEBPACK_IMPORTED_MODULE_8__.default,\n      alt: 'Done with Dryness campaign photo'\n    }, {\n      src: _assets_Nivea_1_png__WEBPACK_IMPORTED_MODULE_9__.default,\n      alt: 'Nivea blog post'\n    }, {\n      src: _assets_Nivea_2_png__WEBPACK_IMPORTED_MODULE_10__.default,\n      alt: 'Nivea blog post'\n    }, {\n      src: _assets_Harmattan_2_png__WEBPACK_IMPORTED_MODULE_11__.default,\n      alt: 'Woman posing with Nivea products'\n    }, {\n      src: _assets_Nivea_testemonial_1_png__WEBPACK_IMPORTED_MODULE_12__.default,\n      alt: 'Joel Pandora (entrepreneur)\\'s testemonial'\n    }, {\n      src: _assets_Nivea_testemonial_2_png__WEBPACK_IMPORTED_MODULE_13__.default,\n      alt: 'Comfort Olatunde (Marketing and Brand Communication Strategist)\\'s testemonial'\n    }, {\n      src: _assets_Twitter_1_png__WEBPACK_IMPORTED_MODULE_14__.default,\n      alt: 'Twitter users lambasting the campaign'\n    }, {\n      src: _assets_Twitter_2_png__WEBPACK_IMPORTED_MODULE_15__.default,\n      alt: 'Twitter users lambasting the campaign'\n    }, {\n      src: _assets_Insta_1_png__WEBPACK_IMPORTED_MODULE_16__.default,\n      alt: 'A man posing for #donewithdryness'\n    }, {\n      src: _assets_Insta_2_png__WEBPACK_IMPORTED_MODULE_17__.default,\n      alt: 'A man posing for #donewithdryness'\n    }],\n    url: match.url + '/2'\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: match.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"content__block__heading\"\n  }, \"CASE STUDIES\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content__card__container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: \"image\",\n    title: caseStudies[0].title,\n    content: caseStudies[0]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n    type: \"image\",\n    title: caseStudies[1].title,\n    content: caseStudies[1]\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: match.url + '/1'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Article__WEBPACK_IMPORTED_MODULE_18__.default, {\n    title: caseStudies[0].title + ' – AMNESTY CAMPAIGNS JUSTICE FOR VICTIMS',\n    hero: caseStudies[0].images[0]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"100 days after the shooting of unarmed protesters at the Lekki tollgate plaza on the night of 20 October, 2020, \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.amnesty.org/en/countries/africa/nigeria/\"\n  }, \"Amnesty International, Nigeria\"), \" launched a digital media campaign entitled \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.amnesty.org/en/latest/news/2021/01/nigeria-denials-and-cover-up-mark-100-days-since-lekki-shooting/\"\n  }, \"\\u201CWe Want Justice: 100 Days Since Lekki Shooting\\u201D\"), \" to commemorate an event the Human Rights watchdog describes as a dark veil in Nigeria\\u2019s history.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[0].images[1].src,\n    alt: caseStudies[0].images[1].alt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"In a \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.amnesty.org/en/latest/news/2021/01/nigeria-denials-and-cover-up-mark-100-days-since-lekki-shooting/\"\n  }, \"press statement\"), \" published via the organization\\u2019s website, Amnesty International, Nigeria stated that the objective of the campaign is to call attention to the fact that 100 days since the shooting of #Endsars protesters at the Lekki tollgate plaza, Lagos, Nigeria victims are yet to receive justice. Also, #Endsars protesters still face serious political intimidation and no concrete police reforms have been made.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"To drive this campaign, Amnesty has promoted a \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.instagram.com/p/CLETjCKnZET/?igshid=kawkbx09wjez\"\n  }, \"video\"), \" that features young activists and celebrities including Seun Kuti, DJ Cuppy, Jemima Osunde and Mayorkun. The video has so far reached over 2 million people across Instagram and Twitter. However, some reviewers have criticized its use of only young people in driving the campaign. In so doing, it reduces the impact of the Lekki tollgate shooting to something suffered only by young people. Joseph Ahgo, Graphic Designer and Social media Manager for Lifeline Care Association expressed that \\u201Ca lot of parents suffered loss of their children and could be battling depression and other mental health issues\\u201D.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[0].images[2].src,\n    alt: caseStudies[0].images[2].alt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Speaking with Nkem Okwuogu, Digital Communications Manager for Amnesty International, Nigeria, she said that the campaign is in fact a call to entrenching an \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.instagram.com/p/CKl_KW2F1-2/?igshid=14h1df1fk1r7\"\n  }, \"effective justice system for all\"), \" which the #Endsars incidence has once again reiterated. However, they do not want to downplay the fact that young people were indeed at the center of the #Endsars campaign and were the immediate victims of the Lekki shooting.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", null, \"\\u201CAmnesty International has consistently led the call for respect for human rights and justice where those rights have been trampled upon whether by the state institutions or individuals. The Endsars protest was evidently a cause championed by young Nigerians with solidarity from across society. We must however, recognize that they were the immediate victims of both the ill addressed by the protest and the shooting of 20th October, 2020.\\u201D\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[0].images[3].src,\n    alt: caseStudies[0].images[3].alt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The campaign is a strong statement in the demand for justice for victims of Lekki tollgate shooting and an \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.amnesty.org/en/get-involved/take-action/nigeria-end-impunity-for-police-brutality-end-sars/\"\n  }, \"open petition\"), \" is already been signed to impress upon President Buhari and Attorney General, Abubakar Malami to expedite justice and reform the Police.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: match.url + '/2'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Article__WEBPACK_IMPORTED_MODULE_18__.default, {\n    title: \"#BreakupWithHarmattan \\u2013 Nivea\\u2019s Harmattan Season Skin Care Campaign\",\n    hero: caseStudies[1].images[0]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The harmattan season which usually occurs towards the end of the year and dovetailing to the first quarter of the new year in Nigeria and some other parts of the world is characterized by dry winds and dusty atmosphere. A typical feature of this weather is dry skin and sometimes white patches and cracked lips. It was this mix that was at the center of Nivea\\u2019s #BreakupWithHarmattan campaign.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Towards the last quarter of the year 2020, \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://en.wikipedia.org/wiki/Nivea\"\n  }, \"Nivea\"), \" launched the #BreakupWithHarmattan campaign in Nigeria after earlier running it in Ghana. The campaign ran under other similar copies as #DoneWithDryness and #Harmattan can\\u2019t touch this. The main catch of the campaign was a 10-episode mini drama series published consecutively on \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.youtube.com/watch?v=i3Jzm9u2h5E\"\n  }, \"YouTube\"), \", Facebook and \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.instagram.com/p/CIh_fq0jy1W/\"\n  }, \"Instagram\"), \". The series follows Dalia and her tumultuous relationship with Dusty who is a metaphorical representation of harmattan. Dalia earlier on accepts the proposal of Dusty but soon begins to experience dry skin and cracked lips. With the intervention of her imaginary friend, Dorcas who introduces her to Nivea skincare products she is eventually able to keep Dusty (harmattan) away.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[1].images[1].src,\n    alt: caseStudies[1].images[1].alt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[1].images[2].src,\n    alt: caseStudies[1].images[2].alt\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"In a statement by Nivea introducing the campaign, it is clear that part of the essence of the campaign is the promotion of their new range of harmattan products \\u2013 Nivea Nourishing Cocoa, Nivea Men Revitalizing and Nivea Rich Nourishing. In doing so, it takes advantage of Nigerians\\u2019 sensitivity to the harsh harmattan weather.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[1].images[3].src,\n    alt: caseStudies[1].images[3].alt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Nivea has over 23.5m followers on Facebook while \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.nivea.com.ng/?\"\n  }, \"Nivea Nigeria\"), \" on Instagram as \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.instagram.com/nivea_ng/\"\n  }, \"@nivea_ng\"), \" has over 125,000 followers. Each episode of the campaign series on their \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.youtube.com/channel/UCV1LUA1r8N3haGSlRBGOFng\"\n  }, \"YouTube channel\"), \" received an average 400,000+ views in addition to views on Instagram and Facebook. However, the campaign received mixed reactions from a cross-section of the Nigerian audience. Responses on the \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://cultureintelligence.yafri.ca\"\n  }, \"Culture Intelligence\"), \" review of the campaign indicate praise for its brilliance in presenting a phenomenon as mundane as weather in a manner that is very relatable. It must also be noted that that each of episode was on average less than a minute thereby making it easy for viewers to snack on and each could pass as advert material in themselves. The campaign was also praised for its timing, considering that it was rolled out just before the beginning of the harmattan season.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[1].images[4].src,\n    alt: caseStudies[1].images[4].alt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[1].images[5].src,\n    alt: caseStudies[1].images[5].alt\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"On the other hand, the campaign was criticized for its persistent recourse to mundane stereotypes. In this sense, the campaign followed same pattern of situating the message within a romantic relationship between a man and a woman. Some Twitter users also lamented the its weak storyline alluding to sudden cuts to the climax in the drama.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[1].images[6].src,\n    alt: caseStudies[1].images[6].alt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[1].images[7].src,\n    alt: caseStudies[1].images[7].alt\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The hashtag approach to the campaign which was deployed by way of requesting social media users to \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    target: \"_blank\",\n    href: \"https://www.instagram.com/p/CH8zbvGFvpe/\"\n  }, \"post a picture of themselves holding up a Nivea product\"), \" and including any of the #BreakupWithHarmattan or #DoneWithDryness hashtags was not as viral. Both hashtags pooled less than 600 posts cumulatively.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[1].images[8].src,\n    alt: caseStudies[1].images[8].alt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: caseStudies[1].images[9].src,\n    alt: caseStudies[1].images[9].alt\n  })))));\n}\n\n//# sourceURL=webpack://martin/./shared/components/pages/CaseStudies.js?");

/***/ }),

/***/ "./shared/components/pages/Home.js":
/*!*****************************************!*\
  !*** ./shared/components/pages/Home.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContentBlock */ \"./shared/components/ContentBlock.js\");\n/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Quote */ \"./shared/components/Quote.js\");\n/* harmony import */ var _assets_thumbnail_DSC_0263_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/thumbnail_DSC_0263.jpg */ \"./shared/assets/thumbnail_DSC_0263.jpg\");\n/* harmony import */ var _carousel_CarouselStrip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carousel/CarouselStrip */ \"./shared/components/carousel/CarouselStrip.js\");\n\n\n\n\n\nfunction Home() {\n  var heroImage = {\n    src: _assets_thumbnail_DSC_0263_jpg__WEBPACK_IMPORTED_MODULE_3__.default,\n    alt: 'Headshot of Martin Agunwa'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentBlock__WEBPACK_IMPORTED_MODULE_1__.default, {\n    theme: \"dark\",\n    media: [heroImage],\n    mediaPosition: \"right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"text-large\"\n  }, \"Public relations professional with a good grasp of marketing communications, event planning, corporate messaging and strategic branding. Possesses excellent knowledge of organization and people management as well as exceptional writing, speaking and editing skills and strong work ethic.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Quote__WEBPACK_IMPORTED_MODULE_2__.default, {\n    text: \"Live for yourself and you will live in vain; Live for others and you will live again.\",\n    author: \"Bob Marley\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carousel_CarouselStrip__WEBPACK_IMPORTED_MODULE_4__.default, {\n    theme: \"dark\"\n  }));\n}\n\n//# sourceURL=webpack://martin/./shared/components/pages/Home.js?");

/***/ }),

/***/ "./shared/context/BlogContext.js":
/*!***************************************!*\
  !*** ./shared/context/BlogContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlogContext\": () => (/* binding */ BlogContext),\n/* harmony export */   \"BlogProvider\": () => (/* binding */ BlogProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_melancholy_of_unknown_selves_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/melancholy-of-unknown-selves.jpg */ \"./shared/assets/melancholy-of-unknown-selves.jpg\");\n/* harmony import */ var _assets_These_filtered_filthy_sound_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/These-filtered-filthy-sound.jpg */ \"./shared/assets/These-filtered-filthy-sound.jpg\");\n/* harmony import */ var _assets_I_feel_sorry_for_the_racist_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/I-feel-sorry-for-the-racist.png */ \"./shared/assets/I-feel-sorry-for-the-racist.png\");\n/* harmony import */ var _assets_I_Dont_Like_the_Knee_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/I-Dont-Like-the-Knee.jpg */ \"./shared/assets/I-Dont-Like-the-Knee.jpg\");\n/* harmony import */ var _assets_troubled_world_and_the_study_of_public_relations_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/troubled-world-and-the-study-of-public-relations.jpg */ \"./shared/assets/troubled-world-and-the-study-of-public-relations.jpg\");\n/* harmony import */ var _assets_Ticking_time_bomb_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/Ticking-time-bomb.jpg */ \"./shared/assets/Ticking-time-bomb.jpg\");\n/* harmony import */ var _assets_Off_the_stage_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/Off-the-stage.jpg */ \"./shared/assets/Off-the-stage.jpg\");\n/* harmony import */ var _assets_words_have_power_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/words-have-power.jpg */ \"./shared/assets/words-have-power.jpg\");\n\n\n\n\n\n\n\n\n\nvar BlogContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nfunction BlogProvider(_ref) {\n  var children = _ref.children;\n  var blogs = [{\n    title: 'A melancholy of unknown selves',\n    images: [{\n      src: _assets_melancholy_of_unknown_selves_jpg__WEBPACK_IMPORTED_MODULE_1__.default,\n      alt: 'A woman staring at her reflection in her mobile phone screen'\n    }],\n    chunks: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"For many who have been asked the question, who are you? I am sure a simple reply with a name sufficed. That answer seems sufficient but others may bother to include other status acquired by way of family background, education, marriage, religious/socio-political influence where the occasion demands. So while it seems easy to produce words in the likeness of the above when confronted with questions about one's self, when asked what was the most difficult thing, Ancient Greek Philosopher, Thales replied \\\"to know thyself\\\".\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\\"(Man) know thyself\\\" an adage commonly attributed to Greek sage Socrates but according to other scholars was originally coined by ancient Egyptian multi-genius Imhotep. The expression addresses a need for adequate self perception which will make for self mastery and consequent self-control. It is this discovery of self that has proven to be the bane of many and the society at large.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"It was 11th century Persian philosopher Avicenna who argued that the \\\"...human intellect at birth resembled a tabula rasa (a clean slate), a pure potentiality that is actualized through education\\\" and experience. English Philosopher John Locke added to the notion when he defined self through continuity of consciousness. Contrary to Cartesian philosophy, he maintains that knowledge is determined only by experience derived from sense perception. This process begins immediately life is birthed. At birth, man begins to take in and respond to the world around him. Therefore, a child begins to form through interaction with the world around him or her.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The family is the first world a child interacts with. A child's journey to self knowledge begins with familial relationship. A child is most likely to view the world through the prism of what obtains in the family. Here, the child begins to develop an identity, belief and value system in the stead of the family. This sense of self is most likely to last longer because they are cultivated while the child is still very impressionable. And so an identity crisis sets in when he is expected to conform to another set of value system that society purports to promote.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"How does society envisage a corrupt-free society when mothers have told their children \\\"if they steal your thing, steal someone else's\\u201D. How does the man understand forgiveness when fathers have said \\\"hit back when someone challenges you\\\". How does the man understand oneness when parents have said \\\"you can't have anything to do with people from that tribe, they are no good, same with these and those\\\". How does the man understand dignity in labour when daddy's debtors come waking him up at noon and mummy is always checking out the latest prayer houses. How does the man understand peace when the slightest difference between his parents is settled with aiming fists. For many, this is life as they know... Life as they believe it.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"But you see the famous words of Socrates - \\\"The unexamined life is not worth living\\\" remains instructive. It gives another opportunity for self reappraisal for we often times do not question why we act the way we do, talk the way we talk, respond to issues the way we do and indeed live our lives the way we do. We just don't know who we are. So many are just living someone else's life, living in someone else's shadow while others are just doing what the crowd do or what they think they are allowed to.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"It is really this poor knowledge of self that has made many susceptible to worldly cares. They have become instruments to be manipulated by others for mischief and self aggrandizement. They have become puns to be moved and tossed at will with no recourse to their own desires and for this the wise man says \\\"when purpose is not known, abuse is inevitable\\\". We really need to examine our lives to find ourselves for only then can we be happy and free.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Now, you will realize that when you find yourself there lies a greater call to life beyond self-fulfilment. It is as the English Philosopher, George Berkeley puts it \\\"Esse est percipi\\\" - to be is to be perceived; I dare add 'to be perceived positively'. Living is beyond having a name and presenting same upon demand, it is about touching lives, lifting others up and making a positive difference in the world around you. It is a devotion to leaving behind memories that others will savor with delight.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"So we are back where we started: who are you?\")],\n    url: '/blog/1'\n  }, {\n    title: 'These filthy filtered sounds',\n    images: [{\n      src: _assets_These_filtered_filthy_sound_jpg__WEBPACK_IMPORTED_MODULE_2__.default,\n      alt: 'A hand turns a dial on a sound mixer'\n    }],\n    chunks: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\\"If music be the food of love, play on, give me excess of it; that surfeiting, the appetite may sicken, and so die\\\" - William Shakespeare, Twelfth Night.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Those poignant and timeless lines of the most quintessential Playwright history may ever record capture the very essence of music and the exerting force it commands over human emotions. It reveals how indeed one can glut to something as fleeting as sound. For Shakespeare, he is not only going to surfeit to music but he is equally prepared to die. While I was still ravelling in the profound appeal of those words, I was late to realize that he (Shakespeare) had employed the use of a conditional clause - 'if' at the beginning of those lines (whoa! Shakespeare you did it again).\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"It would imply therefore that Shakespeare was not certain of the qualities he was attributing to music which is that of being \\\"the food of love...\\\" That caution of uncertainty was enough to redirect the trajectory of even this piece. But the question remains; what is music? And does it assert any influence in our lives?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"It has been difficult for authorities to agree on a definition that capture the dynamics of music but Wikipedia succinctly defines music as \\\"an art form and cultural activity whose medium is sound and silence\\\". Music is an age-long tradition. History holds that the primitive men were wont to hum nice tunes in expression of whatever situation they were in. Today, music is the centrepiece of many religions. In fact, the Christians hold it to be true that singing is the only preoccupation of heavenly beings. Not only that, music in the form of trumpet blast will announce the end of time.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Music is more than art, music is life. Friedrich Nietzsche in Twilight of the idols says in very strong words \\\"without music, life would be a mistake\\\". Music is life because it has the power to be your friend, heal your cares, calm your fears, make peace. Again, it is life because while others do music for a living others manage musicians to eke a living.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Music has undoubtedly undergone tremendous evolutions and Africa with its rich blend of culture and tradition is home to music. Our moonlight tales incorporated fine elements of music and all our celebrations are fitted with corresponding rhythms.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"A generation back, we were blessed with beautiful tunes like 'joromi' from the legendary Sir Victor Uwaifo, 'yonder please' by the grandiloquent Chris Okotie (now reverend), 'bolanle' by Junior and Pretty to others done by King Sunny Ade, Ebenezer Obey, Mike Okri, Oliver de Quoque, Evangelist Sunny Okosun, Majek Fashek, Fela Anikulapo Kuti and a host of others.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Today, our music industry parades people who with digitally mastered vocals and beats identify as musicians. When brought on stage, they simply hum to the DJ's play, throw their sunglasses to the crowd, sag their trousers, pull off their shirt (ladies too) and the performance is over. They do not know jack about music and have not taken the pains to do so.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The most worry is that they have 'creatively' desecrated the sanctity of music with their crass and debasing lyrics. Profanity has become a distinct quality of their songs. For them, creative lyric is one that stupidly glorifies sex, wealth, drugs, \\u2018gangsterism\\u2019 and violence. There is almost nothing that enriches the soul in their songs. It gets most irritating when they churn out their music videos. Half naked (sometimes stark naked) girls adorn our screen \\\"shaking what their mama gave them...\\\" Immodest show of wealth marks their sense of a good music video. At best they spit some lines that purport to thank God for those vanities and vices. What mockery!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Now, due credence must be given to the handful of artistes that endeavour to extol virtues, feed the soul whilst giving us rich entertainment with their songs. It is for sake of these that Maya Angelou reflected \\\"music was my refuge. I could crawl into the space between the notes and curl my back to loneliness\\\". These artistes have with their sweet melodies returned the pristine essence of music. They have produced what lovers of good music can surfeit to.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Musicians must realize that their artistry is a vocation that must uphold a duty to the society. They must never lose touch of the fact that they are worthy collaborators in a person's socialization process. So while others continue to wallow in their discordant tunes others rise above these filtered filthy sounds.\")],\n    url: '/blog/2'\n  }, {\n    title: 'I feel sorry for the racist',\n    images: [{\n      src: _assets_I_feel_sorry_for_the_racist_png__WEBPACK_IMPORTED_MODULE_3__.default,\n      alt: 'An image of blank and white handprints'\n    }],\n    chunks: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"This is not exactly how I expected to feel when I finally stared racism in the face. I had imagined how I would vengefully defend my heritage in order to preserve my personal pride. I had rehearsed how I would return any verbal vile thrown at me with some carefully crafted words afterall the British colonialists left us with the English language which I now had decent command of. I had vowed to oppose at whatever costs any attempts to undermine my person on the basis of my skin colour. Alas! Today, all I feel for the racist is pity.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"When I looked at him, I thought of my dear friends of European/Caucasian descent whom I have met within my short stay in the UK and how they struggle to desist from making racist remarks towards me or in my presence. You can literally touch the visible restraints on their faces. When they cannot contain themselves anymore, it falls off as jokes. I shared good laughs with my friends back home but it was not to racist jokes. I shudder at how almost life-sustaining racism seem to be. My interpretation of this unfortunate reality are of two analogies - racism is either akin to an addict needing a daily dose of drugs to sustain his addiction or a dance student needing daily practice to perfect his art. Either ways, he remains subject to his imbibed master.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"I looked at him closely and I realised that he was a victim too. I saw the poor victim of a socialisation that constructed self worth only on the basis of skin colour and said his was superior to mine. I saw a person robbed of his capacity to be rational. I saw a person denied the opportunity of an wholesome application of his learning in reaching logical conclusions in matters as simple as human relations. I looked hard enough and saw that all his claim to being a member of a great civilisation bore no imprint on the crassness of his actions towards me and \\u2018my kind\\u2019.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Now, do not tell me otherwise, for how can you strip me and discountenance my capacity to engage you intellectually like thinking people do? How can you not see all my acts of kindness like loving people do? How can you not be bothered about how sad your words and actions make me feel like a human being would? How can you look at me and all you see is the colour of my skin? Just tell me how? For as long as you can only see that far, you are bound by the same chain.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"So, I have not read in entirety the recent \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://www.gov.uk/government/publications/the-report-of-the-commission-on-race-and-ethnic-disparities/foreword-introduction-and-full-recommendations\"\n    }, \"commission report by the government\"), \" that submitted that there is \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://www.bbc.co.uk/news/uk-56585538\"\n    }, \"no evidence of institutional racism in the UK\"), \". To be fair, I felt I could deploy my time more judiciously afterwards. Reading the \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://medium.com/the-thinking-slow-news-letter/i-lost-my-sh-t-this-week-heres-why-ba940f2ad9f\"\n    }, \"April 2nd Piece\"), \" by Kristian Hoareau Foged published in this week\\u2019s Monday briefing by Stephen Waddington confirmed my opinion of the seeming outright denial of current realities by the report and the conscious biases that underscore the daily experiences of people from minority backgrounds in the UK.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"I felt that the report and its findings even with its subtle admission of racism in the UK was another classic brit-ish PR stunt. I just don\\u2019t feel that its presentation reflects the high PR standing of the UK.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Unlike Kristian, my reaction towards racism has taken a rather contemplative tone and strangely so. Read up to understand why I feel sorry for the racist instead.\")],\n    url: '/blog/3'\n  }, {\n    title: 'I don\\'t like the knee',\n    images: [{\n      src: _assets_I_Dont_Like_the_Knee_jpg__WEBPACK_IMPORTED_MODULE_4__.default,\n      alt: 'Football players in a circle, taking a knee'\n    }],\n    chunks: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"After three weeks of court proceedings and forty-five witnesses, former Minneapolis Police officer, \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://edition.cnn.com/2021/04/20/us/derek-chauvin-trial-george-floyd-deliberations/index.html\"\n    }, \"Derrick Chauvin was found guilty of all charges\"), \" of second-degree unintentional murder, third-degree murder and second-degree manslaughter in the killing of 46-year-old African-America, \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://en.wikipedia.org/wiki/George_Floyd\"\n    }, \"George Floyd\"), \". Since those unfortunate moments when the world watched with horror as then officer Chauvin placed the weight of his knee on the neck of handcuffed, restrained Floyd who was shouting \\u201CI can\\u2019t breathe\\u201D before giving up the ghost, the world has been sent into a frenzy of protests. These series of protests in the United States of America (USA) and around the world has become known as the \\u201CBlack Lives Matter\\u201D (BLM) movement. What has emerged from this movement is the symbolism of kneeling on one knee (sometimes both) as resistance to racial oppression and suppression. But I don\\u2019t like the knee.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"George Floyd\\u2019s killing was a sharp departure from the \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://www.amnesty.org.uk/deadly-force-police-violence-usa?utm_source=google&utm_medium=grant&utm_campaign=AWA_GOV_usa-police-brutality&utm_content=usa%20police%20brutality\"\n    }, \"typically reported police shooting of unarmed African-Americans\"), \". I, like many others around the world watched the \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://www.nytimes.com/2020/05/31/us/george-floyd-investigation.html\"\n    }, \"9:48minutes long viral video of Chauvin\\u2019s knee on the neck of Floyd\"), \" that eventually led to his death. Death by asphyxiation is undoubtedly a more brutal and painfully slow death compared to many other forms of killing. Therefore, for every time that symbol is recreated, we are reminded of the horrendous manner and helplessness that attended Floyd\\u2019s death.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"I understand that many are of the view that \\u2018taking the knee\\u2019 as it is now described is a deliberate attempt to evoke a collective emotion of disdain over the evil of racism on the heels of Floyd\\u2019s killing and consequently lead to a suppression of racist tendencies but let us imagine deducing symbols from every other prevalent injustices and crimes in society. What will be the protest symbol for rape? What will be the protest symbol for violence against women, mass school shootings, gender inequality or nepotism?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"However, a bigger concern is that these symbols serve to reinforce the legend of the criminal in this instance a perpetrator of a racism induced killing. It is important to realise that in \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://online.maryville.edu/online-bachelors-degrees/forensic-psychology/historys-famous-crooks/\"\n    }, \"understanding the mind of a criminal\"), \", many of them are motivated by the desire to be famous. It is not hard to infer that violent racist acts provide an easy route to enjoying media mentions and into public consciousness. The media often make \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://web.northeastern.edu/jfox/Columns/usatoday%20monikers%20oct%2023.htm\"\n    }, \"celebrities of violent criminals\"), \". Think about Bonnie and Clyde, the Yorkshire ripper, Jack the ripper and their prominence in popular culture. Taking the knee is synonymous to goal scoring celebrations of famous footballers recreated by little children in the play field. For as long as we keep taking the knee, I think that we will not only be etching Derrick Chauvin undeservedly in our folklore but endearing others to the \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"http://getd.galib.uga.edu/public/wiest_julie_b_200308_ma/wiest_julie_b_200308_ma.pdf\"\n    }, \"fanfare that comes with committing violent racist crimes\"), \".\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Now, you cannot challenge a social malaise that has been entrenched in society for centuries from a position of deference. \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://lifeinperublog.wordpress.com/2017/09/27/what-does-it-mean-to-kneel/\"\n    }, \"Deference is exactly what taking the knee represents\"), \". The kneeling posture symbolizes an acknowledgement, a resignation perhaps a yielding to a power greater than the one who is kneeling. No! You cannot show respect to racism or succumb to its authority however innocuous the act or context may be. I will rather that people stood up to racism, raised a fist and say that they are a people of value too then take a sit at the table and negotiate a just and equitable society for the oppressed victims of today and tomorrow.\")],\n    url: '/blog/4'\n  }, {\n    title: 'Troubled world and the study of Public Relations',\n    images: [{\n      src: _assets_troubled_world_and_the_study_of_public_relations_jpg__WEBPACK_IMPORTED_MODULE_5__.default,\n      alt: 'A downward trending arrow superimposed over a map of the world'\n    }],\n    chunks: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"I have lived short enough to experience an unwholesome amount of chaos like the world has been thrown into right now on account of the Covid-19 pandemic but long enough to know that building and strengthening relationships is the only way out for our world. This in many regards sounds antithetical to the times considering that physical and social distancing is propagated as the panacea to containing an unprecedented viral transmission contracted by touch but we have also learnt that we cannot really be distant whether as continents, countries, race, ethnic communities, relatives, friends or neighbours. Indeed, one\\u2019s cough in Wuhan, China can be of some serious concern to another in Leeds, UK.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"I have long held the belief that the most important character of the human race is communication. At the heart of every human person is the need to relate with another and share experiences. It is the reason pre-historic man made cave drawings and today we have several social media platforms. Growing up, my late father introduced me to the art of reading when he would ask me to read a particular book and make weekly reports to him. I was able to journey to distant places and relive various experiences on the pages of books of such authors as Chinua Achebe, Wole Soyinka, William Shakespeare, Charles Dickens among others. In the lyrics of artistes such as Bob Marley, Tupac, Michael Jackson and more, I felt a sense of connection that transcended space. Going on to study Mass Communication at the University of Benin, Nigeria further exposed me to the power communication wields in fostering relationships and shaping human society.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"You see, communication is just so powerful. I now know that content creators and owners of communication medium can literally direct human behavior, shape social values and just manipulate society. I appreciate the role of communication in promoting causes, fostering trade, building social communities and even affecting diplomatic relations. I have realized that the power to creatively and effectively manipulate communication (content) to achieve desired outcomes is very well captured within the Public Relations discipline.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Therefore, at a time when the world is in a pandemic, the UK has finalized Brexit and an air of uncertainty is breezing through almost every clime, we will continue to turn to Public Relations professionals to allay fears, communicate hope to the people, safeguard social values and indeed predict the future. My decision to study Public Relations at this time and at Leeds Beckett University, UK is precisely to take advantage of the dynamics at play and its imperatives for engineering better relationships and Leeds Beckett\\u2019s well documented reputation in the teaching of Public Relations and Strategic Communications.\")],\n    url: '/blog/5'\n  }, {\n    title: 'A ticking time bomb',\n    images: [{\n      src: _assets_Ticking_time_bomb_jpg__WEBPACK_IMPORTED_MODULE_6__.default,\n      alt: 'A man sat on a train station platform, with his head in his hands in despair'\n    }],\n    chunks: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Various sociologists, political scientists, anthropologists and social historians have attempted over the years to stratify society into a set of hierarchical social categories or classes. They have attempted rather unsuccessfully to agree on the appropriate classes but the most common remain the upper, middle and lower classes.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"It is however, still a matter of debate as to the basis for the various class systems. While renowned Philosopher Karl Marx argues that \\\"class is determined entirely by one's relationship to the means of production hence the proletariat, those who work but do not own the means of production; and the bourgeoisie, those who invest and live off the surplus generated by the former, Max Weber avers that \\\"class is determined by economic position... which is determined by social prestige rather than simply just relations of production.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Whether it is the Marxist, Weberian or any other of the theories that abound, it is important to observe that the concept of class is an appreciation of the correlation of income, education, wealth, social background, influence, power within the framework of our overall social interactions. It suggests that the degree of possession of any or all of the above variables determines the class such an individual belongs. Therefore, those possessing higher have come to be identified by various scholars as the upper class, the bourgeoisie, the elite etc while those possessing little have been identified as the lower class, the proletariat, the masses, the serfs etc.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"American Sociologist C. Wright Mills is associated with the term Power Elite to describe a relatively small loosely connected group of individuals who dominate American policy making. This group includes bureaucratic, corporate, intellectual, military, media and government elite who control the principal institutions in the United States and whose opinions and actions influence the decisions of the policy makers. Several scholars also posit that all through history it is the elite who determine the growth and direction of a nation in about all parts of the world.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Since income remain a dominant indicator of social class, in Africa, the term elite has come to be loosely associated with the rich and educationally privileged few as against royalty or aristocratic bloodlines projected in other climes. In Africa, it can be agreed that the agitations for independence were championed by a few educationally privileged and sometimes relatively affluent individuals. They echoed what seemed to be the voices of the masses for freedom and boom! sovereign states were springing up all over Africa.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"It did not take long for Africa to realize that many of the independence champions only sought to consolidate on the new exposure they had garnered within the classrooms and on the streets of Europe to enthrone themselves as Africa's foremost elite class. Their actions afterwards were precipitated on the need to perpetuate their fiefdom. Soon, a new bar was set; break into the top echelon of government and devise a mechanism to remain there or amass a war chest of government treasury during your brief stay within government corridors and you have secured a lifetime of elite supremacy for even generations unborn. As a result, the daily struggle of the average African became one that had wealth acquisition as its centerpiece. He sees his self worth in his bank account statement and will spare no evil to ensure that it is constantly on the rise. Once his 'self worth' is alright then it must be flaunted to the indignation of all those around.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Back home, Nigerians are akin to this trend and in our characteristics are indeed high flyers. As Hon. Patrick Obahiagbon, former member of the House of Representatives once humorously remarked that \\\"...the microscopic few that have piloted the affairs of this nation live in peasantile luxury...\\\". It is so much so that class is given a place of honour in schools, hospitals, markets, banks, prisons, traffic, employment, even in our religious places of worship, to such extent that it would seem repulsive to be poor. The poor is often assumed to have nothing to offer even in his family because he simply does not have the financial clout to backup his claims.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The world bank president, Jim Yong Kim, stated at the IMF/World Bank spring meetings of April 2014 in Washington D.C. United States that Nigeria is one of the top five countries that have the largest number of poor coming in at no. 3 with 7% of the world's poor. This according to the Nigerian Bureau of Statistics (NBS) report titled \\\"The Nigerian poverty profile 2010) released in January, 2014 represents 69% (112.519 million) of the country's total population estimated to be 163 million. This is in paradox to the fact that we have in our recent history consistently turned out individuals who grace the Forbes richest list thus bringing 'glory' to our land. Further distil that list and you realize that Nigeria sits atop the list of richest in Africa (Forbes richest list 2016).\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Consequently, while many go around cap-in-hand for their daily bread, others feed their dogs in golden bowl. They make bold to accentuate their distinct class in the faces of the masses. The legion of lower class men are forced to serve their upper class lords with utmost chivalry as they hope to be handed over pittance to their utter degradation. It is not bad enough that they have been denied a fair share of their common hegemony kept in trust with the leaders, worse still they have to contend with being oppressed with same.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"And so we hear of the man who sends his driver with N1.2million to purchase a brand of fine wine for a wild night but pays same driver N17,000 monthly and is not interested in his tales of a sick mother or the madam who demands that the house help takes a taxi to drop the kids at school but has to walk back home to man the shop or the big boss whose security guard (Mai guard) has to wash his six cars before 6am every day, culture the flowers, sweep the compound and show up bright as he opens the gate for Oga's visiting girlfriends but he is rewarded with pittance at the end of the month and a reminder of how lucky he is to keep a job.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"It is this unfortunate sequence that has made social commentators to caution that we are waiting by a ticking bomb that will soon 'implode' upon us to grievous consequences. They stress that the masses will soon revolt the status quo just like Aminata Sow Fall portrayed in her classic - The Beggars' Strike. The looming danger for some is already blooming in the horizon.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"When that day comes, the masses will blame the denial of what they believed to be rightfully theirs for their actions. They will lament a gross insensitivity on the part of the elite for their agitations. They will bemoan a denial of an opportunity to conveniently contribute to the nation's discourse. They will grieve the lures of elite lifestyle. But they will forget that there is a moral rectitude which a person acquires irrespective of social class, ethnicity or the like that dictates a propensity to do good (right) no matter the reward or contrary attraction. They will forget that man is a product of choices made and the notion of choice implies freedom. They will forget that at no point did their actions cease to take to account duty to God, to others, to country and to self.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"As I sit back to another news bulletin chronicling the problems bedevilling my dear country Nigeria, I ask, are the elite the problem?\")],\n    url: '/blog/6'\n  }, {\n    title: 'Off the stage',\n    images: [{\n      src: _assets_Off_the_stage_jpg__WEBPACK_IMPORTED_MODULE_7__.default,\n      alt: 'A photo of a stage at night, lit by stage lights'\n    }],\n    chunks: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The night has come\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The curtain has been drawn\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The actor must now descend the stage\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"He must now contemplate if he has given his best\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"If he has left it all on the stage\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"This stage where mortals become gods\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Villains become heroes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"This stage where victims become masters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Weaklings become conquerors\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"This stage where his lies drew cheers and jeers\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"His deceit called ovation and indignation\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"This stage where his truths were rebuked\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"And his honesty despised\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"This stage that was once the centerpiece of his self expression\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Would today be his judgment\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"He would rue the lines that were not said\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"He would lament the gestures that were ignored\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"He would long for the times his act made the audience happy\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"He would cherish the moments his chants took their pains away\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"He will seek forgiveness in the momentary solace they found in his performance\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Long after the wild applause is gone\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Here, he stands alone\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Recounting how well he managed the stage\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"And the props that were mismanaged\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"His costumes always stole the night\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"He says he \\u201Cwants always all the shine\\u201D\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"So others never came to light\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Though his walls be adorned with frames\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"He has not earned a place in the hall of fame\")],\n    url: '/blog/7'\n  }, {\n    title: 'Mind your language: Racism and the symbolism of words',\n    images: [{\n      src: _assets_words_have_power_jpg__WEBPACK_IMPORTED_MODULE_8__.default,\n      alt: '\\'Words have power\\' written on a chalk board'\n    }],\n    chunks: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The subject of race and racial relations has lived with us for such a long time now. At the heart of this matter is the simple question of how people with just variation in skin pigmentation can co-exist peacefully? While it seems like such a baseless debate to still be having in a world where humans now easily and peacefully live in space and traverse the moon at will, another breaking news story tell us otherwise.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"We are reminded of the tragedy of racism every time a \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://en.wikipedia.org/wiki/Derek_Chauvin\"\n    }, \"Derrick Chauvin\"), \" kneels on the neck of a George Floyd and kills him. The horror stares us in the face every time an unarmed African-American \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://en.wikipedia.org/wiki/Killing_of_Daunte_Wright\"\n    }, \"20-year-old Daunte Wright\"), \" or \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://www.nytimes.com/article/breonna-taylor-police.html\"\n    }, \"Breonna Taylor\"), \", \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://en.wikipedia.org/wiki/Trayvon_Martin\"\n    }, \"Treyvon Martin\"), \" is shot and killed by a police officer in the United States of America (USA); \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://www.theguardian.com/uk-news/2020/jun/11/black-deaths-in-police-custody-the-tip-of-an-iceberg-of-racist-treatment\"\n    }, \"Christopher Alder, Kingsley Burrell or Zahid Mubarek dying in the UK\"), \".\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Admittedly, there have been concerted efforts globally and among institutions to stem the wave of racism. In this regard, the \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://www.premierleague.com/NoRoomForRacism\"\n    }, \"English Premier League\"), \", the NBA among other sporting bodies has continued to lead campaigns against racism. Educational institutions and a host of civil society movements have promoted advocacies for a more just, equitable and equal global society. However, all of the potential gains of these efforts may just be undermined by words that when used even to condemn racism seem to perpetuate racial prejudices and stereotypes.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"We have for long referred to people of African and Caribbean descent including any who has a comparatively darker skin tone as \\u2018Blacks\\u2019 and those of European/Caucasian descent with lighter skin tones as \\u2018Whites\\u2019. This is both factually and scientifically inaccurate and figuratively reinforces the prejudices that anti-racist campaigners are fighting against. Firstly, anyone with a basic knowledge of colours knows that black and white is a far description from what the skin colour of any human being is. In fact, not even the fictional characterization of Black Panther and white vampires passes for black and white.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"It is important to note that our \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://healthengine.com.au/info/skin-colour\"\n    }, \"skin colour is determined mainly by genetics and melanin\"), \" \\u2013 a pigment produced by skin cells when they are exposed to sunlight. The spectrum of skin colour produced by the different types of melanin is between brown and red and not black and white. Moreover, there are people of African descent who bear very fair skin complexion but will still be referred to as black when described in racial terms. The insistence on such polarized descriptions has its roots in the symbolic meaning of those words.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The word \\u2018black\\u2019 has significant amount of \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://www.collinsdictionary.com/dictionary/english/dysphemism\"\n    }, \"dysphemistic\"), \" connotations. It is used to refer to darkness, misery, death, decay and evil. Shakespeare famously wrote in \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"http://bookanista.com/black-badge-hell/\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", null, \"Love\\u2019s Labour\\u2019s Lost\")), \" that \\u201CBlack is the badge of hell, the hue of dungeons and the school of night\\u201D. Therefore, every time it is used to refer to people with darker skin tones, it subliminally carries those meanings and intends to offend. By contrast, \\u2018white\\u2019 has mainly positive connotations. It is symbolically connected to light, innocence, clean, pure and fresh. It is therefore, immediately apparent that the use of black and white in racial lexicon is a figurative comparison between races and an attempt to exalt one over the other. Humanity will be better served when we start being just human beings, people, citizens and not blacks or whites.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"The foregoing narrative feeds into the use of the term \\u2018\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://en.wikipedia.org/wiki/White_supremacy\"\n    }, \"white supremacy\"), \"\\u2019 to describe the superiority of the \\u2018white\\u2019 race over the \\u2018black\\u2019 race. Even when used to lament instances of racial inequalities in favour of people with lighter skin colour, it subtly denies or at best belittles the gravity of those injustices. It is important to observe that the word \\u2018supremacy\\u2019 which is a derivative of the word \\u2018supreme\\u2019 denotes a sense of glory and pride. These are values that are both worth aspiring towards and protecting. It is the reason there is a sense of purpose too shared by white supremacist movements. Therefore, it is counter-intuitive to advocate racial equality by requesting abolition of white supremacy. Rather, those acts that signal white supremacy should be called out for the injustices and crimes that they.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Now, this leads us to another phrase that finds common usage in perhaps every conversation on racism \\u2013 \\u2018\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      target: \"_blank\",\n      href: \"https://en.wikipedia.org/wiki/White_privilege\"\n    }, \"white privilege\"), \"\\u2019. On the surface, privilege simply means any special rights or advantages granted or available only to a person or group. This is not necessarily a bad thing because people crave privileges everyday but when we connect this to the struggle for racial equality then it makes a whole world of difference. In making an ethical consideration on the issue of racism against the backdrop of present white privileges, the average \\u2018white\\u2019 person is forced to critically examine how much of his/her privileges they are willing to sacrifice? What does a world without white privileges mean to them? In a world of frequent brutalization and killing of unarmed people of African descent by \\u2018privileged\\u2019 law enforcement officers, the answer is immediately clear. In fact, it will seem suicidal to willingly drop those privileges and press for and accept equality with the present \\u2018under privileged\\u2019 race. The irony is that the only privilege available to a vast majority of \\u2018white\\u2019 people especially in the lower echelon of society might just be the unlikelihood of being pulled over by police officers indiscriminately and not much more yet it is enough entitlement to seemingly protect. Once again, this reflects the bane of not calling wrongdoings for what they are. An offence should not change its texture because of the skin colour of the offender.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"As the world grapples with the unfortunate issue of racism, it must realise that words play an important role on the pathway to ending racism. In this regard, even words with best intentions may inadvertently be undoing the strides made. Therefore, as we advocate for racial equality, we must mind our language.\")],\n    url: '/blog/8'\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlogContext.Provider, {\n    value: blogs\n  }, children);\n}\n\n//# sourceURL=webpack://martin/./shared/context/BlogContext.js?");

/***/ }),

/***/ "./shared/context/NavContext.js":
/*!**************************************!*\
  !*** ./shared/context/NavContext.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavContext\": () => (/* binding */ NavContext),\n/* harmony export */   \"NavProvider\": () => (/* binding */ NavProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar NavContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nfunction NavProvider(_ref) {\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      mobileNavOpen = _useState2[0],\n      setMobileNavOpen = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavContext.Provider, {\n    value: [mobileNavOpen, setMobileNavOpen]\n  }, children);\n}\n\n//# sourceURL=webpack://martin/./shared/context/NavContext.js?");

/***/ }),

/***/ "./shared/context/VideoContext.js":
/*!****************************************!*\
  !*** ./shared/context/VideoContext.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VideoContext\": () => (/* binding */ VideoContext),\n/* harmony export */   \"VideoProvider\": () => (/* binding */ VideoProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_VideoService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/VideoService */ \"./shared/services/VideoService.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar VideoContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nfunction VideoProvider(_ref) {\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      videos = _useState2[0],\n      setVideos = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    _services_VideoService__WEBPACK_IMPORTED_MODULE_1__.default.retrieve().then(function (data) {\n      return setVideos(data);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VideoContext.Provider, {\n    value: videos\n  }, children);\n}\n\n//# sourceURL=webpack://martin/./shared/context/VideoContext.js?");

/***/ }),

/***/ "./shared/links.js":
/*!*************************!*\
  !*** ./shared/links.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes),\n/* harmony export */   \"socials\": () => (/* binding */ socials)\n/* harmony export */ });\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"@fortawesome/free-brands-svg-icons\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__);\n\nvar routes = [{\n  path: '/',\n  text: 'Home'\n}, {\n  path: '/about',\n  text: 'About',\n  dropdown: [{\n    path: '/about/cv',\n    text: 'Curriculum Vitae'\n  }]\n}, {\n  path: '/campaigns',\n  text: 'Campaigns'\n}, {\n  path: '/case-study',\n  text: 'Case Study'\n}, // {\n//     path: '/contact',\n//     text: 'Contact',\n// },\n{\n  path: '/blog',\n  text: 'Blog'\n}];\nvar socials = [{\n  name: 'twitter',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTwitter,\n  size: '2x',\n  url: 'https://twitter.com/eazymartinez'\n}, {\n  name: 'facebook',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFacebookF,\n  size: '2x',\n  url: 'https://www.facebook.com/marayo11/'\n}, {\n  name: 'instagram',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faInstagram,\n  size: '2x',\n  url: 'https://www.instagram.com/eazymartinez/'\n}, {\n  name: 'linkedin',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faLinkedin,\n  size: '2x',\n  url: 'https://www.linkedin.com/in/martin-agunwa-168491a9/'\n}];\n\n//# sourceURL=webpack://martin/./shared/links.js?");

/***/ }),

/***/ "./shared/services/VideoService.js":
/*!*****************************************!*\
  !*** ./shared/services/VideoService.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  upload: function upload() {},\n  retrieve: function retrieve() {\n    return fetch('/api/files/videos').then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return data;\n    });\n  }\n});\n\n//# sourceURL=webpack://martin/./shared/services/VideoService.js?");

/***/ }),

/***/ "./shared/assets/CV-2.pdf":
/*!********************************!*\
  !*** ./shared/assets/CV-2.pdf ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dd60b3e8c7ff15ad9b7f0d0029e423bb.pdf\");\n\n//# sourceURL=webpack://martin/./shared/assets/CV-2.pdf?");

/***/ }),

/***/ "./shared/assets/Harmattan-2.png":
/*!***************************************!*\
  !*** ./shared/assets/Harmattan-2.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0975cc6dea0582656c2577f3caee7c82.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Harmattan-2.png?");

/***/ }),

/***/ "./shared/assets/Harmattan.png":
/*!*************************************!*\
  !*** ./shared/assets/Harmattan.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"3821b281ec4a9e083c7e3de7287ead51.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Harmattan.png?");

/***/ }),

/***/ "./shared/assets/I-Dont-Like-the-Knee.jpg":
/*!************************************************!*\
  !*** ./shared/assets/I-Dont-Like-the-Knee.jpg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"059251356d8b1a58f9065704c3dc7bd3.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/I-Dont-Like-the-Knee.jpg?");

/***/ }),

/***/ "./shared/assets/I-feel-sorry-for-the-racist.png":
/*!*******************************************************!*\
  !*** ./shared/assets/I-feel-sorry-for-the-racist.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d5a977bae95a37f63888d1bf2db56780.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/I-feel-sorry-for-the-racist.png?");

/***/ }),

/***/ "./shared/assets/Insta-1.png":
/*!***********************************!*\
  !*** ./shared/assets/Insta-1.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"3ac5ace8613c8c0d29bc46b5eefe214c.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Insta-1.png?");

/***/ }),

/***/ "./shared/assets/Insta-2.png":
/*!***********************************!*\
  !*** ./shared/assets/Insta-2.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"14d6dace2b867ffc269d386f0f1a4721.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Insta-2.png?");

/***/ }),

/***/ "./shared/assets/Lekki-2.png":
/*!***********************************!*\
  !*** ./shared/assets/Lekki-2.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"178d2c698d53f076c9f053a0ba668af2.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Lekki-2.png?");

/***/ }),

/***/ "./shared/assets/Lekki-3.png":
/*!***********************************!*\
  !*** ./shared/assets/Lekki-3.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c4e7cf9698c97c7f4dd49a43bf1a51e9.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Lekki-3.png?");

/***/ }),

/***/ "./shared/assets/Lekki-4.png":
/*!***********************************!*\
  !*** ./shared/assets/Lekki-4.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7ade70e1b49d5a34658db502197f9179.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Lekki-4.png?");

/***/ }),

/***/ "./shared/assets/Lekki.png":
/*!*********************************!*\
  !*** ./shared/assets/Lekki.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d5913e687460545986a7575d211f5996.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Lekki.png?");

/***/ }),

/***/ "./shared/assets/Martin-Podcast.png":
/*!******************************************!*\
  !*** ./shared/assets/Martin-Podcast.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2ad95db9a9bc55be57c4c8cd3ecb285a.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Martin-Podcast.png?");

/***/ }),

/***/ "./shared/assets/Nivea-1.png":
/*!***********************************!*\
  !*** ./shared/assets/Nivea-1.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9d6fbebe039fbd557e5d896d87b45136.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Nivea-1.png?");

/***/ }),

/***/ "./shared/assets/Nivea-2.png":
/*!***********************************!*\
  !*** ./shared/assets/Nivea-2.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4cdcb449f27d84638d552a7d9abb1995.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Nivea-2.png?");

/***/ }),

/***/ "./shared/assets/Nivea-testemonial-1.png":
/*!***********************************************!*\
  !*** ./shared/assets/Nivea-testemonial-1.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0052fd106f3036aeb7d4925e5e0275c2.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Nivea-testemonial-1.png?");

/***/ }),

/***/ "./shared/assets/Nivea-testemonial-2.png":
/*!***********************************************!*\
  !*** ./shared/assets/Nivea-testemonial-2.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"67d331b9e199447bfa2e20243d862684.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Nivea-testemonial-2.png?");

/***/ }),

/***/ "./shared/assets/Off-the-stage.jpg":
/*!*****************************************!*\
  !*** ./shared/assets/Off-the-stage.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c7482343be62073a196bd0143ce82d88.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/Off-the-stage.jpg?");

/***/ }),

/***/ "./shared/assets/These-filtered-filthy-sound.jpg":
/*!*******************************************************!*\
  !*** ./shared/assets/These-filtered-filthy-sound.jpg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f45ffe82bda7512fe10782a3a2308203.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/These-filtered-filthy-sound.jpg?");

/***/ }),

/***/ "./shared/assets/Ticking-time-bomb.jpg":
/*!*********************************************!*\
  !*** ./shared/assets/Ticking-time-bomb.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4764fef6d06015de49b8454b33e87c91.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/Ticking-time-bomb.jpg?");

/***/ }),

/***/ "./shared/assets/Twitter-1.png":
/*!*************************************!*\
  !*** ./shared/assets/Twitter-1.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"56b2302bfae66a97fb88fd29b405d918.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Twitter-1.png?");

/***/ }),

/***/ "./shared/assets/Twitter-2.png":
/*!*************************************!*\
  !*** ./shared/assets/Twitter-2.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8447e71e72710fea92aedb52d0e94d73.png\");\n\n//# sourceURL=webpack://martin/./shared/assets/Twitter-2.png?");

/***/ }),

/***/ "./shared/assets/b90d69_1c81c3e0c0ee49408c5ee2e42ff0ed99_mv2.jpg":
/*!***********************************************************************!*\
  !*** ./shared/assets/b90d69_1c81c3e0c0ee49408c5ee2e42ff0ed99_mv2.jpg ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f88cb7fd26421ec570028514d662d13d.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/b90d69_1c81c3e0c0ee49408c5ee2e42ff0ed99_mv2.jpg?");

/***/ }),

/***/ "./shared/assets/melancholy-of-unknown-selves.jpg":
/*!********************************************************!*\
  !*** ./shared/assets/melancholy-of-unknown-selves.jpg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a9c85d4145e0a1693cee707e86b096cc.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/melancholy-of-unknown-selves.jpg?");

/***/ }),

/***/ "./shared/assets/slides/20191102_160240.jpg":
/*!**************************************************!*\
  !*** ./shared/assets/slides/20191102_160240.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"15036f2b82b25f0a3d71801b99f9317d.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/20191102_160240.jpg?");

/***/ }),

/***/ "./shared/assets/slides/20191116_100837.jpg":
/*!**************************************************!*\
  !*** ./shared/assets/slides/20191116_100837.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"66d61a8f7bf49b7639b8fb8aaaf35d04.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/20191116_100837.jpg?");

/***/ }),

/***/ "./shared/assets/slides/20191116_123414.jpg":
/*!**************************************************!*\
  !*** ./shared/assets/slides/20191116_123414.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fe8b3630f7acee33f1e0743f2c955606.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/20191116_123414.jpg?");

/***/ }),

/***/ "./shared/assets/slides/20191116_123421.jpg":
/*!**************************************************!*\
  !*** ./shared/assets/slides/20191116_123421.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0c92d40efa19f207218590bd2b6f9e0f.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/20191116_123421.jpg?");

/***/ }),

/***/ "./shared/assets/slides/20191207_083856.jpg":
/*!**************************************************!*\
  !*** ./shared/assets/slides/20191207_083856.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8c74aba5456eebffc31aa19523a29b3d.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/20191207_083856.jpg?");

/***/ }),

/***/ "./shared/assets/slides/20201016_175254.jpg":
/*!**************************************************!*\
  !*** ./shared/assets/slides/20201016_175254.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dff365d7dc7f57c7c5608a064d956734.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/20201016_175254.jpg?");

/***/ }),

/***/ "./shared/assets/slides/20201016_175308.jpg":
/*!**************************************************!*\
  !*** ./shared/assets/slides/20201016_175308.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dedbed6458e4b08acf3ecabe53790cd5.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/20201016_175308.jpg?");

/***/ }),

/***/ "./shared/assets/slides/20201016_175319.jpg":
/*!**************************************************!*\
  !*** ./shared/assets/slides/20201016_175319.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"36fc8c6348c572ff11a756b7f26fd75c.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/20201016_175319.jpg?");

/***/ }),

/***/ "./shared/assets/slides/DSC_0312.JPG":
/*!*******************************************!*\
  !*** ./shared/assets/slides/DSC_0312.JPG ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"688ae4add4f95b1b0b64f99c2be776a6.JPG\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/DSC_0312.JPG?");

/***/ }),

/***/ "./shared/assets/slides/DSC_0356.JPG":
/*!*******************************************!*\
  !*** ./shared/assets/slides/DSC_0356.JPG ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2d7478e9f636734d8df75e6e60ca885d.JPG\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/DSC_0356.JPG?");

/***/ }),

/***/ "./shared/assets/slides/DSC_0374.JPG":
/*!*******************************************!*\
  !*** ./shared/assets/slides/DSC_0374.JPG ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"aefdee9e624c9d5570c39b702c2b0cfc.JPG\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/DSC_0374.JPG?");

/***/ }),

/***/ "./shared/assets/slides/DSC_0437.JPG":
/*!*******************************************!*\
  !*** ./shared/assets/slides/DSC_0437.JPG ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e1829d856330ad42305f8e2df200a9b6.JPG\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/DSC_0437.JPG?");

/***/ }),

/***/ "./shared/assets/slides/DSC_0442.JPG":
/*!*******************************************!*\
  !*** ./shared/assets/slides/DSC_0442.JPG ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d12542ec9986ea0817acb0e453cbaee1.JPG\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/DSC_0442.JPG?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20190128-WA0000.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20190128-WA0000.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1615d2c1c64b61b643f2d3e0b72a9c4e.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20190128-WA0000.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20190307-WA0000.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20190307-WA0000.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2dc54c72047a8ffbc696d52ed65559c2.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20190307-WA0000.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20190307-WA0002.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20190307-WA0002.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"390d9b32f4074967650812b19421f332.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20190307-WA0002.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20190626-WA0014.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20190626-WA0014.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"38b3088786dec53470c20988ff13db32.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20190626-WA0014.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20191102-WA0015.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20191102-WA0015.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fc0c6657105970d276540a5f23eecfe4.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20191102-WA0015.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20191102-WA0019.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20191102-WA0019.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7c0f4a60bb842e20e1304a9400c2d2f4.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20191102-WA0019.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20191107-WA0010.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20191107-WA0010.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2c61bd258dac8ddc1e66aa6297ed6479.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20191107-WA0010.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20191201-WA0005.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20191201-WA0005.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0cda324a6bbd649f1c4c8c22d3911aa7.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20191201-WA0005.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20200301-WA0000.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20200301-WA0000.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"021d0abf35f1850c59c2784def24828f.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20200301-WA0000.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20200731-WA0004.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20200731-WA0004.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8d026e3cbc34191b3c1b06591517bfed.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20200731-WA0004.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20201013-WA0019.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20201013-WA0019.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9947999d3a3a35bd3a924eb2cdbda234.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20201013-WA0019.jpg?");

/***/ }),

/***/ "./shared/assets/slides/IMG-20201013-WA0026.jpg":
/*!******************************************************!*\
  !*** ./shared/assets/slides/IMG-20201013-WA0026.jpg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f92f6cf5dbc5bb9dcb8f91b0405d455b.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/slides/IMG-20201013-WA0026.jpg?");

/***/ }),

/***/ "./shared/assets/thumbnail_DSC_0263.jpg":
/*!**********************************************!*\
  !*** ./shared/assets/thumbnail_DSC_0263.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"950bb205f0e30d736f7d28b13e26b518.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/thumbnail_DSC_0263.jpg?");

/***/ }),

/***/ "./shared/assets/troubled-world-and-the-study-of-public-relations.jpg":
/*!****************************************************************************!*\
  !*** ./shared/assets/troubled-world-and-the-study-of-public-relations.jpg ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"003a26fec425ddca93ae500ef4e96213.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/troubled-world-and-the-study-of-public-relations.jpg?");

/***/ }),

/***/ "./shared/assets/words-have-power.jpg":
/*!********************************************!*\
  !*** ./shared/assets/words-have-power.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"df5812f7608912785c7f7cd835c0197a.jpg\");\n\n//# sourceURL=webpack://martin/./shared/assets/words-have-power.jpg?");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "ignore-styles":
/*!********************************!*\
  !*** external "ignore-styles" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("ignore-styles");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-pdf":
/*!****************************!*\
  !*** external "react-pdf" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-pdf");;

/***/ }),

/***/ "react-pdf/dist/esm/Page/AnnotationLayer.css":
/*!**************************************************************!*\
  !*** external "react-pdf/dist/esm/Page/AnnotationLayer.css" ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = require("react-pdf/dist/esm/Page/AnnotationLayer.css");;

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-player");;

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-responsive-carousel");;

/***/ }),

/***/ "react-responsive-carousel/lib/styles/carousel.min.css":
/*!************************************************************************!*\
  !*** external "react-responsive-carousel/lib/styles/carousel.min.css" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("react-responsive-carousel/lib/styles/carousel.min.css");;

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server-src/server.js");
/******/ 	
/******/ })()
;