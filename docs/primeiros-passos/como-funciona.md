---
sidebar_position: 3
---

# Como funciona

Leia com atenção o descritivo abaixo!

## Como funciona um aviso de cookies da LGPD?

A AdOpt é uma plataforma de gestão de consentimentos que permite que você construa uma relação de transparência e confiança com os visitantes do seu site.

Assim, todos os visitantes que acessarem o seu site serão abordados pelo aviso com uma notificação que pede o consentimento de cada um deles de maneira direta, livre, informada e detalhada.

Abaixo o passo a passo das etapas que processam esse registro de consentimento na AdOpt.

### Como funciona o aviso de cookies da AdOpt?
Esse é um exemplo do funcionamento da plataforma:


- O visitante acessa seu site.

- A AdOpt verifica se esse este acesso é de um novo visitante ( ou seja, já tem o cookie AdOpt, ou não)
2.1 - Se sim, o aviso não é mostrado e apenar o controlador fica aparente no canto do site (controlador = bolinha com o logo da AdOpt, ou do seu site)
2.2 Se não, a AdOpt irá tratá-lo como um visitante novo.
2.3 Tags classificadas como Necessárias/Essenciais são disparadas.

- Ele recebe uma notificação de configuração de privacidade da AdOpt. Com:
3.1 - Listagem de Tags/Cookies de terceiros e sua respectiva classificação feita pelo gestor da AdOpt naquele site.
3.2 - Links Públicos da Política de Privacidade e Termos de Uso.
3.3 - Links Públicos da página de Opt-out da AdOpt para aquele site.

- Ele configura suas preferências, podendo detalhar a listagem de cada uma das categorias de cookies e das tags presentes.
Ao clicar em aceito, a AdOpt gera um cookieID único para aquele visitante, que fica armazenado em seu navegador.

- As informações do consentimento contendo:
6.1 - Data e Hora,
6.2 - CookieID Anonimizado,
6.3 - Relação atualizada das Tags e Cookies aceitos ou não,
6.4 - Versão da Política de Privacidade e Termos de uso disponíveis há época,

- São registradas de maneira individualizada na sessão "Consent Log", dentro da Plataforma da AdOpt em app.goadopt.io/consent-log.

- Caso o gestor do aviso da AdOpt para o referido site, tenha feito a integração de bloqueia da AdOpt com o Tag Manager. Sempre que esse visitante acessar o site, a lista com as tags autorizadas ou não (item 6.3) estará no navegador do visitante.

- Assim, a cada novo acesso as tags, dento do GTM, consultam a lista da AdOpt para que seja feico o disparo, ou para que fiquem inativas naquele acesso único. 

- Caso o visitante faça uma requisição de opt-out:

a – A AdOpt atualiza o CookieID que fez a solicitação, com uma “marca/tag” classificando este cookie como inativo/optout. Assim, dentro do sistema AdOpt este “CookieID” será inutilizado, e só sirva para fins de registro – prova de consentimento.
 
b - Os 2(dois) emails são disparados notificando o titular (se identificado) e o gestor do site/empresa.

b.1 – A empresa recebe esse e-mail e pode analisar se há outras integrações que usam essas     informações para então dar sequência na requisição em outros sistemas integrados. (sistemas, call backs, e APIs)

b.1.1 - Se você não tiver nenhum dado associado ao cookie, você não precisa fazer nada. Pois, na AdOpt estarão apenas os informações (anônima) para fins de prova de consentimento, cuja cópia você já recebeu no e-mail.

b.2 – Caso o titular também tenha informado o e-mail, você deve usar esse dado para excluí-lo de todos os demais sistemas, utilizando-o como chave de acesso, pelo seu data mapping/mapeamento de dados. (aqui um artigo sobre data mapping)

b.2.1 – Caso esteja em seus processos a notificação de comprovação de que as exclusões foram feitas, aproveite o e-mail do titular para esse disparo.

b.4 – O Titular é notificado, por um pop-up e por um link no rodapé do e-mail recebido, que o conduz para um ambiente educativo, e público, que o ensina a apagar manualmente os Cookies do seu Navegador.
 
c – A AdOpt mantém esse registro em sua base, informando que o CookieID #xyz.exemplo.1234 fez uma requisição naquele momento (data/hora). Pois, caso você precise para utilização em bases legais, e auditorias de privacidade, ela estará facilmente acessível.