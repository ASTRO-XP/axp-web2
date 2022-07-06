$(document).ready(function() {
    $(".exdrp").mouseenter(function() {
        this.className += ' active';
    });
    $(".exdrp").mouseleave(function() {
        this.className = this.className.replace(' active', '');
    });

    $(".cmdrp").mouseenter(function() {
        this.className += ' active';
    });
    $(".cmdrp").mouseleave(function() {
        this.className = this.className.replace(' active', '');
    });

    $(".ex-stk-drop").mouseenter(function() {
        this.className += ' active';
    });
    $(".ex-stk-drop").mouseleave(function() {
        this.className = this.className.replace(' active', '');
    });

    $(".com-stk-drop").mouseenter(function() {
        this.className += ' active';
    });
    $(".com-stk-drop").mouseleave(function() {
        this.className = this.className.replace(' active', '');
    });
});