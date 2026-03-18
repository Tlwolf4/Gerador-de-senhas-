# projeto-pessoal-1bim
🔐 Gerador de Senhas – Passo a Passo Guiado

1️⃣ Criar a tela (HTML)

Pergunta: você tem algum editor de texto aberto?

Se sim, crie um arquivo chamado index.html.

O que precisa ter na tela:

Um campo onde o usuário vai digitar o tamanho da senha (input)

Um botão que vai gerar a senha

Um espaço para mostrar o resultado (parágrafo ou div)

Dica: pense em id’s para cada elemento:

input → “tamanho”

botão → “gerar”

resultado → “senha”

2️⃣ Pegar os elementos no JavaScript

Pergunta: você sabe onde colocar o JS?

Pode ser em um arquivo separado (script.js) ou dentro de script no HTML.

A ideia é:

Selecionar o botão, o input e o elemento de resultado usando querySelector

Guardar cada um em uma variável

Mental: “quero que meu JS consiga mexer com esses elementos da tela”.

3️⃣ Detectar clique no botão

Você vai usar addEventListener("click") no botão

Quando o botão for clicado, ele deve chamar uma função que vai gerar a senha

Pergunta: já pensou no nome da função?

Pode ser algo como “gerarSenha”

4️⃣ Ler o valor do input

Dentro da função, você pega o tamanho digitado pelo usuário usando value

Antes de usar, vale validar para garantir que não está vazio ou menor que 1

Mental: “quantos caracteres a senha deve ter?”

5️⃣ Criar a lista de caracteres possíveis

Pense: quais caracteres você quer permitir?

Letras minúsculas

Números

Símbulos como !@#$%&*

Guarde tudo em uma variável (uma string ou array)

6️⃣ Inicializar senha vazia

Antes de começar a gerar, crie uma variável vazia

Ela vai ser preenchida caractere por caractere

7️⃣ Gerar a senha aleatória

Use um loop for que vai repetir o número de vezes igual ao tamanho da senha

Dentro do loop:

Gere um número aleatório entre 0 e o tamanho da lista de caracteres (Math.random() + Math.floor())

Pegue o caractere correspondente

Adicione na variável senha (+=)

Mental: “cada repetição escolhe um caractere aleatório e acrescenta à senha”

8️⃣ Mostrar a senha na tela

Pegue o elemento de resultado

Coloque a senha dentro dele usando innerHTML

Mental: “agora o usuário consegue ver a senha”

9️⃣ (Opcional) Copiar a senha

Crie um botão “copiar”

Quando clicado, use navigator.clipboard.writeText() para copiar a senha

Mental: “assim o usuário não precisa digitar a senha manualmente”

🔟 Revisão da ordem

Criar elementos HTML (input, botão, resultado)

Pegar elementos com querySelector

Detectar clique no botão com addEventListener

Ler valor do input com value

Validar valor com if

Criar lista de caracteres

Inicializar senha vazia

Gerar senha no for usando Math.random() + Math.floor() e +=

Mostrar senha com innerHTML