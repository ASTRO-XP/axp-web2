$(document).ready(function() {
    $("#teamdrop").mouseenter(function() {
        console.log('test hover');
        this.className += ' active';
    });
    $("#teamdrop").mouseleave(function() {
        console.log('test out');
        this.className = this.className.replace(' active', '');
    });

    $("#comdrop").mouseenter(function() {
        console.log('test hover');
        this.className += ' active';
    });
    $("#comdrop").mouseleave(function() {
        console.log('test out');
        this.className = this.className.replace(' active', '');
    });

    $(".team-stk-drop").mouseenter(function() {
        console.log('test hover');
        this.className += ' active';
    });
    $(".team-stk-drop").mouseleave(function() {
        console.log('test out');
        this.className = this.className.replace(' active', '');
    });

    $(".com-stk-drop").mouseenter(function() {
        console.log('test hover');
        this.className += ' active';
    });
    $(".com-stk-drop").mouseleave(function() {
        console.log('test out');
        this.className = this.className.replace(' active', '');
    });
});