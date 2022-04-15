# linux常用命令

## 获取运行脚本所在路径

使用`$(dirname $(readlink -f "$0")`

而不是`pwd`

例子:

```shell
CURRENT_DIR=$(dirname $(readlink -f "$0"))
#`pwd`获取到的是控制台当前路径
```



## kill程序

使用`kill [-s <信息名称或编号>][程序]　或　kill [-l <信息编号>]`

```tex
# kill -l
1) SIGHUP     2) SIGINT     3) SIGQUIT     4) SIGILL     5) SIGTRAP
6) SIGABRT     7) SIGBUS     8) SIGFPE     9) SIGKILL    10) SIGUSR1
11) SIGSEGV    12) SIGUSR2    13) SIGPIPE    14) SIGALRM    15) SIGTERM
16) SIGSTKFLT    17) SIGCHLD    18) SIGCONT    19) SIGSTOP    20) SIGTSTP
21) SIGTTIN    22) SIGTTOU    23) SIGURG    24) SIGXCPU    25) SIGXFSZ
26) SIGVTALRM    27) SIGPROF    28) SIGWINCH    29) SIGIO    30) SIGPWR
31) SIGSYS    34) SIGRTMIN    35) SIGRTMIN+1    36) SIGRTMIN+2    37) SIGRTMIN+3
38) SIGRTMIN+4    39) SIGRTMIN+5    40) SIGRTMIN+6    41) SIGRTMIN+7    42) SIGRTMIN+8
43) SIGRTMIN+9    44) SIGRTMIN+10    45) SIGRTMIN+11    46) SIGRTMIN+12    47) SIGRTMIN+13
48) SIGRTMIN+14    49) SIGRTMIN+15    50) SIGRTMAX-14    51) SIGRTMAX-13    52) SIGRTMAX-12
53) SIGRTMAX-11    54) SIGRTMAX-10    55) SIGRTMAX-9    56) SIGRTMAX-8    57) SIGRTMAX-7
58) SIGRTMAX-6    59) SIGRTMAX-5    60) SIGRTMAX-4    61) SIGRTMAX-3    62) SIGRTMAX-2
63) SIGRTMAX-1    64) SIGRTMAX
```

例子:

```shell
kill -9 100
```



## 查看端口占用

使用`lsof -i :端口号`

例子:

```shell
lsof -i :8888
```



## 定时任务

crontab

每五分钟执行 */5 * * * *

每小时执行   0 * * * *

每天执行     0 0 * * *

每周执行    0 0 * * 0

每月执行     0 0 1 * *

每年执行    0 0 1 1 *

在线工具https://tool.lu/crontab/

### 查看任务

```shell
crontab -l
```


### 编辑任务

```shell
crontab -e
```

### 删除任务

```shell
crontab -r
```


## 修改时区

```shell
timedatectl set-timezone Asia/Shanghai
```



## 设置虚拟交换内存

使用 dd 命令创建交换文件

```shell
dd if=/dev/zero of=/var/swap bs=1024 count=2048000
```

### 设置交换文件

```shell
mkswap /var/swap
swapon /var/swap
```

### 修改/etc/fstab文件

```shell
nano /etc/fstab
# 最后加入以下内容
/var/swap swap                    swap    defaults        0 0
```

### 其他操作

```shell
# 停止swap分区
swapoff /var/swap
# 删除swap文件，需要先停止swap分区
rm -rf /var/swap
```
