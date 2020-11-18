// 命令行：rollup src/main.js -o bundle.js -f cjs
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
    input: 'src/main.js',
    output: {
        name: 'webcToast',
        file: pkg.browser,
        format: 'umd'
    },
    plugins: [ 
        commonjs(),
        resolve(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ],
    // 指出应将哪些模块视为外部模块。指定的模块不会打包进自己的模块
    external: [],
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**'
    }
}