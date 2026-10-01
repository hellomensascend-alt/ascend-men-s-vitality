# Correção cirúrgica da landing Men Ascend

## Objetivo
Reorganizar apenas o conteúdo necessário para que um visitante entenda rapidamente o produto, o público, o método de 30 dias, o que recebe, o preço e o próximo passo, preservando integralmente o visual, o checkout e o tracking existentes.

## Alterações previstas

1. **Hero e clareza imediata**
   - Manter a composição e a imagem atuais.
   - Identificar Men Ascend, The Men's Performance Blueprint e “Digital Guide / 30-Day Blueprint”.
   - Usar a descrição educacional fornecida, incluir “120+ pages + practical tools + 30-day challenge”, manter `$39` visível e trocar o CTA principal para “GET THE 30-DAY BLUEPRINT”.

2. **Problema e mecanismo**
   - Substituir a abertura atual por uma seção curta com o contraste `MOTIVATION → STRUCTURE`, sem atribuir sintomas ao visitante.
   - Adicionar “How the 30-Day Blueprint Works” com os quatro passos fornecidos, reutilizando o padrão visual atual.

3. **Demonstração real e conteúdo interno**
   - Renomear a galeria para “See What's Inside” e usar somente as sete capturas reais já presentes no projeto, com legendas factuais e neutras.
   - Não usar imagens geradas como se fossem páginas reais.
   - Manter os seis módulos solicitados em “Inside the Blueprint”, removendo duplicações e afirmações fortes como “proven”, “high-performers” e “evidence-based” quando não comprovadas.
   - As capturas específicas dos bônus, capa, índice, framework, tracker e desafio não existem no projeto; serão representadas por espaços claramente identificados como indisponíveis, sem imagem falsa.

4. **Pacote e oferta**
   - Consolidar “What You Get” em um guia principal de 120+ páginas e os seis bônus nomeados, cada um com uma frase concreta de uso.
   - Remover valor total `$121`, preço riscado, “68% off”, “save $82”, urgência e linguagem de transformação.
   - Manter um bloco simples com `$39`, compra única, acesso digital, ferramentas, desafio de 30 dias e seis bônus.

5. **Confiança, garantia e FAQ**
   - Reescrever “Who Is Men Ascend For?” como propósito educacional para homens de 45–60 anos, sem sintomas ou promessas médicas.
   - Manter a garantia de 30 dias com a formulação fornecida.
   - Não inventar responsável, e-mail, termos, privacidade ou política de reembolso. Como esses dados/URLs não existem no projeto, serão informados no relatório como não verificáveis, sem criar páginas ou contatos fictícios.
   - Atualizar o FAQ com as sete perguntas solicitadas e respostas coerentes com o fluxo confirmado.

6. **CTA final e compliance**
   - Ajustar o CTA final para a rotina consistente, `$39` e “GET THE 30-DAY BLUEPRINT”.
   - Revisar somente a copy da landing para remover alegações médicas, resultados garantidos, números não comprovados e linguagem de desconto artificial.
   - Preservar o disclaimer educacional existente.

## Preservação técnica
- Não alterar paleta, fontes, imagens existentes, animações, responsividade base, preço, produto, Stripe Checkout ou página de acesso.
- Todos os CTAs continuarão usando a única URL existente do Stripe e o mesmo `InitiateCheckout`.
- `PageView`, `ViewContent`, `InitiateCheckout` e `Purchase` permanecerão na arquitetura atual; `Purchase` continuará condicionado à confirmação server-side da sessão paga.
- Não implementar webhook, backend, autenticação, banco de dados ou tracking adicional.

## Validação
- Conferir por busca todas as ocorrências de preço, checkout, claims médicos, descontos, prova social e eventos do Pixel.
- Verificar a landing em desktop e mobile, incluindo hero, galerias, FAQ, CTA fixo e navegação ao Stripe sem concluir compra.
- Verificar `/access` sem sessão para confirmar que nenhum material é liberado.
- Confirmar build sem erros e entregar relatório objetivo com itens alterados, mantidos, removidos e não verificáveis.
