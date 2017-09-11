#电子商务网站

## 简介

三个星期内，在校跟我同学**[姚](https://github.com/jhyao)**一起完成的任务，任务需求在需求文档里写的很清楚了。时间有限，尽了最大的能力完成，唯一缺憾就是没能完成网站后台管理模块。

开发环境:  
- sts
- windows
- webstrom

还有前后台json数据交互也上传至**接口定义.md**文件。  

整体实现代码已经全部上传，在ec目录下导入工程即可。    

## 网站展示

就直接先展示效果了。商品分类部分用的瀑布流，个人感觉很满意。  

![首页](https://raw.githubusercontent.com/dalaizhao/ElectronicCommerce/master/image/%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5.PNG)  

![登录](https://raw.githubusercontent.com/dalaizhao/ElectronicCommerce/master/image/%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2.PNG)  

![分类](https://github.com/dalaizhao/ElectronicCommerce/blob/master/image/%E5%95%86%E5%93%81%E5%88%86%E7%B1%BB%E9%A1%B5.PNG?raw=true)  

![详情](https://raw.githubusercontent.com/dalaizhao/ElectronicCommerce/master/image/%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85%E9%A1%B5.PNG)  

![用户](https://raw.githubusercontent.com/dalaizhao/ElectronicCommerce/master/image/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E4%BF%AE%E6%94%B9.PNG)  

![购物车](https://raw.githubusercontent.com/dalaizhao/ElectronicCommerce/master/image/%E8%B4%AD%E7%89%A9%E8%BD%A6.PNG)  

![地址](https://raw.githubusercontent.com/dalaizhao/ElectronicCommerce/master/image/%E5%9C%B0%E5%9D%80.PNG)  

## 实现

先贴出sql E-R图（还有两个函数）,这个设计的挺好的，但是导师指出一些问题，大概还记得是用户表要合并成一个（还有吧，忘了），不过运行之类没问题，要完整sql代码的私聊或者issues：  
![sql](https://raw.githubusercontent.com/dalaizhao/ElectronicCommerce/master/image/database.png)   

整体实现代码已经全部上传，在ec目录下导入工程即可。  