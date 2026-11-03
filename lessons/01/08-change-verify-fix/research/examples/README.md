# Исполняемый пример: regression check заголовка

Статус: исследовательский пример для плана Р1.08, не полный урок и не готовое приложение. Дата проверки: 02.11.2026.

Кандидат бизнес-правила описан в [lab-contract.md](../../../06-run-first-application/research/lab-contract.md). Пример проверяет нормализацию и длину в UTF-16 code units, а не пользовательские grapheme clusters. Правило 80 units — явное проектное допущение, не стандарт для всех продуктов.

## Состав

- [title-policy.example.mjs](title-policy.example.mjs): исправленная функция и намеренно ошибочная baseline-функция.
- [title-policy.example.test.mjs](title-policy.example.test.mjs): один набор из 10 cases для обеих реализаций.
- [verification.md](verification.md): фактические результаты запуска.

Код не требует npm packages или доступа к модели. Используются ESM и node:test; модульный синтаксис и runner документированы в [Node.js test runner](https://nodejs.org/api/test.html), SRC-014. Фактически проверенный runtime — Node.js v24.22.1 на Windows / PowerShell. Поддержка других версий в этом исследовании не испытывалась.

## Запуск из корня репозитория курса

Каждая команда выполняется в учебной копии. Следующий PowerShell-блок явно выбирает вариант и восстанавливает прежнее значение переменной окружения:

```powershell
$taskPreviousVariant = $env:COURSE_TITLE_POLICY_VARIANT
try {
    $env:COURSE_TITLE_POLICY_VARIANT = 'corrected'
    node --test lessons/01/08-change-verify-fix/research/examples/title-policy.example.test.mjs
    # Ожидается exit code 0 и 10 passed.

    $env:COURSE_TITLE_POLICY_VARIANT = 'baseline'
    node --test lessons/01/08-change-verify-fix/research/examples/title-policy.example.test.mjs
    # Ожидается exit code 1: whitespace-only case должен выявить дефект.
} finally {
    $env:COURSE_TITLE_POLICY_VARIANT = $taskPreviousVariant
}
```

Проверять `$LASTEXITCODE` сразу после каждого вызова node, а не код всего блока после finally. Ошибка baseline — ожидаемое доказательство чувствительности test oracle, а не неисправность исследовательского пакета.

## Что показывает пример

Baseline проверяет пустоту до trim. Поэтому строка из whitespace возвращается как принятая с пустым normalized, что нарушает договорённый контракт. Исправленная функция сначала нормализует, затем проверяет длину. Один и тот же test suite различает две версии; тесты не ослаблены ради успешного результата.

## Границы

Здесь нет HTTP handler, клиента, storage и интеграции. Прохождение unit cases не доказывает защиту API от обхода клиентской валидации, persistence, корректность PR или полноценную готовность приложения. Такие checks нужно реализовать в scaffold раздела 1. Неизвестное значение COURSE_TITLE_POLICY_VARIANT вызывает ошибку вместо молчаливого выбора реализации.
