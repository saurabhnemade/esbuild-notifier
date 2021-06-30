const notifier = require('node-notifier');
const path = require('path');

const DEFAULT_ICON_PATH = path.resolve(__dirname, 'icons');
const successIcon = path.join(DEFAULT_ICON_PATH, 'success.png');
const errorIcon = path.join(DEFAULT_ICON_PATH, 'failed.png');

module.exports = options => {
    return {
        name: 'esbuild-build-notifier',
        setup(build) {
            build.onEnd((res) => {
                if (res.errors.length > 0) {
                    res.errors.forEach((e) => {
                        const location = e.location;
                        const title = e.text;
                        const message = `${location.file},(${location.line}:${location.column})\n${location.lineText}`;
                        notifier.notify({
                            title,
                            sound: 'Submarine',
                            message,
                            icon: errorIcon,
                        });
                    });
                    
                } else {
                    notifier.notify({
                        'app-name': 'my app',
                        title: "🚀 Success!",
                        message: "Compiled Successfully!!",
                        icon: successIcon,
                        sound: 'Funk'
                    });
                }
            });
        }
    }
}