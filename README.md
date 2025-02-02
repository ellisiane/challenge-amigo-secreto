# Desafio Amigo Secreto - Alura - Oracle Next Education

Este repositório contém o código para o desafio do amigo secreto proposto no curso Alura - One (Oracle Next Education). O objetivo do desafio é criar um programa que permita aos usuários adicionar nomes de amigos, realizar um sorteio aleatório e exibir o resultado.


## Funcionalidades

*   **Adicionar amigo:** Permite adicionar o nome de um amigo à lista.
    *   **Validações:**
        *   A primeira letra do nome é sempre convertida para maiúscula.
        *   Não é permitido adicionar nomes vazios.
        *   Não é permitido adicionar números no nome.
        *   Se o nome já existir na lista, é solicitado um sobrenome para diferenciá-lo.
        *   É verificado se o novo nome completo (com sobrenome) já foi adicionado.
*   **Formatar nome:** Formata o nome do amigo (primeira letra maiúscula, resto minúsculas).
*   **Remover acentos:** Remove acentos do nome para evitar problemas de comparação.
*   **Comparar nomes:** Compara nomes ignorando diferenças de capitalização e acentos.
*   **Atualizar lista:** Exibe a lista de amigos na tela.
*   **Sortear amigo:** Realiza um sorteio aleatório entre os amigos da lista e exibe o resultado.
    *   **Validação:** É necessário ter no mínimo dois participantes na lista para realizar o sorteio.
*   **Reiniciar:** Limpa a lista de amigos e o resultado do sorteio sem atualizar a página.

## Tecnologias utilizadas

*   HTML
*   CSS
*   JavaScript

## Como usar

1.  Clone este repositório: `git clone https://github.com/seu-nome-de-usuario/nome-do-repositorio.git`
2.  Abra o arquivo `index.html` em seu navegador.

## Como contribuir

1.  Fork este repositório.
2.  Crie um branch com sua funcionalidade: `git checkout -b minha-funcionalidade`
3.  Faça as alterações e confirme-as: `git commit -m "Minha funcionalidade"`
4.  Envie para o branch principal: `git push origin minha-funcionalidade`
5.  Crie um Pull Request.

## Licença

Este projeto está sob a licença MIT.

## Agradecimentos

*   Alura
*   Oracle Next Education

## Contato

Se tiver alguma dúvida ou sugestão, entre em contato.

## Status do projeto

Em desenvolvimento.
