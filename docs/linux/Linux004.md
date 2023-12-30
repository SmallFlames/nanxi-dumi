---
title: Linux目录结构概述
group: Linux基础
toc: content
order: 4
---

# 一、Linux与Windows的目录结构区别

&emsp;&emsp;Linux目录结构是一个标准化的文件系统层次结构，非常有组织性并且易于管理，Linux将所有文件和设备都组织在一个单一的根目录下，可以简单的理解为<font color="red">Linux下一切皆文件</font>**。Windows系统一般有两个盘（或者更多），分为系统盘和数据盘。**系统盘用于安装操作系统和存储系统文件，而数据盘用于存储用户数据和应用程序等信息。系统盘是系统的核心组成部分，而数据盘用于扩展存储空间和备份用户数据。**从数据结构上看，Linux操作系统就是一棵树，而Windows则更像森林。**

> **与Linux不同，Windows操作系统采用了不同的目录结构：**
>
> - **C:\ **：Windows中安装的默认操作系统驱动器盘符，包含了整个文件系统；
>
> - **C:\Program Files\ **：标准程序安装位置，包括与Windows系统预装程序无关的所有应用程序；
>
> - **C:\Program Files (x86)\ **：32位Windows中的标准程序安装位置，使32位应用程序可以在64位Windows中运行；
>
> - **C:\Windows\ **：Windows系统文件和系统级应用程序的主要目录；
>
> - **C:\Users\ **：每个用户的个人文件夹和配置文件；

<!--more-->


# 二 、Linux目录结构介绍

