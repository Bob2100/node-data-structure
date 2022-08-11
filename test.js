import StackList from './StackList.js'

const stack = new StackList(1)

function onPush(...args) {
  console.log('pushed:', args, this)
}
const onPush2 = (...args) => {
  console.log('pushed2:', args, this)
}

stack.addEventListener('push', onPush)
stack.addEventListener('push', onPush2)
stack.removeEventListener('push', onPush2)

stack.push('x', 'y')
console.log(stack.value)
