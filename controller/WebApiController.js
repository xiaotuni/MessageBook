var url = require("url");
var util = require("util");
var fs = require("fs");
var Comm = require("./../lib/commonMethod");
var pp = require("./../lib/publicProperty");
var DB = require("./../lib/database");

exports.WebApi = {
  GetValues: function (Request, Response, Options) {
    try {

      // Options.POST.createtime = Comm.Comm.GetCurrentDate();
      // Comm.DB.Add("messages", Options.POST, function (err, data) {
      //   if (err) {
      //     Response.SendErrorInfo("添加失败." + Comm.Comm.ParseObject(err));
      //   } else {
      //     Response.SendMsg("添加成功", "/Message/list");
      //   }
      // });
      const data = [
        { id: 1, title: 'title', content: 'content' },
        { id: 2, title: 'title', content: 'content' },
        { id: 3, title: 'title', content: 'content' },
        { id: 4, title: 'title', content: 'content' },
        { id: 5, title: 'title', content: 'content' },
        { id: 6, title: 'title', content: 'content' },
      ];
      Response.Send(JSON.stringify(data));
    }
    catch (e) {
      Comm.Log.Print(Comm.Comm.ParseObject(e));
    }
  },
}