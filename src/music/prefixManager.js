const fs = require('node:fs');
const path = require('node:path');
const filePath = path.join(__dirname, '..', '..', 'data', 'prefixes.json');
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
//Aqui tu pode mexer com o prefixo ai se voce nao mexer no prefixo com o comando do preifxo de servidor ele vai usar o prefixo padrao
function getPrefix(guildId) {
    const data = loadData();
    return data[guildId] || process.env.PREFIX || 'p!';
}
function setPrefix(guildId, prefix) {
    const data = loadData();
    data[guildId] = prefix;
    saveData(data);
}
module.exports = { getPrefix, setPrefix };
