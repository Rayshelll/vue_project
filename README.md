#### 我的第一个vue项目
## 制作首页App组件
1. header区域，使用的是mint-ui中的header组件
2. 制作底部的tabbar区域，使用的是mui的tabbar.html
    + 制作购物车小图标使用扩展图标，需要将扩展图标的css样式，字体库文件拷贝到项目中
    
3. 要在中间区域放置一个router-view来展示路由匹配到的组件

## 改造tabbar为router-link

## 设置路由高亮
    + 路由高亮：在路由对象里使用linkActiveClass: 'mui-active'  覆盖默认的类router-link-active

## 点击tabbar中的路由链接，展示对应组件的路由组件

## 制作首页轮播图

## 加载首页轮播图数据
1. 获取数据，使用vue-resource
2. 使用vue-resource的$http.get获取数据
3. 获取到的数据要保存到data身上
4. 使用v-for循环渲染到每个item项

## 制作六宫格

## 制作组件切换动画
1. v-enter和v-leave-to要分开设置保证右进左出
2. 设置overflow-x: hidden隐藏x方向的滚动条
