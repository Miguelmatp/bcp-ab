# BCP - Experimento A/B de Landing de Tarjeta de Crédito

**Autor:** Miguel Tapia

## 📌 Descripción del proyecto

Landing experimental desarrollada en React para evaluar mediante una prueba A/B si modificar el color y el mensaje del banner principal puede aumentar el porcentaje de clics hacia el formulario de solicitud de tarjeta de crédito.

## 🚨 Problema

La landing actual presenta un bajo porcentaje de clics hacia el formulario de solicitud de tarjeta de crédito.

El equipo de Growth plantea la siguiente hipótesis:

> Modificar el color y mensaje del banner principal puede aumentar el porcentaje de clics (CTR) hacia el formulario de solicitud.

## 🧪 Hipótesis

Se probarán dos variantes del banner principal:

- **Variante A:** fondo azul + CTA "Solicita ahora"
- **Variante B:** fondo naranja + CTA "Aplica ya"

La variante se asigna aleatoriamente y se mantiene durante la sesión del usuario.

## 🎯 Objetivo

Desarrollar una landing en React que permita experimentar con dos variantes del banner principal y medir el comportamiento de los usuarios mediante eventos de tracking.

## 📊 Tracking y medición

Se implementó un `dataLayer` para registrar los principales eventos del experimento.

### Eventos registrados

| Evento | Acción | Descripción |
|---|---|---|
| `experiment_view` | `view` | Usuario visualiza el banner |
| `experiment_interaction` | `click_cta` | Usuario hace clic en el CTA |
| `form_submit` | `submit_form` | Usuario envía el formulario |

Cada evento contiene:

- `experimentId`
- `variant`
- `action`
- `label`

### Métrica principal

La métrica principal del experimento es el **CTR hacia el formulario**, calculado como:

**CTR = clics en CTA / visualizaciones del experimento**

También se registra el envío del formulario como indicador de conversión posterior al clic.

## 🔬 Funcionamiento del experimento

Al ingresar a la landing, el usuario recibe aleatoriamente una de las dos variantes:

- A → 50% de probabilidad
- B → 50% de probabilidad

La variante se almacena en `sessionStorage` para mantener la misma experiencia durante la sesión.

Para evitar registros duplicados de visualización durante el ciclo de vida de React, el evento `experiment_view` se controla mediante `sessionStorage`.

## 🛠️ Tecnologías

- React
- TypeScript
- CSS
- Lucide React
- Git / GitHub
- GitHub Pages
- Data Layer para tracking

## ▶️ Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/Miguelmatp/bcp-ab.git