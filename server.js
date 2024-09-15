const express = require('express');
const fs = require('fs');
const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Ruta para manejar la generación del documento
app.post('/generate-doc', (req, res) => { //aqui se pasan todos los campos de texto como variable
    const { nombre_est, fecha_nac, edad_est, run_est, curso_est, establecimiento, nom_direc,rbd,nom_prof_resp,run_prof_resp,prof_prof_resp,cargo_prof_resp,fono_prof_resp,mail_prof_resp,nom_prof_pie1,prof_prof_pie1,contacto_prof_pie1,reg_prof_pie1,nom_prof_pie2,prof_prof_pie2,contacto_prof_pie2,reg_prof_pie2,nom_prof_pie3,prof_prof_pie3,contacto_prof_pie3,reg_prof_pie3,nom_prof_pie4,prof_prof_pie4,contacto_prof_pie4,reg_prof_pie4,nom_prof_pie5,prof_prof_pie5,contacto_prof_pie5,reg_prof_pie5,nacio_est,lge_orig_est,lge_uso_est} = req.body;
    //solo para verificar por consola en el navegador
    console.log('Datos recibidos:', { nombre_est, fecha_nac, edad_est, run_est, curso_est, establecimiento, nom_direc,rbd,nom_prof_resp,run_prof_resp,prof_prof_resp,cargo_prof_resp,fono_prof_resp,mail_prof_resp,nom_prof_pie1,prof_prof_pie1,contacto_prof_pie1,reg_prof_pie1,nom_prof_pie2,prof_prof_pie2,contacto_prof_pie2,reg_prof_pie2,nom_prof_pie3,prof_prof_pie3,contacto_prof_pie3,reg_prof_pie3,nom_prof_pie4,prof_prof_pie4,contacto_prof_pie4,reg_prof_pie4,nom_prof_pie5,prof_prof_pie5,contacto_prof_pie5,reg_prof_pie5,nacio_est,lge_orig_est,lge_uso_est }); // Log para verificar los datos recibidos

    const docType = req.query.type;
    console.log('Tipo de documento:', docType); // Log para verificar el tipo de documento

    let templatePath;

    // Selección de la plantilla basada en el tipo de documento solicitado. El tipo de doctype se pone en el fecht de script.js. ambos deben coincidir para que se aplique el if correspondiente al boton que aprieta el usuario
    //condiciones if que aplican dependiendo del boton que apriete el usuario
    if (docType === "dea") {
        templatePath = path.join(__dirname, 'templates', 'FUR_DEA.docx');//aqui se pone el archivo de base en la carpeta templates
    } else if (docType === "audio") {
        templatePath = path.join(__dirname, 'templates', 'FUR_AUDIO.docx');
    } else if (docType === "di") {
        templatePath = path.join(__dirname, 'templates', 'FUR_DI.docx');
    } else if (docType === "motor") {
        templatePath = path.join(__dirname, 'templates', 'FUR_MOTOR.docx');
    } else if (docType === "multi") {
        templatePath = path.join(__dirname, 'templates', 'FUR_MULTI.docx');
    } else if (docType === "visual") {
        templatePath = path.join(__dirname, 'templates', 'FUR_VISUAL.docx');
    } else if (docType === "fil") {
        templatePath = path.join(__dirname, 'templates', 'FUR_FIL.docx');
    } else if (docType === "tdah") {
        templatePath = path.join(__dirname, 'templates', 'FUR_TDAH.docx');
    } else if (docType === "tea") {
        templatePath = path.join(__dirname, 'templates', 'FUR_TEA.docx');
    } else if (docType === "tel") {
        templatePath = path.join(__dirname, 'templates', 'FUR_TEL.docx');
    } else if (docType === "salud") {
        templatePath = path.join(__dirname, 'templates', 'FU_SALUD.docx');
    } else if (docType === "familia") {
        templatePath = path.join(__dirname, 'templates', 'INF_FAMILIA.docx');
    } else {
        return res.status(400).send('Tipo de documento no válido');
    }

    // Leer la plantilla seleccionada
    fs.readFile(templatePath, 'binary', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo de plantilla:', err); // Log para errores de lectura de archivo
            return res.status(500).send('Error al leer el archivo de plantilla');
        }

        const zip = new PizZip(data);
        const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

        // Rellenar la plantilla con los datos recibidos. Se pasan las variables
        try {
            doc.render({ nombre_est, fecha_nac, edad_est, run_est, curso_est, establecimiento, nom_direc,rbd,nom_prof_resp,run_prof_resp,prof_prof_resp,cargo_prof_resp,fono_prof_resp,mail_prof_resp,nom_prof_pie1,prof_prof_pie1,contacto_prof_pie1,reg_prof_pie1,nom_prof_pie2,prof_prof_pie2,contacto_prof_pie2,reg_prof_pie2,nom_prof_pie3,prof_prof_pie3,contacto_prof_pie3,reg_prof_pie3,nom_prof_pie4,prof_prof_pie4,contacto_prof_pie4,reg_prof_pie4,nom_prof_pie5,prof_prof_pie5,contacto_prof_pie5,reg_prof_pie5,nacio_est,lge_orig_est,lge_uso_est });
        } catch (renderError) {
            console.error('Error al renderizar el documento:', renderError); // Log para errores de renderización
            return res.status(500).send('Error al renderizar el documento');
        }

        const buf = doc.getZip().generate({ type: 'nodebuffer' });

        // Configurar la respuesta para la descarga del archivo
        res.setHeader('Content-Disposition', `attachment; filename=${docType}-output.docx`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        res.send(buf);
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
