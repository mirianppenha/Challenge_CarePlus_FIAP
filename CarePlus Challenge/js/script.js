// Tab buttons - Consultas page
const btnProximas = document.getElementById('btnProximas');
const btnRealizadas = document.getElementById('btnRealizadas');

if (btnProximas && btnRealizadas) {

  btnProximas.addEventListener('click', function() {
    document.getElementById('proximasSection').style.display = 'block';
    document.getElementById('realizadasSection').style.display = 'none';
    btnProximas.className = 'btn btn-dark rounded-pill px-4';
    btnRealizadas.className = 'btn btn-outline-secondary rounded-pill px-4';
  });

  btnRealizadas.addEventListener('click', function() {
    document.getElementById('proximasSection').style.display = 'none';
    document.getElementById('realizadasSection').style.display = 'block';
    btnProximas.className = 'btn btn-outline-secondary rounded-pill px-4';
    btnRealizadas.className = 'btn btn-dark rounded-pill px-4';
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
