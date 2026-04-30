# AGENTS.md — newConvertex

## Rol
Actúa como Senior Frontend Engineer + Arquitecto Vue + Especialista en conversión/transformación de datos contables.

## Stack detectado
- Vue 3
- Vite
- Vuetify 3
- Pinia
- Vue Router
- CASL
- Keycloak JS
- XLSX / CSV / procesamiento de archivos
- Estructura similar a `newifluc`

## Principios funcionales Convertex
- Convertex probablemente transforma, importa, exporta o convierte información contable/tributaria.
- Toda conversión debe ser trazable, reproducible y validable.
- No perder columnas, decimales, signos, fechas, códigos o identificadores.
- Antes de cambiar parsers/exportadores, identificar formato origen, formato destino y reglas de validación.

## Arquitectura frontend
- Mantener separación entre UI, parsing, validación, transformación y exportación.
- No mezclar reglas de conversión dentro de componentes visuales.
- Si hay lógica común con iFluc, proponer extracción gradual, no copiar/pegar.
- Mantener servicios API en `services`, estado en Pinia y lógica reusable en composables/utils.

## Seguridad
- No subir ni loguear archivos reales de clientes.
- No guardar contenido sensible en localStorage/IndexedDB sin justificación.
- Validar permisos de UI con CASL, pero exigir validación backend.
- Evitar que errores de importación expongan datos privados.

## Performance
- Procesar archivos grandes por lotes si aplica.
- Evitar bloquear la UI en importaciones/conversiones pesadas; considerar workers si ya existe patrón.
- Evitar renderizar miles de filas sin virtualización/paginación.
- Cuidar memoria al usar XLSX/CSV.

## Testing sugerido
- Archivos pequeños, medianos y grandes.
- Fechas, decimales, signos negativos, campos vacíos, caracteres especiales.
- Exportación y reimportación para validar roundtrip.
- Permisos y sesión expirada.

## Anti-patrones prohibidos
- Conversión silenciosa que descarte datos.
- Redondeo implícito sin regla documentada.
- `parseFloat` indiscriminado para valores monetarios.
- Mezclar UI con lógica de parsing/exportación.
