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
            document.getElementById('umidade').textContent = `Umidade: ${ultimoRegistro.umidade}%`;
        } else {
            document.getElementById('umidade').textContent = 'Nenhum dado disponível';
        }
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        document.getElementById('umidade').textContent = 'Erro ao obter dados!';
    }
}

// Atualiza a cada 5 segundos
setInterval(fetchData, 5000);
