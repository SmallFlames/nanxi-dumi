---
title: Linux系统安装
group: Linux基础
toc: content
order: 1
---

### 什么是操作系统

&emsp;&emsp;操作系统是一种对计算机（所有计算机资源，如 CPU、内存、磁盘、输入、输出、操作网络、文件管理......）进行控制和管理的**系统软件**，是处于用户与计算机硬件系统之间用于传递信息的系统程序软件，是<font color=red>**人与计算机硬件的中介**</font>。

<img src="https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231028113949378.png" />

&emsp;&emsp;外围应用程序指的是QQ、微信、浏览器等等一系列的应用程序，这些程序一般都是以图形界面的形式呈现给我们，但是所有图形界面的操作计算机是无法识别的，命令解释器的作用就是把这些操作转化为shell命令然后传递给系统核心，系统核心就相当于一个翻译官，把这些shell命令转换为计算机硬件可识别的二进制指令，计算机识别这些命令并操作，操作完成后便会继续一步步返回到外层，最终在应用图形界面得到显示反馈。

&emsp;&emsp;<font color="grey">*:warning:注意：为了文档的可移植性本文所使用的图片资源均已上传网络，可直接下载进行学习，有时图片资源的加载可能比较缓慢，建议使用流量访问。*</font>

### 为什么要用Linux（意义）

&emsp;&emsp;Linux是服务器领域的最主流操作系统之一，它被广泛应用于Web服务器、数据库服务器等。

&emsp;&emsp;Linux和Windows是两个常见的操作系统，但它们有着明显的区别。Linux是一种开源操作系统，可以免费使用和修改；而Windows是商业软件，需要花费大量的资金购买，且Linux的安全性和稳定性也比Windows更高。

<!-- more -->

&emsp;&emsp;Linux常用的操作系统有CentOS、Ubuntu、Redhat......

&emsp;&emsp;本文以CentOS操作系统为例进行介绍。

### 使用VMware上安装CentOS步骤

&emsp;&emsp;1.创建新的虚拟机；

<img src="https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027163303625.png" />

&emsp;&emsp;2.跟随虚拟机向导选择“自定义”，下一步；

![image-20231027163359553](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027163359553.png)

&emsp;&emsp;3.使用默认的硬件兼容性指标，下一步；

![image-20231027163447962](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027163447962.png)

&emsp;&emsp;4.选择稍后安装操作系统，方便我们自定义硬件配置，然后下一步；

![image-20231027163529169](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027163529169.png)

&emsp;&emsp;5.操作系统选择Linux，版本选择CentOS7 64位；

![image-20231027163647626](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027163647626.png)

&emsp;&emsp;6.更改虚拟机名称和位置，可自定义；

![image-20231027163836529](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027163836529.png)

&emsp;&emsp;7.选择你要为自己的虚拟机配置的CPU个数，一般1个即可；

![image-20231027163909033](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027163909033.png)

&emsp;&emsp;8.自定义虚拟机的内存大小；

![image-20231027163955322](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027163955322.png)

&emsp;&emsp;9.选择NAT网络地址转换；

![image-20231027164037112](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027164037112.png)

&emsp;&emsp;10.I/O控制默认选择即可；

![image-20231027164113471](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027164113471.png)

&emsp;&emsp;11.磁盘类型默认SCSI；

![image-20231027164149115](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027164149115.png)

&emsp;&emsp;12.创建新虚拟机磁盘，下一步；

![image-20231027164225929](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027164225929.png)

&emsp;&emsp;13.自定义磁盘大小，并选择**将虚拟磁盘拆分成多个文件**[^1] ，然后下一步；

>方便后期划分空间。扩展灵活：可以根据需要添加或删除虚拟机磁盘文件，更加灵活。容错性高：由于虚拟机磁盘文件分散在不同的位置，因此如果出现问题，只会影响到部分虚拟机磁盘，整个虚拟机不会受到影响。大小可控：可以根据需要设置每个虚拟机磁盘文件的大小，更加灵活。

![image-20231027164321712](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027164321712.png)

&emsp;&emsp;14.下一步即可；

![image-20231027164340011](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027164340011.png)

&emsp;&emsp;15.配置好后完成即可；

![image-20231027164427452](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027164427452.png)

&emsp;&emsp;16.选择编辑虚拟机设置；

![image-20231027164523834](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027164523834.png)

