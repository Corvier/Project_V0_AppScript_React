/**
 * Esta función siempre debe existir, es lo primero que escucha cuando se lanza 
 * la aplicación.
 * 
 * 1) createTemplateFromFile va a llamar un primer archivo que esta en frontend. 
 * 2) evaluate() evalúa que no hayan errores en la aplicación a la hora de las invocaciones.
 * 3) setXFrameOptionsMode y setSandboxMode, para evitar errores de los Iframe en los despliegues.
 * 4) setTitle
 * 5) setFavicon para configurar la imagen de icon en la pestaña.
 * 6) metaTag, agrega los parámetros responsivos del HTML
 * 7) include, para pasar las rutas y que las retorne.
 * 
 **/

const doGet = () =>
    HtmlService.createTemplateFromFile("frontend/index")
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setTitle("Proyecto de Apps Script + React")
    .setFaviconUrl("https://cdn-icons-png.flaticon.com/512/281/281761.png")
    .addMetaTag(
        "viewport",
        "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
    );

const include = (ruta) =>
    HtmlService.createHtmlOutputFromFile(ruta).getContent();