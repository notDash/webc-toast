import Toast from './Toast';

// 使用customElements 的 define()方法将 custom element注册到CustomElementRegistry上，在方法的参数里，我们指定了元素的名称，以及定义了元素功能的类。
customElements.define('webc-toast', Toast);
