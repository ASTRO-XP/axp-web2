$(document).ready(function() {
    $(".tmdrp").mouseenter(function() {
        this.className += ' active';
    });
    $(".tmdrp").mouseleave(function() {
        this.className = this.className.replace(' active', '');
    });

    $(".cmdrp").mouseenter(function() {
        this.className += ' active';
    });
    $(".cmdrp").mouseleave(function() {
        this.className = this.className.replace(' active', '');
    });

    $(".team-stk-drop").mouseenter(function() {
        this.className += ' active';
    });
    $(".team-stk-drop").mouseleave(function() {
        this.className = this.className.replace(' active', '');
    });

    $(".com-stk-drop").mouseenter(function() {
        this.className += ' active';
    });
    $(".com-stk-drop").mouseleave(function() {
        this.className = this.className.replace(' active', '');
    });
});