package de.manuelhelbing.routes

import io.ktor.resources.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.routing.*
import kotlinx.serialization.Serializable

@Serializable
@Resource("/frontend")
class FrontendRoute

fun Application.frontendRoute() {
    routing {
        staticResources("/assets", "/static/assets")    }
}