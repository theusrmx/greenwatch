![45zrljt85a2f1](https://github.com/user-attachments/assets/46c5891d-c47e-4875-afac-77663fab203a)# Introdução

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

### 📅 Cronograma do Projeto

![crono01](https://github.com/user-attachments/assets/4aa44a6d-da39-4b88-bb03-7ad4f8bd87f1)


---

# Materiais e Métodos

## Modelagem do sistema

### Diagrama de caso de uso
![caso_de_uso](https://github.com/user-attachments/assets/7bdfdf48-9225-434e-8d45-3b344e16b970)

## Tecnologias utilizadas

- **Python**: Para construção da API do sistema utilizamos o framework **FastAPI**, visando sua alta performance e simplicidade na definição de rotas e respostas HTTP.

- **C**: Utilizada na programação da placa **ESP32** e para estabelecer a comunicação entre o dispositivo e o back-end, garantindo o envio e recebimento de dados.

- **HTML, CSS e JavaScript**: Tecnologias utilizadas para implementar a **interface web** acessível ao usuário. A página exibe os dados de umidade em **tempo real** e permite a seleção da planta por meio de um **menu dropdown**, ajustando as informações exibidas de acordo com a espécie.
