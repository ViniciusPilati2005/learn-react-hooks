# React Hooks

Este projeto foi feito com o objetivo de entender melhor como funcionam os hooks do React

## UseRef

useRef é um React Hook que permite referenciar um valor que não é necessário para renderização.

Mas o que isso significa?

- A ref só será atualizada quando o componente desmontar e montar novamente.
- A propriedade ref.current é mutável porque você pode alterar diretamente o valor dela sem disparar uma nova renderização.

  - Por exemplo:
    - O useState é imutável, pois não há como atualiza-lo sem usar o disparador setState e causar uma nova renderização no componente.
    - Alterar o valor de ref.current não causa re-renderização do componente.

  ### Quando usar ref?

  - Quando precisar salvar o estado anterior
  - Quando precisar acessar um elemento do DOM diretamente.
  - Armazenar Temporizadores ou Identificadores
  - Armazenar Informações de Usuário ou Input

  ### A diferença de uma ref para um estado:

  - Conforme o estado muda seu valor com setState ele provoca re-renderizações
  - Já a ref, apenas muda seu valor, que é atualizado quando o componente reemontar.


## UseCallback

UseCallback é um hook que faz a memoização de uma função, evitando que ela seja recriada a cada renderização. Geralmente utilizada quando a função possui cálculos caros ou quando a função é criada no pai, mas usada no filho do componente.

Quando um estado ou prop muda, no mais comum dos casos, a função seria recriada novamente, causando custos de memória e performance

Para evitar isso, o UseCallback memoiza essa função e só a recria novamente na montagem do componente ou quando o vetor de dependências mudar.

#### Casos comuns de uso do useCallback
Passagem de funções para componentes filhos

- Evita que a função seja recriada em cada renderização, prevenindo re-renders desnecessários no filho.

```
const handleClick = useCallback(() => {
  console.log("Botão clicado");
}, []);

<ChildComponent onClick={handleClick} />
```

Funções em useEffect (como dependências)
```
const fetchData = useCallback(() => {
  console.log("Buscando dados...");
}, []);

useEffect(() => {
  fetchData();
}, [fetchData]); // ✅ Não roda o efeito em re-renders desnecessários

```

#### ⚠️ Quando NÃO usar useCallback
- Se a função não está sendo passada para um filho ou usada em useEffect, useCallback pode ser desnecessário.
- Se a função já é estável por natureza (exemplo: const handleClick = () => {...} dentro do onClick direto).
- Se o custo de memoização for maior que o benefício (evite otimizar prematuramente).