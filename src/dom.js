window.dom = {
    //创建单独节点
    // create(string) {
    //     const container = document.createElement('template');
    //     container.innerHTML = string.trim();
    //     let firstChild = container.content.firstChild
    //     document.body.appendChild(firstChild)
    //     return firstChild;
    // },
    //生成一个待插入的元素
    creates(string) {
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },

    after(node, node2) {
        console.log(node.nextSibling)
        //拿到父节点,在去获取父节点 node.nextSibling 的最后一个元素 div test,在他后面在插入一个节点
        node.parentNode.insertBefore(node2, node.nextSibling);
    },

    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },

    append(parent, node) {
        parent.appendChild(node)
    },

    warp(node, parent) {
        //同上解释
        dom.before(node, parent)
        //现在parent说你要当我儿子,调用appenChild, 你就在parent的里面了
        //appenChild只能在一个地方出现,以前的位置就改变了
        dom.append(parent, node)
    },

    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },

    empty(node) {
        // childNodes = node.childNodes  子节点的集合
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },

    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        }
        if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },

    text(node, string) {
        if (arguments.length === 2) {
            //判断是否在IE 
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent
            }
        }
        if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },

    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        }
        if (arguments.length === 1) {
            return node.innerHTML
        }
    },

    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        }
        if (arguments.length === 2) {
            return node.style[name]
        }
        if (name instanceof Object) {
            const object = name
            for (let key in object) {
                node.style[key] = object[key]
            }
        }
    },

    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },

    on(node, evenName, fn) {
        node.addEventListener(evenName, fn)
    },

    off(node, evenName, fn) {
        console.log('删除了')
        node.removeEventListener(evenName, fn)
    },

    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },

    parent(node) {
        return node.parentNode
    },

    children(node) {
        return node.children
    },

    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },

    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },

    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },

    each(nodeList,fn){
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null,nodeList[i]);
        }
    },

    index(node){
        const list  = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node){
                 break
            }
        }
        return i 
    }
};