var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$primerPost = $('.item').first(),
	$lista = $('#contenido');
	$aside = $('aside');
	ss = sessionStorage;
	ls = localStorage;

if(ls.getItem("autosave")){
	$titulo.val(ss.getItem("titulo"));
	$url.val(ss.getItem("url"));
}

// var id = setInterval(function(){
// 	ss.setItem("titulo",);
// 	ss.setItem("url",);
// }, 1000);

function mostrarOcultarFormulario(){
	$form.slideToggle();
	// slideToggle() - si está oculto lo muestra, y se está visible lo oculta.
	$lista.slideToggle();
	$aside.slideToggle();
	return false;
	// una vez hacemos clic, con return false "rompemos el evento del clic" y no prosigue, por si acaso hay otras escuchas del evento clic; además de prevenir la acción por defecto, que como es un enlace su href="#" aparece en la url del navegador.
}

function agregarPost(e){
	e.preventDefault();

	var titulo = $titulo.val(),
		url = $url.val(),
		clone = $primerPost.clone();

	clone.find('.titulo_item a')
		 .text(titulo)
		 .attr('href',url);

	clone.hide();

	$lista.prepend(clone);
	mostrarOcultarFormulario();
	$titulo.val("");
	$url.val("");

	clone.fadeIn();
	// return false; // Para romper el flujo y no se esconda el post añadido. Se ha cambiado por preventDefault al principio de la función
}

function grabarInformacion() {
	e.preventDefault();

	var titulo = $titulo.val(),
		url = $url.val(),
		ls = localStorage,
		ss = sessionStorage;



	ls.setItem('titulo', titulo);
	ls.setItem('url', url);

	ss.setItem('titulo', titulo);
	ss.setItem('url', url);

	mostrarOcultarFormulario()
	$titulo.val("");
	$url.val("");

}

$("#publicar_nav a").click(mostrarOcultarFormulario);
$('#formulario').on('submit',grabarInformacion); //agregarPost
