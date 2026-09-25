# Visão de métricas

Painel Supernova em React, Vite, Tailwind CSS e shadcn/ui. A implementação usa o preset shadcn `b3lo4W8LA`: estilo Luma, base Stone, fonte Geist, raio pequeno, azul primário e gráficos laranja.

## Arquivos

- `src/App.tsx`: dashboard responsiva, gráficos SVG e dados demonstrativos.
- `src/index.css`: tokens de tema claro e escuro do preset.
- `src/components/ui/`: componentes `Card` e `Switch` do shadcn/ui.
- `components.json`: configuração do preset, incluindo a stack Vite e `base-luma`.
- `package.json`: scripts e dependências do projeto.
- `theme/supernova-github.theme.json`: cópia do tema de origem aplicado ao painel.
- `reference/metrics-overview.json`: componente publicado usado como referência, preservado sem execução.

## Tema e aparência

O painel preserva a grade, os indicadores e as séries da referência, com largura máxima de 1152px. O switch no canto superior direito alterna claro e escuro e guarda a escolha neste navegador. O azul é reservado ao acento e aos indicadores; como definido pelo preset, as séries de gráficos usam laranja.

Indicadores ficam em uma coluna abaixo de 640px, duas a partir de 640px e quatro a partir de 1280px. Os painéis inferiores ficam lado a lado a partir de 1024px, na proporção 1,6:1.

A navegação fixa do catálogo não integra o componente e não foi incluída. Os números e eventos são dados demonstrativos da referência, não uma integração com backend. As barras mantêm a série original sem atribuir uma unidade não declarada pelo componente.

## Origem

Supernova Catálogo: https://supernova-catalogo.vercel.app/c/dashboards/metrics-overview

Registry: https://supernova-catalogo.vercel.app/r/dashboards/metrics-overview.json

Tema: `supernova-github.theme.json`, fornecido para esta tarefa. A atribuição original do tema é preservada no próprio arquivo.

O cabeçalho do componente original informa: “Montado com shadcn/ui (MIT) sobre o preset b21XEsfuCW e os tokens da Supernova. Veja NOTICE no repositório do catálogo.” Esta adaptação preserva a atribuição; essa declaração não é uma licença adicional para todo o catálogo.

