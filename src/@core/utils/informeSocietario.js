import { obtenerEmpresaActual } from "@core/utils/turboNotas"

export const cargarDatosInformeSocietario = () => {
  const empresa = ref(obtenerEmpresaActual())
  const datosGuardados = JSON.parse(localStorage.getItem('informesocietario'))

  if (datosGuardados) {
    let reporte = datosGuardados
    reporte.entidad = JSON.parse(localStorage.getItem('entidad'))

    reporte.md_orden_del_dia = (reporte.md_orden_del_dia) ? ((typeof reporte.md_orden_del_dia == 'string') ? JSON.parse(reporte.md_orden_del_dia) : reporte.md_orden_del_dia) : []
    reporte.md_acta_junta_general_bloque2 = (reporte.md_acta_junta_general_bloque2) ? ((typeof reporte.md_acta_junta_general_bloque2 == 'string') ? JSON.parse(reporte.md_acta_junta_general_bloque2) : reporte.md_acta_junta_general_bloque2) : []
    reporte.entidad.pais = (reporte && typeof reporte.entidad.pais == 'string') ? JSON.parse(reporte.entidad.pais) : reporte.entidad.pais
    reporte.entidad.accionistas = (reporte && typeof reporte.entidad.accionistas == 'string') ? JSON.parse(reporte.entidad.accionistas) : reporte.entidad.accionistas

    console.log('REPORTE: ', reporte)

    return reporte
  } else {
    return {
      lugaryfechaaprobaciongerente: '',
      lugaryfechaaprobacioncomisario: '',
      lugaryfechaaprobacionacta: '',
      horaaprobacionacta: '',
      horainicioacta: '',
      nombreapellidoscomisario: '',
      nombreapellidosgerente: '',
      nombreapellidospresidente: '',
      nombreapellidossecretario: '',
      direccion: '',
      md_informe_gerente: `
        <p>INFORME DE GERENTE</p>
        <p>INFORME DE GERENTE GENERAL PARA LOS SEÑORES ACCIONISTAS DE {{ nombreempresa }} SOBRE EL EJERCICIO ECONOMICO {{ periodoactual }}</p>
        <p>Señores Accionistas:</p>
        <p>Dando cumplimiento a los requerimientos legales y estatutarios, a continuación presento para vuestro conocimiento, el informe sobre mi administración durante el ejercicio económico {{ periodoactual }}, en mi calidad de Gerente de {{ nombreempresa }}.</p>
        <p>l. Cumplimiento de Objetivos Económicos.</p>
        <p>Concluimos el año {{ periodoactual }}, dando cumplimiento a los objetivos propuestos por ésta administración y replanteando nuevos ajustes administrativos y operativos para el siguiente año.</p>
        <p>2. Cumplimiento de las disposiciones de la Junta General.</p>
        <p>Las instrucciones formales impartidas por la Junta General de Accionistas, cuyos contenidos constan en las actas correspondientes, y las estrategias acordadas en el día a día se han ejecutado en su totalidad.</p>
        <p>3. Hechos extraordinarios producidos durante el ejercicio económico.</p>
        <p>El año {{ periodoactual }}, ha sido un período que se ha tenido que acatar nuevas disposiciones legales con efectos en los aspectos económicos, comerciales y tributarios.</p>
        <p>4. Situación Financiera de la Compañía al cierre del ejercicio, y resultados anuales comparados con el ejercicio precedente.</p>
        <p>En base al análisis del Balance General y el Estado de Pérdidas y Ganancias de la Compañía, correspondientes al ejercicio económico {{ periodoactual }}, han sido los esperados.</p>
        <p>5. Propuesta del destino de los resultados del ejercicios.</p>
        <p>Dejando a salvo el mejor criterio de la Junta General de Accionistas, propongo a los Accionistas de la compañía el destinar los resultados generados durante el ejercicio económico {{ periodoactual }} a la cuenta de “RESULTADOS ACUMULADOS”</p>
        <p>6. Recomendaciones a la Junta General respecto a políticas y estrategias para el siguiente ejercicio económico. Las estrategias sugeridas para {{ nombreempresa }} son:</p>
        <ul>
        <li>a) Mantener estándares de alta calidad.</li>
        <li>b) Replantear objetivos.</li>
        <li>c) Perfeccionar los procesos.</li>
        <li>d) Minimizar costos de operación.</li>
        <li>e) Incrementar las ventas.</li>
        </ul>
        <p>7. Cumplimiento de normas sobre propiedad intelectual y de derechos de autor.</p>
        <p>{{ nombreempresa }}, se encuentra regularizada en lo que tiene que ver con el tema de propiedad intelectual y de derechos de autor, dando regular cumplimiento a las normas que la legislación dispone sobre la materia, por parte de la Compañía y sus Accionistas.</p>
        <p>8. Otros</p>
        <p>Las obligaciones laborales, impositivas a nivel nacional y local, obligaciones tributarias con el Fisco y Municipalidades, así como pagos al Instituto Ecuatoriano de Seguridad Social, etc., se han honrado satisfactoriamente y de forma oportuna, dentro de los plazos establecidos por la ley.</p>
        <p>Esperando que con el esfuerzo de la Administración y del personal que labora para la Empresa, se puedan concretar los objetivos económicos que la Compañía requiere en el siguiente ejercicio económico, una vez más les agradezco la confianza depositada en mi labor.</p>
        <p>{{ lugaryfechaaprobaciongerente }}</p>
        <p>Atentamente,</p><br/>
        <p>{{ nombregerente }}<br>  {{ nombreempresa }}</p>`,
      md_informe_comisario: `
        <p>INFORME DE COMISARIO</p>
        <p>INFORME DEL COMISARIO A LA JUNTA GENERAL DE ACCIONISTAS DE LA COMPAÑÍA {{ nombreempresa }}</p>
        <p>Señores accionistas:</p>
        <p>Después de revisar la correspondencia, los Libros Sociales, el Balance General y el Estado de Pérdidas y Ganancias, al igual que la contabilidad de la Compañía {{ nombreempresa }}., correspondiente al ejercicio económico del año {{ periodoactual }}, en mi calidad de Comisario Principal, informo a ustedes que:</p>
        <li>
        <li>1. Los administradores de la Compañía han dado cumplimiento a las normas legales, estatutarias y reglamentarias, al igual que a las resoluciones de la Junta General, de Accionistas en su gestión durante el ejercicio económico analizado;</li>
    
        <li>2. La correspondencia y los Libros Sociales de la Compañía se conservan de conformidad con las pertinentes disposiciones legales y estatutarias;</li>
    
        <li>3. El Balance General de la Compañía y el Estado de Pérdidas y Ganancias, reflejan la correcta situación de la Compañía, lo cual guarda plena concordancia con los Libros de Contabilidad, que han sido previamente analizados;</li>
    
        <li>4. La contabilidad ha sido llevada de acuerdo a  las Normas Internacionales de Información Financiera y con apego a las correspondientes disposiciones legales;</li>
    
        <li>5. La custodia y conservación de los bienes de la Compañía o de terceros bajo la responsabilidad de la misma son adecuados;</li>
    
        <li>6. Los procedimientos de control interno establecidos han sido cumplidos por todo el personal de la Compañía.</li>
        </ul>
        <p>El presente examen fue realizado en base a las normas de auditoria generalmente aceptadas e incluyó todas las pruebas y procedimientos que las circunstancias ameritaban, dando cumplimiento a lo dispuesto por la Ley de Compañías.</p>
        <p>{{ lugaryfechaaprobacioncomisario }}.</p>
        <p>Atentamente,</p><br/>
        <p>{{ nombrecomisario }}</p>`,
      md_orden_del_dia: [],
      md_acta_junta_general_bloque1: `
        <p>ACTA DE JUNTA GENERAL</p>
        <p>ACTA DE LA JUNTA GENERAL ORDINARIA Y UNIVERSAL DE ACCIONISTAS DE LA COMPAÑÍA “{{ nombreempresa }}”</p>
        <p>En {{ lugaryfechaaprobacionacta }}, siendo las {{ horainicioacta }}, en la {{ direccion }}, se reúnen los accionistas de la compañía “{{ nombreempresa }}”., con el objeto de celebrar una Junta General Ordinaria y Universal de Accionistas.</p>
        <p>Consultada la Junta, ésta por unanimidad decide designar como Presidente Ad Hoc a {{ nombrepresidente }} y como Secretaria Ad hoc a {{ nombresecretario }}. El presidente Ad Hoc solicita a la Secretaria Ad Hoc constate la asistencia de los accionistas.</p>
        <p>La Secretaria Ad Hoc informa, que en esta Junta General Ordinaria y Universal de Accionistas se encuentra presente el 100% de la totalidad del capital suscrito y pagado de la Compañía y con la presencia de todos los accionistas que a continuación se detallan:</p>
        
        <p>El señor {{ nombreaccionista1 }},  debidamente representado por  la  “AQUÍ NOMBRE DEL REPRESENTANTE”, conforme consta del documento que se agrega como habilitante, propietario de cincuenta y nueve mil trescientas veinticinco (59.325) acciones ordinarias y nominativas de un dólar de los Estados Unidos de América (US$ 1,00) de valor nominal cada una pagadas en su totalidad; {{ nombreaccionista2 }}, debidamente representada por la “AQUÍ NOMBRE DEL REPRESENTANTE”, conforme consta del documento que se agrega como habilitante, propietaria de cuatrocientas (400) acciones ordinarias y nominativas de un dólar de los Estados Unidos de América (US$ 1,00) de valor nominal cada una  pagadas en su totalidad.</p>
        
        <p>Encontrándose presentes los accionistas nombrados, que juntos representan el cien por ciento (100%) del capital accionario de esta Compañía, conforme establecen los Artículos 12, 19 y 21 del Reglamento de Juntas Generales de Socios y Accionistas de Compañías, emitido por la Superintendencia de Compañías de la República del Ecuador, y en tal razón acuerdan por unanimidad constituirse en Junta General Ordinaria y Universal de Accionistas, conforme con lo previsto en el Artículo 238 de la Ley de Compañías de la República del Ecuador, los representantes de los accionistas declaran su conformidad de constituir la presente Junta. A continuación, la Secretaria Ad Hoc elabora la Lista de los accionistas asistentes para incorporarla al expediente societario respectivo.</p>
        <p>De inmediato, la Presidenta Ad Hoc declara legalmente instalada la Junta General Ordinaria y Universal de Accionistas y, pone a consideración de los mismos, el siguiente Orden del Día, para su debida aprobación:</p>
        <p>ORDEN DEL DIA:</p>`,

      md_acta_junta_general_bloque2: [],
      md_acta_junta_general_bloque3: `
        <p>Se deja constancia que deben formar parte del expediente de la presente Junta los siguientes documentos:</p>
        <ul>
        <li> Dos ejemplares del Acta de esta Junta;</li>
        <li> Cartas Poder a favor de los representantes de los Accionistas;</li>
        <li> Lista de Asistentes;</li>
        <li> Informe de Gerente;</li>
        <li> Informe de Comisario;</li>
        <li> Cuentas, balances y estados financieros correspondientes al ejercicio económico 2016.</li>
        </ul>
        <p>El Presidente Ad Hoc consulta a la Junta si están de acuerdo con el contenido del Acta la cual es aprobada en forma unánime por todos los accionistas y sin modificaciones.</p>
        <p>La Presidenta Ad Hoc declara concluida la Junta a las {{ horaaprobacionacta }}, procediéndose a la suscripción del Acta de esta Junta, de parte de los accionistas de la Compañía, la Presidenta Ad Hoc y Secretaria Ad Hoc certifican.</p>
        <p>Firman en unanimidad de acto.</p><br/>
        <p>{{ nombrepresidente }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ nombresecretario }}<br/>
           PRESIDENTA AD HOC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECRETARIA AD HOC</p><br/>
        {{ firmasAccionistas }}
        `,


      nombre: empresa.value.nombre,
      ruc: empresa.value.ruc,
      pais: {
        code: "EC",
        dial_code: "+593",
        flag: "",
        language: "",
        tipo: "RUC",
        title: "Ecuador",
        value: 56,
      },
      representanteLegal: '',
      accionistas: '',
      periodoactual: '',
      periodoanterior: '',
      entidad: JSON.parse(localStorage.getItem('entidad')),
    }
  }
}
