import {
  Document,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  WidthType,
  HeadingLevel,
  BorderStyle,
  TextRun,
  AlignmentType, ShadingType,
} from "docx"
import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

export const obtenerEmpresaActual = () => {
  let reporte = JSON.parse(localStorage.getItem('reportData'))

  return reporte.empresareporteifluc
}

export const cargarDatos = () => {
  const empresa = obtenerEmpresaActual()
  let datosGuardados = JSON.parse(localStorage.getItem('entidad'))
  if (datosGuardados) {
    let reporte = datosGuardados
    reporte.pais = (reporte && typeof reporte.pais == 'string') ? JSON.parse(reporte.pais) : reporte.pais
    reporte.accionistas = (reporte && typeof reporte.accionistas == 'string') ? JSON.parse(reporte.accionistas) : reporte.accionistas

    return reporte
  } else {
    // Retorna los valores predeterminados si no hay nada en localStorage
    return {
      nombre: empresa.nombre,
      ruc: empresa.ruc,
      pais: {
        code: "EC",
        dial_code: "+593",
        flag: "",
        language: "",
        tipo: "RUC",
        title: "Ecuador",
        value: 56,
      },
      domicilio: '',
      formaLegal: '',
      representanteLegal: 'Representante',
      descripcionEmpresa: `<p>{{ nombreempresa }}, cuenta con personería jurídica, patrimonio y autonomía administrativa y operativa propia. La Compañía tiene una estructura de tipo funcional, contando con áreas operativas - funcionales interrelacionadas. </p>`,
      descripcionRepresentanteLegal: `<p>{{ gerente_name }}, quién representa a la Compañía, está facultado para dirigir y administrar los negocios sociales, celebrar y ejecutar a nombre de la Compañía y representar a ésta en toda clase de actos y contratos, mantener el cuidado de los bienes y fondos de la Compañía, suscribir y firmar a nombre de la Compañía todas las escrituras públicas e instrumentos privados en los que consten actos y contratos que celebre la compañía entre otros. </p>`,
      estructuraOrganizacional: `<p>{{ nombreempresa }}, cuenta con personería jurídica, patrimonio y autonomía administrativa y operativa propia. La Compañía tiene una estructura de tipo funcional, contando con áreas operativas - funcionales interrelacionadas. </p>`,
      fechaJunta: '',
      tasaimpuesto: '',
      lineanegocio: `<p>{{ nombreempresa }}, tiene como línea de negocio:</p>
                    <ul>
                    <li>1. </li>
                    <li>2. </li>
                    <li>3. </li>
                    </ul> `,
      accionistas: [],
      periodoactual: 2023,
      periodoanterior: 2022,
      md_policies_accounting: `
        <p>Una descripción de las principales políticas contables adoptadas en la preparación de  sus estados financieros se presenta a continuación:</p>
        <p>1.1. Período contable.</p>
        <p>* Los Estados de Situación Financiera clasificados al 31 de diciembre de {{ periodoactual }}, incluyen saldos contables con base en Normas Internacionales de Información Financiera (NIIF para PYMES).</p>
        <p>* Los Estados de Resultados por Función reflejan los movimientos acumulados 31 de diciembre de {{ periodoactual }}, con base en Normas internacionales de Información Financiera (NIIF para PYMES).</p>
        <p>* Los Estados de Cambios en el Patrimonio Neto reflejan los movimientos ocurridos entre el 31 de diciembre del {{ periodoactual }} y el 31 de diciembre del {{ periodoanterior }}, con base EN Normas Internacionales de Información Financiera (NIIF para PYMES).</p>
        <p>* Los Estados de Flujo de Efectivo - Método Directo reflejan los movimientos ocurridos entre el 31 de diciembre del {{ periodoanterior }}  y el 31 de diciembre del {{ periodoactual }} con base en Normas Internacionales de Información Financiera (NIIF para PYMES).</p>
         <p>1.2. Bases de preparación.</p>
        <p>El juego completo de estados financieros de {{ nombreempresa }}, han sido preparados de acuerdo con Normas Internacionales de Información Financiera para pequeñas y medianas entidades (NIIF para PYMES), y considerando en el caso de ser necesario, las NIIF COMPLETAS emitidas por el internacional Accounting Standards Board (IASB), así como los requerimientos y opciones informadas por la Superintendencia de Compañías del Ecuador.</p>
        <p>La preparación de los estados financieros conforme a las NIIF para PYMES, requiere el uso de ciertas estimaciones contables críticas. También exige a la Administración que ejerza su juicio en el proceso de aplicación de las políticas contables.</p>
        <p>La Administración de la Compañía declara que las NIIF para PYMES han sido aplicadas integralmente y sin reservas en la preparación del presente juego de estados financieros.</p>
         <p>1.3. Moneda funcional y su presentación.</p>
        <p>Las cifras incluidas en estos estados financieros y en sus notas se valoran utilizando la moneda del entorno económico principal en que la Compañía opera. La moneda funcional y de presentación de {{ nombreempresa }}, es el Dólar de los Estados Unidos de América.</p>
         <p>1.4. Clasificación de saldos en corrientes y no corrientes.</p>
        <p>En el Estado de Situación Financiera Clasificado, los saldos se clasifican en función de sus vencimientos, como corriente con vencimiento igual o inferior a doce meses, contados desde la fecha de cierre de los estados financieros y como no corriente, los mayores a ese período.</p>
         <p>1.5. Efectivo y equivalentes de efectivo.</p>
        <p>La Compañía considera como efectivo y equivalente al efectivo a los saldos en caja y bancos sin restricciones y todas las inversiones financieras de fácil liquidación pactadas a un máximo de noventa días, incluyendo depósitos a plazo. En el Estado de Situación Financiera Clasificado los sobregiros, de existir, se clasifican como obligaciones con instituciones financieras en el “Pasivo corriente”.</p>
         <p>1.6. Activos financieros.</p>
        <p>Los activos financieros son clasificados en las siguientes categorías: préstamos y partidas por cobrar y su correspondiente pérdida por deterioro. La Compañía ha definido y valoriza sus activos financieros de la siguiente forma:</p>
        <p>1.6.1. Préstamos y partidas por cobrar.</p>
        <p>Los préstamos y partidas por cobrar, incluyen principalmente a cuentas por cobrar clientes relacionados y no relacionados.</p>
        <p>Las otras cuentas por cobrar clientes relacionados y no relacionados son valorizadas a valor nominal.</p>
        <p>Ambos grupos de cuentas corresponden a activos financieros no derivados con pagos fijos o determinables que no son cotizados en un mercado activo. Se incluyen en activos corrientes, excepto para vencimientos superiores a 12 meses desde de la fecha del balance que se clasifican como activos no corrientes.</p>
        <p>1.6.2. Deterioro de cuentas incobrables.</p>
        <p>Las pérdidas por deterioro relacionadas a cuentas incobrables se registran como gastos en el estado de resultados integrales por función, la determinación de este deterioro se lo registra en base a disposiciones legales y tributarias vigentes.</p>
        <p>En el caso de los activos financieros valorizados al costo amortizado, la pérdida por deterioro corresponde a las diferencias entre el valor en libros del activo y el valor presente de los flujos futuros de efectivo estimados descontados a la tasa de interés original del activo financiero.</p>
        <p>El criterio que utiliza la Compañía para determinar si existe evidencia objetiva de una pérdida por deterioro incluye:</p>
        <ul>
        <li>- Dificultad financiera significativa del emisor u obligado</li>
        <li>- Incumplimiento del contrato, como el incumplimiento de pagos o mora en el pago del principal</li>
        <li>- Es probable que el prestatario entrará en la bancarrota u otras reorganizaciones financieras</li>
        <li>- La desaparición de un mercado activo para ese activo financiero debido a dificultades financieras o</li>
        <li>- Información disponible que indica que hay una reducción medible en los flujos de efectivo estimados de una cartera de activos financieros desde su reconocimiento inicial, aunque la reducción aún no se pueda identificar con los activos financieros individuales en la cartera.</li>
        </ul>
         <p>1.7. Servicios y otros pagos anticipados.</p>
        <p>Corresponden principalmente a seguros pagados por anticipado y otros anticipos entregados a terceros para servicios o compra de bienes, los cuales se encuentran valorizados a su valor nominal y no cuentan con derivados implícitos significativos que generen la necesidad de presentarlos por separado.</p>
        <p>Los seguros pagados por anticipado son amortizados mensualmente considerando el período para el cual generan beneficios económicos futuros.</p>
         <p>1.8. Activos por impuestos corrientes.</p>
        <p>Corresponden principalmente a: anticipos de impuesto a la renta, crédito tributario (IVA) y retenciones en la fuente, los cuales se encuentran valorizados a su valor nominal y no cuentan con derivados implícitos significativos que generen la necesidad de presentarlos por separado.</p>
        <p>Las pérdidas por deterioro de impuestos a no recuperar se registran como gastos en el estado de resultados integrales por función, en base al análisis de recuperación o compensación de cada una de las cuentas por cobrar.</p>
         <p>1.9. Cuentas por pagar comerciales y otras cuentas por pagar.</p>
        <p>Las cuentas por pagar comerciales y otras cuentas por pagar corrientes se reconocen a su valor nominal, ya que su plazo medio de pago es reducido y no existe diferencia material con su valor razonable, además que a un porcentaje importante de las compras realizadas, son pagadas de forma anticipada a sus proveedores.</p>
        <p>Las cuentas por pagar comerciales incluyen aquellas obligaciones de pago con proveedores locales y del exterior de bienes y servicios adquiridos en el curso normal de negocio.</p>
        <p>Las otras cuentas por pagar corresponden principalmente a cuentas por pagar propias del giro del negocio, tales como: anticipos de clientes, obligaciones patronales y tributarias, que son reconocidas inicial y posteriormente a su valor nominal.</p>
         <p>1.10. Préstamos y otros pasivos financieros.</p>
        <p>Los préstamos y otros pasivos financieros corresponden a las obligaciones con instituciones financieras, las cuales se reconocen inicialmente al valor razonable de la transacción y posteriormente se valoran a su costo amortizado y cualquier diferencia entre los fondos obtenidos (netos de los costos necesarios para su obtención) y el valor de reembolso, se reconoce en el estado de resultados durante el período de vigencia de la deuda de acuerdo con el método de la tasa de interés efectiva, de igual manera corresponden a pasivos financieros no derivados con pagos fijos o determinables que no son cotizados en un mercado activo.</p>
        <p>Estos pasivos financieros son presentados en el estado de situación financiera como corrientes o no corrientes considerando las fechas de vencimiento de sus pagos, es decir, cuando sea inferior a 12 meses (corriente) y mayores a 12 meses (no corriente).</p>
        <p>Baja de activos y pasivos financieros.</p>
        <p>- Activos financieros: Un activo financiero (o, cuando sea aplicable una parte de un activo financiero o una parte de un grupo de activos financieros similares) es dado de baja cuando:</p>
        <p>1. Los derechos de recibir flujos de efectivo del activo han terminado o</p>
        <p>2. La Compañía ha transferido sus derechos a recibir flujos de efectivo del activo o ha asumido una obligación de pagar la totalidad de los flujos de efectivo recibidos inmediatamente a una tercera parte bajo un acuerdo de traspaso (“pass through”) y</p>
        <p>3. La Compañía ha transferido sustancialmente todos los riesgos y beneficios del activo o, de no haber transferido ni retenido sustancialmente todos los riesgos y beneficios del activo, si ha transferido su control.</p>
        <p>- Pasivos financieros: Un pasivo financiero es dado de baja cuando la obligación de pago se termina, se cancela o vence. Cuando un pasivo financiero existente es reemplazado por otro del mismo prestatario en condiciones significativamente diferentes, o las condiciones son modificadas en forma importante, dicho reemplazo o modificación se trata como una baja del pasivo original y el reconocimiento de un nuevo pasivo, reconociéndose a diferencia entre ambos en los resultados del período.</p>
        <p>1.11. Provisiones.</p>
        <p>La Compañía considera que las provisiones se reconocen cuando:</p>
        <ul>
        <li>- La Compañía tiene una obligación futura, ya sea legal o implícita, como resultado de sucesos presentes.</li>
        <li>- Es probable que vaya a ser necesaria una salida de recursos para liquidar la obligación.</li>
        <li>- El importe se ha estimado de forma fiable.</li>
        </ul>
        <p>Las provisiones son evaluadas periódicamente y se cuantifican teniendo en consideración la mejor información disponible a la fecha de cada cierre de los estados financieros.</p>
         <p>1.12. Beneficios a los empleados.</p>
        <p>Los importes de beneficios a empleados a largo plazo y post empleo serán estimados por un perito independiente, inscrito y calificados en la Superintendencia de Compañías cuando la administración considere oportuno.</p>
         <p>1.13. Impuesto a las ganancias e impuestos diferidos.</p>
        <p>El gasto por impuesto a la renta del período comprende al impuesto a la renta corriente y al impuesto diferido, las tasas de impuesto a las ganancias para el año {{ periodoactual }} ascienden a {{ impuestos }}.</p>
        <p>El gasto por impuesto a la renta corriente se determina sobre la base imponible y se calcula de acuerdo con las disposiciones legales y tributarias vigentes para cada período contable.</p>
        <p>Los activos y pasivos por impuesto diferido, para el ejercicio actual son medidos al monto que se estima recuperar o pagar a las autoridades tributarias. Las tasas impositivas y regulaciones fiscales empleadas en el cálculo de dichos importes son las que están vigentes a la fecha de cierre de cada ejercicio, siendo de un {{ tasaimpuestos }} para los años {{ periodoactual }}.</p>
        <p>La Compañía registra los impuestos diferidos sobre la base de las diferencias temporales imponibles o deducibles que existen entre la base tributaria de activos y pasivos y su base financiera.</p>
        <p>El resultado por impuesto a las ganancias se determina por la provisión de impuestos a las ganancias del ejercicio, más la variación de los activos y pasivos por impuestos diferidos.</p>
        <p>En cada cierre contable se revisan los impuestos registrados tanto activos como pasivos con el objeto de comprobar que se mantienen vigentes, efectuándose las oportunas correcciones a los mismos de acuerdo con el resultado del citado análisis.</p>
         <p>1.14. Capital suscrito.</p>
        <p>Las participaciones se registran a su valor nominal y se clasifican como patrimonio neto.</p>
         <p>1.15. Ingresos de actividades ordinarias.</p>
        <p>Se reconocerá ingresos de actividades ordinarias procedentes de la venta de bienes cuando se satisfagan todas y cada una de las siguientes condiciones:</p>
        <ul>
        <li>- La entidad ha transferido al comprador los riesgos y ventajas, de tipo significativo, derivados de la propiedad de los bienes</li>
        <li>- La entidad no conserva para sí ninguna implicación en la gestión corriente de los bienes vendidos, en el grado usualmente asociado con la propiedad, ni retiene el control efectivo sobre los mismos</li>
        <li>- El importe de los ingresos de actividades ordinarias pueda medirse con fiabilidad</li>
        <li>- Sea probable que la entidad obtenga los beneficios económicos asociados con la transacción y</li>
        <li>- los costos incurridos, o por incurrir, en relación con la transacción pueden ser medidos con fiabilidad.</li>
        </ul>
        <p>Cuando el resultado de una transacción que involucre la prestación de servicios pueda ser estimado con fiabilidad, una entidad reconocerá los ingresos de actividades ordinarias asociados con la transacción, por referencia al grado de terminación de la transacción al final del periodo sobre el que se informa (a veces conocido como el método del porcentaje de terminación). El resultado de una transacción puede ser estimado con fiabilidad cuando se cumplen todas y cada una de las siguientes condiciones:</p>
        <ul>
        <li>- el importe de los ingresos de actividades ordinarias pueda medirse con fiabilidad</li>
        <li>- sea probable que la entidad reciba los beneficios económicos asociados con la transacción</li>
        <li>- el grado de realización de la transacción, al final del periodo sobre el que se informa, pueda ser medido con fiabilidad y</li>
        <li>- los costos incurridos en la transacción, y los costos para completarla, puedan medirse con fiabilidad.</li>
        </ul>
        <p>Los ingresos por actividades ordinarias se presentan netos de devoluciones, rebajas y descuentos.</p>
         <p>1.16. Costo de ventas.</p>
        <p>El costo de venta incluye todos aquellos costos relacionados con la venta del software de administración de la planificación de proyectos.</p>
         <p>1.17. Gastos de administración y ventas.</p>
        <p>Los gastos de administración y ventas corresponden principalmente a las erogaciones relacionadas con: remuneraciones del personal, pago de servicios básicos, publicidad, depreciación de equipos y otros gastos generales asociados a la actividad administrativa y de ventas de la Compañía.</p>
         <p>1.18. Medio ambiente.</p>
        <p>La actividad de la Compañía no se encuentra dentro de las que pudieren afectar el medio ambiente, por lo tanto, a la fecha de cierre de los presentes estados financieros no tiene comprometidos recursos ni se han efectuado pagos derivados de incumplimiento de ordenanzas municipales u otros organismos fiscalizadores.</p>
         <p>1.19. Estado de Flujos de Efectivo.</p>
        <p>Bajo flujos originados por actividades de la operación, se incluyen todos aquellos flujos de efectivo relacionados con el giro del negocio, incluyendo además los intereses pagados, los ingresos financieros y en general, todos aquellos flujos que no están definidos como de inversión o financiamiento. Cabe destacar que el concepto operacional utilizado en este estado, es más amplio que el considerado en el estado de resultados.</p>
      `,
      md_gestion_riesgos: `
        <p>2.1. Factores de riesgo.</p>
        <p>La Gerencia General y Gerencia Administrativa y Financiera de la Compañía son las responsables de monitorear periódicamente los factores de riesgo más relevantes de {{ nombreempresa }}, en base a una metodología de evaluación continua. La Compañía administra una serie de procedimientos y políticas desarrolladas para disminuir su exposición al riesgo frente a variaciones de inflación.</p>
        <p>2.2. Riesgo financiero.</p>
        <p>2.2.1 Riesgo operacional.</p>
        <p>El riesgo operacional que administra {{ nombreempresa }}, gira en torno a la fijación de precios.</p>
        <p>2.2.2 Riesgo de liquidez.</p>
        <p>El riesgo de liquidez de {{ nombreempresa }}, es administrado mediante una adecuada gestión de los activos y pasivos, optimizando de esta forma los excedentes de caja y de esta manera asegurar el cumplimiento de los compromisos de deudas al momento de su vencimiento.</p>
        <p>{{ nombreempresa }}, realiza periódicamente proyecciones de flujo de caja, análisis de la situación financiera, el entorno económico con el propósito de obtener los recursos de liquidez necesarios para que la empresa cumpla con sus obligaciones.</p>
        <p>2.2.3 Riesgo de inflación.</p>
        <p>El riesgo de inflación proviene del proceso de la elevación continuada de los precios con un descenso discontinuado del valor del dinero. El dinero pierde valor cuando con él no se puede comprar la misma cantidad de inventarios o activos fijos que anteriormente se compraba.</p>
        <p>De acuerdo al Banco Central del Ecuador la inflación acumulada para cada año fue la siguiente:</p>
        <ul>
        <li>- Año 2023 1,35%</li>
        <li>- Año 2022 2.56%</li>
        <li>- Año 2021 1.94%</li>
        <li>- Año 2020 -0.90%.</li>
        <li>- Año 2019 -0.07%.</li>
        <li>- Año 2018 0.27%.</li>
        <li>- Año 2017 -0.20%.</li>
        <li>- Año 2016 1.12%.</li>
        <li>- Año 2015 3.38%.</li>
        <li>- Año 2014 3.67%.</li>
        <li>- Año 2013 2.70%.</li>
        <li>- Año 2012 4.16%.</li>
        </ul>
        <p>2.3. Riesgo crediticio.</p>
        <p>El riesgo de crédito es el riesgo de que una contraparte no pueda cumplir con sus obligaciones en relación con un instrumento financiero o contrato de venta, generando una pérdida financiera. La Compañía está expuesta a un riesgo de crédito por sus actividades operativas.</p>
        <p>El riesgo de crédito surge del efectivo y equivalentes de efectivo, depósitos en bancos e instituciones financieras, así como la exposición al crédito de clientes, que incluyen a los saldos pendientes de las cuentas por cobrar y a las transacciones comprometidas.</p>
        <p>Los principales activos financieros de {{ nombreempresa }}, son los saldos de caja y efectivo, deudores comerciales y otras cuentas por cobrar, e inversiones, que representan la exposición máxima de la Compañía al riesgo de crédito en relación con los activos financieros.</p>
        <p>El riesgo del crédito de la Compañía es atribuible principalmente a sus deudas comerciales. Los importes se reflejan en el balance de situación netos de provisiones para insolvencias, estimadas por la Administración de la Compañía en función de la experiencia de ejercicios anteriores y su valoración del entorno económico actual</p>
        <p>2.4. Riesgo de tasa de interés.</p>
        <p>El principal objetivo en la gestión de riesgo de la tasa de interés es obtener un equilibrio a la estructura de financiamiento, lo cual, permite a {{ nombreempresa }}, minimizar el costo de la deuda con una volatilidad reducida en el estado de resultados. Este descenso en las tasas de interés se debe una política de gobierno, que mediante decretos presidenciales organizo el manejo y la fijación de las tasas.</p>
        <p>Sección 4:  ESTIMACIONES Y JUICIOS O CRITERIOS CRÍTICOS DE LA ADMINISTRACIÓN</p>
        <p>Las estimaciones y criterios usados son continuamente evaluados y se basan en la experiencia histórica y otros factores, incluyendo la expectativa de ocurrencia de eventos futuros que se consideran razonables de acuerdo a las circunstancias.</p>
        <p>La Compañía efectúa estimaciones y supuestos respecto del futuro. Las estimaciones contables resultantes, por definición, muy pocas veces serán iguales a los resultados reales. Las estimaciones y supuestos efectuados por la Administración se presentan a continuación:</p>
        <p>3.1. Vidas útiles y de deterioro de activos.</p>
        <p>La Administración es quien determina las vidas útiles estimadas y los correspondientes cargos por depreciación para su propiedades, planta y equipos, ésta estimación se basa en los ciclos de vida de los activos en función del uso esperado por la Compañía, considerando como base depreciable al valor resultante entre el costo de adquisición del bien menos su valor de recuperación estimado.</p>
        <p>Adicionalmente, de acuerdo a lo dispuesto por la Sección 27 “Deterioro de valor de activos”, la Compañía evalúa al cierre de cada ejercicio anual o antes, si existe algún indicio de deterioro, el valor recuperable de los activos de largo plazo, para comprobar si hay pérdida de deterioro en el valor de los activos.</p>
        <p>3.2. Estimación de valores razonables de existencias para consumo.</p>
        <p>Las existencias a ser consumidas o utilizadas en la prestación de servicios se valorizan al costo.</p>
        <p>Los costos de las existencias incluye todos los costos derivados de la compra y otros costos incurridos en dicho proceso, los cuales son considerados como costo de ventas.</p>
        <p>Todos los costos indirectos de Administración que no hayan contribuido a dar a la existencia su condición y ubicación actual como los costos de comercialización son reconocidos como gastos en el período en que se incurra.</p>
        <p>3.3. Otras estimaciones.</p>
        <p>La Compañía ha utilizado estimaciones para valorar y registrar algunos de los activos, pasivos, ingresos, gastos y compromisos. Básicamente estas estimaciones se refieren a:</p>
        <ul>
        <li>- La evaluación de posibles pérdidas por deterioro de determinados activos.</li>
        <li>- La vida útil de los activos materiales e intangibles.</li>
        <li>- Los criterios empleados en la valoración de determinados activos.</li>
        <li>- La necesidad de constituir provisiones y, en el caso de ser requeridas, el valor de las mismas.</li>
        <li>- La recuperabilidad de los activos por impuestos diferidos.</li>
        <li>- Valor actuarial de indemnizaciones por años de servicio.</li>
        </ul>
        <p>La determinación de estas estimaciones está basada en la mejor estimación de los desembolsos que será necesario pagar por la correspondiente obligación, tomando en consideración toda la información disponible a la fecha del período, incluyendo la opinión de expertos independientes tales como asesores legales y consultores.</p>
        <p>En el caso que las estimaciones deban ser modificadas por cambios del entorno económico y financiero de las mismas, dichas modificaciones afectarán al período contable en el que se generen, y su registro contable se lo realizaría de forma prospectiva.</p>
      `,
      md_estimaciones_juicios_administracion: `
        <p>Las estimaciones y criterios usados son continuamente evaluados y se basan en la experiencia histórica y otros factores, incluyendo la expectativa de ocurrencia de eventos futuros que se consideran razonables de acuerdo a las circunstancias.</p>
        <p>La Compañía efectúa estimaciones y supuestos respecto del futuro. Las estimaciones contables resultantes, por definición, muy pocas veces serán iguales a los resultados reales. Las estimaciones y supuestos efectuados por la Administración se presentan a continuación:</p>
        <p>3.1. Vidas útiles y de deterioro de activos.</p>
        <p>La Administración es quien determina las vidas útiles estimadas y los correspondientes cargos por depreciación para sus propiedades, planta y equipos, ésta estimación se basa en los ciclos de vida de los activos en función del uso esperado por la Compañía, considerando como base depreciable al valor resultante entre el costo de adquisición del bien menos su valor de recuperación estimado.</p>
        <p>Adicionalmente, de acuerdo a lo dispuesto por la Sección 27 “Deterioro de valor de activos”, la Compañía evalúa al cierre de cada ejercicio anual o antes, si existe algún indicio de deterioro, el valor recuperable de los activos de largo plazo, para comprobar si hay pérdida de deterioro en el valor de los activos.</p>
        <p>3.2. Estimación de valores razonables de existencias para consumo.</p>
        <p>Las existencias a ser consumidas o utilizadas en la prestación de servicios se valorizan al costo.</p>
        <p>Los costos de las existencias incluye todos los costos derivados de la compra y otros costos incurridos en dicho proceso, los cuales son considerados como costo de ventas.</p>
        <p>Todos los costos indirectos de Administración que no hayan contribuido a dar a la existencia su condición y ubicación actual como los costos de comercialización son reconocidos como gastos en el período en que se incurra.</p>
        <p>3.3. Otras estimaciones.</p>
        <p>La Compañía ha utilizado estimaciones para valorar y registrar algunos de los activos, pasivos, ingresos, gastos y compromisos. Básicamente estas estimaciones se refieren a:</p>
        <ul>
        <li>- La evaluación de posibles pérdidas por deterioro de determinados activos.</li>
        <li>- La vida útil de los activos materiales e intangibles.</li>
        <li>- Los criterios empleados en la valoración de determinados activos.</li>
        <li>- La necesidad de constituir provisiones y, en el caso de ser requeridas, el valor de las mismas.</li>
        <li>- La recuperabilidad de los activos por impuestos diferidos.</li>
        <li>- Valor actuarial de indemnizaciones por años de servicio.</li>
        </ul>
        <p>La determinación de estas estimaciones está basada en la mejor estimación de los desembolsos que será necesario pagar por la correspondiente obligación, tomando en consideración toda la información disponible a la fecha del período, incluyendo la opinión de expertos independientes tales como asesores legales y consultores.</p>
        <p>En el caso que las estimaciones deban ser modificadas por cambios del entorno económico y financiero de las mismas, dichas modificaciones afectarán al período contable en el que se generen, y su registro contable se lo realizaría de forma prospectiva.</p>
      `,
      md_sanciones: `
        <p>De la Superintendencia de Compañías.</p>
        <p>No se han aplicado sanciones a {{ nombreempresa }}, a sus Directores o Administradores, emitidas por parte de la Superintendencia de Compañías durante el ejercicio terminado al 31 de diciembre del {{ periodoactual }}.</p>
        <p>De otras autoridades administrativas.</p>
        <p>No se han aplicado sanciones significativas a {{ nombreempresa }}, a sus Directores o Administradores, emitidas por parte de otras autoridades administrativas al 31 de diciembre de {{ periodoactual }}.</p>
        <p>Hechos posteriores a la fecha de balance.</p>
        <p>Con posterioridad al 31 de diciembre de {{ periodoactual }}. y hasta la fecha de emisión de estos estados financieros, no se tiene conocimiento de otros hechos de carácter financiero o de otra índole, que afecten en forma significativa los saldos o interpretación de los mismos.</p>
      `,
    }
  }
}

