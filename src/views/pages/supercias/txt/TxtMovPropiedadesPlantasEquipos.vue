<script setup>
import { useReportStore } from "@/@store/reportStore"
import {
  initializeMovPropiedadesPlantasEquipos,
  initializeMovPropiedadesPlantasEquiposAnt,
} from "@core/utils/initializers"

const reportStore = useReportStore()
const values_ant = ref([])

const movPropiedadesPlantas = initializeMovPropiedadesPlantasEquipos()
const movPropiedadesPlantasAnt = initializeMovPropiedadesPlantasEquiposAnt()

/* PERIODO NUEVO */
const mov_terreno_si = movPropiedadesPlantas['terrenos']['mov_terreno_si']
const mov_edificios_si = movPropiedadesPlantas['edificios']['mov_edificios_si']
const mov_construccionesencurso_si = movPropiedadesPlantas['construccionesencurso']['mov_construccionesencurso_si']
const mov_instalaciones_si = movPropiedadesPlantas['instalaciones']['mov_instalaciones_si']
const mov_mueblesyenseres_si = movPropiedadesPlantas['mueblesyenseres']['mov_mueblesyenseres_si']
const mov_maquinariayequipo_si = movPropiedadesPlantas['maquinariayequipo']['mov_maquinariayequipo_si']
const mov_vehiculo_si = movPropiedadesPlantas['vehiculo']['mov_vehiculo_si']
const mov_equipodecomputacion_si = movPropiedadesPlantas['equipodecomputacion']['mov_equipodecomputacion_si']
const mov_otrospropiedadesplantasyequipos_si = movPropiedadesPlantas['otros']['mov_otrospropiedadesplantasyequipos_si']

const mov_terreno_sida = movPropiedadesPlantas['terrenos']['mov_terreno_sida']
const mov_edificios_sida = movPropiedadesPlantas['edificios']['mov_edificios_sida']
const mov_construccionesencurso_sida = movPropiedadesPlantas['construccionesencurso']['mov_construccionesencurso_sida']
const mov_instalaciones_sida = movPropiedadesPlantas['instalaciones']['mov_instalaciones_sida']
const mov_mueblesyenseres_sida = movPropiedadesPlantas['mueblesyenseres']['mov_mueblesyenseres_sida']
const mov_maquinariayequipo_sida = movPropiedadesPlantas['maquinariayequipo']['mov_maquinariayequipo_sida']
const mov_vehiculo_sida = movPropiedadesPlantas['vehiculo']['mov_vehiculo_sida']
const mov_equipodecomputacion_sida = movPropiedadesPlantas['equipodecomputacion']['mov_equipodecomputacion_sida']
const mov_otrospropiedadesplantasyequipos_sida = movPropiedadesPlantas['otros']['mov_otrospropiedadesplantasyequipos_sida']

const mov_terreno_compras = movPropiedadesPlantas['terrenos']['mov_terreno_compras']
const mov_edificios_compras = movPropiedadesPlantas['edificios']['mov_edificios_compras']
const mov_construccionesencurso_compras = movPropiedadesPlantas['construccionesencurso']['mov_construccionesencurso_compras']
const mov_instalaciones_compras = movPropiedadesPlantas['instalaciones']['mov_instalaciones_compras']
const mov_mueblesyenseres_compras = movPropiedadesPlantas['mueblesyenseres']['mov_mueblesyenseres_compras']
const mov_maquinariayequipo_compras = movPropiedadesPlantas['maquinariayequipo']['mov_maquinariayequipo_compras']
const mov_vehiculo_compras = movPropiedadesPlantas['vehiculo']['mov_vehiculo_compras']
const mov_equipodecomputacion_compras = movPropiedadesPlantas['equipodecomputacion']['mov_equipodecomputacion_compras']
const mov_otrospropiedadesplantasyequipos_compras = movPropiedadesPlantas['otros']['mov_otrospropiedadesplantasyequipos_compras']

const mov_terreno_bilddb = movPropiedadesPlantas['terrenos']['mov_terreno_bilddb']
const mov_edificios_bilddb = movPropiedadesPlantas['edificios']['mov_edificios_bilddb']
const mov_construccionesencurso_bilddb = movPropiedadesPlantas['construccionesencurso']['mov_construccionesencurso_bilddb']
const mov_instalaciones_bilddb = movPropiedadesPlantas['instalaciones']['mov_instalaciones_bilddb']
const mov_mueblesyenseres_bilddb = movPropiedadesPlantas['mueblesyenseres']['mov_mueblesyenseres_bilddb']
const mov_maquinariayequipo_bilddb = movPropiedadesPlantas['maquinariayequipo']['mov_maquinariayequipo_bilddb']
const mov_vehiculo_bilddb = movPropiedadesPlantas['vehiculo']['mov_vehiculo_bilddb']
const mov_equipodecomputacion_bilddb = movPropiedadesPlantas['equipodecomputacion']['mov_equipodecomputacion_bilddb']
const mov_otrospropiedadesplantasyequipos_bilddb = movPropiedadesPlantas['otros']['mov_otrospropiedadesplantasyequipos_bilddb']

const mov_terreno_transf = movPropiedadesPlantas['terrenos']['mov_terreno_transf']
const mov_edificios_transf = movPropiedadesPlantas['edificios']['mov_edificios_transf']
const mov_construccionesencurso_transf = movPropiedadesPlantas['construccionesencurso']['mov_construccionesencurso_transf']
const mov_instalaciones_transf = movPropiedadesPlantas['instalaciones']['mov_instalaciones_transf']
const mov_mueblesyenseres_transf = movPropiedadesPlantas['mueblesyenseres']['mov_mueblesyenseres_transf']
const mov_maquinariayequipo_transf = movPropiedadesPlantas['maquinariayequipo']['mov_maquinariayequipo_transf']
const mov_vehiculo_transf = movPropiedadesPlantas['vehiculo']['mov_vehiculo_transf']
const mov_equipodecomputacion_transf = movPropiedadesPlantas['equipodecomputacion']['mov_equipodecomputacion_transf']
const mov_otrospropiedadesplantasyequipos_transf = movPropiedadesPlantas['otros']['mov_otrospropiedadesplantasyequipos_transf']

const mov_terreno_od = movPropiedadesPlantas['terrenos']['mov_terreno_od']
const mov_edificios_od = movPropiedadesPlantas['edificios']['mov_edificios_od']
const mov_construccionesencurso_od = movPropiedadesPlantas['construccionesencurso']['mov_construccionesencurso_od']
const mov_instalaciones_od = movPropiedadesPlantas['instalaciones']['mov_instalaciones_od']
const mov_mueblesyenseres_od = movPropiedadesPlantas['mueblesyenseres']['mov_mueblesyenseres_od']
const mov_maquinariayequipo_od = movPropiedadesPlantas['maquinariayequipo']['mov_maquinariayequipo_od']
const mov_vehiculo_od = movPropiedadesPlantas['vehiculo']['mov_vehiculo_od']
const mov_equipodecomputacion_od = movPropiedadesPlantas['equipodecomputacion']['mov_equipodecomputacion_od']
const mov_otrospropiedadesplantasyequipos_od = movPropiedadesPlantas['otros']['mov_otrospropiedadesplantasyequipos_od']

const mov_terreno_gdd = movPropiedadesPlantas['terrenos']['mov_terreno_gdd']
const mov_edificios_gdd = movPropiedadesPlantas['edificios']['mov_edificios_gdd']
const mov_construccionesencurso_gdd = movPropiedadesPlantas['construccionesencurso']['mov_construccionesencurso_gdd']
const mov_instalaciones_gdd = movPropiedadesPlantas['instalaciones']['mov_instalaciones_gdd']
const mov_mueblesyenseres_gdd = movPropiedadesPlantas['mueblesyenseres']['mov_mueblesyenseres_gdd']
const mov_maquinariayequipo_gdd = movPropiedadesPlantas['maquinariayequipo']['mov_maquinariayequipo_gdd']
const mov_vehiculo_gdd = movPropiedadesPlantas['vehiculo']['mov_vehiculo_gdd']
const mov_equipodecomputacion_gdd = movPropiedadesPlantas['equipodecomputacion']['mov_equipodecomputacion_gdd']
const mov_otrospropiedadesplantasyequipos_gdd = movPropiedadesPlantas['otros']['mov_otrospropiedadesplantasyequipos_gdd']

const mov_terreno_total = movPropiedadesPlantas['terrenos']['mov_terreno_total']
const mov_edificios_total = movPropiedadesPlantas['edificios']['mov_edificios_total']
const mov_construccionesencurso_total = movPropiedadesPlantas['construccionesencurso']['mov_construccionesencurso_total']
const mov_instalaciones_total = movPropiedadesPlantas['instalaciones']['mov_instalaciones_total']
const mov_mueblesyenseres_total = movPropiedadesPlantas['mueblesyenseres']['mov_mueblesyenseres_total']
const mov_maquinariayequipo_total = movPropiedadesPlantas['maquinariayequipo']['mov_maquinariayequipo_total']
const mov_vehiculo_total = movPropiedadesPlantas['vehiculo']['mov_vehiculo_total']
const mov_equipodecomputacion_total = movPropiedadesPlantas['equipodecomputacion']['mov_equipodecomputacion_total']
const mov_otrospropiedadesplantasyequipos_total = movPropiedadesPlantas['otros']['mov_otrospropiedadesplantasyequipos_total']

const mov_total_si = movPropiedadesPlantas['totales']['mov_total_si']
const mov_total_sida = movPropiedadesPlantas['totales']['mov_total_sida']
const mov_total_compras = movPropiedadesPlantas['totales']['mov_total_compras']
const mov_total_bilddb = movPropiedadesPlantas['totales']['mov_total_bilddb']
const mov_total_transf = movPropiedadesPlantas['totales']['mov_total_transf']
const mov_total_od = movPropiedadesPlantas['totales']['mov_total_od']
const mov_total_gdd = movPropiedadesPlantas['totales']['mov_total_gdd']
const mov_total_sf = movPropiedadesPlantas['totales']['mov_total_sf']

/* PERIODO ANTERIOR */
const mov_terreno_si_ant = movPropiedadesPlantasAnt['terrenos']['mov_terreno_si_ant']
const mov_edificios_si_ant = movPropiedadesPlantasAnt['edificios']['mov_edificios_si_ant']
const mov_construccionesencurso_si_ant = movPropiedadesPlantasAnt['construccionesencurso']['mov_construccionesencurso_si_ant']
const mov_instalaciones_si_ant = movPropiedadesPlantasAnt['instalaciones']['mov_instalaciones_si_ant']
const mov_mueblesyenseres_si_ant = movPropiedadesPlantasAnt['mueblesyenseres']['mov_mueblesyenseres_si_ant']
const mov_maquinariayequipo_si_ant = movPropiedadesPlantasAnt['maquinariayequipo']['mov_maquinariayequipo_si_ant']
const mov_vehiculo_si_ant = movPropiedadesPlantasAnt['vehiculo']['mov_vehiculo_si_ant']
const mov_equipodecomputacion_si_ant = movPropiedadesPlantasAnt['equipodecomputacion']['mov_equipodecomputacion_si_ant']
const mov_otrospropiedadesplantasyequipos_si_ant = movPropiedadesPlantasAnt['otros']['mov_otrospropiedadesplantasyequipos_si_ant']

const mov_terreno_sida_ant = movPropiedadesPlantasAnt['terrenos']['mov_terreno_sida_ant']
const mov_edificios_sida_ant = movPropiedadesPlantasAnt['edificios']['mov_edificios_sida_ant']
const mov_construccionesencurso_sida_ant = movPropiedadesPlantasAnt['construccionesencurso']['mov_construccionesencurso_sida_ant']
const mov_instalaciones_sida_ant = movPropiedadesPlantasAnt['instalaciones']['mov_instalaciones_sida_ant']
const mov_mueblesyenseres_sida_ant = movPropiedadesPlantasAnt['mueblesyenseres']['mov_mueblesyenseres_sida_ant']
const mov_maquinariayequipo_sida_ant = movPropiedadesPlantasAnt['maquinariayequipo']['mov_maquinariayequipo_sida_ant']
const mov_vehiculo_sida_ant = movPropiedadesPlantasAnt['vehiculo']['mov_vehiculo_sida_ant']
const mov_equipodecomputacion_sida_ant = movPropiedadesPlantasAnt['equipodecomputacion']['mov_equipodecomputacion_sida_ant']
const mov_otrospropiedadesplantasyequipos_sida_ant = movPropiedadesPlantasAnt['otros']['mov_otrospropiedadesplantasyequipos_sida_ant']

