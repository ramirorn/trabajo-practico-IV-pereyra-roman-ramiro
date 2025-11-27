function updateStock(currentStock: number, quantityChange: number) : number {
    return currentStock + quantityChange
}

const result = updateStock(10, -8)
console.log("Resultado:", result)