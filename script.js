// الانتظار حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {

    // 1. ربط ملف CSS خارجي
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style.css';
    head.appendChild(link);

    // 2. الحصول على عنصر الـ body
    const body = document.body;

    // 3. إنشاء العناصر الديناميكية
    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'مرحبًا بك في موقعي الذي تم إنشاؤه بواسطة JavaScript!';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'تم إنشاء كل عنصر في هذه الصفحة ديناميكيًا.';

    const button = document.createElement('button');
    button.textContent = 'اضغط هنا';

    // 4. إضافة وظيفة للزر
    button.addEventListener('click', function() {
        alert('لقد قمت بالنقر فوق الزر الديناميكي!');
    });

    // 5. إضافة العناصر إلى الصفحة
    body.appendChild(mainHeading);
    body.appendChild(paragraph);
    body.appendChild(button);
});
