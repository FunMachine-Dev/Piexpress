//el boton DEA tiene el detalle del funcionamiento

/* botón borrar */
document.getElementById('borrar').addEventListener('click', function () {

    document.getElementById('nombre_est').value = "";
    document.getElementById('curso_est').value = "";
    document.getElementById('run_est').value = "";
    document.getElementById('edad_est').value = "";
    document.getElementById('nacio_est').value = "";
    document.getElementById('lge_orig_est').value = "";
    document.getElementById('lge_uso_est').value = "";
    document.getElementById('fecha_nac').value = "";

});

/* Botón FUR-DEA */
document.getElementById('fur-dea').addEventListener('click', function () { //obtiene el elemento desde el ID del campo
    const nombreEst = document.getElementById('nombre_est').value;//paso el nombre como variable para usarlo en el nombre del archivo a descargar
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {//todos los datos provenientes desde los campos y las variables 
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
        nom_direc: document.getElementById('nom_direc').value,
        rbd: document.getElementById('rbd').value,
        nom_prof_resp: document.getElementById('nom_prof_resp').value,
        run_prof_resp: document.getElementById('run_prof_resp').value,
        prof_prof_resp: document.getElementById('prof_prof_resp').value,
        cargo_prof_resp: document.getElementById('cargo_prof_resp').value,
        fono_prof_resp: document.getElementById('fono_prof_resp').value,
        mail_prof_resp: document.getElementById('mail_prof_resp').value,
        nom_prof_pie1: document.getElementById('nom_prof_pie1').value,
        prof_prof_pie1: document.getElementById('prof_prof_pie1').value,
        contacto_prof_pie1: document.getElementById('contacto_prof_pie1').value,
        reg_prof_pie1: document.getElementById('reg_prof_pie1').value,
        nom_prof_pie2: document.getElementById('nom_prof_pie2').value,
        prof_prof_pie2: document.getElementById('prof_prof_pie2').value,
        contacto_prof_pie2: document.getElementById('contacto_prof_pie2').value,
        reg_prof_pie2: document.getElementById('reg_prof_pie2').value,
        nom_prof_pie3: document.getElementById('nom_prof_pie3').value,
        prof_prof_pie3: document.getElementById('prof_prof_pie3').value,
        contacto_prof_pie3: document.getElementById('contacto_prof_pie3').value,
        reg_prof_pie3: document.getElementById('reg_prof_pie3').value,
        nom_prof_pie4: document.getElementById('nom_prof_pie4').value,
        prof_prof_pie4: document.getElementById('prof_prof_pie4').value,
        contacto_prof_pie4: document.getElementById('contacto_prof_pie4').value,
        reg_prof_pie4: document.getElementById('reg_prof_pie4').value,
        nom_prof_pie5: document.getElementById('nom_prof_pie5').value,
        prof_prof_pie5: document.getElementById('prof_prof_pie5').value,
        contacto_prof_pie5: document.getElementById('contacto_prof_pie5').value,
        reg_prof_pie5: document.getElementById('reg_prof_pie5').value,

    };

    fetch(`/generate-doc?type=dea`, { //se asigna el doc-type. Escencial para asignar los IF en el server.js
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FUR-DEA-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});


/* Botón FUR-AUDIO */
document.getElementById('fur-audio').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
        nom_direc: document.getElementById('nom_direc').value,
        rbd: document.getElementById('rbd').value,
        nom_prof_resp: document.getElementById('nom_prof_resp').value,
        run_prof_resp: document.getElementById('run_prof_resp').value,
        prof_prof_resp: document.getElementById('prof_prof_resp').value,
        cargo_prof_resp: document.getElementById('cargo_prof_resp').value,
        fono_prof_resp: document.getElementById('fono_prof_resp').value,
        mail_prof_resp: document.getElementById('mail_prof_resp').value,
        nom_prof_pie1: document.getElementById('nom_prof_pie1').value,
        prof_prof_pie1: document.getElementById('prof_prof_pie1').value,
        contacto_prof_pie1: document.getElementById('contacto_prof_pie1').value,
        reg_prof_pie1: document.getElementById('reg_prof_pie1').value,
        nom_prof_pie2: document.getElementById('nom_prof_pie2').value,
        prof_prof_pie2: document.getElementById('prof_prof_pie2').value,
        contacto_prof_pie2: document.getElementById('contacto_prof_pie2').value,
        reg_prof_pie2: document.getElementById('reg_prof_pie2').value,
        nom_prof_pie3: document.getElementById('nom_prof_pie3').value,
        prof_prof_pie3: document.getElementById('prof_prof_pie3').value,
        contacto_prof_pie3: document.getElementById('contacto_prof_pie3').value,
        reg_prof_pie3: document.getElementById('reg_prof_pie3').value,
        nom_prof_pie4: document.getElementById('nom_prof_pie4').value,
        prof_prof_pie4: document.getElementById('prof_prof_pie4').value,
        contacto_prof_pie4: document.getElementById('contacto_prof_pie4').value,
        reg_prof_pie4: document.getElementById('reg_prof_pie4').value,
        nom_prof_pie5: document.getElementById('nom_prof_pie5').value,
        prof_prof_pie5: document.getElementById('prof_prof_pie5').value,
        contacto_prof_pie5: document.getElementById('contacto_prof_pie5').value,
        reg_prof_pie5: document.getElementById('reg_prof_pie5').value,

    };

    fetch(`/generate-doc?type=audio`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FUR-D-AUDITIVA-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});

