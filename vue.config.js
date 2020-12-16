const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
    publicPath: "/file-manager",
    configureWebpack: config => {
        if (IS_PROD) {
            config.externals = {
                vue: "Vue",
                Vuex: 'Vuex',
                "vue-router": "VueRouter",
                "overlayscrollbars": 'overlayscrollbars',
                "overlayscrollbars-vue": 'overlayscrollbars-vue'
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
                "https://unpkg.com/vuex",
                "https://unpkg.com/overlayscrollbars@1.13.0/js/OverlayScrollbars.min.js",
                "https://unpkg.com/overlayscrollbars-vue@0.2.2/dist/overlayscrollbars-vue.js"
            ]
        } : {};
        config.plugin("html").tap(args => {
            args[0].cdn = cdn;
            return args;
        });
        config
            .plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        // 修复HMR
        config.resolve.symlinks(true);
    }
};