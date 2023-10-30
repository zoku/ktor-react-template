package de.manuelhelbing.routes

import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.routing.*

fun Application.frontendRoute() {
    routing {
        staticResources("/assets", "/static/assets")
    }
}