/* Botón FUR-DI */
document.getElementById('fur-di').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
        nom_direc: document.getElementById('nom_direc').value,
        rbd: document.getElementById('rbd').value,
        nom_prof_resp: document.getElementById('nom_prof_resp').value,
        run_prof_resp: document.getElementById('run_prof_resp').value,
        prof_prof_resp: document.getElementById('prof_prof_resp').value,
        cargo_prof_resp: document.getElementById('cargo_prof_resp').value,
        fono_prof_resp: document.getElementById('fono_prof_resp').value,
        mail_prof_resp: document.getElementById('mail_prof_resp').value,
        nom_prof_pie1: document.getElementById('nom_prof_pie1').value,
        prof_prof_pie1: document.getElementById('prof_prof_pie1').value,
        contacto_prof_pie1: document.getElementById('contacto_prof_pie1').value,
        reg_prof_pie1: document.getElementById('reg_prof_pie1').value,
        nom_prof_pie2: document.getElementById('nom_prof_pie2').value,
        prof_prof_pie2: document.getElementById('prof_prof_pie2').value,
        contacto_prof_pie2: document.getElementById('contacto_prof_pie2').value,
        reg_prof_pie2: document.getElementById('reg_prof_pie2').value,
        nom_prof_pie3: document.getElementById('nom_prof_pie3').value,
        prof_prof_pie3: document.getElementById('prof_prof_pie3').value,
        contacto_prof_pie3: document.getElementById('contacto_prof_pie3').value,
        reg_prof_pie3: document.getElementById('reg_prof_pie3').value,
        nom_prof_pie4: document.getElementById('nom_prof_pie4').value,
        prof_prof_pie4: document.getElementById('prof_prof_pie4').value,
        contacto_prof_pie4: document.getElementById('contacto_prof_pie4').value,
        reg_prof_pie4: document.getElementById('reg_prof_pie4').value,
        nom_prof_pie5: document.getElementById('nom_prof_pie5').value,
        prof_prof_pie5: document.getElementById('prof_prof_pie5').value,
        contacto_prof_pie5: document.getElementById('contacto_prof_pie5').value,
        reg_prof_pie5: document.getElementById('reg_prof_pie5').value,

    };

    fetch(`/generate-doc?type=di`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FUR-DI-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});

