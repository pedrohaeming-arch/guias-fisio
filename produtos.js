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
  marca: "Fisio de bolso",                 // o mesmo nome do perfil de marca
  autor: "Pedro Henrique Pietrovski Tancredo Haeming",
  crefito: "CREFITO-10 466644-F",
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

  // tipo: "guia" (entender e começar), "plano30" (rotina de 30 dias do tema) ou "manual" (volume do tema)
  // status: "no-ar" ou "em-breve"
  produtos: [
    { id: "guia-lombar", tema: "lombar", tipo: "guia", status: "no-ar", preco: "R$ 19,90", link: "coluna.html",
      nome: "Guia de bolso: Entenda sua dor lombar",
      resumo: "O que acontece na coluna, o que fazer, o que evitar e uma rotina pronta." },
    { id: "rotina-lombar", tema: "lombar", tipo: "plano30", status: "em-breve", preco: "R$ 37", link: "",
      nome: "Rotina da Lombar: plano de 30 dias",
      resumo: "Onze exercícios da coleção em quatro momentos do dia, com plano de 4 semanas e calendário para marcar." },
    // Manual "Coluna sem mistério" (R$ 147): oferta depois da Rotina. O tipo "manual" não aparece no catálogo nem no quiz.
    { id: "manual-coluna", tema: "lombar", tipo: "manual", status: "em-breve", preco: "R$ 147", link: "",
      nome: "Coluna sem mistério",
      resumo: "Os 5 capítulos de coluna num volume só." }
  ]
};
