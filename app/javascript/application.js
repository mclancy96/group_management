import React from "react";
import ReactDOM from "react-dom";
import "@playbook/pb_kits/pb_kits.js";
const components = require.context("./components", true, /\.jsx?$/);
import 'playbook-ui/dist/playbook-rails.js';

components.keys().forEach((fileName) => {
    const componentName = fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "");

    const Component = components(fileName).default;

    document.querySelectorAll(`[data-react-component="${componentName}"]`).forEach((el) => {
        ReactDOM.render(<Component {...(el.dataset.props ? JSON.parse(el.dataset.props) : {})} />, el);
    });
});