var Base64 = require("../../utils/base64.js");
var upng = require("../../utils/upng.js");
Page({
    data: {
    },

    onLoad: function (options) {
        var arr = [
        { name: "livingroom", score: 0.9506657719612122 },
        { name: "diningroom", score: 0.020683633163571358 },
        { name: "bedroom", score: 0.011145433411002159 },
        { name: "study", score: 0.008916690945625305 },
        { name: "kitchen", score: 0.008367142640054226 },
        { name: "toliet", score: 0.00022147083654999733 },
        ];
        var tempFilePaths = "/images/keting1.jpg";
        this.setData({
            result: analysisi(arr),
             tempFilePaths: tempFilePaths
        })
        
    },
    getheightAndWidth: function () {
        var arr = [this.data.width, this.data.height];
        return arr
    },
    onRedTap:function(event){
        var arr = [
        { name: "toliet", score: 0.9832977056503296 },
        { name: "bedroom", score: 0.006006826646625996 },
        { name: "livingroom", score: 0.004205301403999329 },
        { name: "diningroom", score: 0.002847823314368725 },
        { name: "kitchen", score: 0.0023781375493854284 },
        { name: "study", score: 0.0012641845969483256 },
        ];
        var tempFilePaths = "/images/cesuo.jpg";
        this.setData({
            result: analysisi(arr),
            tempFilePaths: tempFilePaths
        })

    },
    onOrangeTap: function (event) {
        var arr = [
        { name: "toliet", score: 0.9405320286750793 },
        { name: "kitchen", score: 0.026491239666938782 },
        { name: "diningroom", score: 0.021985691040754318 },
        { name: "bedroom", score: 0.005084646865725517 },
        { name: "livingroom", score: 0.004394056741148233 },
        { name: "study", score: 0.0015123020857572556 }
        ];
        var tempFilePaths = "/images/chufang3.jpg";
        this.setData({
            result: analysisi(arr),
            tempFilePaths: tempFilePaths
        })
    },
    onYellowTap: function (event) {
        var arr = [
        { name: "livingroom", score: 0.8828575015068054 },
        { name: "diningroom", score: 0.0632985308766365 },
        { name: "bedroom", score: 0.038943979889154434 },
        { name: "study", score: 0.012158882804214954 },
        { name: "kitchen", score: 0.0022182960528880358 },
        { name: "toliet", score: 0.0005227161454968154 }
        ];
        var tempFilePaths = "/images/keting.jpg";
        this.setData({
            result: analysisi(arr),
            tempFilePaths: tempFilePaths
        })
    },
    onGreenTap: function (event) {
        var arr = [
        { name: "bedroom", score: 0.9951909780502319 },
        { name: "toliet", score: 0.003222294384613633 },
        { name: "livingroom", score: 0.0008554812520742416 },
        { name: "study", score: 0.0003431580262258649 },
        { name: "kitchen", score: 0.00026843210798688233 },
        { name: "diningroom", score: 0.0001195758450194262 }
        ];
        var tempFilePaths = "/images/fangjian4.jpg";
        this.setData({
            result: analysisi(arr),
            tempFilePaths: tempFilePaths
        })
    },
    onSkyBlueTap: function (event) {
        var arr = [
        { name: "kitchen", score: 0.9952888488769531 },
        { name: "toliet", score: 0.003969309851527214 },
        { name: "study", score: 0.00030978399445302784 },
        { name: "bedroom", score: 0.0002059497346635908 },
        { name: "diningroom", score: 0.00013891600247006863 },
        { name: "livingroom", score: 0.00008707919914741069 }
        ];
        var tempFilePaths = "/images/chufang5.jpg";
        this.setData({
            result: analysisi(arr),
            tempFilePaths: tempFilePaths
        })
    },
    onBlueTap: function (event) {
        var arr = [
        { name: "study", score: 0.9949454665184021 },
        { name: "livingroom", score: 0.002970046829432249 },
        { name: "kitchen", score: 0.0008697662851773202 },
        { name: "bedroom", score: 0.0005029298481531441 },
        { name: "toliet", score: 0.00037525271181948483 },
        { name: "diningroom", score: 0.0003365739539731294 }
        ];
        var tempFilePaths = "/images/shufang.jpg";
        this.setData({
            result: analysisi(arr),
            tempFilePaths: tempFilePaths
        })
    },
    onVioletTap: function (event) {
        var arr = [
        { name: "diningroom", score: 0.9977343082427979 },
        { name: "livingroom", score: 0.0008597509004175663 },
        { name: "study", score: 0.0006188405677676201 },
        { name: "toliet", score: 0.0005046459846198559 },
        { name: "bedroom", score: 0.00017427149577997625 },
        { name: "kitchen", score: 0.00010821464093169197 }
        ];
        var tempFilePaths = "/images/fangting.jpg";
        this.setData({
            result: analysisi(arr),
            tempFilePaths: tempFilePaths
        })
    },
    onChooseTap: function () {
        var that = this;
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;
                var imgPath = tempFilePaths[0]
                //--base64
                wx.getImageInfo({
                    src: imgPath,
                    success:function(res){
                        const canvas = wx.createCanvasContext('myCanvas')
                        // 1. 绘制图片至canvas
                        canvas.drawImage(imgPath, 0, 0, 355, 232)
                        // 绘制完成后执行回调，API 1.7.0
                        canvas.draw(false, () => {
                            // 2. 获取图像数据， API 1.9.0
                            wx.canvasGetImageData({
                                canvasId: 'myCanvas',
                                x: 0,
                                y: 0,
                                width: 355,
                                height: 232,
                                success(res) {
                                    // 3. png编码
                                    let pngData = upng.encode([res.data.buffer], res.width, res.height)
                                    // 4. base64编码
                                    let base64 = wx.arrayBufferToBase64(pngData)
                                    //--
                                    var userImageBase64 = {
                                        "image": base64
                                    }
                                    var access_token = '24.e539e88acde1160c8c03f29fb4eac389.2592000.1529557951.282335-11240355';
                                    var request_url = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/classification/jacksonz";
                                    request_url = request_url + "?access_token=" + access_token;
                                    wx.request({
                                        url: request_url,
                                        data: userImageBase64,
                                        method: "POST",
                                        header: {
                                            'content-type': "application/json" // 默认值
                                        },
                                        success: function (res) {
                                            console.log(res)
                                            that.setData({
                                                result: analysisi(res.data.results)
                                            })
                                        },
                                        fail: function (res) {
                                            console.log('failed');
                                        }
                                    })
                                }
                            })
                        })
                    }
                })
                
                that.setData({
                    tempFilePaths: tempFilePaths
                });
            }
        })
    },
    
    onTo64Tap: function (address) {
        var that = this;
        wx.request({
            url: address,
            responseType: 'arraybuffer',
            success: function (res) {
                console.log(res.data)
                var base64 = wx.arrayBufferToBase64(res.data);
                var userImageBase64 = {
                    "image": base64
                } 
                var access_token = '24.e539e88acde1160c8c03f29fb4eac389.2592000.1529557951.282335-11240355';
                var request_url = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/classification/jacksonz";
                request_url = request_url + "?access_token=" + access_token;
                wx.request({
                    url: request_url,
                    data: userImageBase64,
                    method: "POST",
                    header: {
                        'content-type': "application/json" // 默认值
                    },
                    success: function (res) {
                        console.log(res.data.results)
                        that.setData({
                            result: analysisi(res.data.results)
                        })
                    },
                    fail: function (res) {
                        console.log('failed');
                    }
                })
            }
        });
    }
})

