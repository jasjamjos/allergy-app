const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.jsx',
        './src/**/*.js',
        './public/index.html',
    ],

    css: ['./src/assets/css/tailwind.css'],

    // TAILWIND DEFAULT CONFIG
    defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
    
        return broadMatches.concat(innerMatches)
    }
})

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ]
}