// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('#nav-menu a');

  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
      }
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
    }
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

// Experiências Profissionais
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
          <p>Participação ativa nos projetos e manutenção dos sistemas desenvolvidos para atender as demandas e tarefas diárias de clientes e funcionários. Atuando diretamente nas melhorias para atender os contratos de cada clientes de acordo com a sua utilização e documentação.
          </p>
          <p>
          Não só uma empresa onde atende todo nosso pais, mas uma empresa com um ambiente familiar e acolhedor, trouxe desafios para equipe de desenvolvimento, onde seu intuito é aprimorar cada vez mais os sistemas para atender com qualidade e desempenho todos os clientes e proporcionando uma ótima experiencia em seus serviços.
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
          Habilidades: PHP-(Phalcon), Node, JavaScript, HTML, CSS, MySQL, Bootstrap, Git, GitLab, Apache, Angular-(V12 - V18) e Docker
        `
  },
  engefogo: {
    title: "Analista De Desenvolvimento Jr - Engefogo",
    details: `
          <p>2020 - Freelance</p>
          <p>
            Freelance ao qual estava auxiliando no desenvolvimento do sistema administrativo, onde o mesmo abordava toda a administração de estoque dos produtos, peças e equipamentos utilizados pela empresa e clientes. abordando com detalhes cada item utilizado e comercializado.
          </p>
          <ul>
            <li>Portal WEB Administrativo</li>
            <li>Banco de Dados - MySQl</li>
          </ul>
          Habilidades: PHP, JavaScript, HTML, CSS, MySQL, Bootstrap, Git, GitLab e Docker
        `
  },
  profissionaisSA: {
    title: "Analista De Desenvolvimento Jr - Profissionais - SA",
    details: `
          <p>2020 - Freelance</p>
          <p>
            Freelance ao qual estava auxiliando no desenvolvimento front-end, tarefas de criação dos componentes usados no site, apresentação de conteúdos, aplicação do projeto seguindo de acordo com o desenvolvido pelo setor  web-designer.
          </p>
          <ul>
            <li>Estruturação do Frontend e responsividade Mobile</li>
          </ul>
          Habilidades: JavaScript, HTML, CSS, Bootstrap, GitLab e Docker
        `
  },
  contern: {
    title: "Analista De Suporte Técnico Pleno - Contern Construção e Comercio LTDA",
    details: `
          <p>Fev 2013 - Dez 2017</p>
          <p>
            Coordenação de analistas TI em filiais (OBRAS) gerenciamentos de switches Cisco, telefonia IP(VOIP), Access Point, servidores, acompanhamento de aberturas de chamados e recursos de rede, atendimento direto e indireto aos colaboradores da empresa e terceiros, Desktop, Notebook, Celulares, Tablet, Ipad, Iphone, Impressoras, Rotina de Backup, Aplicativos diversos com e sem Licenças, Atualização de Sistemas, Help-Desk, Acesso Remoto, Desenvolvimento de Tutoriais, Gerenciamento SLA – em conjunto com provedores e terceiros. Gerenciamento de infraestrutura em filiais (Escritórios) e Canteiros de Obras (Escritórios temporários), Negociação e análise de Contratos, Controle de Equipamentos e Gestão de Patrimônio.
          </p>
          <p>
          Sem duvidas está e uma das empresas que mais trouxe crescimento para minha vida profissional, rebaixei o meu currículo para participar do processo seletivo e entrei na empresa como Auxiliar de informática, no decorrer da minha atuação na empresa de 2012 a 2017. Quando solicitei a minha dispensa da mesma já estava na gestão tecnológica da empresa e seus recursos em obras e projetos aplicados para o seu desenvolvimento tecnológico. Exigiu muito dos meus conhecimentos, onde investi em vários cursos na área de infraestrutura e conhecimentos aplicados por todos setores administrativos.
          </p>
          <ul>
            <li>Gestão De Infraestrutura</li>
            <li>Analise de Projetos e Custos</li>
            <li>Controle de Patrimonio</li>
            <li>Gestão de Contratos</li>
          </ul>
        `
  },
  icomon: {
    title: "ICOMON Tecnologia LTDA.",
    details: `
          <p>2011 - 2012</p>
          <p>
            IRLA - Instalador e Reparador de Linhas e Aparelhos: Atuando na Infraestrutura de redes de telefonia. Atendimento direto e indireto ao cliente, buscando soluções e possíveis reparos de manutenção preventiva. Executando ordens de Instalação, Reparos ou Chamados de urgência com ordens da ANATEL.
          </p>
          <p>
            Empresa que competiu usar meus conhecimentos tecnológicos em redes, e aplicando seus conceitos na área de telefonia, possui ótimas experiencias em atendimentos aos clientes. Atuando no dia a dia aprendi os conceitos e aplicações da infraestrutura da operadora de telefonia e internet em varias cidades por onde atuei como técnico em telefonia.
          </p>
          <ul>
            <li>Gestão de Rede de Telefonia</li>
            <li>Suporte e Reparo de Linha Telefonia</li>
            <li>Reagrupamento de Rede</li>
            <li>Atendimento Direto ao Cliente</li>
            <li>Gestão de Materiais e Ferramental</li>
          </ul>
        `
  },
  puma_hard_soft: {
    title: "Puma Hard & Soft.",
    details: `
          <p>2005 - 2008</p>
          <p>
            Analista Suporte Técnico Junior: Atendimento direto e indireto ao cliente, buscando soluções e possíveis reparos de manutenção de preservação dos equipamentos. Atuando nas areas de Manutenção e atendimento de chamados, pessoas físicas e empresas, orçamentos e auxiliando no atendimento recepção. 
          </p>
          <p>
            Projeto de futuro montado enquanto eu estudava tecnologia, juntamente com um amigo seguimos uma sociedade buscando o nosso desenvolvimento profissional e pessoal. Está loja demostrou o quanto eu estava disposto e capacitado para enfrentar o mercado e suas dificuldades, atendimento a clientes físicos e empresas, trouxe não só um fortalecimento profissional e também por sua vez um ótimo crescimento pessoal. Investimentos e administração da mesma. 
            <br />
            A primeira decepção em uma bruta situação que veio sobre esta empresa foi devido ao furto ocorrido em uma madrugada, onde perdi tudo que havíamos conquistado materialmente. Infelizmente veio a falência da empresa e suas consequências devido as perdas nossas e de clientes. E finalizando nossa sociedade nesta empresa. Contudo através de anos de trabalho venci utilizando os conhecimentos adquiridos e apoios de amigos e familiares
          </p>
          <ul>
            <li>Atendimento ao Cliente</li>
            <li>Gestão e Administração de Suprimentos</li>
            <li>Manutenção de Microcomputadores</li>
            <li>Suporte de informática</li>
          </ul>
        `
  }
};

// Formações e Cursos
const educationDetails = {
  uninove: {
    title: "Graduação - Analise Desenvolvimento de Sistemas",
    details: `
          <h4>Universidade Nove de Julho</h4>
          <p>2020 - 2023</p>
          <p>Grade de Ensino: Conhecimentos e estudos adquiridos nesta graduação. Universidade Nove de Julho.</p>
          <ul>
            <li>DESENVOLVIMENTO DE INTERFACES DINÂMICAS</li>
            <li>MODELAGEM DE INTERFACES</li>
            <li>PROGRAMAÇÃO DE INTERFACES</li>
            <li>ARQUITETURA DA INFORMAÇÃO</li>
            <li>ATIVIDADES COMPLEMENTARES 40h</li>
            <li>FERRAMENTAS DE GERENCIAMENTO DE CONTEÚDO</li>
            <li>FERRAMENTAS DE TRATAMENTO DE IMAGENS E VÍDEOS</li>
            <li>LÓGICA DE PROGRAMAÇÃO</li>
            <li>SISTEMAS DISTRIBUÍDOS</li>
            <li>ARQUITETURA DE SOFTWARE</li>
            <li>ENGENHARIA DE SOFTWARE</li>
            <li>GESTÃO DE PROJETOS DE SOFTWARE</li>
            <li>INTERAÇÃO HUMANO COMPUTADOR</li>
            <li>QUALIDADE DE SOFTWARE</li>
            <li>DESENVOLVIMENTO DE INTERFACES ESTÁTICAS</li>
            <li>PROGRAMAÇÃO DE COMÉRCIO ELETRÔNICO</li>
            <li>PROGRAMAÇÃO DE INTERFACES RESPONSIVAS</li>
            <li>RECURSOS DE APOIO À PROGRAMAÇÃO</li>
            <li>SERVIDORES DE APLICAÇÃO</li>
            <li>ATIVIDADES COMPLEMENTARES MÓDULOS AVANÇADOS 40h</li>
            <li>DESENVOLVIMENTO DE SERVIÇOS WEB</li>
            <li>DESENVOLVIMENTO DE SISTEMAS MÓVEIS</li>
            <li>PROGRAMAÇÃO DE PORTAIS CORPORATIVOS</li>
            <li>PROGRAMAÇÃO PARA WEB EM AMBIENTE LIVRE</li>
            <li>PROGRAMAÇÃO PARA WEB EM AMBIENTE PROPRIETÁRIO</li>
            <li>DESENVOLVIMENTO DE APLICAÇÕES WEB</li>
            <li>INTEGRAÇÃO DE SISTEMAS </li>
          </ul>
        `
  },
  senai: {
    title: "Técnico Mantenedor e Programador de Microcomputadores",
    details: `
          <h4>SENAI - Luis Eulalio de Bueno Vidigal Filho</h4>
          <p>2002 - 2003</p>
          <p>Grade de Ensino: Conhecimentos e estudos adquiridos neste curso técnico no instituto de ensino SENAI</p>
          <p>
            <strong>SISTEMAS E PROGRAMAÇÃO</strong>
            <ul>
              <li>INF - Informática</li>
              <li>LOG - Logica de Programação</li>
              <li>LIP - Linguagem de Programação</li>
              <li>BCD - Banco de Dados</li>
            </ul>
          </p>
          <p>
          <strong>MANUTENÇÃO E INFRAESTRUTURA</strong>
            <ul>
              <li>INF - Informática</li>
              <li>ELB - Eletrônica Básica</li>
              <li>OS  - Sistemas Operacionais</li>
              <li>MIB - Microcomputador Básico</li>
              <li>MSM - Manutenção de Sistemas de Microcomputador</li>
            </ul>
          </p>
          <p>
          <strong>TECNOLOGIA DA INFORMAÇÃO  </strong>
            <ul>
              <li>O que são as TIC</li>
              <li>Conceitos de ambiente virtual, comunidade virtual, internet.</li>
              <li>Conceitos de SOFTWARE e HARDWARE</li>
              <li>Evolução e tendencia das TIC</li>
              <li>Uso de ferramentas da internet para pesquisa e importância da seleção e organização das Informações</li>
            </ul>
          </p>
          <p>
          <strong>LÓGICA DE PROGRAMAÇÃO</strong>
            <ul>
              <li>Introdução - Representações</li>
              <li>Tipos de Dados (Inteiro, Real, Literal, Lógico)</li>
              <li>Variáveis</li>
              <li>Expressões Aritméticas</li>
              <li>Expressões Lógicas</li>
              <li>Estrutura de Repetição</li>
              <li>Estrutura de Condição</li>
              <li>Variáveis Indexadas</li>
              <li>Revisão - Sub-Algorítimo</li>
            </ul>
          </p>
        `
  },
  udemy: {
    title: "Programação",
    details: `
          <h4>Udemy plataforma EAD</h4>
          <p>2019 - 2020</p>
          <p>Grade de Ensino: Conhecimentos e estudos adquiridos nesta plataforma de ensino a distancia.</p>
          <p>
            <strong>PHP-7 Completo com Projeto E-Commerce</strong>
            <ul>
              <li>Curso de PHP Completo</li>
              <li>Projeto E-Commerce</li>
              <li>Administração e Site</li>
              <li>Estrutura de controle e laços de repetição, Arrays, Sessão, Funções, Date.</li>
              <li>Banco de dados MYSQL</li>
              <li>Banco de dados PDO</li>
              <li>E-mail com PHPMailer</li>
              <li>Segurança No PHP-7</li>
            </ul>
          </p>
          <p>
            <strong>ANGULAR 13 com 7 mini projetos</strong>
            <ul>
              <li>Primeiro Projeto - Olá Mundo</li>
              <li>Segundo Projeto - Calculadora</li>
              <li>Terceiro Projeto - Gerenciador de Tarefas</li>
              <li>Quarto Projeto - Jogo da Velha</li>
              <li>Quinto Projeto - Conversor de Moedas</li>
              <li>Sexto Projeto - Dashboard</li>
              <li>Primeiro Projeto - Unificação dos projetos</li>
            </ul>
          </p>
        `
  },
  cursos: {
    title: "Cursos Variados",
    details: `
          <h4>Instituições de Ensinos</h4>
          <p>2019 - 2020</p>
          <p>Grade de Ensino: Conhecimentos e estudos variados.</p>
          <p>
            <strong>Em Breve mais cursos listados</strong>
            <ul>
              <li>?????</li>
            </ul>
          </p>
        `
  },

};

// Project details
const projectDetails = {
  vacinar_sistema_project: {
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
            <li>Front-end: Angular, HTML, CSS, Angular, Bootstrap, Material</li>
            <li>Back-end: PHP, Docker</li>
            <li>Banco de dados: Mysql, Postgres</li>
          </ul>
        `
  },
  ecommerce_project: {
    title: "Plataforma E-commerce",
    details: `
          <p>Curso EAD Udemy - Uma plataforma de comércio eletrônico robusta e escalável com funcionalidades completas de carrinho e pagamento.</p>
          <h3>Recursos principais:</h3>
          <ul>
            <li>Catálogo de produtos com categorias e filtros</li>
            <li>Carrinho de compras e checkout seguros</li>
            <li>Integração com gateways de pagamento, Pag-Seguro e PayPal</li>
            <li>Painel de administração para gerenciamento de produtos e pedidos</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>Front-end: HTML, CSS, Bootstrap</li>
            <li>Back-end: PHP-7</li>
            <li>Banco de dados: MySQL</li>
          </ul>
        `
  },
  matrimoniall_project: {
    title: "Matrimoniall Orquestra & Banda",
    details: `
          <p>Site Oficial de uma das melhores empresas de Cerimonias e eventos de São Paulo e região.</p>
          <h3>Recursos principais:</h3>
          <ul>
            <li>Catálogo Planos de contratação</li>
            <li>Apresentação tipos de serviços</li>
            <li>Amplo conteúdo de Bandas e Orquestras</li>
            <li>Depoimentos e fotos diversas</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>Front-end: Angular, HTML, CSS, Bootstrap</li>
            <li>Back-end: PHP-7</li>
          </ul>
        `
  },
  vacinar_sistema_website: {
    title: "WEBSITE Vacinar",
    details: `
          <p>
            Restruturação do Site Oficial, buscando melhorar desempenho e usabilidade com responsividade e segurança, alcançando melhor engajamento nas ferramentas de busca do google
          </p>
          <h3>Funcionalidades principais:</h3>
          <ul>
            <li>Site Clean</li>
            <li>Site Clean Code</li>
            <li>Usabilidade</li>
            <li>Informação de Campanhas</li>
            <li>Cadastro de Participantes de treinamentos</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>Front-end: HTML, CSS, JavaScript</li>
            <li>Back-end: PHP</li>
            <li>Banco de dados: Mysql</li>
          </ul>
        `
  },
  profissionais_project: {
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
            <li>HTML5, CSS3, JavaScript</li>
          </ul>
        `
  },
  bersali_project: {
    title: "Otica Bersali",
    details: `
          <p>Site personalizado de acordo com as diretivas da empresa, mostrando os conteúdos e tipos de serviços disponibilizados.</p>
          <h3>Características principais:</h3>
          <ul>
            <li>Design responsivo e intuitivo</li>
            <li>Apresentação de Promoção</li>
            <li>Visão da empresa</li>
            <li>Tipos de produtos, marcas e serviços</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>Front-end: Angulas, HTML, CSS, Bootstrap</li>
            <li>Back-end: PHP</li>
          </ul>
        `
  },  
  douglas_box_project: {
    title: "Douglas Box de Garagem",
    details: `
          <p>Site personalizado buscando mostrar a essência do esporte de garagem, boxe um esporte que exige disciplina e técnica.</p>
          <h3>Características principais:</h3>
          <ul>
            <li>Design responsivo e intuitivo</li>
            <li>Apresentação de Promoção</li>
            <li>Apresentação do esporte</li>
            <li>Tipos de produtos, marcas e serviços</li>
          </ul>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li>Front-end: Angulas, HTML, CSS, Bootstrap</li>
          </ul>
        `
  },

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