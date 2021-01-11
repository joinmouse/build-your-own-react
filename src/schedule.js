let nextUnitOfWork = null

function workLoop(deadline) {
    let shouldYield = false
    while(nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
        // deadline.timeRemaining(): 前帧剩余的时间，也可理解为留给任务的时间还有多少
        shouldYield = deadline.timeRemaining() < 1
    }
    // the browser will run the callback when the main thread is idle.
    requestIdleCallback(workLoop)
}

// mdn: https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback
// 浏览器空闲时间: https://www.cnblogs.com/Wayou/p/requestIdleCallback.html
requestIdleCallback(workLoop)

// performUnitOfWork执行工作单元，并返回下一个工作单元
function performUnitOfWork(nextUnitWork) {

}