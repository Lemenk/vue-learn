# 创建Vue CLI4初始项目

## 步骤

~~~sh
vue create project-name
~~~

### 第一步：选择配置

<img src="https://images.lemenk.top/img/image-20200623174235896.png" alt="image-20200623174235896" style="zoom:80%;" />

### 第二步：选择项目使用的组件。
**使用空格键选择或反选**

![image-20200623174653869](https://images.lemenk.top/img/image-20200623174653869.png)

### 第三步：选择将配置存放的位置

![image-20200623175540854](https://images.lemenk.top/img/image-20200623175540854.png)

一般性选择第一项，即存放到独立的文件中。

### 第四步：选择是否保存刚才的配置
若选择yes，则需要填写文件名称。这里我设置为`myself-config`。

![image-20200623180008702](https://images.lemenk.top/img/image-20200623180008702.png)

保存后，在下一次创建项目时就会出现该配置。

![image-20200623180415469](https://images.lemenk.top/img/image-20200623180415469.png)

若要删除该配置，则可以进入`C:\Users\username\.vuerc`文件中删除`presets`中的配置。

### 第五步，在经过一系列自动配置后完成项目的创建。

![image-20200623181045707](https://images.lemenk.top/img/image-20200623181045707.png)

#### 目录结构

![image-20200623182058236](https://images.lemenk.top/img/image-20200623182058236.png)

## 配置文件

### 配置文件去哪里了

很明显可以看到该项目文件夹下没有了cli2中的build和config文件夹。这是因为在lic3中将配置文件隐藏在`node_modules\@vue\cli-service`中。

![image-20200624104215943](https://images.lemenk.top/img/image-20200624104215943.png)

### 如何修改配置文件

1. 使用`vue ui`：

   在任意一目录下启动cmd，使用以下命令：

   ~~~sh
   vue ui
   ~~~

   将会启动vue服务器，打开一个本地服务

   <img src="https://images.lemenk.top/img/image-20200624104539898.png" alt="image-20200624104539898" style="zoom:80%;" />

   在导入下选择项目所在的文件夹，将会进入该项目的配置页面。可以根据需求对一些配置进行修改。

2. 在项目下创建`vue.config.js`文件，并导出配置

   ~~~js
   module.exports = {
   }
   ~~~