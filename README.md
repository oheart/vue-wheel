## vue轮子

## 介绍
Learning to make vue wheels

## 开始使用
1. 添加css样式
    **使用本框架前，请在css中开启border-box**
    ```css
    *, *::before, *::after{box-sizing: border-box}
    ```  
    IE8及以上浏览器都支持此样式。

    还需要设置默认颜色等变量(后续改为scss变量) 
    ```css
    :root{   
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE9及以上浏览器支持此样式。
2. 安装
```
npm i 
```
3. 构建工具
- [parcel](https://parceljs.org/)  
    **安装步骤：**     
    - npm install -D parcel-bundler 
    - [资料](https://cn.vuejs.org/v2/guide/installation.html#Parcel)
    - parcel index.html no-chache
- [官方推荐](https://cn.vuejs.org/v2/guide/installation.html#Parcel)
- [查看兼容性](https://caniuse.com/)

4. 项目运行
- npm start(parcel index.html no-chache)

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

**chai-spies**
[chai-spies](https://github.com/chaijs/chai-spies/blob/master/package.json)

**使用Karma + Mocha做单元测试**
- Karma是一个测试运行器，它可以呼起浏览器，加载测试脚本，然后运行测试用例
- Mocha是一个单元测试框架／库，它可以用来写测试用例
- Sinon是一个spy/mock库，用以辅助测试（使用后才能理解） 

自动化测试步骤：  
1. npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies
2. ....未完待续

**badge**  
https://docs.travis-ci.com/user/status-images/  


https://www.quora.com/How-do-I-add-an-NPM-package-badge-for-my-project-on-Github

http://shields.io/

