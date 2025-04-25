# Introdução

O projeto **GreenWatch** surgiu com o objetivo de oferecer uma solução acessível, prática e sustentável para o cuidado com plantas domésticas, atendendo especialmente a um público diverso, composto por entusiastas da floricultura de baixa e média renda. 

Com o aumento do interesse por jardinagem urbana e a necessidade de otimizar o uso da água, identificou-se uma série de desafios enfrentados por quem cultiva plantas em casa, como a dificuldade em controlar a irrigação de forma eficaz e a ausência de ferramentas acessíveis para monitorar a umidade do solo. 

Diante disso, o GreenWatch propõe o desenvolvimento de um sistema inteligente que utiliza sensores e tecnologias de **IoT** integradas à programação em **Python**, aliado a um **front-end** intuitivo e responsivo, que permite ao usuário acompanhar em tempo real as condições do solo e tomar decisões precisas sobre a irrigação.

Alinhado às áreas de tecnologia, engenharia e desenvolvimento web, o projeto aplica conhecimentos técnicos de forma prática e busca promover o uso consciente da água, incentivando práticas sustentáveis de cultivo em ambientes urbanos.

---

# Objetivo

- Desenvolver um sistema automatizado de monitoramento de umidade do solo utilizando a plataforma **ESP32** e sensores de umidade, capaz de coletar e transmitir dados precisos em tempo real sobre as condições do solo para otimizar a irrigação.
- Fornecer aos usuários informações claras e acessíveis sobre a frequência e quantidade ideal de irrigação, incentivando uma prática consciente e eficiente de cuidado com as plantas.
- Avaliar a eficácia do sistema com a participação dos usuários, utilizando questionários de feedback e análises de dados sobre o uso do sistema para aprimorar a experiência e garantir que o sistema atenda às expectativas de praticidade e sustentabilidade.

---

# Escopo

O sistema GreenWatch será composto por dois requisitos principais:

1. **Monitoramento da umidade do solo em tempo real**  
   Por meio de sensores conectados à plataforma ESP32, que enviará os dados coletados para um servidor via Wi-Fi. Esse módulo será responsável por captar e transmitir continuamente os níveis de umidade do solo de forma precisa e confiável.

2. **Interface web (front-end) responsiva**  
   Desenvolvida para que os usuários possam visualizar os dados de umidade de forma clara, intuitiva e acessível. A interface exibirá informações atualizadas em tempo real e trará orientações sobre a necessidade de irrigação das plantas com base nos dados recebidos.

**Limitações do escopo:**  
Não serão implementadas, nesta fase, funcionalidades como controle automático da irrigação (por meio de atuadores), integração com assistentes virtuais, nem o suporte a múltiplos sensores conectados a uma mesma central. O foco será na entrega de um sistema funcional de monitoramento com visualização em tempo real via navegador.

---

# Backlogs do Produto

- **Leitura da umidade do solo via sensor**  
  O sistema deve ser capaz de coletar dados da umidade do solo utilizando sensores conectados à placa ESP32. Esses dados serão a base para o monitoramento da planta.

- **Transmissão de dados via Wi-Fi**  
  A ESP32 deve enviar os dados de umidade coletados para um servidor através de uma conexão Wi-Fi, garantindo o acesso remoto e em tempo real às informações.

- **Armazenamento dos dados em banco de dados**  
  O sistema contará com uma interface web adaptável a diferentes dispositivos (computadores, tablets e smartphones), onde o usuário poderá acompanhar os dados de umidade do solo de forma clara e objetiva.

- **Interface web responsiva para visualização dos dados**  
  A interface apresentará uma representação gráfica (como um medidor ou barra de progresso) indicando os níveis de umidade, com cores ou ícones que alertem quando a planta estiver precisando de água.

---

# Cronograma

> *Insira aqui uma imagem ou tabela de todo o planejamento do projeto (com atividades e datas). A periodicidade das tarefas será de 2 semanas. O cronograma deve abranger todo o processo de construção do projeto. Isso pode ser feito diretamente neste doc, no Excel, Canva etc.*

---

# Materiais e Métodos

## Modelagem do sistema

> *Dica: a modelagem do seu sistema são diagramas (desenhos) da sua estrutura ou comportamento. A UML (Unified Modelling Language) oferece diversos diagramas para que você possa modelar seu sistema. Escolha, pelo menos, dois modelos e insira aqui.*

Exemplos sugeridos:

- **Diagrama de Casos de Uso**: mostra as relações entre Atores e Processos.
- **Diagrama de Classes**: mostra as relações entre as classes do sistema.
- **MER (Modelo Entidade-Relacionamento)**: mostra as relações entre os dados das tabelas do banco de dados.

Ferramentas recomendadas: Lucidchart, Draw.io, etc.

## Tecnologias utilizadas

- **Python**: Para construção da API do sistema utilizamos o framework **FastAPI**.
- **C**: Utilizada na programação da placa **ESP32** e para estabelecer a comunicação entre o dispositivo e o back-end, garantindo o envio e recebimento de dados.
