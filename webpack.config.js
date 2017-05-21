import {paths} from 'gulp/vars';
import webpack from 'webpack';

const webpackConfig = {
	entry: paths.scripts.webpack.entry,
	output: {
		path: paths.scripts.webpack.bundle,
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		}),
	]
};

export {webpackConfig};