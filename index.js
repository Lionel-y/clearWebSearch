// ==UserScript==
// @name         clearWebSearch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  优化搜索资料时的各种体验，个人自用脚本，主要自动关闭一些常用网站的广告
// @author       Lionel
// @match        https://blog.csdn.net/*
// @match        https://*.zhihu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const zhihuReg = /.zhihu.com$/g
    const csdnReg = /.csdn.net$/g
    const curHost = window.location.host

    if(curHost.match(csdnReg)){
      processCsdn()
    }else if(curHost.match(zhihuReg)){
        injectZhihuStyle()
        window.onload = ()=>{
            processZhihu()
        }
    }

    //注入知乎样式
    function injectZhihuStyle(){
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(
            `.Modal-wrapper{
            display:none
            }`
        ));
        document.head.appendChild(style);
    }



// csdn处理
    function processCsdn(){
        console.log('处理csdn')
        const topBarAd = document.querySelector('.toolbar-advert');
        topBarAd !== null && (topBarAd.hidden = true)
        const recommendAdBox = document.querySelector('#recommendAdBox');
        recommendAdBox && (recommendAdBox.hidden = true);
        const csdnCommonLogoAdvert = document.querySelector('.csdn-common-logo-advert')
        csdnCommonLogoAdvert && (csdnCommonLogoAdvert.hidden = true)
    }

// 知乎处理
    function processZhihu(){
        console.log('处理知乎')
        const loginCloseBtn = document.querySelector('.Modal-closeButton')
        loginCloseBtn.click()
    };
}
    )();
