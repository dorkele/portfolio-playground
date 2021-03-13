const path = require("path");
// simplifies creation of HTML files to serve your webpack bundles
const HtmlWebpackPlugin = require("html-webpack-plugin");
// removes/cleans build folder(s)
// will remove all files inside webpack's output.path directory,
// as well as all unused webpack assets after every successful rebuild.
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // defines stage of our application - deployment for production
    mode: "development",
    // defines entry point
    entry: "./src/index.js",
    // defines where our bundled file should be placed
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    // identifying errors
    devtool: "inline-source-map",
    // inform webpack that we are using babel to compile the code
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        // cleans the /dist folder and then put the bundled files inside that
        new CleanWebpackPlugin(),
        // generates the html file which helps to serve the webpack bundles
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
