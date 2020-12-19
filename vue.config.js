const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
    publicPath: "/file-manager",
    configureWebpack: config => {
        if (IS_PROD) {
            config.externals = {
                vue: "Vue",
                Vuex: 'Vuex',
                "vue-router": "VueRouter",
                "overlayscrollbars": 'Overlayscrollbars',
                "overlayscrollbars-vue": 'OverlayScrollbarsVue',
                'ant-design-vue': 'antd',
                "js-cookie": "Cookies",
                "js-base64": "Base64"
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
                "https://unpkg.com/overlayscrollbars-vue@0.2.2/dist/overlayscrollbars-vue.js",
                "https://unpkg.com/ant-design-vue@1.7.2/dist/antd.min.js",
                "https://unpkg.com/js-cookie@2.2.1/src/js.cookie.js",
                "https://unpkg.com/js-base64@3.6.0/base64.js"
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