function analysisi(results) {
    var arr = [];
    for (var idx in results) {
        var item = {}
        item.score = Math.floor(results[idx].score * 10000) / 100 + "%";
        switch (results[idx].name) {
            case "diningroom": item.name = "饭厅"; break;
            case "livingroom": item.name = "客厅"; break;
            case "study": item.name = "书房"; break;
            case "bedroom": item.name = "卧室"; break;
            case "kitchen": item.name = "厨房"; break;
            case "toliet": item.name = "洗手间"; break;
        }
        arr.push(item);
    }
    return arr;
}   

function UBase64(imgPath,BASE64){
    const canvas = wx.createCanvasContext('myCanvas')
    // 1. 绘制图片至canvas
    canvas.drawImage(imgPath, 0, 0, 200, 100)
    // 绘制完成后执行回调，API 1.7.0
    canvas.draw(false, () => {
        // 2. 获取图像数据， API 1.9.0
        wx.canvasGetImageData({
            canvasId: 'myCanvas',
            x: 0,
            y: 0,
            width: 200,
            height: 100,
            success(res) {
                // 3. png编码
                let pngData = upng.encode([res.data.buffer], res.width, res.height)
                // 4. base64编码
                let base64 = wx.arrayBufferToBase64(pngData)
                BASE64 = base64
                // ...
            }
        })
    })
}