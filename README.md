# naming-tool

![image1](./public/images/image1.png)
## 一个提高给变量命名的效率、准确率的工具。

### 安装依赖

```
npm install
```



### 启动应用

```
npm run start
```



在项目根路径doc/input.md文件，添加变量名称，保存，在doc/output.md文件会输出相应格式的变量名称。(注释用"//")

例如：(doc/input.md)

```
// 注册名称
Registered name
```

输出：(doc/output.md)

```
// 注册名称
  RegisteredName
  registeredName
  registered_name
  registered-name
```

