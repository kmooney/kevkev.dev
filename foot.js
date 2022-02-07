!function() { // register funmode
    var funMode = false;
    var darkMode = false;
    var $els = document.getElementsByClassName("funmode");
    for (var i = 0; i < $els.length; i++){
        var localEl = $els[i];
        localEl.addEventListener("mouseup", function() {
            funMode = !funMode;
            if (funMode) {
                timer = fun_mode();
                localEl.text="fun mode!";
            }
            if (!funMode) {
                window.clearInterval(timer);
                random_theme();
                localEl.text="fun mode?";
            }
            return false;
        });
    }

    var $darkels = document.getElementsByClassName("darkmode");
    for (var i = 0; i < $darkels.length; i++) {
        var de = $darkels[i];
        de.addEventListener("click", function() {
            darkMode = !darkMode;
            if (darkMode) {
                document.getElementsByTagName("body")[0].classList.add("dark");
                de.text="dark mode!";
            }
            if (!darkMode) {
                document.getElementsByTagName("body")[0].classList.remove("dark");
                de.text="dark mode?";
            }
        })
    }
}();