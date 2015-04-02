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
      popupWidth: 350,
      popupHeight: 640
    });
    
    Sharing.addSource({
      id: 'QQ',  
      faIcon: 'fa-qq',
      generateUrl: function(link, title) {
        return ("http://cli.im/api/qrcode");
      },
      shouldOpenInPopup: true,
      popupHeight: 650
    });
    
  }
};
