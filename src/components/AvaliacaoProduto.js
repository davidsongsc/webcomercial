function AvaliacaoProduto({ nota }) {
    const estrelas = [];
  
    // Loop para criar estrelas preenchidas ou vazias com base na nota
    for (let i = 1; i <= 5; i++) {
      if (i <= nota) {
        estrelas.push(<i className="fas fa-star" key={i}></i>);
      } else {
        estrelas.push(<i className="far fa-star" key={i}></i>);
      }
    }
  
    return (
      <div className="avaliacao-produto">
        <span className="estrelas">{estrelas}</span>
        <span className="nota">{nota.toFixed(1)}</span>
      </div>
    );
  }