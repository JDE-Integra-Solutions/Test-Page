// Fuente única de verdad del contenido del sitio.
// Los endpoints REST de /api exportan estos mismos datos:
// GET /api/services, GET /api/plans, GET /api/plans/[slug].

export interface Service {
  slug: string;
  titulo: string;
  descripcion: string;
  puntos: string[];
}

export interface Plan {
  slug: string;
  nombre: string;
  descripcion: string;
  publico: string;
  entregables: string[];
  tiempo: string;
  modeloCobro: string;
  destacado: boolean;
}

export interface TeamMember {
  rol: string;
  formacion: string;
  foco: string;
  aporte: string;
}

export interface Stat {
  valor: string;
  etiqueta: string;
  contexto: string;
}

export const site = {
  // TODO: reemplazar por los canales reales.
  claim: "Consultoría IT + Industrial para PYMEs",
  ciudad: "Lima, Perú",
  email: "contacto@andinadigital.pe",
  whatsapp: "51900000000",
  // TODO: URL real del blog externo.
  blogUrl: "https://tudominio.pe/blog",
  descripcion:
    "Consultoría de 3 especialistas para medianas y pequeñas empresas: logística e Industria 4.0 ligera, ERP modular por fases y facturación electrónica SUNAT.",
};

export interface Bulletin {
  slug: string;
  tipo: string;
  titulo: string;
  resumen: string;
  fecha: string;
  url: string;
}

export const bulletins: Bulletin[] = [
  {
    slug: "stock-que-no-cuadra",
    tipo: "Caso real",
    titulo: "Cuando el stock no cuadra con lo facturado",
    resumen:
      "Cómo una mecánica de maquinaria pesada unificó ventas y almacén y eliminó sus 3 Excel paralelos.",
    fecha: "2026-09",
    url: "https://tudominio.pe/blog",
  },
  {
    slug: "sunat-sin-multas",
    tipo: "Guía SUNAT",
    titulo: "Facturación electrónica sin multas ni reprocesos",
    resumen:
      "Los 5 errores que vemos en PYMEs al emitir boletas y facturas, y cómo evitarlos desde el día uno.",
    fecha: "2026-08",
    url: "https://tudominio.pe/blog",
  },
  {
    slug: "erp-por-fases",
    tipo: "Método",
    titulo: "ERP por fases: por qué el big-bang fracasa en PYMEs",
    resumen:
      "Empieza por facturación, sigue con stock y recién después IA. El orden importa más que el software.",
    fecha: "2026-08",
    url: "https://tudominio.pe/blog",
  },
  {
    slug: "demanda-repuestos",
    tipo: "IA aplicada",
    titulo: "Predecir la demanda de repuestos con tus propios datos",
    resumen:
      "Sin comprar nada caro: del kardex ordenado a un primer pronóstico útil en semanas.",
    fecha: "2026-07",
    url: "https://tudominio.pe/blog",
  },
  {
    slug: "mantenimiento-preventivo",
    tipo: "Caso real",
    titulo: "Mantenimiento a tiempo en flota y maquinaria",
    resumen:
      "Alertas simples que evitan paradas caras: del cuaderno al tablero compartido.",
    fecha: "2026-07",
    url: "https://tudominio.pe/blog",
  },
];

export const hero = {
  insignia: "Lima · Perú — PYMEs industriales y comerciales",
  titulo: "De Excel a ERP en 3 semanas",
  subtitulo:
    "Controla tu stock, factura sin errores ante SUNAT y toma decisiones con datos. Sin el costo ni la burocracia de una consultora grande.",
};

export const stats: Stat[] = [
  { valor: "99,3 %", etiqueta: "de empresas formales son MIPYME", contexto: "mercado · Perú" },
  { valor: "+2,3 M", etiqueta: "de MIPYMEs necesitan digitalizarse", contexto: "mercado · Perú" },
  { valor: "15–25 %", etiqueta: "de eficiencia con ERP en 2 años", contexto: "mercado · PYMEs" },
  { valor: "3", etiqueta: "planes paquetizados, sin letra chica", contexto: "nosotros" },
];

