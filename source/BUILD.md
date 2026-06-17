# Como reconstruir / evoluir

A app é um único `index.html` auto-contido (formato "bundler": um wrapper que desempacota
assets em base64 e renderiza um documento `<x-dc>` com um runtime React mini, carregando
o React do unpkg em runtime). Para evitar mexer no envelope, **só editamos o template** e
voltamos a empacotar.

## Ficheiros nesta pasta
- `template.html` — o template editável: CSS de marca (P&B), markup das vistas (Agenda/Grelha/
  Plano/Local + splash + lightbox) e o componente (`class Component extends DCLogic`) com toda a
  lógica (notas, fotos+IndexedDB, correção de perspetiva, export/import).
- `envelope.html` — o wrapper do empacotador (unpack + manifest de assets: fontes, logo Wallnut).
  **Não editar** salvo para trocar fontes/logo. O bloco `__bundler/template` é substituído pelo build.
- `program-data.js` — `window.PTBIM_DATA`: **o programa do congresso** (dias, blocos, salas, top-5,
  conflitos, networking). É aqui que se atualiza o conteúdo para o próximo evento.
- `ptbim-logo-light.svg` / `ptbim-logo-black.svg` — logótipo oficial do evento.
- `campus_feup.png` — imagem do local (separador Local: `assets/campus_feup.png`).
- `build.mjs` — reempacota `envelope.html` + `template.html` → `../index.html`.

## Passos para o próximo evento
1. **Programa:** editar `program-data.js`. (Está embebido no `envelope.html`, comprimido em gzip+base64
   no manifest, chave `77cf2dc3-…`. Para o recompor: gzip → base64 → substituir o campo `data`.)
2. **UI / textos / datas / Local:** editar `template.html` (procurar "FEUP", "17–19 jun", "Oradores").
3. **Reconstruir o HTML:** `node build.mjs` (regenera `../index.html`).
4. **Ícones P&B** (se mudar o logótipo): regenerar com `@resvg/resvg-js` a partir do wordmark
   (ver `gen-icons.js` no histórico) → `../icons/`.
5. **QR:** regenerar `../qr.png` com o pacote `qrcode` apontando ao novo URL.
6. **Publicar:** commit + push para `main`. O GitHub Pages publica automaticamente.

## Notas técnicas
- Cores: tudo P&B (ink `#111`, branco, cinzas neutros). Sem azul/terracota.
- Fotos: redimensionadas (~1600px), correção por homografia (4 cantos → retângulo), guardadas
  em IndexedDB (`ptbim2026` / store `photos`). Incluídas no export JSON.
- O `index.html` é gerado — **não editar à mão**; editar `template.html` e correr `build.mjs`.
- Árvore de trabalho canónica: `~/ptbim-app` (wln19-wsl).
