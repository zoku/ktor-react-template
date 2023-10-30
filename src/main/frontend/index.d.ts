import {LokiConfig} from "./model/LokiConfig";

export {}

declare global {
    interface Window {
        loki: LokiConfig,
        aovoUpdateTickets: (data: any) => void,
        claimUiHtmlCallback: (data: any) => void,
        aovo_thor_paymentApprovedCallback: (data: any) => void,
    }
}