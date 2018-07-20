let fs = require('fs');
let request = require('request');
let cheerio = require('cheerio');
let Entities = require('html-entities').XmlEntities;
entities = new Entities();
let num = 0;
let news = [];

let getNewList = function() {
  let url = "http://www.qiushibaike.com";
  console.log(url);
  request(url,function(err,res) {
    if(err) {
      return console.error(err);
    }
    let $ = cheerio.load(res.body.toString());
    let table = $('body').find("article").eq(2).find("a").eq(2).html();
    $('body').find("article").each(function() {
      let cont = $(this).find("a").eq(2).html();
      let username = $(this).find("a").eq(1).html();
      news.push({"username":entities.decode(username),"cont":entities.decode(cont)})
    });
    console.log(news);
    let datas = JSON.stringify(news);
    fs.writeFile("./data.json",datas, function(err) {
      if(err) throw new Error('写文件失败' + err);
      console.log('成功写入文件')
    });
  });
  setInterval(function() {
    getNewList();
  },60000)
}
getNewList()