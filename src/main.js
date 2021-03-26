//创建节点
//const div = dom.create("<div>创建一个节点</div>");
const div2 = dom.creates("<div>创建一个子节点</div>");
console.log(div2)
//新增弟弟
//dom.after(test, div2);
//新增哥哥
dom.before(test, div2)

//新增爸爸
const div3 = dom.creates("<div id='parent'></div>")
console.log(div3)
dom.warp(test, div3)

//删除
//dom.remove(div2)

//删除所有元素
const nodes = dom.empty(window.empty)
console.log(nodes)

//改写属性
dom.attr(test,'title','hi, I am Frank')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

//文本内容
console.log('-----')
dom. text(test,"要加快进度了")
const  text = dom.text(test)
console.log(text)

//HTML内容
console.log('-----')
dom.html(test,'再快在块')
const  htmls = dom.html(test)
console.log(htmls)

//修改style
console.log('-----')
dom.style(test, {border: '1px solid red', color: 'blue'})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

//添加class
console.log('-----')
dom.class.add(test,'red')
//dom.class.remove(test,'red')
console.log(dom.class.has(test,'red'))

//添加监听事件
console.log('-----')
const fn = ()=>{
    console.log('点击了')
  }
dom.on(test,'click',fn)
//删除事件
//dom.off(test, 'click', fn)

//获取标签
console.log('-----')
const testDiv = dom.find('#test')[0]
console.log(testDiv)
const test2 = dom.find('#test2')[0]
console.log(dom.find('.red',test2)[0])

//获取父元素
console.log(dom.parent(test))

//获取子元素
console.log(dom.children(test))
console.log('-----')
//获取兄弟姐妹
const s2 = dom.find('#s2')[0]
console.log(s2)
console.log(dom.siblings(s2))

//获取弟弟
console.log('-----')
console.log(dom.next(s2))
//获取哥哥
console.log(dom.previous(s2))

console.log('-----')
//遍历所有节点
dom.each(dom.children(dom.find('#travel')[0]), (n)=> dom.style(n, 'color', 'green'))

//获取排行老几
console.log(dom.index(dom.find('#s1')[0]))