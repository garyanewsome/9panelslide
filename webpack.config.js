const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	entry: "./src/index.js",
	optimization: {
		minimize: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(woff(2)?|otf||ttf|eot|svg|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/"
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					// fallback to style-loader in development
					process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			},
			{
				type: "javascript/auto",
				test: /\.json$/,
				use: ["file-loader"],
				include: /\.\/manifest/ // for e.g, but better to only copy particular JSON files (not all)
			}
		]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "assets/js/bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
			filename: "index.html"
		}),
		new CopyWebpackPlugin([
			{
				from: path.join(__dirname, "/public")
			}
		]),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "assets/css/[name].css"
		})
	]
}
