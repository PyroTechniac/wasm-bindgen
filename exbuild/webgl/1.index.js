(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: start, __wbindgen_string_new, __wbg_instanceof_WebGlRenderingContext_3aadcbc31d1748d3, __wbg_bufferData_985a5ff391474177, __wbg_attachShader_9564db836e3d4ece, __wbg_bindBuffer_6cc973b0a3488535, __wbg_clear_c50cee241485d576, __wbg_clearColor_ce7ee2c8c34d229d, __wbg_compileShader_91ce1c5df480321c, __wbg_createBuffer_1b29c13abf687b68, __wbg_createProgram_0bbeea9ffc5daa63, __wbg_createShader_cdd9f1769cd1de1e, __wbg_drawArrays_dfc8bd56cfd2c50e, __wbg_enableVertexAttribArray_1b8360d81db7d6f0, __wbg_getProgramInfoLog_2a1da5b17664faa9, __wbg_getProgramParameter_ff1b7fa34d0991f5, __wbg_getShaderInfoLog_5a8842f27648dd20, __wbg_getShaderParameter_9fe8d76217a4969c, __wbg_linkProgram_cba038b57a3871ef, __wbg_shaderSource_57dcf3bb9d5a2045, __wbg_useProgram_324a22a196d1f113, __wbg_vertexAttribPointer_0e306f7de4de676a, __wbg_getElementById_633c94a971ae0eb9, __wbg_instanceof_HtmlCanvasElement_c6a06fc9a851a478, __wbg_getContext_2151b76e11a6eb39, __wbg_instanceof_Window_a633dbe0900c728a, __wbg_document_07444f1bbea314bb, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbg_newnoargs_ebdc90c3d1e4e55d, __wbg_call_804d3ad7e8acd4d5, __wbg_globalThis_48a5e9494e623f26, __wbg_self_25067cb019cade42, __wbg_window_9e80200b35aa30f8, __wbg_global_7583a634265a91fc, __wbg_buffer_f897a8d316863411, __wbg_newwithbyteoffsetandlength_7ccfa06426575282, __wbindgen_boolean_get, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_WebGlRenderingContext_3aadcbc31d1748d3\", function() { return __wbg_instanceof_WebGlRenderingContext_3aadcbc31d1748d3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bufferData_985a5ff391474177\", function() { return __wbg_bufferData_985a5ff391474177; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_attachShader_9564db836e3d4ece\", function() { return __wbg_attachShader_9564db836e3d4ece; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bindBuffer_6cc973b0a3488535\", function() { return __wbg_bindBuffer_6cc973b0a3488535; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clear_c50cee241485d576\", function() { return __wbg_clear_c50cee241485d576; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clearColor_ce7ee2c8c34d229d\", function() { return __wbg_clearColor_ce7ee2c8c34d229d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_compileShader_91ce1c5df480321c\", function() { return __wbg_compileShader_91ce1c5df480321c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createBuffer_1b29c13abf687b68\", function() { return __wbg_createBuffer_1b29c13abf687b68; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createProgram_0bbeea9ffc5daa63\", function() { return __wbg_createProgram_0bbeea9ffc5daa63; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_createShader_cdd9f1769cd1de1e\", function() { return __wbg_createShader_cdd9f1769cd1de1e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawArrays_dfc8bd56cfd2c50e\", function() { return __wbg_drawArrays_dfc8bd56cfd2c50e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_enableVertexAttribArray_1b8360d81db7d6f0\", function() { return __wbg_enableVertexAttribArray_1b8360d81db7d6f0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getProgramInfoLog_2a1da5b17664faa9\", function() { return __wbg_getProgramInfoLog_2a1da5b17664faa9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getProgramParameter_ff1b7fa34d0991f5\", function() { return __wbg_getProgramParameter_ff1b7fa34d0991f5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getShaderInfoLog_5a8842f27648dd20\", function() { return __wbg_getShaderInfoLog_5a8842f27648dd20; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getShaderParameter_9fe8d76217a4969c\", function() { return __wbg_getShaderParameter_9fe8d76217a4969c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_linkProgram_cba038b57a3871ef\", function() { return __wbg_linkProgram_cba038b57a3871ef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_shaderSource_57dcf3bb9d5a2045\", function() { return __wbg_shaderSource_57dcf3bb9d5a2045; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_useProgram_324a22a196d1f113\", function() { return __wbg_useProgram_324a22a196d1f113; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_vertexAttribPointer_0e306f7de4de676a\", function() { return __wbg_vertexAttribPointer_0e306f7de4de676a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_633c94a971ae0eb9\", function() { return __wbg_getElementById_633c94a971ae0eb9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_HtmlCanvasElement_c6a06fc9a851a478\", function() { return __wbg_instanceof_HtmlCanvasElement_c6a06fc9a851a478; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getContext_2151b76e11a6eb39\", function() { return __wbg_getContext_2151b76e11a6eb39; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_a633dbe0900c728a\", function() { return __wbg_instanceof_Window_a633dbe0900c728a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_07444f1bbea314bb\", function() { return __wbg_document_07444f1bbea314bb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_ebdc90c3d1e4e55d\", function() { return __wbg_newnoargs_ebdc90c3d1e4e55d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_804d3ad7e8acd4d5\", function() { return __wbg_call_804d3ad7e8acd4d5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_48a5e9494e623f26\", function() { return __wbg_globalThis_48a5e9494e623f26; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_25067cb019cade42\", function() { return __wbg_self_25067cb019cade42; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_9e80200b35aa30f8\", function() { return __wbg_window_9e80200b35aa30f8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_7583a634265a91fc\", function() { return __wbg_global_7583a634265a91fc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_f897a8d316863411\", function() { return __wbg_buffer_f897a8d316863411; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithbyteoffsetandlength_7ccfa06426575282\", function() { return __wbg_newwithbyteoffsetandlength_7ccfa06426575282; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n/**\n*/\nfunction start() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\n}\n\nfunction logError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            let error = (function () {\n                try {\n                    return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n                } catch(_) {\n                    return \"<failed to stringify thrown value>\";\n                }\n            }());\n            console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n            throw e;\n        }\n    };\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_instanceof_WebGlRenderingContext_3aadcbc31d1748d3 = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof WebGLRenderingContext;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_bufferData_985a5ff391474177 = logError(function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);\n});\n\nconst __wbg_attachShader_9564db836e3d4ece = logError(function(arg0, arg1, arg2) {\n    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));\n});\n\nconst __wbg_bindBuffer_6cc973b0a3488535 = logError(function(arg0, arg1, arg2) {\n    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));\n});\n\nconst __wbg_clear_c50cee241485d576 = logError(function(arg0, arg1) {\n    getObject(arg0).clear(arg1 >>> 0);\n});\n\nconst __wbg_clearColor_ce7ee2c8c34d229d = logError(function(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).clearColor(arg1, arg2, arg3, arg4);\n});\n\nconst __wbg_compileShader_91ce1c5df480321c = logError(function(arg0, arg1) {\n    getObject(arg0).compileShader(getObject(arg1));\n});\n\nconst __wbg_createBuffer_1b29c13abf687b68 = logError(function(arg0) {\n    var ret = getObject(arg0).createBuffer();\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_createProgram_0bbeea9ffc5daa63 = logError(function(arg0) {\n    var ret = getObject(arg0).createProgram();\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_createShader_cdd9f1769cd1de1e = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).createShader(arg1 >>> 0);\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_drawArrays_dfc8bd56cfd2c50e = logError(function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);\n});\n\nconst __wbg_enableVertexAttribArray_1b8360d81db7d6f0 = logError(function(arg0, arg1) {\n    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);\n});\n\nconst __wbg_getProgramInfoLog_2a1da5b17664faa9 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg1).getProgramInfoLog(getObject(arg2));\n    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n});\n\nconst __wbg_getProgramParameter_ff1b7fa34d0991f5 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);\n    return addHeapObject(ret);\n});\n\nconst __wbg_getShaderInfoLog_5a8842f27648dd20 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg1).getShaderInfoLog(getObject(arg2));\n    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n});\n\nconst __wbg_getShaderParameter_9fe8d76217a4969c = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);\n    return addHeapObject(ret);\n});\n\nconst __wbg_linkProgram_cba038b57a3871ef = logError(function(arg0, arg1) {\n    getObject(arg0).linkProgram(getObject(arg1));\n});\n\nconst __wbg_shaderSource_57dcf3bb9d5a2045 = logError(function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));\n});\n\nconst __wbg_useProgram_324a22a196d1f113 = logError(function(arg0, arg1) {\n    getObject(arg0).useProgram(getObject(arg1));\n});\n\nconst __wbg_vertexAttribPointer_0e306f7de4de676a = logError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {\n    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);\n});\n\nconst __wbg_getElementById_633c94a971ae0eb9 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_instanceof_HtmlCanvasElement_c6a06fc9a851a478 = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof HTMLCanvasElement;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_getContext_2151b76e11a6eb39 = handleError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_instanceof_Window_a633dbe0900c728a = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof Window;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_document_07444f1bbea314bb = logError(function(arg0) {\n    var ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_newnoargs_ebdc90c3d1e4e55d = logError(function(arg0, arg1) {\n    var ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_call_804d3ad7e8acd4d5 = handleError(function(arg0, arg1) {\n    var ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_globalThis_48a5e9494e623f26 = handleError(function() {\n    var ret = globalThis.globalThis;\n    return addHeapObject(ret);\n});\n\nconst __wbg_self_25067cb019cade42 = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_window_9e80200b35aa30f8 = handleError(function() {\n    var ret = window.window;\n    return addHeapObject(ret);\n});\n\nconst __wbg_global_7583a634265a91fc = handleError(function() {\n    var ret = global.global;\n    return addHeapObject(ret);\n});\n\nconst __wbg_buffer_f897a8d316863411 = logError(function(arg0) {\n    var ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n});\n\nconst __wbg_newwithbyteoffsetandlength_7ccfa06426575282 = logError(function(arg0, arg1, arg2) {\n    var ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_boolean_get = function(arg0) {\n    const v = getObject(arg0);\n    var ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;\n    _assertNum(ret);\n    return ret;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\nconst __wbindgen_memory = function() {\n    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"];\n    return addHeapObject(ret);\n};\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, start, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_exn_store, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index.js */ \"./pkg/index.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);