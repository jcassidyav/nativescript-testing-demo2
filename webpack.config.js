const webpack = require("@nativescript/webpack");
const { merge } = require('webpack-merge');

module.exports = (env) => {
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack


	if (env.unitTesting) {
		webpack.chainWebpack((config) => {
		  // keep the test runner open
		  config.plugin('DefinePlugin').tap((args) => {
			args[0] = merge(args[0], {
			  __TEST_RUNNER_STAY_OPEN__: true,
			})
			return args
		  })
		})
	  }

	return webpack.resolveConfig();
};
