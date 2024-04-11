### CSS position 属性用于指定一个元素在文档的定位方式。top、right、bottom、left、这四个属性表示四个方向，分别定义元素在对应方向上的偏移量。

### 语法
```css
position: static | relative | absolute | fixed | sticky;
```
###
- static: 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。该关键词是元素在文档常规流中当前的布局位置。
- relative: 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
- absolute: 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
- fixed: 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
- sticky: 生成粘性定位的元素，元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。