![Snipaste_2023-11-01_16-37-26](https://gitee.com/XZ6606/image-bed/raw/master/img/Snipaste_2023-11-01_16-37-26.png)

> ```sh
> [root@localhost ~]# cd /
> [root@localhost /]# ll
> ```
>
> ![image-20231101200239886](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101200239886.png)
>
> *:warning:注意：白色为文件，蓝色为目录，如果目录下只有一个文件直接使用tab键会自动补全。*

- /：根目录，包含了整个文件系统；

- /bin：二进制可执行文件，例如cat、ls、ping等；

- /boot：启动时使用的核心文件和引导加载程序；

- /dev：设备文件，包括硬件设备和外部设备（如USB驱动器、打印机和调制解调器等）；

- /etc：系统级配置文件，包括网络配置、用户账户、安全和服务启动脚本等；

- /home：用户主目录，每个用户都有自己的子目录；

- /lib和/lib64：共享库文件，支持/bin和/sbin中的命令；

- /media：可移动介质，例如CD-ROM、闪存驱动器等；

- /mnt：临时挂载点，系统管理员可以将其他文件系统挂载到此目录中；

- /opt：第三方应用程序目录，通常在此处安装非默认软件；

- /proc：虚拟文件系统，提供有关运行进程和系统状态的信息；

- /root：超级用户（root）的主目录；

- /run：文件系统中运行时数据的放置处，例如PID文件和套接字文件等；

- /sbin：超级用户使用的系统二进制命令，用于管理系统和网络；

- /srv：服务数据目录，例如Web服务器、FTP服务器等；

- /sys：虚拟文件系统，包含了所有硬件设备、内核和驱动程序；

- /tmp：临时文件目录，系统管理员和应用程序可以在此处创建和删除文件；

- /usr：常规用户使用的应用程序和文件，包括/bin、/sbin、/lib和/usr/share等子目录；

- /var：变量文件，包含日志文件、数据库文件、缓存文件以及其他一些变量数据；
- ......


# 三、Linux最基本命令使用

&emsp;&emsp;路径：在数学上的定义，从A点到达B点所经过的路线，就叫做路径。计算机同理，从一个文件位置到另一个文件所在的位置所经过的目录层级，我们称其为路径。

&emsp;&emsp;路径分为绝对路径和相对路径，绝对路径一定是由根目录 / 开始写起。与绝对路径不同，相对路径不是从根目录 / 开始写起，而是从当前所在的工作目录开始写起。Windows视图中我们常见的寻找文件方式基本上都是绝对路径和相对路径混合使用。

&emsp;&emsp;Linux基本命令：cd、ls、pwd、cat、touch、vim、history......


| 命令    | 命令解释                     |               命令常见使用方法                |
| ------- | ---------------------------- | :-------------------------------------------: |
| cd      | 切换目录；                   |       cd /etc/sysconfig/network-scripts       |
| ls      | 显示目录下的详细信息；       |                ls & ll & ls /                 |
| pwd     | 显示当前所在位置的绝对路径； |                      pwd                      |
| cat     | 查看文本文件内容；           | cat /etc/sysconfig/network-scripts/ifcfg-eth0 |
| touch   | 创建文件；                   |       touch 1.1txt &touch /home/1.2txt        |
| vim     | 文件编辑器；                 |         vim 1.1txt & vi /home/1.2txt          |
| history | 查看历史执行过的命令；       |             history & !56 & !命令             |



> 注意：开头的 / 表示根目录，后面的 / 表示层级关系。
>
> 当使用 root 身份登录 Linux 系统时，当前工作目录默认为 /root。
>
> ```sh
> [root@localhost ~]# pwd
> /root
> [root@localhost ~]# 
> ```
>
> 如果以 root 身份登录 Linux 系统，并实现将当前工作目录由 /root 转换为 /usr 目录，有以下 2 种方式：
>
> ```sh
> [root@localhost ~]# pwd
> /root
> [root@localhost ~]# cd /usr
> [root@localhost usr]# #这是使用绝对路径------1
> [root@localhost usr]# cd 
> [root@localhost ~]# #cd回车直接回到家目录
> [root@localhost ~]# cd ../usr
> [root@localhost usr]# pwd
> /usr
> [root@localhost usr]# #这是使用相对目录------2
> [root@localhost usr]# 
> # pwd：表示显示当前所在位置的绝对路径。
> ```
>
> ```sh
> [root@localhost ~]# cd /
> [root@localhost /]# ls
> bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
> boot  etc  lib   media  opt  root  sbin  sys  usr
> [root@localhost /]# cd /etc/sysconfig
> [root@localhost sysconfig]# cd ..
> [root@localhost etc]# cd sysconfig
> [root@localhost sysconfig]# cd ../..
> [root@localhost /]# cd -
> /etc/sysconfig
> [root@localhost sysconfig]# 
> # cd ..    表示返回上一级
> # cd ../.. 表示返回上一级的上一级
> # cd ../.. 表示返回上一级的上一级的上一级
> # cd -     表示回到上一次执行指令时所在的目录
> [root@localhost sysconfig]# cd grub
> -bash: cd: grub: Not a directory
> [root@localhost sysconfig]# mkdir xz
> [root@localhost sysconfig]# cd xz
> [root@localhost xz]# cd ../../..
> [root@localhost /]# cd -
> /etc/sysconfig/xz
> [root@localhost xz]# cd ..
> [root@localhost sysconfig]# rmdir xz
> [root@localhost sysconfig]# 
> ```
>更详细的命令使用参考CSDN博客--------:arrow_right:[Linux常用的命令解析](https://blog.csdn.net/weixin_45908488/article/details/123703179?ops_request_misc=%7B%22request%5Fid%22%3A%22169882590416800182734666%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=169882590416800182734666&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-123703179-null-null.142^v96^pc_search_result_base4&utm_term=linux返回上一步命令&spm=1018.2226.3001.4187):arrow_left:




> 人，只有在放弃战斗的时候才算输，只要坚持战斗，就还没输。
>
> <p align="right" > ————《进击的巨人》</p>



{% aplayer "Barricades" "TVアニメ「進撃の巨人」Season 2 オリジナルサウンドトラック" "http://cdn.zzxe.eu.org/Barricades_%E6%B3%BD%E9%87%8E%E5%BC%98%E4%B9%8B_TV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E9%80%B2%E6%92%83%E3%81%AE%E5%B7%A8%E4%BA%BA%E3%80%8DSeason%202%20%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF.mp3" "https://img2.kuwo.cn/star/albumcover/500/49/91/608155747.jpg" "autoplay" %}

![jinjidejuren](https://gitee.com/XZ6606/image-bed/raw/master/img/jinjidejuren.png)

![jinjidejuren](https://gitee.com/XZ6606/image-bed/raw/master/img/jinjidejuren.gif)

