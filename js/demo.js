/*
* 注意：
* 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
* 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
* 3. 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
*
* 如有问题请通过以下渠道反馈：
* 邮箱地址：weixin-open@qq.com
* 邮件主题：【微信JS-SDK反馈】具体问题
* 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
*/
wx.ready(function () {

    // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
    $('#checkJsApi').bind('click', function () {

        wx.checkJsApi({
            jsApiList: [
        'getNetworkType',
        'onMenuShareAppMessage'
      ],
            success: function (res) {

                alert(JSON.stringify(res));
            }
        });
    });

    // 2. 分享接口
    // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
    $('#onMenuShareAppMessage').bind('click', function () {

        wx.onMenuShareAppMessage({
            title: "游你网",
            desc: "改变。",
            link: "http://m.youne.cn/storedetails.html",
            imgUrl: "http://m.youne.cn/storedetails.html",
            trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                alert('用户点击发送给朋友');
            },
            success: function (res) {
                alert('已分享');
            },
            cancel: function (res) {
                alert('已取消');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        alert('已注册获取“发送给朋友”状态事件111');
    });

    // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
    $('#onMenuShareTimeline').bind('click', function () {

        wx.onMenuShareTimeline({
            title: "游你网",
            link: "http://m.youne.cn/storedetails.html",
            imgUrl: "http://m.youne.cn/storedetails.html",
            trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                alert('用户点击分享到朋友圈');
            },
            success: function (res) {
                alert('已分享');
            },
            cancel: function (res) {
                alert('已取消');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        alert('已注册获取“分享到朋友圈”状态事件2222');
    });

    // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
    $('#onMenuShareQQ').bind('click', function () {

        wx.onMenuShareQQ({
            title: '互联网之子',
            desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
            link: 'http://movie.douban.com/subject/25785114/',
            imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
            trigger: function (res) {
                alert('用户点击分享到QQ');
            },
            complete: function (res) {
                alert(JSON.stringify(res));
            },
            success: function (res) {
                alert('已分享');
            },
            cancel: function (res) {
                alert('已取消');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        alert('已注册获取“分享到 QQ”状态事件');
    });

    // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
    $('#onMenuShareWeibo').bind('click', function () {

        wx.onMenuShareWeibo({
            title: '互联网之子',
            desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
            link: 'http://movie.douban.com/subject/25785114/',
            imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
            trigger: function (res) {
                alert('用户点击分享到微博');
            },
            complete: function (res) {
                alert(JSON.stringify(res));
            },
            success: function (res) {
                alert('已分享');
            },
            cancel: function (res) {
                alert('已取消');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        alert('已注册获取“分享到微博”状态事件');
    });

    // 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
    $('#onMenuShareQZone').bind('click', function () {

        wx.onMenuShareQZone({
            title: '互联网之子',
            desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
            link: 'http://movie.douban.com/subject/25785114/',
            imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
            trigger: function (res) {
                alert('用户点击分享到QZone');
            },
            complete: function (res) {
                alert(JSON.stringify(res));
            },
            success: function (res) {
                alert('已分享');
            },
            cancel: function (res) {
                alert('已取消');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
        alert('已注册获取“分享到QZone”状态事件');
    });


    // 3 智能接口
    var voice = {
        localId: '',
        serverId: ''
    };
    // 3.1 识别音频并返回识别结果
    $('#translateVoice').bind('click', function () {

        if (voice.localId == '') {
            alert('请先使用 startRecord 接口录制一段声音');
            return;
        }
        wx.translateVoice({
            localId: voice.localId,
            complete: function (res) {
                if (res.hasOwnProperty('translateResult')) {
                    alert('识别结果：' + res.translateResult);
                } else {
                    alert('无法识别');
                }
            }
        });
    });

    // 4 音频接口
    // 4.2 开始录音
    $('#startRecord').bind('click', function () {

        wx.startRecord({
            cancel: function () {
                alert('用户拒绝授权录音');
            }
        });
    });

    // 4.3 停止录音
    $('#stopRecord').bind('click', function () {

        wx.stopRecord({
            success: function (res) {
                voice.localId = res.localId;
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    });

    // 4.4 监听录音自动停止
    wx.onVoiceRecordEnd({
        complete: function (res) {
            voice.localId = res.localId;
            alert('录音时间已超过一分钟');
        }
    });

    // 4.5 播放音频
    $('#playVoice').bind('click', function () {

        if (voice.localId == '') {
            alert('请先使用 startRecord 接口录制一段声音');
            return;
        }
        wx.playVoice({
            localId: voice.localId
        });
    });

    // 4.6 暂停播放音频
    $('#pauseVoice').bind('click', function () {

        wx.pauseVoice({
            localId: voice.localId
        });
    });

    // 4.7 停止播放音频
    $('#stopVoice').bind('click', function () {

        wx.stopVoice({
            localId: voice.localId
        });
    });

    // 4.8 监听录音播放停止
    wx.onVoicePlayEnd({
        complete: function (res) {
            alert('录音（' + res.localId + '）播放结束');
        }
    });

    // 4.8 上传语音
    $('#uploadVoice').bind('click', function () {

        if (voice.localId == '') {
            alert('请先使用 startRecord 接口录制一段声音');
            return;
        }
        wx.uploadVoice({
            localId: voice.localId,
            success: function (res) {
                alert('上传语音成功，serverId 为' + res.serverId);
                voice.serverId = res.serverId;
            }
        });
    });

    // 4.9 下载语音
    $('#downloadVoice').bind('click', function () {
        if (voice.serverId == '') {
            alert('请先使用 uploadVoice 上传声音');
            return;
        }
        wx.downloadVoice({
            serverId: voice.serverId,
            success: function (res) {
                alert('下载语音成功，localId 为' + res.localId);
                voice.localId = res.localId;
            }
        });
    });

    // 5 图片接口
    // 5.1 拍照、本地选图
    var images = {
        localId: [],
        serverId: []
    };

    $('#ewm').bind('click', function () {

        wx.chooseImage({
            success: function (res) {
                images.localId = res.localIds;
                //alert('已选择 ' + res.localIds[0] + ' 张图片');
                var i = 0, length = images.localId.length;
                function upload() {
                    wx.uploadImage({
                        localId: images.localId[i],
                        success: function (res) {
                            i++;
                            //alert('已上传：' + i + '/' + length);
                            images.serverId.push(res.serverId);
                            if (i < length) {
                                upload();
                            }
                        },
                        complete: function (res) {
                            //alert(res.serverId);
                            var oid = localStorage.getItem("openid");

                            jQuery.FxsRequest("action=downimg&serverid=" + res.serverId + "&oid=" + oid, "", function (data) {
                                if (data.Result) {
                                    //alert(jQuery.weixinurl + data.Msg);
                                    $("#ewm").attr("src", jQuery.weixinurl + data.Msg)
                                }
                                else {
                                    alert("上传失败");
                                }
                            });
                        },
                        fail: function (res) {
                            //alert("33");
                            alert(JSON.stringify(res));
                        }
                    });
                }
                if (length > 0) {
                    upload();
                }
            }
        });
    });

    $('#uploadzz').bind('click', function () {

        wx.chooseImage({
            success: function (res) {
                images.localId = res.localIds;
                //alert('已选择 ' + res.localIds[0] + ' 张图片');
                var i = 0, length = images.localId.length;
                function upload() {
                    wx.uploadImage({
                        localId: images.localId[i],
                        success: function (res) {
                            i++;
                            //alert('已上传：' + i + '/' + length);
                            images.serverId.push(res.serverId);
                            if (i < length) {
                                upload();
                            }
                        },
                        complete: function (res) {

                            var oid = localStorage.getItem("openid");

                            jQuery.FxsRequest("action=zzimg&serverid=" + res.serverId + "&oid=" + oid, "", function (data) {
                                if (data.Result) {
                                    //alert(jQuery.weixinurl + data.Msg);
                                    $("#zzpic").attr("src", jQuery.weixinurl + data.Msg)
                                    $("#strZzzs").val(data.Msg);
                                }
                                else {
                                    alert(data.Msg);
                                }
                            });
                        },
                        fail: function (res) {
                            //alert("33");
                            alert(JSON.stringify(res));
                        }
                    });
                }
                if (length > 0) {
                    upload();
                }
            }
        });
    });

    $('#uploadSkewm').bind('click', function () {

        wx.chooseImage({
            success: function (res) {
                images.localId = res.localIds;
                //alert('已选择 ' + res.localIds[0] + ' 张图片');
                var i = 0, length = images.localId.length;
                function upload() {
                    wx.uploadImage({
                        localId: images.localId[i],
                        success: function (res) {
                            i++;
                            //alert('已上传：' + i + '/' + length);
                            images.serverId.push(res.serverId);
                            if (i < length) {
                                upload();
                            }
                        },
                        complete: function (res) {

                            var oid = localStorage.getItem("openid");

                            jQuery.FxsRequest("action=zzimg&serverid=" + res.serverId + "&oid=" + oid, "", function (data) {
                                if (data.Result) {
                                    //alert(jQuery.weixinurl + data.Msg);
                                    $("#skewmpic").attr("src", jQuery.weixinurl + data.Msg)
                                    $("#strSkewm").val(data.Msg);
                                }
                                else {
                                    alert(data.Msg);
                                }
                            });
                        },
                        fail: function (res) {
                            //alert("33");
                            alert(JSON.stringify(res));
                        }
                    });
                }
                if (length > 0) {
                    upload();
                }
            }
        });
    });
    // 5.2 图片预览
    $('#previewImage').bind('click', function () {

        wx.previewImage({
            current: 'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
            urls: [
        'http://img3.douban.com/view/photo/photo/public/p2152117150.jpg',
        'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
        'http://img3.douban.com/view/photo/photo/public/p2152134700.jpg'
      ]
        });
    });

    // 5.3 上传图片
    $('#uploadImage').bind('click', function () {
        if (images.localId.length == 0) {
            alert('请先使用 chooseImage 接口选择图片');
            return;
        }
        var i = 0, length = images.localId.length;
        images.serverId = [];
        function upload() {
            wx.uploadImage({
                localId: images.localId[i],
                success: function (res) {
                    i++;
                    //alert('已上传：' + i + '/' + length);
                    images.serverId.push(res.serverId);
                    if (i < length) {
                        upload();
                    }
                },
                complete: function (res) {
                    alert(res.serverId);

                    jQuery.FxsRequest("action=downimg&serverid=" + res.serverId, "", function (data) {


                        alert(data.Result);
                        if (data.Result) {
                        }
                        else {

                        }
                    });
                },
                fail: function (res) {
                    alert("33");
                    alert(JSON.stringify(res));
                }
            });
        }
        upload();
    });

    // 5.4 下载图片
    $('#downloadImage').bind('click', function () {

        if (images.serverId.length === 0) {
            alert('请先使用 uploadImage 上传图片');
            return;
        }
        var i = 0, length = images.serverId.length;
        images.localId = [];
        function download() {
            wx.downloadImage({
                serverId: images.serverId[i],
                success: function (res) {
                    i++;
                    alert('已下载：' + i + '/' + length);
                    images.localId.push(res.localId);
                    if (i < length) {
                        download();
                    }
                }
            });
        }
        download();
    });

    // 6 设备信息接口
    // 6.1 获取当前网络状态
    $('#getNetworkType').bind('click', function () {
        wx.getNetworkType({
            success: function (res) {
                alert(res.networkType);
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    });

    // 7 地理位置接口
    // 7.1 查看地理位置
    $('#openLocation').bind('click', function () {

        wx.openLocation({
            latitude: 23.099994,
            longitude: 113.324520,
            name: 'TIT 创意园',
            address: '广州市海珠区新港中路 397 号',
            scale: 14,
            infoUrl: 'http://weixin.qq.com'
        });
    });

    // 7.2 获取当前地理位置
    $('#getLocation').bind('click', function () {

        wx.getLocation({ type: 'gcj02',
            success: function (res) {
                alert(res.latitude);
            },
            cancel: function (res) {
                alert('用户拒绝授权获取地理位置');
            }
        });
    });

    // 8 界面操作接口
    // 8.1 隐藏右上角菜单
    $('#hideOptionMenu').bind('click', function () {

        wx.hideOptionMenu();
    });

    // 8.2 显示右上角菜单
    $('#showOptionMenu').bind('click', function () {

        wx.showOptionMenu();
    });

    // 8.3 批量隐藏菜单项
    $('#hideMenuItems').bind('click', function () {

        wx.hideMenuItems({
            menuList: [
        'menuItem:readMode', // 阅读模式
        'menuItem:share:timeline', // 分享到朋友圈
        'menuItem:copyUrl' // 复制链接
      ],
            success: function (res) {
                alert('已隐藏“阅读模式”，“分享到朋友圈”，“复制链接”等按钮');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    });

    // 8.4 批量显示菜单项
    $('#showMenuItems').bind('click', function () {

        wx.showMenuItems({
            menuList: [
        'menuItem:readMode', // 阅读模式
        'menuItem:share:timeline', // 分享到朋友圈
        'menuItem:copyUrl' // 复制链接
      ],
            success: function (res) {
                alert('已显示“阅读模式”，“分享到朋友圈”，“复制链接”等按钮');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    });

    // 8.5 隐藏所有非基本菜单项
    $('#hideAllNonBaseMenuItem').bind('click', function () {

        wx.hideAllNonBaseMenuItem({
            success: function () {
                alert('已隐藏所有非基本菜单项');
            }
        });
    });

    // 8.6 显示所有被隐藏的非基本菜单项
    $('#showAllNonBaseMenuItem').bind('click', function () {

        wx.showAllNonBaseMenuItem({
            success: function () {
                alert('已显示所有非基本菜单项');
            }
        });
    });

    // 8.7 关闭当前窗口
    $('#closeWindow').bind('click', function () {

        wx.closeWindow();
    });

    // 9 微信原生接口
    // 9.1.1 扫描二维码并返回结果
    $('#scanQRCode0').bind('click', function () {

        wx.scanQRCode();
    });
    // 9.1.2 扫描二维码并返回结果
    $('#scanQRCode1').bind('click', function () {

        wx.scanQRCode({
            needResult: 1,
            desc: 'scanQRCode desc',
            success: function (res) {
                alert(JSON.stringify(res));
            }
        });
    });

    // 10 微信支付接口
    // 10.1 发起一个支付请求
    $('#chooseWXPay').bind('click', function () {

        // 注意：此 Demo 使用 2.7 版本支付接口实现，建议使用此接口时参考微信支付相关最新文档。
        wx.chooseWXPay({
            timestamp: 1414723227,
            nonceStr: 'noncestr',
            package: 'addition=action_id%3dgaby1234%26limit_pay%3d&bank_type=WX&body=innertest&fee_type=1&input_charset=GBK&notify_url=http%3A%2F%2F120.204.206.246%2Fcgi-bin%2Fmmsupport-bin%2Fnotifypay&out_trade_no=1414723227818375338&partner=1900000109&spbill_create_ip=127.0.0.1&total_fee=1&sign=432B647FE95C7BF73BCD177CEECBEF8D',
            signType: 'SHA1', // 注意：新版支付接口使用 MD5 加密
            paySign: 'bd5b1933cda6e9548862944836a9b52e8c9a2b69'
        });
    });

    // 11.3  跳转微信商品页
    $('#openProductSpecificView').bind('click', function () {

        wx.openProductSpecificView({
            productId: 'pDF3iY_m2M7EQ5EKKKWd95kAxfNw',
            extInfo: '123'
        });
    });

    // 12 微信卡券接口
    // 12.1 添加卡券
    $('#addCard').bind('click', function () {

        wx.addCard({
            cardList: [
        {
            cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
            cardExt: '{"code": "", "openid": "", "timestamp": "1418301401", "signature":"ad9cf9463610bc8752c95084716581d52cd33aa0"}'
        },
        {
            cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
            cardExt: '{"code": "", "openid": "", "timestamp": "1418301401", "signature":"ad9cf9463610bc8752c95084716581d52cd33aa0"}'
        }
      ],
            success: function (res) {
                alert('已添加卡券：' + JSON.stringify(res.cardList));
            },
            cancel: function (res) {
                alert(JSON.stringify(res))
            }
        });
    }); ;

    var codes = [];
    // 12.2 选择卡券
    $('#chooseCard').bind('click', function () {

        wx.chooseCard({
            cardSign: '6caa49f4a5af3d64ac247e1f563e5b5eb94619ad',
            timestamp: 1437997723,
            nonceStr: 'k0hGdSXKZEj3Min5',
            success: function (res) {
                res.cardList = JSON.parse(res.cardList);
                encrypt_code = res.cardList[0]['encrypt_code'];
                alert('已选择卡券：' + JSON.stringify(res.cardList));
                decryptCode(encrypt_code, function (code) {
                    codes.push(code);
                });
            },
            cancel: function (res) {
                alert(JSON.stringify(res))
            }
        });
    });

    // 12.3 查看卡券
    $('#openCard').bind('click', function () {

        if (codes.length < 1) {
            alert('请先使用 chooseCard 接口选择卡券。');
            return false;
        }
        var cardList = [];
        for (var i = 0; i < codes.length; i++) {
            cardList.push({
                cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
                code: codes[i]
            });
        }
        wx.openCard({
            cardList: cardList,
            cancel: function (res) {
                alert(JSON.stringify(res))
            }
        });
    });

    var shareData = {
        title: '游你网',
        desc: '你好，游你网',
        link: 'http://m.youne.cn/loading.html',
        imgUrl: 'http://m.youne.cn/images/logo.png'
    };
    //wx.onMenuShareAppMessage(shareData);
    //wx.onMenuShareTimeline(shareData);

    function decryptCode(code, callback) {
        $.getJSON('/jssdk/decrypt_code.php?code=' + encodeURI(code), function (res) {
            if (res.errcode == 0) {
                codes.push(res.code);
            }
        });
    }
});

wx.error(function (res) {
    alert(res.errMsg);
});

