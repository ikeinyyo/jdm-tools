const blank = "Eres una IA que traduce al inglés";
const review = `
Genera un post en formato atractivo y estructurado sobre un juego de mesa.

Debe incluir:

1️⃣ Título con emojis: Usa un título llamativo que refleje la esencia del juego. Incluye emojis relacionados.  
2️⃣ Descripción breve del juego: Explica de manera clara y concisa de qué trata el juego y su mecánica principal.  
3️⃣ Puntuación: Asigna una calificación del 1 al 10 con una breve justificación.  
4️⃣ Opinión personal: Explica tu experiencia con el juego, destacando qué lo hace especial o diferente.  
5️⃣ A favor y en contra: Enumera tres puntos positivos y dos negativos sobre el juego.  
6️⃣ Hashtags: No olvides incluir siempre los siguientes hashtags y añade algunos específicos según el tema del juego. Todos en minúscula.  

Importante: No añadas notación makrdown, porque no se va a poder renderizar.

Hashtags fijos:  
#juernesdemesa #boardgames #juegosdemesa #júpiterjuegos #bgg #tabletop #boardgamegeek #tabletopgames #juernerosjugando  

Ejemplo de salida esperada:  

🧙‍♂️ El Señor de los Anillos: Viajes por la Tierra Media 🌍🔥  

Sumérgete en el legendario mundo de Tolkien con El Señor de los Anillos: Viajes por la Tierra Media, un juego cooperativo con soporte de aplicación en el que vivirás emocionantes aventuras, lucharás contra las fuerzas del mal y desarrollarás a tu personaje en una campaña llena de decisiones épicas.  

⭐ Puntuación: 8.5/10 ⭐  

💭 Opinión  
Los cooperativos temáticos no suelen ser mi fuerte, pero este es, sin duda, el mejor que he jugado. Me gusta incluso más que Las Mansiones de la Locura, sobre todo por la temática, aunque mecánicamente son muy similares. La progresión del personaje a lo largo de la campaña y la gestión de mazo aportan una profundidad estratégica muy interesante. Además, hay una gran variedad de personajes y aventuras que explorar en la Tierra Media.  

✨ A favor y en contra  
✅ Inmersión total en la Tierra Media – La narrativa y la ambientación son impecables.  

✅ Progresión del personaje – Evoluciona a tu héroe a lo largo de la campaña.  

✅ Gran rejugabilidad – Muchas aventuras y personajes diferentes para probar.  

❌ Dependencia de la app – Puede no gustar a quienes prefieren una experiencia puramente de mesa.
  
❌ Partidas largas – Es un juego que requiere dedicación y tiempo.  

#juernesdemesa #boardgames #juegosdemesa #júpiterjuegos #bgg #tabletop #boardgamegeek #tabletopgames #juernerosjugando #elseñordelosanillos #lotr #viajesporlatierramedia #cooperativo #tolkien #fantasía #aventuras #rol
`;

const top = "";

const monthly = `
Genera un resumen atractivo y dinámico del mes de partidas de juegos de mesa basado en los siguientes datos:

Importante: No añadas notación makrdown, porque no se va a poder renderizar.

📊 Estadísticas del mes  
- Partidas jugadas: [Plays]  
- Juegos diferentes: [Games]  
- Juegos nuevos: [New]  
- Jugadores diferentes: [Players]
- No hagas referencia a las ubicaciones diferentes 

🎲 Juegos más jugados  
Menciona los juegos con más partidas y destaca cualquier tendencia interesante.  

🔥 Datos destacados  
Resalta información curiosa, como si un juego ha dominado el mes, si ha habido muchas partidas en pocos días o si ha habido una gran variedad de títulos.  

🏆 Juego del mes  
Elige un juego como "Juego del mes" basado en frecuencia de partidas o impacto en la experiencia del mes.  

🎯 Conclusión  
Cierra con una reflexión sobre cómo ha sido el mes y qué expectativas hay para el próximo.  

Ejemplo de salida esperada:  

🗓️ Resumen de partidas - Marzo 2025  

¡Marzo ha sido un mes lleno de partidas! 🎉 En total, hemos jugado 29 partidas, probando 15 juegos diferentes a lo largo de 11 días de juego. Además, descubrimos 3 nuevos juegos y compartimos mesa con 14 jugadores distintos. ¡Nada mal!  

🎲 Juegos más jugados  
El gran protagonista del mes ha sido Magic: The Gathering, con 6 partidas, seguido muy de cerca por El Señor de los Anillos: Viajes por la Tierra Media con 4 partidas. Además, My Island y Similo también han visto bastante mesa con 3 partidas cada uno.  

🔥 Lo más destacado  
- Magic: The Gathering sigue siendo un clásico infalible, dominando las sesiones de juego.  
- El Señor de los Anillos: Viajes por la Tierra Media ha sido una gran aventura cooperativa este mes.  

🏆 Juego del mes: Magic: The Gathering  
Con 6 partidas registradas, Magic ha sido el rey de la mesa en marzo. Ya sea en duelos intensos o pruebas de nuevos mazos, ha sido el juego más recurrente del mes.  

🎯 Conclusión  
Un mes variado y con muchas partidas, ¡y abril promete aún más juegos y desafíos! ¿Podrá otro juego destronar a Magic en el próximo mes? 🔥  

#juernesdemesa #boardgames #juegosdemesa #bgg #tabletop #boardgamegeek #estadísticas #gamingstats #juernerosjugando
`;

export { blank, review, top, monthly };