export const buscarValoresEnCuentas = (periodoactual, periodoanterior, datos) => {
  const datosFiltrados = datos.filter(dato => {
    const codigo = dato.CODIGO
    const claveActual = `${codigo}`
    const claveAnterior = `${codigo}_ant`

    return periodoactual[claveActual] !== "0.00" || periodoanterior[claveAnterior] !== "0.00"
  })

  if (datosFiltrados.length === 0) {
    return []
  }

  return datosFiltrados.map(dato => {
    const codigo = dato.CODIGO
    const claveActual = `esf_${codigo}`
    const claveAnterior = `esf_${codigo}_ant`

    return {
      ...dato,
      PERIODO_ACTUAL: periodoactual[claveActual],
      PERIODO_ANTERIOR: periodoanterior[claveAnterior],
    }
  })
}

export const buscarValoresEnCuentasEri = (periodoactual, periodoanterior, datos) => {
  if (periodoactual && periodoanterior) {
    const datosFiltrados = datos.filter(dato => {
      const codigo =  `eri_${dato.CODIGO}`
      const claveActual = `${codigo}`
      const claveAnterior = `${codigo}_ant`

      return periodoactual[claveActual] !== "0.00" || periodoanterior[claveAnterior] !== "0.00"
    })

    if (datosFiltrados.length === 0) {
      return []
    }

    return datosFiltrados.map(dato => {
      const codigo = `eri_${dato.CODIGO}`
      const claveActual = `${codigo}`
      const claveAnterior = `${codigo}_ant`

      return {
        ...dato,
        PERIODO_ACTUAL: periodoactual[claveActual],
        PERIODO_ANTERIOR: periodoanterior[claveAnterior],
      }
    })
  }
}


