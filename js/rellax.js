! function(e, t) { "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t() }(this, function() {
    var e = function(t, o) {
        var n = Object.create(e.prototype),
            i = 0,
            r = 0,
            s = 0,
            d = 0,
            l = [],
            a = !1,
            c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) { setTimeout(e, 1e3 / 60) },
            u = window.transformProp || function() {
                var e = document.createElement("div");
                if (null === e.style.transform) {
                    var t, o = ["Webkit", "Moz", "ms"];
                    for (t in o)
                        if (void 0 !== e.style[o[t] + "Transform"]) return o[t] + "Transform"
                }
                return "transform"
            }(),
            f = function(e, t, o) { return e <= t ? t : e >= o ? o : e };
        n.options = { speed: -2, center: !1, round: !0, vertical: !0, horizontal: !1, callback: function() {} }, o && Object.keys(o).forEach(function(e) { n.options[e] = o[e] }), n.options.speed = f(n.options.speed, -10, 10), t || (t = ".rellax");
        var m = "string" == typeof t ? document.querySelectorAll(t) : [t];
        if (!(0 < m.length)) throw Error("The elements you're trying to select don't exist.");
        n.elems = m;
        var p = function(e) {
                var t = e.getAttribute("data-rellax-percentage"),
                    o = e.getAttribute("data-rellax-speed"),
                    i = e.getAttribute("data-rellax-zindex") || 0,
                    s = n.options.vertical && (t || n.options.center) ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop : 0,
                    l = n.options.horizontal && (t || n.options.center) ? window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
                    a = s + e.getBoundingClientRect().top,
                    c = e.clientHeight || e.offsetHeight || e.scrollHeight,
                    u = l + e.getBoundingClientRect().left,
                    m = e.clientWidth || e.offsetWidth || e.scrollWidth;
                s = t || (s - a + r) / (c + r);
                var p = t || (l - u + d) / (m + d);
                return n.options.center && (s = p = .5), l = o ? f(o, -10, 10) : n.options.speed, (t || n.options.center) && (l = f(o || n.options.speed, -5, 5)), t = h(p, s, l), e = e.style.cssText, o = "", 0 <= e.indexOf("transform") && (o = e.indexOf("transform"), o = e.slice(o), o = (s = o.indexOf(";")) ? " " + o.slice(11, s).replace(/\s/g, "") : " " + o.slice(11).replace(/\s/g, "")), { baseX: t.x, baseY: t.y, top: a, left: u, height: c, width: m, speed: l, style: e, transform: o, zindex: i }
            },
            w = function() {
                var e = i,
                    t = s;
                return i = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, s = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, !!(e != i && n.options.vertical || t != s && n.options.horizontal)
            },
            h = function(e, t, o) { var i = {}; return e = 100 * o * (1 - e), t = 100 * o * (1 - t), i.x = n.options.round ? Math.round(e) : Math.round(100 * e) / 100, i.y = n.options.round ? Math.round(t) : Math.round(100 * t) / 100, i },
            g = function() { w() && !1 === a && y(), c(g) },
            y = function() {
                for (var e = 0; e < n.elems.length; e++) {
                    var t = h((s - l[e].left + d) / (l[e].width + d), (i - l[e].top + r) / (l[e].height + r), l[e].speed),
                        o = t.y - l[e].baseY,
                        a = t.x - l[e].baseX;
                    n.elems[e].style[u] = "translate3d(" + (n.options.horizontal ? a : "0") + "px," + (n.options.vertical ? o : "0") + "px," + l[e].zindex + "px) " + l[e].transform
                }
                n.options.callback(t)
            };
        return n.destroy = function() {
                for (var e = 0; e < n.elems.length; e++) n.elems[e].style.cssText = l[e].style;
                a = !0
            },
            function() {
                r = window.innerHeight, d = window.innerWidth, w();
                for (var e = 0; e < n.elems.length; e++) {
                    var t = p(n.elems[e]);
                    l.push(t)
                }
                window.addEventListener("resize", function() { y() }), g(), y()
            }(), n
    };
    return e
});