import {paths} from 'gulp/vars';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// plugins
const extractSass = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
	disable: process.env.NODE_ENV === "development"
});

const uglifyJs = new webpack.optimize.UglifyJsPlugin({
	compress: {warnings: false},
	output: {comments: false},
});

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
		}],
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "sass-loader" // compiles Sass to CSS
			}]
		}]
	},
	plugins: [extractSass, uglifyJs]
};

export {webpackConfig};