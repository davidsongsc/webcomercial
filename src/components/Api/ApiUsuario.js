
const CACHE_KEY = 'produtos';
const CACHE_TTL = 3600000; // tempo de vida do cache em milissegundos (1 hora)

async function fetchProdutos() {

  const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
  const timestamp = cache.timestamp;
  const nome = 'maquina'
  const token = 'abc123'
  const api = 1
  const ipOperacional = ['http://192.168.0.50:5000', 'https://dagesico.pythonanywhere.com']


  // Verifica se os dados no cache são válidos
  if (cache.produtos && timestamp && Date.now() - timestamp < CACHE_TTL) {
    return cache.produtos;
  }

  try {
    const response = await fetch(`${ipOperacional[api]}/produtos?nome=${nome}&token=${token}&version=100a`);
    const data = await response.json();

    // Atualiza o cache ${produto.nomeproduto}
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      produtos: data.produtos.map(produto => ({
        ...produto,
        imagem: produto.nomeproduto ? `${ipOperacional[api]}/static/img/${produto.nomeproduto}` : null,
      })),
      timestamp: Date.now(),
    }));

    return data.produtos;
  } catch (error) {
    // Se ocorrer um erro ao buscar os dados da API, retorna os dados do cache (se existirem)
    return cache.produtos || [];
  }
}

export default fetchProdutos;
