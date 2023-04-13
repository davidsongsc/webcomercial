

const CACHE_KEY = 'produtos';
const CACHE_TTL = 60 * 1000; // 1 minuto em milissegundos

async function fetchProdutos() {
  const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
  const timestamp = cache.timestamp;
  const nome = 'maquina'
  const token = 'abc123'

  // Verifica se os dados no cache são válidos
  if (cache.produtos && timestamp && Date.now() - timestamp < CACHE_TTL) {
    return cache.produtos;
  }

  try {
    const response = await fetch(`https://dagesico.pythonanywhere.com/produtos?nome=${nome}&token=${token}`);
    const data = await response.json();

    // Atualiza o cache
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      produtos: data.produtos.map(produto => ({
        ...produto,
        imagem: produto.imagem ? `https://dagesico.pythonanywhere.com/static/img/${produto.imagem}` : null,
      })),
      timestamp: Date.now(),
    }));

    return data.produtos;
  } catch (error) {
    console.error(error);
    // Se ocorrer um erro ao buscar os dados da API, retorna os dados do cache (se existirem)
    return cache.produtos || [];
  }
}

export default fetchProdutos;
