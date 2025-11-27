# 📚 GLOSARIO – Conceptos Aprendidos

> A continuación se presenta un glosario con los conceptos clave trabajados durante este TP. Cada definición incluye un ejemplo simple en TypeScript.

---

## 🔤 Índice Alfabético

1. [Boolean](#-1-boolean)
2. [Compilación](#-2-compilación)
3. [Enum](#-3-enum)
4. [Funciones con Tipado](#-4-funciones-con-tipado)
5. [Interface](#-5-interface)
6. [Template Literals](#-6-template-literals)
7. [Tipo Literal](#-7-tipo-literal)
8. [Tipo number](#-8-tipo-number)
9. [Tipo string](#-9-tipo-string)
10. [tsconfig.json](#-10-tsconfigjson)
11. [TSX](#-11-tsx)
12. [Union Type](#-12-union-type)

---

## 🔹 1. Boolean

**Descripción:** Representa valores lógicos.

```typescript
let activo: boolean = true;
```

---

## 🔹 2. Compilación

**Descripción:** Proceso por el cual TypeScript genera archivos JavaScript.

```bash
npx tsc
```

---

## 🔹 3. Enum

**Descripción:** Conjunto de valores constantes y predefinidos.

```typescript
enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}
```

---

## 🔹 4. Funciones con Tipado

**Descripción:** Las funciones pueden tipar sus parámetros y su valor de retorno.

```typescript
function sumar(a: number, b: number): number {
  return a + b;
}
```

---

## 🔹 5. Interface

**Descripción:** Define la forma y tipos esperados de un objeto.

```typescript
interface Product {
  name: string;
  price: number;
}

let item: Product = { name: "Teclado", price: 45000 };
```

---

## 🔹 6. Template Literals

**Descripción:** Permiten crear strings dinámicos usando `${}`.

```typescript
let nombre = "Zoe";
console.log(`Hola, ${nombre}`);
```

---

## 🔹 7. Tipo Literal

**Descripción:** Restringe una variable para que solo pueda tener ciertos valores exactos.

```typescript
let estado: "pending" | "shipped" | "delivered";
estado = "pending";
```

---

## 🔹 8. Tipo number

**Descripción:** Representa valores numéricos.

```typescript
let edad: number = 20;
```

---

## 🔹 9. Tipo string

**Descripción:** Representa texto.

```typescript
let nombre: string = "Ramiro";
```

---

## 🔹 10. tsconfig.json

**Descripción:** Archivo que configura cómo se compila TypeScript.

**Ejemplo de opciones usadas:**

```json
{
  "rootDir": "src",
  "outDir": "dist",
  "strict": true
}
```

---

## 🔹 11. TSX

**Descripción:** Herramienta para ejecutar archivos `.ts` sin compilarlos previamente.

```bash
npx tsx src/archivo.ts
```

---

## 🔹 12. Union Type

**Descripción:** Permite definir una variable con más de un tipo posible.

```typescript
let productId: string | number;
productId = "A12";
productId = 45;
```

---

**✨ Fin del Glosario | Desarrollado con TypeScript**
