1. 01. Visión & Problema (#vision):                                                                                                 
       • ¿Qué problema resolvemos?: Cuando departamentos de marketing crean campañas y quieren enviar dicha informacion por correo,
 deben pasar por un proceso intermedio de desarrolladores creando plantillas y automatizando procesos que pueden ser tardados e inexactos ya que no siempre el departamento
 tiene acceso a la plantilla que se creara para los correos.                                                                                                 
       • Nuestra Solución: Capa de Inteligencia Artificial que abstrae los requerimientos de cada campaña y los refleja en plantillas, luego de la abstraccion enviamos los correos con certificados especiales y estandares para evitar spam y priorizar la atencion de los clientes,
        aislamiento de software del negocio con un software especializado para campañas de marketing.                      
       • Pilares Estratégicos: Facilidad de adopción, solo platicas con un chattbot y ella realiza el proceso, gestiona usuarios de forma aislada con solo informacion necesaria,
adopcion de cuentas de correo preexistentes para el envio de correos y autogestionadas con el sistema, control de clientes, - Creación de campañas por medio chatt con ia (ia diseña plantilla de correo con ayuda del usuario), usuario tiene libertad de reutilizar plantillas pasadas, mostrar imagenes, indexar diferentes formatos de diseño, ia se encarga de convertir diseño en html y enviarselo a API (con más información relevante).
- El servicio se encargara de enviar correos con datos digeribles
- Guardar y gestionar lista de clientes
- Guardar y gestionar categorías de clientes
- Seguimientos de campañas
2. 02. Módulos & UI Mockup (#modulos):                                                                                              
       Especificación de Pantallas — App de Campañas de Email con IA
1. Sistema de diseño (aplica a todas las pantallas)

Paleta de color

Base (60%): Azul Noche muy oscuro —
#0B1120 (fondo principal de app, sidebar, header)
Superficie secundaria: Azul noche ligeramente más claro —
#131B2E (tarjetas, paneles, inputs)
Blanco:
#FFFFFF (texto principal sobre fondo oscuro, fondos de tarjetas en modo claro/zonas de contenido)
Negro:
#000000 (texto principal sobre fondo blanco, iconografía de alto contraste)
Gris:
#8A93A6 (texto secundario, placeholders, íconos inactivos) y
#1E2536 (bordes/divisores sutiles)
Acento único (uso mínimo, solo para estados activos/CTA): un azul eléctrico o índigo suave —
#5B7CFA — usado con moderación, nunca como color dominante

Estilo general (inspirado en interfaz tipo Claude)

Fondo predominante oscuro (azul noche), tipografía blanca/gris, mucho espacio en blanco (whitespace) interno
Layout en dos columnas: sidebar de navegación fija a la izquierda (angosta, iconos + labels) + área de contenido principal
Tipografía sans-serif limpia (tipo Inter o similar), tamaños moderados, jerarquía clara por peso más que por color
Bordes redondeados suaves (radius 12–16px) en tarjetas, inputs y burbujas de chat
Sin gradientes llamativos, sin sombras duras; separación de bloques mediante líneas finas grises o cambios sutiles de tono
Iconografía lineal, minimalista, monocromática (blanco/gris, se ilumina en acento al estar activa)
Botón primario: fondo blanco con texto negro, o acento índigo con texto blanco (usar consistentemente uno de los dos como "CTA principal" en toda la app)
Botón secundario: solo borde gris, fondo transparente
2. Pantalla 1 — Login / Onboarding

Orden de componentes (arriba hacia abajo, centrado verticalmente):

Logo de la app (centrado, tamaño mediano)
Título corto de bienvenida ("Bienvenido de nuevo")
Campo de texto: Email
Campo de texto: Contraseña
Botón primario "Iniciar sesión" (ancho completo)
Divisor con texto "o continuar con"
Botones secundarios de SSO (Google/Microsoft) en fila horizontal
Enlace de texto pequeño "¿No tienes cuenta? Regístrate" (gris, subrayado al hover)

Fondo azul noche completo, tarjeta de login centrada en superficie secundaria con borde sutil.

3. Pantalla 2 — Dashboard / Inicio

Layout: Sidebar izquierda fija + contenido principal.

Sidebar (de arriba hacia abajo):

Logo/ícono de la app (pequeño, arriba)
Botón "+ Nueva campaña" (destacado, acento)
Navegación principal (íconos + label): Inicio, Campañas, Plantillas, Clientes, Categorías, Configuración
Espacio flexible
Avatar de usuario + nombre + menú desplegable (abajo del todo)

Contenido principal (de arriba hacia abajo):

Header: saludo ("Hola, [nombre]") + fecha
Fila de tarjetas resumen (KPIs): Campañas activas, Correos enviados este mes, Tasa de apertura promedio, Clientes totales — 4 tarjetas horizontales, fondo superficie secundaria, número grande + label pequeño gris
Gráfico de rendimiento (línea o barras) de campañas recientes, ancho completo
Sección "Campañas recientes": tabla/lista con columnas — nombre, estado (chip de color), fecha de envío, tasa de apertura, acción (ver detalle)
Sección "Plantillas más usadas": carrusel horizontal de miniaturas de plantillas
Pantalla 3 — Chat de Creación de Campaña (pantalla central del producto)

Layout tipo Claude: panel de chat centrado, ancho máximo moderado (no full-width), con panel de vista previa a la derecha.

Columna izquierda — Chat (aprox. 45% del ancho):

Header del chat: nombre de la campaña (editable inline) + estado ("Borrador")
Área de mensajes con scroll, orden cronológico:
Burbuja IA (alineada izquierda, fondo superficie secundaria, ícono de IA pequeño): mensaje de bienvenida guiando al usuario ("Cuéntame sobre esta campaña: ¿qué producto o mensaje quieres comunicar?")
Burbuja Usuario (alineada derecha, fondo acento o blanco con texto oscuro)
Burbuja IA con propuesta de plantilla: incluye una miniatura/preview embebida del diseño generado dentro de la burbuja
Burbuja IA con chips de opciones rápidas debajo del mensaje (ej. "Más formal", "Agregar imagen", "Cambiar colores") — botones pequeños tipo pill
Input inferior fijo: campo de texto expandible + botón adjuntar imagen (ícono clip) + botón enviar (ícono flecha), estilo idéntico a barra de chat de Claude

Columna derecha — Vista previa en vivo (aprox. 55% del ancho):

Header: tabs "Preview" / "HTML" / "Texto plano"
Marco tipo "mockup de email" (simulando ventana de cliente de correo) mostrando el diseño renderizado en tiempo real
Barra inferior de acciones: "Reutilizar plantilla pasada" (abre modal/selector), "Guardar como plantilla", "Continuar" (botón primario, lleva a pantalla de configuración de envío)
Pantalla 4 — Selector de Plantillas Pasadas (Modal o pantalla completa)
   Header: título "Elige una plantilla" + campo de búsqueda + filtro por formato/categoría (dropdown)
   Grid de tarjetas de plantillas (3–4 columnas): cada tarjeta muestra miniatura visual del diseño, nombre de plantilla, fecha de última edición, etiqueta de formato
   Al hacer hover/click: overlay con dos botones — "Vista previa" y "Usar esta plantilla"
   Botón flotante o esquina superior derecha: "Subir diseño propio"
Pantalla 5 — Biblioteca de Imágenes / Recursos
   Header: título "Imágenes" + botón "Subir imagen" (arriba derecha)
   Barra de filtros: por campaña, por fecha, por formato de archivo
   Grid de miniaturas de imágenes (cuadrículas uniformes), cada una con overlay al hover mostrando nombre de archivo y botón "Insertar en campaña actual"
   Panel lateral opcional (al seleccionar una imagen): detalles — dimensiones, peso, campañas donde se usó
Pantalla 6 — Configuración de Envío de Campaña (paso posterior al chat)
   Header con progreso tipo stepper: "Diseño → Destinatarios → Revisión y envío" (paso actual resaltado)
   Sección "Seleccionar destinatarios": selector de listas de clientes guardadas (checkboxes) + selector de categorías de clientes (chips seleccionables)
   Contador dinámico: "X destinatarios seleccionados"
   Sección "Programación": opciones tipo radio — Enviar ahora / Programar fecha y hora (con selector de calendario si se elige programar)
   Sección "Asunto y remitente": campo Asunto, campo Nombre de remitente, campo Email de respuesta
   Resumen final en tarjeta lateral (sticky): preview miniatura del correo + destinatarios + fecha de envío
   Botón primario inferior "Enviar campaña" / "Programar campaña"
Pantalla 7 — Gestión de Clientes (Lista de contactos)
   Header: título "Clientes" + botón "+ Añadir cliente" + botón "Importar CSV" (arriba derecha)
   Barra de búsqueda + filtros (por categoría, por estado de suscripción)
   Tabla de clientes: columnas — nombre, email, categoría(s) (chips), fecha de alta, estado (activo/inactivo), acciones (editar/eliminar)
   Paginación inferior
   Panel lateral deslizable (al hacer click en un cliente): detalle completo — datos de contacto, historial de campañas recibidas, tasa de apertura personal, categorías asignadas (editable)
Pantalla 8 — Gestión de Categorías de Clientes
   Header: título "Categorías" + botón "+ Nueva categoría"
   Lista/grid de tarjetas de categoría: nombre de categoría, color identificador (punto de color), número de clientes asociados, botón editar/eliminar
   Modal "Nueva/Editar categoría": campo nombre, selector de color, campo descripción opcional, buscador para asignar clientes existentes a la categoría
Pantalla 9 — Seguimiento de Campañas (Detalle de una campaña enviada)
    Header: nombre de campaña + estado (chip: Enviada/Programada/Borrador) + fecha de envío
    Fila de métricas clave (tarjetas): Enviados, Tasa de apertura, Tasa de clics, Rebotes, Bajas de suscripción
    Gráfico de aperturas/clics a lo largo del tiempo (línea temporal desde el envío)
    Tabla de detalle por destinatario: nombre, email, estado (abierto/no abierto/clic), fecha/hora de apertura
    Sección inferior: vista previa del HTML enviado (colapsable) + botón "Duplicar campaña"
Pantalla 10 — Configuración General (Cuenta y Correo)

Layout con sub-navegación tipo tabs verticales dentro del panel de contenido:

Tabs laterales dentro de la pantalla: Perfil de cuenta | Configuración de correo/API | Notificaciones | Seguridad

Perfil de cuenta: avatar, nombre, email, empresa — campos editables en formulario simple
Configuración de correo/API: campos para credenciales de envío (API key del proveedor de correo), dominio verificado, nombre de remitente por defecto, email de respuesta por defecto, estado de verificación (chip verde/rojo)
Notificaciones: lista de toggles (switch) — notificar al completar envío, notificar bajas de suscripción, resumen semanal por email
Seguridad: cambio de contraseña, autenticación en dos pasos (toggle)

Cada sección con botón "Guardar cambios" fijo al pie del formulario.

Notas generales para el agente de mockups
    Mantener sidebar de navegación idéntica en todas las pantallas internas (excepto login)
    El chat (Pantalla 3) es la pantalla insignia del producto: debe transmitir la misma sensación limpia y conversacional de una interfaz tipo Claude — burbujas espaciadas, sin ruido visual, foco total en el contenido del mensaje
    Usar el color de acento (índigo
    #5B7CFA) únicamente en: botón primario, elementos activos de navegación, chips de estado positivo, enlaces
    Todos los estados vacíos (sin campañas, sin clientes, sin plantillas) deben mostrar un ilustración lineal simple + texto guía + botón de acción, manteniendo la paleta oscura

3. 03. Presupuesto & Plan Financiero (#presupuesto):                                                                                
       Apartado Tecnológico,Herramienta Seleccionada,Coste Mensual Estimado,Justificación de la Elección
1. Backend y Workers (Docker),Railway (Plan Hobby) o Fly.io,$5.00 – $15.00,"Despliegue directo del contenedor Docker. Solo pagas por la CPU/RAM que consumen tus procesos y workers al ejecutarse, evitando el coste de un VPS 24/7 inactivo."
2. Base de Datos (PostgreSQL),Neon Postgres,$0.00 – $15.00,"Entorno serverless para base de datos relacional. El plan gratuito inicial cubre de sobra el almacenamiento de usuarios, campañas y plantillas para el MVP. Escala a cero si no hay tráfico."
3. Entregabilidad de Email,Resend (o Postmark),$0.00 – $20.00,"Resend ofrece 3,000 correos gratis al mes con una API moderna y excelente manejo de SPF/DKIM/DMARC. El primer escalón de pago ($20) cubre hasta 50,000 envíos."
4. Inteligencia Artificial (JSON/HTML),Qwen 2.5 Coder / Llama 3.1 (Vía Groq u OpenRouter),$1.00 – $3.00,"Elimina el sobreprecio de las marcas comerciales. Inferencia ultrarrápida y costes marginales (céntimos por millón de tokens). Ideal para estructurar respuestas sin pagar la ""tasa premium"" de GPT o Claude."
5. Frontend Web,Cloudflare Pages,$0.00,Ancho de banda ilimitado y gratuito para alojar la interfaz del dashboard y el chat de cliente.
6. Almacenamiento de Imágenes,Cloudflare R2,$0.00 – $2.00,"Sin costes de salida de datos (egress fees), ideal para guardar los recursos gráficos e imágenes de las plantillas de correo."
   ---,---,---,---
   TOTAL ESTIMADO,,$6.00 – $55.00 USD / mes,Un entorno de producción profesional completo por el coste de un par de suscripciones de software.

5. 04. Planes de Suscripción & Monetización (#precios):
# Planes de Suscripción — App de Campañas de Email con IA

## Referencia de mercado (para calibrar precios)
- Brevo: Starter $9–25/mes (5K–100K envíos), Business $18–65/mes
- ActiveCampaign: desde $29/mes (1,000 contactos) hasta $99+/mes
- Mailchimp: cobra por contacto, ~$100/mes con 10,000 contactos
- Con 10,000 contactos, el rango de mercado real va de ~$25/mes (Brevo) a ~$375/mes (ActiveCampaign Pro anual)

Su ventaja de costo (infraestructura variable, $6–55/mes según el presupuesto ya definido) permite posicionarse por debajo de ActiveCampaign y a la par o por debajo de Brevo, manteniendo buen margen.

---

## Free
**$0/mes** — sin tarjeta de crédito

Pensado como puerta de entrada: suficiente para probar el producto en serio, no solo una demo, pero con límites que empujan a subir de plan en cuanto hay uso real.

| Recurso | Límite |
|---|---|
| Usuarios | 1 |
| Contactos almacenados | hasta 300 |
| Correos enviados/mes | hasta 500 |
| Campañas activas simultáneas | 1 |
| Categorías de clientes | 2 |
| Mensajes de chat IA/mes | 30 |
| Plantillas guardadas | 3 |
| Almacenamiento de imágenes | 50 MB |
| Seguimiento de campañas | solo aperturas y clics totales (sin detalle por destinatario) |
| Marca de la app | pie de página "Enviado con [Nombre App]" en cada correo (no removible) |
| Soporte | centro de ayuda / documentación |

---

## Starter Pro
**$19/mes** (facturación mensual) · **$15/mes** facturado anual (–20%)

Pensado para freelancers, consultores y pequeños negocios que envían campañas ocasionales.

| Recurso | Límite |
|---|---|
| Usuarios | 1 |
| Contactos almacenados | hasta 2,500 |
| Correos enviados/mes | hasta 5,000 |
| Campañas activas simultáneas | 3 |
| Categorías de clientes | hasta 5 |
| Mensajes de chat IA/mes | 200 |
| Plantillas guardadas | ilimitadas |
| Almacenamiento de imágenes | 500 MB |
| Seguimiento de campañas | básico (aperturas, clics, rebotes) |
| Soporte | email, respuesta en 48h |

---

## Business Team
**$59/mes** (facturación mensual) · **$47/mes** facturado anual (–20%)

Pensado para equipos de marketing pequeños/medianos con envíos regulares y necesidad de colaborar.

| Recurso | Límite |
|---|---|
| Usuarios | hasta 5 |
| Contactos almacenados | hasta 15,000 |
| Correos enviados/mes | hasta 50,000 |
| Campañas activas simultáneas | ilimitadas |
| Categorías de clientes | ilimitadas |
| Mensajes de chat IA/mes | 1,500 |
| Plantillas guardadas | ilimitadas |
| Almacenamiento de imágenes | 5 GB |
| Seguimiento de campañas | avanzado (mapa de calor de clics, exportación CSV/PDF, comparativa entre campañas) |
| Dominio de envío | subdominio propio verificado (mejor entregabilidad) |
| Soporte | chat en vivo, respuesta en 24h |

---

## Enterprise Custom
**Desde $199/mes** — precio final a medida, contactar a ventas

Pensado para empresas con alto volumen, necesidades de cumplimiento o integración con sistemas propios.

| Recurso | Límite |
|---|---|
| Usuarios | ilimitados |
| Contactos almacenados | ilimitados |
| Correos enviados/mes | volumen negociado (>50,000, escalado sobre Amazon SES) |
| Categorías de clientes | ilimitadas + segmentación avanzada |
| Mensajes de chat IA/mes | negociable / sin límite práctico |
| Almacenamiento de imágenes | negociable (respaldado en Cloudflare R2) |
| Dominio de envío | IP dedicada + acompañamiento de warmup de dominio |
| Integraciones | API completa, webhooks, SSO |
| SLA | acuerdo de nivel de servicio formal |
| Soporte | onboarding dedicado + gestor de cuenta |

---

## Estructura sugerida para la sección interactiva (#precios)

**Selector mensual/anual:** aplicar –20% de descuento sobre el precio mensual al activar "anual" ($19→$15, $59→$47).

**Calculadora de ingresos para socios (slider de empresas clientes):**
Fórmulas base para conectar al slider interactivo:
- `MRR = (nº clientes Starter × $19) + (nº clientes Business × $59) + (nº clientes Enterprise × precio promedio negociado)` — el plan Free no suma a MRR, pero sí conviene incluirlo en el slider como "usuarios en el funnel" para mostrar la tasa de conversión Free → pago
- `ARR = MRR × 12`
- `Beneficio bruto mensual ≈ MRR − (costo variable por cliente de pago activo)`, donde el costo variable por cliente ronda $2–8/mes según su plan (principalmente correo + IA + almacenamiento), calculado sobre el presupuesto de infraestructura ya definido. El costo variable por usuario Free es marginal (<$0.50/mes dados sus límites bajos) pero no nulo, así que conviene sumarlo aparte al total de infraestructura, no al MRR.
- Sugerencia de valor por defecto del slider: partir de un escenario conservador (ej. 200 usuarios Free, 10 clientes Starter, 3 Business) y uno optimista (ej. 2,000 Free, 100 Starter, 25 Business, 3 Enterprise) para mostrar el rango de MRR/ARR y el efecto de la conversión del embudo gratuito.

Si quieres, puedo construir esta calculadora como un widget interactivo para que la pruebes directamente en el chat.

---

## Nota sobre márgenes
Con el presupuesto de infraestructura definido ($6–55/mes total para todo el sistema, no por cliente), el costo marginal real por cliente adicional es bajo (principalmente correos + tokens de IA + almacenamiento), por lo que incluso el plan Starter a $19/mes deja margen bruto amplio salvo que un usuario individual agote sistemáticamente los 5,000 correos y 200 mensajes de IA incluidos.
6. 05. Resumen de Oportunidad (#resumen):
       • Ventaja competitiva, rol del socio y botón de llamada a la acción / siguientes pasos.
7. 06  Stack tecnologico:
   Backend: NestJS (TypeScript) con arquitectura DDD, TDD y Clean Architecture.

Frontend: Angular (TypeScript). Al ser un framework muy estructurado, obliga desde el día uno a separar la interfaz visual de la lógica de negocio.

Infraestructura: Repositorios independientes y contenedores Docker separados para cada proyecto.