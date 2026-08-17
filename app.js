/**
 * MAIL-IA DOSSIER - INTERACTIVE LOGIC & SCREEN SIMULATOR
 * Designed for Partners / Executive Presentation
 * Styled following .idea/agent.md specifications (Claude-like interface)
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigationSpy();
    initDropdownMenus();
    initModuleSimulator();
    initPricingToggle();
    initRevenueCalculator();
    initExportContextModal();
    initMobileMenu();
});

/* ==========================================================================
   MODULE SIMULATOR DATA & LOGIC (All Screens from .idea/agent.md)
   ========================================================================== */

const moduleData = {
    campaigns: {
        title: "Campañas (Historial & Creación Asistida)",
        url: "app.mail-ia.com/campaigns",
        description: "Gestión centralizada del historial de campañas de la empresa con filtros por estado, métricas de rendimiento y acceso directo al flujo de creación de nuevas campañas asistidas por IA.",
        capabilities: [
            "<strong>Historial completo de campañas:</strong> Registro auditable con filtros por Enviadas, Programadas y Borradores.",
            "<strong>Creación conversacional con IA:</strong> Botón destacado que despliega el chat generativo para maquetar nuevas plantillas.",
            "<strong>Métricas resumidas en lista:</strong> Tasa de apertura y clics visible directamente en cada fila de campaña.",
            "<strong>Acciones rápidas:</strong> Duplicar campañas exitosas, editar borradores o reanudar envíos programados."
        ],
        activeSidebar: 'sb-campaigns',
        showSidebar: true,
        renderWireframe: () => `
            <!-- Campaigns History & Management Screen -->
            <div class="mockup-wireframe-card" style="margin-bottom: 0.65rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
                    <div>
                        <div style="font-size: 0.85rem; font-weight: 700; color: #FFFFFF;">Historial de Campañas</div>
                        <div style="font-size: 0.62rem; color: var(--text-muted);">8 campañas registradas • 48,200 correos enviados</div>
                    </div>
                    <div style="display: flex; gap: 0.4rem;">
                        <span style="font-size: 0.65rem; background: rgba(255,255,255,0.06); color: #cbd5e1; padding: 4px 8px; border-radius: 4px;">🔍 Buscar...</span>
                        <span style="font-size: 0.65rem; background: #5B7CFA; color: #FFFFFF; font-weight: 700; padding: 4px 10px; border-radius: 4px; cursor: pointer;">+ Nueva Campaña con IA</span>
                    </div>
                </div>

                <!-- Status Filter Pills -->
                <div style="display: flex; gap: 0.35rem; margin-bottom: 0.75rem;">
                    <span style="font-size: 0.62rem; background: #FFFFFF; color: #000; font-weight: 700; padding: 2px 8px; border-radius: 4px;">Todas (8)</span>
                    <span style="font-size: 0.62rem; background: rgba(255,255,255,0.06); color: #cbd5e1; padding: 2px 8px; border-radius: 4px;">Enviadas (5)</span>
                    <span style="font-size: 0.62rem; background: rgba(255,255,255,0.06); color: #cbd5e1; padding: 2px 8px; border-radius: 4px;">Programadas (2)</span>
                    <span style="font-size: 0.62rem; background: rgba(255,255,255,0.06); color: #cbd5e1; padding: 2px 8px; border-radius: 4px;">Borradores (1)</span>
                </div>

                <!-- Campaigns List Table -->
                <div class="wf-list">
                    <!-- Campaign 1 -->
                    <div class="wf-item selected">
                        <div class="wf-item-left">
                            <span class="wf-indicator wf-green"></span>
                            <div>
                                <div class="wf-item-title">Oferta Exclusiva Anual - 20% Descuento</div>
                                <div class="wf-item-desc">Enviada hace 2 días • 4,200 destinatarios • Segmento: Clientes VIP</div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.6rem;">
                            <div style="text-align: right;">
                                <div style="font-size: 0.7rem; font-weight: 700; color: #10B981;">44.2% Apertura</div>
                                <div style="font-size: 0.58rem; color: var(--text-dim);">18.4% Clics</div>
                            </div>
                            <span class="wf-tag" style="background: rgba(16,185,129,0.15); color: #6EE7B7;">Enviada</span>
                        </div>
                    </div>

                    <!-- Campaign 2 -->
                    <div class="wf-item">
                        <div class="wf-item-left">
                            <span class="wf-indicator wf-yellow"></span>
                            <div>
                                <div class="wf-item-title">Webinar Lanzamiento IA Aplicada a Email Marketing</div>
                                <div class="wf-item-desc">Programada para Mañana 10:00 AM • 1,850 destinatarios</div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.6rem;">
                            <span class="wf-tag" style="background: rgba(234,179,8,0.15); color: #FDE047;">Programada</span>
                        </div>
                    </div>

                    <!-- Campaign 3 -->
                    <div class="wf-item">
                        <div class="wf-item-left">
                            <span class="wf-indicator wf-green"></span>
                            <div>
                                <div class="wf-item-title">Newsletter Mensual - Edición Agosto 2026</div>
                                <div class="wf-item-desc">Enviada hace 1 sem • 5,000 destinatarios</div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.6rem;">
                            <div style="text-align: right;">
                                <div style="font-size: 0.7rem; font-weight: 700; color: #93C5FD;">38.6% Apertura</div>
                                <div style="font-size: 0.58rem; color: var(--text-dim);">12.1% Clics</div>
                            </div>
                            <span class="wf-tag" style="background: rgba(16,185,129,0.15); color: #6EE7B7;">Enviada</span>
                        </div>
                    </div>

                    <!-- Campaign 4 (Draft) -->
                    <div class="wf-item">
                        <div class="wf-item-left">
                            <span class="wf-indicator" style="background-color: var(--text-dim);"></span>
                            <div>
                                <div class="wf-item-title">Campaña Reactivación Leads Inactivos Q3</div>
                                <div class="wf-item-desc">Borrador generado por IA • 850 contactos previstos</div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.6rem;">
                            <span class="wf-tag" style="color: var(--text-dim);">Borrador</span>
                            <span style="font-size: 0.62rem; color: #5B7CFA; cursor: pointer;">Editar en Chat IA →</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    dashboard: {
        title: "Dashboard / Inicio (Pantalla 2)",
        url: "app.mail-ia.com/dashboard",
        description: "Panel central de control con saludo de usuario, fila de KPIs cuantitativos de alto impacto (campañas activas, envíos del mes, tasa de apertura y clientes totales), gráfico de rendimiento y campañas recientes.",
        capabilities: [
            "<strong>4 Tarjetas KPI:</strong> Números grandes de alto contraste sobre superficie secundaria con etiquetas sutiles.",
            "<strong>Gráfico de rendimiento:</strong> Tendencia de aperturas y clics de las campañas recientes.",
            "<strong>Tabla de campañas recientes:</strong> Estados con chips de color (Enviada, Programada, Borrador).",
            "<strong>Carrusel de plantillas más usadas:</strong> Miniaturas de acceso rápido para crear nuevas campañas."
        ],
        activeSidebar: 'sb-dashboard',
        showSidebar: true,
        renderWireframe: () => `
            <!-- Header & KPIs Row -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
                <div style="font-size: 0.78rem; font-weight: 700; color: #FFFFFF;">Hola, Carlos • <span style="font-size: 0.65rem; color: var(--text-muted); font-weight: normal;">15 Agosto 2026</span></div>
                <span style="font-size: 0.65rem; background: #5B7CFA; color: #fff; font-weight: 600; padding: 3px 8px; border-radius: 4px;">+ Nueva campaña</span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 0.65rem;">
                <div class="mockup-wireframe-card" style="padding: 0.55rem;">
                    <span style="font-size: 0.58rem; color: var(--text-muted); text-transform: uppercase;">Campañas Activas</span>
                    <div style="font-size: 1.1rem; font-weight: 700; color: #FFFFFF; margin-top: 1px;">6</div>
                    <span style="font-size: 0.58rem; color: #10B981;">2 en borrador</span>
                </div>
                <div class="mockup-wireframe-card" style="padding: 0.55rem;">
                    <span style="font-size: 0.58rem; color: var(--text-muted); text-transform: uppercase;">Enviados (Mes)</span>
                    <div style="font-size: 1.1rem; font-weight: 700; color: #FFFFFF; margin-top: 1px;">24,850</div>
                    <span style="font-size: 0.58rem; color: #93C5FD;">99.4% entrega</span>
                </div>
                <div class="mockup-wireframe-card" style="padding: 0.55rem;">
                    <span style="font-size: 0.58rem; color: var(--text-muted); text-transform: uppercase;">Tasa Apertura</span>
                    <div style="font-size: 1.1rem; font-weight: 700; color: #FFFFFF; margin-top: 1px;">38.6%</div>
                    <span style="font-size: 0.58rem; color: #10B981;">▲ +4.2%</span>
                </div>
                <div class="mockup-wireframe-card" style="padding: 0.55rem;">
                    <span style="font-size: 0.58rem; color: var(--text-muted); text-transform: uppercase;">Clientes Totales</span>
                    <div style="font-size: 1.1rem; font-weight: 700; color: #FFFFFF; margin-top: 1px;">8,420</div>
                    <span style="font-size: 0.58rem; color: #8A93A6;">5 categorías</span>
                </div>
            </div>

            <!-- Recent Campaigns Table -->
            <div class="mockup-wireframe-card">
                <div class="wireframe-header" style="margin-bottom: 0.4rem; padding-bottom: 0.3rem;">
                    <div class="wf-title">Campañas Recientes</div>
                    <div class="wf-tag">Ver detalle →</div>
                </div>
                <div class="wf-list">
                    <div class="wf-item">
                        <div class="wf-item-left">
                            <span class="wf-indicator wf-green"></span>
                            <div>
                                <div class="wf-item-title">Newsletter Mensual - Edición Agosto</div>
                                <div class="wf-item-desc">Enviada hace 2 días • 4,200 destinatarios</div>
                            </div>
                        </div>
                        <div class="wf-tag" style="background: rgba(16,185,129,0.15); color: #6EE7B7;">Apertura: 44.2%</div>
                    </div>
                    <div class="wf-item">
                        <div class="wf-item-left">
                            <span class="wf-indicator wf-yellow"></span>
                            <div>
                                <div class="wf-item-title">Webinar Lanzamiento IA - Recordatorio</div>
                                <div class="wf-item-desc">Programada para Mañana 10:00 AM</div>
                            </div>
                        </div>
                        <div class="wf-tag" style="background: rgba(234,179,8,0.15); color: #FDE047;">Programada</div>
                    </div>
                </div>
            </div>
        `
    },

    templates: {
        title: "Selector de Plantillas & Biblioteca de Diseños (Pantallas 4 y 5)",
        url: "app.mail-ia.com/templates",
        description: "Catálogo visual con diseños reales renderizados para newsletters, promociones y lanzamientos. Permite seleccionar una plantilla base, previsualizar su estructura y clonarla al instante.",
        capabilities: [
            "<strong>Diseños renderizados completos:</strong> Miniaturas visuales con encabezados, bloques de contenido y botones CTA.",
            "<strong>Filtros por categoría:</strong> Promociones, newsletters editoriales, onboarding y transaccionales.",
            "<strong>Subida de diseño propio:</strong> Importación de archivos HTML para que la IA los adapte a la marca.",
            "<strong>Biblioteca de imágenes:</strong> Repositorio corporativo para insertar logotipos y fotos en un clic."
        ],
        activeSidebar: 'sb-templates',
        showSidebar: true,
        renderWireframe: () => `
            <!-- Real Simulated Email Templates Grid -->
            <div class="mockup-wireframe-card">
                <div class="wireframe-header" style="margin-bottom: 0.6rem; padding-bottom: 0.4rem;">
                    <div class="wf-title">Biblioteca de Plantillas & Diseños Simulados</div>
                    <div style="display: flex; gap: 0.35rem;">
                        <span class="wf-tag">🔍 Buscar...</span>
                        <span class="wf-tag" style="background: #FFFFFF; color: #000; font-weight: 700;">+ Subir diseño propio</span>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.65rem;">
                    
                    <!-- Simulated Design Card 1: Promo Deal -->
                    <div style="background-color: var(--bg-base); border: 1px solid var(--border-subtle); border-radius: 6px; overflow: hidden; display: flex; flex-direction: column;">
                        <!-- Mini Rendered Email Header & Body -->
                        <div style="background: #080D18; padding: 0.6rem; text-align: center; border-bottom: 1px solid var(--border-subtle);">
                            <div style="font-size: 0.55rem; color: #5B7CFA; font-weight: 700; letter-spacing: 0.08em;">BLACK FRIDAY EARLY ACCESS</div>
                            <div style="font-size: 0.72rem; font-weight: 700; color: #FFFFFF; margin: 2px 0;">20% OFF en Plan Anual</div>
                            <p style="font-size: 0.55rem; color: #8A93A6; margin-bottom: 4px;">Cupón exclusivo para clientes corporativos.</p>
                            <span style="display: inline-block; background: #5B7CFA; color: #fff; font-size: 0.55rem; font-weight: 700; padding: 2px 6px; border-radius: 3px;">Reclamar Descuento →</span>
                        </div>
                        <div style="padding: 0.45rem; display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface);">
                            <div>
                                <div style="font-size: 0.65rem; font-weight: 600; color: #FFFFFF;">Oferta Anual Promo</div>
                                <div style="font-size: 0.55rem; color: var(--text-dim);">Tasa prom.: 44.8%</div>
                            </div>
                            <span style="font-size: 0.58rem; background: #FFFFFF; color: #000; font-weight: 700; padding: 2px 6px; border-radius: 3px; cursor: pointer;">Usar</span>
                        </div>
                    </div>

                    <!-- Simulated Design Card 2: Editorial Newsletter -->
                    <div style="background-color: var(--bg-base); border: 1px solid var(--border-subtle); border-radius: 6px; overflow: hidden; display: flex; flex-direction: column;">
                        <!-- Mini Rendered Email Header & Body -->
                        <div style="background: #080D18; padding: 0.6rem; text-align: left; border-bottom: 1px solid var(--border-subtle);">
                            <div style="display: flex; justify-content: space-between; font-size: 0.52rem; color: var(--text-muted); margin-bottom: 2px;">
                                <span>TECH DIGEST #24</span>
                                <span>15 AGO 2026</span>
                            </div>
                            <div style="font-size: 0.68rem; font-weight: 700; color: #FFFFFF; line-height: 1.2; margin-bottom: 3px;">5 Estrategias para Reducir Rebotes con IA</div>
                            <div style="height: 24px; background: #131B2E; border-radius: 3px; margin-bottom: 3px; display: flex; align-items: center; justify-content: center; font-size: 0.52rem; color: #5B7CFA;">
                                [Gráfico de entregabilidad]
                            </div>
                            <div style="font-size: 0.52rem; color: #93C5FD;">Leer artículo completo (3 min) ›</div>
                        </div>
                        <div style="padding: 0.45rem; display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface);">
                            <div>
                                <div style="font-size: 0.65rem; font-weight: 600; color: #FFFFFF;">Newsletter Tech</div>
                                <div style="font-size: 0.55rem; color: var(--text-dim);">Editorial / Contenido</div>
                            </div>
                            <span style="font-size: 0.58rem; background: #FFFFFF; color: #000; font-weight: 700; padding: 2px 6px; border-radius: 3px; cursor: pointer;">Usar</span>
                        </div>
                    </div>

                    <!-- Simulated Design Card 3: Product Launch / Feature -->
                    <div style="background-color: var(--bg-base); border: 1px solid var(--border-subtle); border-radius: 6px; overflow: hidden; display: flex; flex-direction: column;">
                        <!-- Mini Rendered Email Header & Body -->
                        <div style="background: #080D18; padding: 0.6rem; text-align: center; border-bottom: 1px solid var(--border-subtle);">
                            <div style="font-size: 0.55rem; color: #10B981; font-weight: 700;">NUEVA ACTUALIZACIÓN</div>
                            <div style="font-size: 0.72rem; font-weight: 700; color: #FFFFFF; margin: 2px 0;">Conectores OAuth 2.0</div>
                            <p style="font-size: 0.55rem; color: #8A93A6; margin-bottom: 4px;">Sincronización instantánea con Google Workspace.</p>
                            <span style="display: inline-block; background: #10B981; color: #000; font-size: 0.55rem; font-weight: 700; padding: 2px 6px; border-radius: 3px;">Ver Documentación</span>
                        </div>
                        <div style="padding: 0.45rem; display: flex; justify-content: space-between; align-items: center; background: var(--bg-surface);">
                            <div>
                                <div style="font-size: 0.65rem; font-weight: 600; color: #FFFFFF;">Lanzamiento Producto</div>
                                <div style="font-size: 0.55rem; color: var(--text-dim);">Transaccional / Avisos</div>
                            </div>
                            <span style="font-size: 0.58rem; background: #FFFFFF; color: #000; font-weight: 700; padding: 2px 6px; border-radius: 3px; cursor: pointer;">Usar</span>
                        </div>
                    </div>

                </div>
            </div>
        `
    },

    sending: {
        title: "Configuración de Envío de Campaña (Pantalla 6)",
        url: "app.mail-ia.com/campaigns/send-setup",
        description: "Flujo guiado con stepper (Diseño → Destinatarios → Revisión y envío) para seleccionar audiencias, programar fecha/hora, definir asunto y remitente con tarjeta lateral de resumen sticky.",
        capabilities: [
            "<strong>Header con Stepper:</strong> Progreso visual claro del paso actual.",
            "<strong>Selector de Listas & Categorías:</strong> Checkboxes y chips seleccionables con contador dinámico de destinatarios.",
            "<strong>Programación inteligente:</strong> Envío inmediato o programado con selector de fecha/hora.",
            "<strong>Resumen y envío:</strong> Verificación final de remitente y botón de despacho seguro."
        ],
        activeSidebar: 'sb-campaigns',
        showSidebar: true,
        renderWireframe: () => `
            <!-- Stepper Progress -->
            <div style="display: flex; justify-content: space-between; background: var(--bg-base); border: 1px solid var(--border-subtle); padding: 0.45rem 0.75rem; border-radius: 6px; margin-bottom: 0.65rem; font-size: 0.65rem;">
                <span style="color: var(--text-dim);">1. Diseño ✓</span>
                <span style="color: #5B7CFA; font-weight: 700;">2. Destinatarios (Actual)</span>
                <span style="color: var(--text-dim);">3. Revisión & Envío</span>
            </div>

            <div style="display: grid; grid-template-columns: 60% 40%; gap: 0.65rem;">
                <!-- Left Setup Form -->
                <div class="mockup-wireframe-card" style="padding: 0.65rem;">
                    <div style="font-size: 0.7rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.45rem;">Seleccionar Audiencia</div>
                    <div style="display: flex; gap: 0.35rem; margin-bottom: 0.6rem; flex-wrap: wrap;">
                        <span style="font-size: 0.6rem; background: #5B7CFA; color: #fff; padding: 2px 7px; border-radius: 4px;">✓ Clientes VIP (1,240)</span>
                        <span style="font-size: 0.6rem; background: rgba(255,255,255,0.06); color: #cbd5e1; padding: 2px 7px; border-radius: 4px;">+ Leads Q3 (3,180)</span>
                    </div>

                    <div style="font-size: 0.7rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.35rem;">Programación</div>
                    <div style="font-size: 0.65rem; color: #cbd5e1; display: flex; gap: 0.75rem; margin-bottom: 0.5rem;">
                        <label><input type="radio" name="sched" checked> Enviar ahora</label>
                        <label><input type="radio" name="sched"> Programar fecha</label>
                    </div>
                </div>

                <!-- Right Sticky Summary Card -->
                <div class="mockup-wireframe-card" style="background: #172138; padding: 0.65rem; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <div style="font-size: 0.68rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.3rem;">Resumen de Campaña</div>
                        <div style="font-size: 0.6rem; color: var(--text-muted); line-height: 1.35;">
                            Destinatarios: <strong>1,240 contactos</strong><br>
                            Certificación: <strong>DKIM / SPF OK</strong><br>
                            Remitente: <strong>ventas@empresa.com</strong>
                        </div>
                    </div>
                    <span style="display: block; background: #FFFFFF; color: #000; font-size: 0.65rem; font-weight: 700; padding: 4px; border-radius: 4px; text-align: center; margin-top: 0.5rem; cursor: pointer;">🚀 Enviar Campaña</span>
                </div>
            </div>
        `
    },

    contacts: {
        title: "Gestión de Clientes & Categorías (Pantallas 7 y 8)",
        url: "app.mail-ia.com/audience/contacts",
        description: "Administración aislada de contactos y categorías de clientes. Incluye tabla completa con filtros, importación CSV, panel lateral con tasa de apertura individual e historial de campañas recibidas.",
        capabilities: [
            "<strong>Tabla de clientes:</strong> Nombre, email, categorías en chips, fecha de alta y estado.",
            "<strong>Panel lateral deslizable:</strong> Detalle completo del cliente, historial de emails y tasa personal.",
            "<strong>Gestión de Categorías:</strong> Tarjetas con colores identificadores y número de clientes asociados.",
            "<strong>Aislamiento y privacidad:</strong> Datos mínimos almacenados sin exponer la infraestructura interna."
        ],
        activeSidebar: 'sb-contacts',
        showSidebar: true,
        renderWireframe: () => `
            <!-- Contacts Table & Categories View -->
            <div class="mockup-wireframe-card">
                <div class="wireframe-header" style="margin-bottom: 0.45rem; padding-bottom: 0.3rem;">
                    <div class="wf-title">Clientes & Audiencias (8,420 contactos)</div>
                    <div style="display: flex; gap: 0.35rem;">
                        <span class="wf-tag">📥 Importar CSV</span>
                        <span class="wf-tag" style="background: #FFFFFF; color: #000; font-weight: 700;">+ Añadir cliente</span>
                    </div>
                </div>

                <!-- Categories chips -->
                <div style="display: flex; gap: 0.35rem; margin-bottom: 0.5rem;">
                    <span style="font-size: 0.6rem; background: rgba(91,124,250,0.15); color: #93C5FD; padding: 2px 7px; border-radius: 4px;">● Clientes VIP (1,240)</span>
                    <span style="font-size: 0.6rem; background: rgba(16,185,129,0.15); color: #6EE7B7; padding: 2px 7px; border-radius: 4px;">● Leads Calificados (3,180)</span>
                    <span style="font-size: 0.6rem; background: rgba(234,179,8,0.15); color: #FDE047; padding: 2px 7px; border-radius: 4px;">● Despacho Legal (850)</span>
                </div>

                <div class="wf-list">
                    <div class="wf-item">
                        <div class="wf-item-left">
                            <span style="font-size: 0.7rem; color: #8A93A6;">●</span>
                            <div>
                                <div class="wf-item-title">carlos.mendoza@empresa.com</div>
                                <div class="wf-item-desc">Carlos Mendoza • Categoría: Clientes VIP</div>
                            </div>
                        </div>
                        <div class="wf-tag" style="color: #10B981;">Apertura: 82%</div>
                    </div>
                    <div class="wf-item">
                        <div class="wf-item-left">
                            <span style="font-size: 0.7rem; color: #8A93A6;">●</span>
                            <div>
                                <div class="wf-item-title">laura.torres@corporativo.es</div>
                                <div class="wf-item-desc">Laura Torres • Categoría: Leads Calificados</div>
                            </div>
                        </div>
                        <div class="wf-tag" style="color: #93C5FD;">Apertura: 64%</div>
                    </div>
                </div>
            </div>
        `
    },

    analytics: {
        title: "Seguimiento y Telemetría de Campañas (Pantalla 9)",
        url: "app.mail-ia.com/analytics/campaign-detail",
        description: "Detalle pormenorizado de una campaña enviada: tarjetas de métricas clave (enviados, tasa de apertura, tasa de clics, rebotes), gráfico de apertura temporal, tabla por destinatario y botón de duplicar.",
        capabilities: [
            "<strong>Fila de métricas clave:</strong> Enviados, Tasa de apertura, Clics, Rebotes y Bajas.",
            "<strong>Gráfico temporal:</strong> Línea cronológica de interacción desde la hora de despacho.",
            "<strong>Tabla por destinatario:</strong> Estado individual de lectura y clics con fecha/hora.",
            "<strong>Acciones de campaña:</strong> Vista previa del HTML enviado y botón 'Duplicar campaña'."
        ],
        activeSidebar: 'sb-analytics',
        showSidebar: true,
        renderWireframe: () => `
            <!-- Analytics Campaign Detail View -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div style="font-size: 0.75rem; font-weight: 700; color: #FFFFFF;">Campaña: Oferta Anual 2026 • <span style="font-size: 0.62rem; color: #10B981;">Enviada</span></div>
                <span style="font-size: 0.62rem; background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 3px;">Duplicar campaña</span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.4rem; margin-bottom: 0.6rem;">
                <div class="mockup-wireframe-card" style="padding: 0.5rem;">
                    <span style="font-size: 0.58rem; color: var(--text-muted);">Enviados</span>
                    <div style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">5,000</div>
                    <span style="font-size: 0.58rem; color: #10B981;">100% entregado</span>
                </div>
                <div class="mockup-wireframe-card" style="padding: 0.5rem;">
                    <span style="font-size: 0.58rem; color: var(--text-muted);">Aperturas</span>
                    <div style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">2,140</div>
                    <span style="font-size: 0.58rem; color: #93C5FD;">42.8% tasa</span>
                </div>
                <div class="mockup-wireframe-card" style="padding: 0.5rem;">
                    <span style="font-size: 0.58rem; color: var(--text-muted);">Clics</span>
                    <div style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">648</div>
                    <span style="font-size: 0.58rem; color: #34D399;">30.2% CTR</span>
                </div>
                <div class="mockup-wireframe-card" style="padding: 0.5rem;">
                    <span style="font-size: 0.58rem; color: var(--text-muted);">Rebotes</span>
                    <div style="font-size: 1.05rem; font-weight: 700; color: #FFFFFF;">10</div>
                    <span style="font-size: 0.58rem; color: var(--text-dim);">0.2%</span>
                </div>
            </div>

            <div class="mockup-wireframe-card">
                <div class="wireframe-header" style="margin-bottom: 0.35rem; padding-bottom: 0.25rem;">
                    <div class="wf-title" style="font-size: 0.7rem;">Interacción por Hora (Curva de Apertura)</div>
                    <div class="wf-tag" style="font-size: 0.58rem;">Pico: 11:00 AM</div>
                </div>
                <div style="height: 42px; background: var(--bg-base); border-radius: 4px; display: flex; align-items: flex-end; gap: 4px; padding: 4px;">
                    <div style="height: 30%; width: 12%; background: #5B7CFA; border-radius: 2px;"></div>
                    <div style="height: 85%; width: 12%; background: #5B7CFA; border-radius: 2px;"></div>
                    <div style="height: 100%; width: 12%; background: #5B7CFA; border-radius: 2px;"></div>
                    <div style="height: 60%; width: 12%; background: #5B7CFA; border-radius: 2px;"></div>
                    <div style="height: 40%; width: 12%; background: #5B7CFA; border-radius: 2px;"></div>
                    <div style="height: 25%; width: 12%; background: #5B7CFA; border-radius: 2px;"></div>
                </div>
            </div>
        `
    },

    settings: {
        title: "Configuración General & Correo / API (Pantalla 10)",
        url: "app.mail-ia.com/settings/api-keys",
        description: "Panel de configuración con tabs verticales: Perfil de cuenta, Configuración de correo/API (credenciales, dominio verificado, remitente por defecto), Notificaciones y Seguridad.",
        capabilities: [
            "<strong>Credenciales de envío:</strong> API Keys de proveedores de correo y estado de verificación de dominio.",
            "<strong>Remitente por defecto:</strong> Configuración de correo de salida y respuesta institucional.",
            "<strong>Seguridad y accesos:</strong> Gestión de autenticación en dos pasos y tokens.",
            "<strong>Notificaciones:</strong> Toggles para alertas de entrega y resúmenes semanales."
        ],
        activeSidebar: 'sb-settings',
        showSidebar: true,
        renderWireframe: () => `
            <!-- Settings View -->
            <div style="display: grid; grid-template-columns: 30% 70%; gap: 0.65rem;">
                <div class="mockup-wireframe-card" style="padding: 0.5rem; display: flex; flex-direction: column; gap: 0.3rem;">
                    <div style="font-size: 0.65rem; color: #FFFFFF; font-weight: 700; background: rgba(255,255,255,0.06); padding: 4px 6px; border-radius: 3px;">Correo / API</div>
                    <div style="font-size: 0.65rem; color: var(--text-muted); padding: 4px 6px;">Perfil de Cuenta</div>
                    <div style="font-size: 0.65rem; color: var(--text-muted); padding: 4px 6px;">Notificaciones</div>
                    <div style="font-size: 0.65rem; color: var(--text-muted); padding: 4px 6px;">Seguridad (2FA)</div>
                </div>

                <div class="mockup-wireframe-card" style="padding: 0.65rem;">
                    <div style="font-size: 0.72rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.4rem;">Conexión de Correo & Dominio</div>
                    
                    <div style="margin-bottom: 0.45rem;">
                        <div style="font-size: 0.6rem; color: var(--text-muted);">Dominio Verificado:</div>
                        <div style="font-size: 0.68rem; color: #FFFFFF; display: flex; justify-content: space-between;">
                            <span>mail.miempresa.com</span>
                            <span style="color: #10B981; font-weight: 700;">✓ DKIM / SPF Válido</span>
                        </div>
                    </div>

                    <div style="margin-bottom: 0.5rem;">
                        <div style="font-size: 0.6rem; color: var(--text-muted);">API Key del Proveedor:</div>
                        <div style="background: var(--bg-base); padding: 3px 6px; border-radius: 3px; font-family: monospace; font-size: 0.6rem; color: #8A93A6;">
                            key_live_9481a8b9201948••••••••••••
                        </div>
                    </div>

                    <span style="display: inline-block; background: #5B7CFA; color: #fff; font-size: 0.62rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;">Guardar cambios</span>
                </div>
            </div>
        `
    },

    login: {
        title: "Login / Onboarding (Pantalla 1)",
        url: "app.mail-ia.com/login",
        description: "Pantalla de acceso limpia y centrada con fondo azul noche total, sin menú lateral. Tarjeta en superficie secundaria con inputs de email y contraseña, botón primario 'Iniciar sesión' y acceso SSO.",
        capabilities: [
            "<strong>Sin menú de navegación:</strong> Experiencia enfocada exclusivamente en el acceso o registro.",
            "<strong>Tarjeta centrada de alta legibilidad:</strong> Logo superior y saludo de bienvenida.",
            "<strong>Campos de autenticación:</strong> Email corporativo y contraseña.",
            "<strong>Botones secundarios SSO:</strong> Integración OAuth directa con Google y Microsoft."
        ],
        activeSidebar: null,
        showSidebar: false, // Observación 1: En login no hay sidebar
        renderWireframe: () => `
            <!-- Login Centered Card Simulator (Full window, no sidebar) -->
            <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 320px; padding: 1rem;">
                <div style="width: 260px; background-color: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                    <div style="width: 16px; height: 16px; background: #5B7CFA; border-radius: 3px; margin: 0 auto 0.5rem auto;"></div>
                    <div style="font-size: 0.85rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.2rem;">Bienvenido de nuevo</div>
                    <div style="font-size: 0.62rem; color: var(--text-muted); margin-bottom: 0.75rem;">Ingresa a tu plataforma de Mail-IA</div>

                    <div style="background: var(--bg-base); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 5px 8px; font-size: 0.65rem; color: var(--text-dim); text-align: left; margin-bottom: 0.4rem;">
                        email@miempresa.com
                    </div>
                    <div style="background: var(--bg-base); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 5px 8px; font-size: 0.65rem; color: var(--text-dim); text-align: left; margin-bottom: 0.65rem;">
                        ••••••••••••
                    </div>

                    <div style="background: #FFFFFF; color: #000000; font-size: 0.68rem; font-weight: 700; padding: 6px; border-radius: 4px; margin-bottom: 0.65rem; cursor: pointer;">
                        Iniciar sesión
                    </div>

                    <div style="font-size: 0.6rem; color: var(--text-dim); border-top: 1px solid var(--border-subtle); padding-top: 0.5rem;">
                        o continuar con Google / Microsoft
                    </div>
                </div>
            </div>
        `
    }
};

function initModuleSimulator() {
    const tabButtons = document.querySelectorAll('.module-tab-btn');
    const infoTitle = document.getElementById('info-title');
    const infoDesc = document.getElementById('info-description');
    const capabilitiesList = document.getElementById('capabilities-list');
    const mockupUrl = document.getElementById('mockup-url');
    const dynamicView = document.getElementById('app-dynamic-view');
    const sidebarContainer = document.getElementById('app-sidebar-container');

    function selectModule(moduleKey) {
        const mod = moduleData[moduleKey];
        if (!mod) return;

        // Update tab active state
        tabButtons.forEach(btn => {
            if (btn.dataset.module === moduleKey) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update info panel
        if (infoTitle) infoTitle.textContent = mod.title;
        if (infoDesc) infoDesc.textContent = mod.description;
        if (mockupUrl) mockupUrl.textContent = mod.url;

        if (capabilitiesList) {
            capabilitiesList.innerHTML = mod.capabilities.map(cap => `<li>${cap}</li>`).join('');
        }

        // Toggle sidebar visibility (Hidden for login as requested)
        if (sidebarContainer) {
            if (mod.showSidebar) {
                sidebarContainer.style.display = 'flex';
            } else {
                sidebarContainer.style.display = 'none';
            }
        }

        // Highlight active sidebar item
        document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
        if (mod.activeSidebar) {
            const activeSb = document.getElementById(mod.activeSidebar);
            if (activeSb) activeSb.classList.add('active');
        }

        // Render mockup content
        if (dynamicView) {
            dynamicView.innerHTML = mod.renderWireframe();
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectModule(btn.dataset.module);
        });
    });

    // Default active module: campaigns
    selectModule('campaigns');
}

/* ==========================================================================
   PRICING TOGGLE (MONTHLY / ANNUAL)
   ========================================================================== */

function initPricingToggle() {
    const billingSwitch = document.getElementById('pricing-billing-switch');
    const priceElements = document.querySelectorAll('.price-number');
    const lblMonthly = document.getElementById('lbl-monthly');
    const lblAnnual = document.getElementById('lbl-annual');
    const noteStarter = document.getElementById('note-starter');
    const noteBusiness = document.getElementById('note-business');

    if (!billingSwitch) return;

    function updateBillingState() {
        const isAnnual = billingSwitch.checked;

        if (isAnnual) {
            if (lblAnnual) lblAnnual.classList.add('active');
            if (lblMonthly) lblMonthly.classList.remove('active');
            if (noteStarter) noteStarter.textContent = 'facturado anual ($180/año)';
            if (noteBusiness) noteBusiness.textContent = 'facturado anual ($564/año)';
        } else {
            if (lblMonthly) lblMonthly.classList.add('active');
            if (lblAnnual) lblAnnual.classList.remove('active');
            if (noteStarter) noteStarter.textContent = 'facturación mensual';
            if (noteBusiness) noteBusiness.textContent = 'facturación mensual';
        }

        priceElements.forEach(el => {
            const annualPrice = el.dataset.annual;
            const monthlyPrice = el.dataset.monthly;
            if (annualPrice !== undefined && monthlyPrice !== undefined) {
                el.textContent = isAnnual ? annualPrice : monthlyPrice;
            }
        });
    }

    billingSwitch.addEventListener('change', updateBillingState);
    updateBillingState();
}

/* ==========================================================================
   REVENUE CALCULATOR FOR PARTNERS (Formulas from @.idea/agent.md)
   ========================================================================== */

function initRevenueCalculator() {
    const rangeStarter = document.getElementById('range-starter');
    const rangeBusiness = document.getElementById('range-business');
    const rangeEnterprise = document.getElementById('range-enterprise');
    const rangeFree = document.getElementById('range-free');

    const valStarter = document.getElementById('val-starter');
    const valBusiness = document.getElementById('val-business');
    const valEnterprise = document.getElementById('val-enterprise');
    const valFree = document.getElementById('val-free');

    const calcMrr = document.getElementById('calc-mrr');
    const calcArr = document.getElementById('calc-arr');
    const calcProfit = document.getElementById('calc-profit');
    const calcPayingCount = document.getElementById('calc-paying-count');

    const btnConservative = document.getElementById('btn-scenario-conservative');
    const btnOptimistic = document.getElementById('btn-scenario-optimistic');

    if (!rangeStarter || !rangeBusiness || !rangeEnterprise || !rangeFree) return;

    const PRICE_STARTER = 19;
    const PRICE_BUSINESS = 59;
    const PRICE_ENTERPRISE = 199;

    function calculate() {
        const starter = parseInt(rangeStarter.value, 10);
        const business = parseInt(rangeBusiness.value, 10);
        const enterprise = parseInt(rangeEnterprise.value, 10);
        const free = parseInt(rangeFree.value, 10);

        if (valStarter) valStarter.textContent = starter;
        if (valBusiness) valBusiness.textContent = business;
        if (valEnterprise) valEnterprise.textContent = enterprise;
        if (valFree) valFree.textContent = free;

        const payingTotal = starter + business + enterprise;
        const mrr = (starter * PRICE_STARTER) + (business * PRICE_BUSINESS) + (enterprise * PRICE_ENTERPRISE);
        const arr = mrr * 12;

        // Operating Costs: Base fixed (~$30) + Variable (~$2 starter, $5 business, $15 enterprise, $0.10 free)
        const fixedInfra = 30;
        const variableCost = (starter * 2) + (business * 5) + (enterprise * 15) + (free * 0.10);
        const totalCost = fixedInfra + variableCost;
        const netProfit = Math.max(0, mrr - totalCost);
        const marginPercent = mrr > 0 ? Math.round((netProfit / mrr) * 100) : 0;

        if (calcMrr) calcMrr.textContent = `$${mrr.toLocaleString()} USD`;
        if (calcArr) calcArr.textContent = `$${arr.toLocaleString()} USD`;
        if (calcProfit) calcProfit.textContent = `$${Math.round(netProfit).toLocaleString()} USD`;
        if (calcPayingCount) calcPayingCount.textContent = `${payingTotal} empresas pagando (Margen ~${marginPercent}%)`;
    }

    rangeStarter.addEventListener('input', calculate);
    rangeBusiness.addEventListener('input', calculate);
    rangeEnterprise.addEventListener('input', calculate);
    rangeFree.addEventListener('input', calculate);

    if (btnConservative) {
        btnConservative.addEventListener('click', () => {
            rangeFree.value = 200;
            rangeStarter.value = 10;
            rangeBusiness.value = 3;
            rangeEnterprise.value = 0;
            calculate();
        });
    }

    if (btnOptimistic) {
        btnOptimistic.addEventListener('click', () => {
            rangeFree.value = 1500;
            rangeStarter.value = 100;
            rangeBusiness.value = 35;
            rangeEnterprise.value = 5;
            calculate();
        });
    }

    calculate();
}

/* ==========================================================================
   NAVIGATION SCROLL SPY, DROPDOWNS & MOBILE MENU
   ========================================================================== */

function initDropdownMenus() {
    const dropdowns = document.querySelectorAll('.nav-item-dropdown');

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav-dropdown-trigger');
        if (!trigger) return;

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('open');

            // Close other dropdowns
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('open');
                    const t = d.querySelector('.nav-dropdown-trigger');
                    if (t) t.setAttribute('aria-expanded', 'false');
                }
            });

            if (isOpen) {
                dropdown.classList.remove('open');
                trigger.setAttribute('aria-expanded', 'false');
            } else {
                dropdown.classList.add('open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item-dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
                const trigger = dropdown.querySelector('.nav-dropdown-trigger');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
                const trigger = dropdown.querySelector('.nav-dropdown-trigger');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Close dropdown and mobile drawer on subcategory link click
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
                const trigger = dropdown.querySelector('.nav-dropdown-trigger');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            });
            const navMenu = document.getElementById('nav-menu');
            if (navMenu) navMenu.classList.remove('open');
        });
    });
}

function initNavigationSpy() {
    const sections = document.querySelectorAll('section[id]');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const dropdownTriggers = document.querySelectorAll('.nav-dropdown-trigger');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        dropdownItems.forEach(item => item.classList.remove('active'));
        dropdownTriggers.forEach(trigger => trigger.classList.remove('active'));

        if (current) {
            dropdownItems.forEach(item => {
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                    const parentDropdown = item.closest('.nav-item-dropdown');
                    if (parentDropdown) {
                        const trigger = parentDropdown.querySelector('.nav-dropdown-trigger');
                        if (trigger) trigger.classList.add('active');
                    }
                }
            });
        }
    });
}

function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!mobileToggle || !navMenu) return;

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

/* ==========================================================================
   AI AGENTS CONTEXT & RULES EXPORT SYSTEM
   ========================================================================== */

const documentCache = {
    'rules.md': null,
    'contexto_desarrollo.md': null,
    'contexto_negocio.md': null
};

let currentPreviewFile = 'rules.md';

function initExportContextModal() {
    const modal = document.getElementById('export-modal');
    const openBtns = [
        document.getElementById('btn-open-export-modal'),
        document.getElementById('btn-banner-export-modal'),
        document.getElementById('btn-markdown')
    ].filter(Boolean);

    const closeBtn = document.getElementById('modal-close-btn');
    const closeFooterBtn = document.getElementById('modal-close-footer-btn');
    const cardsView = document.getElementById('export-cards-view');
    const previewPanel = document.getElementById('modal-preview-panel');
    const previewBackBtn = document.getElementById('btn-preview-back');
    const previewCopyBtn = document.getElementById('btn-preview-copy');
    const previewDownloadBtn = document.getElementById('btn-preview-download');
    const downloadAllBtn = document.getElementById('btn-download-all-docs');

    if (!modal) return;

    // Open Modal Handlers
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    function openModal() {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        showCardsView();
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeModal);

    // Click outside backdrop to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Keyboard ESC to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    function showCardsView() {
        if (cardsView) cardsView.style.display = 'grid';
        if (previewPanel) previewPanel.style.display = 'none';
    }

    function showPreviewView() {
        if (cardsView) cardsView.style.display = 'none';
        if (previewPanel) previewPanel.style.display = 'flex';
    }

    if (previewBackBtn) {
        previewBackBtn.addEventListener('click', showCardsView);
    }

    // Individual Action Listeners on Cards
    document.querySelectorAll('.btn-doc-download').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const filename = btn.getAttribute('data-file');
            await handleFileDownload(filename);
        });
    });

    document.querySelectorAll('.btn-doc-copy').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const filename = btn.getAttribute('data-file');
            await handleFileContentCopy(filename);
        });
    });

    document.querySelectorAll('.btn-doc-preview').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const filename = btn.getAttribute('data-file');
            await handleFilePreview(filename);
        });
    });

    // Preview Toolbar Actions
    if (previewCopyBtn) {
        previewCopyBtn.addEventListener('click', async () => {
            await handleFileContentCopy(currentPreviewFile);
        });
    }

    if (previewDownloadBtn) {
        previewDownloadBtn.addEventListener('click', async () => {
            await handleFileDownload(currentPreviewFile);
        });
    }

    // Download All Documents Button
    if (downloadAllBtn) {
        downloadAllBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const files = ['rules.md', 'contexto_desarrollo.md', 'contexto_negocio.md'];
            showToast('Iniciando descarga de los 3 documentos...', '⬇');
            for (let i = 0; i < files.length; i++) {
                await handleFileDownload(files[i], false);
                await new Promise(r => setTimeout(r, 350));
            }
            showToast('✓ 3 documentos descargados con éxito', '✓');
        });
    }
}

async function loadDocumentContent(filename) {
    if (documentCache[filename]) {
        return documentCache[filename];
    }

    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const text = await response.text();
        documentCache[filename] = text;
        return text;
    } catch (err) {
        console.warn(`Could not fetch ${filename} via network:`, err);
        return null;
    }
}

async function handleFileDownload(filename, showNotification = true) {
    try {
        const content = await loadDocumentContent(filename);
        if (content) {
            triggerFileDownload(filename, content);
            if (showNotification) showToast(`Descargando ${filename}`, '⬇');
        } else {
            // Direct anchor fallback
            const downloadAnchor = document.createElement('a');
            downloadAnchor.href = filename;
            downloadAnchor.download = filename;
            downloadAnchor.target = '_blank';
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            document.body.removeChild(downloadAnchor);
            if (showNotification) showToast(`Descargando ${filename}`, '⬇');
        }
    } catch (err) {
        console.error(`Error downloading ${filename}:`, err);
        showToast(`Error al descargar ${filename}`, '✕');
    }
}

async function handleFileContentCopy(filename) {
    try {
        let content = await loadDocumentContent(filename);
        if (!content) {
            const res = await fetch(filename);
            content = await res.text();
            documentCache[filename] = content;
        }
        await navigator.clipboard.writeText(content);
        showToast(`✓ Contenido de ${filename} copiado al portapapeles`, '📋');
    } catch (err) {
        console.error(`Error copying ${filename}:`, err);
        try {
            const content = documentCache[filename] || '';
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = content;
            tempTextArea.style.position = 'fixed';
            tempTextArea.style.left = '-9999px';
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);
            showToast(`✓ Contenido de ${filename} copiado`, '📋');
        } catch (copyErr) {
            showToast(`No se pudo copiar automáticamente`, '✕');
        }
    }
}

async function handleFilePreview(filename) {
    currentPreviewFile = filename;
    const badge = document.getElementById('preview-filename-badge');
    const codeBlock = document.getElementById('preview-code-block');
    const cardsView = document.getElementById('export-cards-view');
    const previewPanel = document.getElementById('modal-preview-panel');

    if (badge) badge.textContent = filename;
    if (codeBlock) codeBlock.textContent = `Cargando ${filename}...`;

    if (cardsView) cardsView.style.display = 'none';
    if (previewPanel) previewPanel.style.display = 'flex';

    try {
        const content = await loadDocumentContent(filename);
        if (content && codeBlock) {
            codeBlock.textContent = content;
        } else if (codeBlock) {
            const res = await fetch(filename);
            const text = await res.text();
            documentCache[filename] = text;
            codeBlock.textContent = text;
        }
    } catch (err) {
        if (codeBlock) {
            codeBlock.textContent = `No se pudo previsualizar ${filename} en este visor. Puedes descargarlo directamente con el botón de descarga.`;
        }
    }
}

function triggerFileDownload(filename, textContent) {
    const blob = new Blob([textContent], { type: 'text/markdown;charset=utf-8;' });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
}

let toastTimeout = null;
function showToast(message, icon = '✓') {
    const toast = document.getElementById('toast-notification');
    const msgEl = document.getElementById('toast-message');
    const iconEl = toast ? toast.querySelector('.toast-icon') : null;

    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    if (iconEl) iconEl.textContent = icon;

    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}