const mov_terreno_compras_ant = movPropiedadesPlantasAnt['terrenos']['mov_terreno_compras_ant']
const mov_edificios_compras_ant = movPropiedadesPlantasAnt['edificios']['mov_edificios_compras_ant']
const mov_construccionesencurso_compras_ant = movPropiedadesPlantasAnt['construccionesencurso']['mov_construccionesencurso_compras_ant']
const mov_instalaciones_compras_ant = movPropiedadesPlantasAnt['instalaciones']['mov_instalaciones_compras_ant']
const mov_mueblesyenseres_compras_ant = movPropiedadesPlantasAnt['mueblesyenseres']['mov_mueblesyenseres_compras_ant']
const mov_maquinariayequipo_compras_ant = movPropiedadesPlantasAnt['maquinariayequipo']['mov_maquinariayequipo_compras_ant']
const mov_vehiculo_compras_ant = movPropiedadesPlantasAnt['vehiculo']['mov_vehiculo_compras_ant']
const mov_equipodecomputacion_compras_ant = movPropiedadesPlantasAnt['equipodecomputacion']['mov_equipodecomputacion_compras_ant']
const mov_otrospropiedadesplantasyequipos_compras_ant = movPropiedadesPlantasAnt['otros']['mov_otrospropiedadesplantasyequipos_compras_ant']

const mov_terreno_bilddb_ant = movPropiedadesPlantasAnt['terrenos']['mov_terreno_bilddb_ant']
const mov_edificios_bilddb_ant = movPropiedadesPlantasAnt['edificios']['mov_edificios_bilddb_ant']
const mov_construccionesencurso_bilddb_ant = movPropiedadesPlantasAnt['construccionesencurso']['mov_construccionesencurso_bilddb_ant']
const mov_instalaciones_bilddb_ant = movPropiedadesPlantasAnt['instalaciones']['mov_instalaciones_bilddb_ant']
const mov_mueblesyenseres_bilddb_ant = movPropiedadesPlantasAnt['mueblesyenseres']['mov_mueblesyenseres_bilddb_ant']
const mov_maquinariayequipo_bilddb_ant = movPropiedadesPlantasAnt['maquinariayequipo']['mov_maquinariayequipo_bilddb_ant']
const mov_vehiculo_bilddb_ant = movPropiedadesPlantasAnt['vehiculo']['mov_vehiculo_bilddb_ant']
const mov_equipodecomputacion_bilddb_ant = movPropiedadesPlantasAnt['equipodecomputacion']['mov_equipodecomputacion_bilddb_ant']
const mov_otrospropiedadesplantasyequipos_bilddb_ant = movPropiedadesPlantasAnt['otros']['mov_otrospropiedadesplantasyequipos_bilddb_ant']

const mov_terreno_transf_ant = movPropiedadesPlantasAnt['terrenos']['mov_terreno_transf_ant']
const mov_edificios_transf_ant = movPropiedadesPlantasAnt['edificios']['mov_edificios_transf_ant']
const mov_construccionesencurso_transf_ant = movPropiedadesPlantasAnt['construccionesencurso']['mov_construccionesencurso_transf_ant']
const mov_instalaciones_transf_ant = movPropiedadesPlantasAnt['instalaciones']['mov_instalaciones_transf_ant']
const mov_mueblesyenseres_transf_ant = movPropiedadesPlantasAnt['mueblesyenseres']['mov_mueblesyenseres_transf_ant']
const mov_maquinariayequipo_transf_ant = movPropiedadesPlantasAnt['maquinariayequipo']['mov_maquinariayequipo_transf_ant']
const mov_vehiculo_transf_ant = movPropiedadesPlantasAnt['vehiculo']['mov_vehiculo_transf_ant']
const mov_equipodecomputacion_transf_ant = movPropiedadesPlantasAnt['equipodecomputacion']['mov_equipodecomputacion_transf_ant']
const mov_otrospropiedadesplantasyequipos_transf_ant = movPropiedadesPlantasAnt['otros']['mov_otrospropiedadesplantasyequipos_transf_ant']

const mov_terreno_od_ant = movPropiedadesPlantasAnt['terrenos']['mov_terreno_od_ant']
const mov_edificios_od_ant = movPropiedadesPlantasAnt['edificios']['mov_edificios_od_ant']
const mov_construccionesencurso_od_ant = movPropiedadesPlantasAnt['construccionesencurso']['mov_construccionesencurso_od_ant']
const mov_instalaciones_od_ant = movPropiedadesPlantasAnt['instalaciones']['mov_instalaciones_od_ant']
const mov_mueblesyenseres_od_ant = movPropiedadesPlantasAnt['mueblesyenseres']['mov_mueblesyenseres_od_ant']
const mov_maquinariayequipo_od_ant = movPropiedadesPlantasAnt['maquinariayequipo']['mov_maquinariayequipo_od_ant']
const mov_vehiculo_od_ant = movPropiedadesPlantasAnt['vehiculo']['mov_vehiculo_od_ant']
const mov_equipodecomputacion_od_ant = movPropiedadesPlantasAnt['equipodecomputacion']['mov_equipodecomputacion_od_ant']
const mov_otrospropiedadesplantasyequipos_od_ant = movPropiedadesPlantasAnt['otros']['mov_otrospropiedadesplantasyequipos_od_ant']

const mov_terreno_gdd_ant = movPropiedadesPlantasAnt['terrenos']['mov_terreno_gdd_ant']
const mov_edificios_gdd_ant = movPropiedadesPlantasAnt['edificios']['mov_edificios_gdd_ant']
const mov_construccionesencurso_gdd_ant = movPropiedadesPlantasAnt['construccionesencurso']['mov_construccionesencurso_gdd_ant']
const mov_instalaciones_gdd_ant = movPropiedadesPlantasAnt['instalaciones']['mov_instalaciones_gdd_ant']
const mov_mueblesyenseres_gdd_ant = movPropiedadesPlantasAnt['mueblesyenseres']['mov_mueblesyenseres_gdd_ant']
const mov_maquinariayequipo_gdd_ant = movPropiedadesPlantasAnt['maquinariayequipo']['mov_maquinariayequipo_gdd_ant']
const mov_vehiculo_gdd_ant = movPropiedadesPlantasAnt['vehiculo']['mov_vehiculo_gdd_ant']
const mov_equipodecomputacion_gdd_ant = movPropiedadesPlantasAnt['equipodecomputacion']['mov_equipodecomputacion_gdd_ant']
const mov_otrospropiedadesplantasyequipos_gdd_ant = movPropiedadesPlantasAnt['otros']['mov_otrospropiedadesplantasyequipos_gdd_ant']

const mov_terreno_total_ant = movPropiedadesPlantasAnt['terrenos']['mov_terreno_total_ant']
const mov_edificios_total_ant = movPropiedadesPlantasAnt['edificios']['mov_edificios_total_ant']
const mov_construccionesencurso_total_ant = movPropiedadesPlantasAnt['construccionesencurso']['mov_construccionesencurso_total_ant']
const mov_instalaciones_total_ant = movPropiedadesPlantasAnt['instalaciones']['mov_instalaciones_total_ant']
const mov_mueblesyenseres_total_ant = movPropiedadesPlantasAnt['mueblesyenseres']['mov_mueblesyenseres_total_ant']
const mov_maquinariayequipo_total_ant = movPropiedadesPlantasAnt['maquinariayequipo']['mov_maquinariayequipo_total_ant']
const mov_vehiculo_total_ant = movPropiedadesPlantasAnt['vehiculo']['mov_vehiculo_total_ant']
const mov_equipodecomputacion_total_ant = movPropiedadesPlantasAnt['equipodecomputacion']['mov_equipodecomputacion_total_ant']
const mov_otrospropiedadesplantasyequipos_total_ant = movPropiedadesPlantasAnt['otros']['mov_otrospropiedadesplantasyequipos_total_ant']

const mov_total_si_ant = movPropiedadesPlantasAnt['totales']['mov_total_si_ant']
const mov_total_sida_ant = movPropiedadesPlantasAnt['totales']['mov_total_sida_ant']
const mov_total_compras_ant = movPropiedadesPlantasAnt['totales']['mov_total_compras_ant']
const mov_total_bilddb_ant = movPropiedadesPlantasAnt['totales']['mov_total_bilddb_ant']
const mov_total_transf_ant = movPropiedadesPlantasAnt['totales']['mov_total_transf_ant']
const mov_total_od_ant = movPropiedadesPlantasAnt['totales']['mov_total_od_ant']
const mov_total_gdd_ant = movPropiedadesPlantasAnt['totales']['mov_total_gdd_ant']
const mov_total_sf_ant = movPropiedadesPlantasAnt['totales']['mov_total_sf_ant']

const mov_saldofinalsegunmovimiento = ref(0)
const mov_saldofinalsegunmovimiento_ant = ref(0)

const mov_diferenciaporcuadrar = ref(0)
const mov_diferenciaporcuadrar_ant = ref(0)

const convertirNegativo_terreno_sida_ant = async id => { mov_terreno_sida_ant.value = (Number(mov_terreno_sida_ant.value) != 0 && Number(mov_terreno_sida_ant.value) > 0) ? Number(mov_terreno_sida_ant.value) * -1 : Number(mov_terreno_sida_ant.value) }
const convertirNegativo_edificios_sida_ant = async id => { mov_edificios_sida_ant.value = (Number(mov_edificios_sida_ant.value) != 0 && Number(mov_edificios_sida_ant.value) > 0) ? Number(mov_edificios_sida_ant.value) * -1 : Number(mov_edificios_sida_ant.value) }

const convertirNegativo_construccionesencurso_sida_ant = async id => { mov_construccionesencurso_sida_ant.value = (Number(mov_construccionesencurso_sida_ant.value) != 0 && Number(mov_construccionesencurso_sida_ant.value) > 0) ? Number(mov_construccionesencurso_sida_ant.value) * -1 : Number(mov_construccionesencurso_sida_ant.value) }

const convertirNegativo_instalaciones_sida_ant = async id => { mov_instalaciones_sida_ant.value = (Number(mov_instalaciones_sida_ant.value) != 0 && Number(mov_instalaciones_sida_ant.value) > 0) ? Number(mov_instalaciones_sida_ant.value) * -1 : Number(mov_instalaciones_sida_ant.value) }

const convertirNegativo_mueblesyenseres_sida_ant = async id => { mov_mueblesyenseres_sida_ant.value = (Number(mov_mueblesyenseres_sida_ant.value) != 0 && Number(mov_mueblesyenseres_sida_ant.value) > 0) ? Number(mov_mueblesyenseres_sida_ant.value) * -1 : Number(mov_mueblesyenseres_sida_ant.value) }

const convertirNegativo_maquinariasyequipos_sida_ant = async id => { mov_maquinariayequipo_sida_ant.value = (Number(mov_maquinariayequipo_sida_ant.value) != 0 && Number(mov_maquinariayequipo_sida_ant.value) > 0) ? Number(mov_maquinariayequipo_sida_ant.value) * -1 : Number(mov_maquinariayequipo_sida_ant.value) }

const convertirNegativo_vehiculo_sida_ant = async id => { mov_vehiculo_sida_ant.value = (Number(mov_vehiculo_sida_ant.value) != 0 && Number(mov_vehiculo_sida_ant.value) > 0) ? Number(mov_vehiculo_sida_ant.value) * -1 : Number(mov_vehiculo_sida_ant.value) }

const convertirNegativo_equipodecomputacion_sida_ant = async id => { mov_equipodecomputacion_sida_ant.value = (Number(mov_equipodecomputacion_sida_ant.value) != 0 && Number(mov_equipodecomputacion_sida_ant.value) > 0) ? Number(mov_equipodecomputacion_sida_ant.value) * -1 : Number(mov_equipodecomputacion_sida_ant.value) }

const convertirNegativo_otrospropiedadesplantasyequipo_sida_ant = async id => { mov_otrospropiedadesplantasyequipos_sida_ant.value = (Number(mov_otrospropiedadesplantasyequipos_sida_ant.value) != 0 && Number(mov_otrospropiedadesplantasyequipos_sida_ant.value) > 0) ? Number(mov_otrospropiedadesplantasyequipos_sida_ant.value) * -1 : Number(mov_otrospropiedadesplantasyequipos_sida_ant.value) }

const convertirNegativo_terreno_bilddb_ant = async id => { mov_terreno_bilddb_ant.value = (Number(mov_terreno_bilddb_ant.value) != 0 && Number(mov_terreno_bilddb_ant.value) > 0) ? Number(mov_terreno_bilddb_ant.value) * -1 : Number(mov_terreno_bilddb_ant.value) }

const convertirNegativo_edificios_bilddb_ant = async id => { mov_edificios_bilddb_ant.value = (Number(mov_edificios_bilddb_ant.value) != 0 && Number(mov_edificios_bilddb_ant.value) > 0) ? Number(mov_edificios_bilddb_ant.value) * -1 : Number(mov_edificios_bilddb_ant.value) }

