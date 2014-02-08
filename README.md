requirejs-package
=================

提供了对grunt requirejs 以及require js 的打包及依赖测试示例

##如何使用

* fork项目到本地
* 有node，git环境，进入到当前项目，git中执行命令 `npm install` 
* 再执行 `grunt` 即可
* 对比打包前的`dev`和打包后的`build`目录文件差别

##详细描述

该项目使用了极其简单的示例，来说明如何使用`grunt-contrib-requirejs`进行对`require` js的依赖模块进行打包。并且进行了测试。 

测试主要是针对`js`文件，`css`文件，分为在单独文件内的重复依赖测试，在文件引用文件（嵌套依赖）的依赖测试。


***
比如：模块`d.js`依赖于`a.js`，模块`b.js`，`e.js`依赖于`b.js`，`c.js`，`de.js`启动文件依赖于`d.js`，`e.js`。那么，调用了`de.js`会不会导致`b.js`的重复请求和重复合并呢？

测试表明打包正确，并且请求不重复。

***

##文件配置

`require` 的配置在js文件夹下的`requirejs-config.js`中，用来正确导入依赖的模块。但是该配置与`grunt-contrib-requirejs`打包无关（用`r.js`也是一个道理，打包配置需要重定义）。

那么打包的配置在哪里呢？

打包需要重新定义，请参考官方`r.js`的配置。

使用`grunt`任务工具时，可以使用`grunt-contrib-requirejs`进行配置并打包。无需再使用`r.js`。配置可以参考项目示例。

详细参考官方文档。

###其它资料

见本人博客分享：

* [前端优化：RequireJS Optimizer 的使用和配置方法（一）](http://blog.segmentfault.com/f2e/1190000000394849)
* [前端优化：RequireJS Optimizer 的使用和配置方法（二）](http://blog.segmentfault.com/f2e/1190000000395435)

