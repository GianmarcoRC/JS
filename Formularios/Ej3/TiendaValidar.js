
    const form = document.querySelector('form[name="Compra"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validación de campos personales
        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        
        // Validación de código postal (5 dígitos)
        const codigoPostal = document.getElementById('codigo_postal').value.trim();
        const cpRegex = /^\d{5}$/;
        if (!cpRegex.test(codigoPostal)) {
            alert('El código postal debe contener 5 dígitos.');
            return;
        }
        
        // Validación de provincia
        const provincia = document.getElementById('provincia').value.trim();
        if (provincia === '') {
            alert('Debe seleccionar una provincia.');
            return;
        }
        
        // Validación de teléfono (9 dígitos, empezando por 6, 7 o 9)
        const telefono = document.getElementById('telefono').value.trim();
        const telefonoRegex = /^[679]\d{8}$/;
        if (!telefonoRegex.test(telefono)) {
            alert('El teléfono debe ser un número válido de 9 dígitos comenzando por 6, 7 o 9.');
            return;
        }
        
        // Validación de correo electrónico
        const correo = document.getElementById('correo').value.trim();
        const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!correoRegex.test(correo)) {
            alert('Introduce un correo electrónico válido.');
            return;
        }
        
        // Validación de fecha de entrega
        const fechaEntrega = document.getElementById('fecha_entrega').value;
        const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!fechaRegex.test(fechaEntrega)) {
            alert('Introduce una fecha de entrega válida.');
            return;
        }
        
        // Validación de forma de pago
        const formaPago = document.getElementById('forma_pago').value;
        if (!formaPago) {
            alert('Debe seleccionar una forma de pago.');
            return;
        }
        
        // Validación de productos
        const productos = document.getElementById('productos').value.trim();
        if (productos === '') {
            alert('Debe especificar al menos un producto.');
            return;
        }
        
        // Validación de condiciones
        const condiciones = document.getElementById('condiciones').checked;
        if (!condiciones) {
            alert('Debe aceptar las condiciones de compra.');
            return;
        }
        
        // Si está pagando con tarjeta, validar número de tarjeta
        if (formaPago === 'tarjeta') {
            const numeroTarjeta = prompt('Introduce el número de tarjeta (20 dígitos):');
            const tarjetaRegex = /^\d{20}$/;
            if (!tarjetaRegex.test(numeroTarjeta)) {
                alert('El número de tarjeta debe contener 20 dígitos numéricos.');
                return;
            }
        }
        
        // Mostrar resumen del pedido
        const resumen = `
Resumen del Pedido:
- Nombre: ${nombre} ${apellidos}
- Dirección: ${direccion}
- Código Postal: ${codigoPostal}
- Provincia: ${provincia}
- Teléfono: ${telefono}
- Correo Electrónico: ${correo}
- Fecha de Entrega: ${fechaEntrega}
- Forma de Pago: ${formaPago}
- Productos: ${productos}

¿Desea confirmar la compra?
        `;
        
        if (confirm(resumen)) {
            alert('¡Compra realizada con éxito!');
            form.reset();
        }
    });