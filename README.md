## vue轮子

## 介绍
Learning to make vue wheels

## 开始使用
1. 安装  
 **使用本框架前，请在css中开启border-box**
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


## 文档

## 变更记录


## 图标
- [iconfont](http://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2.WeXcRo)
- 图标使用方式： symbol引用
## 其他  

**git-open使用**  
- npm install -g git-open
- 切换到项目目录，命令行输入git-open可打开项目远程所在的git仓库

**chai.js涉及的几个概念**  
- BDD(Behavior-driven development)：行为驱动开发--> 用自然语言描述需求，只要这么需求测试通过就可以...
- TDD(Test-driven development): 测试驱动开发--> 先写测试程序，然后编码
- Assert: 断言 --> 我主观认为

**chai-spies:**
[chai-spies](https://github.com/chaijs/chai-spies/blob/master/package.json)

**使用Karma + Mocha做单元测试**
- Karma是一个测试运行器，它可以呼起浏览器，加载测试脚本，然后运行测试用例
- Mocha是一个单元测试框架／库，它可以用来写测试用例
- Sinon是一个spy/mock库，用以辅助测试（使用后才能理解） 

自动化测试步骤：  
1. npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies
2. ....未完待续

****  
https://docs.travis-ci.com/user/status-images/  

