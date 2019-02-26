## 输入框
## 输入框使用场景
- 输入(输入前提示，输入报错，清空)
- 复制/粘贴
- 键盘tab键定位
- 敲击回车
- 不可输入
## 输入框状态
- normal态（输入）
- disabled态
- readonly态
- hovered态
- focused态
- error态（错误提示） error/error+focused/error+hovered
- success态（成功提示） success/success+focused/success+hovered

## 事件
- change
- input
- focus
- blur

## 如何让input组件支持v-model
```html
 <input type="text"   :value="value"  @input="$emit('input', $event.target.value)">
```


