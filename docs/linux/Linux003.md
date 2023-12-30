---
title: Linux连接原理解释
group: Linux基础
toc: content
order: 3
---

## 一、Xshell连接服务器

> 服务器之间的通信是通过IP地址进行的，两台机器之间想要通信则它们的IP地址必须是同一网段。IP地址的构成是由四组数字组成，分为网络位和主机位。按照IP地址的分类不同他们的网络位和主机位个数也不一样，A类地址有一个网络位三个主机位，B类地址有二个网络位两个主机位，C类地址有三个网络位一个主机位。如：192.168.10.1，前三位即为网络位，最后一位是主机位。

1.原理解释：
&emsp;&emsp;我们在Windows电脑安装VMware时，会自动在本地创建一个虚拟网卡，名字叫VMware，在电脑上打开本地连接就能看到。如果看不到虚拟网卡则可能是系统兼容性问题，通常的处理办法是卸载清除并重装软件。Xshell连接服务器使用的是虚拟网卡的IP地址连接虚拟机。但是它们之间并不是直接通信，而是通过虚拟机里面的交换机（虚拟网络编辑器）进行IP地址识别交互，而<font color="red">根据通讯原则，它们的IP地址必须在同一网段内，且不能产生IP冲突</font>。

![image-20231031210512345](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231031210512345.png)

2.失误排查：
&emsp;&emsp;检查到IP地址之间的线路是否通畅，保障它们的IP地址必须在同一网段内，且不产生IP冲突。
<!-- more -->

-  打开虚拟机，输入`ip a `回车查看IP地址配置；(192.168.10.2/24)
![image-20231101092056761](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101092056761.png)

-  打开网络编辑器查看交换机IP地址配置；(192.10.0.0/24)

![image-20231101092353288](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101092353288.png)

-  打开网络连接查看VMnet8（虚拟网卡）的IP地址配置；

![image-20231101092803478](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101092803478.png)

![image-20231101093003377](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101093003377.png)

![image-20231101093353168](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101093353168.png)

&emsp;&emsp;检查Xshell软件的连接参数是否正确。
- IP地址、用户名、密码、ssh协议、端口；

![image-20231101093734829](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101093734829.png)

> :warning:注意: 如果IP地址不显示
>
> 1.配置错误(网卡文件的配置)；
>
> 2.重启网卡服务: systemctl restart network 或者重启虚拟机；
>
> 3.关闭服务: NetworkManager网络管理服务；在Linux操作系统中管理网络的有两个服务: network和NetworkManager，这两个服务有时候会起冲突，需要关闭NetworkManager；
>
> 4.关闭NetworkManager的命令:
>
> #查看是否启动`systemctl status NetworkManager `
>
> #在当前操作系统中退出`systemctl stop NetworkManager`
>
> #禁止开机自动运行`systemctl disable NetworkManager`
>
> #关闭NetworkManager后执行重启网络服务`systemctl restart network`

## 二、虚拟机访问外网

1.原理解释：
&emsp;&emsp;虚拟机的IP（一般由路由器DHCP服务自动下发），首先要通过交换机与路由器通信，确保虚拟机访问外网的请求可以传出，然后通过NAT地址转换技术，把请求信息发给本地网卡以192.168.17.43的IP地址访问外网。本地网卡再通过交换机和路由器访问外网也是一样的道理。

![image-20231101210815426](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101210815426.png)

2.失误排查：

- 首先需要确保Windows可以上网；(打开浏览器或者使用ping命令查看)

- 查看虚拟机的IP地址是否正确；`ip a`

- 虚拟机的网关和路由器的IP必须一致；

![image-20231101211454332](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101211454332.png)

![image-20231101211726178](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101211726178.png)

- 检查NAT服务是否开启，如果都没有问题可以重启NAT服务。

![image-20231101095359062](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101095359062.png)

