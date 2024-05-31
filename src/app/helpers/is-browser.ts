export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// Essa função, `isBrowser()`, verifica se o código está sendo executado em um ambiente
// de navegador. Ela faz isso verificando se o objeto `window` está definido.

// No JavaScript, `window` é um objeto global que está presente apenas em ambientes de
// navegador. Se o código estiver sendo executado em um ambiente de servidor
// (como Node.js), `window` será `undefined`.

// Portanto, a função `isBrowser()` retorna `true` se o código estiver sendo executado
// em um navegador e `false` se estiver sendo executado em um ambiente de servidor ou
// similar onde `window` não está definido. Isso pode ser útil para evitar erros ao
// tentar acessar APIs específicas do navegador em um ambiente de servidor.
