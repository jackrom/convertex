<script setup>
import { ref } from 'vue'

const entidad = ref({
  md_gestion_riesgos: `
    2.1. Factores de riesgo.



    La Gerencia General y Gerencia Administrativa y Financiera de la Compañía son las responsables de monitorear periódicamente los factores de riesgo más relevantes de {enterprise_name}, en base a una metodología de evaluación continua. La Compañía administra una serie de procedimientos y políticas desarrolladas para disminuir su exposición al riesgo frente a variaciones de inflación.



    2.2. Riesgo financiero.



     2.2.1 Riesgo operacional.



    El riesgo operacional que administra {enterprise_name}, gira en torno a la fijación de precios.



    2.2.2 Riesgo de liquidez.



    El riesgo de liquidez de {enterprise_name}, es administrado mediante una adecuada gestión de los activos y pasivos, optimizando de esta forma los excedentes de caja y de esta manera asegurar el cumplimiento de los compromisos de deudas al momento de su vencimiento.



    {enterprise_name}, realiza periódicamente proyecciones de flujo de caja, análisis de la situación financiera, el entorno económico con el propósito de obtener los recursos de liquidez necesarios para que la empresa cumpla con sus obligaciones.



    2.2.3 Riesgo de inflación.



    El riesgo de inflación proviene del proceso de la elevación continuada de los precios con un descenso discontinuado del valor del dinero. El dinero pierde valor cuando con él no se puede comprar la misma cantidad de inventarios o activos fijos que anteriormente se compraba.



    De acuerdo al Banco Central del Ecuador la inflación acumulada para cada año fue la siguiente:

    - Año 2023 1,35%

    - Año 2022 2.56%

    - Año 2021 1.94%

    - Año 2020 -0.90%.

    - Año 2019 -0.07%.

    - Año 2018 0.27%.

    - Año 2017 -0.20%.

    - Año 2016 1.12%.

    - Año 2015 3.38%.

    - Año 2014 3.67%.

    - Año 2013 2.70%.

    - Año 2012 4.16%.



    2.3. Riesgo crediticio.



    El riesgo de crédito es el riesgo de que una contraparte no pueda cumplir con sus obligaciones en relación con un instrumento financiero o contrato de venta, generando una pérdida financiera. La Compañía está expuesta a un riesgo de crédito por sus actividades operativas.



    El riesgo de crédito surge del efectivo y equivalentes de efectivo, depósitos en bancos e instituciones financieras, así como la exposición al crédito de clientes, que incluyen a los saldos pendientes de las cuentas por cobrar y a las transacciones comprometidas.



    Los principales activos financieros de {enterprise_name}, son los saldos de caja y efectivo, deudores comerciales y otras cuentas por cobrar, e inversiones, que representan la exposición máxima de la Compañía al riesgo de crédito en relación con los activos financieros.



    El riesgo del crédito de la Compañía es atribuible principalmente a sus deudas comerciales. Los importes se reflejan en el balance de situación netos de provisiones para insolvencias, estimadas por la Administración de la Compañía en función de la experiencia de ejercicios anteriores y su valoración del entorno económico actual



    2.4. Riesgo de tasa de interés.



    El principal objetivo en la gestión de riesgo de la tasa de interés es obtener un equilibrio a la estructura de financiamiento, lo cual, permite a {enterprise_name}, minimizar el costo de la deuda con una volatilidad reducida en el estado de resultados. Este descenso en las tasas de interés se debe una política de gobierno, que mediante decretos presidenciales organizo el manejo y la fijación de las tasas.







    Sección 4:  ESTIMACIONES Y JUICIOS O CRITERIOS CRÍTICOS DE LA ADMINISTRACIÓN



    Las estimaciones y criterios usados son continuamente evaluados y se basan en la experiencia histórica y otros factores, incluyendo la expectativa de ocurrencia de eventos futuros que se consideran razonables de acuerdo a las circunstancias.



    La Compañía efectúa estimaciones y supuestos respecto del futuro. Las estimaciones contables resultantes, por definición, muy pocas veces serán iguales a los resultados reales. Las estimaciones y supuestos efectuados por la Administración se presentan a continuación:



    3.1. Vidas útiles y de deterioro de activos.



    La Administración es quien determina las vidas útiles estimadas y los correspondientes cargos por depreciación para su propiedades, planta y equipos, ésta estimación se basa en los ciclos de vida de los activos en función del uso esperado por la Compañía, considerando como base depreciable al valor resultante entre el costo de adquisición del bien menos su valor de recuperación estimado.



    Adicionalmente, de acuerdo a lo dispuesto por la Sección 27 “Deterioro de valor de activos”, la Compañía evalúa al cierre de cada ejercicio anual o antes, si existe algún indicio de deterioro, el valor recuperable de los activos de largo plazo, para comprobar si hay pérdida de deterioro en el valor de los activos.



    3.2. Estimación de valores razonables de existencias para consumo.



    Las existencias a ser consumidas o utilizadas en la prestación de servicios se valorizan al costo.



    Los costos de las existencias incluye; todos los costos derivados de la compra y otros costos incurridos en dicho proceso, los cuales son considerados como costo de ventas.



    Todos los costos indirectos de Administración que no hayan contribuido a dar a la existencia su condición y ubicación actual como los costos de comercialización son reconocidos como gastos en el período en que se incurra.



    3.3. Otras estimaciones.



    La Compañía ha utilizado estimaciones para valorar y registrar algunos de los activos, pasivos, ingresos, gastos y compromisos. Básicamente estas estimaciones se refieren a:



      - La evaluación de posibles pérdidas por deterioro de determinados activos.

      - La vida útil de los activos materiales e intangibles.

      - Los criterios empleados en la valoración de determinados activos.

      - La necesidad de constituir provisiones y, en el caso de ser requeridas, el valor de las mismas.

      - La recuperabilidad de los activos por impuestos diferidos.

      - Valor actuarial de indemnizaciones por años de servicio.



    La determinación de estas estimaciones está basada en la mejor estimación de los desembolsos que será necesario pagar por la correspondiente obligación, tomando en consideración toda la información disponible a la fecha del período, incluyendo la opinión de expertos independientes tales como asesores legales y consultores.



    En el caso que las estimaciones deban ser modificadas por cambios del entorno económico y financiero de las mismas, dichas modificaciones afectarán al período contable en el que se generen, y su registro contable se lo realizaría de forma prospectiva.
  `,
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12" md="12">
        <VTextarea label="Polçiticas Contables" v-model="entidad.md_gestion_riesgos" rows="5"></VTextarea>
      </VCol>
    </VRow>
  </VContainer>
</template>



<style scoped>
/* Aquí puedes agregar estilos específicos para tu componente */
</style>

