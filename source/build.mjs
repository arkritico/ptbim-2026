// Reempacota envelope.html + template.html -> ../index.html
// Uso: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const env = readFileSync(new URL('./envelope.html', import.meta.url), 'utf8');
const tpl = readFileSync(new URL('./template.html', import.meta.url), 'utf8');

// JSON-encode o template; escapar </ para nenhum </script> literal fechar o bloco do empacotador
const enc = JSON.stringify(tpl).split('</').join('<\\/');

const re = /(<script type="__bundler\/template">)([\s\S]*?)(<\/script>)/;
if (!re.test(env)) { console.error('bloco __bundler/template não encontrado em envelope.html'); process.exit(1); }
const out = env.replace(re, (m, a, _b, c) => a + '\n' + enc + '\n  ' + c);

// verificação round-trip
const back = JSON.parse(out.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/)[1].trim());
if (back !== tpl) { console.error('round-trip falhou'); process.exit(1); }

writeFileSync(new URL('../index.html', import.meta.url), out, 'utf8');
console.log('index.html reescrito (' + out.length + ' bytes). Round-trip OK.');
