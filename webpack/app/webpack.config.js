module.exports = {
	entry: "./runoob1.js",
	output: {
        path: __dirname, // 输出文件的保存路径
        filename: 'bundle.js' // 输出文件的名称
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.js$/,loaders: ['babel-loader?presets[]=es2015'],exclude: /node_modules/ },
			{ test: /\.(png|jpg)$/ , loader: 'url-loader?limit = 8192&name = img/[hash:8].[name].[ext]'}
		]
	}
}