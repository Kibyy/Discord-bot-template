<<<<<<< HEAD
A simple bot template for discord

Um template de bot pro discord

Codigo limpo e organizado, facilitado para edicao e aprimoramento

=======
A simple bot template for discord, now with a full music module included
Um template de bot pro discord, agora com um modulo de musica completo

Codigo limpo e organizado, facilitado para edicao e aprimoramento
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
Clean and simple code, making it easier for edits and upgrades

Setup

1.Clone
   ```bash
   git clone https://github.com/yourusername/discord-bot-template.git
   cd discord-bot-template
   ```

2.Install
   ```bash
   npm install
   ```

3.Config
<<<<<<< HEAD
   Create a `.env` file (copy `.env.example`) and add your `TOKEN`, `CLIENT_ID`, and `GUILD_ID`
Crie um arquivo `.env` (copie o `.env.example`) e poe seu `TOKEN`, `CLIENT_ID`, e `GUILD_ID`

=======
   Create a `.env` file (copy `.env.example`) and add your `TOKEN`, `CLIENT_ID`, `GUILD_ID` and default `PREFIX`
Crie um arquivo `.env` (copie o `.env.example`) e poe seu `TOKEN`, `CLIENT_ID`, `GUILD_ID` e o `PREFIX` padrao
>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
4.Deploy Commands
   ```bash
   npm run deploy
   ```

5.Run
   ```bash
   npm start
   ```

<<<<<<< HEAD
=======
Musica

Default prefix= p! ctu muda la no env 
change it in the env file

Commands / Comandos:

- `play <nome ou link>`
- `skip` - pula
- `skipto <posicao>` - pula direto pra uma posicao
- `pause` / `resume` - pausa/continua
- `replay` - reinicia
- `join` / `leave` - entra ou sai do canal
- `queue` - fila
- `nowplaying` (ou `np`) - mostra o negocio que ta tocando agora
- `volume <0-100>` - volume
- `loop <off|song|queue>` - repete
- `shuffle` - embaralha
- `remove <posicao>` - remove uma musica
- `clear` - limpa
- `seek <segundos>` - pula pra um tempo
- `setprefix <novo prefixo>` - muda o prefixo
- `playlist save/load/list/delete <nome>` - salva e carrega

Requirements, obrigatorio:

You need `ffmpeg` available for audio to work this template already installs
`ffmpeg-static` as a dependency

Precisa do `ffmpeg` pra tocar audio esse template ja instala o
`ffmpeg-static` como dependencia

>>>>>>> 311badf (foi adiconado a capacidade de tocar musicas)
