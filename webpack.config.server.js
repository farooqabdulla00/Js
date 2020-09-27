const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd()
//import * as fs from 'fs'

const config = {
    
    name: "server",
    entry: [ path.join(CURRENT_WORKING_DIR , './server/server.js') ],
    target: "node",
    // node: {
    //     // Need this when working with express, otherwise the build fails
    //     __dirname: false,   // if you don't put this is, __dirname
    //     __filename: false,  // and __filename return blank or /
    //   },
    
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist/'),
        filename: "server.generated.js",
        publicPath: '/dist/',
        libraryTarget: "commonjs2"
    },
    //externals: { fs: "commonjs fs" },
    externals: [nodeExternals()],
    //externals: [fs],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            }
        ]
    }
}
module.exports = config