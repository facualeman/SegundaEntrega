//Arrays plantas y plantaFavorita
const plantas = [
    { nombre: "Orquídea", region: "Tropical", tipo: "Flor" },
    { nombre: "Cactus", region: "Desierto", tipo: "Suculenta" },
    { nombre: "Helecho", region: "Bosque", tipo: "Follaje" },
    { nombre: "Lavanda", region: "Mediterráneo", tipo: "Hierba" },
    { nombre: "Bambú", region: "Asia", tipo: "Árbol" }
  ];
  let plantaFavorita = [];
  
  alert('Bienvenido. Por favor indique la planta que desea conocer.');
  
  let realizarConsulta = true;
  
  while (realizarConsulta) {
    // Creo variable nombres para el prompt de la planta seleccionada por el usuario
    let nombres = "";
  
    for (let i = 0; i < plantas.length; i++) {
      nombres += plantas[i].nombre + "\n";
    }
  
    let plantaSeleccionada = prompt(nombres);
  
    // Filtro el array de plantas 
    const plantasFiltradas = plantas.filter(function(planta) {
      return planta.nombre.toLowerCase().includes(plantaSeleccionada.toLowerCase());
    });
  
    // Mostrar resultados al usuario
    if (plantasFiltradas.length > 0) {
      console.log("Se encontró la planta seleccionada:");
      console.log(plantasFiltradas[0]);
    } else {
      console.log("La planta seleccionada no se encontró.");
    }
  
    // Preguntar si el usuario quiere agregar la planta como favorita
    if (plantasFiltradas.length > 0) {
      let plantaSeleccionadaString = `Nombre: ${plantasFiltradas[0].nombre}\nRegión: ${plantasFiltradas[0].region}\nTipo: ${plantasFiltradas[0].tipo}`;
      let agregarAFavoritos = prompt(`La planta seleccionada es:\n${plantaSeleccionadaString}\n¿Desea agregarla a favoritos? si/no`);
  
      if (agregarAFavoritos.toLowerCase() === "si") {
        alert(`Se ha agregado ${plantasFiltradas[0].nombre} a sus favoritos.`);
        plantaFavorita.push(plantasFiltradas[0]);
        console.log(plantaFavorita);
      } else {
        alert("Gracias.");
      }
    }
  
    // Preguntar si el usuario quiere realizar otra consulta de plantas
    let realizarOtraConsulta = prompt("¿Desea realizar otra consulta de plantas? si/no");
  
    if (realizarOtraConsulta.toLowerCase() !== "si") {
      realizarConsulta = false;
    }
  }

  // Muestra las plantas favoritas al final
  if (plantaFavorita.length === 1) {
    alert(`Su planta favorita es ${plantaFavorita[0].nombre}.`);
  } else if (plantaFavorita.length > 1) {
    let mensaje = "Sus plantas favoritas son:\n";
    for (let i = 0; i < plantaFavorita.length; i++) {
      mensaje += plantaFavorita[i].nombre + "\n";
    }
    alert(mensaje);
  } else {
    alert("No ha agregado ninguna planta como favorita aún.");
  }