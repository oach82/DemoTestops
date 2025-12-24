# 🚀 TestOps Demo – Observabilidad de Pruebas con k6, Prometheus y Grafana

Este proyecto es una **demo práctica de TestOps**, enfocada en la **visualización en tiempo real de la ejecución de pruebas**, usando herramientas open source.

El objetivo no es mostrar infraestructura, sino **la salud y calidad del proceso de pruebas**.

---

## 🎯 Objetivo del Demo

- Ejecutar pruebas de carga con **k6**
- Exportar métricas vía **Prometheus Remote Write**
- Visualizar resultados en **Grafana**
- Mostrar métricas clave de QA:
  - Requests por segundo
  - Total de ejecuciones
  - Casos exitosos vs fallidos

## ⚙️ Requisitos

- Podman
- podman-compose
- Puertos disponibles:
  - `8080` – Demo App
  - `9090` – Prometheus
  - `3000` – Grafana

---

## ▶️ Levantar el Entorno

Desde la raíz del proyecto:

```bash
podman-compose up -d

| Servicio   | URL                                            |
| ---------- | ---------------------------------------------- |
| Demo App   | [http://localhost:8080](http://localhost:8080) |
| Prometheus | [http://localhost:9090](http://localhost:9090) |
| Grafana    | [http://localhost:3000](http://localhost:3000) |

Credenciales Grafana
Usuario: admin
Password: Admin123!