/* Botón FUR-MOTOR */
document.getElementById('fur-motor').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
        nom_direc: document.getElementById('nom_direc').value,
        rbd: document.getElementById('rbd').value,
        nom_prof_resp: document.getElementById('nom_prof_resp').value,
        run_prof_resp: document.getElementById('run_prof_resp').value,
        prof_prof_resp: document.getElementById('prof_prof_resp').value,
        cargo_prof_resp: document.getElementById('cargo_prof_resp').value,
        fono_prof_resp: document.getElementById('fono_prof_resp').value,
        mail_prof_resp: document.getElementById('mail_prof_resp').value,
        nom_prof_pie1: document.getElementById('nom_prof_pie1').value,
        prof_prof_pie1: document.getElementById('prof_prof_pie1').value,
        contacto_prof_pie1: document.getElementById('contacto_prof_pie1').value,
        reg_prof_pie1: document.getElementById('reg_prof_pie1').value,
        nom_prof_pie2: document.getElementById('nom_prof_pie2').value,
        prof_prof_pie2: document.getElementById('prof_prof_pie2').value,
        contacto_prof_pie2: document.getElementById('contacto_prof_pie2').value,
        reg_prof_pie2: document.getElementById('reg_prof_pie2').value,
        nom_prof_pie3: document.getElementById('nom_prof_pie3').value,
        prof_prof_pie3: document.getElementById('prof_prof_pie3').value,
        contacto_prof_pie3: document.getElementById('contacto_prof_pie3').value,
        reg_prof_pie3: document.getElementById('reg_prof_pie3').value,
        nom_prof_pie4: document.getElementById('nom_prof_pie4').value,
        prof_prof_pie4: document.getElementById('prof_prof_pie4').value,
        contacto_prof_pie4: document.getElementById('contacto_prof_pie4').value,
        reg_prof_pie4: document.getElementById('reg_prof_pie4').value,
        nom_prof_pie5: document.getElementById('nom_prof_pie5').value,
        prof_prof_pie5: document.getElementById('prof_prof_pie5').value,
        contacto_prof_pie5: document.getElementById('contacto_prof_pie5').value,
        reg_prof_pie5: document.getElementById('reg_prof_pie5').value,

    };

    fetch(`/generate-doc?type=motor`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FUR-DI-MOTOR-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});

