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

## 改造新闻列表链接

## 新闻资讯页面制作
1. 绘制页面 使用mui的media列表 flex布局 能用css3 就不要用css2
2. vue-resource获取数据 
    + 格式化数据定义全局过滤器
    + 导入时间插件moment npm i moment
3. 渲染数据

## 实现新闻列表点击跳转详情页面
1. 把列表每一项改造成router-link，在跳转时提供唯一的标识符
2. 创建新闻详情的组件页面
3. 路由模块将地址对应起来

## 实现新闻详情的页面布局和数据渲染
1. 先创建一个单独的comment.vue组件模板
2. 在需要使用comment组件的页面中，先手动导入comment组件
    + import comment from './comment.vue'
3. 在父组件中，使用'components'属性，将刚才导入comment组件，注册为自己的子组件
4. 将注册子组件时候，注册名称，以标签形式，在页面中引用即可 

## 获取所有的评论数显示到页面中

## 实现点击加载更多评论功能
1. 为加载更多按钮，绑定点击事件，在事件中请求下一页数据
2. 点击加载更多，让pageIndex++
3. 获取新数组时，拼接老数据concat()

## 发表评论
1. 文本框数据双向绑定
2. 发表按钮绑定时间
3. 检验内容是否为空 Toast提示
4. 通过vue-resource post发送请求
5. 提交后刷新列表，查看最新评论：手动拼接一个最新评论对象，unshift到comment的开头

## 图片分享路由链接组件

## 绘制图片列表
### 顶部滑动条，
    + 借助mui的tab-top-webview-main.html，去掉mui-fullscreen类
    + 出发滑动：导入mui的js文件，手动初始化scroll控件
    + mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    + 报错：Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
    + webpack打包好的bundle.js 中使用严格模式，两者冲突
    + 解决方案：1、把mui.js中的不严格模式改掉，不现实；2、禁用webpack里的严格模式
    1. 安装npm install babel-plugin-transform-remove-strict-mode;
    2. 配置：.babelrc 文件添加配置
    {
       "plugins": ["transform-remove-strict-mode"]
    }
    3. 使用remove "use strict" directive
    + 刚进入不能滑动，将初始化scroll挂在到mounted里
    + 不能切换底部tab mui-tab-item样式冲突,复制样式用新类名
    + 获取分类，渲染分类
        
### 底部图片列表
1. 使用mnit-ui lazy load

### 实现图片列表的懒加载改造和样式美化

## 实现点击图片跳转到图片详情页面
1. 在改造li成router-link的时候，tag属性指定要渲染为哪一种元素

## 实现详情页面的布局和美化，同时获取数据渲染页面

### 缩略图
1. 使用插件vue-preview 安装，引用
2. 每个图片数组对象中必须有w 宽度和h 高度

## 绘制商品列表页面

## 尝试在手机上进行样式的预览和测试
1. 手机和电脑处于同一WiFi
2. 打开项目中 package.json， 在dev脚本中，添加一个--host指令，把当前电脑的WiFi IP地址设置为--host的指令值
