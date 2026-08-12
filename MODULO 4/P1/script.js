// Esperamos a que el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    const addOrderBtn = document.getElementById("addOrderBtn");
    const ordersContainer = document.getElementById("ordersContainer");
    const emptyMessage = document.getElementById("emptyMessage");

    let orderCounter = 0;


    // -----------------------------------------
    // 1. Recibir un nuevo pedido
    // -----------------------------------------
    function receiveOrder() {

        orderCounter++;

        const order = {
            id: orderCounter,
            status: "En Proceso"
        };

        // Si existe el mensaje de "No hay pedidos"
        if (emptyMessage) {
            emptyMessage.remove();
        }

        // Mostrar el pedido en pantalla
        displayOrder(order);

        // Procesar el pedido de forma asincrónica
        processOrder(order);
    }


    // -----------------------------------------
    // 2. Mostrar el pedido en la interfaz
    // -----------------------------------------
    function displayOrder(order) {

        const orderElement = document.createElement("div");

        orderElement.classList.add("order");

        orderElement.id = `order-${order.id}`;

        orderElement.innerHTML = `
            <h3>Pedido #${order.id}</h3>
            <p>
                Estado:
                <span class="status">
                    ${order.status}
                </span>
            </p>
        `;

        ordersContainer.appendChild(orderElement);
    }


    // -----------------------------------------
    // 3. Actualizar visualmente el pedido
    // -----------------------------------------
    function updateOrderStatus(order) {

        const orderElement = document.getElementById(
            `order-${order.id}`
        );

        if (orderElement) {

            const statusElement =
                orderElement.querySelector(".status");

            statusElement.textContent = order.status;

            if (order.status === "Completado") {
                orderElement.classList.add("completed");
            }
        }
    }


    // -----------------------------------------
    // 4. Promise para simular preparación
    // -----------------------------------------
    function prepareOrder(order) {

        return new Promise((resolve) => {

            // Tiempo aleatorio entre 2 y 5 segundos
            const preparationTime =
                Math.floor(Math.random() * 3000) + 2000;

            console.log(
                `Pedido #${order.id} se preparará en ${preparationTime / 1000} segundos`
            );

            // setTimeout simula el tiempo de preparación
            setTimeout(() => {

                resolve();

            }, preparationTime);

        });
    }


    // -----------------------------------------
    // 5. Async/Await para procesar el pedido
    // -----------------------------------------
    async function processOrder(order) {

        console.log(
            `Pedido #${order.id} está en proceso...`
        );

        // Esperamos a que termine la Promise
        await prepareOrder(order);

        // Cuando termina la preparación
        order.status = "Completado";

        // Actualizamos la interfaz
        updateOrderStatus(order);

        console.log(
            `Pedido #${order.id} ha sido completado.`
        );
    }


    // -----------------------------------------
    // 6. Evento del botón
    // -----------------------------------------
    addOrderBtn.addEventListener("click", receiveOrder);

});