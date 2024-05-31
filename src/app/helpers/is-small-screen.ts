import { isBrowser } from "./is-browser";

export function isSmallScreen(): boolean {
  return isBrowser() && window.innerWidth < 768;
}

// A função `isSmallScreen()` verifica se o código está sendo executado em um ambiente
// de navegador com uma tela pequena. Ela faz isso usando a função `isBrowser()`
// para verificar se o código está sendo executado em um navegador e, em seguida,
// verifica se a largura da janela do navegador é menor que 768 pixels.

// No desenvolvimento web, uma largura de 768 pixels é frequentemente usada como um
//  limite para determinar se o dispositivo é um celular ou tablet (tela pequena)
// ou um desktop (tela grande). Portanto, a função `isSmallScreen()` retorna `true` se
// o código estiver sendo executado em um navegador com uma tela pequena
// (menos de 768 pixels de largura) e `false` caso contrário.

// Isso pode ser útil para adaptar o layout ou a funcionalidade de um site dependendo
// do tamanho da tela do dispositivo do usuário. Por exemplo, você pode querer mostrar
// um menu diferente ou dispor o conteúdo de maneira diferente em telas pequenas em
// comparação com telas grandes.
