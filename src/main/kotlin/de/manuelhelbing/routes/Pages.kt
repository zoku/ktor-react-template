package de.manuelhelbing.routes

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Routing.pages() {
    get("/") {
        call.respond("Hello World!")
    }
}