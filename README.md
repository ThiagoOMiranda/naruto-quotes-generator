# **`Projeto Educacional: Introdução à React Hooks`**

## Proposto no bootcamp: Introdução à React Hooks ministrado pela [DIO]()

**_Desenvolvido por:_** _Thiago de Oliveira Miranda_.&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Github](https://github.com/ThiagoOMiranda)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[LinkedIn](https://www.linkedin.com/in/thiago-de-oliveira-miranda-5393181a7/)

<br>

### **`Sumário:`**

<p align="center">
    <a href="#escopo">Escopo do projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#conhecimento">Conhecimento aplicado</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#resultado">Resultado obtido</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#info">Informações adicionais</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#atualizacoes">Futuras atualizações</a>
</p>

<br>

## **`Escopo do projeto`** <a name="escopo"></a>

O desafio proposto consistia em criar uma página "**_geradora de frases_**" do universo de \*Naruto**, usando os conceitos de \***Hooks do ReactJS**, onde as frases seriam capturadas por meio de \_**fetch**_ a partir de uma _**API\*\*\* simples.

<br>

## **`Conhecimento aplicado`** <a name="conhecimento"></a>

### **Hooks utilizados:**

<br>

### **_`useState:`_**

```
const [quoteState, setQuoteState] = useState({
    quote:
      "Bem vindo ao Naruto Quotes! Clique no botão para gerar frases aleatórias dos personagens de Naruto. Tô certo, dattebayooo!!!",
    speaker: "dev: Thiago Miranda",
  });
```

Retorna um valor e uma função para atualizar o valor.

Durante a renderização inicial, o estado retornado é o mesmo que o valor passado como argumento inicial (initialState).

A função setState é usada para atualizar o estado. Ela aceita um novo valor de estado e coloca na fila de re-renderização do componente.

```
const quote = await getQuote();

...

setQuoteState(quote);
```

Utilizado para gerenciar a atualização (e renderização) das frases e das imagens dos personagens após a solicitação de dados assíncronos da API pelo botão **_Próxima frase_**.

<br>

### **_`useRef:`_**

```
const isMounted = useRef(true);
```

_useRef_ retorna um objeto ref mutável, no qual a propriedade .current é inicializada para o argumento passado (initialValue). O objeto retornado persistirá durante todo o ciclo de vida do componente.

Utilizado no contexto da página para atribuir ações de atualização do personagem por meio da propriedade _.current_, pela qual dispara ações quando o objeto ref é montado.

```
if (isMounted.current) {
      btnAudio.play();
      setQuoteState(quote);
      const imgPack = await removeSpaces(quote.speaker);
      const charImg = await randomValue(dict[imgPack].image);
      setChar(charImg);
      setTick(!tick);
    }
```

<br>

## **`Resultado obtido`** <a name="resultado"></a>

<br>
<p align="center"><img width="100%" src="Readme_files\resultado.png"/></p>

<p align="center"><i>Figura 01: Layout da Página.</i></p>

<br>

## **`Informações adicionais`** <a name="info"></a>

<br>
<p align="center"><img width="80%" src="Readme_files\personagens.png"/></p>

<p align="center"><i>Figura 02: Variações dos personagens.</i></p>

<br>

- Foi implementado no projeto, uma condição que identifica o interlocutor da frase (speaker) e sorteia entre as imagens disponíveis para cada personagem.

- Para aplicar a estilização (**_CSS_**) a lib: [**_styled-components_**](https://yarnpkg.com/package/styled-components) foi necessária para customizar os componentes. Além de fixar a **_GlobalStyle_**.

- Para converter a logo em _**.SVG**_ para _**.JSX**_ para melhor compatibilidade no projeto, foi usada a ferramenta online [**_svg.2jsx.com_**](https://svg2jsx.com).

- A animação de transição dos personagens foi utilizada a lib: [**_react-transition-group_**](https://yarnpkg.com/package/react-transition-group).

- Para implementar o player de áudio foi utilizada a lib: [**_react-audio-player_**](https://yarnpkg.com/package/react-audio-player).

<br>

## **`Possíveis atualizações`** <a name="atualizacoes"></a>

- [ ] Responsividade para dispositivos móveis.
