<<<<<<< HEAD
export React from "react";
import {
	render
} from "react-dom";
import HelloWorld from "./HelloWorld";
const node = document.createElement("div");
document.body.appendChild(node);
render(<HelloWorld />, node);
=======
import _ from 'lodash';
import printMe from './print.js';
import './index.css';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!');
		document.body.removeChild(element);
		element = component(); // 重新渲染页面后，component 更新 click 事件处理
		document.body.appendChild(element);
	})
}
>>>>>>> 72d852b925479209d982ca303c6146b543929707
