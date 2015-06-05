var express = require('express');
var router = express.Router();
var crypto = require('crypto');
// var User = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 0
    };
    res.render('index', param);
});
router.get('/index.html', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 0
    };
    res.render('index', param);
});
router.get('/about-us.html', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 1
    };
    res.render('about-us', param);
});
router.get('/shortcodes.html', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 2
    };
    res.render('shortcodes', param);
});
router.get('/blog-item.html', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 3
    };
    res.render('blog-item', param);
});
router.get('/portfolio.html', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 4
    };
    res.render('portfolio', param);
});

router.get('/blog.html', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 4
    };
    res.render('blog', param);
});

router.get('/contact-us.html', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 5
    };
    res.render('contact-us', param);
});
router.get('/pricing.html', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 6
    };
    res.render('pricing', param);
});
router.get('/404.html', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 0
    };
    res.render('404', param);
});
router.get('/map.html', function(req, res, next) {
    var param = {
        title: "UAP",
        index: 0
    };
    res.render('map', param);
});


// router.get('/reg', function(req, res) {
//     var name = req.param("name"),
//         password = req.param("password");
//     //生成密码的 md5 值
//     var md5 = crypto.createHash('md5'),
//         password = md5.update(password).digest('hex');
//     var newUser = new User({
//         name: name,
//         password: password,
//         email: "test"
//     });
//     //检查用户名是否已经存在 
//     User.get(newUser.name, function(err, user) {
//         console.log("get")
//         console.log(user);
//         if (err) {
//             req.flash('error', err);
//             return res.redirect('/reg');
//         }
//         if (user) {
//             req.flash('error', '用户已存在!');
//             return res.redirect('/reg1'); //返回注册页
//         }
//         //如果不存在则新增用户
//         newUser.save(function(err, user) {
//             if (err) {
//                 req.flash('error', err);
//                 return res.redirect('/reg'); //注册失败返回主册页
//             }
//             console.log("sanve")
//             console.log(user);
//             req.session.user = user; //用户信息存入 session
//             req.flash('success', '注册成功!');
//             res.redirect('/reg'); //注册成功后返回主页
//         });
//     });
// });

module.exports = router;