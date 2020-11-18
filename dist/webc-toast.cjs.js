'use strict';

// 创建一个类或函数来指定web组件的功能
class Toast extends HTMLElement {
    constructor() {
        // 必须首先调用 super方法
        super();
        this.init();
    }
    init() {
        // 自定义元素的功能代码写在这里
        // 创建一个 shadow root
        const shadow = this.attachShadow({mode: 'open'});
        const template = this.createTemplate();
        // 创建一些 CSS，并应用到 shadow dom上
        const style = this.createStyle();
        // 将创建的元素附加到 shadow dom
        shadow.appendChild(style);
        shadow.appendChild(template);
    }
    createTemplate() {
        // Toast 结构 <div><span>This is toast content!</span></div>
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'c-toast-wrapper');
        const contentWrapper = document.createElement('span');
        contentWrapper.setAttribute('class', 'c-toast-wrapper__cwrapper');
        // 获取content属性上的内容，并添加到span标签内
        const textContent = this.getAttribute('content');
        contentWrapper.textContent = textContent;
        wrapper.appendChild(contentWrapper);
        return wrapper;
    }
    createStyle() {
        const show = this.getAttribute('show');
        console.log(show);
        // 创建一些 CSS，并应用到 shadow dom上
        const style = document.createElement('style');
        style.textContent = `
        .c-toast-wrapper {
            box-sizing: content-box;
            padding: 5px 20px;
            text-align: center;
            position: fixed;
            left: 50%;
            transform: translate(-50%, 0);
            top: 40px;
            border: solid 1px #eee;
            border-radius: 10px;
            user-select: none;
            color: #0060ff;
            border-color: #0060ff;
            background-color: #fff;
        }
        `;
        return style;
    }
}

// 使用customElements 的 define()方法将 custom element注册到CustomElementRegistry上，在方法的参数里，我们指定了元素的名称，以及定义了元素功能的类。
customElements.define('webc-toast', Toast);
