# Documentação criada para auxílio na execução dos testes do curso  "Cypress, do Zero à Nuvem"
- Fonte: https://github.com/wlsf82/cypress-do-zero-a-nuvem

👋 Seja bem-vindo(a)!

O conteúdo desse repositório utiliza como base todos conteúdos abordados no um curso da **Escola Talking About Testing**. e as resoluções de exercícios, bem como exemplos de arquivos .md fornecidos, dando assim os devídos **créditos ao Professor Walmyr**(https://github.com/wlsf82  https://www.linkedin.com/in/walmyr-lima-e-silva-filho).

## Conteúdo abordado no curso:

- Como configurar um projeto Cypress do zero
- Como visitar páginas locais e remotas
- Como lidar com os elementos mais comuns encontrados em aplicações web
- Como testar upload de arquivos
- Como realizar as mais diversas verificações de resultados esperados
- Como criar comandos customizados
- Como lidar com links que abrem em outra aba do navegador
- Como rodar testes simulando as dimensões de um dispositivo móvel
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Como criar uma documentação mínima para seu projeto de testes automatizados
- Como executar os testes em um _workflow_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Como integrar seu _workflow_ de integração contínua com o Cypress Cloud (o serviço de gestão de testes do Cypress na nuvem)

## Pré-requisitos:

Você deve ter o Node.js e o npm instalados para executar esse projeto.
> Foram utilizadas as versões `v22.18.0` and `10.9.3` do Node.js e npm, respectivamente. è sugerido que se use as mesmas versões ou posteriores.

## Instalação:

Após clonar o repositório, na pasta do projeto, execute o comanado `npm install cypress@13.12.0 --save-dev` 

## Testes:
Os testes estão configurados, por padrão, para serem executados na resolução de 1280 X 880, mas podemos executá-los na resolução 860 x 410, simulando assim a visualização de uma página web mobile, seja no modo headless como no modo visual. Para mais detalhes consulte a seção `scripts` do arquivo `package.json`

**Comandos:**
- Executar todos os testes no modo gráfico: `npm run cy:open`
- Executar todos os testes no modo **headless**: `npm run test`
- Executar todos os testes no modo gráfico "mobile": `npm run cy:open:mobile`
- Executar todos os testes no modo **headless** "mobile" : `npm run test:mobile`