

async function fetchGrupos() {
  // Verifica se já existe os dados no localStorage
  const grupos = localStorage.getItem('grupos');
  const timestamp = localStorage.getItem('timestamp');
  const nome = 'maquina'
  const token = 'abc123'

  // Se os dados existirem no localStorage e foram atualizados há menos de 10 minutos, retorna os dados do localStorage
  if (grupos && timestamp && Date.now() - timestamp < 600000) {
    return JSON.parse(grupos);
  }

  // Caso contrário, faz uma nova solicitação à API
  const response = await fetch(`https://dagesico.pythonanywhere.com/grupos?nome=${nome}&token=${token}`);
  const data = await response.json();

  // Armazena os dados no localStorage e a data atual como timestamp
  localStorage.setItem('grupos', JSON.stringify(data.grupos));
  localStorage.setItem('timestamp', Date.now());

  // Retorna os dados da API
  return data.grupos;
}

// Exporta uma função assíncrona para atualizar os dados do localStorage
export async function atualizarLocalStorage() {
  const grupos = await fetchGrupos();
  localStorage.setItem('grupos', JSON.stringify(grupos));
  localStorage.setItem('timestamp', Date.now());
}

export default fetchGrupos;
