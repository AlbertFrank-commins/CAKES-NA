document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-reserva');
    const btnCerrar = document.getElementById('btn-cerrar');
    const modalImg = document.getElementById('modal-img');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalPrecio = document.getElementById('modal-precio');
    const formReserva = document.getElementById('form-reserva');

    const botonesReservar = document.querySelectorAll('.Catalogo .btn');

    botonesReservar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const tarjeta = e.target.closest('div');

            const img = tarjeta.querySelector('img').src;
            const titulo = tarjeta.querySelector('h2').textContent;
            
            // Si encuentra .precio lo usa, si no, busca el segundo párrafo
            const precioEl = tarjeta.querySelector('.precio') || tarjeta.querySelectorAll('p')[1];
            const precio = precioEl ? precioEl.textContent : 'Precio no disponible';

            modalImg.src = img;
            modalTitulo.textContent = titulo;
            modalPrecio.textContent = precio;

            modal.classList.remove('modal-oculto');
        });
    });

    btnCerrar.addEventListener('click', () => {
        modal.classList.add('modal-oculto');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('modal-oculto');
        }
    });

    formReserva.addEventListener('submit', (e) => {
        e.preventDefault();

        const cliente = document.getElementById('nombre').value;
        const entrega = document.getElementById('fecha').value;
        const pastel = modalTitulo.textContent;

        alert(`¡Gracias ${cliente}! Tu reserva para "${pastel}" ha sido registrada para el ${entrega}.`);

        formReserva.reset();
        modal.classList.add('modal-oculto');
    });
});