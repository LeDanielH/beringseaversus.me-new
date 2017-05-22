import {paths, assetsDest, assetsSrc, deploy} from 'gulp/vars';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const env = process.env.NODE_ENV || 'development';
const development = env === 'development';
const production = env === 'production';
const projectRoot = deploy;
console.log(`Environment: ${env}`);

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

	// todo figure out what this means
	// devtool: development ? 'inline-source-map' : 'sourcemap',
	output: {
		path: paths.scripts.webpack.bundle,
		filename: "bundle.js",
		publicPath: development ? `http://localhost:9876${assetsDest}` : assetsDest
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}],
		rules: [{

			/* SASS */
			test: /\.(scss|sass)$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: development ? [
					{ loader: "style-loader", options: {sourceMap: true} },
					{ loader: "css-loader" },
					{ loader: "sass-loader", options: {sourceComments: true, sourceMap: true}}
				] : [
					{ loader: "style-loader" },
					{ loader: "postcss-loader" },
					{ loader: "sass-loader"}
				]
			}),

			// todo figure out how to use sass compilation
			// use: [{
			// 	loader: "style-loader" // creates style nodes from JS strings
			// }, {
			// 	loader: "css-loader" // translates CSS into CommonJS
			// }, {
			// 	loader: "sass-loader" // compiles Sass to CSS
			// }]
		}, {

			/* FILE ASSETS */

			test: /\.(jpeg|jpg|png|gif|woff|woff2|ttf|eot|svg)(\?.*)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: 'content/[name].[ext]'
				}
			}]
		}]
	},
	plugins: [extractSass, uglifyJs],
	devServer: {
		contentBase: deploy,
		compress: true,
		port: 9876
	}
};

export {webpackConfig};