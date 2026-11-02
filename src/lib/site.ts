import { getCollection } from 'astro:content';

export const site = {
  name: 'Erick Haendel',
  title: 'Erick Haendel | CTO na FindUP',
  role: 'CTO na FindUP. Plataformas de suporte de TI e agentes de IA.',
  tagline: 'Buscando a diferença em um mundo de igualdades.',
  description:
    'CTO na FindUP, onde lidero a construção da Aurora, do Sentinela e do Desklens. Recife, Pernambuco.',
  email: 'erickhaendel@gmail.com',
};

export const about = [
  'Sou CTO da FindUP, plataforma de suporte de TI com mais de 25 mil técnicos em todo o Brasil. Entrei como estagiário em 2015 e passei por engenharia, coordenação e gerência de desenvolvimento até assumir a tecnologia em 2026.',
  'Hoje lidero a construção da Aurora, do Sentinela e do Desklens com um time enxuto de 6 pessoas, que entrega mais com IA no fluxo de trabalho.',
];

export const principles = [
  { title: 'Arquitetura antes de modelo', text: 'Roteio o modelo certo para cada etapa do pipeline e uso modelos tipados para decisões delimitadas.' },
  { title: 'Custo de infraestrutura é rotina de engenharia', text: 'Em uma revisão do GCP, identifiquei R$ 245 mil por ano de desperdício.' },
  { title: 'Mockup como fonte da verdade', text: 'A experiência é validada antes de qualquer linha de código.' },
  { title: 'Resolver o problema do cliente', text: 'Passo tempo com clientes e com a operação para calibrar as decisões técnicas.' },
];

export const experience = [
  { role: 'CTO', company: 'FindUP', period: '2026 – hoje' },
  { role: 'Gerente de Desenvolvimento', company: 'FindUP', period: '2020 – 2026' },
  { role: 'Coordenador de Sistemas', company: 'FindUP', period: '2017 – 2020' },
  { role: 'Engenheiro de Software', company: 'FindUP', period: '2016 – 2017' },
  { role: 'Founder e Gerente de Tecnologia', company: 'Plano do Bem', period: '2016 – 2018' },
  { role: 'Estagiário de Desenvolvimento', company: 'FindUP', period: '2015 – 2016' },
  { role: 'Developer', company: 'SWQuality', period: '2014 – 2015' },
  { role: 'Web Developer', company: 'Acadetec', period: '2014' },
  { role: 'Desenvolvedor Web Freelancer', company: 'Autônomo', period: '2009 – 2013' },
];

export const socials = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/erickhaendel' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/erickhaendel' },
  { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com/erickhaendel' },
  { label: 'X', icon: 'x', href: 'https://twitter.com/erickhaendell' },
] as const;

export const getProjects = async () =>
  (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);

export const hostname = (url: string) =>
  new URL(url).hostname.replace(/^www\./, '');
