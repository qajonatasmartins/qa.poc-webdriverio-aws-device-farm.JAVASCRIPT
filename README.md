# qa.poc-webdriverio-aws-device-farm.javascript

Projeto tem como objetivo configurar uma base de projeto integrando testes do webdriverIO web com o device farm da aws.

## **Passo a passo**

### Criar o projeto no aws device farm

1. Acesse a aws
2. Realize o login com seu usuário
3. Pesquise por no "Device Farm" da aws
4. Na seção 'Desktop Browser Testing' >> clique em [Projects]
5. Clique em [New project]
6. Informe somente o 'Project name' (O VPC é para ser usado somente se precisar)
7. Clique em [Create]
8. Após criar, clique para copiar o link do 'Project ARN' da tela

### Configurar o Project ARN neste projeto

1. Na raiz deste projeto, dentro da pasta 'environments' no arquivo 'producao.config.js' e 'staging.config.js' cole o valor do conteúdo 'Project ARN'. 
   1. Cole o 'Project ARN' referente ao ambiente de teste staging(test/homologacao) ou producao.
2. Informe a region correta nos arquivos de 'producao.config.js' e 'staging.config.js'.

### Instalar projeto

1. Abra o terminal
2. Execute o comando: `npm install`

### Executar projeto e enviar os testes para aws device farm

1. Abra o terminal
2. Execute o comando:
   1. `npm run e2e:chrome` para rodar os testes no navegador do chrome
   2. `npm run e2e:firefox` para rodar os testes no navegador do firefox
   3. `npm run e2e:edge` para rodar os testes no navegador do edge

[Referência](https://docs.aws.amazon.com/devicefarm/latest/testgrid/testing-frameworks-nodejs.html)