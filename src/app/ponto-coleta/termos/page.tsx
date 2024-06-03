"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'



type Inputs = {
  telefone: string;
};

export default function TermosPonto() {


  useEffect(() => {
    // check dados tela anterior
    const currentStep = localStorage.getItem("dados_descarte");
    if (!currentStep) {
      router.replace("/ponto-coleta");
      return
    }
  }, []);

  const router = useRouter();
  function saveTerms() {
    if (typeof window !== 'undefined') {
      localStorage.setItem("aceitou_termos", "true");
      router.replace("/ponto-coleta/feedback")
    }
  }

  function nextPage() {
    if (typeof window !== 'undefined') {
      // now access your localStorage
      localStorage.setItem("aceitou_termos", "false");
      router.push("/ponto-coleta/feedback")
    }
  }

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        Para realizar o descarte, insira seu número de telefone no primeiro campo e após informe os resíduos que está descartando, clicando nos botões dos respectivos resíduos que você tiver para descartar. (Texto será alterado).
      </div>
      <div className="mx-auto max-w-2xl px-4 py-2 lg:py-16">
        <textarea
          id="message"
          rows={10}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ao participar desse Sorteio, eu aceito os termos e condições estabelecidos nestas
          Regras Oficiais. Confirmo que tenho pelo menos 18 anos e atingir a maioridade na
          minha jurisdição de residência no momento da inscrição. Ao participar dos sorteios,
          concordo em me inscrever para receber newsletters e ofertas especiais da
          RESIDUUM. A RESIDUUM é patrocinadora dos sorteios e responsável pela operação
          dos sorteios. Nenhuma compra necessária. Uma compra não aumentará suas
          chances de vitória. O sorteio está sujeito às leis e regulamentos federais, estaduais,
          municipais e locais e é nulo onde for proibido.
          Elegibilidade: Sorteio da Campanha “Descarte corretamente e ganhe!” (o
          “Sorteio”) está aberto a qualquer pessoa que tenha pelo menos dezoito (18) anos de
          idade e mora no Estado do Amazonas, cidade de Manaus e tem um número de
          telefone/e-mail válido. Funcionários, contratados independentes, estagiários,
          executivos, diretores e agentes do Patrocinador e das empresas associadas não são
          elegíveis para participar.
          Patrocinador: O Sorteio é patrocinado pela RESIDUUM em parceria com
          XXXXXXXXXXXXX.
          Concordo com as Regras Oficiais: Ao participar do Sorteio, você indica sua
          concordância total e incondicional e aceitação de (a) estas Regras Oficiais e (b) as
          decisões do Patrocinador, que são finais e vinculativas. Ganhar um prêmio depende
          do cumprimento de todos os requisitos aqui estabelecidos.
          Período de Inscrição: O Sorteio começa XXXXXXXXXXXX (“Período de Inscrição”).
          As inscrições enviadas antes ou depois do Período de Inscrição não serão elegíveis. O
          computador do Patrocinador é o dispositivo de cronometragem oficial do sorteio. O
          Sorteio terminará no dia XXXXXXXXXX.
          Como participar: No início do período de inscrição, você pode participar do Sorteio
          visitando um dos pontos de coleta oficial da RESIDUUM e descartando seu resíduo
          reciclável/compostável. O número de inscrições é ilimitado por pessoa/endereço de
          e-mail. O uso de uma agência ou qualquer sistema automatizado para participar é
          estritamente proibido e o Patrocinador se reserva o direito de desqualificar quaisquer
          inscrições recebidas por tais métodos, conforme determinado pelo Patrocinador, a seu
          exclusivo critério.
          Ao participar do Sorteio de acordo com o processo de inscrição descrito acima, você
          estará se registrando para receber comunicações por e-mail/telefone da RESIDUUM e
          concorda que seu registro e qualquer outra informação coletada em conexão com o
          Sorteio podem ser usados pela RESIDUUM de acordo com sua Política de
          Privacidade, cuja cópia atual pode ser encontrada
          aqui XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
          Sorteio: Após o Período de Inscrição, o Patrocinador selecionará o(s) possível(is)
          vencedor(es) em um sorteio aleatório de todas as inscrições recebidas. As chances de
          ser selecionado dependem do número de entradas recebidas.
          Notificação e Requisitos de Vencedores em Potencial: o Patrocinador tentará
notificar o vencedor em potencial dentro de cinco (5) dias úteis após o sorteio por
e-mail/telefone. Se um vencedor em potencial não responder dentro de sete (7) dias
corridos após o envio do aviso, o Patrocinador selecionará um vencedor em potencial
alternativo em seu lugar aleatoriamente entre todas as inscrições restantes recebidas.
Apenas três (3) vencedores potenciais alternativos serão contatados.
Prêmio(s): XXXXXXXXXXXXXXXXXXXXXXXXX
Descrição dos prêmios: XXXXXXXXXXXXXXXXXX
Condições Gerais: Caso a operação, segurança ou administração do Sorteio seja
prejudicada de alguma forma por qualquer motivo, incluindo, entre outros, fraude, vírus
ou outro problema técnico, O Patrocinador pode, a seu exclusivo critério,: (a)
suspender o Sorteio para resolver a deficiência e, em seguida, retomar o Sorteio da
maneira que melhor se adequar ao espírito destas Regras Oficiais; ou (b) atribuir o(s)
prêmio(s) aleatoriamente entre as inscrições elegíveis recebidas até o momento da
deficiência. O Patrocinador reserva-se o direito, a seu exclusivo critério, de
desqualificar qualquer indivíduo que considere estar adulterando o processo de
inscrição ou a operação do Sorteio ou agindo em violação destas Regras Oficiais ou
de maneira antidesportiva ou perturbadora. Qualquer tentativa de qualquer pessoa de
prejudicar a operação legítima do Sorteio pode ser uma violação da lei criminal e civil
e, caso tal tentativa seja feita, o Patrocinador reserva-se o direito de buscar
indenização de tal pessoa na medida máxima permitida por lei. A falha do
Patrocinador em fazer cumprir qualquer termo destas Regras Oficiais não constituirá
uma renúncia a essa disposição. A prova de envio de qualquer comunicação ao
Patrocinador por correio não será considerada prova de recebimento dessa
comunicação pelo Patrocinador. No caso de uma disputa sobre qualquer entrada
online, o titular da conta autorizada do endereço de e-mail usado para entrar será
considerado o participante. O “titular autorizado da conta” é a pessoa física a quem é
atribuído um endereço de e-mail por um provedor de acesso à Internet, provedor de
serviços online ou outra organização responsável pela atribuição de endereços de
e-mail para o domínio associado ao endereço de e-mail enviado.
Liberação e Limitações de Responsabilidade: Ao participar do Sorteio, você
concorda em isentar e isentar o Patrocinador, sua controladora, subsidiárias, afiliadas,
os provedores de prêmios e cada um de seus respectivos executivos, diretores,
funcionários , e agentes (as “Partes Liberadas”) de e contra qualquer reivindicação ou
causa de ação decorrente da participação no Sorteio ou recebimento ou uso de
qualquer prêmio, incluindo, mas não limitado a: (a) intervenção humana não
autorizada no Sorteio; (b) erros técnicos relacionados a computadores, servidores,
provedores ou linhas telefônicas ou de rede; (c) erros de impressão; (d)
correspondência perdida, atrasada, com postagem vencida, extraviada ou impossível
de entregar; (e) erros na administração do Sorteio ou no processamento das
inscrições; ou (f) lesões ou danos a pessoas ou bens que possam ser causados, direta
ou indiretamente, no todo ou em parte, pela participação do participante no Sorteio ou
pelo recebimento ou uso de qualquer prêmio. Você também concorda que, em
qualquer causa de ação, a responsabilidade das Partes Isentas será limitada ao custo
de inscrição e participação no Sorteio e, em nenhum caso, as Partes Isentas serão
responsáveis por honorários advocatícios. Você renuncia ao direito de reivindicar
quaisquer danos, incluindo, mas não limitado a danos punitivos, consequentes, diretos
ou indiretos.
Privacidade e uso das informações enviadas; Publicidade: Qualquer informação
que você enviar como parte do Sorteio será usada para os fins deste Sorteio e tratada
de acordo com a Política de Privacidade do Patrocinador, conforme estabelecido
nestas Regras Oficiais. Exceto quando proibido, a participação no Sorteio constitui o
consentimento do participante para o uso pelo Patrocinador de seu nome, imagem,
voz, opiniões, informações biográficas e estado de residência para fins promocionais
em qualquer mídia sem pagamento ou consideração adicional.
Uso das informações do participante: Ao participar do Sorteio, você reconhece e
concorda que o Patrocinador e as empresas participantes RESIDUUM usarão as
informações do participante, incluindo, sem limitação, seu endereço de e-mail, número
de telefone, endereço de correspondência ou qualquer outra informação de contato
fornecida para solicitação geral, marketing ou outras atividades comerciais ou
promocionais relacionadas aos serviços e produtos fornecidos pelo Patrocinador ou
pelas empresas participantes. Você pode, a qualquer momento, revogar o uso de tais
informações, fornecendo notificação por escrito ao Patrocinador e a cada outra
empresa participante usando os seguintes endereços ou respondendo a um e-mail de
marketing usando o link de cancelamento de assinatura fornecido no e-mail. Observe
que sua preferência de exclusão se aplicará à comunicação de marketing e pode não
se aplicar à comunicação transacional, incluindo aquelas associadas à sua inscrição.
Disputas: Exceto quando proibido, você concorda que todas e quaisquer disputas,
reivindicações e causas de ação decorrentes ou relacionadas ao Sorteio ou a qualquer
prêmio concedido serão resolvidas individualmente, sem recorrer a qualquer forma de
ação coletiva e exclusivamente pelo tribunal apropriado localizado em Manaus,
Amazonas. Todas as questões e questões relativas à construção, validade,
interpretação e aplicabilidade destas Regras Oficiais, seus direitos e obrigações, ou os
direitos e obrigações do Patrocinador em conexão com o Sorteio, serão regidos e
interpretados de acordo com as leis do Brasil.
Plataformas de terceiros: Se este Sorteio for hospedado, administrado ou operado
em uma plataforma de terceiros, incluindo, sem limitação, uma plataforma de mídia
social (p. g Facebook ou Twitter) (“Plataforma de Terceiros”), ao participar deste
Sorteio, os participantes liberam e concordam em cumprir todas as regras e políticas
estabelecidas por essa Plataforma de Terceiros e isentar essa Plataforma de Terceiros
de toda e qualquer responsabilidade, perda ou danos decorrentes de ou relacionados
à concessão, recebimento e/ou uso ou uso indevido de prêmios ou participação em
quaisquer atividades relacionadas a prêmios. Salvo disposição em contrário nestas
Regras Oficiais, este Sorteio não é patrocinado, endossado ou administrado por, ou
associado a qualquer Plataforma de Terceiros.
Ao participar deste sorteio, eu concordo expressamente com o uso do meu número de
telefone pela empresa organizadora do sorteio para fins relacionados à campanha
deste evento. Compreendo que meu número de telefone será utilizado para entrar em
contato comigo, para fornecer informações sobre o prêmio e coordenar a entrega"
          defaultValue={""}
          disabled
        />
      </div>
      <div className="grid grid-cols-2 gap-4 content-start py-4 px-4">
        <button onClick={nextPage}
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#5E5E64] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
        > Não Aceitar
        </button>
        <button onClick={saveTerms}
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#64a23d] px-4 py-2 text-sm font-medium text-white hover:bg-[#002266] focus:outline-none focus:ring-2 focus:ring-[#002266] focus:ring-offset-2"
        > Aceito
        </button>
      </div>
    </>
  );

}