const { DisTube } = require('distube');
const { YtDlpPlugin } = require('@distube/yt-dlp');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
function createDistube(client) {
    return new DisTube(client, {
        emitNewSongOnly: false,
        emitAddSongWhenCreatingQueue: true,
        emitAddListWhenCreatingQueue: true,
        plugins: [
            new YtDlpPlugin(),
            new SpotifyPlugin({ emitEventsAfterFetching: true }),
            new SoundCloudPlugin(),
        ],
    });
}
module.exports = { createDistube };
