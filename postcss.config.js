/**
 * Created by LX on 2017/7/6.
 */
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-import')({
            addDependencyTo: require('webpack')
        }),
    ]
}