&emsp;&emsp;17.导入下载好的CentOS镜像文件（镜像文件可以从[阿里巴巴开源镜像站-阿里云开发者社区 ](https://developer.aliyun.com/mirror/?spm=a2c6h.25603864.0.0.132666edsZ3mIz)下载）；

![image-20231030144245275](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231030144245275.png)

![image-20231027164711517](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027164711517.png)

&emsp;&emsp;18.开启虚拟机，选择install CentOS 7，按下tab键，可选择性配置设备显示；

~~~shell
 net.ifnames=0 biosdevname=0
~~~

&emsp;&emsp;配置虚拟机网络接口命名和设备显示。net.ifnames=表示禁用新的网络接口命名规则，即使用传统的ethX方式命名网络接口。而biosdevname=则表示禁用BIOS提供的设备名称，使用内核提供的设备名称。

&emsp;&emsp;在CentOS 7中，网卡的命名规则进行了更新，网卡名从以前的eth0开始更改为ens33。在一些用户的实际应用过程中，可能存在一些依赖eth0的应用，但是在新版中却无法使用，因此需要将网卡名更改为eth0以实现应用的顺利运行。实际工作中网卡的命名听从公司统一安排即可。

![image-20231027165021803](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027165021803.png)

![image-20231027165126729](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027165126729.png)

&emsp;&emsp;19.默认选择英语即可；

![image-20231027165258275](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027165258275.png)

&emsp;&emsp;20.设置时区，选择上海时间即可；

![image-20231027165439535](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027165439535.png)

![image-20231027165547888](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027165547888.png)

&emsp;&emsp;21.设置本地支持的语言；

![image-20231027165631766](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027165631766.png)

![image-20231027165757864](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027165757864.png)

&emsp;&emsp;22.安装应用程序，最小化安装即可，同时需要安装debug工具、兼容性库、开发工具和系统管理员工具 ；

![image-20231027165855691](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027165855691.png)

![image-20231027165941751](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027165941751.png)

&emsp;&emsp;23.选择标准磁盘设置，增加系统分区/boot[^2]、swap[^3]、/[^4]。

> **/boot分区存放系统内核文件**，Linux系统在本地启动时，目录/boot/非常重要，其中的文件和目录有：系统Kernel的配置文件、系统启动时的模块供应主要来源的Initrd文件、系统Kernel中的变量对应表System.map文件、启动过程中最重要的一个文件vmlinuz——这个文件就是实际系统所使用的kernel。
>
> **swap交换分区，作为Linux操作系统的虚拟内存**，是指在Linux操作系统中为了提高系统运行效率而设置的一块特殊的硬盘空间，当系统内存不足时，会将一部分不常用的内存数据存储到swap分区中，以释放内存空间，从而保证系统的稳定运行，swap分区的大小一般设置为物理内存大小的1倍到1.5倍，但也可以根据实际情况进行调整。在Linux系统中，如果没有分swap，当内存不够时，系统会默认杀死内存占用最高的服务。**一般情况下对外的服务器，我们不分swap，而是选择增加内存。对内的服务，自己使用的服务可以分swap。当流量不稳定时，无法判断用户是否真实的情况下，此时选择增加swap还是内存，一般的运维人员不能自己轻易的去做抉择。**
>
> （/）根分区，这是Linux系统的根目录，包括操作系统的核心文件和系统配置。

![image-20231027170610149](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027170610149.png)

&emsp;&emsp;LVM是指逻辑卷管理，它是指在磁盘基础上通过LVM进行动态磁盘管理，好处是磁盘空间可以动态分配，劣势是操作系统需要先通过访问LVM才能访问磁盘进行操作，降低了资源访问效率。标准卷管理时磁盘分配后不可改变，但操作系统访问效率高，这里我们选择标准卷管理。

![image-20231028120940240](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231028120940240.png)

![image-20231027194312079](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027194312079.png)

![image-20231027170446229](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027170446229.png)

&emsp;&emsp;分区设置好之后点击接受更改即可；

![image-20231027170520022](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027170520022.png)

&emsp;&emsp;23.选择关闭系统异常崩溃时记录日志（可选择性操作）；

![image-20231027170749959](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027170749959.png)

![image-20231027170817580](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027170817580.png)

&emsp;&emsp;24.配置本地端口名字，进行网络设置；

![image-20231027170953758](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027170953758.png)

&emsp;&emsp;在基本设置里面勾选虚拟机自动启动网卡并进行连网，

![image-20231027171201118](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027171201118.png)

&emsp;&emsp;手动设置IPV4地址相关信息；

![image-20231027171459492](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027171459492.png)

&emsp;&emsp;配置虚拟机网络时，需要注意地址必须在同一网段内，否则虚拟机无法连网。

![Snipaste_2023-10-27_21-10-42](https://gitee.com/XZ6606/image-bed/raw/master/img/Snipaste_2023-10-27_21-10-42.png)

![](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027211523301.png)

&emsp;&emsp;点击完成后，打开虚拟网络编辑器，更改设置；

![image-20231029151140542](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231029151140542.png)

![image-20231029151824489](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231029151824489.png)

![image-20231029152000971](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231029152000971.png)

&emsp;&emsp;25.配置好后点击开始安装CentOS；

![image-20231027172344514](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027172344514.png)

&emsp;&emsp;26.设置管理员密码（密码太简单可能会有提示，继续done即可）；

![image-20231027172433727](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027172433727.png)

![image-20231027172459690](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027172459690.png)

&emsp;&emsp;27.密码设置完成后，重启即可开始安装CentOS（时间较长，耐心等待一下哦:smile_cat:）；

![image-20231027174209411](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027174209411.png)

&emsp;&emsp;28.安装完成后，输入用户密码即可登录；注意:warning:：打开数字锁，输入密码不显示是正常的，Linux命令行下密码均不显示，确保密码输入正确回车即可。 

![image-20231027174450827](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231027174450827.png)

&emsp;&emsp;29.尝试用虚拟机访问外网，例如访问百度官网，使用命令`ping www.baidu.com`，出现下面情况即虚拟机网络配置成功，使用ctrl+c停止访问百度。

![image-20231029152233594](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231029152233594.png)
