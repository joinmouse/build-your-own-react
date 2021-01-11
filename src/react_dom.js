function render(element, container) {
    const dom = element.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type)

    const isProperty = (key) => {
        return key !== "children"
    }

    Object.keys(element.props).filter(isProperty).forEach(name => {
        dom[name] = element.props[name]
    })

    // 递归的挂载内容
    element.props.children.forEach(child => {
        render(child, dom)
    })

    container.appendChild(dom)
}

const ReactDOM = {
    render
}

export default ReactDOM