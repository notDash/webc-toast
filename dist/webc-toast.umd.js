(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  // 创建一个类或函数来指定web组件的功能
  var Toast = /*#__PURE__*/function (_HTMLElement) {
    _inherits(Toast, _HTMLElement);

    var _super = _createSuper(Toast);

    function Toast() {
      var _this;

      _classCallCheck(this, Toast);

      // 必须首先调用 super方法
      _this = _super.call(this);

      _this.init();

      return _this;
    }

    _createClass(Toast, [{
      key: "init",
      value: function init() {
        // 自定义元素的功能代码写在这里
        // 创建一个 shadow root
        var shadow = this.attachShadow({
          mode: 'open'
        });
        var template = this.createTemplate(); // 创建一些 CSS，并应用到 shadow dom上

        var style = this.createStyle(); // 将创建的元素附加到 shadow dom

        shadow.appendChild(style);
        shadow.appendChild(template);
      }
    }, {
      key: "createTemplate",
      value: function createTemplate() {
        // Toast 结构 <div><span>This is toast content!</span></div>
        var wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'c-toast-wrapper');
        var contentWrapper = document.createElement('span');
        contentWrapper.setAttribute('class', 'c-toast-wrapper__cwrapper'); // 获取content属性上的内容，并添加到span标签内

        var textContent = this.getAttribute('content');
        contentWrapper.textContent = textContent;
        wrapper.appendChild(contentWrapper);
        return wrapper;
      }
    }, {
      key: "createStyle",
      value: function createStyle() {
        var show = this.getAttribute('show');
        console.log(show); // 创建一些 CSS，并应用到 shadow dom上

        var style = document.createElement('style');
        style.textContent = "\n        .c-toast-wrapper {\n            box-sizing: content-box;\n            padding: 5px 20px;\n            text-align: center;\n            position: fixed;\n            left: 50%;\n            transform: translate(-50%, 0);\n            top: 40px;\n            border: solid 1px #eee;\n            border-radius: 10px;\n            user-select: none;\n            color: #0060ff;\n            border-color: #0060ff;\n            background-color: #fff;\n        }\n        ";
        return style;
      }
    }]);

    return Toast;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  customElements.define('webc-toast', Toast);

})));