/* Botón FUR-MULTI */
document.getElementById('fur-multi').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
        nom_direc: document.getElementById('nom_direc').value,
        rbd: document.getElementById('rbd').value,
        nom_prof_resp: document.getElementById('nom_prof_resp').value,
        run_prof_resp: document.getElementById('run_prof_resp').value,
        prof_prof_resp: document.getElementById('prof_prof_resp').value,
        cargo_prof_resp: document.getElementById('cargo_prof_resp').value,
        fono_prof_resp: document.getElementById('fono_prof_resp').value,
        mail_prof_resp: document.getElementById('mail_prof_resp').value,
        nom_prof_pie1: document.getElementById('nom_prof_pie1').value,
        prof_prof_pie1: document.getElementById('prof_prof_pie1').value,
        contacto_prof_pie1: document.getElementById('contacto_prof_pie1').value,
        reg_prof_pie1: document.getElementById('reg_prof_pie1').value,
        nom_prof_pie2: document.getElementById('nom_prof_pie2').value,
        prof_prof_pie2: document.getElementById('prof_prof_pie2').value,
        contacto_prof_pie2: document.getElementById('contacto_prof_pie2').value,
        reg_prof_pie2: document.getElementById('reg_prof_pie2').value,
        nom_prof_pie3: document.getElementById('nom_prof_pie3').value,
        prof_prof_pie3: document.getElementById('prof_prof_pie3').value,
        contacto_prof_pie3: document.getElementById('contacto_prof_pie3').value,
        reg_prof_pie3: document.getElementById('reg_prof_pie3').value,
        nom_prof_pie4: document.getElementById('nom_prof_pie4').value,
        prof_prof_pie4: document.getElementById('prof_prof_pie4').value,
        contacto_prof_pie4: document.getElementById('contacto_prof_pie4').value,
        reg_prof_pie4: document.getElementById('reg_prof_pie4').value,
        nom_prof_pie5: document.getElementById('nom_prof_pie5').value,
        prof_prof_pie5: document.getElementById('prof_prof_pie5').value,
        contacto_prof_pie5: document.getElementById('contacto_prof_pie5').value,
        reg_prof_pie5: document.getElementById('reg_prof_pie5').value,

    };

    fetch(`/generate-doc?type=multi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FUR-DI-MULTIPLE-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});

/* Botón FUR-VISUAL */
document.getElementById('fur-visual').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
        nom_direc: document.getElementById('nom_direc').value,
        rbd: document.getElementById('rbd').value,
        nom_prof_resp: document.getElementById('nom_prof_resp').value,
        run_prof_resp: document.getElementById('run_prof_resp').value,
        prof_prof_resp: document.getElementById('prof_prof_resp').value,
        cargo_prof_resp: document.getElementById('cargo_prof_resp').value,
        fono_prof_resp: document.getElementById('fono_prof_resp').value,
        mail_prof_resp: document.getElementById('mail_prof_resp').value,
        nom_prof_pie1: document.getElementById('nom_prof_pie1').value,
        prof_prof_pie1: document.getElementById('prof_prof_pie1').value,
        contacto_prof_pie1: document.getElementById('contacto_prof_pie1').value,
        reg_prof_pie1: document.getElementById('reg_prof_pie1').value,
        nom_prof_pie2: document.getElementById('nom_prof_pie2').value,
        prof_prof_pie2: document.getElementById('prof_prof_pie2').value,
        contacto_prof_pie2: document.getElementById('contacto_prof_pie2').value,
        reg_prof_pie2: document.getElementById('reg_prof_pie2').value,
        nom_prof_pie3: document.getElementById('nom_prof_pie3').value,
        prof_prof_pie3: document.getElementById('prof_prof_pie3').value,
        contacto_prof_pie3: document.getElementById('contacto_prof_pie3').value,
        reg_prof_pie3: document.getElementById('reg_prof_pie3').value,
        nom_prof_pie4: document.getElementById('nom_prof_pie4').value,
        prof_prof_pie4: document.getElementById('prof_prof_pie4').value,
        contacto_prof_pie4: document.getElementById('contacto_prof_pie4').value,
        reg_prof_pie4: document.getElementById('reg_prof_pie4').value,
        nom_prof_pie5: document.getElementById('nom_prof_pie5').value,
        prof_prof_pie5: document.getElementById('prof_prof_pie5').value,
        contacto_prof_pie5: document.getElementById('contacto_prof_pie5').value,
        reg_prof_pie5: document.getElementById('reg_prof_pie5').value,

    };

    fetch(`/generate-doc?type=visual`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FUR-DI-VISUAL-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});

/* Botón FUR-FIL */
document.getElementById('fur-fil').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
        nom_direc: document.getElementById('nom_direc').value,
        rbd: document.getElementById('rbd').value,
        nom_prof_resp: document.getElementById('nom_prof_resp').value,
        run_prof_resp: document.getElementById('run_prof_resp').value,
        prof_prof_resp: document.getElementById('prof_prof_resp').value,
        cargo_prof_resp: document.getElementById('cargo_prof_resp').value,
        fono_prof_resp: document.getElementById('fono_prof_resp').value,
        mail_prof_resp: document.getElementById('mail_prof_resp').value,
        nom_prof_pie1: document.getElementById('nom_prof_pie1').value,
        prof_prof_pie1: document.getElementById('prof_prof_pie1').value,
        contacto_prof_pie1: document.getElementById('contacto_prof_pie1').value,
        reg_prof_pie1: document.getElementById('reg_prof_pie1').value,
        nom_prof_pie2: document.getElementById('nom_prof_pie2').value,
        prof_prof_pie2: document.getElementById('prof_prof_pie2').value,
        contacto_prof_pie2: document.getElementById('contacto_prof_pie2').value,
        reg_prof_pie2: document.getElementById('reg_prof_pie2').value,
        nom_prof_pie3: document.getElementById('nom_prof_pie3').value,
        prof_prof_pie3: document.getElementById('prof_prof_pie3').value,
        contacto_prof_pie3: document.getElementById('contacto_prof_pie3').value,
        reg_prof_pie3: document.getElementById('reg_prof_pie3').value,
        nom_prof_pie4: document.getElementById('nom_prof_pie4').value,
        prof_prof_pie4: document.getElementById('prof_prof_pie4').value,
        contacto_prof_pie4: document.getElementById('contacto_prof_pie4').value,
        reg_prof_pie4: document.getElementById('reg_prof_pie4').value,
        nom_prof_pie5: document.getElementById('nom_prof_pie5').value,
        prof_prof_pie5: document.getElementById('prof_prof_pie5').value,
        contacto_prof_pie5: document.getElementById('contacto_prof_pie5').value,
        reg_prof_pie5: document.getElementById('reg_prof_pie5').value,

    };

    fetch(`/generate-doc?type=fil`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FUR-FIL-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});

/* Botón FUR-TDAH */
document.getElementById('fur-tdah').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
        nom_direc: document.getElementById('nom_direc').value,
        rbd: document.getElementById('rbd').value,
        nom_prof_resp: document.getElementById('nom_prof_resp').value,
        run_prof_resp: document.getElementById('run_prof_resp').value,
        prof_prof_resp: document.getElementById('prof_prof_resp').value,
        cargo_prof_resp: document.getElementById('cargo_prof_resp').value,
        fono_prof_resp: document.getElementById('fono_prof_resp').value,
        mail_prof_resp: document.getElementById('mail_prof_resp').value,
        nom_prof_pie1: document.getElementById('nom_prof_pie1').value,
        prof_prof_pie1: document.getElementById('prof_prof_pie1').value,
        contacto_prof_pie1: document.getElementById('contacto_prof_pie1').value,
        reg_prof_pie1: document.getElementById('reg_prof_pie1').value,
        nom_prof_pie2: document.getElementById('nom_prof_pie2').value,
        prof_prof_pie2: document.getElementById('prof_prof_pie2').value,
        contacto_prof_pie2: document.getElementById('contacto_prof_pie2').value,
        reg_prof_pie2: document.getElementById('reg_prof_pie2').value,
        nom_prof_pie3: document.getElementById('nom_prof_pie3').value,
        prof_prof_pie3: document.getElementById('prof_prof_pie3').value,
        contacto_prof_pie3: document.getElementById('contacto_prof_pie3').value,
        reg_prof_pie3: document.getElementById('reg_prof_pie3').value,
        nom_prof_pie4: document.getElementById('nom_prof_pie4').value,
        prof_prof_pie4: document.getElementById('prof_prof_pie4').value,
        contacto_prof_pie4: document.getElementById('contacto_prof_pie4').value,
        reg_prof_pie4: document.getElementById('reg_prof_pie4').value,
        nom_prof_pie5: document.getElementById('nom_prof_pie5').value,
        prof_prof_pie5: document.getElementById('prof_prof_pie5').value,
        contacto_prof_pie5: document.getElementById('contacto_prof_pie5').value,
        reg_prof_pie5: document.getElementById('reg_prof_pie5').value,

    };

    fetch(`/generate-doc?type=tdah`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FUR-TDAH-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});

/* Botón FUR-TEA */
document.getElementById('fur-tea').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
        nom_direc: document.getElementById('nom_direc').value,
        rbd: document.getElementById('rbd').value,
        nom_prof_resp: document.getElementById('nom_prof_resp').value,
        run_prof_resp: document.getElementById('run_prof_resp').value,
        prof_prof_resp: document.getElementById('prof_prof_resp').value,
        cargo_prof_resp: document.getElementById('cargo_prof_resp').value,
        fono_prof_resp: document.getElementById('fono_prof_resp').value,
        mail_prof_resp: document.getElementById('mail_prof_resp').value,
        nom_prof_pie1: document.getElementById('nom_prof_pie1').value,
        prof_prof_pie1: document.getElementById('prof_prof_pie1').value,
        contacto_prof_pie1: document.getElementById('contacto_prof_pie1').value,
        reg_prof_pie1: document.getElementById('reg_prof_pie1').value,
        nom_prof_pie2: document.getElementById('nom_prof_pie2').value,
        prof_prof_pie2: document.getElementById('prof_prof_pie2').value,
        contacto_prof_pie2: document.getElementById('contacto_prof_pie2').value,
        reg_prof_pie2: document.getElementById('reg_prof_pie2').value,
        nom_prof_pie3: document.getElementById('nom_prof_pie3').value,
        prof_prof_pie3: document.getElementById('prof_prof_pie3').value,
        contacto_prof_pie3: document.getElementById('contacto_prof_pie3').value,
        reg_prof_pie3: document.getElementById('reg_prof_pie3').value,
        nom_prof_pie4: document.getElementById('nom_prof_pie4').value,
        prof_prof_pie4: document.getElementById('prof_prof_pie4').value,
        contacto_prof_pie4: document.getElementById('contacto_prof_pie4').value,
        reg_prof_pie4: document.getElementById('reg_prof_pie4').value,
        nom_prof_pie5: document.getElementById('nom_prof_pie5').value,
        prof_prof_pie5: document.getElementById('prof_prof_pie5').value,
        contacto_prof_pie5: document.getElementById('contacto_prof_pie5').value,
        reg_prof_pie5: document.getElementById('reg_prof_pie5').value,

    };

    fetch(`/generate-doc?type=tea`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FUR-TEA-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});

/* Botón FUR-TEL */
document.getElementById('fur-tel').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
        nom_direc: document.getElementById('nom_direc').value,
        rbd: document.getElementById('rbd').value,
        nom_prof_resp: document.getElementById('nom_prof_resp').value,
        run_prof_resp: document.getElementById('run_prof_resp').value,
        prof_prof_resp: document.getElementById('prof_prof_resp').value,
        cargo_prof_resp: document.getElementById('cargo_prof_resp').value,
        fono_prof_resp: document.getElementById('fono_prof_resp').value,
        mail_prof_resp: document.getElementById('mail_prof_resp').value,
        nom_prof_pie1: document.getElementById('nom_prof_pie1').value,
        prof_prof_pie1: document.getElementById('prof_prof_pie1').value,
        contacto_prof_pie1: document.getElementById('contacto_prof_pie1').value,
        reg_prof_pie1: document.getElementById('reg_prof_pie1').value,
        nom_prof_pie2: document.getElementById('nom_prof_pie2').value,
        prof_prof_pie2: document.getElementById('prof_prof_pie2').value,
        contacto_prof_pie2: document.getElementById('contacto_prof_pie2').value,
        reg_prof_pie2: document.getElementById('reg_prof_pie2').value,
        nom_prof_pie3: document.getElementById('nom_prof_pie3').value,
        prof_prof_pie3: document.getElementById('prof_prof_pie3').value,
        contacto_prof_pie3: document.getElementById('contacto_prof_pie3').value,
        reg_prof_pie3: document.getElementById('reg_prof_pie3').value,
        nom_prof_pie4: document.getElementById('nom_prof_pie4').value,
        prof_prof_pie4: document.getElementById('prof_prof_pie4').value,
        contacto_prof_pie4: document.getElementById('contacto_prof_pie4').value,
        reg_prof_pie4: document.getElementById('reg_prof_pie4').value,
        nom_prof_pie5: document.getElementById('nom_prof_pie5').value,
        prof_prof_pie5: document.getElementById('prof_prof_pie5').value,
        contacto_prof_pie5: document.getElementById('contacto_prof_pie5').value,
        reg_prof_pie5: document.getElementById('reg_prof_pie5').value,

    };

    fetch(`/generate-doc?type=tel`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FUR-TEL-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});

/* Botón FU-SALUD */
document.getElementById('fu-salud').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        nacio_est: document.getElementById('nacio_est').value,
        lge_orig_est: document.getElementById('lge_orig_est').value,
        lge_uso_est: document.getElementById('lge_uso_est').value
    };

    fetch(`/generate-doc?type=salud`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `FU-SALUD-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});

/* Botón INF-FAMILIA */
document.getElementById('inf-familia').addEventListener('click', function () {
    const nombreEst = document.getElementById('nombre_est').value;
    // Obtener la fecha de nacimiento desde el campo y ajustarla
    const fechaNacimiento = new Date(document.getElementById('fecha_nac').value);    
    // Ajustar manualmente para evitar la discrepancia de un día
    fechaNacimiento.setMinutes(fechaNacimiento.getMinutes() + fechaNacimiento.getTimezoneOffset());
    const dia = String(fechaNacimiento.getDate()).padStart(2, '0');
    const mes = String(fechaNacimiento.getMonth() + 1).padStart(2, '0');
    const año = fechaNacimiento.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${año}`;

    const data = {
        nombre_est: nombreEst,
        fecha_nac: fechaFormateada,
        edad_est: document.getElementById('edad_est').value,
        run_est: document.getElementById('run_est').value,
        curso_est: document.getElementById('curso_est').value,
        establecimiento: document.getElementById('establecimiento').value,
    };

    fetch(`/generate-doc?type=familia`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `INF-FAMILIA-${nombreEst}.docx`; // Cambia el nombre del archivo aquí
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error al generar el documento:', error));
});