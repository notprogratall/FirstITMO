module.exports = {
    content: ['./dist/*.html', './dist/*.js', './src/partials/*.js', './src/*.js', './src/*.html'],
    theme: {
        extend: {
            aspectRatio: {
                '3/5': '3/5',
                '3/4': '3/4',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}