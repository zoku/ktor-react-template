import * as React from "react";
import {createRoot} from "react-dom/client"
import {View} from "./View"

const container = document.querySelector(`#app`)
const root = createRoot(container)
root.render(<View/>)