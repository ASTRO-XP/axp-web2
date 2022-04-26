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
});