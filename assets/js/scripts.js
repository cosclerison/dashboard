// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Highlight active navigation item
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').slice(1) === current) {
      item.classList.add('active');
    }
  });
});

// Modal functionality
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDetails = document.getElementById("modal-details");
const closeBtns = document.getElementsByClassName("close");

// Project details
const projectDetails = {
  vacinar: {
    title: "Sistema Vacinar",
    details: `
          <p>O Sistema Vacinar é uma solução completa para gerenciamento de vacinação desenvolvida para a Vacinar Clínica de Imunização.</p>
          <h3>Funcionalidades principais:</h3>
          <ul>
            <li>Cadastro de pacientes e histórico de vacinação</li>
            <li>Agendamento de vacinas</li>
            <li>Controle de estoque de vacinas</li>
            <li>Relatórios e estatísticas de vacinação</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>Front-end: Angular, Bootstrap</li>
            <li>Back-end: Node.js, Express</li>
            <li>Banco de dados: MongoDB</li>
          </ul>
        `
  },
  ecommerce: {
    title: "Plataforma E-commerce",
    details: `
          <p>Uma plataforma de comércio eletrônico robusta e escalável com funcionalidades completas de carrinho e pagamento.</p>
          <h3>Recursos principais:</h3>
          <ul>
            <li>Catálogo de produtos com categorias e filtros</li>
            <li>Carrinho de compras e checkout seguros</li>
            <li>Integração com gateways de pagamento</li>
            <li>Painel de administração para gerenciamento de produtos e pedidos</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>Front-end: React, Redux, Styled Components</li>
            <li>Back-end: PHP, Laravel</li>
            <li>Banco de dados: MySQL</li>
          </ul>
        `
  },
  profissionais: {
    title: "Profissionais SA",
    details: `
          <p>Site institucional para empresa de palestras e treinamentos profissionais, com foco em experiência do usuário e design moderno.</p>
          <h3>Características principais:</h3>
          <ul>
            <li>Design responsivo e intuitivo</li>
            <li>Catálogo de palestrantes e cursos</li>
            <li>Sistema de agendamento de palestras</li>
            <li>Blog com artigos sobre desenvolvimento profissional</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>WordPress personalizado</li>
            <li>HTML5, CSS3, JavaScript</li>
            <li>PHP para funcionalidades personalizadas</li>
          </ul>
        `
  },
  fitness: {
    title: "App Fitness",
    details: `
          <p>Aplicativo móvel para acompanhamento de treinos e dieta.</p>
          <h3>Funcionalidades principais:</h3>
          <ul>
            <li>Criação de planos de treino personalizados</li>
            <li>Registro de refeições e cálculo de macronutrientes</li>
            <li>Integração com dispositivos wearables</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>React Native</li>
            <li>Firebase</li>
            <li>API de reconhecimento de alimentos</li>
          </ul>
        `
  },
  redepets: {
    title: "Rede Social para Pets",
    details: `
          <p>Plataforma web para compartilhamento de fotos e informações sobre animais de estimação.</p>
          <h3>Funcionalidades principais:</h3>
          <ul>
            <li>Perfis personalizados para pets</li>
            <li>Feed de notícias e sistema de curtidas/comentários</li>
            <li>Marketplace para produtos pet</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>Vue.js</li>
            <li>Node.js com Express</li>
            <li>MongoDB</li>
          </ul>
        `
  },
  financas: {
    title: "Sistema de Gestão Financeira",
    details: `
          <p>Aplicação web para controle de despesas e investimentos pessoais.</p>
          <h3>Funcionalidades principais:</h3>
          <ul>
            <li>Registro de receitas e despesas</li>
            <li>Geração de relatórios e gráficos</li>
            <li>Planejamento de metas financeiras</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>Angular</li>
            <li>ASP.NET Core</li>
            <li>SQL Server</li>
          </ul>
        `
  },
  blogtech: {
    title: "Blog Tech",
    details: `
          <p>Blog sobre tecnologia e programação com sistema de gerenciamento de conteúdo personalizado.</p>
          <h3>Funcionalidades principais:</h3>
          <ul>
            <li>Sistema de publicação de artigos</li>
            <li>Categorização e tags para posts</li>
            <li>Sistema de comentários e moderação</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>WordPress (tema e plugins personalizados)</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        `
  },
  biblioteca: {
    title: "Biblioteca Virtual",
    details: `
          <p>Sistema de gerenciamento de livros e empréstimos para bibliotecas.</p>
          <h3>Funcionalidades principais:</h3>
          <ul>
            <li>Catálogo de livros com sistema de busca</li>
            <li>Controle de empréstimos e devoluções</li>
            <li>Geração de relatórios de utilização</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>React</li>
            <li>Django</li>
            <li>PostgreSQL</li>
          </ul>
        `
  },
  quiz: {
    title: "Quiz Educativo",
    details: `
          <p>Aplicativo de perguntas e respostas para auxiliar no estudo de diversas disciplinas.</p>
          <h3>Funcionalidades principais:</h3>
          <ul>
            <li>Quizzes por disciplina e nível de dificuldade</li>
            <li>Sistema de pontuação e ranking</li>
            <li>Modo de estudo com explicações detalhadas</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>Flutter</li>
            <li>Firebase</li>
            <li>API de Text-to-Speech</li>
          </ul>
        `
  }
};

