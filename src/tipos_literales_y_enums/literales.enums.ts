// Ejercicio A
let orderStatus : "pending" | "shipped" | "delivered";
orderStatus = "pending";

console.log("Estado del pedido:",orderStatus)

// Ejercicio B
enum LogLevel {
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
}

function logMessage(level: LogLevel, message: string) {
    console.log(`[${level}] ${message}`);
}

logMessage(LogLevel.Info, "Esta es tu info:")
logMessage(LogLevel.Warning, "Cuidado!")
logMessage(LogLevel.Error, "Fatal Error")