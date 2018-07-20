module.exports = {

	//插入数据
	insertData : function(db, tableName, insertData, callback) {  
	    //连接到表 dynamic
	    var collection = db.collection(tableName);
	    
	    collection.insert(insertData, function(err, result) { 
        if(err)
        {
          console.log('Error:'+ err);
          return;
        }     
        callback(result);
	    });
	},
	//查询数据
	selectData : function(db, tableName, whereStr, callback) {  
    //连接到表  
    var collection = db.collection(tableName);
    collection.find(whereStr).toArray(function(err, result) {
	    if(err)
	    {
	      console.log('Error:'+ err);
	      return;
	    }     
	    callback(result);
	  });
	},
	//更新数据
	updateData : function(db, tableName, whereStr, updateStr, callback) {  
    //连接到表  
    var collection = db.collection(tableName);
    
    collection.update(whereStr,updateStr, function(err, result) {
      if(err)
      {
        console.log('Error:'+ err);
        return;
      }     
      callback(result);
    });
  },
  //删除数据
  delData : function(db, tableName, whereStr, callback) {  
	  //连接到表  
	  var collection = db.collection(tableName);
	  collection.remove(whereStr, function(err, result) {
	    if(err)
	    {
	      console.log('Error:'+ err);
	      return;
	    }     
	    callback(result);
	  });
	}
}