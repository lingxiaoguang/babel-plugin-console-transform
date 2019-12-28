# babel-plugin-console-transform

babel插件，生产环境下可以删除所有的console，开发环境下可以使用扩展的console api，比如打印颜色，而且还会输出代码文件和行数列数。

封装这个插件的起因是群里报的一个bug，需要把所有的console.xxx都去掉。因为我们有react的项目和rn的项目，只有react项目会经过webpack打包，可以通过terser来删除console，而rn项目并不会用webpack打包。所以去掉生产环境console的逻辑就只能在编译期间就删除，所以有了这个babel插件。生产环境下删除所有console，开发环境下希望这个console更强大，可以打印颜色，可以自动添加文件的行列数等。


