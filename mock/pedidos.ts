export type PedidoStatus="novo"|"espera"|"tocando"|"tocada";
export type Pedido={id:number;musica:string;artista:string;nome:string;mesa:string;horario:string;status:PedidoStatus;quantidade?:number};
export const pedidos:Pedido[]=[
{id:1,musica:"Evidências",artista:"Chitãozinho & Xororó",nome:"Ana",mesa:"12",horario:"22:45",status:"novo",quantidade:3},
{id:2,musica:"Nosso Amor",artista:"Zezo Potiguar",nome:"João",mesa:"08",horario:"22:46",status:"novo"},
{id:3,musica:"Ainda Bem",artista:"Marisa Monte",nome:"Camila",mesa:"15",horario:"22:48",status:"novo"},
{id:4,musica:"Só Hoje",artista:"Jota Quest",nome:"Thiago",mesa:"21",horario:"22:50",status:"novo"},
{id:5,musica:"Tijolinho por Tijolinho",artista:"Gusttavo Lima",nome:"Fernanda",mesa:"06",horario:"22:52",status:"novo"},
{id:6,musica:"Dois Corações",artista:"Melim",nome:"Lucas",mesa:"11",horario:"22:54",status:"espera"}];