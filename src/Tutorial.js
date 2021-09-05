/*
legendas:

[*] = [feito em commit passado]
{X} = {ultimo passo}

*/

/*
Requisito 0
  aparentemente eu tenho que criar o reducer pro requisito 1 passar? mas no enunciado não tem nada...

  Requisito 1
  1.0.1 - criar a store em src.
  1.0.2 - criar os reducers combinados.
  1.0.3 - adicionar o provider com a store no index.js.
*/

/*
  Requisito 1
    criar a rota do login
    Nesse caso optei por criar um componente MasterRouter
    para não embaralhar mais do que o React/Redux ja é.

    1.1 - Começamos criando o arquivo MasterRouter e importanto os modulos e componentes de router.
    1.2 - Agora só montar o Router e exportar no componente MasterRouter.
    1.3 - importar o MasterRouter no App.
    1.4 - Adicionar o component MasterRouter no App
    1.5 - Criar os inputs do requisito na pagina Login.
*/

/*
  Requisito 2
    Criar a logica de login

    { Aparentemente apesar do requisito 2 falar que precisa mudar de pagina
    e salvar no global, aparentemente não é necessario para o evaluator,
    tanto que se for ver o requisito 3 pede novamente o salvamento no global
    e a mudança de pagina, erro de formulação?
    vou dar push pra ver se vai só com a logica de regex. } CONFIRMADO

    2.1 - criar a logica do forms em Login.
*/

/*
  Requisito 3
    criar a logica do buttão para trocar de pagina e salvar na store.

  3.1 criar o caminho para /carteira no MasterRouter.
  3.2 colocar o link no button no Login.
  3.3 salvar o email no estado global, criando o reducer, a action e conectando com Login.
*/

/*
  Requisto 4
  criar a rota da pagina.
  acabei criando sem querer ao adicionar a rota no masterrouter
  passo 3.1.2

  4.1 criar a rota no masterrouter
*/

/*
  Requisito 5
   criar o header

   5.1 - criar o componente header na pagina header
   5.2 - chamar o header na pagina wallet
*/

/*
  Requisto 6
  criar o forms de gastos

  6.1 criar o componente expenses
  6.2 - chamar o component expenses
*/