const convertirNegativo_construccionesencurso_bilddb_ant = async id => { mov_construccionesencurso_bilddb_ant.value = (Number(mov_construccionesencurso_bilddb_ant.value) != 0 && Number(mov_construccionesencurso_bilddb_ant.value) > 0) ? Number(mov_construccionesencurso_bilddb_ant.value) * -1 : Number(mov_construccionesencurso_bilddb_ant.value) }

const convertirNegativo_instalaciones_bilddb_ant = async id => { mov_instalaciones_bilddb_ant.value = (Number(mov_instalaciones_bilddb_ant.value) != 0 && Number(mov_instalaciones_bilddb_ant.value) > 0) ? Number(mov_instalaciones_bilddb_ant.value) * -1 : Number(mov_instalaciones_bilddb_ant.value) }

const convertirNegativo_mueblesyenseres_bilddb_ant = async id => { mov_mueblesyenseres_bilddb_ant.value = (Number(mov_mueblesyenseres_bilddb_ant.value) != 0 && Number(mov_mueblesyenseres_bilddb_ant.value) > 0) ? Number(mov_mueblesyenseres_bilddb_ant.value) * -1 : Number(mov_mueblesyenseres_bilddb_ant.value) }

const convertirNegativo_maquinariasyequipos_bilddb_ant = async id => { mov_maquinariayequipo_bilddb_ant.value = (Number(mov_maquinariayequipo_bilddb_ant.value) != 0 && Number(mov_maquinariayequipo_bilddb_ant.value) > 0) ? Number(mov_maquinariayequipo_bilddb_ant.value) * -1 : Number(mov_maquinariayequipo_bilddb_ant.value) }

const convertirNegativo_vehiculo_bilddb_ant = async id => { mov_vehiculo_bilddb_ant.value = (Number(mov_vehiculo_bilddb_ant.value) != 0 && Number(mov_vehiculo_bilddb_ant.value) > 0) ? Number(mov_vehiculo_bilddb_ant.value) * -1 : Number(mov_vehiculo_bilddb_ant.value) }

const convertirNegativo_equipodecomputacion_bilddb_ant = async id => { mov_equipodecomputacion_bilddb_ant.value = (Number(mov_equipodecomputacion_bilddb_ant.value) != 0 && Number(mov_equipodecomputacion_bilddb_ant.value) > 0) ? Number(mov_equipodecomputacion_bilddb_ant.value) * -1 : Number(mov_equipodecomputacion_bilddb_ant.value) }

const convertirNegativo_otrospropiedadesplantasyequipo_bilddb_ant = async id => { mov_otrospropiedadesplantasyequipos_bilddb_ant.value = (Number(mov_otrospropiedadesplantasyequipos_bilddb_ant.value) != 0 && Number(mov_otrospropiedadesplantasyequipos_bilddb_ant.value) > 0) ? Number(mov_otrospropiedadesplantasyequipos_bilddb_ant.value) * -1 : Number(mov_otrospropiedadesplantasyequipos_bilddb_ant.value) }

const convertirNegativo_terreno_bilddb = async id => { mov_terreno_bilddb.value = (Number(mov_terreno_bilddb.value) != 0 && Number(mov_terreno_bilddb.value) > 0) ? Number(mov_terreno_bilddb.value) * -1 : Number(mov_terreno_bilddb.value) }

const convertirNegativo_edificios_bilddb = async id => { mov_edificios_bilddb.value = (Number(mov_edificios_bilddb.value) != 0 && Number(mov_edificios_bilddb.value) > 0) ? Number(mov_edificios_bilddb.value) * -1 : Number(mov_edificios_bilddb.value) }

const convertirNegativo_instalaciones_bilddb = async id => { mov_instalaciones_bilddb.value = (Number(mov_instalaciones_bilddb.value) != 0 && Number(mov_instalaciones_bilddb.value) > 0) ? Number(mov_instalaciones_bilddb.value) * -1 : Number(mov_instalaciones_bilddb.value) }

const convertirNegativo_construccionesencurso_bilddb = async id => { mov_construccionesencurso_bilddb.value = (Number(mov_construccionesencurso_bilddb.value) != 0 && Number(mov_construccionesencurso_bilddb.value) > 0) ? Number(mov_construccionesencurso_bilddb.value) * -1 : Number(mov_construccionesencurso_bilddb.value) }

const convertirNegativo_mueblesyenseres_bilddb = async id => { mov_mueblesyenseres_bilddb.value = (Number(mov_mueblesyenseres_bilddb.value) != 0 && Number(mov_mueblesyenseres_bilddb.value) > 0) ? Number(mov_mueblesyenseres_bilddb.value) * -1 : Number(mov_mueblesyenseres_bilddb.value) }

const convertirNegativo_maquinariasyequipos_bilddb = async id => { mov_maquinariayequipo_bilddb.value = (Number(mov_maquinariayequipo_bilddb.value) != 0 && Number(mov_maquinariayequipo_bilddb.value) > 0) ? Number(mov_maquinariayequipo_bilddb.value) * -1 : Number(mov_maquinariayequipo_bilddb.value) }

const convertirNegativo_vehiculo_bilddb = async id => { mov_vehiculo_bilddb.value = (Number(mov_vehiculo_bilddb.value) != 0 && Number(mov_vehiculo_bilddb.value) > 0) ? Number(mov_vehiculo_bilddb.value) * -1 : Number(mov_vehiculo_bilddb.value) }

const convertirNegativo_equipodecomputacion_bilddb = async id => { mov_equipodecomputacion_bilddb.value = (Number(mov_equipodecomputacion_bilddb.value) != 0 && Number(mov_equipodecomputacion_bilddb.value) > 0) ? Number(mov_equipodecomputacion_bilddb.value) * -1 : Number(mov_equipodecomputacion_bilddb.value) }

const convertirNegativo_otrospropiedadesplantasyequipo_bilddb = async id => { mov_otrospropiedadesplantasyequipos_bilddb.value = (Number(mov_otrospropiedadesplantasyequipos_bilddb.value) != 0 && Number(mov_otrospropiedadesplantasyequipos_bilddb.value) > 0) ? Number(mov_otrospropiedadesplantasyequipos_bilddb.value) * -1 : Number(mov_otrospropiedadesplantasyequipos_bilddb.value) }

const convertirNegativo_terreno_gdd_ant = async id => { mov_terreno_gdd_ant.value = (Number(mov_terreno_gdd_ant.value) != 0 && Number(mov_terreno_gdd_ant.value) > 0) ? Number(mov_terreno_gdd_ant.value) * -1 : Number(mov_terreno_gdd_ant.value) }


const convertirNegativo_edificios_gdd_ant = async id => { mov_edificios_gdd_ant.value = (Number(mov_edificios_gdd_ant.value) != 0 && Number(mov_edificios_gdd_ant.value) > 0) ? Number(mov_edificios_gdd_ant.value) * -1 : Number(mov_edificios_gdd_ant.value) }

const convertirNegativo_construccionesencurso_gdd_ant = async id => { mov_construccionesencurso_gdd_ant.value = (Number(mov_construccionesencurso_gdd_ant.value) != 0 && Number(mov_construccionesencurso_gdd_ant.value) > 0) ? Number(mov_construccionesencurso_gdd_ant.value) * -1 : Number(mov_construccionesencurso_gdd_ant.value) }

const convertirNegativo_instalaciones_gdd_ant = async id => { mov_instalaciones_gdd_ant.value = (Number(mov_instalaciones_gdd_ant.value) != 0 && Number(mov_instalaciones_gdd_ant.value) > 0) ? Number(mov_instalaciones_gdd_ant.value) * -1 : Number(mov_instalaciones_gdd_ant.value) }

const convertirNegativo_mueblesyenseres_gdd_ant = async id => { mov_mueblesyenseres_gdd_ant.value = (Number(mov_mueblesyenseres_gdd_ant.value) != 0 && Number(mov_mueblesyenseres_gdd_ant.value) > 0) ? Number(mov_mueblesyenseres_gdd_ant.value) * -1 : Number(mov_mueblesyenseres_gdd_ant.value) }

const convertirNegativo_maquinariayequipo_gdd_ant = async id => { mov_maquinariayequipo_gdd_ant.value = (Number(mov_maquinariayequipo_gdd_ant.value) != 0 && Number(mov_maquinariayequipo_gdd_ant.value) > 0) ? Number(mov_maquinariayequipo_gdd_ant.value) * -1 : Number(mov_maquinariayequipo_gdd_ant.value) }

const convertirNegativo_vehiculo_gdd_ant = async id => { mov_vehiculo_gdd_ant.value = (Number(mov_vehiculo_gdd_ant.value) != 0 && Number(mov_vehiculo_gdd_ant.value) > 0) ? Number(mov_vehiculo_gdd_ant.value) * -1 : Number(mov_vehiculo_gdd_ant.value) }

const convertirNegativo_equipodecomputacion_gdd_ant = async id => { mov_equipodecomputacion_gdd_ant.value = (Number(mov_equipodecomputacion_gdd_ant.value) != 0 && Number(mov_equipodecomputacion_gdd_ant.value) > 0) ? Number(mov_equipodecomputacion_gdd_ant.value) * -1 : Number(mov_equipodecomputacion_gdd_ant.value) }

const convertirNegativo_otrospropiedadesplantasyequipos_gdd_ant = async id => { mov_otrospropiedadesplantasyequipos_gdd_ant.value = (Number(mov_otrospropiedadesplantasyequipos_gdd_ant.value) != 0 && Number(mov_otrospropiedadesplantasyequipos_gdd_ant.value) > 0) ? Number(mov_otrospropiedadesplantasyequipos_gdd_ant.value) * -1 : Number(mov_otrospropiedadesplantasyequipos_gdd_ant.value) }

const convertirNegativo_terreno_gdd = async id => { mov_terreno_gdd.value = (Number(mov_terreno_gdd.value) != 0 && Number(mov_terreno_gdd.value) > 0) ? Number(mov_terreno_gdd.value) * -1 : Number(mov_terreno_gdd.value) }

const convertirNegativo_edificios_gdd = async id => { mov_edificios_gdd.value = (Number(mov_edificios_gdd.value) != 0 && Number(mov_edificios_gdd.value) > 0) ? Number(mov_edificios_gdd.value) * -1 : Number(mov_edificios_gdd.value) }

const convertirNegativo_construccionesencurso_gdd = async id => { mov_construccionesencurso_gdd.value = (Number(mov_construccionesencurso_gdd.value) != 0 && Number(mov_construccionesencurso_gdd.value) > 0) ? Number(mov_construccionesencurso_gdd.value) * -1 : Number(mov_construccionesencurso_gdd.value) }

const convertirNegativo_instalaciones_gdd = async id => { mov_instalaciones_gdd.value = (Number(mov_instalaciones_gdd.value) != 0 && Number(mov_instalaciones_gdd.value) > 0) ? Number(mov_instalaciones_gdd.value) * -1 : Number(mov_instalaciones_gdd.value) }

const convertirNegativo_mueblesyenseres_gdd = async id => { mov_mueblesyenseres_gdd.value = (Number(mov_mueblesyenseres_gdd.value) != 0 && Number(mov_mueblesyenseres_gdd.value) > 0) ? Number(mov_mueblesyenseres_gdd.value) * -1 : Number(mov_mueblesyenseres_gdd.value) }

const convertirNegativo_maquinariayequipo_gdd = async id => { mov_maquinariayequipo_gdd.value = (Number(mov_maquinariayequipo_gdd.value) != 0 && Number(mov_maquinariayequipo_gdd.value) > 0) ? Number(mov_maquinariayequipo_gdd.value) * -1 : Number(mov_maquinariayequipo_gdd.value) }

const convertirNegativo_vehiculo_gdd = async id => { mov_vehiculo_gdd.value = (Number(mov_vehiculo_gdd.value) != 0 && Number(mov_vehiculo_gdd.value) > 0) ? Number(mov_vehiculo_gdd.value) * -1 : Number(mov_vehiculo_gdd.value) }

const convertirNegativo_equipodecomputacion_gdd = async id => { mov_equipodecomputacion_gdd.value = (Number(mov_equipodecomputacion_gdd.value) != 0 && Number(mov_equipodecomputacion_gdd.value) > 0) ? Number(mov_equipodecomputacion_gdd.value) * -1 : Number(mov_equipodecomputacion_gdd.value) }

const convertirNegativo_otrospropiedadesplantasyequipos_gdd = async id => { mov_otrospropiedadesplantasyequipos_gdd.value = (Number(mov_otrospropiedadesplantasyequipos_gdd.value) != 0 && Number(mov_otrospropiedadesplantasyequipos_gdd.value) > 0) ? Number(mov_otrospropiedadesplantasyequipos_gdd.value) * -1 : Number(mov_otrospropiedadesplantasyequipos_gdd.value) }

const mov_saldofinalsegunesf_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10201_ant", true)).toFixed(2)
})

const mov_saldofinalsegunesf = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10201")).toFixed(2)
})

