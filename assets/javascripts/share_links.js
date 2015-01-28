    import Sharing from 'discourse/lib/sharing';
(function() {
    Sharing.addSource({

      // This id must be present in the `share_links` site setting too
      id: 'weibo',

      // The icon that will be displayed
      iconClass: 'fa-weibo',

      generateUrl: function(link, title) {
        return ("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title));
      },
      
      shouldOpenInPopup: true,
      popupHeight: 370
    });
})();
