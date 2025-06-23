## Технологический стек
### Основной стек:
- язык - Js
- фреймворк - React
- состояния - стандартное (useState, useContext)
- сборщик - Vite
- пакеты - yarn
- Роутинг - React Router DOM

### Стилизация:
- SCSS
- методология БЭМ для изоляции стилей

### Доп. библиотеки:
- unit тесты - jest
- связь с беком - axios
- серверное состояние - TanStack Query
- для сложных анимаций(опционально) - motion framer
- для импорта svg - svgr
- для автоматического добавления вендорных префиксов - autoprefixer

### Форматирование
- ESLint
- Prettier

## Структура папок
```
src/
├── react/
│   ├── app/
│   │   ├── app.jsx		# главный компонент
│   │   ├── provider.jsx		# провайдеры контекста
│   │   ├── router.jsx		# маршрутизация
│   │   └── routes/		# страницы
│   │       └── name_of_page/
│   │           ├── components/	# папка с локальными компонентами
│   │           │   └── name_of_component/
│   │           │       ├── NameOfComponent.jsx
│   │           │       └── name_of_componet.scss
│   │           ├── hooks	      # папка с локальными кастомными хуками(опц.)
│   │           ├── helpers	# вспомогательные скрипты(опц.)
│   │           ├── NameOfPage.jsx 
│   │           └── name_of_page.scss   # стили для страницы
│   ├── hooks	# хуки посредники между состояниями и компонентами
│   ├── services/	# http запросы
│   │   ├── apiConfig.js	# Содержит все ендпоинты
│   │   ├── apiClient.js	
│   │   ├── ...(api)
│   │   └── auth
│   ├── stores	# контексты
│   ├── helpers		# глобальные вспомогательные скрипты
│   └── components/	# переиспользуемые компоненты на нескольких стр.
│       ├── containers	# компоненты-обертки
│       ├── cards		# компоненты-карточки
│       ├── inputs		# кнопки, inputs и тд
│       ├── ...(группа компонентов)
│       └── ui/	# компоненты не вошедшие в другую группу
│           ├── header
│           └── footer
├── assets/
│   ├── images
│   └── svg
└── styles/
    ├── fonts
    ├── media/ 	# медиа для страниц
    │   └── _name_of_page_media.scss
    ├── _reset.scss	# обнуление стилей браузера
    ├── _fonts.scss	
    ├── _media.scss	# сюда импорт всех медиа + глобальные медиа
    ├── _global.scss 	# глобальные стили
    ├── index.scss	# сюда импорт всех стилей 
    ├── mixins.scss	# полезные глобальные миксины
    └── variables.scss		# переменные: цвета, текст, ещё чего
```

## Наименование
- Компоненты: PascalCase (NameOfComponent.jsx)
- Скрипты: camelCase (nameOfScript.jsx)
- Стили: snake_case (name_of_component.scss)
- Папки для комопонентов: PascalCase (NameOfComponent)
- CSS-классы: БЭМ методология

## Конфигурация проекта
Настроен alias:
- '@components': resolve(__dirname, 'src/react/components'),
- '@hooks': resolve(__dirname, 'src/react/hooks'),
- '@services': resolve(__dirname, 'src/react/services'),
- '@stores': resolve(__dirname, 'src/react/stores'),
- '@helpers': resolve(__dirname, 'src/react/helpers'),
- '@styles': resolve(__dirname, 'src/styles'),
- '@assets': resolve(__dirname, 'src/assets'),
- 
- '@': resolve(__dirname, 'src'),
- '@react': resolve(__dirname, 'src/react'),
- '@app': resolve(__dirname, 'src/react/app'),
- '@routes': resolve(__dirname, 'src/react/app/routes'),

## Создание API с помощью TanStack Query
Структура, если нужно получить данные. Без контекста
![POWERPNT_CJQN7Tiu1U](https://github.com/user-attachments/assets/803e94c7-87d6-48ce-a76e-c98934978df0)
где:
- apiConfig.js - хранит все ендпоинты
- apiClient.js - для автоматического добавления токена авторизации ко всем запросам
- axios - отправляет http запрос к api (auth.js, getVideo.js)
- Custom hook - посредник между компонентом и axios. А также одновременно является серверным состоянием, вследствии поставляет компонентам loading error и data.

Структура, если необходим context, например api авторизация.
![chrome_zBlgM4EwbJ](https://github.com/user-attachments/assets/e83d3a34-8e80-40d4-bcaf-a128a8cfcbfc)
Тоже самое, но серверное состояние будет в context.


## Стилизация и использование SASS
В глобальных стилях прописано font-size: 62.5% - это равно 10px. Следовательно 1rem = 10px.

### media
медиа будут разделены по файлам для каждой страницы. Они будут импортированы в главный медиа файл _media.scss(также тут глобальные медиа и header footer).
Чтобы медиа не перезаписывались стилями из отдельных файлов scss, пропишем костыль в виде обертки body

## Документирование компонентов
К каждой функции и компоненту, где есть хоть один пропс нужна документация по типу:
``` jsx
/**
 * Кнопка с настраиваемым текстом….
 *
 * @param {string} label - Текст на кнопке
 * @param {() => void} onClick - Обработчик нажатия
 * @param {boolean} disabled=false - Неактивное состояние
 * @param {string} variant: ‘primary’ | ‘secondary’
 * @returns {jsx}
 */
function Button({ label, onClick, disabled = false }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
```
Её можно генерировать с помощью расширения в VS Code - jsdoc

## Полезные плагины на VS Code
- Better Comments
- Auto Rename Tag
- Sass
- jsdoc
- ESLint
- Prettier - Code formatter
- Material Icon Theme (помогает ориентироваться в большой структуре папок)
