---
sidebar_position: 2
---

# Como devo instalar

Leia com atenção o descritivo abaixo!

## Devo instalar o aviso de cookies da AdOpt direto no site, ou via Tag Manager?

Para que você tenha a AdOpt funcionando plenamente, ou seja, em sua máxima capacidade, é essencial que você faça a instalação dela via **Google Tag Manager (GTM)**.

### Por que usar o Google Tag Manager?

Pois, a AdOpt só terá a funcionalidade de "bloqueio automático" das demais tags do seu site, se ela estiver implementada dentro do Google Tag Manager, e se você seguir o passo a passo correto de instalação para cada uma das tags do seu site. (aqui o link para configuração via GTM)

Ou programação diretamente no HTML do site, com Arrays no Browser.
(aqui o link para a configuração manual)

### Mas, e se eu não quiser usar o Tag Manager, a AdOpt não consegue fazer esse bloqueio?

Depende. 

**Sim**, se você souber programar. Sem o tag manager você teria que programar isso no seu HTML, usando o setup manual e eventos que a AdOpt dispara.

**Não**, se você não souber programar. Sem o tag manager as requisições dos visitantes de acordo para com as tags que você tem no seu site, não serão bloqueadas segundo a escolha deles. Ou seja, continuarão disparando os cookies.

Justamente por isso que criamos essa funcionalidade via GTM, pra facilitar a vida de quem não programa.

### Mas, e as Tags Essenciais ou Necessárias do meu site?

Essa categoria de tags não é alterada pelo consentimento. Como o próprio título da categoria já diz, são necessárias para que o seu modelo de negócios opere.

Logo, mesmo que haja uma configuração setup do, elas ainda disparariam livremente.

* **Atenção**: Algumas pessoas aproveitam essa programação para incluir tags nesta categoria de maneira abusiva. Muito cuidado, pois, as bases legais - como um Legítimo Interesse, por exemplo, que amparam esse classificação devem estar alinhadas!

### Mas, o que acontece com um visitante novo se eu fizer todo o setup no GTM?

1- O visitante acessa seu site.

2 - A AdOpt verifica se esse este acesso é de um novo visitante ( ou seja, já tem o cookie AdOpt, ou não)

2.1 - Se sim, o aviso não é mostrado e apenar o controlador fica aparente no canto do site (controlador = bolinha com o logo da AdOpt, ou do seu site)

2.2 Se não, a AdOpt irá tratá-lo como um visitante novo.

2.3 Tags classificadas como Necessárias/Essenciais são disparadas.

Para o descritivo completo, veja o artigo: "Como funciona o aviso de cookies da AdOpt"

### Então se eu tiver apenas as Tags "Necessárias", a configuração do GTM é indiferente?

Exatamente!

### Preciso fazer a configuração dos gatilhos das Tags, para cada nova tag que eu adicionar no meu site?

Sim, todas as tags que você quiser que a AdOpt administre segundo a escolha dos visitantes, deve seguir esse processo de configuração.

Aqui o link para o tutorial de configuração completo do Google Tag Manager

Aqui o link para o tutorial de configuração MANUAL do bloqueio da AdOpt
