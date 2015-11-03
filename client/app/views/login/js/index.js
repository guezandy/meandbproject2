(function() {
  $(function() {
    $(".login--container").removeClass("preload");
    return $(".js-toggle-login").click((function(_this) {
      return function() {
        window.clearTimeout(_this.timer);
        $(".login--container").toggleClass("login--active");
        return $(".login--username-container input").focus();
      };
    })(this));
  });

}).call(this);