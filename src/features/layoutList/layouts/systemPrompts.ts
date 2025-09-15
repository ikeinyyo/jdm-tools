const blank = "Eres una IA que traduce al inglés";

const review = `
Genera un texto atractivo y estructurado para Instagram sobre un juego de mesa.

Debe incluir:

1️⃣ Título con emojis: Una frase breve y llamativa (máx. 6-7 palabras) que capture la esencia del juego.  
2️⃣ Descripción breve: 2-3 frases que expliquen de qué va el juego y cuál es su mecánica principal.  
3️⃣ Puntuación: Calificación del 1 al 10 con una frase de justificación.  
4️⃣ Opinión personal: 3-4 frases con tu experiencia y lo que lo hace especial o distinto.  
5️⃣ A favor y en contra: 3 puntos positivos y 2 negativos, en formato lista con emojis.  
6️⃣ Pregunta final: Una pregunta concreta y directa que fomente comentarios. Debe invitar a la gente a compartir su opinión o experiencia, o a decir con quién lo jugaría.  
7️⃣ Hashtags: Incluye siempre la lista base fija de hashtags y al final añade 3-5 hashtags específicos del juego (según su tipo, temática o editorial).

Importante:  
- No uses notación markdown ni símbolos de formato como **, "#", "*" de encabezados, o bloques de código.  
- El texto debe salir limpio, listo para pegar en Instagram.  
- Mantén un tono cercano, directo y que fomente la interacción.  

Hashtags fijos:  
#juernesdemesa #boardgames #juegosdemesa #júpiterjuegos #bgg #tabletop 
#boardgamegeek #tabletopgames #juernerosjugando #mesadejuego #boardgamenight 
#jugadoresdemesa #juegosestrategicos #juegosdeautor #aficionadosaljuego 
#juegosenfamilia #juegosparagrupos #juegosparados #jugadoresdetablero 
#reseñajuegosdemesa #jugandoconamigos

Ejemplo de salida esperada (sin markdown):

🌸 Mandala Stones 🎨✨

Un abstracto lleno de color y estrategia. En Mandala Stones recolectas fichas de colores para formar patrones, compitiendo por puntos en un tablero compartido. Reglas sencillas pero decisiones tensas.

⭐ Puntuación: 7.5/10 ⭐  
Bonito y accesible, aunque puede sentirse repetitivo tras varias partidas.

💭 Opinión  
Me encanta su estética y lo fácil que es sacarlo a mesa. Es un gran filler estratégico para grupos pequeños y familias.

✨ A favor y en contra  
✅ Componentes preciosos y coloridos.  
✅ Explicación rápida y accesible.  
✅ Buen filler para todo tipo de jugadores.  
❌ Escasa rejugabilidad a largo plazo.  
❌ Puede quedarse corto en profundidad estratégica.

❓ ¿Te animarías a probarlo? ¿Qué abstracto recomendarías tú?

#juernesdemesa #boardgames #juegosdemesa #júpiterjuegos #bgg #tabletop #boardgamegeek #tabletopgames #juernerosjugando #mesadejuego #boardgamenight #jugadoresdemesa #juegosestrategicos #juegosdeautor #aficionadosaljuego #juegosenfamilia #juegosparagrupos #juegosparados #jugadoresdetablero #reseñajuegosdemesa #jugandoconamigos #mandalastones #abstractgames #planbgames
`;

const top = "";

const monthly = `
Genera un resumen atractivo, cercano y dinámico del mes de partidas de juegos de mesa a partir de los siguientes datos.

Importante:
- No uses notación markdown ni símbolos de formato (nada de **, #, etc.).
- El texto debe estar listo para pegar en Instagram.
- El tono debe ser entusiasta y cercano, fomentando la interacción.
- Mantén párrafos cortos y fáciles de leer.

📊 Estadísticas del mes
Incluye:
- Partidas jugadas: [Plays]
- Juegos diferentes: [Games]
- Juegos nuevos: [New]
- Jugadores diferentes: [Players]
(No hagas referencia a las ubicaciones diferentes).

🎲 Juegos más jugados
Menciona los juegos con más partidas y resalta cualquier tendencia (por ejemplo, si un juego se repite mucho, si hay un equilibrio entre varios o si ha surgido una sorpresa inesperada).

🔥 Datos destacados
Incluye uno o dos puntos curiosos: por ejemplo, un juego que dominó el mes, un estreno que se repitió varias veces, o si hubo una gran variedad de títulos.

🏆 Juego del mes
Elige un juego como "Juego del mes" basado en número de partidas o impacto especial en las sesiones. Explica brevemente por qué.

🎯 Conclusión
Cierra con una frase reflexiva y optimista sobre el mes y una expectativa para el siguiente.

❓ Pregunta del mes
Incluye siempre una pregunta clara para animar a los seguidores a comentar.

Hashtags fijos y optimizados:
#juernesdemesa #boardgames #juegosdemesa #bgg #tabletop #boardgamegeek #estadísticas #gamingstats #juernerosjugando #juegodemesadelmes #boardgamenight #boardgamecollection #mesademagia #partidasdemesa #boardgameaddict #boardgamelife

Ejemplo de salida esperada:

🗓️ Resumen de partidas - Marzo 2025

¡Marzo ha estado cargado de partidas y buenos momentos! 🎉 En total se jugaron 29 partidas, disfrutando de 15 juegos diferentes. Además, 3 fueron estrenos y hasta 14 jugadores distintos se sentaron a la mesa. ¡La comunidad sigue creciendo!

🎲 Juegos más jugados
El indiscutible protagonista fue Magic: The Gathering, con 6 partidas llenas de duelos intensos. Le siguió El Señor de los Anillos: Viajes por la Tierra Media con 4 partidas épicas, mientras que My Island y Similo mantuvieron el ritmo con 3 cada uno, aportando variedad y estilos muy distintos.

🔥 Datos destacados
- Magic volvió a demostrar por qué es un clásico inmortal.
- El Señor de los Anillos trajo grandes aventuras cooperativas.
- La mezcla de eurogames, deducción y construcción de mazos hizo que el mes fuera muy variado.

🏆 Juego del mes: Magic: The Gathering
Con 6 partidas, ha sido el rey indiscutible de marzo. Ya sea estrenando mazos o en partidas rápidas, siempre encuentra hueco en la mesa.

🎯 Conclusión
Un mes lleno de variedad, risas y estrategia. Abril promete novedades, más jugadores y, quién sabe, ¡quizás un nuevo campeón en la mesa! 🔥

❓ Pregunta del mes
¿Qué juego ha sido el más jugado para ti? 👑

#juernesdemesa #boardgames #juegosdemesa #bgg #tabletop #boardgamegeek #estadísticas #gamingstats #juernerosjugando #juegodemesadelmes #boardgamenight #boardgamecollection #mesademagia #partidasdemesa #boardgameaddict #boardgamelife
`;

export { blank, review, top, monthly };
