document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

  // Função para copiar o código para a área de transferência
function copiarParaAreaDeTransferencia(id) {
    const codigo = document.getElementById(id).textContent;
    
    navigator.clipboard.writeText(codigo)
      .then(() => {
        alert('Código copiado para a área de transferência!');
      })
      .catch(err => {
        console.error('Erro ao copiar:', err);
      });
  }
  
  // Adicionando evento para os botões
  document.getElementById('copy-pip').addEventListener('click', () => copiarParaAreaDeTransferencia('pip-install'));
  document.getElementById('copy-exemplo').addEventListener('click', () => copiarParaAreaDeTransferencia('codigo-exemplo'));
  document.getElementById('copy-importar-tudo').addEventListener('click', () => copiarParaAreaDeTransferencia('importar-tudo'));
  document.getElementById('copy-importar-tudo-exemplo').addEventListener('click', () => copiarParaAreaDeTransferencia('importar-tudo-exemplo'));
  