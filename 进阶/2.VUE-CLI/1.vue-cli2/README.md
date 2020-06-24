### 创建Vue CLI2初始项目


#### 首先拉取vue cli2
~~~sh
npm install -g @vue/cli-init
~~~

#### 再创建名为my-project的vue项目
~~~sh
vue init webpack my-project
~~~

#### 过程
![image-2](https://github.com/Lemenk/images/blob/master/github-pages/2.png)



#### 项目结构：

<img src="https://github.com/Lemenk/images/blob/master/github-pages/1.png" alt="image-1" style="zoom:80%;" />


#### runtime-compiler与 runtime-only
在使用Vue-CLI初始化项目时，会有一个选择是使用runtime+compiler和runtime-only的选项。通过创建项目可以发现两者的区别。