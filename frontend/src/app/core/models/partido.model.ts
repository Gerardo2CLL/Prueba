export interface Partido {
  id: number;
  jornada: number;
  fecha: string;
  local_nombre: string;
  visitante_nombre: string;
  estadio: string;
  marcador_local: number | null;
  marcador_visitante: number | null;
}