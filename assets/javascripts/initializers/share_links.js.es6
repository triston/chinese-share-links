import Sharing from 'discourse/lib/sharing';

export default {
  name: 'chinese-share-links',

  initialize: function() {

    Sharing.addSource({
      id: 'weibo',
      faIcon: 'fa-weibo',
      generateUrl: function(link, title) {
        return ("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title));
      },
      shouldOpenInPopup: true,
      popupHeight: 370
    });

    Sharing.addSource({
      id: 'renren',
      faIcon: 'fa-renren',
      generateUrl: function(link, title) {
        return ("http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(title));
      },
      shouldOpenInPopup: true,
      popupHeight: 650
    });

    Sharing.addSource({
      id: 'wechat',
      faIcon: 'fa-wechat',
      generateUrl: function(link, title) {
        return ("http://api.icanmake.cn/shareqr");
      },
      shouldOpenInPopup: true,
      popupHeight: 650
    });
    
    Sharing.addSource({
      id: 'QQZone',  
      faIcon: 'fa-qq',
      generateUrl: function(link, title) {
        return ("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title));
      },
      shouldOpenInPopup: true,
      popupHeight: 650
    });
    
  }
};
