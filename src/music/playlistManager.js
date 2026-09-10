const fs = require('node:fs');
const path = require('node:path');
const filePath = path.join(__dirname, '..', '..', 'data', 'playlists.json');
function loadData() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '{}');
    }
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch {
        return {};
    }
}
function saveData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
function savePlaylist(userId, name, songUrls) {
    const data = loadData();
    if (!data[userId]) data[userId] = {};
    data[userId][name] = songUrls;
    saveData(data);
}
function getPlaylist(userId, name) {
    const data = loadData();
    return data[userId]?.[name];
}
function listPlaylists(userId) {
    const data = loadData();
    return Object.keys(data[userId] || {});
}
function deletePlaylist(userId, name) {
    const data = loadData();
    if (data[userId] && data[userId][name]) {
        delete data[userId][name];
        saveData(data);
        return true;
    }
    return false;
}
module.exports = { savePlaylist, getPlaylist, listPlaylists, deletePlaylist };
