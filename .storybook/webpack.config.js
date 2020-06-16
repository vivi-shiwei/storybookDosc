module.exports = function ({ config }) {
    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    });

    return config;
}; https://github.com/storybookjs/storybook/search?q=%40storybook%2Faddon-storysource%2Floader&unscoped_q=%40storybook%2Faddon-storysource%2Floader