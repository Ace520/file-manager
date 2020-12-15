const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
    publicPath:"/file-manager",
    configureWebpack: config => {
        if (IS_PROD) {
            config.externals = {
                vue: "Vue",
                Vuex:'Vuex',
                "vue-router": "VueRouter",
            };
        }
    },
    chainWebpack: config => {
        const cdn = IS_PROD ? {
            css: [
            ],
            js: [
                "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js",
                "https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js",
                "https://unpkg.com/vue-router/dist/vue-router.min.js",
                "https://unpkg.com/vuex"
            ]
        } : {};
        config.plugin("html").tap(args => {
            args[0].cdn = cdn;
            return args;
        });
        // 修复HMR
        config.resolve.symlinks(true);
    }
};