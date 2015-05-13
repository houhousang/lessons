var express = require('express'), mysql = require('mysql');
var router = express.Router();
// console.log(mysql);
var con = mysql.createConnection({
	user : 'root',
	password : '',
	database : 'test'
});	


/*
	* 测试代码， 能够进行 sql 注入.
*/
/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.render('users');
});

router.get('/v0.0.0/:id([0-9]+)', function(req, res){  //查询
	query('select * from users where stu_id=' + req.params['id'], req, res);
});

router.post('/v0.0.0/:id([0-9]+)/data?', function(req, res){  //添加
	query('insert into users(stu_id,name,age) values('+ req.params['id'] + ',"' +  req.query['name'] + '",'+ req.query['age'] +')',  req, res);
});

router.put('/v0.0.0/:id([0-9]+)/data?', function(req, res){  //更新
	query('update users set name="' +  req.query['name'] + '", age = '+ req.query['age'] +' where stu_id=' + req.params['id'] ,  req, res);
});

router.delete('/v0.0.0/:id([0-9]+)', function(req, res){   //删除
	console.log('delete from users where stu_id=' + req.params['id']);
	query('delete from users where stu_id=' + req.params['id'], req, res);
});

function query(qs, req, res){  //查询语句
	con.query(qs, function(err, ret){
		if(err){
			res.send(err);
		}else{
			con.query('select * from users where stu_id=' + req.params['id'], function(err, ret){
				if(err){
					res.send(err);
				}else{
					res.send(ret);
				}
			});
		}
	});
}
module.exports = router;
