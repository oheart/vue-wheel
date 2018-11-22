## vue-wheel
Learning to make vue wheels

## 安装
1. 使用本框架前，请在css中开启border-box
```css
*{
    box-sizing: border-box;
}
```
2. 构建工具
- [parcel](https://parceljs.org/)  
    **安装步骤：**     
    - npm install -D parcel-bundler 
    - [资料](https://cn.vuejs.org/v2/guide/installation.html#Parcel)
    - parcel index.html no-chache
- [官方推荐](https://cn.vuejs.org/v2/guide/installation.html#Parcel)
- [查看兼容性](https://caniuse.com/)

3. 项目运行
- parcel index.html no-chache

4. 图标
- [iconfont](http://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2.WeXcRo)
- 图标使用方式： symbol引用
5. 其他  

    **git-open使用**  
    - npm install -g git-open
    - 切换到项目目录，命令行输入git-open可打开项目远程所在的git仓库

    **chai.js涉及的几个概念**  
    - BDD(Behavior-driven development)：行为驱动开发--> 用自然语言描述需求，只要这么需求测试通过就可以...
    - TDD(Test-driven development): 测试驱动开发--> 先写测试程序，然后编码
    - Assert: 断言 --> 我主观认为
    
    **chai-spies**
    [chai-spies](https://github.com/chaijs/chai-spies/blob/master/package.json)