// Faixas ideais de umidade por planta
const niveisUmidade = {
  "Espada-de-São-Jorge": [10, 20],
  "Zamioculca": [10, 20],
  "Jiboia": [30, 40],
  "Lírio-da-paz": [40, 60],
  "Samambaia": [50, 70],
  "Maranta": [50, 60],
  "Peperômia": [30, 40],
  "Antúrio": [40, 60],
  "Begônia": [40, 55],
  "Pacová": [30, 45],
  "Cactos": [5, 15],
  "Suculentas": [5, 20],
  "Areca (Palmeira Chamaedorea)": [40, 60],
  "Fitônia": [50, 70],
  "Orquídea (Phalaenopsis)": [30, 40]
};

let plantaSelecionada = null;

// Inicializa medidor
var fm = new FluidMeter();
fm.init({
  targetContainer: document.getElementById("medidor"),
  fillPercentage: 0,
  options: {
    fontFamily: "Raleway",
    drawPercentageSign: true,
    drawBubbles: true,
    size: 300,
    borderWidth: 20,
    backgroundColor: "#eee",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "#00aaff",
      angularSpeed: 100,
      maxAmplitude: 12,
      frequency: 30,
      horizontalSpeed: -150
    },
    backgroundFluidLayer: {
      fillStyle: "#87cefa",
      angularSpeed: 100,
      maxAmplitude: 9,
      frequency: 30,
      horizontalSpeed: 150
    }
  }
});

// Seleciona planta
document.getElementById("plant-select").addEventListener("change", function() {
  plantaSelecionada = this.value;
  const faixa = niveisUmidade[plantaSelecionada];
  document.getElementById("umidade-texto").textContent = `Ideal para ${plantaSelecionada}: ${faixa[0]}–${faixa[1]}%`;
});

// Atualiza dados de umidade em tempo real
async function fetchData() {
  try {
    const response = await fetch('https://worried-wealthy-ferryboat.glitch.me/get_dados');
    if (!response.ok) throw new Error(`Erro: ${response.status}`);

    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      const ultimoRegistro = data[data.length - 1];
      const umidadeAtual = ultimoRegistro.umidade;

      // Atualiza medidor
      fm.setPercentage(umidadeAtual);

      // Verifica se está na faixa ideal (se planta foi escolhida)
      if (plantaSelecionada) {
        const [min, max] = niveisUmidade[plantaSelecionada];
        const msg = document.querySelector('.msg');

        if (umidadeAtual < min) {
            msg.style.background = "linear-gradient(to right, #ff9900, #ffcc00)"; 
            msg.innerText = "Sua planta está com sede! 💦";
        } else if (umidadeAtual > max) {
            msg.style.background = "linear-gradient(to right, #ff0000, #ff6666)"; 
        } else {
            msg.style.background = "linear-gradient(to right, #00ff87, #0fefb6)"; 
            msg.innerText = "A plantinha está feliz! Umidade adequada! 🌿";
        }
    }

    } else {
      document.getElementById('estado').textContent = 'Nenhum dado disponível';
    }
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    document.getElementById('estado').textContent = 'Erro ao obter dados!';
  }
}

// Atualiza a cada 5 segundos
fetchData();
setInterval(fetchData, 5000);