export const services: Service[] = [
  {
    slug: "consultoria-industrial",
    titulo: "Consultoría industrial",
    descripcion:
      "Diagnóstico logístico y de operaciones para ordenar almacén, compras y producción antes de comprar software.",
    puntos: [
      "Diagnóstico de inventarios y logística en 2 semanas",
      "Estrategia y KPIs de operaciones",
      "Industria 4.0 ligera: trazabilidad y tableros",
    ],
  },
  {
    slug: "software-erp",
    titulo: "Software y ERP modular",
    descripcion:
      "Desarrollo web y módulos de ERP por fases: empiezas con lo urgente y creces sin reescribir todo.",
    puntos: [
      "Módulos de inventario, stock y compras",
      "Aplicaciones web a medida",
      "Migración ordenada desde Excel",
    ],
  },
  {
    slug: "facturacion-sunat",
    titulo: "Facturación electrónica SUNAT",
    descripcion:
      "Emisión de boletas, facturas y notas con la API de SUNAT, con contingencia cuando SUNAT se cae.",
    puntos: [
      "Boletas, facturas y notas de crédito/débito",
      "PDF y envío por correo o WhatsApp",
      "Reportes de ventas y libros electrónicos",
    ],
  },
  {
    slug: "ia-aplicada",
    titulo: "IA aplicada al negocio",
    descripcion:
      "Capa transversal sobre tus datos reales: menos quiebres de stock y mantenimiento a tiempo.",
    puntos: [
      "Predicción de demanda por producto",
      "Alertas de mantenimiento preventivo",
      "Tableros gerenciales con tus KPIs",
    ],
  },
];

export const plans: Plan[] = [
  {
    slug: "facturacion",
    nombre: "Facturación Online",
    descripcion: "Para dejar el facturador suelto y emitir sin errores.",
    publico: "Talleres, comercio y servicios que facturan a diario",
    entregables: [
      "Boletas, facturas y notas vía API SUNAT",
      "Modo contingencia ante caídas de SUNAT",
      "Reportes de ventas día / mes",
      "Capacitación de 2 horas",
    ],
    tiempo: "Instalación en 1 semana",
    modeloCobro: "Instalación + mensualidad de soporte",
    destacado: false,
  },
  {
    slug: "erp-inventario",
    nombre: "ERP Inventario + Stock",
    descripcion: "Facturación conectada al almacén: cada venta descuenta stock.",
    publico: "Mecánica, maquinaria, repuestos y comercio con almacén",
    entregables: [
      "Todo lo del plan Facturación",
      "Kardex, stock mínimo y alertas",
      "Proveedores, compras y cotizaciones",
      "Migración desde tus Excel actuales",
    ],
    tiempo: "Implementación en 2–3 semanas",
    modeloCobro: "Implementación + mensualidad por usuario",
    destacado: true,
  },
  {
    slug: "consultoria-ia",
    nombre: "Consultoría + IA",
    descripcion: "Diagnóstico operativo y tablero con predicción y mantenimiento.",
    publico: "PYMEs que ya controlan stock y quieren escalar",
    entregables: [
      "Diagnóstico logístico de 2 semanas",
      "Tablero de demanda y flujo de caja",
      "Piloto de mantenimiento predictivo",
      "Hoja de ruta de digitalización",
    ],
    tiempo: "Proyecto de 4–6 semanas",
    modeloCobro: "Proyecto cerrado + mantenimiento",
    destacado: false,
  },
];

export const methodSteps = [
  {
    titulo: "Diagnóstico",
    detalle: "2 semanas en tu operación: medimos dolores, datos y Excel actuales.",
  },
  {
    titulo: "Prototipo",
    detalle: "Ves el módulo funcionando con tus datos antes de pagar el total.",
  },
  {
    titulo: "Implementación",
    detalle: "Migración, capacitación y salida a producción por fases.",
  },
  {
    titulo: "Soporte",
    detalle: "Acompañamiento local y mejoras mensuales sobre lo que usas.",
  },
];

export const team: TeamMember[] = [
  {
    rol: "Consultoría industrial",
    formacion: "Estudiante de Ingeniería Industrial",
    foco: "Logística, estrategia e Industria 4.0",
    aporte: "Ordena la operación y define qué digitalizar primero.",
  },
  {
    rol: "Desarrollo de software",
    formacion: "Estudiante de Ingeniería de Software",
    foco: "Web, ERP modular e IA aplicada",
    aporte: "Construye los módulos y los tableros con tus datos.",
  },
  {
    rol: "Sistemas y despliegue",
    formacion: "Técnico en Desarrollo de Sistemas",
    foco: "Infraestructura, integraciones y soporte",
    aporte: "Despliega, integra SUNAT y mantiene todo andando.",
  },
];

export const caseStudy = {
  cliente: "Empresa de venta y servicio de mecánica de maquinaria pesada",
  problema:
    "Stock sin trazabilidad, ventas y almacén desconectados, y facturación separada del inventario.",
  solucion:
    "Sistema de inventario y stock conectado a ventas, más módulo de facturación con API SUNAT y reportes gerenciales.",
  resultados: [
    "Un solo dato de stock para ventas y almacén",
    "Facturación con descuento automático de inventario",
    "Base lista para predicción de demanda de repuestos",
  ],
  stack: ["Next.js", "API SUNAT", "Módulos ERP", "PostgreSQL"],
};
