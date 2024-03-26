export default [
  {
    name: "首页",
    desc: "一个简易的首页，Echarts、词云、响应式布局",
  },
  {
    name: "通用模板页面",
    desc: "通用后台管理页面模板，使用elementUI并对其样式二次修改，包含基本的增删改查、分页、表单校验、批量操作、表格高度自适应等功能，增删改查的实现是使用axios请求接口，并通过mockjs库拦截请求模拟获取数据",
  },
  {
    name: "Echarts_Show",
    desc: "部分项目中曾配置过的Echarts图表，使用grid布局，数据均为假数据",
  },
  {
    name: "ThreeJs_Learn",
    desc: "年前空闲的时候学习的一个threeJS官网案例。有个疑问若能解答万分感谢：最开始的时候将配置项、方法以vue2的语法写在data和methods中，在写到球的碰撞检测时页面很卡，发现是因为循环函数走的是CPU不是GPU，一直没能解决，后来改成原生的写法就好了。对比了下两者，从js的语法角度看，无非一个的配置绑在了vue实例上，其他并没有区别，但为什么一个循环走的是CPU而另一个是GPU呢？",
  },
  {
    name: "CSS_&_SVG_Show - CSS 3D Sphere",
    desc: '使用css的"border-radius: 50%;transform-style: preserve-3d;transform: rotateY(deg)"等属性绘制的一个带有经纬度的3D球',
  },
  {
    name: "CSS_&_SVG_Show - SVG IMITATE 3D",
    desc: "使用svg实现的一个模拟3D的页面。实现思路：使用透视投影算法，将3D坐标投影到2D平面上，根据相机的角度和距离计算点的2D坐标，通过监听鼠标和滚轮事件改变点的坐标，实现模拟3d的效果。参考地址：https://codepen.io/strangerintheq/pen/KKpRdav",
  },
  {
    name: "CSS_&_SVG_Show - SVG + Sphere",
    desc: "前两个页面的结合",
  },
  {
    name: "CSS_&_SVG_Show - Sphere System",
    desc: "一个使用 CSS 模拟星系效果的页面，文字跟随效果有瑕疵",
  },
  {
    name: "CSS_&_SVG_Show - SVG Connector",
    desc: '不知道怎么描述页面。实现思路：通过将角度转换为弧度并使用三角函数计算出圆周上每个点的坐标，点与点之间通过[{from: "",to: ""}]表示连接关系，并以此表示线，鼠标移入的时候通过循环找到要显示的线改变颜色',
  },
  {
    name: "CSS_&_SVG_Show - SVG 拓扑图 1",
    desc: '使用svg实现的一个拓扑图页面。实现思路：先渲染方形div并给它绑定id，使用[{from: "id1",to: "id2"}]表示连接关系,使用document.getElementById()方法循环找出连接双方的对应点，',
  },
];