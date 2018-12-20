module.exports = {
	lintOnSave: true,
	// 配置webpack
	configureWebpack: {
		resolve: {
			// vue模块
			alias: {
				vue$: 'vue/dist/vue.js'
			}
		}
	}
}