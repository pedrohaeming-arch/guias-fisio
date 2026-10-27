# guias-fisio

Site da marca e páginas de venda dos guias de bolso de fisioterapia.

## Páginas

| Arquivo | O que é |
| --- | --- |
| `index.html` | Início da marca: quem escreve, como os guias são feitos, catálogo e planos |
| `coluna.html` | Página de vendas do guia de entrada de coluna (link da bio durante a validação) |
| `quiz.html` | Avaliação rápida e educativa que indica o guia, o plano de 30 dias ou a teleconsulta |
| `privacidade.html` | Aviso de privacidade (LGPD) |
| `produtos.js` | Configuração: marca, CREFITO, produtos, quiz e teleconsulta |
| `estilo.css` | Cores e estilos do início, do quiz e da privacidade |
| `en/` | Versão em inglês, congelada e sem link no site |

## Ao lançar um produto

Abra `produtos.js`, troque o `status` do produto de `"em-breve"` para `"no-ar"` e cole o `link`. O catálogo do início e o quiz se atualizam sozinhos.

## Quiz e teleconsulta

- O quiz fica desligado (`quizAtivo: false`) até o 2º tema ter produto no ar. Para testar desligado, abra `quiz.html#teste`.
- As respostas do quiz ficam só no navegador: nada é gravado nem enviado, e a página do quiz não usa o Pixel da Meta.
- A teleconsulta fica desligada (`teleconsulta.ativa: false`) até a agenda, o termo de consentimento e o prontuário estarem prontos (Res. COFFITO nº 619/2025).

## Hospedagem

Cloudflare Pages conectado a este repositório (o GitHub Pages não permite uso para negócio online).