const experienceDetails = {
  analistaMV: {
    title: "Analista De Sistemas - Modelo Vencedor",
    details: `
          <p>Atuação: Backend - Automação</p>
          <ul>
            <li>Analise e desenvolvimento de sistemas WEB</li>
            <li>Manutenção de Portais WEB</li>
            <li>Automação com N8N (JS)</li>
            <li>Servidores Linux</li>
            <li>Backend</li>
          </ul>
            Habilidades: PHP-(Laravel), Node, N8N, JavaScript, HTML, CSS, MySQL, Oracle, Twig, Bootstrap, Git, Apache
        `
  },
  vacinarImunizacao: {
    title: "Analista De Desenvolvimento De Sistemas FullStack - Vacinar Centro De Imunização",
    details: `
          <p>Atuação: Backend - Frontend</p>
          <p>Atuação nas tarefas de manutenção dos sistemas administrativos e clientes, participação ativa nos projetos de desenvolvimento dos sistemas administrativos, clientes e documentação.
          </p>
          <ul>
            <li>Analise De Desenvolvimento De Sistema WEB</li>
            <li>SGC Sistema Administrativo De Vacinação</li>
            <li>SGC Sistema De Clientes </li>
            <li>SGC Sistema De Aplicação VMS</li>
            <li>SGC Sistema De Adesão De Vacinação</li>
            <li>SCE Sistema Administrativo Vacinar</li>
            <li>Trabalho em equipe utilizando metodologias ágeis</li>
          </ul>
          Habilidades: PHP-(Phalcon), Node, JavaScript, HTML, CSS, MySQL, Bootstrap, Git, GitLab, Apache, Angular-(V12 - V18), Docker
        `
  },
  engefogo: {
    title: "Analista De Desenvolvimento Jr - Engefogo",
    details: `
          <p>2020 - Freelance</p>
          <p>
            Freelance ao qual estava auxiliando no desenvolvimento do sistema administrativo, onde o mesmo   abordava toda a administração de estoque dos produtos, peças e equipamentos utilizados pela empresa e clientes.
          </p>
          <ul>
            <li>Postal Administrativo</li>
            <li>Banco de Dados MySQl</li>
          </ul>
          Habilidades: PHP, JavaScript, HTML, CSS, MySQL, Bootstrap, Git, GitLab, Docker
        `
  },
  profissionaisSA: {
    title: "Analista De Desenvolvimento Jr - Profissionais - SA",
    details: `
          <p>2020 - Freelance</p>
          <p>
            Freelance ao qual estava auxiliando no desenvolvimento front-end, tarefas de criação dos componentes usados no site, apresentação de conteúdos, aplicação do projeto seguindo de acordo com o desenvolvimentos do web designer.
          </p>
          <ul>
            <li>Estruturação do Frontend e responsividade Mobile</li>
          </ul>
          Habilidades: JavaScript, HTML, CSS, Bootstrap, GitLab, Docker
        `
  },
  contern: {
    title: "Analista De Suporte Técnico Pleno - Contern Construção e Comercio LTDA",
    details: `
          <p>Fev 2013 - Dez 2017</p>
          <p>
            Coordenação de analistas TI em filiais (OBRAS) gerenciamento switches Cisco, telefonia IP, Access Point, servidores, acompanhamento de chamado e recursos de rede, atendimento direto e indireto aos colaboradores da empresa, Desktop, Notebook, Celulares, Tablet, Ipad, Iphone, Impressoras, rotina de Backup, Aplicativos diversos, Atualização de sistemas, help-desk, acesso remoto, desenvolvimento de tutoriais, gerenciamento SLA – em conjunto com provedores e terceiros. Gerenciamento de infraestrutura em filiais (Escritórios), negociação e análise de contratos, controle de equipamentos e patrimônio.
          </p>
          <ul>
            <li>Auxílio aos alunos em disciplinas de programação</li>
            <li>Preparação de material didático</li>
            <li>Correção de exercícios e trabalhos</li>
            <li>Organização de grupos de estudo e sessões de programação em pares</li>
          </ul>
        `
  },
  hackathon: {
    title: "Participante de Hackathon",
    details: `
          <p>Out 2014</p>
          <ul>
            <li>Desenvolvimento de um aplicativo em 48 horas</li>
            <li>Trabalho em equipe sob pressão</li>
            <li>Apresentação do projeto para jurados</li>
            <li>Aprendizado rápido de novas tecnologias e metodologias ágeis</li>
          </ul>
        `
  }
};

