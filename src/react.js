function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                // 判断child是对象还是普通的文本
                return typeof child === 'object' ? child : createTextElement(child)
            })
        }
    }
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    }
}

const React = {
    createElement,
    createTextElement
}

export default React