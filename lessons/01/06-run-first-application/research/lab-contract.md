# Предлагаемый контракт лабораторного проекта раздела 1

Дата: 02.11.2026. Статус: **Interpretation / проект входных условий**. Engineering Workbench ещё не реализован и не утверждён. Этот файл задаёт воспроизводимую цель будущего scaffold; команды и web-результаты не выданы за реально проверенные.

## Минимальная вертикальная функция

Создать инженерную заявку с заголовком и показать список с чтением из хранилища. Клиент, API и storage имеют явные границы, но не обязаны быть разными deployable services. В первом разделе не нужны authentication, production deploy и LLM внутри продукта.

Предлагаемая структура, не фактически существующее дерево приложения:

```text
apps/web/                 форма и список
apps/api/                 HTTP handlers
packages/contracts/       входы и ответы
packages/domain/          валидация заголовка
tests/                    unit, API и smoke
README.md                 версии, setup, start, checks, stop
.env.example              только имена и синтетические defaults
```

Primary stack кандидат — TypeScript; Python API допустим альтернативой. Рекомендуемое хранилище курса — подготовленный PostgreSQL; если выбран SQLite, его режим и будущий переход фиксируются явно. Во всех вариантах нужно доказывать persistence после рестарта; client-only mock этим условием не удовлетворяет.

## Предлагаемый API и oracle

API ниже **спроектирован для упражнения**, а не извлечён из существующего продукта или стандарта HTTP. MDN описывает механизм HTTP, но не эти бизнес-правила: [SRC-012](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview).

| Операция | Вход | Ожидаемое поведение |
|---|---|---|
| POST /api/tickets | JSON с title | 201 и созданная заявка с id/title |
| GET /api/tickets | Без body | 200 и список сохранённых заявок |
| POST /api/tickets | Нет title, не string, пустая/пробельная строка | 400 и стабильный error code; без новой записи |

Предложенное правило title: значение string; trim по правилам JavaScript; после нормализации длина 1–80 **UTF-16 code units**. Это намеренно явная учебная политика, а не рекомендация считать пользовательские символы таким способом. При переходе на Python сохранить ту же семантику или согласованно изменить контракт и тесты. Grapheme clusters и другие продуктовые правила рассматриваются в advanced-варианте.

## Протокол воспроизведения

1. Получить конкретный baseline commit; указать ОС, shell, runtime и package manager.
2. Следовать только существующему README; команды start/check нельзя придумывать до создания manifest.
3. Начать с отдельного синтетического набора данных; записать размер списка.
4. Создать одну корректную заявку, сохранить request/response и проверить readback по id.
5. Повторить direct API запрос с пустым и пробельным title; список не растёт, ошибка соответствует контракту.
6. Перезапустить предусмотренные процессы без reset базы; прочитать созданную заявку снова.
7. Для bugfix-базы запустить тот же regression test до и после patch. Baseline должен падать из-за правила, а не отсутствующей зависимости.
8. Просмотреть diff, новые файлы и отчёт. Остановить процессы документированным способом.

## Минимальный run manifest

```yaml
status: planned
baseline_commit: TO_BE_PREPARED
result_commit: NOT_RUN
os: TO_BE_SELECTED
shell: TO_BE_SELECTED
runtime_version: TO_BE_PINNED
client_version: TO_BE_PINNED
auth_mode: TO_BE_SELECTED_WITHOUT_SECRET
storage_mode: TO_BE_SELECTED
commands_executed: []
checks_executed: []
unknowns:
  - runnable scaffold is not provided yet
```

Пустые commands/checks означают отсутствие выполнения, а не успешный проход. В будущих отчётах сохранять actual exit code, snapshot, ожидание, наблюдение и stderr по делу; не сохранять credentials или персональные данные.

## Команды: условия применимости

[Норма npm ci, SRC-013](https://docs.npmjs.com/cli/v11/commands/npm-ci/) требует совместимого lockfile, не обновляет его и удаляет прежний node_modules. Команда не подходит проекту с другим package manager или без lockfile. [node:test, SRC-014](https://nodejs.org/api/test.html) используется для standalone-примера в Р1.08; web/API/storage checks ещё надо написать и реально исполнить.

## Критерий готовности scaffold

Документированные setup/start/stop/checks воспроизводятся с чистого состояния на выбранных ОС; fixtures изолированы; полная функция работает; негативные cases не создают записи; restart сохраняет данные; намеренный баг воспроизводится точным test oracle. До этого hands-on часть уроков остаётся запланированной.

