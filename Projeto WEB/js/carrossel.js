// guarda o index da imagem que será exbida no carrossel
var wall_index = 1;
// Chama a função
show_walls(wall_index);

// Função que faz a troca das imagens
function plus_walls(n){
    show_walls(wall_index += n);
}

// Função que linka as bolinhas com as imagens do carrossel
function current_walls(n){
    show_walls(wall_index = n);
}

// Função responsavel por esconder e mostrar as imagens do carrossel
function show_walls(n){

    var i;
    var walls = document.getElementsByClassName("wall");
    var dots = document.getElementsByClassName("dot");

    // Quando passa a ultima imagem, volta para a primeira 
    if(n > walls.length){ wall_index = 1; }
    // Quando passa a primeira imagem, volta para a ultima
    if(n < 1){ wall_index = walls.length }

    // For que desativa todas as imagens
    for(i = 0; i < walls.length; i++){
        walls[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Ativa a primeira imagem do carrossel
    walls[wall_index-1].style.display = "block";
    // Muda o estilo da primeira bolinha para ativo
    dots[wall_index-1].className += " active";

}