export const buscarCuentasYCrearTabla = (objetoDatos, codigos) => {

  if (!Array.isArray(codigos)) {
    throw new TypeError('El argumento "codigos" debe ser un array')
  }

  const cuentasConValor = codigos
    .filter(codigo => objetoDatos['esf_' + codigo.CODIGO] !== "0.00")
    .map(codigo => ({
      CODIGO: codigo.CODIGO,
      CUENTA: codigo.CUENTA,
      SUBCUENTA: codigo.SUBCUENTA,
      PERIODO_ACTUAL: objetoDatos[`esf_${codigo}`],
      PERIODO_ANTERIOR: '',
    }))

  // Filtra los códigos que están presentes en el objeto y tienen un valor diferente de cero
  const cuentasEncontradas = codigos
    .filter(codigo => objetoDatos[`esf_${codigo}`] && objetoDatos[`esf_${codigo}`] !== '0.00')
    .map(codigo => ({
      codigo,
      valor: objetoDatos[`esf_${codigo}`],
    }))

  // Verifica si hay cuentas en el objeto según el criterio dado
  const hayCuentas = cuentasEncontradas.length > 0

  // Crea filas de la tabla con las cuentas encontradas
  const filasTabla = cuentasEncontradas.map(cuenta =>
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph(cuenta.codigo)],
          width: { size: 50, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
          children: [new Paragraph(cuenta.valor)],
          width: { size: 50, type: WidthType.PERCENTAGE },
        }),
      ],
    }),
  )

  const tabla = new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph('Cuenta')],
            width: { size: 50, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [new Paragraph('Valor')],
            width: { size: 50, type: WidthType.PERCENTAGE },
          }),
        ],
      }),

      ...filasTabla,
    ],
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
  })
}