const educationDetails = {
  bacharelado: {
    title: "Bacharelado em Sistemas de Informação",
    details: `
          <h4>Universidade Federal do Estado</h4>
          <p>2015 - 2019</p>
          <ul>
            <li>Principais disciplinas: Programação, Banco de Dados, Engenharia de Software</li>
            <li>Projeto de conclusão: Desenvolvimento de um sistema de gerenciamento de projetos</li>
            <li>Participação em projetos de extensão e iniciação científica</li>
          </ul>
        `
  },
  tecnico: {
    title: "Técnico em Informática",
    details: `
          <h4>Instituto Técnico Estadual</h4>
          <p>2013 - 2014</p>
          <ul>
            <li>Fundamentos de programação e lógica</li>
            <li>Manutenção de hardware e redes</li>
            <li>Desenvolvimento de aplicações web básicas</li>
          </ul>
        `
  },
  uxui: {
    title: "Curso de Especialização em UX/UI Design",
    details: `
          <h4>Instituto de Design Digital</h4>
          <p>2020 - 2021</p>
          <ul>
            <li>Princípios de design centrado no usuário</li>
            <li>Prototipagem e testes de usabilidade</li>
            <li>Design de interfaces responsivas</li>
            <li>Projeto final: Redesign de um aplicativo mobile</li>
          </ul>
        `
  },
  scrum: {
    title: "Certificação em Scrum Master",
    details: `
          <h4>Scrum Alliance</h4>
          <p>2019</p>
          <ul>
            <li>Fundamentos do Scrum e metodologias ágeis</li>
            <li>Facilitação de eventos Scrum</li>
            <li>Remoção de impedimentos e coaching de equipes</li>
            <li>Certificação obtida após exame teórico e prático</li>
          </ul>
        `
  },
  ingles: {
    title: "Curso de Inglês Avançado",
    details: `
          <h4>English School</h4>
          <p>2016 - 2018</p>
          <ul>
            <li>Desenvolvimento de habilidades de comunicação em inglês</li>
            <li>Foco em vocabulário técnico e de negócios</li>
            <li>Preparação para certificações internacionais</li>
            <li>Intercâmbio cultural com falantes nativos</li>
          </ul>
        `
  },
  mobile: {
    title: "Curso de Desenvolvimento Mobile",
    details: `
          <h4>Tech Academy</h4>
          <p>2017</p>
          <ul>
            <li>Introdução ao desenvolvimento para iOS e Android</li>
            <li>Criação de interfaces nativas e híbridas</li>
            <li>Integração com APIs e serviços em nuvem</li>
            <li>Projeto final: Desenvolvimento de um aplicativo funcional</li>
          </ul>
        `
  }
};

// Modify the existing event listener for 'saiba-mais-btn'
document.querySelectorAll('.saiba-mais-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    let details;
    if (this.hasAttribute('data-project')) {
      const project = this.getAttribute('data-project');
      details = projectDetails[project];
    } else if (this.hasAttribute('data-experience')) {
      const experience = this.getAttribute('data-experience');
      details = experienceDetails[experience];
    } else if (this.hasAttribute('data-education')) {
      const education = this.getAttribute('data-education');
      details = educationDetails[education];
    }

    if (details) {
      modalTitle.textContent = details.title;
      modalDetails.innerHTML = details.details;
      modal.style.display = "block";
    }
  });
});

// Close modal
for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function () {
    modal.style.display = "none";
  }
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}