const path = require('path');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	mode: 'development',
	entry: [path.join(__dirname, "/src/index.tsx")],
	watch: true,

	output: {
		// filename: '[name].[chunkhash].js',
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		
		rules: [
			{
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
			{
				test: /\.(ts|tsx)?$/,
				loader: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude: [/node_modules/]
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// {
					// 	loader: MiniCssExtractPlugin.loader
					// },
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				],
			  },
		]
	},

	plugins: [
		//new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template:  path.join(__dirname, "/src/default_index.html"),
		}),
		// new MiniCssExtractPlugin({
		// 	filename: "[name].css",
        //   	chunkFilename: "[id].css"
		// })
	],

	devServer: {
		open: true
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			"@enums": path.resolve(__dirname, "src/enums")
		}
	}
};