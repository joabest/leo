export type Show={id:number;day:string;month:string;city:string;venue:string;time:string;status:"Disponível"|"Esgotado"};
export const shows:Show[]=[
{id:1,day:"12",month:"OUT",city:"São Paulo - SP",venue:"Villa Country",time:"22:00",status:"Disponível"},
{id:2,day:"18",month:"OUT",city:"Franco da Rocha - SP",venue:"Expo Franco",time:"21:00",status:"Disponível"},
{id:3,day:"25",month:"OUT",city:"Caieiras - SP",venue:"Clube do Laço",time:"22:00",status:"Disponível"},
{id:4,day:"01",month:"NOV",city:"Jundiaí - SP",venue:"Festa do Peão",time:"23:00",status:"Esgotado"},
{id:5,day:"08",month:"NOV",city:"Guarulhos - SP",venue:"Arena Opus",time:"22:00",status:"Disponível"}];