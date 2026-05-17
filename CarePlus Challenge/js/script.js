// Tab buttons - Consultas page
const btnProximas = document.getElementById('btnProximas');
const btnRealizadas = document.getElementById('btnRealizadas');

if (btnProximas && btnRealizadas) {

btnProximas.addEventListener('click', function() {
    btnProximas.style.cssText = 'background:#f59e0b; color:#1a202c; border:none;';
    btnRealizadas.style.cssText = 'background:transparent; color:#f59e0b; border: 2px solid #f59e0b;';
});

btnRealizadas.addEventListener('click', function() {
    btnRealizadas.style.cssText = 'background:#f59e0b; color:#1a202c; border:none;';
    btnProximas.style.cssText = 'background:transparent; color:#f59e0b; border: 2px solid #f59e0b;';
});

}
function cancelarConsulta() {
  if (confirm('Tem certeza que deseja cancelar? Você ganhará +100 moedas por cancelar com antecedência!')) {
    alert('Consulta cancelada! +100 moedas adicionadas à sua carteira! 🎉');
  }
}
// Specialty cards - agendar page
const especialidadeCards = document.querySelectorAll('.especialidade-card');
especialidadeCards.forEach(card => {
  card.addEventListener('click', function() {
    especialidadeCards.forEach(c => c.classList.remove('card-selected'));
    this.classList.add('card-selected');
  });
});
function converterMoedas() {
  if (confirm('Converter 270 moedas em R$ 13,50 de desconto?')) {
    alert('🎉 Parabéns! R$ 13,50 adicionados à sua carteira digital!');
  }
}
function trocarTelemedicina() {
  if (confirm('Trocar sua consulta presencial para Telemedicina?\n\nSua consulta será mantida no mesmo horário, mas realizada online!')) {
    alert('✅ Consulta alterada para Telemedicina!\n\nVocê receberá o link de acesso 30 minutos antes da consulta.\n\n+25 moedas adicionadas por reagendamento responsável! 🪙');
  }
}
function abrirRota() {
  const destino = "Av. Brigadeiro Faria Lima, 1461, São Paulo";
  
  const opcao = confirm(
    "Escolha como abrir a rota:\n\nOK = Google Maps\nCancelar = Waze"
  );
  
  if (opcao) {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destino)}`,
      '_blank'
    );
  } else {
    window.open(
      `https://waze.com/ul?q=${encodeURIComponent(destino)}&navigate=yes`,
      '_blank'
    );
  }
}
function adicionarCalendario() {
  const titulo = "Consulta Care Plus - Dra. Maria Silva (Cardiologia)";
  const local = "Care Plus Itaim - Av. Brigadeiro Faria Lima, 1461";
  const inicio = "20251024T143000";
  const fim = "20251024T153000";
  const descricao = "Consulta de Cardiologia com Dra. Maria Silva na Care Plus Itaim.";

  const opcao = confirm(
    "Escolha onde adicionar:\n\nOK = Google Calendar\nCancelar = Baixar arquivo .ics (Apple/Outlook)"
  );

  if (opcao) {
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&dates=${inicio}/${fim}&details=${encodeURIComponent(descricao)}&location=${encodeURIComponent(local)}`,
      '_blank'
    );
  } else {
    const ics = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${inicio}
DTEND:${fim}
SUMMARY:${titulo}
DESCRIPTION:${descricao}
LOCATION:${local}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'consulta-careplus.ics';
    a.click();
  }
}
// Dados simulados dos médicos e disponibilidades
const medicos = {
  'Cardiologia': [
    { nome: 'Dra. Maria Silva', avaliacao: '4.9', avaliacoes: '156' },
    { nome: 'Dr. João Santos', avaliacao: '4.8', avaliacoes: '143' }
  ],
  'Dermatologia': [
    { nome: 'Dra. Ana Costa', avaliacao: '4.7', avaliacoes: '98' },
    { nome: 'Dr. Paulo Lima', avaliacao: '4.9', avaliacoes: '201' }
  ],
  'Ortopedia': [
    { nome: 'Dr. Carlos Souza', avaliacao: '4.8', avaliacoes: '112' },
    { nome: 'Dra. Lucia Ferreira', avaliacao: '4.6', avaliacoes: '87' }
  ],
  'Pediatria': [
    { nome: 'Dra. Sandra Oliveira', avaliacao: '5.0', avaliacoes: '234' },
    { nome: 'Dr. Roberto Alves', avaliacao: '4.8', avaliacoes: '167' }
  ],
  'Oftalmologia': [
    { nome: 'Dr. Marcos Pereira', avaliacao: '4.9', avaliacoes: '145' },
    { nome: 'Dra. Fernanda Lima', avaliacao: '4.7', avaliacoes: '93' }
  ],
  'Ginecologia': [
    { nome: 'Dra. Patricia Santos', avaliacao: '4.9', avaliacoes: '178' },
    { nome: 'Dra. Claudia Ramos', avaliacao: '4.8', avaliacoes: '134' }
  ]
};

const horarios = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', 
                  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

let especialidadeSelecionada = '';
let medicoSelecionado = '';
let horarioSelecionado = '';

function escolherEspecialidade(esp) {
  especialidadeSelecionada = esp;
  
  // Esconde especialidades
  document.getElementById('especialidadesSection').style.display = 'none';
  
  // Monta lista de médicos
  const section = document.getElementById('medicosSection');
  const lista = document.getElementById('listaMedicos');
  const titulo = document.getElementById('tituloEspecialidade');
  
  titulo.textContent = esp;
  lista.innerHTML = '';
  
  medicos[esp].forEach(m => {
    lista.innerHTML += `
      <div class="card border-0 shadow-sm rounded-4 mb-3" 
           onclick="escolherMedicoNovo('${m.nome}')" 
           style="cursor:pointer;">
        <div class="card-body p-3 d-flex align-items-center gap-3">
          <div class="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
               style="width:52px; height:52px; flex-shrink:0;">
            <i class="bi bi-person-fill fs-4 text-primary"></i>
          </div>
          <div class="flex-grow-1">
            <p class="fw-bold mb-0">${m.nome}</p>
            <p class="small text-muted mb-0">${esp}</p>
            <span class="text-warning small">★★★★★</span>
            <span class="small text-muted">${m.avaliacao} (${m.avaliacoes} avaliações)</span>
          </div>
          <i class="bi bi-chevron-right text-muted"></i>
        </div>
      </div>`;
  });
  
  section.style.display = 'block';
}

function escolherMedicoNovo(nome) {
  medicoSelecionado = nome;
  
  document.getElementById('medicosSection').style.display = 'none';
  document.getElementById('nomeMedicoCalendario').textContent = 
    `${medicoSelecionado} — ${especialidadeSelecionada}`;
  
  // Gera dias disponíveis
  renderCalendarioDisponivel();
  document.getElementById('calendarioSection').style.display = 'block';
}

function renderCalendarioDisponivel() {
  const grid = document.getElementById('diasDisponiveis');
  grid.innerHTML = '';
  
  const hoje = new Date();
  
  for (let i = 1; i <= 14; i++) {
    const data = new Date();
    data.setDate(hoje.getDate() + i);
    
    const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'short' });
    const dia = data.getDate();
    const mes = data.toLocaleDateString('pt-BR', { month: 'short' });
    
    // Simula alguns dias indisponíveis
    const indisponivel = [3, 7, 10].includes(i);
    
    grid.innerHTML += `
      <div class="text-center p-2 rounded-3 ${indisponivel ? 'opacity-25' : ''}" 
           style="cursor:${indisponivel ? 'not-allowed' : 'pointer'}; 
                  border: 1.5px solid #e2e8f0; min-width: 60px;"
           onclick="${indisponivel ? '' : `selecionarDia(this, '${dia}/${mes}')`}">
        <small class="text-muted d-block">${diaSemana}</small>
        <strong>${dia}</strong>
        <small class="text-muted d-block">${mes}</small>
        ${indisponivel ? '<small class="text-danger" style="font-size:9px;">Lotado</small>' : ''}
      </div>`;
  }
}

function selecionarDia(el, data) {
  document.querySelectorAll('#diasDisponiveis > div').forEach(d => {
    d.style.background = '';
    d.style.borderColor = '#e2e8f0';
    d.style.color = '';
  });
  el.style.background = '#1a56db';
  el.style.borderColor = '#1a56db';
  el.style.color = 'white';
  el.querySelectorAll('*').forEach(c => c.style.color = 'white');
  
  document.getElementById('dataSelecionada').textContent = data;
  document.getElementById('horariosSection').style.display = 'block';
}

function selecionarHorario(el, hora) {
  document.querySelectorAll('.time-slot-novo').forEach(s => {
    s.classList.remove('btn-primary');
    s.classList.add('btn-outline-secondary');
  });
  el.classList.remove('btn-outline-secondary');
  el.classList.add('btn-primary');
  horarioSelecionado = hora;
  document.getElementById('btnConfirmarAgendamento').style.display = 'block';
}

function confirmarNovoAgendamento() {
  const data = document.getElementById('dataSelecionada').textContent;
  alert(`✅ Consulta agendada com sucesso!\n\n👨‍⚕️ ${medicoSelecionado}\n🏥 ${especialidadeSelecionada}\n📅 ${data}\n⏰ ${horarioSelecionado}\n\n+50 moedas adicionadas! 🪙`);
  
  // Volta ao início
  document.getElementById('calendarioSection').style.display = 'none';
  document.getElementById('especialidadesSection').style.display = 'block';
}

function voltarParaEspecialidades() {
  document.getElementById('medicosSection').style.display = 'none';
  document.getElementById('especialidadesSection').style.display = 'flex';
  document.getElementById('especialidadesSection').className = 'row g-3';
}

function voltarParaMedicos() {
  document.getElementById('calendarioSection').style.display = 'none';
  document.getElementById('medicosSection').style.display = 'block';
}
function ativarWhatsapp(ativo) {
  if (ativo) {
    const mensagem = `Olá! Gostaria de ativar os lembretes de consulta Care Plus no WhatsApp.
    
📅 Próxima consulta: Dra. Maria Silva
🏥 Cardiologia - Care Plus Itaim
📍 Av. Brigadeiro Faria Lima, 1461
⏰ sexta-feira, 24/10 às 14:30

Por favor confirme meu cadastro!`;

    const numero = '5511999999999';
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
      '_blank'
    );
  } else {
    alert('Lembretes por WhatsApp desativados.');
  }
}
function verRelatorio(tipo) {
  const titulo = document.getElementById('modalTitulo');
  const conteudo = document.getElementById('modalConteudo');

  if (tipo === 'consultas') {
    titulo.textContent = '📊 Relatório de Consultas';
    conteudo.innerHTML = `
      <p class="text-muted small mb-3">Histórico dos últimos 12 meses</p>
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="small">Janeiro 2025</span>
        <span class="badge bg-success rounded-pill">2 realizadas</span>
      </div>
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="small">Fevereiro 2025</span>
        <span class="badge bg-success rounded-pill">1 realizada</span>
      </div>
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="small">Março 2025</span>
        <span class="badge bg-danger rounded-pill">1 no-show</span>
      </div>
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="small">Abril 2025</span>
        <span class="badge bg-success rounded-pill">3 realizadas</span>
      </div>
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="small">Maio 2025</span>
        <span class="badge bg-success rounded-pill">2 realizadas</span>
      </div>
      <div class="mt-3 p-2 rounded-3" style="background:#eff6ff;">
        <small class="text-primary fw-bold">Total: 22 consultas realizadas em 2025</small>
      </div>`;

  } else if (tipo === 'comparecimento') {
    titulo.textContent = '✅ Taxa de Comparecimento';
    conteudo.innerHTML = `
      <p class="text-muted small mb-3">Análise do seu comportamento</p>
      <div class="mb-3">
        <div class="d-flex justify-content-between mb-1">
          <small>Comparecimentos</small>
          <small class="fw-bold text-success">92%</small>
        </div>
        <div class="progress" style="height:10px;">
          <div class="progress-bar bg-success" style="width:92%;"></div>
        </div>
      </div>
      <div class="mb-3">
        <div class="d-flex justify-content-between mb-1">
          <small>Cancelamentos antecipados</small>
          <small class="fw-bold text-warning">5%</small>
        </div>
        <div class="progress" style="height:10px;">
          <div class="progress-bar bg-warning" style="width:5%;"></div>
        </div>
      </div>
      <div class="mb-3">
        <div class="d-flex justify-content-between mb-1">
          <small>No-show</small>
          <small class="fw-bold text-danger">3%</small>
        </div>
        <div class="progress" style="height:10px;">
          <div class="progress-bar bg-danger" style="width:3%;"></div>
        </div>
      </div>
      <div class="p-2 rounded-3 mt-2" style="background:#f0fdf4;">
        <small class="text-success fw-bold">
          🏆 Você está acima da média dos pacientes Care Plus (78%)!
        </small>
      </div>`;

  } else if (tipo === 'sequencia') {
    titulo.textContent = '🔥 Sequência Atual';
    conteudo.innerHTML = `
      <p class="text-muted small mb-3">Suas últimas consultas</p>
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="small">24/10/2025 — Cardiologia</span>
        <span class="text-success">✅</span>
      </div>
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="small">10/10/2025 — Dermatologia</span>
        <span class="text-success">✅</span>
      </div>
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="small">25/09/2025 — Cardiologia</span>
        <span class="text-success">✅</span>
      </div>
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="small">10/09/2025 — Pediatria</span>
        <span class="text-success">✅</span>
      </div>
      <div class="d-flex justify-content-between py-2 border-bottom">
        <span class="small">28/08/2025 — Oftalmologia</span>
        <span class="text-success">✅</span>
      </div>
      <div class="mt-3 p-2 rounded-3" style="background:#fff8e1;">
        <small class="text-warning fw-bold">
          ⚡ 8 consultas seguidas sem faltas! Continue assim para ganhar o badge Sequência Campeã!
        </small>
      </div>`;
  }

  new bootstrap.Modal(document.getElementById('modalRelatorio')).show();
}
function agendarEspecialidade(especialidade) {
  if (confirm(`Deseja agendar uma consulta de ${especialidade}?\n\nVocê será direcionado para o agendamento!`)) {
    window.location.href = 'agendar.html';
  }
}
// ==========================================
// INTEGRAÇÃO CLIMA REAL - OpenWeatherMap
// ==========================================

const WEATHER_API_KEY = CONFIG.WEATHER_API_KEY;
const CLINICA_LAT = -23.5671; // Care Plus Itaim
const CLINICA_LON = -46.6924;

async function buscarClima() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${CLINICA_LAT}&lon=${CLINICA_LON}&appid=${WEATHER_API_KEY}&units=metric&lang=pt_br`
    );
    const data = await response.json();

    const temperatura = Math.round(data.main.temp);
    const descricao = data.weather[0].description;
    const icone = data.weather[0].icon;
    const umidade = data.main.humidity;
    const vento = data.wind.speed;

    // Detecta risco climático
    const condicao = data.weather[0].main;
    const riscoAlto = ['Rain', 'Thunderstorm', 'Drizzle', 'Snow'].includes(condicao);

    // Atualiza a dica do dia na index.html
    const dicaBox = document.getElementById('dicaClima');
    if (dicaBox) {
      dicaBox.innerHTML = `
        <div class="d-flex align-items-center gap-2 mb-2">
          <img src="https://openweathermap.org/img/wn/${icone}.png" 
               width="40" alt="clima">
          <div>
            <p class="fw-bold mb-0" style="color:${riscoAlto ? '#f59e0b' : '#1a56db'}">
              ${riscoAlto ? '⚠️ Alerta Climático' : '☀️ Condições favoráveis'}
            </p>
            <p class="small text-muted mb-0">
              ${temperatura}°C — ${descricao} — Umidade: ${umidade}%
            </p>
          </div>
        </div>
        ${riscoAlto ? `
        <p class="small text-muted mb-2">
          Condições climáticas podem impactar sua ida à consulta.
        </p>
        <div class="d-flex gap-2">
          <a href="notificacoes.html" class="btn btn-sm btn-warning rounded-3 fw-bold">
            Ver Alertas
          </a>
          <button class="btn btn-sm btn-outline-warning rounded-3"
                  onclick="trocarTelemedicina()">
            Telemedicina
          </button>
        </div>` : `
        <p class="small text-muted mb-0">
          Ótimo dia para comparecer à sua consulta! 
        </p>`}
      `;
    }

    // Atualiza notificações
    atualizarNotificacaoClima(temperatura, descricao, icone, riscoAlto, vento);

    return { temperatura, descricao, riscoAlto };

} catch (error) {
    console.log('Erro ao buscar clima:', error);
    
    // Fallback enquanto API não ativa
    const dicaBox = document.getElementById('dicaClima');
    if (dicaBox) {
      dicaBox.innerHTML = `
        <div class="d-flex align-items-center gap-2 mb-2">
          <div class="rounded-circle d-flex align-items-center justify-content-center"
               style="width:36px; height:36px; background:#1a56db; flex-shrink:0;">
            <i class="bi bi-cloud-sun-fill text-white"></i>
          </div>
          <div>
            <p class="fw-bold text-primary mb-0">Dica do Dia</p>
            <p class="small text-muted mb-0">
              Planeje sua ida à consulta com antecedência!
            </p>
          </div>
        </div>`;
      
    }
  }
}
function atualizarNotificacaoClima(temp, descricao, icone, riscoAlto, vento) {
  const notifClima = document.getElementById('notifClima');
  if (!notifClima) return;

  notifClima.innerHTML = `
    <div class="card-body p-3 d-flex align-items-start gap-3">
      <div class="rounded-circle d-flex align-items-center justify-content-center"
           style="width:44px; height:44px; background:${riscoAlto ? '#fef9ee' : '#f0fdf4'}; flex-shrink:0;">
        <img src="https://openweathermap.org/img/wn/${icone}.png" 
             width="30" alt="clima">
      </div>
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between">
          <p class="fw-bold mb-1">
            ${riscoAlto ? '⚠️ Alerta Climático' : '✅ Clima Favorável'}
          </p>
          <small class="text-muted">Agora</small>
        </div>
        <p class="small text-muted mb-2">
          ${temp}°C — ${descricao} — Vento: ${vento} m/s
        </p>
        ${riscoAlto ? `
        <div class="p-2 rounded-3 mb-2" style="background:#fff8e1; border:1px solid #fde68a;">
          <small>
            🌧️ Condições climáticas adversas detectadas<br>
            🚗 Pode impactar seu deslocamento à clínica<br>
            💻 Considere trocar para Telemedicina
          </small>
        </div>
        <div class="row g-2">
          <div class="col-6">
            <button class="btn btn-outline-primary w-100 rounded-3 btn-sm"
                    onclick="abrirRota()">
              <i class="bi bi-map me-1"></i>Ver Rota
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-primary w-100 rounded-3 btn-sm fw-bold"
                    onclick="trocarTelemedicina()">
              <i class="bi bi-camera-video me-1"></i>Telemedicina
            </button>
          </div>
        </div>` : `
        <p class="small text-success mb-0">
          ✅ Ótimas condições para comparecer à sua consulta!
        </p>`}
      </div>
    </div>`;
}

// Busca o clima ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  buscarClima();
});