export function crearTabla(datos) {
  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  const filas = [
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              text: "Código",
              size: 16,
              font: { name: "Arial" },
              alignment: AlignmentType.CENTER,
              run: textStyleEncabezado,
            }),
          ],
          width: { size: 1000, type: WidthType.DXA },
          ...encabezadoEstilo("FFFFFF", "E8E8E8"),
        }),
        new TableCell({
          children: [
            new Paragraph({ text: "Cuenta",
              size: 16,
              font: { name: "Arial" },
              alignment: AlignmentType.CENTER,
              run: textStyleEncabezado,
            }),
          ],
          width: { size: 3000, type: WidthType.DXA },
          ...encabezadoEstilo("FFFFFF", "E8E8E8"),
        }),
        new TableCell({
          children: [
            new Paragraph({ text: "Periodo Actual",
              size: 16,
              font: { name: "Arial" },
              alignment: AlignmentType.CENTER,
              run: textStyleEncabezado,
            }),
          ],
          width: { size: 1500, type: WidthType.DXA },
          ...encabezadoEstilo("FFFFFF", "E8E8E8"),
        }),
        new TableCell({
          children: [
            new Paragraph({
              text: "Periodo Anterior",
              size: 16,
              font: { name: "Arial" },
              alignment: AlignmentType.CENTER,
              run: textStyleEncabezado,
            }),
          ],
          width: { size: 1500, type: WidthType.DXA },
          ...encabezadoEstilo("FFFFFF", "E8E8E8"),
        }),
      ],
    }),
    ...(datos ? datos.map(dato => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: dato.CODIGO,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${dato.SUBCUENTA} ${" ".repeat(60)} ${dato.CUENTA} `,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: String(dato.PERIODO_ACTUAL),
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: String(dato.PERIODO_ANTERIOR),
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      })
      : []),
  ]

  return new Table({
    rows: filas,
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    },
  })
}

/************** ACTIVOSS **************/

// BLOQUE 1
export const efectivoyequivalentedeefectivo = () => {
  return [
    {
      "CODIGO": "1010101",
      "CUENTA": "",
      "SUBCUENTA": "CAJA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010102",
      "CUENTA": "",
      "SUBCUENTA": "INSTITUCIONES FINANCIERAS PÚBLICAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010103",
      "CUENTA": "",
      "SUBCUENTA": "INSTITUCIONES FINANCIERAS PRIVADAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10101",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 2
export const activosfinancierosTN = () => {
  return [
    {
      "CODIGO": "1010201",
      "CUENTA": "",
      "SUBCUENTA": "ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010202",
      "CUENTA": "",
      "SUBCUENTA": "ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010203",
      "CUENTA": "",
      "SUBCUENTA": "ACTIVOS FINANCIEROS AL COSTO AMORTIZADO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010204",
      "CUENTA": "",
      "SUBCUENTA": "PROVISIÓN POR DETERIORO DE ACTIVOS FINANCIEROS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010205",
      "CUENTA": "",
      "SUBCUENTA": "DEUDORES COMERCIALES Y OTRAS CUENTAS POR COBRAR NO RELACIONADOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010206",
      "CUENTA": "",
      "SUBCUENTA": "DOCUMENTOS Y CUENTAS POR COBRAR RELACIONADOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010207",
      "CUENTA": "",
      "SUBCUENTA": "PROVISIÓN POR CUENTAS INCOBRABLES Y DETERIORO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10102",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 3
export const perdAcumCuentasIncobrablesAndDeterioroTN = () => {
  return [
    {
      "CODIGO": "1010301",
      "CUENTA": "",
      "SUBCUENTA": "INVENTARIOS DE MATERIA PRIMA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010302",
      "CUENTA": "",
      "SUBCUENTA": "INVENTARIOS DE PRODUCTOS EN PROCESO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010303",
      "CUENTA": "",
      "SUBCUENTA": "INVENTARIOS DE SUMINISTROS O MATERIALES A SER CONSUMIDOS EN EL PROCESO DE PRODUCCION",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010304",
      "CUENTA": "",
      "SUBCUENTA": "INVENTARIOS DE SUMINISTROS O MATERIALES A SER CONSUMIDOS EN LA PRESTACION DEL SERVICIO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010305",
      "CUENTA": "",
      "SUBCUENTA": "INVENTARIOS DE PROD. TERM. Y MERCAD. EN ALMACÉN - PRODUCIDO POR LA COMPAÑÍA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010306",
      "CUENTA": "",
      "SUBCUENTA": "INVENTARIOS DE PROD. TERM. Y MERCAD. EN ALMACÉN - COMPRADO A TERCEROS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010307",
      "CUENTA": "",
      "SUBCUENTA": "MERCADERÍAS EN TRÁNSITO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010308",
      "CUENTA": "",
      "SUBCUENTA": "OBRAS EN CONSTRUCCION",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010309",
      "CUENTA": "",
      "SUBCUENTA": "OBRAS TERMINADAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010310",
      "CUENTA": "",
      "SUBCUENTA": "MATERIALES O BIENES PARA LA CONSTRUCCION",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010311",
      "CUENTA": "",
      "SUBCUENTA": "INVENTARIOS REPUESTOS, HERRAMIENTAS Y ACCESORIOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010312",
      "CUENTA": "",
      "SUBCUENTA": "OTROS INVENTARIOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010313",
      "CUENTA": "",
      "SUBCUENTA": "(-) PROVISIÓN POR VALOR NETO DE REALIZACIÓN Y OTRAS PERDIDAS EN INVENTARIO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10103",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 4
export const perdAcumValorNetoRealizAndOtrasPerdEnInvTN = () => {
  return [
    {
      "CODIGO": "1010401",
      "CUENTA": "",
      "SUBCUENTA": "SEGUROS PAGADOS POR ANTICIPADO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010402",
      "CUENTA": "",
      "SUBCUENTA": "ARRIENDOS PAGADOS POR ANTICIPADO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010403",
      "CUENTA": "",
      "SUBCUENTA": "ANTICIPOS A PROVEEDORES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010404",
      "CUENTA": "",
      "SUBCUENTA": "OTROS ANTICIPOS ENTREGADOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10104",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 5
export const activosPorImpuestosCorrientesTN = () => {
  return [
    {
      "CODIGO": "1010501",
      "CUENTA": "",
      "SUBCUENTA": "CRÉDITO TRIBUTARIO A FAVOR DE LA EMPRESA (IVA)",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010502",
      "CUENTA": "",
      "SUBCUENTA": "CRÉDITO TRIBUTARIO A FAVOR DE LA EMPRESA ( I. R.)",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1010503",
      "CUENTA": "",
      "SUBCUENTA": "ANTICIPO DE IMPUESTO A LA RENTA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10105",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 6
export const activosCorrientesMantVentaAndOperDiscontinuasTN = () => {
  return [
    {
      "CODIGO": "10106",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 7
export const construccionesEnProcesoTN = () => {
  return [
    {
      "CODIGO": "10107",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 8
export const otrosActivosCorrientesTN = () => {
  return [
    {
      "CODIGO": "10108",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 9
export const propiedadesPlantasAndEquiposTN = () => {
  return [
    {
      "CODIGO": "1020101",
      "CUENTA": "",
      "SUBCUENTA": "TERRENOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020102",
      "CUENTA": "",
      "SUBCUENTA": "EDIFICIOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020103",
      "CUENTA": "",
      "SUBCUENTA": "CONSTRUCCIONES EN CURSO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020104",
      "CUENTA": "",
      "SUBCUENTA": "INSTALACIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020105",
      "CUENTA": "",
      "SUBCUENTA": "MUEBLES Y ENSERES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020106",
      "CUENTA": "",
      "SUBCUENTA": "MAQUINARIA Y EQUIPO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020107",
      "CUENTA": "",
      "SUBCUENTA": "NAVES, AEREONAVES, BARCAZAS Y SIMILARES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020108",
      "CUENTA": "",
      "SUBCUENTA": "EQUIPO DE COMPUTACIÓN",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020109",
      "CUENTA": "",
      "SUBCUENTA": "VEHÍCULOS, EQUIPOS DE TRASPORTE Y EQUIPO CAMINERO MÓVIL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020110",
      "CUENTA": "",
      "SUBCUENTA": "OTROS PROPIEDADES, PLANTA Y EQUIPO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020111",
      "CUENTA": "",
      "SUBCUENTA": "REPUESTOS Y HERRAMIENTAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020112",
      "CUENTA": "",
      "SUBCUENTA": "(-) DEPRECIACIÓN ACUMULADA PROPIEDADES, PLANTA Y EQUIPO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020113",
      "CUENTA": "",
      "SUBCUENTA": "(-) DETERIORO ACUMULADO DE PROPIEDADES, PLANTA Y EQUIPO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020114",
      "CUENTA": "",
      "SUBCUENTA": "ACTIVOS DE EXPLORACION Y EXPLOTACION",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10201",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 10
export const propiedadesDeInversionTN = () => {
  return [
    {
      "CODIGO": "1020201",
      "CUENTA": "",
      "SUBCUENTA": "TERRENOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020202",
      "CUENTA": "",
      "SUBCUENTA": "EDIFICIOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020203",
      "CUENTA": "",
      "SUBCUENTA": "(-) DEPRECIACION ACUMULADA DE PROPIEDADES DE INVERSIÓNO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020204",
      "CUENTA": "",
      "SUBCUENTA": "(-) DETERIORO ACUMULADO DE PROPIEDADES DE INVERSIÓN",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10202",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 11
export const activosBiologicosTN = () => {
  return [
    {
      "CODIGO": "1020301",
      "CUENTA": "",
      "SUBCUENTA": "ANIMALES VIVOS EN CRECIMIENTO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020302",
      "CUENTA": "",
      "SUBCUENTA": "ANIMALES VIVOS EN PRODUCCION",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020303",
      "CUENTA": "",
      "SUBCUENTA": "PLANTAS EN CRECIMIENTO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020304",
      "CUENTA": "",
      "SUBCUENTA": "PLANTAS EN PRODUCCION",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020305",
      "CUENTA": "",
      "SUBCUENTA": "PLANTAS EN PRODUCCION",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020306",
      "CUENTA": "",
      "SUBCUENTA": "(-) DETERIORO ACUMULADO DE ACTIVOS BIOLOGÍCOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10203",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 11
export const activoIntagibleTN = () => {
  return [
    {
      "CODIGO": "1020401",
      "CUENTA": "",
      "SUBCUENTA": "PLUSVALÍAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020402",
      "CUENTA": "",
      "SUBCUENTA": "MARCAS, PATENTES, DERECHOS DE LLAVE , CUOTAS PATRIMONIALES Y OTROS SIMILARES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020403",
      "CUENTA": "",
      "SUBCUENTA": "CONCESIONES Y LICENCIAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020404",
      "CUENTA": "",
      "SUBCUENTA": "ACTIVOS DE EXPLORACION Y EXPLOTACION",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020405",
      "CUENTA": "",
      "SUBCUENTA": "(-) AMORTIZACIÓN ACUMULADA DE ACTIVOS INTANGIBLE",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020406",
      "CUENTA": "",
      "SUBCUENTA": "(-) DETERIORO ACUMULADO DE ACTIVO INTANGIBLE",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020407",
      "CUENTA": "",
      "SUBCUENTA": "OTROS INTANGIBLES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10204",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 12
export const activosPorImpuestosDiferidosTN = () => {
  return [
    {
      "CODIGO": "10205",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 13
export const activosFinancierosNoCorrientesTN = () => {
  return [
    {
      "CODIGO": "1020601",
      "CUENTA": "",
      "SUBCUENTA": "ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020602",
      "CUENTA": "",
      "SUBCUENTA": "(-) PROVISION POR DETERIORO DE ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020603",
      "CUENTA": "",
      "SUBCUENTA": "ACTIVOS FINANCIEROS A COSTO AMORTIZADO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020604",
      "CUENTA": "",
      "SUBCUENTA": "(-) PROVISIÓN POR DETERIORO DE ACTIVOS FINANCIEROS A COSTO AMORTIZADO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020605",
      "CUENTA": "",
      "SUBCUENTA": "ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020606",
      "CUENTA": "",
      "SUBCUENTA": "(-)PROVISIÓN POR DETERIORO DE ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10206",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 14
export const derechosDeUsoPorAccionesArrendadosTN = () => {
  return [
    {
      "CODIGO": "1020703",
      "CUENTA": "",
      "SUBCUENTA": "DERECHO DE USO POR ACTIVOS ARRENDADOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020701",
      "CUENTA": "",
      "SUBCUENTA": "(-) DEPRECIACIÓN ACUMULADA DE ACTIVOS PROVENIENTES POR DERECHOS DE USO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020702",
      "CUENTA": "",
      "SUBCUENTA": "(-) DETERIORO ACUMULADO DE ACTIVOS PROVENIENTES POR DERECHOS DE USO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10207",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 15
export const otrosActivosNoCorrientesTN = () => {
  return [
    {
      "CODIGO": "1020801",
      "CUENTA": "",
      "SUBCUENTA": "DERECHOS FIDUCIARIOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020802",
      "CUENTA": "",
      "SUBCUENTA": "DEPÓSITOS EN GARANTÍA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020803",
      "CUENTA": "",
      "SUBCUENTA": "DEPÓSITOS EN GARANTÍA POR OPERACIONES BURSÁTILES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020804",
      "CUENTA": "",
      "SUBCUENTA": "ACCIONES DEL DEPÓSITO CENTRALIZADO DE VALORES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020805",
      "CUENTA": "",
      "SUBCUENTA": "INVERSIONES SUBSIDIARIAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020806",
      "CUENTA": "",
      "SUBCUENTA": "INVERSIONES ASOCIADAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020807",
      "CUENTA": "",
      "SUBCUENTA": "INVERSIONES NEGOCIOS CONJUNTOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020808",
      "CUENTA": "",
      "SUBCUENTA": "OTRAS INVERSIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020809",
      "CUENTA": "",
      "SUBCUENTA": "(-) PROVISIÓN VALUACIÓN DE INVERSIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020810",
      "CUENTA": "",
      "SUBCUENTA": "OTROS ACTIVOS NO CORRIENTES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10208",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 16
export const docAndCuentasPorCobrarNoRelTN = () => {
  return [
    {
      "CODIGO": "1020901",
      "CUENTA": "",
      "SUBCUENTA": "CUENTAS Y DOCUMENTOS A COBRAR A CLIENTES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020902",
      "CUENTA": "",
      "SUBCUENTA": "CUENTAS Y DOCUMENTOS A COBRAR A TERCEROS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1020903",
      "CUENTA": "",
      "SUBCUENTA": "OTRAS CUENTAS POR COBRAR NO RELACIONADAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10209",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 17
export const docAndCuentasPorCobrarRelTN = () => {
  return [
    {
      "CODIGO": "1021001",
      "CUENTA": "",
      "SUBCUENTA": "POR COBRAR A ACCIONISTAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1021002",
      "CUENTA": "",
      "SUBCUENTA": "POR COBRAR A COMPAÑÍAS RELACIONADAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1021003",
      "CUENTA": "",
      "SUBCUENTA": "POR COBRAR A CLIENTES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "1021004",
      "CUENTA": "",
      "SUBCUENTA": "OTRAS CUENTAS POR COBRAR RELACIONADAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "10210",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

/************** PASIVOS **************/

// BLOQUE 18
export const pasivosFinancierToValorRazonableTN = () => {
  return [
    {
      "CODIGO": "20101",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 19
export const pasivosPorContratosDeArrendamientoTN = () => {
  return [
    {
      "CODIGO": "20102",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 20
export const cuentasAndDocumentosPorPagarTN = () => {
  return [
    {
      "CODIGO": "2010301",
      "CUENTA": "",
      "SUBCUENTA": "LOCALES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010302",
      "CUENTA": "",
      "SUBCUENTA": "DEL EXTERIOR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20103",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 21
export const obligacionesConInstitucionesFinancierasTN = () => {
  return [
    {
      "CODIGO": "2010401",
      "CUENTA": "",
      "SUBCUENTA": "LOCALES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010402",
      "CUENTA": "",
      "SUBCUENTA": "DEL EXTERIOR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20104",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 22
export const provisionesTN = () => {
  return [
    {
      "CODIGO": "2010501",
      "CUENTA": "",
      "SUBCUENTA": "LOCALES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010502",
      "CUENTA": "",
      "SUBCUENTA": "DEL EXTERIOR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20105",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 23
export const porcionCorrienteValoresEmitidosTN = () => {
  return [
    {
      "CODIGO": "2010601",
      "CUENTA": "",
      "SUBCUENTA": "OBLIGACIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010602",
      "CUENTA": "",
      "SUBCUENTA": "PAPEL COMERCIAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010603",
      "CUENTA": "",
      "SUBCUENTA": "VALORES DE TITULARIZACIÓN",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010604",
      "CUENTA": "",
      "SUBCUENTA": "OTROS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010605",
      "CUENTA": "",
      "SUBCUENTA": "INTERESES POR PAGAR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20106",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 24
export const otrasObligacionesCorrientesTN = () => {
  return [
    {
      "CODIGO": "2010701",
      "CUENTA": "",
      "SUBCUENTA": "CON LA ADMINISTRACIÓN TRIBUTARIA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010702",
      "CUENTA": "",
      "SUBCUENTA": "IMPUESTO A LA RENTA POR PAGAR DEL EJERCICIO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010703",
      "CUENTA": "",
      "SUBCUENTA": "CON EL IESS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010704",
      "CUENTA": "",
      "SUBCUENTA": "POR BENEFICIOS DE LEY A EMPLEADOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010705",
      "CUENTA": "",
      "SUBCUENTA": "PARTICIPACIÓN TRABAJADORES POR PAGAR DEL EJERCICIO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010706",
      "CUENTA": "",
      "SUBCUENTA": "DIVIDENDOS POR PAGAR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010707",
      "CUENTA": "",
      "SUBCUENTA": "OTROS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20107",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 25
export const cuentasPorPagarRelacionadasTN = () => {
  return [
    {
      "CODIGO": "2010801",
      "CUENTA": "",
      "SUBCUENTA": "LOCALES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2010802",
      "CUENTA": "",
      "SUBCUENTA": "DEL EXTERIOR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20108",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 26
export const otrosPasivosFinancierosTN = () => {
  return [
    {
      "CODIGO": "20109",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 27
export const anticiposTN = () => {
  return [
    {
      "CODIGO": "2011001",
      "CUENTA": "",
      "SUBCUENTA": "ANTICIPOS DE CLIENTES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011002",
      "CUENTA": "",
      "SUBCUENTA": "OTROS ANTICIPOS RECIBIDOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20110",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 28
export const pasivosDirectamenteAsociadosConActivosNoCorrientesTN = () => {
  return [
    {
      "CODIGO": "20111",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 29
export const porcionCorrienteDeProvisionesConActivosNoCorrientesTN = () => {
  return [
    {
      "CODIGO": "2011201",
      "CUENTA": "",
      "SUBCUENTA": "JUBILACION PATRONAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011202",
      "CUENTA": "",
      "SUBCUENTA": "OTROS BENEFICIOS PARA LOS EMPLEADOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20112",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 30
export const otrosPasivosCorrientesTN = () => {
  return [
    {
      "CODIGO": "2011301",
      "CUENTA": "",
      "SUBCUENTA": "COMISIONES POR PAGAR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011302",
      "CUENTA": "",
      "SUBCUENTA": "POR OPERACIONES BURSÁTILES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011303",
      "CUENTA": "",
      "SUBCUENTA": "POR CUSTODIA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011304",
      "CUENTA": "",
      "SUBCUENTA": "POR ADMINISTRACIÓN",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011305",
      "CUENTA": "",
      "SUBCUENTA": "OTRAS COMISIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011306",
      "CUENTA": "",
      "SUBCUENTA": "SANCIONES Y MULTAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011307",
      "CUENTA": "",
      "SUBCUENTA": "INDEMNIZACIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011308",
      "CUENTA": "",
      "SUBCUENTA": "OBLIGACIONES JUDICIALES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011309",
      "CUENTA": "",
      "SUBCUENTA": "ACREEDORES POR INTERMEDIACIÓN",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011310",
      "CUENTA": "",
      "SUBCUENTA": "OBLIGACIÓN POR COMPROMISO DE RECOMPRA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011311",
      "CUENTA": "",
      "SUBCUENTA": "POR CONTRATOS DE UNDERWRITING",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2011312",
      "CUENTA": "",
      "SUBCUENTA": "OTROS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20113",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 31
export const pasivosFinancierosAlCostoAmortizadoTN = () => {
  return [
    {
      "CODIGO": "20114",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 32
export const pasivosPorContratosDeArrendamientoEnPasNoCorrTN = () => {
  return [
    {
      "CODIGO": "20201",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 33
export const otrosPassivosNoCorrientesEnPasNoCorrTN = () => {
  return [
    {
      "CODIGO": "20210",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 34
export const cuentasAndDocumetosPorPagarTN = () => {
  return [
    {
      "CODIGO": "2020201",
      "CUENTA": "",
      "SUBCUENTA": "LOCALES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2020202",
      "CUENTA": "",
      "SUBCUENTA": "DEL EXTERIOR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20202",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 35
export const obligacionesConInstitucionesFinancierasEnPasNoCorrTN = () => {
  return [
    {
      "CODIGO": "2020301",
      "CUENTA": "",
      "SUBCUENTA": "LOCALES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2020302",
      "CUENTA": "",
      "SUBCUENTA": "DEL EXTERIOR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20203",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 36
export const cuentasPorPagarToRelacionadasEnPasNoCorrTN = () => {
  return [
    {
      "CODIGO": "2020401",
      "CUENTA": "",
      "SUBCUENTA": "LOCALES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2020402",
      "CUENTA": "",
      "SUBCUENTA": "DEL EXTERIOR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20204",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 37
export const porcionNoCorrienteValoresEmitidosEnPasNoCorrTN = () => {
  return [
    {
      "CODIGO": "2020501",
      "CUENTA": "",
      "SUBCUENTA": "OBLIGACIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2020502",
      "CUENTA": "",
      "SUBCUENTA": "PAPEL COMERCIAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2020503",
      "CUENTA": "",
      "SUBCUENTA": "VALORES DE TITULARIZACIÓN",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2020504",
      "CUENTA": "",
      "SUBCUENTA": "OTROS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2020505",
      "CUENTA": "",
      "SUBCUENTA": "INTERESES POR PAGAR",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20205",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 38
export const anticiposEnPasNoCorrTN = () => {
  return [
    {
      "CODIGO": "2020601",
      "CUENTA": "",
      "SUBCUENTA": "ANTICIPOS DE CLIENTES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2020602",
      "CUENTA": "",
      "SUBCUENTA": "OTROS ANTICIPOS RECIBIDOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20206",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 39
export const provisionesPorBeneficiosToEmpleadosEnPasNoCorrTN = () => {
  return [
    {
      "CODIGO": "2020701",
      "CUENTA": "",
      "SUBCUENTA": "JUBILACION PATRONAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2020702",
      "CUENTA": "",
      "SUBCUENTA": "OTROS BENEFICIOS NO CORRIENTES PARA LOS EMPLEADOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20207",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 40
export const otrasProvisionesEnPasNoCorrTN = () => {
  return [
    {
      "CODIGO": "20208",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 41
export const pasivosDifeidosEnPasNoCorrTN = () => {
  return [
    {
      "CODIGO": "2020901",
      "CUENTA": "",
      "SUBCUENTA": "INGRESOS DIFERIDOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "2020902",
      "CUENTA": "",
      "SUBCUENTA": "PASIVOS POR IMPUESTOS DIFERIDOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "20209",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

/************** PATRIMONIO **************/

// BLOQUE 42
export const capitalTN = () => {
  return [
    {
      "CODIGO": "30101",
      "CUENTA": "",
      "SUBCUENTA": "CAPITAL SUSCRITO O ASIGNADO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30102",
      "CUENTA": "",
      "SUBCUENTA": "(-) CAPITAL SUSCRITO NO PAGADO, ACCIONES EN TESORERÍA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30103",
      "CUENTA": "",
      "SUBCUENTA": "FONDO PATRIMONIAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30104",
      "CUENTA": "",
      "SUBCUENTA": "PATRIMONIO DE LOS NEGOCIOS FIDUCIARIOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30105",
      "CUENTA": "",
      "SUBCUENTA": "PATRIMONIO DE LOS FONDOS DE INVERSIÓN",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "301",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 43
export const aportesDeSociosOrAccionistasTN = () => {
  return [
    {
      "CODIGO": "302",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 44
export const primaPorEmisionPrimariaDeAccionesTN = () => {
  return [
    {
      "CODIGO": "303",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 45
export const reservasTN = () => {
  return [
    {
      "CODIGO": "30401",
      "CUENTA": "",
      "SUBCUENTA": "RESERVA LEGAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30402",
      "CUENTA": "",
      "SUBCUENTA": "RESERVAS FACULTATIVA Y ESTATUTARIA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "304",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 46
export const otrosResultadosIntegralesTN = () => {
  return [
    {
      "CODIGO": "30501",
      "CUENTA": "",
      "SUBCUENTA": "SUPERAVIT DE ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30502",
      "CUENTA": "",
      "SUBCUENTA": "SUPERAVIT POR REVALUACIÓN DE PROPIEDADES, PLANTA Y EQUIPO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30503",
      "CUENTA": "",
      "SUBCUENTA": "SUPERAVIT POR REVALUACION DE ACTIVOS INTANGIBLES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30504",
      "CUENTA": "",
      "SUBCUENTA": "OTROS SUPERAVIT POR REVALUACION",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "305",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 47
export const resultadosAcumuladosTN = () => {
  return [
    {
      "CODIGO": "30601",
      "CUENTA": "",
      "SUBCUENTA": "GANANCIAS ACUMULADAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30602",
      "CUENTA": "",
      "SUBCUENTA": "(-) PÉRDIDAS ACUMULADAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30603",
      "CUENTA": "",
      "SUBCUENTA": "RESULTADOS ACUMULADOS PROVENIENTES DE LA ADOPCION POR PRIMERA VEZ DE LAS NIIF",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30604",
      "CUENTA": "",
      "SUBCUENTA": "RESERVA DE CAPITAL",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30605",
      "CUENTA": "",
      "SUBCUENTA": "RESERVA POR DONACIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30606",
      "CUENTA": "",
      "SUBCUENTA": "RESERVA POR VALUACIÓN",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30607",
      "CUENTA": "",
      "SUBCUENTA": "SUPERÁVIT POR REVALUACIÓN DE INVERSIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "306",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

// BLOQUE 48
export const resultadosDelEjecicioTN = () => {
  return [
    {
      "CODIGO": "30701",
      "CUENTA": "",
      "SUBCUENTA": "GANANCIA NETA DEL PERIODO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "30702",
      "CUENTA": "",
      "SUBCUENTA": "(-) PÉRDIDA NETA DEL PERIODO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "307",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
  ]
}

/************** ERI **************/

// BLOQUE 49
export const ingresoDeActividadesOrdinariasTN = () => {
  return [
    {
      "CODIGO": "40101",
      "CUENTA": "",
      "SUBCUENTA": "VENTA DE BIENES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "40102",
      "CUENTA": "",
      "SUBCUENTA": "PRESTACION DE SERVICIOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "40103",
      "CUENTA": "",
      "SUBCUENTA": "CONTRATOS DE CONSTRUCCION",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40104",
      "CUENTA": "",
      "SUBCUENTA": "SUBVENCIONES DEL GOBIERNO",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40105",
      "CUENTA": "",
      "SUBCUENTA": "REGALÍAS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40106",
      "CUENTA": "",
      "SUBCUENTA": "INTERESES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40107",
      "CUENTA": "",
      "SUBCUENTA": "DIVIDENDOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40108",
      "CUENTA": "",
      "SUBCUENTA": "GANANCIA POR MEDICION A VALOR RAZONABLE DE ACTIVOS BIOLOGICOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40109",
      "CUENTA": "",
      "SUBCUENTA": "INGRESOS POR COMISIONES, PRESTACIÓN DE SERVICIOS, CUSTODIA, REGISTRO, COMPENSACIÓN Y LIQUIDACIÓN",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40110",
      "CUENTA": "",
      "SUBCUENTA": "INGRESOS FINANCIEROS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40112",
      "CUENTA": "",
      "SUBCUENTA": "(-) DESCUENTO EN VENTAS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40113",
      "CUENTA": "",
      "SUBCUENTA": "(-) DEVOLUCIONES EN VENTAS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40114",
      "CUENTA": "",
      "SUBCUENTA": "(-) BONIFICACIÓN EN PRODUCTO",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40115",
      "CUENTA": "",
      "SUBCUENTA": "(-) OTRAS REBAJAS COMERCIALES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "40116",
      "CUENTA": "",
      "SUBCUENTA": "UTILIDAD EN CAMBIO",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "401",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
  ]
}

// BLOQUE 50
export const otrosIngresoTN = () => {
  return [
    {
      "CODIGO": "40301",
      "CUENTA": "",
      "SUBCUENTA": "GANANCIA EN VENTA DE PROPIEDAD, PLANTA Y EQUIPO",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "40302",
      "CUENTA": "",
      "SUBCUENTA": "GANANCIA EN VENTA DE ACTIVOS BIOLÓGICOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "40303",
      "CUENTA": "",
      "SUBCUENTA": "OTROS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "403",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
  ]
}

// BLOQUE 51
export const costosDeVentasProduccionTN = () => {
  return [
    {
      "CODIGO": "50101",
      "CUENTA": "",
      "SUBCUENTA": "MATERIALES UTILIZADOS O PRODUCTOS VENDIDOS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "50102",
      "CUENTA": "",
      "SUBCUENTA": "(+) MANO DE OBRA DIRECTA",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "50103",
      "CUENTA": "",
      "SUBCUENTA": "(+) MANO DE OBRA INDIRECTA",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "50104",
      "CUENTA": "",
      "SUBCUENTA": "(+) OTROS COSTOS INDIRECTOS DE FABRICACION",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "50105",
      "CUENTA": "",
      "SUBCUENTA": "COSTOS DE CONTRATOS DE CONSTRUCCIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "501",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
  ]
}

// BLOQUE 52
export const gastosDeVentasTN = () => {
  return [
    {
      "CODIGO": "5020101",
      "CUENTA": "",
      "SUBCUENTA": "SUELDOS, SALARIOS Y DEMÁS REMUNERACIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "5020102",
      "CUENTA": "",
      "SUBCUENTA": "APORTES A LA SEGURIDAD SOCIAL (INCLUIDO FONDO DE RESERVA)",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "5020103",
      "CUENTA": "",
      "SUBCUENTA": "BENEFICIOS SOCIALES E INDEMNIZACIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020104",
      "CUENTA": "",
      "SUBCUENTA": "GASTO PLANES DE BENEFICIOS A EMPLEADOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020105",
      "CUENTA": "",
      "SUBCUENTA": "HONORARIOS, COMISIONES Y DIETAS A PERSONAS NATURALES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020106",
      "CUENTA": "",
      "SUBCUENTA": "REMUNERACIONES A OTROS TRABAJADORES AUTÓNOMOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020107",
      "CUENTA": "",
      "SUBCUENTA": "HONORARIOS A EXTRANJEROS POR SERVICIOS OCASIONALES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020108",
      "CUENTA": "",
      "SUBCUENTA": "MANTENIMIENTO Y REPARACIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020109",
      "CUENTA": "",
      "SUBCUENTA": "ARRENDAMIENTO",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020110",
      "CUENTA": "",
      "SUBCUENTA": "COMISIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020111",
      "CUENTA": "",
      "SUBCUENTA": "PROMOCIÓN Y PUBLICIDAD",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020112",
      "CUENTA": "",
      "SUBCUENTA": "COMBUSTIBLES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020113",
      "CUENTA": "",
      "SUBCUENTA": "LUBRICANTES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020114",
      "CUENTA": "",
      "SUBCUENTA": "SEGUROS Y REASEGUROS (PRIMAS Y CESIONES)",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020115",
      "CUENTA": "",
      "SUBCUENTA": "TRANSPORTE",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020116",
      "CUENTA": "",
      "SUBCUENTA": "GASTOS DE GESTIÓN (AGASAJOS A ACCIONISTAS, TRABAJADORES Y CLIENTES)",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020117",
      "CUENTA": "",
      "SUBCUENTA": "GASTOS DE VIAJE",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020118",
      "CUENTA": "",
      "SUBCUENTA": "AGUA, ENERGÍA, LUZ, Y TELECOMUNICACIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020119",
      "CUENTA": "",
      "SUBCUENTA": "NOTARIOS Y REGISTRADORES DE LA PROPIEDAD O MERCANTILES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020120",
      "CUENTA": "",
      "SUBCUENTA": "DEPRECIACIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020121",
      "CUENTA": "",
      "SUBCUENTA": "AMORTIZACIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020122",
      "CUENTA": "",
      "SUBCUENTA": "GASTO DETERIORO",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020123",
      "CUENTA": "",
      "SUBCUENTA": "GASTOS POR CANTIDADES ANORMALES DE UTILIZACION EN EL PROCESO DE PRODUCCIÓN",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020124",
      "CUENTA": "",
      "SUBCUENTA": "GASTO POR REESTRUCTURACION",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020125",
      "CUENTA": "",
      "SUBCUENTA": "VALOR NETO DE REALIZACION DE INVENTARIOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020126",
      "CUENTA": "",
      "SUBCUENTA": "GASTO IMPUESTO A LA RENTA (ACTIVOS Y PASIVOS DIFERIDOS)",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020127",
      "CUENTA": "",
      "SUBCUENTA": "SUMINISTROS Y MATERIALES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020128",
      "CUENTA": "",
      "SUBCUENTA": "OTROS GASTOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "50201",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
  ]
}

// BLOQUE 53
export const gastosAdministrativosTN = () => {
  return [
    {
      "CODIGO": "5020201",
      "CUENTA": "",
      "SUBCUENTA": "SUELDOS, SALARIOS Y DEMÁS REMUNERACIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "5020202",
      "CUENTA": "",
      "SUBCUENTA": "APORTES A LA SEGURIDAD SOCIAL (INCLUIDO FONDO DE RESERVA)",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "5020203",
      "CUENTA": "",
      "SUBCUENTA": "BENEFICIOS SOCIALES E INDEMNIZACIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020204",
      "CUENTA": "",
      "SUBCUENTA": "GASTO PLANES DE BENEFICIOS A EMPLEADOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020205",
      "CUENTA": "",
      "SUBCUENTA": "HONORARIOS, COMISIONES Y DIETAS A PERSONAS NATURALES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020206",
      "CUENTA": "",
      "SUBCUENTA": "REMUNERACIONES A OTROS TRABAJADORES AUTÓNOMOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020207",
      "CUENTA": "",
      "SUBCUENTA": "HONORARIOS A EXTRANJEROS POR SERVICIOS OCASIONALES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020208",
      "CUENTA": "",
      "SUBCUENTA": "MANTENIMIENTO Y REPARACIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020209",
      "CUENTA": "",
      "SUBCUENTA": "ARRENDAMIENTO",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020210",
      "CUENTA": "",
      "SUBCUENTA": "COMISIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020211",
      "CUENTA": "",
      "SUBCUENTA": "PROMOCIÓN Y PUBLICIDAD",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020212",
      "CUENTA": "",
      "SUBCUENTA": "COMBUSTIBLES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020213",
      "CUENTA": "",
      "SUBCUENTA": "LUBRICANTES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020214",
      "CUENTA": "",
      "SUBCUENTA": "SEGUROS Y REASEGUROS (PRIMAS Y CESIONES)",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020215",
      "CUENTA": "",
      "SUBCUENTA": "TRANSPORTE",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020216",
      "CUENTA": "",
      "SUBCUENTA": "GASTOS DE GESTIÓN (AGASAJOS A ACCIONISTAS, TRABAJADORES Y CLIENTES)",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020217",
      "CUENTA": "",
      "SUBCUENTA": "GASTOS DE VIAJE",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020218",
      "CUENTA": "",
      "SUBCUENTA": "AGUA, ENERGÍA, LUZ, Y TELECOMUNICACIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020219",
      "CUENTA": "",
      "SUBCUENTA": "NOTARIOS Y REGISTRADORES DE LA PROPIEDAD O MERCANTILES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020220",
      "CUENTA": "",
      "SUBCUENTA": "IMPUESTOS, CONTRIBUCIONES Y OTROS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020221",
      "CUENTA": "",
      "SUBCUENTA": "DEPRECIACIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020222",
      "CUENTA": "",
      "SUBCUENTA": "AMORTIZACIONES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020223",
      "CUENTA": "",
      "SUBCUENTA": "GASTO DETERIORO",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020224",
      "CUENTA": "",
      "SUBCUENTA": "GASTOS POR CANTIDADES ANORMALES DE UTILIZACION EN EL PROCESO DE PRODUCCIÓN",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020225",
      "CUENTA": "",
      "SUBCUENTA": "GASTO POR REESTRUCTURACION",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020226",
      "CUENTA": "",
      "SUBCUENTA": "VALOR NETO DE REALIZACION DE INVENTARIOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020227",
      "CUENTA": "",
      "SUBCUENTA": "GASTO IMPUESTO A LA RENTA (ACTIVOS Y PASIVOS DIFERIDOS)",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020228",
      "CUENTA": "",
      "SUBCUENTA": "SUMINISTROS Y MATERIALES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020229",
      "CUENTA": "",
      "SUBCUENTA": "OTROS GASTOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "50202",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
  ]
}

// BLOQUE 54
export const gastosFinancierosTN = () => {
  return [
    {
      "CODIGO": "5020301",
      "CUENTA": "",
      "SUBCUENTA": "INTERESES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "5020302",
      "CUENTA": "",
      "SUBCUENTA": "COMISIONES",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "5020303",
      "CUENTA": "",
      "SUBCUENTA": "POR PRESTACIÓN DE SERVICIOS DE ADMINISTRACIÓN Y MANEJO",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020304",
      "CUENTA": "",
      "SUBCUENTA": "CUSTODIA, REGISTRO, COMPENSACIÓN Y LIQUIDACIÓN",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020305",
      "CUENTA": "",
      "SUBCUENTA": "GASTOS POR SERVICIOS DE ASESORIA Y ESTRUCTURACION",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020306",
      "CUENTA": "",
      "SUBCUENTA": "GASTOS DE FINANCIAMIENTO DE ACTIVOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020307",
      "CUENTA": "",
      "SUBCUENTA": "DIFERENCIA EN CAMBIO",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020308",
      "CUENTA": "",
      "SUBCUENTA": "VALUACION DE INSTRUMENTOS FINANCIEROS A VALOR RAZONABLE CON CAMBIO EN RESULTADOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020309",
      "CUENTA": "",
      "SUBCUENTA": "PERDIDA EN VENTA DE TITULOS VALORES",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020310",
      "CUENTA": "",
      "SUBCUENTA": "PERDIDA EN VENTA DE PROPIEDAD, PLANTA Y EQUIPO",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020311",
      "CUENTA": "",
      "SUBCUENTA": "PERDIDA EN VENTA DE ACTIVOS BIOLOGICOS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "5020312",
      "CUENTA": "",
      "SUBCUENTA": "OTROS GASTOS FINANCIEROS",
      "PERIODO_ACTUAL": "",
      "PERIODO_ANTERIOR": "",
    },
    {
      "CODIGO": "50203",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
  ]
}

// BLOQUE 55
export const otrosGastosTN = () => {
  return [
    {
      "CODIGO": "5020401",
      "CUENTA": "",
      "SUBCUENTA": "PERDIDA EN INVERSIONES EN ASOCIADAS / SUBSIDIARIAS Y OTRAS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "5020402",
      "CUENTA": "",
      "SUBCUENTA": "OTROS",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
    {
      "CODIGO": "50204",
      "CUENTA": "TOTAL",
      "SUBCUENTA": "",
      "PERIODO_ACTUAL": "0.00",
      "PERIODO_ANTERIOR": "0.00",
    },
  ]
}

export const agregarTablaADocumento = datosTabla => {
  const filas = datosTabla.map(item => {
    const celdas = Object.values(item).map(valor =>
      new TableCell({
        children: [new Paragraph(valor.toString())],
      }),
    )

    return new TableRow({ children: celdas })
  })

  return new Table({
    rows: filas,
  })
}

export const crearTablaPropiedadesPlantasEquiposTN = datos => {
  console.log(datos)

  const camposIniciales = [
    "Terreno",
    "Edificios",
    "Construcciones en curso",
    "Instalaciones",
    "Muebles y enseres",
    "maquinarias y Equipos",
    "Vehiculo",
    "Equipo de computación",
    "Otros Propiedades, Plantas y Equipos",
    "Total",
  ]

  // Nombres de las propiedades en el mismo orden que los encabezados, para mapear correctamente
  const propiedades = [
    ["mov_terreno_si", "mov_terreno_sida", "mov_terreno_compras", "mov_terreno_bilddb", "mov_terreno_transf", "mov_terreno_od", "mov_terreno_gdd", "mov_terreno_total"],
    ["mov_edificios_si", "mov_edificios_sida", "mov_edificios_compras", "mov_edificios_bilddb", "mov_edificios_transf", "mov_edificios_od", "mov_edificios_gdd", "mov_edificios_total"],
    ["mov_construccionesencurso_si", "mov_construccionesencurso_sida", "mov_construccionesencurso_compras", "mov_construccionesencurso_bilddb", "mov_construccionesencurso_transf", "mov_construccionesencurso_od", "mov_construccionesencurso_gdd", "mov_construccionesencurso_total"],
    ["mov_instalaciones_si", "mov_instalaciones_sida", "mov_instalaciones_compras", "mov_instalaciones_bilddb", "mov_instalaciones_transf", "mov_instalaciones_od", "mov_instalaciones_gdd", "mov_instalaciones_total"],
    ["mov_mueblesyenseres_si", "mov_mueblesyenseres_sida", "mov_mueblesyenseres_compras", "mov_mueblesyenseres_bilddb", "mov_mueblesyenseres_transf", "mov_mueblesyenseres_od", "mov_mueblesyenseres_gdd", "mov_mueblesyenseres_total"],
    ["mov_maquinariayequipo_si", "mov_maquinariayequipo_sida", "mov_maquinariayequipo_compras", "mov_maquinariayequipo_bilddb", "mov_maquinariayequipo_transf", "mov_maquinariayequipo_od", "mov_maquinariayequipo_gdd", "mov_maquinariayequipo_total"],
    ["mov_vehiculo_si", "mov_vehiculo_sida", "mov_vehiculo_compras", "mov_vehiculo_bilddb", "mov_vehiculo_transf", "mov_vehiculo_od", "mov_vehiculo_gdd", "mov_vehiculo_total"],
    ["mov_equipodecomputacion_si", "mov_equipodecomputacion_sida", "mov_equipodecomputacion_compras", "mov_equipodecomputacion_bilddb", "mov_equipodecomputacion_transf", "mov_equipodecomputacion_od", "mov_equipodecomputacion_gdd", "mov_equipodecomputacion_total"],
    ["mov_otrospropiedadesplantasyequipos_si", "mov_otrospropiedadesplantasyequipos_sida", "mov_otrospropiedadesplantasyequipos_compras", "mov_otrospropiedadesplantasyequipos_bilddb", "mov_otrospropiedadesplantasyequipos_transf", "mov_otrospropiedadesplantasyequipos_od", "mov_otrospropiedadesplantasyequipos_gdd", "mov_otrospropiedadesplantasyequipos_total"],
    ["mov_total_si", "mov_total_sida", "mov_total_compras", "mov_total_bilddb", "mov_total_transf", "mov_total_od", "mov_total_gdd", "mov_total_total"],
  ]

  // Verificar si todos los valores son 0
  // const todosCeros = Object.keys(datos).every(key => parseFloat(datos[key]) === 0)

  // Construir filas de datos
  const filasDatos = camposIniciales.map((concepto, index) => {
    const celdas = propiedades[index].map(propiedad => {
      const valor = datos[propiedad]

      return new TableCell({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: valor,
                size: 16,
                font: { name: "Arial" },
              }),
            ],
          }),
        ],
      })
    })

    // Insertar el concepto como la primera celda de cada fila
    celdas.unshift(new TableCell({
      children: [new Paragraph(concepto)],
    }))

    return new TableRow({ children: celdas })
  })

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  const valores = propiedades.flat().map(propiedad => parseFloat(datos[propiedad]))
  if (valores.every(valor => valor === 0)) {
    throw new Error("No existen valores para procesar en este documento.")
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Saldo Inicial",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(-) Saldo Inic Deprec Acum",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Compras",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(-) Bajas Incluida La (Deprec Dada De Baja)",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+/-) Transferencia",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+/-) Otros Detallar",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(-) Gastos de Depreciación",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Saldo Final",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),

      ...filasDatos,

    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaPropiedadesPlantasEquiposAntTN = datos => {
  console.log(datos)

  const camposIniciales = [
    "Terreno",
    "Edificios",
    "Construcciones en curso",
    "Instalaciones",
    "Muebles y enseres",
    "maquinarias y Equipos",
    "Vehiculo",
    "Equipo de computación",
    "Otros Propiedades, Plantas y Equipos",
    "Total",
  ]

  // Nombres de las propiedades en el mismo orden que los encabezados, para mapear correctamente
  const propiedades = [
    ["mov_terreno_si_ant", "mov_terreno_sida_ant", "mov_terreno_compras_ant", "mov_terreno_bilddb_ant", "mov_terreno_transf_ant", "mov_terreno_od_ant", "mov_terreno_gdd_ant", "mov_terreno_total_ant"],
    ["mov_edificios_si_ant", "mov_edificios_sida_ant", "mov_edificios_compras_ant", "mov_edificios_bilddb_ant", "mov_edificios_transf_ant", "mov_edificios_od_ant", "mov_edificios_gdd_ant", "mov_edificios_total_ant"],
    ["mov_construccionesencurso_si_ant", "mov_construccionesencurso_sida_ant", "mov_construccionesencurso_compras_ant", "mov_construccionesencurso_bilddb_ant", "mov_construccionesencurso_transf_ant", "mov_construccionesencurso_od_ant", "mov_construccionesencurso_gdd_ant", "mov_construccionesencurso_total_ant"],
    ["mov_instalaciones_si_ant", "mov_instalaciones_sida_ant", "mov_instalaciones_compras_ant", "mov_instalaciones_bilddb_ant", "mov_instalaciones_transf_ant", "mov_instalaciones_od_ant", "mov_instalaciones_gdd_ant", "mov_instalaciones_total_ant"],
    ["mov_mueblesyenseres_si_ant", "mov_mueblesyenseres_sida_ant", "mov_mueblesyenseres_compras_ant", "mov_mueblesyenseres_bilddb_ant", "mov_mueblesyenseres_transf_ant", "mov_mueblesyenseres_od_ant", "mov_mueblesyenseres_gdd_ant", "mov_mueblesyenseres_total_ant"],
    ["mov_maquinariayequipo_si_ant", "mov_maquinariayequipo_sida_ant", "mov_maquinariayequipo_compras_ant", "mov_maquinariayequipo_bilddb_ant", "mov_maquinariayequipo_transf_ant", "mov_maquinariayequipo_od_ant", "mov_maquinariayequipo_gdd_ant", "mov_maquinariayequipo_total_ant"],
    ["mov_vehiculo_si_ant", "mov_vehiculo_sida_ant", "mov_vehiculo_compras_ant", "mov_vehiculo_bilddb_ant", "mov_vehiculo_transf_ant", "mov_vehiculo_od_ant", "mov_vehiculo_gdd_ant", "mov_vehiculo_total_ant"],
    ["mov_equipodecomputacion_si_ant", "mov_equipodecomputacion_sida_ant", "mov_equipodecomputacion_compras_ant", "mov_equipodecomputacion_bilddb_ant", "mov_equipodecomputacion_transf_ant", "mov_equipodecomputacion_od_ant", "mov_equipodecomputacion_gdd_ant", "mov_equipodecomputacion_total_ant"],
    ["mov_otrospropiedadesplantasyequipos_si_ant", "mov_otrospropiedadesplantasyequipos_sida_ant", "mov_otrospropiedadesplantasyequipos_compras_ant", "mov_otrospropiedadesplantasyequipos_bilddb_ant", "mov_otrospropiedadesplantasyequipos_transf_ant", "mov_otrospropiedadesplantasyequipos_od_ant", "mov_otrospropiedadesplantasyequipos_gdd_ant", "mov_otrospropiedadesplantasyequipos_total_ant"],
    ["mov_total_si_ant", "mov_total_sida_ant", "mov_total_compras_ant", "mov_total_bilddb_ant", "mov_total_transf_ant", "mov_total_od_ant", "mov_total_gdd_ant", "mov_total_total_ant"],
  ]

  // Verificar si todos los valores son 0
  // const todosCeros = Object.keys(datos).every(key => parseFloat(datos[key]) === 0)

  // Construir filas de datos
  const filasDatos = camposIniciales.map((concepto, index) => {
    const celdas = propiedades[index].map(propiedad => {
      const valor = datos[propiedad]

      return new TableCell({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: valor,
                size: 16,
                font: { name: "Arial" },
              }),
            ],
          }),
        ],
      })
    })

    // Insertar el concepto como la primera celda de cada fila
    celdas.unshift(new TableCell({
      children: [new Paragraph(concepto)],
    }))

    return new TableRow({ children: celdas })
  })

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  const valores = propiedades.flat().map(propiedad => parseFloat(datos[propiedad]))
  if (valores.every(valor => valor === 0)) {
    throw new Error("No existen valores para procesar en este documento.")
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Saldo Inicial",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(-) Saldo Inic Deprec Acum",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Compras",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(-) Bajas Incluida La (Deprec Dada De Baja)",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+/-) Transferencia",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+/-) Otros Detallar",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(-) Gastos de Depreciación",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Saldo Final",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),

      ...filasDatos,

    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaPerdAcumValorNetRealizOtrasPerdInvTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = ["id", "reporteId", "userId", "empresaId", "periodoId", "createdAt", "updatedAt"]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(-) SALDO INICIAL",
    "(-) PROVISIONES DEL AÑO",
    "(+) BAJAS O REVERSIONES",
    "(+/-) AJUSTES",
    "(-) SALDO FINAL SEGÚN MOVIMIENTO",
    "SALDO FINAL SEGUN ESF",
    "DIFERENCIA POR CUADRAR",
  ]

  const propiedades = [
    "saldoinicial",
    "provisionesdelanio",
    "bajasoreversiones",
    "ajustes",
    "saldofinalsegunmovimiento",
    "saldofinalsegunesf",
    "diferenciaporcuadrar",
  ]

  const propiedades_ant = [
    "saldoinicial_ant",
    "provisionesdelanio_ant",
    "bajasoreversiones_ant",
    "ajustes_ant",
    "saldofinalsegunmovimiento_ant",
    "saldofinalsegunesf_ant",
    "diferenciaporcuadrar_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaPerdAcumCuentasIncobrablesDeterioroTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = ["id", "reporteId", "userId", "empresaId", "periodoId", "createdAt", "updatedAt"]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(-) SALDO INICIAL",
    "(-) PROVISIONES DEL AÑO",
    "(+) BAJAS O REVERSIONES",
    "(+/-) AJUSTES",
    "(-) SALDO FINAL SEGÚN MOVIMIENTO",
    "SALDO FINAL SEGUN ESF",
    "DIFERENCIA POR CUADRAR",
  ]

  const propiedades = [
    "saldoinicial",
    "provisionesanio",
    "bajasoreversiones",
    "ajustes",
    "saldofinalsegunmovimiento",
    "saldofinalsegunesf",
    "diferenciaporcuadrar",
  ]

  const propiedades_ant = [
    "saldoinicial_ant",
    "provisionesanio_ant",
    "bajasoreversiones_ant",
    "ajustes_ant",
    "saldofinalsegunmovimiento_ant",
    "saldofinalsegunesf_ant",
    "diferenciaporcuadrar_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaIntangiblesTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = ["id", "reporteId", "userId", "empresaId", "periodoId", "createdAt", "updatedAt"]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(+) SALDO INICIAL COSTO",
    "(-) SALDO INICIAL AMORTIZACIÓN ACUMULADA",
    "(+) COMPRAS",
    "(-) BAJAS INCLUIDA LA (AMORTIZACIÓN DADA DE BAJA)",
    "(+/-) OTROS",
    "(-) GASTOS DE AMORTIZACIÓN",
    "(-) SALDO FINAL SEGÚN MOVIMIENTO",
    "SALDO FINAL SEGUN ESF",
    "DIFERENCIA POR CUADRAR",
  ]

  const propiedades = [
    "mov_saldoinicialcosto",
    "mov_saldoinicialamortizacionacumulada",
    "mov_compras",
    "mov_bajasincluida",
    "mov_otros",
    "mov_gastosdeamortizacion",
    "mov_saldofinalsegunmovimiento",
    "mov_saldofinalsegunesf",
    "mov_diferenciaporcuadrar",
  ]

  const propiedades_ant = [
    "mov_saldoinicialcosto_ant",
    "mov_saldoinicialamortizacionacumulada_ant",
    "mov_compras_ant",
    "mov_bajasincluida_ant",
    "mov_otros_ant",
    "mov_gastosdeamortizacion_ant",
    "mov_saldofinalsegunmovimiento_ant",
    "mov_saldofinalsegunesf_ant",
    "mov_diferenciaporcuadrar_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaImpuestosDiferidosActivosTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = [
    "id",
    "reporteId",
    "userId",
    "empresaId",
    "periodoId",
    "createdAt",
    "updatedAt",
    "mov_ppid_afectacionaresultadosintegrales",
    "mov_ppid_ajustesresultadosacumulados",
    "mov_ppid_ajustesresultadospyg",
    "mov_ppid_diferenciaporcuadrar",
    "mov_ppid_generacionenrevision",
    "mov_ppid_saldofinalsegunesf",
    "mov_ppid_saldofinalsegunmovimiento",
    "mov_ppid_saldoinicial",
  ]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(+) SALDO INICIAL",
    "(+/-) GENERACIÓN/REVERSION",
    "(+/-) AFECTACIÓN A RESULTADOS INTEGRALES",
    "(+/-) AJUSTES A RESULTADOS ACUMULADOS",
    "(+/-) AJUSTES A RESULTADOS PYG",
    "SALDO FINAL SEGÚN MOVIMIENTO",
    "SALDO FINAL SEGUN ESF",
    "DIFERENCIA POR CUADRAR",
  ]

  const propiedades = [
    "mov_apid_saldoinicial",
    "mov_apid_generacionenrevision",
    "mov_apid_afectacionaresultadosintegrales",
    "mov_apid_ajustesresultadosacumulados",
    "mov_apid_ajustesresultadospyg",
    "mov_apid_saldofinalsegunmovimiento",
    "mov_apid_saldofinalsegunesf",
    "mov_apid_diferenciaporcuadrar",
  ]

  const propiedades_ant = [
    "mov_apid_saldoinicial_ant",
    "mov_apid_generacionenrevision_ant",
    "mov_apid_afectacionaresultadosintegrales_ant",
    "mov_apid_ajustesresultadosacumulados_ant",
    "mov_apid_ajustesresultadospyg_ant",
    "mov_apid_saldofinalsegunmovimiento_ant",
    "mov_apid_saldofinalsegunesf_ant",
    "mov_apid_diferenciaporcuadrar_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaImpuestosDiferidosPasivosTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = [
    "id",
    "reporteId",
    "userId",
    "empresaId",
    "periodoId",
    "createdAt",
    "updatedAt",
    "mov_apid_afectacionaresultadosintegrales",
    "mov_apid_ajustesresultadosacumulados",
    "mov_apid_ajustesresultadospyg",
    "mov_apid_diferenciaporcuadrar",
    "mov_apid_generacionenrevision",
    "mov_apid_saldofinalsegunesf",
    "mov_apid_saldofinalsegunmovimiento",
    "mov_apid_saldoinicial",
  ]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(+) SALDO INICIAL",
    "(+/-) GENERACIÓN/REVERSION",
    "(+/-) AFECTACIÓN A RESULTADOS INTEGRALES",
    "(+/-) AJUSTES A RESULTADOS ACUMULADOS",
    "(+/-) AJUSTES A RESULTADOS PYG",
    "SALDO FINAL SEGÚN MOVIMIENTO",
    "SALDO FINAL SEGUN ESF",
    "DIFERENCIA POR CUADRAR",
  ]

  const propiedades = [
    "mov_ppid_saldoinicial",
    "mov_ppid_generacionenrevision",
    "mov_ppid_afectacionaresultadosintegrales",
    "mov_ppid_ajustesresultadosacumulados",
    "mov_ppid_ajustesresultadospyg",
    "mov_ppid_saldofinalsegunmovimiento",
    "mov_ppid_saldofinalsegunesf",
    "mov_ppid_diferenciaporcuadrar",
  ]

  const propiedades_ant = [
    "mov_ppid_saldoinicial_ant",
    "mov_ppid_generacionenrevision_ant",
    "mov_ppid_afectacionaresultadosintegrales_ant",
    "mov_ppid_ajustesresultadosacumulados_ant",
    "mov_ppid_ajustesresultadospyg_ant",
    "mov_ppid_saldofinalsegunmovimiento_ant",
    "mov_ppid_saldofinalsegunesf_ant",
    "mov_ppid_diferenciaporcuadrar_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablapropiedadesDeInversionActualTN = datos => {
  console.log(datos)

  const camposAEliminar = [
    "id",
    "reporteId",
    "userId",
    "empresaId",
    "periodoId",
    "createdAt",
    "updatedAt",
  ]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(+) SALDO INICIAL",
    "(+) COMPRAS",
    "(-) BAJAS INCLUIDA LA (DEPRECIACIÓN DADA DE BAJA)",
    "(+/-) VALOR RAZONABLE",
    "(+/-) TRANSFERENCIA",
    "(+/-) OTROS",
    "(-) GASTOS DE DEPRECIACIÓN",
    "SALDO",
  ]

  const propiedades_terrenos = [
    "mov_saldoinicial_terrenos",
    "mov_compras_terrenos",
    "mov_bajasincluida_terrenos",
    "mov_valorrazonable_terrenos",
    "mov_transferencia_terrenos",
    "mov_otros_terrenos",
    "mov_gastosdedepreciacion_terrenos",
    "mov_saldo_terrenos",
  ]

  const propiedades_edificios = [
    "mov_saldoinicial_edificios",
    "mov_compras_edificios",
    "mov_bajasincluida_edificios",
    "mov_valorrazonable_edificios",
    "mov_transferencia_edificios",
    "mov_otros_edificios",
    "mov_gastosdedepreciacion_edificios",
    "mov_saldo_edificios",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Terrenos",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Edificios",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...camposIniciales.map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades_terrenos[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades_edificios[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablapropiedadesDeInversionAnteriorTN = datos => {
  console.log(datos)

  const camposAEliminar = [
    "id",
    "reporteId",
    "userId",
    "empresaId",
    "periodoId",
    "createdAt",
    "updatedAt",
  ]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(+) SALDO INICIAL",
    "(+) COMPRAS",
    "(-) BAJAS INCLUIDA LA (DEPRECIACIÓN DADA DE BAJA)",
    "(+/-) VALOR RAZONABLE",
    "(+/-) TRANSFERENCIA",
    "(+/-) OTROS",
    "(-) GASTOS DE DEPRECIACIÓN",
    "SALDO",
  ]

  const propiedades_terrenos = [
    "mov_saldoinicial_terrenos_ant",
    "mov_compras_terrenos_ant",
    "mov_bajasincluida_terrenos_ant",
    "mov_valorrazonable_terrenos_ant",
    "mov_transferencia_terrenos_ant",
    "mov_otros_terrenos_ant",
    "mov_gastosdedepreciacion_terrenos_ant",
    "mov_saldo_terrenos_ant",
  ]

  const propiedades_edificios = [
    "mov_saldoinicial_edificios_ant",
    "mov_compras_edificios_ant",
    "mov_bajasincluida_edificios_ant",
    "mov_valorrazonable_edificios_ant",
    "mov_transferencia_edificios_ant",
    "mov_otros_edificios_ant",
    "mov_gastosdedepreciacion_edificios_ant",
    "mov_saldo_edificios_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Terrenos",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Edificios",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...camposIniciales.map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades_terrenos[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades_edificios[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaJubilacionPatronalTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = ["id", "reporteId", "userId", "empresaId", "periodoId", "createdAt", "updatedAt"]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(+) SALDO INICIAL",
    "(+) COSTO POR SERVICIOS ACTUALES Y PASADOS",
    "(+) COSTO FINANCIERO",
    "(+/-) GANANCIA O PÉRDIDA ACTUARIAL",
    "(+/-) OTROS",
    "(-) EFECTO DE LIQUIDACIONES ANTICIPADAS",
    "(-) BENEFICIOS PAGADOS",
    "(-) SALDO FINAL SEGÚN MOVIMIENTO",
    "SALDO FINAL SEGUN ESF",
    "DIFERENCIA POR CUADRAR",
  ]

  const propiedades = [
    "mov_saldoinicial",
    "mov_costosporservicios",
    "mov_costofinanciero",
    "mov_gananciaoperdidaactuarial",
    "mov_otros",
    "mov_efectodeliquidaciones",
    "mov_beneficiospagados",
    "mov_saldofinalsegunmovimiento",
    "mov_saldofinalsegunesf",
    "mov_diferenciaporcuadrar",
  ]

  const propiedades_ant = [
    "mov_saldoinicial_ant",
    "mov_costosporservicios_ant",
    "mov_costofinanciero_ant",
    "mov_gananciaoperdidaactuarial_ant",
    "mov_otros_ant",
    "mov_efectodeliquidaciones_ant",
    "mov_beneficiospagados_ant",
    "mov_saldofinalsegunmovimiento_ant",
    "mov_saldofinalsegunesf_ant",
    "mov_diferenciaporcuadrar_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaDesahucioTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = ["id", "reporteId", "userId", "empresaId", "periodoId", "createdAt", "updatedAt"]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(+) SALDO INICIAL",
    "(+) COSTO POR SERVICIOS ACTUALES Y PASADOS",
    "(+) COSTO FINANCIERO",
    "(+/-) GANANCIA O PÉRDIDA ACTUARIAL",
    "(+/-) OTROS",
    "(-) EFECTO DE LIQUIDACIONES ANTICIPADAS",
    "(-) BENEFICIOS PAGADOS",
    "(-) SALDO FINAL SEGÚN MOVIMIENTO",
    "SALDO FINAL SEGUN ESF",
    "DIFERENCIA POR CUADRAR",
  ]

  const propiedades = [
    "mov_saldoinicial",
    "mov_costosporservicios",
    "mov_costofinanciero",
    "mov_gananciaoperdidaactuarial",
    "mov_otros",
    "mov_efectodeliquidaciones",
    "mov_beneficiospagados",
    "mov_saldofinalsegunmovimiento",
    "mov_saldofinalsegunesf",
    "mov_diferenciaporcuadrar",
  ]

  const propiedades_ant = [
    "mov_saldoinicial_ant",
    "mov_costosporservicios_ant",
    "mov_costofinanciero_ant",
    "mov_gananciaoperdidaactuarial_ant",
    "mov_otros_ant",
    "mov_efectodeliquidaciones_ant",
    "mov_beneficiospagados_ant",
    "mov_saldofinalsegunmovimiento_ant",
    "mov_saldofinalsegunesf_ant",
    "mov_diferenciaporcuadrar_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaActivosFinancierosLargoPlazoTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = ["id", "reporteId", "userId", "empresaId", "periodoId", "createdAt", "updatedAt"]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(+) SALDO INICIAL",
    "(+) NUEVAS INVERSIONES",
    "(+) INTERÉS O ACTUALIZACIÓN DE ANTIGUAS INVERSIONES",
    "(-) PROVISIÓN POR DETERIORO",
    "(+/-) AJUSTES",
    "(-) SALDO FINAL SEGÚN MOVIMIENTO",
    "SALDO FINAL SEGUN ESF",
    "DIFERENCIA POR CUADRAR",
  ]

  const propiedades = [
    "mov_saldoinicial",
    "mov_nuevasinversiones",
    "mov_interesactualizacionantiguasinv",
    "mov_provisionpordeterioro",
    "mov_ajustes",
    "mov_saldofinalsegunmovimiento",
    "mov_saldofinalsegunesf",
    "mov_diferenciaporcuadrar",
  ]

  const propiedades_ant = [
    "mov_saldoinicial_ant",
    "mov_nuevasinversiones_ant",
    "mov_interesactualizacionantiguasinv_ant",
    "mov_provisionpordeterioro_ant",
    "mov_ajustes_ant",
    "mov_saldofinalsegunmovimiento_ant",
    "mov_saldofinalsegunesf_ant",
    "mov_diferenciaporcuadrar_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaOtrosISLRTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = [
    "id",
    "reporteId",
    "userId",
    "empresaId",
    "periodoId",
    "createdAt",
    "updatedAt",
    "mov_dividendos_dividendospagados",
    "mov_pt_pagos",
    "mov_pt_provisiondelanio",
  ]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(+) PROVISIÓN DEL AÑO",
    "(-) PAGOS",
  ]

  const propiedades = [
    "mov_islr_provisiondelanio",
    "mov_islr_pagos",
  ]

  const propiedades_ant = [
    "mov_islr_provisiondelanio_ant",
    "mov_islr_pagos_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaOtrosParticipacionTrabajadoresTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = [
    "id",
    "reporteId",
    "userId",
    "empresaId",
    "periodoId",
    "createdAt",
    "updatedAt",
    "mov_dividendos_dividendospagados",
    "mov_islr_pagos",
    "mov_islr_provisiondelanio",
  ]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(+) PROVISIÓN DEL AÑO",
    "(-) PAGOS",
  ]

  const propiedades = [
    "mov_pt_provisiondelanio",
    "mov_pt_pagos",
  ]

  const propiedades_ant = [
    "mov_pt_provisiondelanio_ant",
    "mov_pt_pagos_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaOtrosDividendosTN = (datos, datos_ant) => {
  console.log(datos)

  const camposAEliminar = [
    "id",
    "reporteId",
    "userId",
    "empresaId",
    "periodoId",
    "createdAt",
    "updatedAt",
    "mov_pt_pagos",
    "mov_pt_provisiondelanio",
    "mov_islr_pagos",
    "mov_islr_provisiondelanio",
  ]

  const datosLimpios = { ...datos }

  camposAEliminar.forEach(campo => delete datosLimpios[campo])

  const camposIniciales = [
    "(-) DIVIDENDOS PAGADOS",
  ]

  const propiedades = [
    "mov_dividendos_dividendospagados",
  ]

  const propiedades_ant = [
    "mov_dividendos_dividendospagados_ant",
  ]

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Actual",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "Periodo Anterior",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),
      ...Object.keys(datosLimpios).map((dato, index) => {
        return new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${camposIniciales[index]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos[propiedades[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `${datos_ant[propiedades_ant[index]]}`,
                      size: 16,
                      font: { name: "Arial" },
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }),
    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaActivosBiologicosActualTN = datos => {
  console.log(datos)

  const camposIniciales = [
    "(+) SALDO INICIAL",
    "(+) COMPRAS",
    "(-) BAJAS O VENTAS",
    "(+/-) INCREMENTO O DISMINUCIÓN DEL VALOR RAZONABLE",
    "(+/-) RECLASIFICACIÓN",
    "SALDO FINAL",
  ]

  // Nombres de las propiedades en el mismo orden que los encabezados, para mapear correctamente
  const propiedades = [
    ["mov_saldoinicial_aec", "mov_saldoinicial_aep", "mov_saldoinicial_pec", "mov_saldoinicial_pep", "mov_saldoinicial_otros", "mov_saldoinicial_total"],
    ["mov_compras_aec", "mov_compras_aep", "mov_compras_pec", "mov_compras_pep", "mov_compras_otros", "mov_compras_total"],
    ["mov_bajasoventas_aec", "mov_bajasoventas_aep", "mov_bajasoventas_pec", "mov_bajasoventas_pep", "mov_bajasoventas_otros", "mov_bajasoventas_total"],
    ["mov_incrementodisminuciondevalor_aec", "mov_incrementodisminuciondevalor_aep", "mov_incrementodisminuciondevalor_pec", "mov_incrementodisminuciondevalor_pep", "mov_incrementodisminuciondevalor_otros", "mov_incrementodisminuciondevalor_total"],
    ["mov_reclasificacion_aec", "mov_reclasificacion_aep", "mov_reclasificacion_pec", "mov_reclasificacion_pep", "mov_reclasificacion_otros", "mov_reclasificacion_total"],
    ["mov_saldofinal_aec", "mov_saldofinal_aep", "mov_saldofinal_pec", "mov_saldofinal_pep", "mov_saldofinal_otros", "mov_saldofinal_total"],
  ]

  // Construir filas de datos
  const filasDatos = camposIniciales.map((concepto, index) => {
    const celdas = propiedades[index].map(propiedad => {
      const valor = datos[propiedad]

      return new TableCell({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            size: 16,
            font: { name: "Arial" },
            children: [
              new TextRun({
                text: valor,
                size: 16,
                font: { name: "Arial" },
              }),
            ],
          }),
        ],
      })
    })

    // Insertar el concepto como la primera celda de cada fila
    celdas.unshift(new TableCell({
      children: [new Paragraph(concepto)],
    }))

    return new TableRow({ children: celdas })
  })

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  /*
  const valores = propiedades.flat().map(propiedad => parseFloat(datos[propiedad]))
  if (valores.every(valor => valor === 0)) {
    throw new Error("No existen valores para procesar en este documento.")
  }
   */

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Animales en crecimiento",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Animales en producción",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Plantas en crecimiento",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Plantas en producción",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+/-) Otros",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+/-) Total",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),

      ...filasDatos,

    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}

export const crearTablaActivosBiologicosAnteriorTN = datos => {
  console.log(datos)

  const camposIniciales = [
    "(+) SALDO INICIAL",
    "(+) COMPRAS",
    "(-) BAJAS O VENTAS",
    "(+/-) INCREMENTO O DISMINUCIÓN DEL VALOR RAZONABLE",
    "(+/-) RECLASIFICACIÓN",
    "SALDO FINAL",
  ]

  // Nombres de las propiedades en el mismo orden que los encabezados, para mapear correctamente
  const propiedades = [
    ["mov_saldoinicial_aec_ant", "mov_saldoinicial_aep_ant", "mov_saldoinicial_pec_ant", "mov_saldoinicial_pep_ant", "mov_saldoinicial_otros_ant", "mov_saldoinicial_total_ant"],
    ["mov_compras_aec_ant", "mov_compras_aep_ant", "mov_compras_pec_ant", "mov_compras_pep_ant", "mov_compras_otros_ant", "mov_compras_total_ant"],
    ["mov_bajasoventas_aec_ant", "mov_bajasoventas_aep_ant", "mov_bajasoventas_pec_ant", "mov_bajasoventas_pep_ant", "mov_bajasoventas_otros_ant", "mov_bajasoventas_total_ant"],
    ["mov_incrementodisminuciondevalor_aec_ant", "mov_incrementodisminuciondevalor_aep_ant", "mov_incrementodisminuciondevalor_pec_ant", "mov_incrementodisminuciondevalor_pep_ant", "mov_incrementodisminuciondevalor_otros_ant", "mov_incrementodisminuciondevalor_total_ant"],
    ["mov_reclasificacion_aec_ant", "mov_reclasificacion_aep_ant", "mov_reclasificacion_pec_ant", "mov_reclasificacion_pep_ant", "mov_reclasificacion_otros_ant", "mov_reclasificacion_total_ant"],
    ["mov_saldofinal_aec_ant", "mov_saldofinal_aep_ant", "mov_saldofinal_pec_ant", "mov_saldofinal_pep_ant", "mov_saldofinal_otros_ant", "mov_saldofinal_total_ant"],
  ]

  // Verificar si todos los valores son 0
  // const todosCeros = Object.keys(datos).every(key => parseFloat(datos[key]) === 0)

  // Construir filas de datos
  const filasDatos = camposIniciales.map((concepto, index) => {
    const celdas = propiedades[index].map(propiedad => {
      const valor = datos[propiedad]

      return new TableCell({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: valor,
                size: 16,
                font: { name: "Arial" },
              }),
            ],
          }),
        ],
      })
    })

    // Insertar el concepto como la primera celda de cada fila
    celdas.unshift(new TableCell({
      children: [new Paragraph(concepto)],
    }))

    return new TableRow({ children: celdas })
  })

  const encabezadoEstilo = (colorTexto, colorFondo) => ({
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    shading: { fill: colorFondo, color: colorTexto, val: ShadingType.CLEAR },
  })

  const textStyleEncabezado = {
    color: "FFFFFF",
    size: 16,
  }

  /*
  const valores = propiedades.flat().map(propiedad => parseFloat(datos[propiedad]))
  if (valores.every(valor => valor === 0)) {
    throw new Error("No existen valores para procesar en este documento.")
  }
  */

  // Crear la tabla
  return new Table({

    rows: [
      // Encabezados
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "Concepto",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Animales en crecimiento",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Animales en producción",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 3000, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Plantas en crecimiento",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+) Plantas en producción",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+/-) Otros",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "(+/-) Total",
                size: 16,
                font: { name: "Arial" },
                alignment: AlignmentType.CENTER,
                run: textStyleEncabezado,
              }),
            ],
            width: { size: 1500, type: WidthType.DXA },
            ...encabezadoEstilo("FFFFFF", "E8E8E8"),
          }),
        ],
      }),

      ...filasDatos,

    ],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "cccccc" },
    },
  })
}
