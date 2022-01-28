const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	//파일을 읽어들이기 시작하는 진입점 설정으로 주로 parcel의 parcel index.html과 유사하다.
	//parcel과는 다르게 index.html이 아닌 js 파일을 진입점으로 하는 차이가 있다.
	entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
	output: {
    //nodeJS 에서 요구하는 절대 경로가 필요.
    // path: path.resolve(__dirname, 'dist'),

    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // 파일의 이름이 .scss 또는 .css 로 끝나는 것을 찾는 정규식
        use: [
          'style-loader', // 해석된 css를 html의 <style>에 추가해주는 패키지
          'css-loader', // css 파일을 불러오며 해석하는 첫번째로 사용되는 패키지
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from : 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}