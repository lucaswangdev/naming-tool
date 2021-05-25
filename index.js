const fs = require("fs");
const os = require("os");

fs.readFile("./doc/input.md", function (error, data) {
  if (error) {
    console.log("读取文件失败");
    console.log(error);
    return;
  } else {
    //写入前先清空文件
    fs.writeFile('./doc/output.md', '', function(){
      console.log('清空文件');
    })
    const str = data.toString() || "";
    const strArray = str.split(/[\n]/);
    for (let i = 0; i < strArray.length; i++) {
      // 注释
      let remark = '';
      // 输出的文件
      let outStr = ''
      const reg1 = /\/\/.*/g;
      if(reg1.test(strArray[i])){
        remark = strArray[i];
        fs.appendFileSync("./doc/output.md", remark);
        continue;
      } else {
        // 空格分隔的单词转为用下划线拼接
        const _str = strArray[i].split(" ").join("_").toLowerCase();
        // 小驼峰
        const Text2 = (_str + "").replace(/\_(\w)/g, function (all, letter) {
          return letter.toUpperCase();
        });
        // 下划线连接
        const Text = (Text2 + "").replace(/([A-Z])/g, "_$1").toLowerCase();
        // 大驼峰
        const Text3 = (Text2 + '').replace(/^\S/, s => s.toUpperCase());
        // CSS样式文件名
        const TestCSS = strArray[i].split(" ").join("-").toLowerCase();
        // 输出文件
        outStr = `
  ${Text3}
  ${Text2}
  ${Text}
  ${TestCSS}
        `;
      }
      fs.appendFileSync("./doc/output.md", outStr + os.EOL);
    }
  }
});
