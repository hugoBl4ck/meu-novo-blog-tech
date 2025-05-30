---
title: "Windows 11: Novo Método para Instalação com Conta Local (Poss-BypassNRO)"
date: 2025-05-30T19:20:00-03:00 # << MUDE PARA A DATA E HORA ATUAIS OU DE PUBLICAÇÃO
description: "Aprenda o novo método para contornar a exigência de conta Microsoft e criar uma conta local durante a instalação do Windows 11, após a remoção do script BypassNRO.cmd."
keywords: ["Windows 11", "Conta Microsoft", "Conta Local", "Instalação Windows", "BypassNRO", "ITSupport", "System Administration", "Dicas de TI"]
author: "Hugo Robot" # << SEU NOME DE AUTOR
images: ["images/posts/windows11-setup.jpg"] 
draft: false # Mude para true se quiser trabalhar nele antes de publicar

tags: ["Windows 11", "Conta Microsoft", "Conta Local", "Instalação Windows", "BypassNRO", "ITSupport", "System Administration", "Dicas de TI"]
categories: ["Windows", "Tutoriais"]
---

A Microsoft recentemente removeu o conhecido script `BypassNRO.cmd` das compilações de pré-visualização do Windows 11. Esse script era uma ferramenta útil que permitia aos usuários e profissionais de TI contornar o requisito obrigatório de uma Conta Microsoft (MSA) durante a instalação do sistema operacional, possibilitando a criação direta de uma conta local.

Com essa mudança, muitos podem estar se perguntando qual a alternativa. Felizmente, existe um novo método que ainda permite essa flexibilidade.

## O Antigo Método: `BypassNRO.cmd` (Não Mais Funcional em Builds Recentes)

Para contextualizar, o script `BypassNRO.cmd` era uma solução popular. Ao ser executado no momento certo durante a instalação, ele reiniciava o processo de configuração de rede, permitindo que o usuário prosseguisse sem conectar-se à internet e, consequentemente, sem a necessidade de uma conta Microsoft. Sua remoção das builds mais recentes significa que precisamos de uma nova abordagem.

## Novo Método: Criando uma Conta Local com `iniciar ms-cxh:localonly`

Se você está instalando uma versão mais recente do Windows 11 e quer configurar uma conta local sem usar uma Conta Microsoft, experimente o novo método abaixo:

1.  Prossiga com a instalação do Windows 11 normalmente até chegar à tela que pergunta **"Vamos conectá-lo a uma rede"** (OOBENETWORK).
2.  Neste momento, pressione a combinação de teclas **`Shift + F10`** no seu teclado. Isso abrirá uma janela do Prompt de Comando (CMD).
3.  No Prompt de Comando, digite o seguinte comando exatamente como mostrado e pressione Enter:
    ```cmd
    oobe\bypassnro
    ```
    *(Nota: Embora o script `BypassNRO.cmd` tenha sido o foco da remoção, o comando `oobe\bypassnro` ainda pode funcionar em algumas compilações para reiniciar a fase OOBE e permitir a opção "Não tenho internet". Se este comando não funcionar ou não levar ao resultado desejado, prossiga para o método alternativo abaixo.)*

    **Método Alternativo Direto para Conta Local (se o acima não funcionar como esperado ou para builds onde `bypassnro` foi totalmente desabilitado):**
    Se o objetivo é ir direto para a criação de conta local, e o `bypassnro` não está disponível ou não é o desejado:

    Após o reinício (se causado pelo `bypassnro`) ou na tela de rede, se você conseguir chegar a um ponto onde o sistema insiste na conta Microsoft, tente este comando específico no Prompt de Comando (Shift + F10):

    ```cmd
    iniciar ms-cxh:localonly
    ```
    *(Este comando visa abrir diretamente a interface de criação de conta local. Sua eficácia pode variar dependendo da build específica do Windows 11.)*

    **Errata Importante (Correção Baseada na Sua Descrição Original):**
    Sua descrição original sugere que o comando `iniciar ms-cxh:localonly` é o novo método principal após o `BypassNRO.cmd` ser removido. Se o `oobe\bypassnro` não estiver mais disponível ou não for o caminho, o foco deve ser no `iniciar ms-cxh:localonly`.

    A sequência mais provável, se o `BypassNRO.cmd` foi removido e `oobe\bypassnro` não funciona para pular a rede, seria:
    1.  Na tela "Vamos conectá-lo a uma rede".
    2.  Pressione `Shift + F10` para abrir o Prompt de Comando.
    3.  Digite:
        ```cmd
        iniciar ms-cxh:localonly
        ```
    4.  Pressione Enter. Isso deve (idealmente, dependendo da build) abrir uma janela ou fluxo que permita a criação de uma conta de usuário local.

4.  Siga as instruções na tela para criar seu novo usuário local para a instalação do Windows 11.

Este método permite que você configure o Windows 11 com uma conta local, mantendo mais controle sobre o seu sistema e privacidade, especialmente útil para administradores de sistema e em cenários de suporte de TI.

---
