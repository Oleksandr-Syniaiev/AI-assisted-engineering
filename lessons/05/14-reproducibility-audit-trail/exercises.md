# Авторская демонстрация — Р5.14

Самостоятельных заданий, сдачи и обязательных артефактов читателя нет. Полный разбор включён в [урок](lesson.md).

## Вход и сценарий

Разберём Workbench PR с закрытием. В manifest записан исходный H, spec revision 3 и tool contract 2. Trace содержит proposed call, approval, execution и observation. CI report связан с итоговым H2; review decision — с H2 и target environment.

```text
event E1: proposal, effect ещё не выполнен
event E2: approved action digest D, approver identity
event E3: execution outcome или unknown timeout
event E4: reconciliation по idempotency key
artifact A1: verification report на H2
```

Если модель или внешняя служба больше недоступна, можно всё ещё проверить lineage и относящиеся к коду checks, но нельзя обещать точный replay всей сессии. Повреждённый или редактируемый без следа log слаб как audit evidence. Пример описательный: события не являются реальным trace.

## Критерии разбора

Собрать минимальный пакет provenance и аудита, объяснив, что повторяемость не обещает идентичный LLM output. Проверяемые признаки: указаны исходные данные и scope, объяснён механизм, разобран обычный и отказный случай, владелец решения определён, ожидаемое отделено от реально проверенного.

## Статус исполнения

Документальный разбор: команды, products и agents не запускались. Для будущего исполнения фиксируются source snapshot, versions, изолированные runtime-ресурсы, доступы, бюджет, критерий приёмки и owner. Иллюстративная конфигурация не выдается за проверенную установку.
