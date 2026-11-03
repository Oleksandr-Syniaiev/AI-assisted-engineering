# Р5.14 — Паттерн 23. Reproducibility unit + audit trail

**Статус:** Final; авторский технический и методический self-review. Независимая рецензия не проводилась.

**Уровень:** Middle–Senior/Staff, Tech Lead. **Время:** 35–50 минут, оценка без пилотирования.

**Предварительные знания:** Р5.05, Р5.09, Р5.02; GAP-12.

**Результат обучения:** Собрать минимальный пакет provenance и аудита, объяснив, что повторяемость не обещает идентичный LLM output.

## 1. Инженерная проблема и определения

Reproducibility unit — рабочий термин курса для пакета, связывающего входы, версии, действия и evidence одного запуска. Audit trail хранит значимые действия и решения; observability помогает понять runtime поведение. Они пересекаются, но имеют разные требования к полноте, целостности и удержанию данных.

Повторить процедуру не означает получить побитово одинаковый LLM output.

Основания и ограничения: [SRC-531](references.md#src-531) · [SRC-532](references.md#src-532). Рабочие модели и инженерные рекомендации не объявляются универсальными стандартами.

## 2. Архитектура и механизм

Manifest связывает task/run, source commit, spec/config, model/tool IDs и outputs. Trace показывает длительные операции и вложенность; события фиксируют изменения состояния и решения. История должна различать intent, фактически выполненное действие и подтверждённый итог.

```text
manifest → run/trace → tool events → artifacts/checks → review decision
```

SLSA provenance относится к происхождению build artifacts. OpenTelemetry задаёт модели наблюдаемости; конкретные semantic conventions имеют версии. Ни один из этих источников не определяет автоматически полную схему AI-аудита.

## 3. Разобранная авторская демонстрация

Разберём Workbench PR с закрытием. В manifest записан исходный H, spec revision 3 и tool contract 2. Trace содержит proposed call, approval, execution и observation. CI report связан с итоговым H2; review decision — с H2 и target environment.

```text
event E1: proposal, effect ещё не выполнен
event E2: approved action digest D, approver identity
event E3: execution outcome или unknown timeout
event E4: reconciliation по idempotency key
artifact A1: verification report на H2
```

Если модель или внешняя служба больше недоступна, можно всё ещё проверить lineage и относящиеся к коду checks, но нельзя обещать точный replay всей сессии. Повреждённый или редактируемый без следа log слаб как audit evidence. Пример описательный: события не являются реальным trace.

**Платформа и проверка:** Engineering Workbench — кандидат сквозного проекта, входы синтетические. Конкретные prerequisites приведены рядом с кодом/командами; псевдокод и JSON — учебные форматы. Приложение, тесты, агенты и продукты здесь не запускались. Ожидаемые свойства не являются фактическим результатом.

## 4. Production, риски и сопровождение

Определите tamper threat model, append-only/integrity controls, identity, часы, correlation IDs и key custody при подписях. Не храните весь transcript по умолчанию: secrets и PII требуют минимизации, ACL, redaction и retention. Цена расследования снижается только если данные связаны и доступны нужному reviewer.

В legacy фиксируют текущие контракты и baseline; в monorepo — затронутых consumers и owners. Приёмка связывается с конкретным состоянием кода и неизменными критериями. Проверяемые автоматические свойства идут в tests/CI, а неоднозначные решения — к назначенному владельцу. Полная стоимость включает setup, обучение, usage, ожидание, review, rework и поддержку версий. Непроверенное указывается явно.

## 5. Альтернативы и trade-offs

| Подход | Применимость | Освоение, внедрение, сопровождение и цена компромисса |
|---|---|---|
| Текстовый log | Локальная диагностика | Дешёвый старт, слабые структура и lineage |
| Structured traces/events | Многошаговый runtime | Нужны instrumentation и schema discipline |
| Manifest + защищённый audit | Высокий риск и расследования | Дороже storage/governance, сильнее проверяемость происхождения |

Это качественное сравнение, а не benchmark. Проверяемость зависит от подходящего независимого evidence, безопасность — от фактических boundaries и возможности обхода. Дополнительный tooling оправдан, если польза для принятых outcomes покрывает затраты и новые отказные режимы.

## 6. Проверка знаний с объяснёнными ответами

### 1. Observability и audit trail идентичны?

Нет. Observability помогает понять runtime состояние; audit trail поддерживает доказуемую историю значимых действий и решений.

### 2. Что значит reproducible run?

Повторение процедуры/inputs в контролируемых условиях; идентичность output должна быть отдельно доказана.

### 3. Какие поля важны в manifest?

Task/run ID, source commit, спецификация/конфиги, tool/model/runtime IDs, environment, artifacts и ссылки на checks/decisions.

### 4. Почему хранить весь transcript рискованно?

В нём могут быть секреты, персональные данные и код; минимизация, redaction, retention и access control обязательны.

### 5. Как связывать события между системами?

Стабильными run/task/trace IDs и ссылками на commit, PR, CI run, approval и deployed artifact.

### 6. Что защищает log integrity?

Контроль записи и чтения, append-only/tamper-evident storage, key custody, clock source и аудит доступа; отдельные меры имеют свои границы.

### 7. Как доказать chain-of-custody?

Хэш/подпись артефакта с provenance, известным источником идентичности и проверяемым хранением; SLSA описывает supply-chain provenance, а не весь AI reasoning.

## 7. Итоги и следующий шаг

Собрать минимальный пакет provenance и аудита, объяснив, что повторяемость не обещает идентичный LLM output. Главный критерий — объяснимое решение с границами ответственности и доказательности.

[Следующий урок: Р5.15](../15-tessl/index.html). 

[Источники](references.md) · [Демонстрация и критерии разбора](exercises.md) · [К разделу 4](../../../index.html#section-4) · [Все разделы](../../../index.html#section-5).
