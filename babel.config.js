module.exports = {
    presets: [
        '@babel/preset-env',  // For handling ES6+ syntax
         {
                targets: {
                  node: 'current',  // Ensure proper Node.js version handling
                },
                modules: false  // Let Webpack handle modules; this is important for ES modules
              }
            ],
        '@babel/preset-react'  // For handling React JSX
    ]
};
