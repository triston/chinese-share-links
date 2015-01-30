import Sharing from 'discourse/lib/sharing';

export default {
  name: 'chinese-share-links',

  initialize: function() {

    Sharing.addSource({
      id: 'weibo',
      iconClass: 'fa-weibo',
      generateUrl: function(link, title) {
        return ("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title));
      },
      shouldOpenInPopup: true,
      popupHeight: 370
    });

    Sharing.addSource({
      id: 'renren',
      iconClass: 'fa-renren',
      generateUrl: function(link, title) {
        return ("http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(title));
      },
      shouldOpenInPopup: true,
      popupHeight: 650
    });

    Sharing.addSource({
      id: 'wechat',
      iconClass: 'fa-wechat',
      generateUrl: function(link) {
        return ("http://cli.im/api/qrcode");
      },
      shouldOpenInPopup: true,
      popupHeight: 650
    });
    
    Sharing.addsource({
      id: 'QQ',  
      iconClass: 'fa-qq',
      generateUrl: function(link) {
        return ("http://cli.im/api/qrcode");
      },
      shouldOpenInPopup: true,
      popupHeight: 650
    });
    
  }
};
