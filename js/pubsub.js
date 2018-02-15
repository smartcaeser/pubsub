var pubsub = (function () {
    var cache = {};
    return {
        pub: function (id) {

            var args = [].slice.call(arguments, 1);
            if (!cache[id]) {
                cache[id] = {
                    callbacks: [],
                    args: [args]
                };
            } else {
                cache[id].args.push(args);
            }
            for (var i = 0, li = cache[id].callbacks.length ; i < li ; i++) {
                cache[id].callbacks[i].apply(null, args);
            }
        },
        sub: function (id, fn) {
            if (!cache[id]) {
                cache[id] = {
                    callbacks: [fn],
                    args: []
                };
            } else {
                cache[id].callbacks.push(fn);
            }
            for (var i = 0, li = cache[id].args.length ; i < li ; i++) {
                fn.apply(null, cache[id].args[i]);
            }
        },
        unsub: function (id, fn) {
            if (!id) {
                return;
            }
            if (!fn) {
                cache[id] = [];
            }
            var index = cache[id].indexOf(fn);
            if (index > -1) {
                cache[id].slice(0, index).concat(cache[id].slice(index + 1));
            }
        }
    };
})();