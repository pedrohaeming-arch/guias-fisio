/* =====================================================================
   CONFIGURAÇÃO DO SITE — o único arquivo que você muda a cada lançamento
   ---------------------------------------------------------------------
   - Lançou um produto? Troque o status dele de "em-breve" para "no-ar"
     e cole o link (página de vendas ou checkout da Hotmart).
   - Quiz: ligue quizAtivo quando o 2º tema tiver produto no ar.
   - Teleconsulta: ligue teleconsulta.ativa quando a agenda estiver
     pronta (consentimento, prontuário e plataforma, Res. COFFITO 619/2025).
     O valor da consulta não vai no site (Código de Ética, art. 40, I):
     informe na conversa de agendamento.
   ===================================================================== */
window.FV = {
  marca: "FisioVault",                 // o mesmo nome do perfil de marca
  autor: "[Seu nome]",
  crefito: "CREFITO-[região] [número]",
  email: "contato@seudominio.com",
  instagram: "",                       // ex.: "https://instagram.com/suamarca"

  quizAtivo: false,                    // true quando o 2º tema tiver produto no ar

  teleconsulta: {
    ativa: false,                      // true quando a agenda estiver aberta
    link: "",                          // link da agenda ou do WhatsApp de agendamento
    descricao: "Avaliação por vídeo com fisioterapeuta e um plano de 30 dias feito para você, com um retorno para ajustar. Para quem não consegue ir a um atendimento presencial."
  },

  // Regiões que o quiz conhece. Uma região sem produto mostra "ainda não temos guia".
  // genero: "f" ou "m" (para escrever "na parte baixa das costas", "no joelho")
  temas: {
    lombar:   { nome: "parte baixa das costas", genero: "f", membro: "perna" },
    cervical: { nome: "pescoço e parte alta das costas", genero: "m", membro: "braço" },
    ombro:    { nome: "ombro", genero: "m" },
    joelho:   { nome: "joelho", genero: "m" },
    quadril:  { nome: "quadril", genero: "m" }
  },

  // tipo: "guia" (entender e começar) ou "plano30" (rotina de 30 dias do tema)
  // status: "no-ar" ou "em-breve"
  produtos: [
    { id: "guia-lombar", tema: "lombar", tipo: "guia", status: "no-ar", preco: "R$ 37", link: "coluna.html",
      nome: "Guia de bolso: [nome do guia de coluna]",
      resumo: "O que acontece na coluna, o que fazer, o que evitar e uma rotina pronta." },
    { id: "plano-lombar", tema: "lombar", tipo: "plano30", status: "em-breve", preco: "R$ 147", link: "",
      nome: "Manual de Coluna: plano de 30 dias",
      resumo: "Os 4 guias de coluna num volume só e um plano de 30 dias como estrutura." },
    { id: "guia-joelho", tema: "joelho", tipo: "guia", status: "em-breve", preco: "R$ 37", link: "",
      nome: "Guia de bolso do joelho",
      resumo: "Entender a dor no joelho e ter uma rotina segura para casa." },
    { id: "guia-ombro", tema: "ombro", tipo: "guia", status: "em-breve", preco: "R$ 37", link: "",
      nome: "Guia de bolso do ombro",
      resumo: "Entender a dor no ombro e ter uma rotina segura para casa." }
  ]
};
