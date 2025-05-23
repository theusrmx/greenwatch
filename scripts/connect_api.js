// Inicializa o medidor
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

// Função para buscar dados e atualizar
async function fetchData() {
  try {
    const response = await fetch('https://worried-wealthy-ferryboat.glitch.me/get_dados');
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }

    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      const ultimoRegistro = data[data.length - 1];
      console.log('Último registro:', ultimoRegistro);

      // Atualiza o medidor
      fm.setPercentage(ultimoRegistro.umidade);
    } else {
      document.getElementById('umidade').textContent = 'Nenhum dado disponível';
    }
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    document.getElementById('umidade').textContent = 'Erro ao obter dados!';
  }
}

// Atualiza a cada 5 segundos
fetchData(); // primeira chamada imediata
setInterval(fetchData, 5000);