> *:warning:注意：如下提示则是DNS配置错误*
>
> ```sh
> [root@localhost ~]# ping 110.242.68.4
> PING 110.242.68.4 (110.242.68.4) 56(84) bytes of data.
> 64 bytes from 110.242.68.4: icmp_seq=1 ttl=128 time=13.2 ms
> 64 bytes from 110.242.68.4: icmp_seq=6 ttl=128 time=14.9 ms
> 64 bytes from 110.242.68.4: icmp_seq=7 ttl=128 time=13.2 ms
> # 110.242.68.4是百度的IP地址
> root@localhost ~]# ping www.baidu.com
> ping: www.baidu.com: Name or service not known
> ```
>
> ```sh
> 谷歌提供的DNS服务器：
> 首选DNS服务器：8.8.8.8
> 备用DNS服务器：8.8.4.4
> 
> 香港的一组DNS服务器：
> 首选DNS服务器：205.252.144.228
> 备用DNS服务器：202.181.202.140
> 
> 澳门大学的DNS服务器：
> 首选DNS服务器：202.175.3.3
> 备用DNS服务器：202.175.3.8
> 
> 美国的openDNS：
> 首选DNS服务器：208.67.222.222
> 备用DNS服务器：208.67.220.220
> 
> 全国三网通用高速，纯净无劫持
> 114.114.114.144
> 114.114.115.115
> 
> 阿里DNS
> 223.5.5.5
> 223.6.6.6
> 
> SDNS,高速、安全、智能无劫持
> 1.2.4.8
> 210.2.4.8
> 
> openDNS
> 208.67.222.222
> 208.67.220.220
> ```
>
> #查看网络配置文件
>
> ```sh
> [root@localhost ~]# cat /etc/sysconfig/network-scripts/ifcfg-eth0
> ```
>
> ![image-20231101090754851](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101090754851.png)
>
> #修改网络配置文件
>
> ```sh
> [root@localhost ~]# vi /etc/sysconfig/network-scripts/ifcfg-eth0
> # 输入i 进入插入模式，可以修改配置文件。
> # 退出：ESC : wq       （保存并退出）
> ```
>
> **<font color="red">一般情况下，修改配置完成后重启后修改的配置才能生效。</font>**  `reboot`

> *相关硬件介绍：*
>
> 交换机：交换机是一种网络设备，它可以将数据包从一个端口转发到另一个端口。交换机通过学习MAC地址来确定数据包的目标地址，并将数据包转发到正确的端口。交换机通常用于连接局域网中的多个设备。
>
> 路由器：路由器是一种网络设备，它可以将数据包从一个网络传输到另一个网络。路由器通过查找目标地址并选择最佳路径来转发数据包。路由器可以连接不同类型的网络，例如局域网和广域网。
>
> 路由器和交换机是网络中常见的两种设备，它们的主要区别在于它们的工作方式和应用场景。
>
> ![image-20231101115005092](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101115005092.png)
>
> 为什么要使用交换机？路由器的端口非常少，我们的设备都是通过网线直接连接路由器的，可连接的设备非常少。交换机的端口相对较多，通过交换机可以连接很多台设备。通过WiFi服务连接网络网络质量一般较低，所以企业中交换机基本是必备的。
>
> 应用场景：交换机通常用于连接局域网中的多个设备，例如连接计算机、打印机和服务器。交换机可以提供高速数据传输和网络流量控制功能。路由器通常用于连接不同的网络，例如连接公司内部网络和互联网。路由器可以提供网络安全功能，例如防火墙和虚拟专用网络（VPN）。
>
> ![image-20231101115349360](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101115349360.png)
>
> 路由器是一个网络设备而WiFi是一种网络服务，企业路由器通常只做路由，WiFi一般是另外部署的，但是家用的路由器一般都集成的有无线WiFi服务，我们手机连接的热点就是通过WiFi信号访问路由器。
>
> ![image-20231101115630064](https://gitee.com/XZ6606/image-bed/raw/master/img/image-20231101115630064.png) 

> *知识补充：无线AP和无线路由器有什么区别？无线路由器允许局域网中多个有线和无线设备连接在一起。无线AP在有线网络和无线设备之间中继数据。*:arrow_right:[无线AP和无线路由器详解](https://www.bilibili.com/video/BV1vQ4y1K7w5?t=171.7):arrow_left:

