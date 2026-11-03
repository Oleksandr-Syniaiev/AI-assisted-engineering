# Р1.04 — авторская демонстрация

Материал для чтения. Самостоятельных заданий, обязательных файлов и сдачи нет.

## Разбор: Разобранная последовательность просмотра

Предусловия: PowerShell в корне этого курса, доступный Node.js. Конкретный абсолютный путь у читателя будет другим. Команды просмотра не изменяют содержимое проекта.

```powershell
Get-Location
Get-ChildItem -LiteralPath 'lessons/01/demo-workbench'
Resolve-Path -LiteralPath 'lessons/01/demo-workbench/policy.mjs'
Get-Content -LiteralPath 'lessons/01/demo-workbench/policy.mjs'
```

`Get-Location` отвечает на вопрос «откуда считаются относительные пути». `Get-ChildItem` показывает записи каталога. `Resolve-Path` позволяет увидеть разрешённый путь. `Get-Content` читает содержимое. `-LiteralPath` передаёт путь буквально, без раскрытия шаблонов. Назначение текущего местоположения документировано Microsoft. [SRC-010](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-location?view=powershell-7.5)

Теперь переход:

```powershell
Set-Location -LiteralPath 'lessons/01/demo-workbench'
Get-Location
node --test workbench.test.mjs
$LASTEXITCODE
```

После перехода префикс `lessons/01/demo-workbench/` не нужен. `$LASTEXITCODE` относится к последней внешней программе, здесь Node.js. Нулевой код означает успешное завершение по правилам программы; он не доказывает все свойства приложения. Проверенный запуск этого набора описан в журнале стенда.

Путь с пробелами заключают в кавычки: `Set-Location -LiteralPath 'C:\work\AI assisted engineering'`. Они сообщают оболочке, что это один аргумент, но не проверяют существование папки.


## Статус и границы

Локальные исполнения описаны в [журнале](../demo-workbench/verification.md). Запросы агентам — образцы постановки; модельные и внешние сценарии не выполнялись. Вымышленные ситуации и ожидаемый вывод отделены в тексте урока от измеренных результатов.

[Полный урок](index.html) · [Источники](references.md)
