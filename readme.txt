Улутшенный шаблон с канала "Фрилансер по жизни"

======================================================
Подключение html компонентов
@@include('_popup.html',{})

======================================================
Подключение в script.js

@@include('app/components/regular.js', {})
@@include('app/components/sliders.js', {})
@@include('app/components/forms.js', {})
@@include('app/components/scroll.js', {})

======================================================
Подключение в vendor.js

@@include('libs/smoothScroll.js', {})

======================================================
Подключение компонентов в style.scss

@import "components/forms.scss";
@import "components/datepicker.scss";
@import "components/lightgallery.scss";
@import "components/pagging.scss";
@import "components/popup.scss";

======================================================
Подключение шрифтов у fonts.scss | <FORMS & COMPONENTS>
* перед запуском gulp, файл должен быть пустым с 1 строкой

@include font("Gilroy-Medium", "Gilroy-Medium", "400", "normal");
@include font("Gilroy-SemiBold", "Gilroy-SemiBold", "400", "normal");
@include font("Gilroy-Regular", "Gilroy-Regular", "400", "normal");
