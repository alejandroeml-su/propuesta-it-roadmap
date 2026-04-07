import { useState } from "react";

const phases = [
  {
    id: 1,
    name: "Fase 1: Control Operativo Inmediato",
    period: "Días 1–30",
    color: "#0F4C5C",
    accent: "#5BC0BE",
    icon: "🚨",
    description: "Apagar incendios, mapear activos, tomar control del gasto y habilitar canal único de atención",
    principle: "Estabilizar antes de innovar. No se puede mejorar lo que no se conoce.",
    tracks: [
      {
        area: "Inventario Tecnológico Riguroso",
        tasks: [
          "Levantamiento detallado de hardware de usuario final, equipos de red, licencias de software activas e inactivas",
          "Auditar infraestructura en AWS: instancias EC2, clústeres EKS, RDS, S3, VPC, IAM, costos actuales",
          "Documentar arquitectura actual del ERP, HIS y la instancia de Odoo 18 Community",
          "Documentar topología de red de los 3 edificios y cuartos de comunicaciones (MDF/IDF)",
          "Crear CMDB inicial (Configuration Management Database) clasificando activos por criticidad (alta/media/baja)",
          "Identificar brechas críticas de seguridad, rendimiento y disponibilidad",
        ],
      },
      {
        area: "Estabilización de Cuartos de Comunicaciones",
        tasks: [
          "Auditoría física y ambiental de MDF/IDF en los 3 edificios: cableado, racks, UPS, climatización",
          "Establecer cronograma base de mantenimiento físico inmediato (limpieza, revisión de UPS y A/C de precisión)",
          "Documentar diagramas de rack y cableado estructurado actualizado",
          "Definir procedimiento de acceso físico y bitácora de ingreso a cuartos",
        ],
      },
      {
        area: "Centralización de Compras TI",
        tasks: [
          "Congelamiento inmediato de compras de TI periféricas no autorizadas",
          "Todo requerimiento de hardware o software pasa por evaluación centralizada de compatibilidad y presupuesto",
          "Inventario de contratos vigentes con proveedores y fechas de renovación",
        ],
      },
      {
        area: "Despliegue del Service Desk",
        tasks: [
          "Habilitar canal único de atención (herramienta ITSM: Freshservice / Jira SM / ServiceDesk Plus)",
          "Segmentar categorías de tickets: Redes, Hardware, Odoo, HIS, ERP, AWS, Ciberseguridad",
          "Definir flujo básico de incidentes: recepción → clasificación → asignación → resolución → cierre",
          "Capacitar a usuarios finales en el uso del portal de tickets",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Fase 2: Gobernanza ITSM y SLAs",
    period: "Días 31–90",
    color: "#1B3A4B",
    accent: "#F0A500",
    icon: "⚙️",
    description: "Reglas de juego para continuidad del negocio: incidentes, problemas, cambios y niveles de servicio",
    principle: "Con el entorno mapeado, se establecen los procesos que garantizan la operación diaria.",
    tracks: [
      {
        area: "Gestión de Incidentes y SLAs",
        tasks: [
          "Definir SLAs según criticidad: caída de HIS o ERP = respuesta inmediata (P1: 15min respuesta / 2h resolución)",
          "Completar matriz de prioridades: P1 (crítico), P2 (alto), P3 (medio), P4 (bajo) con tiempos por nivel",
          "Implementar canal único de reportes: portal web, correo, teléfono con número único",
          "Crear base de conocimiento para resolución en primer nivel (artículos KB)",
          "Definir KPIs: MTTR, tasa de resolución en primer contacto, volumen de backlog, satisfacción",
        ],
      },
      {
        area: "Soporte Estructurado ERP / HIS / Odoo",
        tasks: [
          "Estructurar soporte en niveles: L1 (Mesa de ayuda general), L2 (Configuraciones y especialistas), L3 (Desarrollo o soporte del fabricante)",
          "Documentar flujos de resolución de problemas comunes en Odoo 18 Community",
          "Documentar flujos de resolución para el sistema hospitalario (HIS)",
          "Definir catálogo de servicios de TI con SLAs por sistema",
          "Establecer encuestas de satisfacción post-resolución de tickets",
        ],
      },
      {
        area: "Control de Cambios (CAB)",
        tasks: [
          "Implementar Comité Asesor de Cambios (CAB) con representantes de cada área de negocio",
          "Ningún cambio en AWS, Odoo, HIS o infraestructura pasa a producción sin evaluación de impacto previa",
          "Diseñar proceso: RFC → evaluación de impacto → aprobación CAB → ventana de mantenimiento → implementación → PIR",
          "Clasificar cambios: estándar (pre-aprobados), normales y de emergencia",
          "Crear calendario de cambios y política obligatoria de rollback",
        ],
      },
      {
        area: "Gestión de Problemas",
        tasks: [
          "Diferenciar incidentes (interrupciones temporales) de problemas (causas raíz de fallos recurrentes)",
          "Implementar Análisis de Causa Raíz (RCA) con metodología 5 Porqués / Ishikawa",
          "Crear registro de errores conocidos (KEDB) vinculado al ITSM",
          "Establecer comité semanal de revisión de problemas abiertos y tendencias de incidentes",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Fase 3: Ciberseguridad y Desarrollo",
    period: "Días 91–150",
    color: "#6B2737",
    accent: "#E63946",
    icon: "🛡️",
    description: "Seguridad de la información, calidad del software y estandarización del ciclo de desarrollo",
    principle: "Con la operación controlada, se blinda la seguridad y se profesionaliza el desarrollo.",
    tracks: [
      {
        area: "Ciberseguridad y Cumplimiento",
        tasks: [
          "Implementar políticas de acceso de mínimo privilegio (IAM en AWS, roles en Odoo y HIS)",
          "MFA obligatorio para todos los accesos a sistemas críticos y consola AWS",
          "Revisión y hardening de firewalls perimetrales, WAF en AWS, Security Groups",
          "Desplegar EDR/XDR en endpoints y servidores",
          "Implementar SIEM (AWS Security Hub + GuardDuty o solución dedicada)",
          "Alineación con leyes de ciberseguridad y protección de datos de El Salvador",
          "Evaluación de riesgos (ISO 27005) y escaneo periódico de vulnerabilidades",
          "Plan de respuesta a incidentes de seguridad (CSIRT interno)",
          "Programa de concientización y simulación de phishing para usuarios",
          "Cifrado en tránsito (TLS) y en reposo para datos sensibles (datos de salud)",
        ],
      },
      {
        area: "Continuidad y Recuperación",
        tasks: [
          "Definir BCP (Plan de Continuidad de Negocio) y DRP (Disaster Recovery Plan)",
          "Configurar réplicas cross-region en AWS para sistemas críticos (ERP, HIS)",
          "Documentar RPO y RTO por sistema",
          "Implementar backups automatizados: RDS snapshots, S3 lifecycle, AMIs",
          "Planificar primer simulacro de recuperación ante desastres",
        ],
      },
      {
        area: "Estandarización de Desarrollo (SDLC)",
        tasks: [
          "Definir stack tecnológico estándar: React, Next.js, Node.js, Prisma, PostgreSQL",
          "Configurar CI/CD: GitHub Actions / GitLab CI + AWS CodePipeline",
          "Configurar ambientes separados: Desarrollo → QA/Staging → Producción",
          "Implementar code review obligatorio y análisis estático (SonarQube)",
          "Definir estándares de documentación técnica y APIs",
          "Adoptar metodología Scrum/Kanban con sprints de 2 semanas",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Fase 4: Optimización y Transformación",
    period: "Día 150 en adelante",
    color: "#3D348B",
    accent: "#7678ED",
    icon: "🚀",
    description: "La tecnología como habilitador estratégico: integraciones, portafolio de proyectos, mejora continua",
    principle: "Fase de madurez donde se pasa de apagar incendios a generar valor para el negocio.",
    tracks: [
      {
        area: "Gobierno de Datos e Integraciones",
        tasks: [
          "Asegurar flujo de información correcto entre sistemas core sin silos de datos",
          "Evaluar arquitectura de mensajería: transacciones del HIS ↔ módulos financieros/inventario en Odoo",
          "Diseñar integraciones ERP ↔ HIS ↔ Odoo vía API/middleware",
          "Plan de migración/actualización de versiones de cada sistema",
          "Estabilización y personalización de módulos Odoo (compras, inventario, RRHH)",
        ],
      },
      {
        area: "Gestión del Portafolio de Proyectos",
        tasks: [
          "Implementar PMO ligera con metodología híbrida (predictiva + ágil)",
          "Proceso de intake: solicitud → evaluación → priorización → asignación → ejecución",
          "Herramienta de gestión (Jira, Azure DevOps o módulo Odoo Proyectos)",
          "Tablero de portafolio de proyectos con estado y KPIs",
          "Revisión mensual de portafolio con gerencia general",
        ],
      },
      {
        area: "Optimización de Infraestructura Cloud",
        tasks: [
          "Revisión con AWS Well-Architected Framework",
          "Optimizar costos: Reserved Instances, Savings Plans, rightsizing",
          "Implementar IaC con Terraform/CloudFormation",
          "Configurar Auto Scaling y alta disponibilidad (Multi-AZ)",
          "Monitoreo avanzado con CloudWatch, alertas SNS, dashboards",
        ],
      },
      {
        area: "Compras TI y Mejora Continua",
        tasks: [
          "Definir política formal de adquisiciones TI (evaluación técnica + financiera)",
          "Crear catálogo de proveedores homologados por categoría",
          "Integrar compras TI con módulo de compras Odoo",
          "Dashboard ejecutivo con KPIs de todos los procesos ITSM",
          "Revisión trimestral de SLAs y ajuste de metas",
          "Automatización de tareas repetitivas (scripts, runbooks)",
          "Programa de madurez: evaluar nivel ITIL por proceso",
        ],
      },
    ],
  },
];

const kpis = [
  { name: "MTTR Incidentes P1", target: "< 2 horas", icon: "⏱️" },
  { name: "Resolución 1er Contacto", target: "> 70%", icon: "✅" },
  { name: "Cambios Exitosos", target: "> 95%", icon: "🔄" },
  { name: "Disponibilidad HIS/ERP", target: "> 99.5%", icon: "🟢" },
  { name: "Incidentes Seguridad Críticos", target: "0 / mes", icon: "🛡️" },
  { name: "Satisfacción Usuario", target: "> 85%", icon: "⭐" },
  { name: "Cumplimiento SLAs", target: "> 90%", icon: "📋" },
  { name: "Uptime Cuartos de Com.", target: "> 99.9%", icon: "🏢" },
];

const orgStructure = [
  {
    title: "Operaciones e Infraestructura",
    scope: "Soporte Técnico N1/N2, Redes, Cuartos de Comunicaciones (3 edificios), Mantenimiento de Hardware, Inventario",
    color: "#0F4C5C",
    accent: "#5BC0BE",
    headcount: "4",
    justification: "Esta célula es la columna vertebral operativa para soportar más de 200 usuarios y 3 edificios conectando todos los endpoints a las redes seguras.",
    activities: [
      "Monitoreo y mantenimiento preventivo/correctivo de enlaces y cuartos de comunicaciones en los 3 edificios.",
      "Soporte directo nivel 1 a usuarios para software básico, hardware, periféricos y conectividad diaria.",
      "Control, asignación y auditoría física del inventario de activos de TI e infraestructura física."
    ],
    roles: [
      {
        title: "Líder de Infraestructura y Redes",
        type: "Líder",
        description: "Responsable de la infraestructura física, de red y operaciones. Asume también directamente la especialización en redes (switches, APs, enlaces).",
        functions: [
          "Supervisar y gestionar al equipo de soporte técnico N1",
          "Resolver incidentes de red complejos y mantenimiento preventivo de cuartos de comunicaciones",
          "Administrar inventario, infraestructura local y contratos de telecomunicaciones",
        ],
        profile: "Ingeniería en Sistemas, Redes o Telecomunicaciones. Experiencia en Cisco/HP, VLANs, y soporte de usuarios.",
      },
      {
        title: "Técnico de Soporte N1 — Mesa de Ayuda",
        type: "Operativo",
        qty: "3",
        description: "Primer contacto para usuarios. Resuelve problemas básicos y remite a niveles superiores si es requerido.",
        functions: [
          "Recibir y clasificar tickets en el ITSM",
          "Soporte N1: contraseñas, impresoras, red básica, Office",
          "Mantenimiento básico y asignación de equipos de cómputo y periféricos",
        ],
        profile: "Técnico o estudiante. Conocimientos en Windows, redes y excelente atención al cliente.",
      }
    ],
  },
  {
    title: "Cloud & Ciberseguridad",
    scope: "Administración AWS/EKS, Políticas de Seguridad, DRP",
    color: "#6B2737",
    accent: "#E63946",
    headcount: "1",
    justification: "Responsable central único para administrar la nube de AWS y velar por la ciberseguridad general del entorno HIS/ERP.",
    activities: [
      "Aprovisionamiento, optimización y mantenimiento de la infraestructura nativa en la nube (AWS, EKS).",
      "Definición y aplicación exhaustiva de políticas de acceso, monitoreo de amenazas y auditoría de ciberseguridad.",
      "Formulación técnica y ejecución de simulacros para el Plan de Recuperación ante Desastres (DRP)."
    ],
    roles: [
      {
        title: "Ingeniero de Cloud & Seguridad (Lead)",
        type: "Líder",
        description: "Único responsable de AWS, postura de ciberseguridad y DRP de toda la organización.",
        functions: [
          "Administrar infraestructura AWS: EC2, EKS, RDS, S3",
          "Gestionar postura de seguridad corporativa y monitoreo de SIEM/alertas",
          "Diseñar y accionar el DRP (Disaster Recovery Plan) y respaldos",
        ],
        profile: "Profesional Senior en Cloud (AWS) y Ciberseguridad. Capacidad de administrar end-to-end.",
      }
    ],
  },
  {
    title: "Sistemas Core Empresariales",
    scope: "Soporte Odoo 18 y HIS, Gestión de Proveedores",
    color: "#1B3A4B",
    accent: "#F0A500",
    headcount: "2",
    justification: "Equipo compacto enfocado en velar por el buen funcionamiento y el contacto con los proveedores del HIS y Odoo.",
    activities: [
      "Modelado de reglas de negocio y estabilización técnica de los procesos operativos transaccionales en Odoo 18.",
      "Soporte integral, parametrización operativa y seguimiento continuo para el Sistema de Información Hospitalaria (HIS).",
      "Control de incidentes críticos, validación de la interoperabilidad financiera y operaciones médicas."
    ],
    roles: [
      {
        title: "Líder de Desarrollo y de Core / Tech Lead",
        type: "Líder",
        description: "Líder unificado de procesos en Odoo 18, arquitectura técnica e integraciones, dirigiendo los requerimientos funcionales y el desarrollo de software.",
        functions: [
          "Liderar procesos y soporte funcional de Odoo 18 y módulos empresariales",
          "Traducir necesidades del negocio a las plataformas",
          "Evaluar requerimientos y trabajar de la mano con RRHH, Finanzas",
        ],
        profile: "Conocimiento avanzado en Odoo y análisis de procesos de negocio.",
      },
      {
        title: "Analista de Sistemas Clínicos (HIS)",
        type: "Especialista",
        qty: "1",
        description: "Dedicado a asegurar el HIS y sus flujos clínicos resolviendo y escalando incidentes.",
        functions: [
          "Soporte de sistemas funcionales L2 del HIS para médicos y enfermeras",
          "Gestionar flujos de admisión, consultas y reportes",
          "Interoperabilidad y capacitación base",
        ],
        profile: "Ingeniero/Licenciado enfocado en Salud/Informática.",
      }
    ],
  },
  {
    title: "Fábrica de Software",
    scope: "Desarrollo de integraciones (React, Node, Prisma)",
    color: "#3D348B",
    accent: "#7678ED",
    headcount: "1",
    justification: "Desarrollo on-demand para cubrir brechas con soluciones a medida que reducen fricción operativa.",
    activities: [
      "Desarrollo de conectores directos y microservicios para la interoperabilidad entre el ecosistema propio y de terceros.",
      "Mantenimiento, despliegue y soporte continuo de soluciones front-end/back-end elaboradas a la medida.",
      "Digitalización y automatización de procesos internos puntuales que ralenticen la cadena operativa diaria."
    ],
    roles: [
      
      {
        title: "Desarrollador Fullstack Senior",
        type: "Especialista",
        qty: "1",
        description: "Despliega integraciones complejas bajo el lineamiento del tech lead.",
        functions: [
          "Desarrollo frontend y backend de herramientas internas",
          "Soporte en mantenimiento y mejoras",
          "Optimización de consultas",
        ],
        profile: "Desarrollador Fullstack en ecosistema JS y bases relacionales.",
      }
    ],
  }
];

const marketSalaries = {
  "Líder de Infraestructura y Redes": 1700,
  "Técnico de Soporte N1 — Mesa de Ayuda": 750,
  "Ingeniero de Cloud & Seguridad (Lead)": 1700,
  "Líder de Desarrollo y de Core / Tech Lead": 1700,
  "Analista de Sistemas Clínicos (HIS)": 1000,
  "Desarrollador Fullstack Senior": 1500
};

const trackToArea = {
  "Inventario Tecnológico Riguroso": "Operaciones e Infraestructura",
  "Estabilización de Cuartos de Comunicaciones": "Operaciones e Infraestructura",
  "Centralización de Compras TI": "Operaciones e Infraestructura",
  "Despliegue del Service Desk": "Operaciones e Infraestructura",
  "Gestión de Incidentes y SLAs": "Operaciones e Infraestructura",
  "Soporte Estructurado ERP / HIS / Odoo": "Sistemas Core Empresariales",
  "Control de Cambios (CAB)": "Sistemas Core Empresariales",
  "Gestión de Problemas": "Operaciones e Infraestructura",
  "Ciberseguridad y Cumplimiento": "Cloud & Ciberseguridad",
  "Continuidad y Recuperación": "Cloud & Ciberseguridad",
  "Estandarización de Desarrollo (SDLC)": "Fábrica de Software",
  "Gobierno de Datos e Integraciones": "Fábrica de Software",
  "Gestión del Portafolio de Proyectos": "Sistemas Core Empresariales",
  "Optimización de Infraestructura Cloud": "Cloud & Ciberseguridad",
  "Compras TI y Mejora Continua": "Operaciones e Infraestructura"
};

const timelineTasks = [];
let currentDayCounter = 0;
phases.forEach((phase) => {
  const phaseDuration =
    phase.id === 1 ? 30 :
      phase.id === 2 ? 60 :
        phase.id === 3 ? 60 : 60;
  const tasksInPhase = phase.tracks.reduce((s, t) => s + t.tasks.length, 0);
  const daysPerTask = phaseDuration / tasksInPhase;

  phase.tracks.forEach((track) => {
    track.tasks.forEach((task) => {
      const taskDate = new Date(2026, 3, 15);
      const daysOffset = Math.round(currentDayCounter);
      taskDate.setDate(taskDate.getDate() + daysOffset);

      let deliverable = "";
      let verb = task.split(" ")[0].toLowerCase();
      if (verb.includes("auditar") || verb.includes("auditoría") || verb.includes("levantamiento") || verb.includes("revisión") || verb.includes("evaluar")) {
        deliverable = "Reporte de auditoría y diagnóstico detallado.";
      } else if (verb.includes("documentar") || verb.includes("crear") || verb.includes("definir") || verb.includes("diseñar") || verb.includes("completar") || verb.includes("estructurar")) {
        deliverable = "Documento oficial aprobado y publicado.";
      } else if (verb.includes("implementar") || verb.includes("desplegar") || verb.includes("configurar") || verb.includes("habilitar") || verb.includes("adoptar")) {
        deliverable = "Configuración aplicada en sistema y lista para operación.";
      } else {
        deliverable = "Evidencia de ejecución de la tarea y validación de usuarios.";
      }

      const mainArea = trackToArea[track.area] || "Operaciones e Infraestructura";

      timelineTasks.push({
        id: timelineTasks.length,
        phaseName: phase.name,
        phaseColor: phase.color,
        phaseAccent: phase.accent,
        phaseIcon: phase.icon,
        track: track.area,
        mainArea: mainArea,
        task: task,
        daysOffset: daysOffset,
        duration: Math.max(1, Math.round(daysPerTask)),
        date: taskDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
        objective: `Asegurar el cumplimiento del área: ${track.area}.`,
        deliverable: deliverable
      });
      currentDayCounter += daysPerTask;
    });
  });
});



const hiringMilestones = [
  { taskIndex: 0, title: "Líder Infra/Redes", color: "#5BC0BE" },
  { taskIndex: 12, title: "Cloud Lead", color: "#E63946" },
  { taskIndex: 25, title: "Soporte N1 (x3)", color: "#5BC0BE" },
  { taskIndex: 45, title: "Líneas Core", color: "#F0A500" },
  { taskIndex: 60, title: "Dev Team", color: "#7678ED" }
];

export default function RoadmapApp() {
  const [globalPage, setGlobalPage] = useState("inicio");
  const [activePhase, setActivePhase] = useState(null);
  const [expandedTrack, setExpandedTrack] = useState(null);
  const [viewMode, setViewMode] = useState("timeline");
  const [expandedCell, setExpandedCell] = useState(null);
  const [expandedRole, setExpandedRole] = useState(null);
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [hoveredTaskIndex, setHoveredTaskIndex] = useState(null);
  const [hoveredHireIndex, setHoveredHireIndex] = useState(null);
  const [expandedHierarchyNode, setExpandedHierarchyNode] = useState(null);
  const toggleHierarchyNode = (idx) => {
    setExpandedHierarchyNode(expandedHierarchyNode === idx ? null : idx);
  };


  const togglePhase = (id) => {
    setActivePhase(activePhase === id ? null : id);
    setExpandedTrack(null);
  };

  const toggleCell = (i) => {
    setExpandedCell(expandedCell === i ? null : i);
    setExpandedRole(null);
  };

  const toggleRole = (key) => {
    setExpandedRole(expandedRole === key ? null : key);
  };

  const totalTasks = phases.reduce((sum, p) => sum + p.tracks.reduce((s, t) => s + t.tasks.length, 0), 0);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0b1120", color: "#e2e8f0", fontFamily: "system-ui, sans-serif" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}</style>
      
      {/* Sidebar Opciones */}
      <div style={{ width: 250, borderRight: "1px solid rgba(255,255,255,0.05)", background: "#060913", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "30px 24px", borderBottom: "1px solid rgba(255,255,255,0.02)" }}>
          <h1 style={{ margin: 0, fontSize: 18, color: "#fff", letterSpacing: 0.5, fontWeight: 800 }}>Inversiones Avante</h1>
          <div style={{ fontSize: 11, color: "#a0a8bc", marginTop: 6, opacity: 0.8 }}>IT Strategic Planning</div>
        </div>
        
        <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#4a5270", marginBottom: 8, paddingLeft: 8, textTransform: "uppercase", letterSpacing: 1 }}>Vistas del Roadmap</div>
          
          <button onClick={() => setGlobalPage("inicio")} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10,
            background: globalPage === "inicio" ? "rgba(255, 255, 255, 0.08)" : "transparent",
            color: globalPage === "inicio" ? "#ffffff" : "#a0a8bc",
            border: "none", cursor: "pointer", transition: "all 0.2s", textAlign: "left", fontWeight: globalPage === "inicio" ? 700 : 500
          }}>
            <span style={{ fontSize: 18 }}>🏠</span>
            INICIO
          </button>

          <button onClick={() => setGlobalPage("as-is")} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10,
            background: globalPage === "as-is" ? "rgba(91, 192, 190, 0.1)" : "transparent",
            color: globalPage === "as-is" ? "#5BC0BE" : "#a0a8bc",
            border: "none", cursor: "pointer", transition: "all 0.2s", textAlign: "left", fontWeight: globalPage === "as-is" ? 700 : 500
          }}>
            <span style={{ fontSize: 18 }}>🔍</span>
            AS-IS
          </button>

          <button onClick={() => setGlobalPage("gap")} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10,
            background: globalPage === "gap" ? "rgba(240, 165, 0, 0.1)" : "transparent",
            color: globalPage === "gap" ? "#F0A500" : "#a0a8bc",
            border: "none", cursor: "pointer", transition: "all 0.2s", textAlign: "left", fontWeight: globalPage === "gap" ? 700 : 500
          }}>
            <span style={{ fontSize: 18 }}>🌉</span>
            GAP Análisis
          </button>

          <button onClick={() => { setGlobalPage("to-be"); setViewMode("timeline"); }} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10,
            background: globalPage === "to-be" ? "rgba(118, 120, 237, 0.1)" : "transparent",
            color: globalPage === "to-be" ? "#7678ED" : "#a0a8bc",
            border: "none", cursor: "pointer", transition: "all 0.2s", textAlign: "left", fontWeight: globalPage === "to-be" ? 700 : 500
          }}>
            <span style={{ fontSize: 18 }}>🚀</span>
            TO-BE (Propuesta)
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, height: "100vh", overflowY: "auto", position: "relative", background: "linear-gradient(160deg, #070b14 0%, #0f1729 40%, #131b2e 100%)" }}>
        
        {/* VISTAS EN CONSTRUCCIÓN */}
        {globalPage === "inicio" && (
          <div style={{ height: "100%", paddingBottom: 60, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "fadeIn 0.8s cubic-bezier(0.1, 0.9, 0.2, 1)" }}>
            <h1 style={{
              fontSize: 54, fontWeight: 800, margin: "0 0 16px 0",
              background: "linear-gradient(90deg, #5BC0BE, #7678ED, #F0A500)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, textAlign: "center"
            }}>
              Tecnología y Transformación Digital
            </h1>
            <h2 style={{ fontSize: 28, fontWeight: 500, color: "#ccd0da", margin: "0 0 16px 0", letterSpacing: 1.5 }}>
              Análisis y Estructuración
            </h2>
            <div style={{ fontSize: 16, color: "#6a7490", fontWeight: 700, letterSpacing: 4, textTransform: "uppercase" }}>
              Abril 2026
            </div>
          </div>
        )}

        {globalPage === "as-is" && (
          <div style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto", textAlign: "center", animation: "fadeIn 0.4s" }}>
            <div style={{ fontSize: 70, marginBottom: 20 }}>🔍</div>
            <h2 style={{ fontSize: 32, color: "#fff", marginBottom: 12 }}>Situación Actual (AS-IS)</h2>
            <p style={{ color: "#a0a8bc", fontSize: 16, lineHeight: 1.6 }}>Esta sección documenta la arquitectura técnica, los flujos operativos actuales de negocio y el estado organizativo base previo a la intervención. Identifica qué tenemos actualmente y cómo funciona hoy sin ninguna de las reestructuraciones técnicas planificadas.</p>
            <div style={{ marginTop: 40 }}>
              <img src="/AS-IS.png" style={{ width: "100%", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }} alt="Arquitectura AS-IS" />
            </div>
          </div>
        )}

        {globalPage === "gap" && (
          <div style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto", textAlign: "center", animation: "fadeIn 0.4s" }}>
            <div style={{ fontSize: 70, marginBottom: 20 }}>🌉</div>
            <h2 style={{ fontSize: 32, color: "#fff", marginBottom: 12 }}>GAP Análisis (Brechas)</h2>
            <p style={{ color: "#a0a8bc", fontSize: 16, lineHeight: 1.6 }}>Diagnóstico puntual de deficiencias, cuellos de botella tecnológicos, brechas funcionales de Odoo y riesgos críticos identificados al comparar el AS-IS que tenemos versus el TO-BE que exige un modelo digitalmente maduro, seguro y operacional.</p>
            
            <div style={{ textAlign: "left", background: "rgba(255,255,255,0.02)", padding: "30px 40px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", marginTop: 40 }}>
              <h3 style={{ color: "#F0A500", marginTop: 0, fontSize: 20 }}>Análisis de Brechas (Gap Analysis): Gestión de Servicios e Infraestructura TI</h3>
              <div style={{ color: "#a0a8bc", fontSize: 14, marginBottom: 20 }}>
                <p><strong>Preparado por:</strong> Jefatura de Tecnología y Transformación Digital | <strong>Organización:</strong> Inversiones Avante</p>
                <p style={{ lineHeight: 1.6 }}>He finalizado la revisión del estado actual de nuestras operaciones tecnológicas basándome en la matriz de responsabilidades e implementaciones. Tras contrastar nuestra realidad operativa frente a los marcos de trabajo de ITIL 4 y COBIT 2019, he identificado deficiencias críticas y riesgos inminentes para Inversiones Avante derivados de la tercerización casi total con el proveedor IPCOM.</p>
                <p style={{ lineHeight: 1.6 }}>El hallazgo más alarmante es que no existe un contrato formal firmado que regule esta relación comercial. Operar sin Acuerdos de Nivel de Servicio (SLA), sin Acuerdos de Confidencialidad (NDA), y sin cláusulas de Propiedad Intelectual o salvaguarda de activos intangibles y tangibles, nos deja en una posición de vulnerabilidad extrema.</p>
              </div>

              <h4 style={{ color: "#fff", borderBottom: "1px solid #333", paddingBottom: 8, fontSize: 16 }}>Hallazgos Críticos Generales (Nivel Directivo)</h4>
              <ul style={{ color: "#a0a8bc", fontSize: 14, lineHeight: 1.6, paddingLeft: 20 }}>
                <li style={{ marginBottom: 6 }}><strong>Gestión de Incidentes Deficiente:</strong> Al no contar con SLAs definidos, la reacción ante caídas de sistemas críticos depende enteramente de la disponibilidad arbitraria del proveedor. Esto se traduce en tiempos de inactividad prolongados y pérdida de ingresos.</li>
                <li style={{ marginBottom: 6 }}><strong>Sobrecostos Ocultos por Cambios:</strong> Sin un marco contractual que fije tarifas, el modelo de "cobro por evento" genera un sobrecosto insostenible.</li>
                <li style={{ marginBottom: 6 }}><strong>Pérdida de Propiedad Intelectual (IP):</strong> Todo el desarrollo del código y BD del ERP/HIS pertenecen de facto a IPCOM al no existir un contrato de cesión.</li>
                <li style={{ marginBottom: 6 }}><strong>Riesgo Legal y de Cumplimiento:</strong> La falta de un inventario lógico, sumado a la opacidad del proveedor, abre la puerta a la instalación de software no licenciado, exponiéndose a multas millonarias (violación MEA03).</li>
              </ul>

              <h4 style={{ color: "#fff", borderBottom: "1px solid #333", paddingBottom: 8, marginTop: 30, fontSize: 16 }}>Análisis Detallado por Procesos</h4>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, textAlign: "left", marginTop: 10 }}>
                  <thead>
                    <tr style={{ background: "rgba(240, 165, 0, 0.1)", color: "#F0A500", borderBottom: "1px solid rgba(240, 165, 0, 0.2)" }}>
                      <th style={{ padding: 12 }}>Área / Sistema</th>
                      <th style={{ padding: 12 }}>Problema Operativo (Brecha)</th>
                      <th style={{ padding: 12 }}>Consecuencia (Riesgo/Impacto)</th>
                      <th style={{ padding: 12 }}>Sugerencia de Mitigación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td style={{ padding: 12, color: "#fff", fontWeight: 700 }}>Desarrollo (ERP/HIS)<br/><span style={{fontSize:10, color:"#6a7490", fontWeight: 'normal'}}>Facturación, Inventario...</span></td>
                      <td style={{ padding: 12, color: "#a0a8bc" }}>Cero control sobre el código y arquitectura. Dependencia.</td>
                      <td style={{ padding: 12, color: "#E63946" }}>Secuestro de datos (Vendor Lock-in). Costos altos.</td>
                      <td style={{ padding: 12, color: "#5BC0BE" }}>Exigir entregas de ramas de código. Firmar NDA e IP.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td style={{ padding: 12, color: "#fff", fontWeight: 700 }}>Web & Datos</td>
                      <td style={{ padding: 12, color: "#a0a8bc" }}>Publicación e integridad en manos de terceros.</td>
                      <td style={{ padding: 12, color: "#E63946" }}>Fugas o alteración de datos sensibles.</td>
                      <td style={{ padding: 12, color: "#5BC0BE" }}>Reubicar administración y llaves a TI interno.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td style={{ padding: 12, color: "#fff", fontWeight: 700 }}>Infraestructura Core<br/><span style={{fontSize:10, color:"#6a7490", fontWeight: 'normal'}}>Redes, Cloud, Servidores</span></td>
                      <td style={{ padding: 12, color: "#a0a8bc" }}>Sin mapa de red ni control del tenant Cloud.</td>
                      <td style={{ padding: 12, color: "#E63946" }}>Riesgo de apagado Cloud por disputa contractual.</td>
                      <td style={{ padding: 12, color: "#5BC0BE" }}>Recuperar credenciales root físicas y de AWS.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td style={{ padding: 12, color: "#fff", fontWeight: 700 }}>End User & Hardware</td>
                      <td style={{ padding: 12, color: "#a0a8bc" }}>Sin inventario. Posible instalación pirata.</td>
                      <td style={{ padding: 12, color: "#E63946" }}>Riesgo de demandas por licenciamiento.</td>
                      <td style={{ padding: 12, color: "#5BC0BE" }}>Despliegue de RMM. Inventariar endpoints.</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 12, color: "#fff", fontWeight: 700 }}>CCTV / Seguridad</td>
                      <td style={{ padding: 12, color: "#a0a8bc" }}>Grabaciones expuestas a externos.</td>
                      <td style={{ padding: 12, color: "#E63946" }}>Vulneración absoluta de privacidad física.</td>
                      <td style={{ padding: 12, color: "#5BC0BE" }}>Aislar VLAN. Retirar master keys a IPCOM.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: 30, background: "rgba(230, 57, 70, 0.1)", padding: 20, borderRadius: 12, borderLeft: "4px solid #E63946" }}>
                <h4 style={{ color: "#E63946", marginTop: 0, marginBottom: 12, fontSize: 15 }}>Plan de Acción Inmediato (15 días)</h4>
                <p style={{ color: "#ccd0da", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  <strong>1. Intervención Legal:</strong> Redactar y forzar firma de Acuerdo de Nivel de Servicio (SLA) transitorio y contrato de cesión de Propiedad Intelectual.<br/><br/>
                  <strong>2. Toma de Activos:</strong> Congelar compras hasta levantar hardware y erradicar cualquier aplicativo no licenciado.<br/><br/>
                  <strong>3. Credenciales:</strong> Exigir bajo notario la entrega documentada de credenciales root de AWS y firewalls (IPCOM pasa a tener roles limitados).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TO-BE (TODO EL CONTENIDO ORIGINAL) */}
        {globalPage === "to-be" && (
          <div style={{ padding: "24px 16px", animation: "fadeIn 0.4s" }}>
            {/* INICIO CONTENIDO PREVIO */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ fontSize: 10, letterSpacing: 8, color: "#5BC0BE", textTransform: "uppercase", marginBottom: 6, opacity: 0.8 }}>
          Inversiones Avante
        </div>
        <h1 style={{
          fontSize: 24, fontWeight: 800, margin: 0,
          background: "linear-gradient(90deg, #5BC0BE, #7678ED, #F0A500)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.3,
        }}>
          Roadmap — Tecnología y Transformación Digital
        </h1>
        <p style={{ fontSize: 12, color: "#6a7490", marginTop: 6, maxWidth: 550, margin: "6px auto 0" }}>
          ERP · HIS · AWS/EKS · Odoo 18 · Ciberseguridad · 3 Edificios · React/Next.js
        </p>
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
          {[["timeline", "📅 Fases"], ["kpis", "📊 KPIs"], ["org", "👥 Estructura y Roles"], ["hierarchy", "🌳 Jerarquía"], ["interactive-timeline", "🛤️ Timeline (15 Abr)"]].map(([k, l]) => (
            <button key={k} onClick={() => { setViewMode(k); setExpandedCell(null); setExpandedRole(null); }} style={{
              padding: "6px 14px", borderRadius: 20,
              border: viewMode === k ? "none" : "1px solid #252d40",
              background: viewMode === k ? "linear-gradient(90deg, #5BC0BE, #7678ED)" : "rgba(255,255,255,0.03)",
              color: viewMode === k ? "#070b14" : "#6a7490",
              fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
            }}>{l}</button>
          ))}
        </div>
      </div>

      {viewMode === "kpis" && (
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 16, color: "#5BC0BE", marginBottom: 16, textAlign: "center" }}>Indicadores Clave de Desempeño</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))", gap: 10 }}>
            {kpis.map((k, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 14,
                border: "1px solid rgba(255,255,255,0.06)", textAlign: "center",
              }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{k.icon}</div>
                <div style={{ fontSize: 11, color: "#6a7490", marginBottom: 4 }}>{k.name}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#5BC0BE" }}>{k.target}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {viewMode === "org" && (
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <div style={{
              background: "linear-gradient(135deg, #3D348B, #7678ED)",
              borderRadius: 12, padding: 14, display: "inline-block",
            }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Tecnología y Transformación Digital</div>
              <div style={{ fontSize: 10, opacity: 0.8 }}>Estrategia · Gobierno TI · PMO · Presupuesto · Alineación con Dirección</div>
            </div>
            <div style={{ width: 2, height: 14, background: "#252d40", margin: "0 auto" }} />
          </div>
          <div style={{ fontSize: 11, color: "#6a7490", textAlign: "center", marginBottom: 16, fontStyle: "italic" }}>
            Haz clic en cada célula para ver la justificación y roles → luego clic en cada rol para ver funciones y perfil
          </div>

          {orgStructure.map((cell, ci) => {
            const isOpen = expandedCell === ci;
            return (
              <div key={ci} style={{ marginBottom: 8 }}>
                <div onClick={() => toggleCell(ci)} style={{
                  background: isOpen ? cell.color : "rgba(255,255,255,0.03)",
                  borderRadius: 12, padding: "12px 16px", cursor: "pointer",
                  border: isOpen ? `1px solid ${cell.accent}33` : "1px solid rgba(255,255,255,0.05)",
                  display: "flex", alignItems: "center", gap: 12, transition: "all 0.25s",
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: cell.accent, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                      <span style={{ fontSize: 14, fontWeight: 700 }}>{cell.title}</span>
                      <div style={{ display: "flex", gap: 6 }}>
                        <span style={{
                          fontSize: 10, color: cell.accent, background: `${cell.accent}18`,
                          padding: "2px 8px", borderRadius: 10, fontWeight: 600,
                        }}>{cell.headcount} personas</span>
                        <span style={{
                          fontSize: 10, color: "#6a7490", background: "rgba(255,255,255,0.05)",
                          padding: "2px 8px", borderRadius: 10,
                        }}>{cell.roles.length} roles</span>
                      </div>
                    </div>
                    <div style={{ fontSize: 11, color: "#6a7490", marginTop: 3 }}>{cell.scope}</div>
                  </div>
                  <span style={{
                    fontSize: 14, transition: "transform 0.3s",
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", color: "#3a4460",
                  }}>▶</span>
                </div>

                {isOpen && (
                  <div style={{ padding: "8px 0 8px 18px", borderLeft: `2px solid ${cell.accent}25`, marginLeft: 16 }}>
                    <div style={{
                      fontSize: 11, color: cell.accent, padding: "10px 14px", marginBottom: 10,
                      background: `${cell.accent}08`, borderRadius: 8, lineHeight: 1.6,
                      borderLeft: `3px solid ${cell.accent}55`,
                    }}>
                      <span style={{ fontWeight: 800 }}>¿Por qué esta célula y cuál es su objetivo central?</span>
                      <div style={{ marginTop: 6, color: "#a0a8bc", marginBottom: 8 }}>{cell.justification}</div>
                      {cell.activities && (
                        <div style={{ marginTop: 12, background: "rgba(0,0,0,0.15)", padding: "12px 14px", borderRadius: 8, borderLeft: `2px solid ${cell.accent}44` }}>
                          <div style={{ fontWeight: 700, fontSize: 10, textTransform: "uppercase", letterSpacing: 0.5, color: cell.accent, marginBottom: 8 }}>🎯 Principales Actividades Departamentales:</div>
                          <ul style={{ margin: 0, paddingLeft: 18, color: "#a0a8bc", fontSize: 11, display: "flex", flexDirection: "column", gap: 6 }}>
                            {cell.activities.map((act, idx) => (
                              <li key={idx} style={{ lineHeight: 1.4 }}>{act}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {cell.roles.map((role, ri) => {
                      const roleKey = `${ci}-${ri}`;
                      const roleOpen = expandedRole === roleKey;
                      const typeColors = {
                        Líder: { bg: "#F0A50022", text: "#F0A500" },
                        Especialista: { bg: "#7678ED22", text: "#7678ED" },
                        Operativo: { bg: "#2A9D8F22", text: "#2A9D8F" },
                      };
                      const tc = typeColors[role.type] || typeColors.Operativo;

                      return (
                        <div key={ri} style={{ marginBottom: 6 }}>
                          <div onClick={() => toggleRole(roleKey)} style={{
                            background: roleOpen ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
                            borderRadius: 8, padding: "10px 14px", cursor: "pointer",
                            border: roleOpen ? `1px solid ${cell.accent}33` : "1px solid transparent",
                            transition: "all 0.2s",
                          }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                              <span style={{ fontSize: 13, fontWeight: 600, color: "#d0d4de" }}>{role.title}</span>
                              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                {role.qty && (
                                  <span style={{ fontSize: 9, color: "#6a7490", background: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 6 }}>
                                    ×{role.qty}
                                  </span>
                                )}
                                <span style={{ fontSize: 9, color: tc.text, background: tc.bg, padding: "2px 8px", borderRadius: 8, fontWeight: 600 }}>
                                  {role.type}
                                </span>
                                <span style={{ fontSize: 12, color: "#3a4460", transition: "transform 0.2s", transform: roleOpen ? "rotate(90deg)" : "rotate(0deg)" }}>▶</span>
                              </div>
                            </div>
                          </div>

                          {roleOpen && (
                            <div style={{
                              padding: "14px 16px", marginTop: 2,
                              background: "rgba(255,255,255,0.02)", borderRadius: 8,
                              borderLeft: `3px solid ${cell.accent}44`,
                            }}>
                              <div style={{ fontSize: 12, color: "#b0b8cc", lineHeight: 1.6, marginBottom: 14 }}>
                                {role.description}
                              </div>

                              <div style={{ marginBottom: 14 }}>
                                <div style={{ fontSize: 11, fontWeight: 700, color: cell.accent, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>
                                  Funciones del Puesto
                                </div>
                                {role.functions.map((fn, fi) => (
                                  <div key={fi} style={{
                                    display: "flex", gap: 8, alignItems: "flex-start",
                                    marginBottom: 5, fontSize: 11, color: "#8892b0", lineHeight: 1.5,
                                  }}>
                                    <span style={{
                                      width: 5, height: 5, borderRadius: "50%",
                                      background: cell.accent, flexShrink: 0, marginTop: 5, opacity: 0.6,
                                    }} />
                                    {fn}
                                  </div>
                                ))}
                              </div>

                              <div style={{
                                fontSize: 11, color: "#6a7490", lineHeight: 1.6,
                                padding: "10px 12px", background: "rgba(255,255,255,0.02)",
                                borderRadius: 6, border: "1px solid rgba(255,255,255,0.04)",
                              }}>
                                <span style={{ fontWeight: 600, color: "#8892b0" }}>📋 Perfil requerido: </span>
                                {role.profile}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <div style={{
            marginTop: 16, background: "rgba(255,255,255,0.02)", borderRadius: 12, padding: 16,
            border: "1px solid rgba(255,255,255,0.05)",
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#F0A500", marginBottom: 8 }}>
              Resumen: 8 personas + Tecnología y Transformación Digital
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 6 }}>
              {orgStructure.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: c.accent, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#ccd0da" }}>{c.title}</div>
                    <div style={{ fontSize: 10, color: "#4a5270" }}>{c.headcount} · {c.roles.length} roles</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      
      
            {viewMode === "hierarchy" && (
        <div style={{ maxWidth: 950, margin: "0 auto", padding: "10px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <h2 style={{ fontSize: 18, color: "#7678ED", marginBottom: 4 }}>Jerarquía Mínima Viable y Costo Operativo</h2>
            <p style={{ fontSize: 12, color: "#6a7490", margin: 0 }}>Clic en cada nodo para ver los roles en detalle. Estructura ajustada (8 personas base).</p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 40 }}>
            {/* Root Node */}
            <div style={{
              background: "linear-gradient(135deg, #3D348B, #7678ED)",
              borderRadius: 12, padding: "14px 20px",
              boxShadow: "0 8px 24px rgba(118, 120, 237, 0.2)",
              textAlign: "center", border: "1px solid #7678ED44", zIndex: 2
            }}>
              <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: 0.5 }}>Tecnología y Transformación Digital</div>
              <div style={{ fontSize: 11, opacity: 0.8, marginTop: 4 }}>Estrategia · Alineación de Negocio</div>
            </div>
            
            {/* Line down to children */}
            <div style={{ width: 2, height: 25, background: "#7678ED88" }} />
            
            {/* Horizontal connection line */}
            <div style={{ width: "60%", height: 2, background: "#7678ED88", position: "relative" }}>
              <div style={{ position: "absolute", left: "0%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
              <div style={{ position: "absolute", left: "100%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
            </div>
            
            {/* Children logic mapping into 2 groups */}
            <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: 30, marginTop: 16 }}>
              
              {/* Group 1: Tecnología */}
              <div style={{ position: "relative", border: "2px dashed rgba(91, 192, 190, 0.4)", borderRadius: 16, padding: "16px 12px 28px", display: "flex", gap: 12, flex: 1, maxWidth: 450 }}>
                <div style={{ position: "absolute", bottom: 6, left: 12, fontSize: 11, fontWeight: 700, color: "rgba(91, 192, 190, 0.8)", textTransform: "uppercase" }}>Tecnología</div>
                {[orgStructure[0], orgStructure[1]].map((cell, idx) => {
                  if (!cell) return null;
                  const originalIdx = idx; // 0 or 1
                  const min = parseInt(cell.headcount.replace(/\D.*/g, '')) || 1;
                  const isExpanded = expandedHierarchyNode === originalIdx;
                  return (
                    <div key={originalIdx} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <div onClick={() => toggleHierarchyNode(originalIdx)} style={{
                        background: isExpanded ? `linear-gradient(135deg, ${cell.color}, ${cell.color}cc)` : "rgba(255,255,255,0.03)", 
                        borderRadius: 12, padding: "14px 10px", cursor: "pointer", transition: "all 0.2s",
                        borderTop: `4px solid ${cell.accent}`, textAlign: "center",
                        borderLeft: "1px solid rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.05)",
                        borderBottom: isExpanded ? "none" : "1px solid rgba(255,255,255,0.05)",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: isExpanded ? "auto" : "100%"
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: cell.accent, marginBottom: 12, lineHeight: 1.3 }}>{cell.title}</div>
                        <div>
                            <div style={{ fontSize: 10, color: "#a0a8bc", marginBottom: 3 }}>Plantilla Min.</div>
                            <div style={{ background: `${cell.accent}15`, color: cell.accent, fontSize: 12, fontWeight: 800, padding: "4px 12px", borderRadius: 12, display: "inline-block" }}>
                              {min}
                            </div>
                        </div>
                      </div>
                      {isExpanded && (
                        <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: "0 0 12px 12px", border: `1px solid rgba(255,255,255,0.05)`, borderTop: "none", padding: "12px 10px", marginTop: 0, height: "100%" }}>
                          {cell.roles.map((rol, ri) => (
                            <div key={ri} style={{ fontSize: 11, color: "#ccd0da", marginBottom: 8, lineHeight: 1.3, paddingBottom: 6, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                              <div style={{ color: cell.accent, fontWeight: 700 }}>• {rol.title}</div>
                              <div style={{ opacity: 0.7, fontSize: 10, marginTop: 2, paddingLeft: 10 }}>{rol.type} {(rol.qty && parseInt(rol.qty.replace(/\D.*/g, ''))) ? `(x${parseInt(rol.qty.replace(/\D.*/g, ''))})` : '(x1)'}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Group 2: Sistemas y Desarrollo */}
              <div style={{ position: "relative", border: "2px dashed rgba(240, 165, 0, 0.4)", borderRadius: 16, padding: "16px 12px 28px", display: "flex", gap: 12, flex: 1, maxWidth: 450 }}>
                <div style={{ position: "absolute", bottom: 6, left: 12, fontSize: 11, fontWeight: 700, color: "rgba(240, 165, 0, 0.8)", textTransform: "uppercase" }}>Sistemas y Desarrollo</div>
                {[orgStructure[2], orgStructure[3]].map((cell, idx) => {
                  if (!cell) return null;
                  const originalIdx = idx + 2; // 2 or 3
                  const min = parseInt(cell.headcount.replace(/\D.*/g, '')) || 1;
                  const isExpanded = expandedHierarchyNode === originalIdx;
                  return (
                    <div key={originalIdx} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <div onClick={() => toggleHierarchyNode(originalIdx)} style={{
                        background: isExpanded ? `linear-gradient(135deg, ${cell.color}, ${cell.color}cc)` : "rgba(255,255,255,0.03)", 
                        borderRadius: 12, padding: "14px 10px", cursor: "pointer", transition: "all 0.2s",
                        borderTop: `4px solid ${cell.accent}`, textAlign: "center",
                        borderLeft: "1px solid rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.05)",
                        borderBottom: isExpanded ? "none" : "1px solid rgba(255,255,255,0.05)",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: isExpanded ? "auto" : "100%"
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: cell.accent, marginBottom: 12, lineHeight: 1.3 }}>{cell.title}</div>
                        <div>
                            <div style={{ fontSize: 10, color: "#a0a8bc", marginBottom: 3 }}>Plantilla Min.</div>
                            <div style={{ background: `${cell.accent}15`, color: cell.accent, fontSize: 12, fontWeight: 800, padding: "4px 12px", borderRadius: 12, display: "inline-block" }}>
                              {min}
                            </div>
                        </div>
                      </div>
                      {isExpanded && (
                        <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: "0 0 12px 12px", border: `1px solid rgba(255,255,255,0.05)`, borderTop: "none", padding: "12px 10px", marginTop: 0, height: "100%" }}>
                          {cell.roles.map((rol, ri) => (
                            <div key={ri} style={{ fontSize: 11, color: "#ccd0da", marginBottom: 8, lineHeight: 1.3, paddingBottom: 6, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                              <div style={{ color: cell.accent, fontWeight: 700 }}>• {rol.title}</div>
                              <div style={{ opacity: 0.7, fontSize: 10, marginTop: 2, paddingLeft: 10 }}>{rol.type} {(rol.qty && parseInt(rol.qty.replace(/\D.*/g, ''))) ? `(x${parseInt(rol.qty.replace(/\D.*/g, ''))})` : '(x1)'}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          <div style={{ marginTop: 40, background: "rgba(255,255,255,0.02)", borderRadius: 16, padding: "24px 32px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h3 style={{ margin: "0 0 20px 0", fontSize: 16, color: "#5BC0BE" }}>Tabla de Proyección Salarial (Promedio de Mercado - El Salvador)</h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.05)", color: "#a0a8bc", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    <th style={{ padding: "10px 12px", fontWeight: 600 }}>Área</th>
                    <th style={{ padding: "10px 12px", fontWeight: 600 }}>Puesto / Rol</th>
                    <th style={{ padding: "10px 12px", fontWeight: 600, textAlign: "center" }}>Cantidad Mínima</th>
                    <th style={{ padding: "10px 12px", fontWeight: 600, textAlign: "right" }}>Salario Base Unitario</th>
                    <th style={{ padding: "10px 12px", fontWeight: 600, textAlign: "right" }}>Costo Total / Mes</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    let grandTotal = 0;
                    return orgStructure.map((area, ai) => {
                      return area.roles.map((role, ri) => {
                        let qty = 1;
                        if (role.qty) {
                          qty = parseInt(role.qty.replace(/\D.*/g, '')) || 0;
                        }
                        if (qty === 0) return null;
                        
                        const unitSalary = marketSalaries[role.title] || 1000;
                        const rowTotal = unitSalary * qty;
                        grandTotal += rowTotal;

                        return (
                          <tr key={`${ai}-${ri}`} style={{ borderBottom: "1px solid rgba(255,255,255,0.02)", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.04)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                            <td style={{ padding: "12px", color: area.accent, fontWeight: 600, opacity: ri === 0 ? 1 : 0.6 }}>{area.title}</td>
                            <td style={{ padding: "12px", color: "#e0e0e0" }}>{role.title}</td>
                            <td style={{ padding: "12px", textAlign: "center", fontWeight: 700, color: "#fff" }}>{qty}</td>
                            <td style={{ padding: "12px", textAlign: "right" }}>$ {unitSalary.toLocaleString('en-US')}.00</td>
                            <td style={{ padding: "12px", textAlign: "right", fontWeight: 700, color: "#7678ED" }}>$ {rowTotal.toLocaleString('en-US')}.00</td>
                          </tr>
                        );
                      });
                    }).concat(
                      <tr key="total" style={{ background: "rgba(91, 192, 190, 0.1)", borderTop: "2px solid #5BC0BE" }}>
                        <td colSpan={4} style={{ padding: "16px", textAlign: "right", fontWeight: 800, color: "#5BC0BE", fontSize: 14 }}>Costo Salarial Mínimo Estimado (Plantilla Mensual):</td>
                        <td style={{ padding: "16px", textAlign: "right", fontWeight: 800, color: "#5BC0BE", fontSize: 15 }}>$ {grandTotal.toLocaleString('en-US')}.00</td>
                      </tr>
                    );
                  })()}
                </tbody>
              </table>
            </div>
            <div style={{ fontSize: 10, color: "#6a7490", marginTop: 14, fontStyle: "italic", lineHeight: 1.5 }}>
              * Valores en USD. Los salarios reflejan un estimado del percentil 50 de mercado regional (El Salvador) para roles de TI de esta categoría en industria corporativa. <br/>
              ** Se ha calculado utilizando el headcount <strong>MÍNIMO</strong> requerido descrito en la estructura ajustada a 9 recursos base. Este valor corresponde únicamente a salarios brutos base y NO incluye cargas patronales, aguinaldos, indemnizaciones u otras prestaciones de ley ni cargos gerenciales.
            </div>
          </div>
        </div>
      )}

      {viewMode === "interactive-timeline" && (
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          
          {/* TIMELINE CONTRATACIONES */}
          <div style={{ marginBottom: 30, background: "rgba(255,255,255,0.02)", padding: 24, borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <h2 style={{ fontSize: 18, color: "#5BC0BE", marginBottom: 4 }}>Timeline de Incorporación de Personal</h2>
              <p style={{ fontSize: 12, color: "#6a7490", margin: 0 }}>Desliza sobre los puntos para identificar la fecha y perfil a contratar</p>
            </div>
            <div style={{ position: "relative", height: 16, margin: "25px 0 15px 0" }}>
              {/* Línea base */}
              <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", width: "100%", height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 2 }} />
              
              {/* Hitos */}
              {hiringMilestones.map((hm, i) => {
                const leftPos = (hm.taskIndex / timelineTasks.length) * 100;
                const isHovered = hoveredHireIndex === i;
                return (
                  <div key={i} 
                    onMouseEnter={() => setHoveredHireIndex(i)}
                    onMouseLeave={() => setHoveredHireIndex(null)}
                    style={{ 
                      position: "absolute", left: `${leftPos}%`, top: "50%", transform: "translate(-50%, -50%)", 
                      width: isHovered ? 18 : 12, height: isHovered ? 18 : 12, borderRadius: "50%", 
                      background: hm.color, border: "2px solid #131b2e", cursor: "pointer",
                      transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)", zIndex: isHovered ? 5 : 2,
                      boxShadow: isHovered ? `0 0 14px ${hm.color}88` : "none"
                    }}>
                    {/* Tooltip Hire */}
                    {isHovered && (
                      <div style={{
                        position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)",
                        background: "#1e2538", border: `1px solid ${hm.color}`, padding: "10px 14px",
                        borderRadius: 8, whiteSpace: "nowrap", zIndex: 10,
                        boxShadow: "0 5px 15px rgba(0,0,0,0.5)", pointerEvents: "none", textAlign: "center"
                      }}>
                        <div style={{ fontSize: 12, fontWeight: 800, color: hm.color, marginBottom: 2 }}>{hm.title}</div>
                        <div style={{ fontSize: 10, color: "#fff" }}>Ingreso: Tarea {hm.taskIndex + 1}</div>
                        <div style={{ fontSize: 10, color: "#a0a8bc", marginTop: 2, fontStyle: "italic" }}>{timelineTasks[hm.taskIndex]?.date || "15/04/2026"}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#6a7490", marginTop: 16 }}>
              <span>Inicio Fases (15 Abril)</span>
              <span>Finalización del Roadmap</span>
            </div>
          </div>

          {/* CRONOGRAMA EJECUCION (MAIN BAR) */}
          {/* CRONOGRAMA EJECUCION (GANTT 4 CANALES) */}
          <div style={{ position: "relative", background: "rgba(255,255,255,0.02)", padding: "24px 24px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ textAlign: "center", marginBottom: 30 }}>
              <h2 style={{ fontSize: 18, color: "#7678ED", marginBottom: 4 }}>Cronograma de Ejecución por Área (Gantt)</h2>
              <p style={{ fontSize: 12, color: "#6a7490", margin: 0 }}>Desliza sobre los bloques para identificar actividades o haz clic para seleccionarlas</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 30 }}>
              {[
                { name: "Operaciones e Infraestructura", color: "#0F4C5C", accent: "#5BC0BE" },
                { name: "Sistemas Core Empresariales", color: "#1B3A4B", accent: "#F0A500" },
                { name: "Cloud & Ciberseguridad", color: "#6B2737", accent: "#E63946" },
                { name: "Fábrica de Software", color: "#3D348B", accent: "#7678ED" }
              ].map((areaArea, aIdx) => {
                const totalTimelineDays = Math.max(...timelineTasks.map(t => t.daysOffset + t.duration));
                const tasksInArea = timelineTasks.filter(t => t.mainArea === areaArea.name);
                
                return (
                  <div key={aIdx} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* Header del Canal */}
                    <div style={{ width: 140, flexShrink: 0, textAlign: "right" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: areaArea.accent, lineHeight: 1.2 }}>{areaArea.name}</div>
                    </div>
                    {/* Pista del Canal */}
                    <div style={{ flex: 1, position: "relative", height: 32, background: "rgba(255,255,255,0.03)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)" }}>
                      {tasksInArea.map((t) => {
                        const isSelected = timelineIndex === t.id;
                        const isHovered = hoveredTaskIndex === t.id;
                        const leftPct = (t.daysOffset / totalTimelineDays) * 100;
                        const widthPct = (t.duration / totalTimelineDays) * 100;
                        
                        return (
                          <div
                            key={t.id}
                            onMouseEnter={() => setHoveredTaskIndex(t.id)}
                            onMouseLeave={() => setHoveredTaskIndex(null)}
                            onClick={() => setTimelineIndex(t.id)}
                            style={{
                              position: "absolute",
                              left: `${leftPct}%`,
                              width: `${widthPct}%`,
                              top: 4,
                              height: 24,
                              background: isSelected ? t.phaseAccent : (isHovered ? `${t.phaseAccent}dd` : `${t.phaseAccent}88`),
                              borderRadius: 4,
                              cursor: "pointer",
                              boxShadow: isSelected ? `0 0 10px ${t.phaseAccent}88` : "none",
                              transition: "all 0.2s",
                              border: isSelected ? "1px solid #fff" : "1px solid transparent",
                              zIndex: isHovered || isSelected ? 10 : 1
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Eje de Tiempo (Meses/Periodos aproximados) */}
              <div style={{ display: "flex", marginLeft: 152, marginTop: 10, position: "relative", height: 20 }}>
                {phases.map((p, pIdx) => {
                  const tasksInPhase = timelineTasks.filter(t => t.phaseName === p.name);
                  if (tasksInPhase.length === 0) return null;
                  const startOffset = Math.min(...tasksInPhase.map(t => t.daysOffset));
                  const endOffset = Math.max(...tasksInPhase.map(t => t.daysOffset + t.duration));
                  const totalTimelineDays = Math.max(...timelineTasks.map(t => t.daysOffset + t.duration));
                  const leftPct = (startOffset / totalTimelineDays) * 100;
                  const widthPct = ((endOffset - startOffset) / totalTimelineDays) * 100;
                  
                  return (
                    <div key={pIdx} style={{ position: "absolute", left: `${leftPct}%`, width: `${widthPct}%`, textAlign: "center", borderTop: `2px solid ${p.accent}55`, paddingTop: 4 }}>
                      <span style={{ fontSize: 9, color: p.accent, fontWeight: 700, textTransform: "uppercase" }}>{p.name.split(":")[0]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tooltip Task Flotante */}
            {hoveredTaskIndex !== null && (
              <div style={{
                position: "fixed",
                bottom: 40, 
                right: 40,
                background: "#1e2538", border: `1px solid ${timelineTasks[hoveredTaskIndex].phaseAccent}`,
                padding: "12px 16px", borderRadius: 10, width: 280, zIndex: 100,
                boxShadow: "0 10px 40px rgba(0,0,0,0.8)", pointerEvents: "none"
              }}>
                <div style={{ fontSize: 11, color: timelineTasks[hoveredTaskIndex].phaseAccent, fontWeight: 800, marginBottom: 4 }}>
                  🗓️ {timelineTasks[hoveredTaskIndex].date} · Tarea {timelineTasks[hoveredTaskIndex].id + 1}
                </div>
                <div style={{ fontSize: 13, color: "#fff", lineHeight: 1.4, fontWeight: 500 }}>
                  {timelineTasks[hoveredTaskIndex].task}
                </div>
                <div style={{ fontSize: 10, color: "#a0a8bc", marginTop: 6, padding: "4px 8px", background: "rgba(255,255,255,0.05)", borderRadius: 4, display: "inline-block" }}>
                  📍 {timelineTasks[hoveredTaskIndex].track}
                </div>
              </div>
            )}
            
            {/* Contenido Visual Tarea actual */}
            <div style={{
              background: "rgba(255,255,255,0.02)", borderRadius: 12, padding: 24, minHeight: 250,
              border: `1px solid ${timelineTasks[timelineIndex].phaseAccent}44`,
              position: "relative", boxShadow: `0 8px 30px ${timelineTasks[timelineIndex].phaseAccent}15`,
              transition: "all 0.4s"
            }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ fontSize: 28 }}>{timelineTasks[timelineIndex].phaseIcon}</span>
                <div>
                  <div style={{ fontSize: 12, color: timelineTasks[timelineIndex].phaseAccent, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
                    {timelineTasks[timelineIndex].phaseName}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#e0e0e0", marginTop: 2 }}>
                    🗓️ {timelineTasks[timelineIndex].date} (Tarea {timelineTasks[timelineIndex].id + 1} de {timelineTasks.length})
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 14, display: "flex", gap: 8 }}>
                <div>
                  <div style={{ fontSize: 10, color: "#6a7490", marginBottom: 4 }}>Área Responsable</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,0.04)", padding: "4px 10px", borderRadius: 8, display: "inline-block" }}>
                    {timelineTasks[timelineIndex].mainArea}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "#6a7490", marginBottom: 4 }}>Sub-Área / Hito</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#ccd0da", background: "rgba(255,255,255,0.04)", padding: "4px 10px", borderRadius: 8, display: "inline-block" }}>
                    {timelineTasks[timelineIndex].track}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: "#6a7490", marginBottom: 4 }}>Descripción de la tarea</div>
                <div style={{ fontSize: 15, color: "#fff", lineHeight: 1.5, padding: "0 4px", fontWeight: 500 }}>
                  {timelineTasks[timelineIndex].task}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
                <div style={{ background: "rgba(91, 192, 190, 0.08)", borderLeft: "3px solid #5BC0BE", padding: "12px 14px", borderRadius: "0 8px 8px 0" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#5BC0BE", marginBottom: 4, textTransform: "uppercase" }}>Objetivo</div>
                  <div style={{ fontSize: 11, color: "#a0a8bc", lineHeight: 1.4 }}>{timelineTasks[timelineIndex].objective}</div>
                </div>
                <div style={{ background: "rgba(240, 165, 0, 0.08)", borderLeft: "3px solid #F0A500", padding: "12px 14px", borderRadius: "0 8px 8px 0" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#F0A500", marginBottom: 4, textTransform: "uppercase" }}>Entregable</div>
                  <div style={{ fontSize: 11, color: "#a0a8bc", lineHeight: 1.4 }}>{timelineTasks[timelineIndex].deliverable}</div>
                </div>
              </div>
            </div>

            {/* Controles */}
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 24 }}>
              <button
                onClick={() => setTimelineIndex(prev => Math.max(0, prev - 1))}
                disabled={timelineIndex === 0}
                style={{
                  flex: 1, padding: "14px", borderRadius: 10, fontSize: 14, fontWeight: 600,
                  background: timelineIndex === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.05)",
                  color: timelineIndex === 0 ? "#4a5270" : "#e0e0e0",
                  border: "none", cursor: timelineIndex === 0 ? "not-allowed" : "pointer",
                  transition: "all 0.2s"
                }}
              >
                ◀ Anterior Tarea

              </button>
              <button
                onClick={() => setTimelineIndex(prev => Math.min(timelineTasks.length - 1, prev + 1))}
                disabled={timelineIndex === timelineTasks.length - 1}
                style={{
                  flex: 1, padding: "14px", borderRadius: 10, fontSize: 14, fontWeight: 600,
                  background: timelineTasks[timelineIndex].phaseAccent,
                  color: "#131b2e",
                  border: "none", cursor: timelineIndex === timelineTasks.length - 1 ? "not-allowed" : "pointer",
                  transition: "all 0.2s", boxShadow: `0 4px 15px ${timelineTasks[timelineIndex].phaseAccent}33`
                }}
              >
                Siguiente ▶
              </button>
            </div>
          </div>
        </div>
      )}

      {viewMode === "timeline" && (
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
            {phases.map((p) => (
              <div key={p.id} onClick={() => togglePhase(p.id)} style={{
                flex: 1, height: 5, borderRadius: 3, cursor: "pointer", transition: "all 0.3s",
                background: activePhase === p.id ? p.accent : "rgba(255,255,255,0.08)",
              }} />
            ))}
          </div>
          {phases.map((phase) => {
            const isOpen = activePhase === phase.id;
            const phaseTaskCount = phase.tracks.reduce((s, t) => s + t.tasks.length, 0);
            return (
              <div key={phase.id} style={{ marginBottom: 8 }}>
                <div onClick={() => togglePhase(phase.id)} style={{
                  background: isOpen ? `linear-gradient(135deg, ${phase.color}, ${phase.color}cc)` : "rgba(255,255,255,0.02)",
                  borderRadius: 12, padding: "12px 16px", cursor: "pointer",
                  border: isOpen ? `1px solid ${phase.accent}33` : "1px solid rgba(255,255,255,0.04)",
                  display: "flex", alignItems: "center", gap: 12, transition: "all 0.25s",
                }}>
                  <span style={{ fontSize: 22 }}>{phase.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                      <span style={{ fontSize: 14, fontWeight: 700 }}>{phase.name}</span>
                      <div style={{ display: "flex", gap: 6 }}>
                        <span style={{ fontSize: 10, color: phase.accent, background: `${phase.accent}18`, padding: "2px 8px", borderRadius: 10, fontWeight: 600 }}>{phase.period}</span>
                        <span style={{ fontSize: 10, color: "#6a7490", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: 10 }}>{phaseTaskCount} tareas</span>
                      </div>
                    </div>
                    <div style={{ fontSize: 11, color: "#6a7490", marginTop: 3 }}>{phase.description}</div>
                  </div>
                  <span style={{ fontSize: 14, transition: "transform 0.3s", transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", color: "#3a4460" }}>▶</span>
                </div>
                {isOpen && (
                  <div style={{ padding: "8px 0 8px 18px", borderLeft: `2px solid ${phase.accent}25`, marginLeft: 28 }}>
                    <div style={{ fontSize: 11, color: phase.accent, fontStyle: "italic", padding: "8px 12px", marginBottom: 8, opacity: 0.8, borderLeft: `3px solid ${phase.accent}44` }}>
                      💡 {phase.principle}
                    </div>
                    {phase.tracks.map((track, ti) => {
                      const trackKey = `${phase.id}-${ti}`;
                      const trackOpen = expandedTrack === trackKey;
                      return (
                        <div key={ti} style={{ marginBottom: 6 }}>
                          <div onClick={() => setExpandedTrack(trackOpen ? null : trackKey)} style={{
                            background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "9px 12px", cursor: "pointer",
                            border: trackOpen ? `1px solid ${phase.accent}33` : "1px solid transparent",
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                          }}>
                            <span style={{ fontSize: 12, fontWeight: 600, color: phase.accent }}>{track.area}</span>
                            <span style={{ fontSize: 9, background: `${phase.accent}15`, color: phase.accent, padding: "2px 7px", borderRadius: 8 }}>{track.tasks.length}</span>
                          </div>
                          {trackOpen && (
                            <div style={{ padding: "6px 0 0 12px" }}>
                              {track.tasks.map((task, tki) => (
                                <div key={tki} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6, fontSize: 11, color: "#a0a8bc", lineHeight: 1.5 }}>
                                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: phase.accent, flexShrink: 0, marginTop: 5, opacity: 0.7 }} />
                                  {task}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ marginTop: 20, background: "rgba(255,255,255,0.02)", borderRadius: 12, padding: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#5BC0BE", marginBottom: 10 }}>Resumen del Roadmap</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 6 }}>
              {[["4 fases", "30 días a operación continua"], [`${totalTasks} tareas`, "Por área y prioridad"], ["4 células", "Ops, Cloud, Core, Dev"], ["5 plataformas", "ERP, HIS, Odoo 18, AWS/EKS, Red"], ["3 edificios", "Cuartos de comunicaciones"], ["Stack", "React, Next.js, Node.js, Prisma"]].map(([t, d], i) => (
                <div key={i} style={{ padding: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#ccd0da" }}>{t}</div>
                  <div style={{ fontSize: 10, color: "#4a5270", marginTop: 3 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
          </div>
        )}
      </div>
    </div>
  );
}