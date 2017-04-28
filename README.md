# react-native配置

## 环境
`windows` `android`

## 1.java环境

下载java包并安装（自行百度）

## 2.java环境变量

在系统环境变量中新建 `JAVA_HOME`为`D:\Java\jdk1.8.0_121`(请替换成你的java安装地址)

在系统环境变量中Path添加`%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;`

## 3.android环境

下载Android Studio并安装并且安装sdk（自行百度）

在系统环境变量中新建 `ANDROID_HOME`为`D:\Android\sdk`(请替换成你的java安装地址)

在系统环境变量中Path添加`%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;`

打开`Android SDK Manager`（就是一个叫SDK Manager.exe的）

选中以下项目并安装
```
Tools -> Android SDK Tools
Tools -> Android SDK Platform-tools
Tools -> Android SDK Build-tools (version 23.0.1)
Android 6.0 (API 23) -> SDK Platform
Android 6.0 (API 23) -> Intel x86 Atom_64 System Image
Android 6.0 (API 23) -> Intel x86 Atom System Image
Android Support Repository
```

## 4.node环境

安装nodejs环境，在命令行中输入node -v检查是否安装完成（不会自行百度）
## 5.git环境

安装git环境，并在系统环境变量Path添加`d:\Git\cmd;`（请换成你的地址），在命令行中输入git --version检查是否安装完成（不会自行百度）

## 6.react-native环境

在命令行中输入`npm install -g react-native-cli`

## 7.初始化react-native项目

在命令行制定目录下输入`react-native init myapp`（myapp是你的项目名）

这个过程比较慢，趁这个机会安装android模拟器吧

## 8.安装模拟器


Android Studio有自己的模拟器，但是很难折腾，所以装一个Genymotion吧（请自行安装），最好安装Genymotion with VirtualBox版本，因为模拟器需要虚拟机环境支持

安装好Genymotion with VirtualBox后，添加一个你喜欢的模拟器并且启动（说的有些简单，还是自行百度吧就不上图了）

在这个过程中或有很多莫名其妙的问题，如果你的电脑性能不好、内存不够，硬盘不足，出的问题更多，自求多福吧。基本的解决办法有1.重起电脑把耗性能的服务停掉，2.重起虚拟机和模拟器等等


ok这时候如果看到android的界面，万事大吉

如果你用实体机，请忽略以上，将你的安卓机通过数据线连接到电脑就行

## 9.启动react-native


react-native init myapp完成之后，如果没报错则继续，有报错请check自己的环境

接下来启动项目，在命令行输入`react-native run-android`,可能会自动弹出一个监听8081端口的服务，如果没有弹出请新打开一个命令行窗口输入`react-native start`

稍等一会项目正在启动，这个过程也很容易出问题，如你环境配的有问题就会报错,比如你的环境变量路径配置错了，sdk包装少了（如果你觉得sdk包已经都装了还是报错，上网找找多装几个，反正我给的起来了）

这些sdk包都很大，希望你的硬盘足够


## 10.调试

如果没有报错，项目启动完成，这时候模拟器或者实体机会自动打开一个myapp的app

这个过程虚拟机有可能报错，泪崩，按ctrl+m调出调试选项，点击Dev Settings，点击Debug server host & port for device,设置IP和端口（此ip是你电脑的ip,端口固定8081）

如输入192.168.1.100:8081

虚拟机回到首屏，按ctrl+m调出调试选项，点击Reload JS，这时候应该就好了吧


这个过程实体机报错，别哭，可能是实体机和电脑不在一个局域网的问题，请查看官方文档，在命令行执行`adb reverse tcp:8081 tcp:8081`，调出调试选项（听说摇一摇就可以），点击Reload JS


## 11.开发

主入口文件在index.android.js，试着改里面的文字保存，在模拟器用double R按键刷新，在实体机中如何刷新请尝试吧

接下来你就可以在官方文档[http://reactnative.cn/](http://reactnative.cn/)自由的飞翔

如果你熟悉react开发可以尝试redux
