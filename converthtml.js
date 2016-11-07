//正则表达式
/*
==元字符== 大写反义
\b开始处
\d数字
\s任意空白符
\w字母 数字 下划线 汉字
^以之开始
$以之结束
.换行符意外的任意字符
==限定符==
* 0 or more
+ 1 or more
? 0 or 1
{n} n
{n,} n or more
{n,m} n ~ m
==懒惰==
*?
+?
??
{n,m}?
{n,}?
*/

function convertHTML(str){
  var encodeStr = str.replace(/[\u00A0-\u9999<>\&]/gim, function(i){
    return "&#" + i.charCodeAt(0) + ";";
  });
  console.log(encodeStr);
  return encodeStr;
}
convertHTML("<>");