const handleActionClick = async id => {
  mov_terreno_si.value = Number(mov_terreno_total_ant.value).toFixed(2)
  mov_edificios_si.value = Number(mov_edificios_total_ant.value).toFixed(2)
  mov_construccionesencurso_si.value = Number(mov_construccionesencurso_total_ant.value).toFixed(2)
  mov_instalaciones_si.value = Number(mov_instalaciones_total_ant.value).toFixed(2)
  mov_mueblesyenseres_si.value = Number(mov_mueblesyenseres_total_ant.value).toFixed(2)
  mov_maquinariayequipo_si.value = Number(mov_maquinariayequipo_total_ant.value).toFixed(2)
  mov_vehiculo_si.value = Number(mov_vehiculo_total_ant.value).toFixed(2)
  mov_equipodecomputacion_si.value = Number(mov_equipodecomputacion_total_ant.value).toFixed(2)
  mov_otrospropiedadesplantasyequipos_si.value = Number(mov_otrospropiedadesplantasyequipos_total_ant.value).toFixed(2)

  mov_total_si.value = (Number(mov_terreno_si.value) + Number(mov_edificios_si.value) + Number(mov_construccionesencurso_si.value) + Number(mov_instalaciones_si.value) + Number(mov_mueblesyenseres_si.value) + Number(mov_maquinariayequipo_si.value) + Number(mov_vehiculo_si.value) + Number(mov_equipodecomputacion_si.value) + Number(mov_otrospropiedadesplantasyequipos_si.value)).toFixed(2)
  mov_total_sida.value = (Number(mov_terreno_sida.value) + Number(mov_edificios_sida.value) + Number(mov_construccionesencurso_sida.value) + Number(mov_instalaciones_sida.value) + Number(mov_mueblesyenseres_sida.value) + Number(mov_maquinariayequipo_sida.value) + Number(mov_vehiculo_sida.value) + Number(mov_equipodecomputacion_sida.value) + Number(mov_otrospropiedadesplantasyequipos_sida.value)).toFixed(2)
  mov_total_compras.value = (Number(mov_terreno_compras.value) + Number(mov_edificios_compras.value) + Number(mov_construccionesencurso_compras.value) + Number(mov_instalaciones_compras.value) + Number(mov_mueblesyenseres_compras.value) + Number(mov_maquinariayequipo_compras.value) + Number(mov_vehiculo_compras.value) + Number(mov_equipodecomputacion_compras.value) + Number(mov_otrospropiedadesplantasyequipos_compras.value)).toFixed(2)
  mov_total_bilddb.value = (Number(mov_terreno_bilddb.value) + Number(mov_edificios_bilddb.value) + Number(mov_construccionesencurso_bilddb.value) + Number(mov_instalaciones_bilddb.value) + Number(mov_mueblesyenseres_bilddb.value) + Number(mov_maquinariayequipo_bilddb.value) + Number(mov_vehiculo_bilddb.value) + Number(mov_equipodecomputacion_bilddb.value) + Number(mov_otrospropiedadesplantasyequipos_bilddb.value)).toFixed(2)
  mov_total_transf.value = (Number(mov_terreno_transf.value) + Number(mov_edificios_transf.value) + Number(mov_construccionesencurso_transf.value) + Number(mov_instalaciones_transf.value) + Number(mov_mueblesyenseres_transf.value) + Number(mov_maquinariayequipo_transf.value) + Number(mov_vehiculo_transf.value) + Number(mov_equipodecomputacion_transf.value) + Number(mov_otrospropiedadesplantasyequipos_transf.value)).toFixed(2)
  mov_total_od.value = (Number(mov_terreno_od.value) + Number(mov_edificios_od.value) + Number(mov_construccionesencurso_od.value) + Number(mov_instalaciones_od.value) + Number(mov_mueblesyenseres_od.value) + Number(mov_maquinariayequipo_od.value) + Number(mov_vehiculo_od.value) + Number(mov_equipodecomputacion_od.value) + Number(mov_otrospropiedadesplantasyequipos_od.value)).toFixed(2)
  mov_total_gdd.value = (Number(mov_terreno_gdd.value) + Number(mov_edificios_gdd.value) + Number(mov_construccionesencurso_gdd.value) + Number(mov_instalaciones_gdd.value) + Number(mov_mueblesyenseres_gdd.value) + Number(mov_maquinariayequipo_gdd.value) + Number(mov_vehiculo_gdd.value) + Number(mov_equipodecomputacion_gdd.value) + Number(mov_otrospropiedadesplantasyequipos_gdd.value)).toFixed(2)

  mov_terreno_total.value = (Number(mov_terreno_si.value) + Number(mov_terreno_sida.value) + Number(mov_terreno_compras.value) + Number(mov_terreno_bilddb.value) + Number(mov_terreno_transf.value) + Number(mov_terreno_od.value) + Number(mov_terreno_gdd.value)).toFixed(2)
  mov_edificios_total.value = (Number(mov_edificios_si.value) + Number(mov_edificios_sida.value) + Number(mov_edificios_compras.value) + Number(mov_edificios_bilddb.value) + Number(mov_edificios_transf.value) + Number(mov_edificios_od.value) + Number(mov_edificios_gdd.value)).toFixed(2)
  mov_construccionesencurso_total.value = (Number(mov_construccionesencurso_si.value) + Number(mov_construccionesencurso_sida.value) + Number(mov_construccionesencurso_compras.value) + Number(mov_construccionesencurso_bilddb.value) + Number(mov_construccionesencurso_transf.value) + Number(mov_construccionesencurso_od.value) + Number(mov_construccionesencurso_gdd.value)).toFixed(2)
  mov_instalaciones_total.value = (Number(mov_instalaciones_si.value) + Number(mov_instalaciones_sida.value) + Number(mov_instalaciones_compras.value) + Number(mov_instalaciones_bilddb.value) + Number(mov_instalaciones_transf.value) + Number(mov_instalaciones_od.value) + Number(mov_instalaciones_gdd.value)).toFixed(2)
  mov_mueblesyenseres_total.value = (Number(mov_mueblesyenseres_si.value) + Number(mov_mueblesyenseres_sida.value) + Number(mov_mueblesyenseres_compras.value) + Number(mov_mueblesyenseres_bilddb.value) + Number(mov_mueblesyenseres_transf.value) + Number(mov_mueblesyenseres_od.value) + Number(mov_mueblesyenseres_gdd.value)).toFixed(2)
  mov_maquinariayequipo_total.value = (Number(mov_maquinariayequipo_si.value) + Number(mov_maquinariayequipo_sida.value) + Number(mov_maquinariayequipo_compras.value) + Number(mov_maquinariayequipo_bilddb.value) + Number(mov_maquinariayequipo_transf.value) + Number(mov_maquinariayequipo_od.value) + Number(mov_maquinariayequipo_gdd.value)).toFixed(2)
  mov_vehiculo_total.value = (Number(mov_vehiculo_si.value) + Number(mov_vehiculo_sida.value) + Number(mov_vehiculo_compras.value) + Number(mov_vehiculo_bilddb.value) + Number(mov_vehiculo_transf.value) + Number(mov_vehiculo_od.value) + Number(mov_vehiculo_gdd.value)).toFixed(2)
  mov_equipodecomputacion_total.value = (Number(mov_equipodecomputacion_si.value) + Number(mov_equipodecomputacion_sida.value) + Number(mov_equipodecomputacion_compras.value) + Number(mov_equipodecomputacion_bilddb.value) + Number(mov_equipodecomputacion_transf.value) + Number(mov_equipodecomputacion_od.value) + Number(mov_equipodecomputacion_gdd.value)).toFixed(2)
  mov_otrospropiedadesplantasyequipos_total.value = (Number(mov_otrospropiedadesplantasyequipos_si.value) + Number(mov_otrospropiedadesplantasyequipos_sida.value) + Number(mov_otrospropiedadesplantasyequipos_compras.value) + Number(mov_otrospropiedadesplantasyequipos_bilddb.value) + Number(mov_otrospropiedadesplantasyequipos_transf.value) + Number(mov_otrospropiedadesplantasyequipos_od.value) + Number(mov_otrospropiedadesplantasyequipos_gdd.value)).toFixed(2)

  mov_total_sf.value = (Number(mov_terreno_total.value) + Number(mov_edificios_total.value) + Number(mov_construccionesencurso_total.value) + Number(mov_instalaciones_total.value) + Number(mov_mueblesyenseres_total.value) + Number(mov_maquinariayequipo_total.value) + Number(mov_vehiculo_total.value) + Number(mov_equipodecomputacion_total.value) + Number(mov_otrospropiedadesplantasyequipos_total.value)).toFixed(2)
  mov_saldofinalsegunmovimiento.value = Number(mov_total_sf.value).toFixed(2)

  mov_diferenciaporcuadrar.value = (Number(mov_total_sf.value) - Number(mov_saldofinalsegunesf.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_ppye(mov_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_ppye", mov_diferenciaporcuadrar.value)

  const movpropiedadesplantasyequipos = {
    mov_terreno_si: mov_terreno_si.value,
    mov_edificios_si: mov_edificios_si.value,
    mov_construccionesencurso_si: mov_construccionesencurso_si.value,
    mov_instalaciones_si: mov_instalaciones_si.value,
    mov_mueblesyenseres_si: mov_mueblesyenseres_si.value,
    mov_maquinariayequipo_si: mov_maquinariayequipo_si.value,
    mov_vehiculo_si: mov_vehiculo_si.value,
    mov_equipodecomputacion_si: mov_equipodecomputacion_si.value,
    mov_otrospropiedadesplantasyequipo_si: mov_otrospropiedadesplantasyequipos_si.value,

    mov_terreno_sida: mov_terreno_sida.value,
    mov_edificios_sida: mov_edificios_sida.value,
    mov_construccionesencurso_sida: mov_construccionesencurso_sida.value,
    mov_instalaciones_sida: mov_instalaciones_sida.value,
    mov_mueblesyenseres_sida: mov_mueblesyenseres_sida.value,
    mov_maquinariayequipo_sida: mov_maquinariayequipo_sida.value,
    mov_vehiculo_sida: mov_vehiculo_sida.value,
    mov_equipodecomputacion_sida: mov_equipodecomputacion_sida.value,
    mov_otrospropiedadesplantasyequipos_sida: mov_otrospropiedadesplantasyequipos_sida.value,

    mov_terreno_compras: mov_terreno_compras.value,
    mov_edificios_compras: mov_edificios_compras.value,
    mov_construccionesencurso_compras: mov_construccionesencurso_compras.value,
    mov_instalaciones_compras: mov_instalaciones_compras.value,
    mov_mueblesyenseres_compras: mov_mueblesyenseres_compras.value,
    mov_maquinariayequipo_compras: mov_maquinariayequipo_compras.value,
    mov_vehiculo_compras: mov_vehiculo_compras.value,
    mov_equipodecomputacion_compras: mov_equipodecomputacion_compras.value,
    mov_otrospropiedadesplantasyequipos_compras: mov_otrospropiedadesplantasyequipos_compras.value,

    mov_terreno_bilddb: mov_terreno_bilddb.value,
    mov_edificios_bilddb: mov_edificios_bilddb.value,
    mov_construccionesencurso_bilddb: mov_construccionesencurso_bilddb.value,
    mov_instalaciones_bilddb: mov_instalaciones_bilddb.value,
    mov_mueblesyenseres_bilddb: mov_mueblesyenseres_bilddb.value,
    mov_maquinariayequipo_bilddb: mov_maquinariayequipo_bilddb.value,
    mov_vehiculo_bilddb: mov_vehiculo_bilddb.value,
    mov_equipodecomputacion_bilddb: mov_equipodecomputacion_bilddb.value,
    mov_otrospropiedadesplantasyequipos_bilddb: mov_otrospropiedadesplantasyequipos_bilddb.value,

    mov_terreno_transf: mov_terreno_transf.value,
    mov_edificios_transf: mov_edificios_transf.value,
    mov_construccionesencurso_transf: mov_construccionesencurso_transf.value,
    mov_instalaciones_transf: mov_instalaciones_transf.value,
    mov_mueblesyenseres_transf: mov_mueblesyenseres_transf.value,
    mov_maquinariayequipo_transf: mov_maquinariayequipo_transf.value,
    mov_vehiculo_transf: mov_vehiculo_transf.value,
    mov_equipodecomputacion_transf: mov_equipodecomputacion_transf.value,
    mov_otrospropiedadesplantasyequipos_transf: mov_otrospropiedadesplantasyequipos_transf.value,

    mov_terreno_od: mov_terreno_od.value,
    mov_edificios_od: mov_edificios_od.value,
    mov_construccionesencurso_od: mov_construccionesencurso_od.value,
    mov_instalaciones_od: mov_instalaciones_od.value,
    mov_mueblesyenseres_od: mov_mueblesyenseres_od.value,
    mov_maquinariayequipo_od: mov_maquinariayequipo_od.value,
    mov_vehiculo_od: mov_vehiculo_od.value,
    mov_equipodecomputacion_od: mov_equipodecomputacion_od.value,
    mov_otrospropiedadesplantasyequipos_od: mov_otrospropiedadesplantasyequipos_od.value,

    mov_terreno_gdd: mov_terreno_gdd.value,
    mov_edificios_gdd: mov_edificios_gdd.value,
    mov_construccionesencurso_gdd: mov_construccionesencurso_gdd.value,
    mov_instalaciones_gdd: mov_instalaciones_gdd.value,
    mov_mueblesyenseres_gdd: mov_mueblesyenseres_gdd.value,
    mov_maquinariayequipo_gdd: mov_maquinariayequipo_gdd.value,
    mov_vehiculo_gdd: mov_vehiculo_gdd.value,
    mov_equipodecomputacion_gdd: mov_equipodecomputacion_gdd.value,
    mov_otrospropiedadesplantasyequipos_gdd: mov_otrospropiedadesplantasyequipos_gdd.value,

    mov_terreno_total: mov_terreno_total.value,
    mov_edificios_total: mov_edificios_total.value,
    mov_construccionesencurso_total: mov_construccionesencurso_total.value,
    mov_instalaciones_total: mov_instalaciones_total.value,
    mov_mueblesyenseres_total: mov_mueblesyenseres_total.value,
    mov_maquinariayequipo_total: mov_maquinariayequipo_total.value,
    mov_vehiculo_total: mov_vehiculo_total.value,
    mov_equipodecomputacion_total: mov_equipodecomputacion_total.value,
    mov_otrospropiedadesplantasyequipos_total: mov_otrospropiedadesplantasyequipos_total.value,

    mov_total_si: mov_total_si.value,
    mov_total_sida: mov_total_sida.value,
    mov_total_compras: mov_total_compras.value,
    mov_total_bilddb: mov_total_bilddb.value,
    mov_total_transf: mov_total_transf.value,
    mov_total_od: mov_total_od.value,
    mov_total_gdd: mov_total_gdd.value,
    mov_total_sf: mov_total_sf.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    movpropiedadesplantasyequipos: movpropiedadesplantasyequipos,
  })
}

const handleActionClick_ant = async id => {
  mov_total_si_ant.value = (Number(mov_terreno_si_ant.value) + Number(mov_edificios_si_ant.value) + Number(mov_construccionesencurso_si_ant.value) + Number(mov_instalaciones_si_ant.value) + Number(mov_mueblesyenseres_si_ant.value) + Number(mov_maquinariayequipo_si_ant.value) + Number(mov_vehiculo_si_ant.value) + Number(mov_equipodecomputacion_si_ant.value) + Number(mov_otrospropiedadesplantasyequipos_si_ant.value)).toFixed(2)
  mov_total_sida_ant.value = (Number(mov_terreno_sida_ant.value) + Number(mov_edificios_sida_ant.value) + Number(mov_construccionesencurso_sida_ant.value) + Number(mov_instalaciones_sida_ant.value) + Number(mov_mueblesyenseres_sida_ant.value) + Number(mov_maquinariayequipo_sida_ant.value) + Number(mov_vehiculo_sida_ant.value) + Number(mov_equipodecomputacion_sida_ant.value) + Number(mov_otrospropiedadesplantasyequipos_sida_ant.value)).toFixed(2)
  mov_total_compras_ant.value = (Number(mov_terreno_compras_ant.value) + Number(mov_edificios_compras_ant.value) + Number(mov_construccionesencurso_compras_ant.value) + Number(mov_instalaciones_compras_ant.value) + Number(mov_mueblesyenseres_compras_ant.value) + Number(mov_maquinariayequipo_compras_ant.value) + Number(mov_vehiculo_compras_ant.value) + Number(mov_equipodecomputacion_compras_ant.value) + Number(mov_otrospropiedadesplantasyequipos_compras_ant.value)).toFixed(2)
  mov_total_bilddb_ant.value = (Number(mov_terreno_bilddb_ant.value) + Number(mov_edificios_bilddb_ant.value) + Number(mov_construccionesencurso_bilddb_ant.value) + Number(mov_instalaciones_bilddb_ant.value) + Number(mov_mueblesyenseres_bilddb_ant.value) + Number(mov_maquinariayequipo_bilddb_ant.value) + Number(mov_vehiculo_bilddb_ant.value) + Number(mov_equipodecomputacion_bilddb_ant.value) + Number(mov_otrospropiedadesplantasyequipos_bilddb_ant.value)).toFixed(2)
  mov_total_transf_ant.value = (Number(mov_terreno_transf_ant.value) + Number(mov_edificios_transf_ant.value) + Number(mov_construccionesencurso_transf_ant.value) + Number(mov_instalaciones_transf_ant.value) + Number(mov_mueblesyenseres_transf_ant.value) + Number(mov_maquinariayequipo_transf_ant.value) + Number(mov_vehiculo_transf_ant.value) + Number(mov_equipodecomputacion_transf_ant.value) + Number(mov_otrospropiedadesplantasyequipos_transf_ant.value)).toFixed(2)
  mov_total_od_ant.value = (Number(mov_terreno_od_ant.value) + Number(mov_edificios_od_ant.value) + Number(mov_construccionesencurso_od_ant.value) + Number(mov_instalaciones_od_ant.value) + Number(mov_mueblesyenseres_od_ant.value) + Number(mov_maquinariayequipo_od_ant.value) + Number(mov_vehiculo_od_ant.value) + Number(mov_equipodecomputacion_od_ant.value) + Number(mov_otrospropiedadesplantasyequipos_od_ant.value)).toFixed(2)
  mov_total_gdd_ant.value = (Number(mov_terreno_gdd_ant.value) + Number(mov_edificios_gdd_ant.value) + Number(mov_construccionesencurso_gdd_ant.value) + Number(mov_instalaciones_gdd_ant.value) + Number(mov_mueblesyenseres_gdd_ant.value) + Number(mov_maquinariayequipo_gdd_ant.value) + Number(mov_vehiculo_gdd_ant.value) + Number(mov_equipodecomputacion_gdd_ant.value) + Number(mov_otrospropiedadesplantasyequipos_gdd_ant.value)).toFixed(2)

  mov_terreno_total_ant.value = (Number(mov_terreno_si_ant.value) + Number(mov_terreno_sida_ant.value) + Number(mov_terreno_compras_ant.value) + Number(mov_terreno_bilddb_ant.value) + Number(mov_terreno_transf_ant.value) + Number(mov_terreno_od_ant.value) + Number(mov_terreno_gdd_ant.value)).toFixed(2)
  mov_edificios_total_ant.value = (Number(mov_edificios_si_ant.value) + Number(mov_edificios_sida_ant.value) + Number(mov_edificios_compras_ant.value) + Number(mov_edificios_bilddb_ant.value) + Number(mov_edificios_transf_ant.value) + Number(mov_edificios_od_ant.value) + Number(mov_edificios_gdd_ant.value)).toFixed(2)
  mov_construccionesencurso_total_ant.value = (Number(mov_construccionesencurso_si_ant.value) + Number(mov_construccionesencurso_sida_ant.value) + Number(mov_construccionesencurso_compras_ant.value) + Number(mov_construccionesencurso_bilddb_ant.value) + Number(mov_construccionesencurso_transf_ant.value) + Number(mov_construccionesencurso_od_ant.value) + Number(mov_construccionesencurso_gdd_ant.value)).toFixed(2)
  mov_instalaciones_total_ant.value = (Number(mov_instalaciones_si_ant.value) + Number(mov_instalaciones_sida_ant.value) + Number(mov_instalaciones_compras_ant.value) + Number(mov_instalaciones_bilddb_ant.value) + Number(mov_instalaciones_transf_ant.value) + Number(mov_instalaciones_od_ant.value) + Number(mov_instalaciones_gdd_ant.value)).toFixed(2)
  mov_mueblesyenseres_total_ant.value = (Number(mov_mueblesyenseres_si_ant.value) + Number(mov_mueblesyenseres_sida_ant.value) + Number(mov_mueblesyenseres_compras_ant.value) + Number(mov_mueblesyenseres_bilddb_ant.value) + Number(mov_mueblesyenseres_transf_ant.value) + Number(mov_mueblesyenseres_od_ant.value) + Number(mov_mueblesyenseres_gdd_ant.value)).toFixed(2)
  mov_maquinariayequipo_total_ant.value = (Number(mov_maquinariayequipo_si_ant.value) + Number(mov_maquinariayequipo_sida_ant.value) + Number(mov_maquinariayequipo_compras_ant.value) + Number(mov_maquinariayequipo_bilddb_ant.value) + Number(mov_maquinariayequipo_transf_ant.value) + Number(mov_maquinariayequipo_od_ant.value) + Number(mov_maquinariayequipo_gdd_ant.value)).toFixed(2)
  mov_vehiculo_total_ant.value = (Number(mov_vehiculo_si_ant.value) + Number(mov_vehiculo_sida_ant.value) + Number(mov_vehiculo_compras_ant.value) + Number(mov_vehiculo_bilddb_ant.value) + Number(mov_vehiculo_transf_ant.value) + Number(mov_vehiculo_od_ant.value) + Number(mov_vehiculo_gdd_ant.value)).toFixed(2)
  mov_equipodecomputacion_total_ant.value = (Number(mov_equipodecomputacion_si_ant.value) + Number(mov_equipodecomputacion_sida_ant.value) + Number(mov_equipodecomputacion_compras_ant.value) + Number(mov_equipodecomputacion_bilddb_ant.value) + Number(mov_equipodecomputacion_transf_ant.value) + Number(mov_equipodecomputacion_od_ant.value) + Number(mov_equipodecomputacion_gdd_ant.value)).toFixed(2)
  mov_otrospropiedadesplantasyequipos_total_ant.value = (Number(mov_otrospropiedadesplantasyequipos_si_ant.value) + Number(mov_otrospropiedadesplantasyequipos_sida_ant.value) + Number(mov_otrospropiedadesplantasyequipos_compras_ant.value) + Number(mov_otrospropiedadesplantasyequipos_bilddb_ant.value) + Number(mov_otrospropiedadesplantasyequipos_transf_ant.value) + Number(mov_otrospropiedadesplantasyequipos_od_ant.value) + Number(mov_otrospropiedadesplantasyequipos_gdd_ant.value)).toFixed(2)

  mov_total_sf_ant.value = (Number(mov_terreno_total_ant.value) + Number(mov_edificios_total_ant.value) + Number(mov_construccionesencurso_total_ant.value) + Number(mov_instalaciones_total_ant.value) + Number(mov_mueblesyenseres_total_ant.value) + Number(mov_maquinariayequipo_total_ant.value) + Number(mov_vehiculo_total_ant.value) + Number(mov_equipodecomputacion_total_ant.value) + Number(mov_otrospropiedadesplantasyequipos_total_ant.value)).toFixed(2)

  mov_saldofinalsegunmovimiento_ant.value = Number(mov_total_sf_ant.value).toFixed(2)
  mov_diferenciaporcuadrar_ant.value = (Number(mov_saldofinalsegunmovimiento_ant.value) - Number(mov_saldofinalsegunesf_ant.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_ppyeAnt(mov_diferenciaporcuadrar_ant.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_ppye_ant", mov_diferenciaporcuadrar_ant.value)

  const movpropiedadesplantasyequipos_ant = {
    mov_terreno_si_ant: mov_terreno_si_ant.value,
    mov_edificios_si_ant: mov_edificios_si_ant.value,
    mov_construccionesencurso_si_ant: mov_construccionesencurso_si_ant.value,
    mov_instalaciones_si_ant: mov_instalaciones_si_ant.value,
    mov_mueblesyenseres_si_ant: mov_mueblesyenseres_si_ant.value,
    mov_maquinariayequipo_si_ant: mov_maquinariayequipo_si_ant.value,
    mov_vehiculo_si_ant: mov_vehiculo_si_ant.value,
    mov_equipodecomputacion_si_ant: mov_equipodecomputacion_si_ant.value,
    mov_otrospropiedadesplantasyequipos_si_ant: mov_otrospropiedadesplantasyequipos_si_ant.value,

    mov_terreno_sida_ant: mov_terreno_sida_ant.value,
    mov_edificios_sida_ant: mov_edificios_sida_ant.value,
    mov_construccionesencurso_sida_ant: mov_construccionesencurso_sida_ant.value,
    mov_instalaciones_sida_ant: mov_instalaciones_sida_ant.value,
    mov_mueblesyenseres_sida_ant: mov_mueblesyenseres_sida_ant.value,
    mov_maquinariayequipo_sida_ant: mov_maquinariayequipo_sida_ant.value,
    mov_vehiculo_sida_ant: mov_vehiculo_sida_ant.value,
    mov_equipodecomputacion_sida_ant: mov_equipodecomputacion_sida_ant.value,
    mov_otrospropiedadesplantasyequipos_sida_ant: mov_otrospropiedadesplantasyequipos_sida_ant.value,

    mov_terreno_compras_ant: mov_terreno_compras_ant.value,
    mov_edificios_compras_ant: mov_edificios_compras_ant.value,
    mov_construccionesencurso_compras_ant: mov_construccionesencurso_compras_ant.value,
    mov_instalaciones_compras_ant: mov_instalaciones_compras_ant.value,
    mov_mueblesyenseres_compras_ant: mov_mueblesyenseres_compras_ant.value,
    mov_maquinariayequipo_compras_ant: mov_maquinariayequipo_compras_ant.value,
    mov_vehiculo_compras_ant: mov_vehiculo_compras_ant.value,
    mov_equipodecomputacion_compras_ant: mov_equipodecomputacion_compras_ant.value,
    mov_otrospropiedadesplantasyequipos_compras_ant: mov_otrospropiedadesplantasyequipos_compras_ant.value,

    mov_terreno_bilddb_ant: mov_terreno_bilddb_ant.value,
    mov_edificios_bilddb_ant: mov_edificios_bilddb_ant.value,
    mov_construccionesencurso_bilddb_ant: mov_construccionesencurso_bilddb_ant.value,
    mov_instalaciones_bilddb_ant: mov_instalaciones_bilddb_ant.value,
    mov_mueblesyenseres_bilddb_ant: mov_mueblesyenseres_bilddb_ant.value,
    mov_maquinariayequipo_bilddb_ant: mov_maquinariayequipo_bilddb_ant.value,
    mov_vehiculo_bilddb_ant: mov_vehiculo_bilddb_ant.value,
    mov_equipodecomputacion_bilddb_ant: mov_equipodecomputacion_bilddb_ant.value,
    mov_otrospropiedadesplantasyequipos_bilddb_ant: mov_otrospropiedadesplantasyequipos_bilddb_ant.value,

    mov_terreno_transf_ant: mov_terreno_transf_ant.value,
    mov_edificios_transf_ant: mov_edificios_transf_ant.value,
    mov_construccionesencurso_transf_ant: mov_construccionesencurso_transf_ant.value,
    mov_instalaciones_transf_ant: mov_instalaciones_transf_ant.value,
    mov_mueblesyenseres_transf_ant: mov_mueblesyenseres_transf_ant.value,
    mov_maquinariayequipo_transf_ant: mov_maquinariayequipo_transf_ant.value,
    mov_vehiculo_transf_ant: mov_vehiculo_transf_ant.value,
    mov_equipodecomputacion_transf_ant: mov_equipodecomputacion_transf_ant.value,
    mov_otrospropiedadesplantasyequipos_transf_ant: mov_otrospropiedadesplantasyequipos_transf_ant.value,

    mov_terreno_od_ant: mov_terreno_od_ant.value,
    mov_edificios_od_ant: mov_edificios_od_ant.value,
    mov_construccionesencurso_od_ant: mov_construccionesencurso_od_ant.value,
    mov_instalaciones_od_ant: mov_instalaciones_od_ant.value,
    mov_mueblesyenseres_od_ant: mov_mueblesyenseres_od_ant.value,
    mov_maquinariayequipo_od_ant: mov_maquinariayequipo_od_ant.value,
    mov_vehiculo_od_ant: mov_vehiculo_od_ant.value,
    mov_equipodecomputacion_od_ant: mov_equipodecomputacion_od_ant.value,
    mov_otrospropiedadesplantasyequipos_od_ant: mov_otrospropiedadesplantasyequipos_od_ant.value,

    mov_terreno_gdd_ant: mov_terreno_gdd_ant.value,
    mov_edificios_gdd_ant: mov_edificios_gdd_ant.value,
    mov_construccionesencurso_gdd_ant: mov_construccionesencurso_gdd_ant.value,
    mov_instalaciones_gdd_ant: mov_instalaciones_gdd_ant.value,
    mov_mueblesyenseres_gdd_ant: mov_mueblesyenseres_gdd_ant.value,
    mov_maquinariayequipo_gdd_ant: mov_maquinariayequipo_gdd_ant.value,
    mov_vehiculo_gdd_ant: mov_vehiculo_gdd_ant.value,
    mov_equipodecomputacion_gdd_ant: mov_equipodecomputacion_gdd_ant.value,
    mov_otrospropiedadesplantasyequipos_gdd_ant: mov_otrospropiedadesplantasyequipos_gdd_ant.value,

    mov_terreno_total_ant: mov_terreno_total_ant.value,
    mov_edificios_total_ant: mov_edificios_total_ant.value,
    mov_construccionesencurso_total_ant: mov_construccionesencurso_total_ant.value,
    mov_instalaciones_total_ant: mov_instalaciones_total_ant.value,
    mov_mueblesyenseres_total_ant: mov_mueblesyenseres_total_ant.value,
    mov_maquinariayequipo_total_ant: mov_maquinariayequipo_total_ant.value,
    mov_vehiculo_total_ant: mov_vehiculo_total_ant.value,
    mov_equipodecomputacion_total_ant: mov_equipodecomputacion_total_ant.value,
    mov_otrospropiedadesplantasyequipos_total_ant: mov_otrospropiedadesplantasyequipos_total_ant.value,

    mov_total_si_ant: mov_total_si_ant.value,
    mov_total_sida_ant: mov_total_sida_ant.value,
    mov_total_compras_ant: mov_total_compras_ant.value,
    mov_total_bilddb_ant: mov_total_bilddb_ant.value,
    mov_total_transf_ant: mov_total_transf_ant.value,
    mov_total_od_ant: mov_total_od_ant.value,
    mov_total_gdd_ant: mov_total_gdd_ant.value,
    mov_total_sf_ant: mov_total_sf_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    movpropiedadesplantasyequipos_ant: movpropiedadesplantasyequipos_ant,
  })
}

onMounted(() => {
  setTimeout(() => {
    handleActionClick(1)
    handleActionClick_ant(1)
  }, 2000)
})
onUnmounted(() => handleActionClick(1))
onUnmounted(() => handleActionClick_ant(1))
</script>

<template>
  <VCard
    id="invoice-list"
  >

    <VRow
      style="width:100%;"
      class="mb-5 mt-lg-10"
    >
      <VCol
        cols="12"
        md="12"
      >
        <VCardTitle>PERIODO ANTERIOR</VCardTitle>
      </VCol>
    </VRow>

    <!-- SECTION Table -->
    <VTable class="" id="prop-plantas-equipos">
      <!-- 👉 Table head -->
      <thead>
      <tr>
        <th style="width:600px !important;">CONCEPTO</th>
        <th class="center;" style="width : 800px !important;">
          <div style="width:100%;text-align: center;">(+) SALDO <br/>INICIAL</div>
        </th>
        <th style="width : 800px !important;"><div style="width:100%;text-align: center;">(-) SALD INIC <br/> DEPREC ACUM</div></th>
        <th style="width : 600px !important;"><div style="width:100%;text-align: center;">(+) COMPRAS</div></th>
        <th style="width : 600px !important;"><div style="width:100%;text-align: center;">(-) BAJAS INCLUIDA<br/> LA (DEPREC DADA<br/> DE BAJA)</div></th>
        <th style="width : 600px !important;"><div style="width:100%;text-align: center;">(+/-) TRANSFERENCIA</div></th>
        <th style="width : 600px !important;"><div style="width:100%;text-align: center;">(+/-) OTROS <br/>DETALLAR</div></th>
        <th style="width : 600px !important;"><div style="width:100%;text-align: center;">(-) GASTOS DE <br/>DEPRECIACIÓN</div></th>
        <th style="width : 600px !important;"><div style="width:100%;text-align: center;">SALDO <br/>FINAL</div></th>
      </tr>
      </thead>


      <tbody>
      <tr style="height: 3.75rem;">
        <td>TERRENO</td>

        <td>
          <VTextField label="terreno" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_terreno_si" v-model="mov_terreno_si_ant" />
        </td>

        <td>
          <VTextField label="terreno" @blur="convertirNegativo_terreno_sida_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this); handleActionClick_ant(this)" type="number" id="mov_terreno_sida" v-model="mov_terreno_sida_ant" />
        </td>

        <td>
          <VTextField label="terreno" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_terreno_compras" v-model="mov_terreno_compras_ant" />
        </td>

        <td>
          <VTextField label="terreno" @blur="convertirNegativo_terreno_bilddb_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_terreno_bilddb" v-model="mov_terreno_bilddb_ant" />
        </td>

        <td>
          <VTextField label="terreno" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_terreno_transf" v-model="mov_terreno_transf_ant" />
        </td>

        <td>
          <VTextField label="terreno" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_terreno_od" v-model="mov_terreno_od_ant" />
        </td>

        <td>
          <VTextField label="terreno" @blur="convertirNegativo_terreno_gdd_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_terreno_gdd" v-model="mov_terreno_gdd_ant" />
        </td>

        <td>
          <VTextField label="terreno" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_terreno_total" disabled v-model="mov_terreno_total_ant" />
        </td>
      </tr>

      <tr style="height: 3.75rem;">
        <td>EDIFICIOS</td>

        <td>
          <VTextField label="edificios" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_edificios_si" v-model="mov_edificios_si_ant" />
        </td>

        <td>
          <VTextField label="edificios" @blur="convertirNegativo_edificios_sida_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_edificios_sida" v-model="mov_edificios_sida_ant" />
        </td>

        <td>
          <VTextField label="edificios" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_edificios_compras" v-model="mov_edificios_compras_ant" />
        </td>

        <td>
          <VTextField label="edificios" @blur="convertirNegativo_edificios_bilddb_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_edificios_bilddb" v-model="mov_edificios_bilddb_ant" />
        </td>

        <td>
          <VTextField label="edificios" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_edificios_transf" v-model="mov_edificios_transf_ant" />
        </td>

        <td>
          <VTextField label="edificios" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_edificios_od" v-model="mov_edificios_od_ant" />
        </td>

        <td>
          <VTextField label="edificios" @blur="convertirNegativo_edificios_gdd_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_edificios_gdd" v-model="mov_edificios_gdd_ant" />
        </td>

        <td>
          <VTextField label="edificios" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_edificios_total" disabled v-model="mov_edificios_total_ant" />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>CONSTRUCCIONES EN CURSO</td>

        <td>
          <VTextField label="const" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_construccionesencurso_si" v-model="mov_construccionesencurso_si_ant" />
        </td>

        <td>
          <VTextField label="const" @blur="convertirNegativo_construccionesencurso_sida_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_construccionesencurso_sida" v-model="mov_construccionesencurso_sida_ant" />
        </td>

        <td>
          <VTextField label="const" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_construccionesencurso_compras" v-model="mov_construccionesencurso_compras_ant" />
        </td>

        <td>
          <VTextField label="const" @blur="convertirNegativo_construccionesencurso_bilddb_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_construccionesencurso_bilddb" v-model="mov_construccionesencurso_bilddb_ant" />
        </td>

        <td>
          <VTextField label="const" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_construccionesencurso_transf" v-model="mov_construccionesencurso_transf_ant" />
        </td>

        <td>
          <VTextField label="const" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_construccionesencurso_od" v-model="mov_construccionesencurso_od_ant" />
        </td>

        <td>
          <VTextField label="const" @blur="convertirNegativo_construccionesencurso_gdd_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_construccionesencurso_gdd" v-model="mov_construccionesencurso_gdd_ant" />
        </td>

        <td>
          <VTextField label="const" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_construccionesencurso_total" disabled v-model="mov_construccionesencurso_total_ant" />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>INSTALACIONES</td>

        <td>
          <VTextField label="instal" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_instalaciones_si" v-model="mov_instalaciones_si_ant" />
        </td>

        <td>
          <VTextField label="instal" @blur="convertirNegativo_instalaciones_sida_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_instalaciones_sida" v-model="mov_instalaciones_sida_ant" />
        </td>

        <td>
          <VTextField label="instal" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_instalaciones_compras" v-model="mov_instalaciones_compras_ant" />
        </td>

        <td>
          <VTextField label="instal" @blur="convertirNegativo_instalaciones_bilddb_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_instalaciones_bilddb" v-model="mov_instalaciones_bilddb_ant" />
        </td>

        <td>
          <VTextField label="instal" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_instalaciones_transf" v-model="mov_instalaciones_transf_ant" />
        </td>

        <td>
          <VTextField label="instal" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_instalaciones_od" v-model="mov_instalaciones_od_ant" />
        </td>

        <td>
          <VTextField label="instal" @blur="convertirNegativo_instalaciones_gdd_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_instalaciones_gdd" v-model="mov_instalaciones_gdd_ant" />
        </td>

        <td>
          <VTextField label="instal" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_instalaciones_total" disabled v-model="mov_instalaciones_total_ant" />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>MUEBLES Y ENSERES</td>

        <td>
          <VTextField label="muebles" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_mueblesyenseres_si" v-model="mov_mueblesyenseres_si_ant" />
        </td>

        <td>
          <VTextField label="muebles" @blur="convertirNegativo_mueblesyenseres_sida_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_mueblesyenseres_sida" v-model="mov_mueblesyenseres_sida_ant" />
        </td>

        <td>
          <VTextField label="muebles" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_mueblesyenseres_compras" v-model="mov_mueblesyenseres_compras_ant" />
        </td>

        <td>
          <VTextField label="muebles" @blur="convertirNegativo_mueblesyenseres_bilddb_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_mueblesyenseres_bilddb" v-model="mov_mueblesyenseres_bilddb_ant" />
        </td>

        <td>
          <VTextField label="muebles" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_mueblesyenseres_transf" v-model="mov_mueblesyenseres_transf_ant" />
        </td>

        <td>
          <VTextField label="muebles" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_mueblesyenseres_od" v-model="mov_mueblesyenseres_od_ant" />
        </td>

        <td>
          <VTextField label="muebles" @blur="convertirNegativo_mueblesyenseres_gdd_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_mueblesyenseres_gdd" v-model="mov_mueblesyenseres_gdd_ant" />
        </td>

        <td>
          <VTextField label="muebles" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_mueblesyenseres_total" disabled v-model="mov_mueblesyenseres_total_ant" />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>MAQUINARIAS Y EQUIPOS</td>

        <td>
          <VTextField label="maquina" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_maquinariayequipo_si" v-model="mov_maquinariayequipo_si_ant" />
        </td>

        <td>
          <VTextField label="maquina" @blur="convertirNegativo_maquinariasyequipos_sida_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_maquinariayequipo_sida" v-model="mov_maquinariayequipo_sida_ant" />
        </td>

        <td>
          <VTextField label="maquina" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_maquinariayequipo_compras" v-model="mov_maquinariayequipo_compras_ant" />
        </td>

        <td>
          <VTextField label="maquina" @blur="convertirNegativo_maquinariasyequipos_bilddb_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_maquinariayequipo_bilddb" v-model="mov_maquinariayequipo_bilddb_ant" />
        </td>

        <td>
          <VTextField label="maquina" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_maquinariayequipo_transf" v-model="mov_maquinariayequipo_transf_ant" />
        </td>

        <td>
          <VTextField label="maquina" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_maquinariayequipo_od" v-model="mov_maquinariayequipo_od_ant" />
        </td>

        <td>
          <VTextField label="maquina" @blur="convertirNegativo_maquinariayequipo_gdd_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_maquinariayequipo_gdd" v-model="mov_maquinariayequipo_gdd_ant" />
        </td>

        <td>
          <VTextField label="maquina" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_maquinariayequipo_total" disabled v-model="mov_maquinariayequipo_total_ant" />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>VEHICULO</td>

        <td>
          <VTextField label="vehiculo" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_vehiculo_si" v-model="mov_vehiculo_si_ant" />
        </td>

        <td>
          <VTextField label="vehiculo" @blur="convertirNegativo_vehiculo_sida_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_vehiculo_sida" v-model="mov_vehiculo_sida_ant" />
        </td>

        <td>
          <VTextField label="vehiculo" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_vehiculo_compras" v-model="mov_vehiculo_compras_ant" />
        </td>

        <td>
          <VTextField label="vehiculo" @blur="convertirNegativo_vehiculo_bilddb_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_vehiculo_bilddb" v-model="mov_vehiculo_bilddb_ant" />
        </td>

        <td>
          <VTextField label="vehiculo" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_vehiculo_transf" v-model="mov_vehiculo_transf_ant" />
        </td>

        <td>
          <VTextField label="vehiculo" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_vehiculo_od" v-model="mov_vehiculo_od_ant" />
        </td>

        <td>
          <VTextField label="vehiculo" @blur="convertirNegativo_vehiculo_gdd_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_vehiculo_gdd" v-model="mov_vehiculo_gdd_ant" />
        </td>

        <td>
          <VTextField label="vehiculo" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_vehiculo_total" disabled v-model="mov_vehiculo_total_ant" />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>EQUIPO DE COMPUTACIÓN</td>

        <td>
          <VTextField label="compu" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_equipodecomputacion_si" v-model="mov_equipodecomputacion_si_ant" />
        </td>

        <td>
          <VTextField label="compu" @blur="convertirNegativo_equipodecomputacion_sida_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_equipodecomputacion_sida" v-model="mov_equipodecomputacion_sida_ant" />
        </td>

        <td>
          <VTextField label="compu" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_equipodecomputacion_compras" v-model="mov_equipodecomputacion_compras_ant" />
        </td>

        <td>
          <VTextField label="compu" @blur="convertirNegativo_equipodecomputacion_bilddb_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_equipodecomputacion_bilddb" v-model="mov_equipodecomputacion_bilddb_ant" />
        </td>

        <td>
          <VTextField label="compu" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_equipodecomputacion_transf" v-model="mov_equipodecomputacion_transf_ant" />
        </td>

        <td>
          <VTextField label="compu" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_equipodecomputacion_od" v-model="mov_equipodecomputacion_od_ant" />
        </td>

        <td>
          <VTextField label="compu" @blur="convertirNegativo_equipodecomputacion_gdd_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_equipodecomputacion_gdd" v-model="mov_equipodecomputacion_gdd_ant" />
        </td>

        <td>
          <VTextField label="compu" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_equipodecomputacion_total" disabled v-model="mov_equipodecomputacion_total_ant" />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>OTROS PROPIEDADES,PLANTAS Y EQUIPO</td>

        <td>
          <VTextField label="otros" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_si" v-model="mov_otrospropiedadesplantasyequipos_si_ant" />
        </td>

        <td>
          <VTextField label="otros" @blur="convertirNegativo_otrospropiedadesplantasyequipo_sida_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_sida" v-model="mov_otrospropiedadesplantasyequipos_sida_ant" />
        </td>

        <td>
          <VTextField label="otros" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_compras" v-model="mov_otrospropiedadesplantasyequipos_compras_ant" />
        </td>

        <td>
          <VTextField label="otros" @blur="convertirNegativo_otrospropiedadesplantasyequipo_bilddb_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_bilddb" v-model="mov_otrospropiedadesplantasyequipos_bilddb_ant" />
        </td>

        <td>
          <VTextField label="otros" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_transf" v-model="mov_otrospropiedadesplantasyequipos_transf_ant" />
        </td>

        <td>
          <VTextField label="otros" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_od" v-model="mov_otrospropiedadesplantasyequipos_od_ant" />
        </td>

        <td>
          <VTextField label="otros" @blur="convertirNegativo_otrospropiedadesplantasyequipos_gdd_ant(this); handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_gdd" v-model="mov_otrospropiedadesplantasyequipos_gdd_ant" />
        </td>

        <td>
          <VTextField label="otros" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_total" disabled v-model="mov_otrospropiedadesplantasyequipos_total_ant" />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>TOTAL</td>

        <td>
          <VTextField label="total_si" @input="handleActionClick_ant(this)" type="number" disabled id="mov_total_si_ant" v-model="mov_total_si_ant" />
        </td>

        <td>
          <VTextField label="total_sida" @input="handleActionClick_ant(this)" type="number" disabled id="mov_total_sida_ant" v-model="mov_total_sida_ant" />
        </td>

        <td>
          <VTextField label="total_compras" @input="handleActionClick_ant(this)" type="number" disabled id="mov_total_compras_ant" v-model="mov_total_compras_ant" />
        </td>

        <td>
          <VTextField label="total_bilddb" @input="handleActionClick_ant(this)" type="number" disabled id="mov_total_bilddb_ant" v-model="mov_total_bilddb_ant" />
        </td>

        <td>
          <VTextField label="total_transf" @input="handleActionClick_ant(this)" type="number" disabled id="mov_total_transf_ant" v-model="mov_total_transf_ant" />
        </td>

        <td>
          <VTextField label="total_od" @input="handleActionClick_ant(this)" type="number" disabled id="mov_total_od_ant" v-model="mov_total_od_ant" />
        </td>

        <td>
          <VTextField label="total_gdd" @input="handleActionClick_ant(this)" type="number" disabled id="mov_total_gdd_ant" v-model="mov_total_gdd_ant" />
        </td>

        <td>
          <VTextField label="total_sf" @input="handleActionClick_ant(this)" type="number" disabled id="mov_total_sf_ant" v-model="mov_total_sf_ant" />
        </td>

      </tr>
      </tbody>
    </VTable>
    <!-- !SECTION -->

    <VRow
      style="width:100%;"
      class="mt-10 mb-5"
    >
      <VCol
        cols="12"
        md="12"
      >
        <VCardTitle>PERIODO ACTUAL</VCardTitle>
      </VCol>
    </VRow>

    <!-- PERIODO ACTUAL -->
    <VTable class="">
      <!-- 👉 Table head -->
      <thead>
        <tr>
          <th style="width:600px !important;">CONCEPTO</th>
          <th class="center;" style="width : 800px !important;">
            <div style="width:100%;text-align: center;">(+) SALDO <br/>INICIAL</div>
          </th>
          <th style="width : 600px !important;"><div style="width:100%;text-align: center;">(+) COMPRAS</div></th>
          <th style="width : 600px !important;"><div style="width:100%;text-align: center;">(-) BAJAS INCLUIDA<br/> LA (DEPREC DADA<br/> DE BAJA)</div></th>
          <th style="width : 600px !important;"><div style="width:100%;text-align: center;">(+/-) TRANSFERENCIA</div></th>
          <th style="width : 800px !important;"><div style="width:100%;text-align: center;">(+/-) AJUSTES A PYG</div></th>
          <th style="width : 600px !important;"><div style="width:100%;text-align: center;">(+/-) OTROS <br/>DETALLAR</div></th>
          <th style="width : 600px !important;"><div style="width:100%;text-align: center;">(-) GASTOS DE <br/>DEPRECIACIÓN</div></th>
          <th style="width : 600px !important;"><div style="width:100%;text-align: center;">SALDO <br/>FINAL</div></th>
        </tr>
      </thead>


      <tbody>
        <tr style="height: 3.75rem;">
          <td>TERRENO</td>

          <td>
            <VTextField label="terreno" @blur="handleActionClick(this)"  @input="handleActionClick(this)" type="number"  @keyup="handleActionClick(this)" id="mov_terreno_si" disabled v-model="mov_terreno_si" />
          </td>

          <td>
            <VTextField label="terreno" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_terreno_compras" v-model="mov_terreno_compras" />
          </td>

          <td>
            <VTextField label="terreno" @blur="convertirNegativo_terreno_bilddb(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_terreno_bilddb" v-model="mov_terreno_bilddb" />
          </td>

          <td>
            <VTextField label="terreno" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_terreno_transf" v-model="mov_terreno_transf" />
          </td>

          <td>
            <VTextField label="terreno" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_terreno_ajustes" v-model="mov_terreno_sida" />
          </td>

          <td>
            <VTextField label="terreno" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_terreno_od" v-model="mov_terreno_od" />
          </td>

          <td>
            <VTextField label="terreno" @blur="convertirNegativo_terreno_gdd(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_terreno_gdd" v-model="mov_terreno_gdd" />
          </td>

          <td>
            <VTextField label="terreno" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_terreno_total" disabled v-model="mov_terreno_total" />
          </td>
        </tr>

        <tr style="height: 3.75rem;">
          <td>EDIFICIOS</td>

          <td>
            <VTextField label="edificios" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_edificios_si" disabled v-model="mov_edificios_si" />
          </td>

          <td>
            <VTextField label="edificios" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_edificios_compras" v-model="mov_edificios_compras" />
          </td>

          <td>
            <VTextField label="edificios" @blur="convertirNegativo_edificios_bilddb(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_edificios_bilddb" v-model="mov_edificios_bilddb" />
          </td>

          <td>
            <VTextField label="edificios" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_edificios_transf" v-model="mov_edificios_transf" />
          </td>

          <td>
            <VTextField label="edificios" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_edificios_sida" v-model="mov_edificios_sida" />
          </td>

          <td>
            <VTextField label="edificios" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_edificios_od" v-model="mov_edificios_od" />
          </td>

          <td>
            <VTextField label="edificios" @blur="convertirNegativo_edificios_gdd(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_edificios_gdd" v-model="mov_edificios_gdd" />
          </td>

          <td>
            <VTextField label="edificios" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_edificios_total" disabled v-model="mov_edificios_total" />
          </td>

        </tr>

        <tr style="height: 3.75rem;">
          <td>CONSTRUCCIONES EN CURSO</td>

          <td>
            <VTextField label="const" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_construccionesencurso_si" disabled v-model="mov_construccionesencurso_si" />
          </td>

          <td>
            <VTextField label="const" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_construccionesencurso_compras" v-model="mov_construccionesencurso_compras" />
          </td>

          <td>
            <VTextField label="const" @blur="convertirNegativo_construccionesencurso_bilddb(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_construccionesencurso_bilddb" v-model="mov_construccionesencurso_bilddb" />
          </td>

          <td>
            <VTextField label="const" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_construccionesencurso_transf" v-model="mov_construccionesencurso_transf" />
          </td>

          <td>
            <VTextField label="const" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_construccionesencurso_sida" v-model="mov_construccionesencurso_sida" />
          </td>

          <td>
            <VTextField label="const" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_construccionesencurso_od" v-model="mov_construccionesencurso_od" />
          </td>

          <td>
            <VTextField label="const" @blur="convertirNegativo_construccionesencurso_gdd(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_construccionesencurso_gdd" v-model="mov_construccionesencurso_gdd" />
          </td>

          <td>
            <VTextField label="const" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_construccionesencurso_total" disabled v-model="mov_construccionesencurso_total" />
          </td>

        </tr>

        <tr style="height: 3.75rem;">
          <td>INSTALACIONES</td>

          <td>
            <VTextField label="instal" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_instalaciones_si" disabled v-model="mov_instalaciones_si" />
          </td>

          <td>
            <VTextField label="instal" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_instalaciones_compras" v-model="mov_instalaciones_compras" />
          </td>

          <td>
            <VTextField label="instal" @blur="convertirNegativo_instalaciones_bilddb(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_instalaciones_bilddb" v-model="mov_instalaciones_bilddb" />
          </td>

          <td>
            <VTextField label="instal" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_instalaciones_transf" v-model="mov_instalaciones_transf" />
          </td>

          <td>
            <VTextField label="instal" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_instalaciones_sida" v-model="mov_instalaciones_sida" />
          </td>

          <td>
            <VTextField label="instal" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_instalaciones_od" v-model="mov_instalaciones_od" />
          </td>

          <td>
            <VTextField label="instal" @blur="convertirNegativo_instalaciones_gdd(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_instalaciones_gdd" v-model="mov_instalaciones_gdd" />
          </td>

          <td>
            <VTextField label="instal" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_instalaciones_total" disabled v-model="mov_instalaciones_total" />
          </td>

        </tr>

        <tr style="height: 3.75rem;">
          <td>MUEBLES Y ENSERES</td>

          <td>
            <VTextField label="muebles" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_mueblesyenseres_si" disabled v-model="mov_mueblesyenseres_si" />
          </td>

          <td>
            <VTextField label="muebles" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_mueblesyenseres_compras" v-model="mov_mueblesyenseres_compras" />
          </td>

          <td>
            <VTextField label="muebles" @blur="convertirNegativo_mueblesyenseres_bilddb(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_mueblesyenseres_bilddb" v-model="mov_mueblesyenseres_bilddb" />
          </td>

          <td>
            <VTextField label="muebles" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_mueblesyenseres_transf" v-model="mov_mueblesyenseres_transf" />
          </td>

          <td>
            <VTextField label="muebles" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_mueblesyenseres_sida" v-model="mov_mueblesyenseres_sida" />
          </td>

          <td>
            <VTextField label="muebles" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_mueblesyenseres_od" v-model="mov_mueblesyenseres_od" />
          </td>

          <td>
            <VTextField label="muebles" @blur="convertirNegativo_mueblesyenseres_gdd(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_mueblesyenseres_gdd" v-model="mov_mueblesyenseres_gdd" />
          </td>

          <td>
            <VTextField label="muebles" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_mueblesyenseres_total" disabled v-model="mov_mueblesyenseres_total" />
          </td>

        </tr>

        <tr style="height: 3.75rem;">
          <td>MAQUINARIAS Y EQUIPOS</td>

          <td>
            <VTextField label="maquina" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_maquinariayequipo_si" disabled v-model="mov_maquinariayequipo_si" />
          </td>

          <td>
            <VTextField label="maquina" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_maquinariayequipo_compras" v-model="mov_maquinariayequipo_compras" />
          </td>

          <td>
            <VTextField label="maquina" @blur="convertirNegativo_maquinariasyequipos_bilddb(this); handleActionClick(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick(this)"  type="number" id="mov_maquinariayequipo_bilddb" v-model="mov_maquinariayequipo_bilddb" />
          </td>

          <td>
            <VTextField label="maquina" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_maquinariayequipo_transf" v-model="mov_maquinariayequipo_transf" />
          </td>

          <td>
            <VTextField label="maquina" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_maquinariayequipo_sida" v-model="mov_maquinariayequipo_sida" />
          </td>

          <td>
            <VTextField label="maquina" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_maquinariayequipo_od" v-model="mov_maquinariayequipo_od" />
          </td>

          <td>
            <VTextField label="maquina" @blur="convertirNegativo_maquinariayequipo_gdd(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_maquinariayequipo_gdd" v-model="mov_maquinariayequipo_gdd" />
          </td>

          <td>
            <VTextField label="maquina" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_maquinariayequipo_total" disabled v-model="mov_maquinariayequipo_total" />
          </td>

        </tr>

        <tr style="height: 3.75rem;">
          <td>VEHICULO</td>

          <td>
            <VTextField label="vehiculo" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_vehiculo_si" disabled v-model="mov_vehiculo_si" />
          </td>

          <td>
            <VTextField label="vehiculo" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_vehiculo_compras" v-model="mov_vehiculo_compras" />
          </td>

          <td>
            <VTextField label="vehiculo" @blur="convertirNegativo_vehiculo_bilddb(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_vehiculo_bilddb" v-model="mov_vehiculo_bilddb" />
          </td>

          <td>
            <VTextField label="vehiculo" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_vehiculo_transf" v-model="mov_vehiculo_transf" />
          </td>

          <td>
            <VTextField label="vehiculo" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_vehiculo_sida" v-model="mov_vehiculo_sida" />
          </td>

          <td>
            <VTextField label="vehiculo" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_vehiculo_od" v-model="mov_vehiculo_od" />
          </td>

          <td>
            <VTextField label="vehiculo" @blur="convertirNegativo_vehiculo_gdd(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_vehiculo_gdd" v-model="mov_vehiculo_gdd" />
          </td>

          <td>
            <VTextField label="vehiculo" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_vehiculo_total" disabled v-model="mov_vehiculo_total" />
          </td>

        </tr>

        <tr style="height: 3.75rem;">
          <td>EQUIPO DE COMPUTACIÓN</td>

          <td>
            <VTextField label="compu" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_equipodecomputacion_si" disabled v-model="mov_equipodecomputacion_si" />
          </td>

          <td>
            <VTextField label="compu" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_equipodecomputacion_compras" v-model="mov_equipodecomputacion_compras" />
          </td>

          <td>
            <VTextField label="compu" @blur="convertirNegativo_equipodecomputacion_bilddb(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_equipodecomputacion_bilddb" v-model="mov_equipodecomputacion_bilddb" />
          </td>

          <td>
            <VTextField label="compu" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_equipodecomputacion_transf" v-model="mov_equipodecomputacion_transf" />
          </td>

          <td>
            <VTextField label="compu" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_equipodecomputacion_sida" v-model="mov_equipodecomputacion_sida" />
          </td>

          <td>
            <VTextField label="compu" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_equipodecomputacion_od" v-model="mov_equipodecomputacion_od" />
          </td>

          <td>
            <VTextField label="compu" @blur="convertirNegativo_equipodecomputacion_gdd(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_equipodecomputacion_gdd" v-model="mov_equipodecomputacion_gdd" />
          </td>

          <td>
            <VTextField label="compu" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_equipodecomputacion_total" disabled v-model="mov_equipodecomputacion_total" />
          </td>

        </tr>

        <tr style="height: 3.75rem;">
          <td>OTROS PROPIEDADES,PLANTAS Y EQUIPO</td>

          <td>
            <VTextField label="otros" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_si" disabled v-model="mov_otrospropiedadesplantasyequipos_si" />
          </td>

          <td>
            <VTextField label="otros" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_compras" v-model="mov_otrospropiedadesplantasyequipos_compras" />
          </td>

          <td>
            <VTextField label="otros" @blur="convertirNegativo_otrospropiedadesplantasyequipo_bilddb(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_bilddb" v-model="mov_otrospropiedadesplantasyequipos_bilddb" />
          </td>

          <td>
            <VTextField label="otros" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_transf" v-model="mov_otrospropiedadesplantasyequipos_transf" />
          </td>

          <td>
            <VTextField label="otros" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_sida" v-model="mov_otrospropiedadesplantasyequipos_sida" />
          </td>

          <td>
            <VTextField label="otros" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_od" v-model="mov_otrospropiedadesplantasyequipos_od" />
          </td>

          <td>
            <VTextField label="otros" @blur="convertirNegativo_otrospropiedadesplantasyequipos_gdd(this); handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_gdd" v-model="mov_otrospropiedadesplantasyequipos_gdd" />
          </td>

          <td>
            <VTextField label="otros" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" id="mov_otrospropiedadesplantasyequipos_total" disabled v-model="mov_otrospropiedadesplantasyequipos_total" />
          </td>

        </tr>

        <tr style="height: 3.75rem;">
          <td>TOTAL</td>

          <td>
            <VTextField label="total_si" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" disabled id="mov_total_si" v-model="mov_total_si" />
          </td>

          <td>
            <VTextField label="total_compras" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" disabled id="mov_total_compras" v-model="mov_total_compras" />
          </td>

          <td>
            <VTextField label="total_bilddb" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" disabled id="mov_total_bilddb" v-model="mov_total_bilddb" />
          </td>

          <td>
            <VTextField label="total_transf" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" disabled id="mov_total_transf" v-model="mov_total_transf" />
          </td>

          <td>
            <VTextField label="total_sida" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" disabled id="mov_total_sida" v-model="mov_total_sida" />
          </td>

          <td>
            <VTextField label="total_od" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" disabled id="mov_total_od" v-model="mov_total_od" />
          </td>

          <td>
            <VTextField label="total_gdd" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" disabled id="mov_total_gdd" v-model="mov_total_gdd" />
          </td>

          <td>
            <VTextField label="total_sf" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  type="number" disabled id="mov_total_sf" v-model="mov_total_sf" />
          </td>

        </tr>
      </tbody>
    </VTable>
    <!-- !PERIODO ACTUAL -->

    <VDivider class="mt-10 mb-10"></VDivider>
    <!-- RESUMEN -->
    <VRow
      style="width:100%;"
      class="mb-5 mt-lg-10"
    >
      <VCol
        cols="1"
        md="1"
      ></VCol>
      <VCol
        cols="10"
        md="10"
      >
        <!-- SECTION Table -->
        <VTable class="mt-10">
          <!-- 👉 Table head -->
          <thead>
            <tr>
              <th style="width:600px !important;">CONCEPTO</th>
              <th className="center;" style="width : 800px !important;">
                <div style="width:100%;text-align: center;">PERIODO ACTUAL</div>
              </th>
              <th style="width : 800px !important;">
                <div style="width:100%;text-align: center;">PERIODO ANTERIOR</div>
              </th>
            </tr>
          </thead>


          <tbody>
            <tr style="height: 3.75rem;">
              <td>(-) SALDO FINAL SEGÚN MOVIMIENTO</td>

              <td>
                <VTextField label="saldo final según mov actual" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_saldofinalsegunmovimiento" disabled v-model="mov_saldofinalsegunmovimiento" />
              </td>

              <td>
                <VTextField label="saldo final según mov anterior" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_saldofinalsegunmovimiento_ant" disabled v-model="mov_saldofinalsegunmovimiento_ant" />
              </td>

            </tr>

            <tr style="height: 3.75rem;">
              <td>SALDO FINAL SEGÚN ESF</td>

              <td>
                <VTextField label="saldo final según esf actual" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_saldofinalsegunesf" disabled v-model="mov_saldofinalsegunesf"/>
              </td>

              <td>
                <VTextField label="saldo final según esf anterior" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_saldofinalsegunesf_ant" disabled v-model="mov_saldofinalsegunesf_ant"/>
              </td>

            </tr>

            <tr style="height: 3.75rem;">
              <td>DIFERENCIA POR CUADRAR</td>

              <td>
                <VTextField label="diferencia por cuadrar actual" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_diferenciaporcuadrar" disabled v-model="mov_diferenciaporcuadrar"/>
              </td>

              <td>
                <VTextField label="diferencia por cuadrar anterior" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  type="number" id="mov_diferenciaporcuadrar_ant" disabled v-model="mov_diferenciaporcuadrar_ant"/>
              </td>

            </tr>

          </tbody>
        </VTable>
      </VCol>
      <VCol
        cols="1"
        md="1"
      ></VCol>
    </VRow>
    <!-- !RESUMEN -->
  </VCard>
</template>
