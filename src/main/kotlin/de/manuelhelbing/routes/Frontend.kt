package de.manuelhelbing.routes

import io.ktor.server.http.content.*
import io.ktor.server.routing.*

fun Routing.frontend() {
    staticResources("/assets", "/static/assets")
}