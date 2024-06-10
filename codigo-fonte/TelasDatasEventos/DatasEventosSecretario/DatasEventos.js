document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const editModal = document.getElementById("editModal");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const btnEditar = document.getElementById("btnEditar");
    const spanClose = document.querySelectorAll(".close");
    const eventosContainer = document.getElementById("eventos");
    let editEventId = null;
    let editMode = false;

    // Função para formatar a data no formato dd/mm/aaaa
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    // Função para carregar eventos salvos
    const loadEvents = () => {
        const events = JSON.parse(localStorage.getItem("events")) || [];
        events.forEach(event => {
            addEventToDOM(event.id, event.date, event.description, false);
        });
    };

    // Função para adicionar evento ao DOM
    const addEventToDOM = (id, date, description, showDeleteButton) => {
        const formattedDate = formatDate(date); // Formatar a data
        const newEventHTML = `
            <div class="evento" data-id="${id}">
                <h2>${formattedDate}</h2>
                <p>${description}</p>
                ${showDeleteButton ? '<button class="edit-btn">Editar</button><button class="delete-btn">Apagar</button>' : ''}
            </div>
        `;
        eventosContainer.innerHTML += newEventHTML;
    };

    // Carregar eventos ao iniciar
    loadEvents();

    btnAdicionar.onclick = function() {
        modal.style.display = "block";
    }

    btnEditar.onclick = function() {
        editMode = !editMode;
        const events = document.querySelectorAll(".evento");
        events.forEach(event => {
            const deleteButton = event.querySelector(".delete-btn");
            const editButton = event.querySelector(".edit-btn");
            if (editMode) {
                if (!deleteButton) {
                    event.innerHTML += '<button class="edit-btn">Editar</button><button class="delete-btn">Apagar</button>';
                }
            } else {
                if (deleteButton) {
                    deleteButton.remove();
                    editButton.remove();
                }
            }
        });
    }

    spanClose.forEach(span => {
        span.onclick = function() {
            modal.style.display = "none";
            editModal.style.display = "none";
        }
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == editModal) {
            editModal.style.display = "none";
        }
    }

    // Adiciona ouvinte de evento para a submissão do formulário
    document.getElementById("eventForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const eventDate = document.getElementById("eventDate").value;
        const eventDescription = document.getElementById("eventDescription").value;
        const eventId = new Date().getTime(); // Gerar um ID único para o evento

        // Adiciona o novo evento ao container de eventos
        addEventToDOM(eventId, eventDate, eventDescription, editMode);

        // Salva o evento no armazenamento local
        const events = JSON.parse(localStorage.getItem("events")) || [];
        events.push({ id: eventId, date: eventDate, description: eventDescription });
        localStorage.setItem("events", JSON.stringify(events));

        // Fecha o modal
        modal.style.display = "none";
    });

    // Adiciona ouvintes de evento para botões de edição e exclusão
    eventosContainer.addEventListener("click", function(event) {
        const target = event.target;
        const eventElement = target.closest(".evento");
        const eventId = eventElement.getAttribute("data-id");

        if (target.classList.contains("edit-btn")) {
            // Editar evento
            editEventId = eventId;
            document.getElementById("editEventDate").value = eventElement.querySelector("h2").innerText;
            document.getElementById("editEventDescription").value = eventElement.querySelector("p").innerText;
            editModal.style.display = "block";
        } else if (target.classList.contains("delete-btn")) {
            // Apagar evento
            eventElement.remove();
            const events = JSON.parse(localStorage.getItem("events")) || [];
            const updatedEvents = events.filter(event => event.id != eventId);
            localStorage.setItem("events", JSON.stringify(updatedEvents));
        }
    });

    // Adiciona ouvinte de evento para a submissão do formulário de edição
    document.getElementById("editForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const editEventDate = document.getElementById("editEventDate").value;
        const editEventDescription = document.getElementById("editEventDescription").value;

        // Atualiza o evento no DOM
        const eventElement = document.querySelector(`.evento[data-id="${editEventId}"]`);
        eventElement.querySelector("h2").innerText = formatDate(editEventDate); // Formatar a data
        eventElement.querySelector("p").innerText = editEventDescription;

        // Atualiza o evento no armazenamento local
        const events = JSON.parse(localStorage.getItem("events")) || [];
        const updatedEvents = events.map(event => {
            if (event.id == editEventId) {
                return { id: editEventId, date: editEventDate, description: editEventDescription };
            }
            return event;
        });
        localStorage.setItem("events", JSON.stringify(updatedEvents));

        // Fecha o modal de edição
        editModal.style.display = "none";
    });
});

// Código existente do calendário
let date = new Date(); // cria um novo objeto de data com a data e hora atuais
let year = date.getFullYear(); // obtém o ano atual
let month = date.getMonth(); // obtém o mês atual (índice baseado, 0-11)

const day = document.querySelector(".calendar-dates"); // seleciona o elemento com a classe "calendar-dates"
const currdate = document.querySelector(".calendar-current-date"); // seleciona o elemento com a classe "calendar-current-date"
const prenexIcons = document.querySelectorAll(".calendar-navigation span"); // seleciona todos os elementos com a classe "calendar-navigation span"

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"]; // array de nomes dos meses

// função para gerar o calendário
const manipulate = () => {
    // obtém o primeiro dia do mês
    let dayone = new Date(year, month, 1).getDay();

    // obtém a última data do mês
    let lastdate = new Date(year, month + 1, 0).getDate();

    // obtém o dia da última data do mês
    let dayend = new Date(year, month, lastdate).getDay();

    // obtém a última data do mês anterior
    let monthlastdate = new Date(year, month, 0).getDate();

    let lit = ""; // variável para armazenar o HTML do calendário gerado

    // loop para adicionar as últimas datas do mês anterior
    for (let i = dayone; i > 0; i--) {
        lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    // loop para adicionar as datas do mês atual
    for (let i = 1; i <= lastdate; i++) {
        // verifica se a data atual é hoje
        let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active" : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }

    // loop para adicionar as primeiras datas do próximo mês
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    // atualiza o texto do elemento da data atual com o mês e ano formatados
    currdate.innerText = `${months[month]} ${year}`;

    // atualiza o HTML do elemento das datas com o calendário gerado
    day.innerHTML = lit;
}

manipulate();

// Anexa um ouvinte de evento de clique a cada ícone
prenexIcons.forEach(icon => {

    // Quando um ícone é clicado
    icon.addEventListener("click", () => {
        // Verifica se o ícone é "calendar-prev" ou "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        // Verifica se o mês está fora do intervalo
        if (month < 0 || month > 11) {
            // Define a data para o primeiro dia do mês com o novo ano
            date = new Date(year, month, new Date().getDate());
            // Define o ano para o novo ano
            year = date.getFullYear();
            // Define o mês para o novo mês
            month = date.getMonth();
        } else {
            // Define a data para a data atual
            date = new Date();
        }

        // Chama a função manipulate para atualizar a exibição do calendário
        manipulate();
    });
});
