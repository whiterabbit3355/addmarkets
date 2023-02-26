/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("$(document).ready(function(){\r\n\r\n    let menuContact = $('#menucontact');\r\n    let blockEmTe = $('#blockemte');\r\n    let headerRecall = $('#headerrecall');\r\n\r\n    \r\n\r\n   \r\n    // console.log(menuContact);\r\n    // console.log(blockEmTe);\r\n\r\n    \r\n    /*-------Resize the Window----------*/\r\n\r\n    checkTheSize();\r\n    \r\n    $(window).on(\"scroll resize\", function(){\r\n        // $('.menu__main-submenu').each(function(){\r\n        //   if(($(this).css('visibility', 'visible')) && ($(this).css('opacity', '1'))){\r\n        //     $(this).css('visibility', 'hidden');\r\n        //     $(this).css('opacity', '0');\r\n        //   }\r\n        // });\r\n        checkTheSize(); \r\n    })\r\n\r\n    function checkTheSize(){\r\n       // let scrollTop = $(this).scrollTop();\r\n\r\n        // introH = intro.innerHeight();\r\n        // headerH = header.innerHeight();\r\n        \r\n        // console.log(scrollTop);\r\n       \r\n        $('.header').removeClass('header-white');\r\n        $('#nav-menu').removeClass('show-menu');\r\n        $('#nav-toggle').removeClass('close');\r\n        $('#contactsub').removeClass('active');\r\n        $('#contactbtn').removeClass('close');\r\n        if ($(window).width() <= '1200'){\r\n            menuContact.addClass('menu-item-has-children');\r\n           // console.log('window<1200');\r\n           // nav.addClass(\"nav--dark\");\r\n        } else {\r\n            menuContact.removeClass('menu-item-has-children');\r\n           // nav.removeClass(\"nav--dark\");\r\n        }\r\n        if ($(window).width() <= '1024'){\r\n        headerRecall.html(`  <a href=\"#!\" class=\"recall-icon\">\r\n        <img src=\"assets/images/phone-incall.svg\">\r\n        </a>`);\r\n        } else {\r\n            headerRecall.html(`  <a href=\"#!\" class=\"recall-text\">ОБРАТНЫЙ ЗВОНОК</a>`);\r\n        }\r\n       \r\n    }\r\n\r\n    /*-------Navbar Shrink----------*/\r\n    $(window).on('scroll', function(){\r\n        blockEmTe.removeClass('visib');\r\n        if($(this).scrollTop() > 90){\r\n            $('.header').addClass('header-shrink');\r\n            $('.menu__main-item-contacts').addClass('contacts-shrink');\r\n            $('.header__phone').addClass('header__phone-shrink');\r\n            $('.header__menu-contacts').addClass('header__menu-contacts-shrink');\r\n            if ($(window).width() <= '768'){\r\n                $('.header').removeClass('header-white');\r\n                $('#nav-menu').removeClass('show-menu');\r\n                $('#nav-toggle').removeClass('close');\r\n            }\r\n        }\r\n        else{\r\n            $('.header').removeClass('header-shrink');\r\n            $('.header').removeClass('header-white');\r\n            $('.menu__main-item-contacts').removeClass('contacts-shrink');\r\n            $('.header__phone').removeClass('header__phone-shrink');\r\n            $('.header__menu-contacts').removeClass('header__menu-contacts-shrink');\r\n            \r\n        }\r\n    });\r\n\r\n    /*   Modal   */\r\n\r\n    var modals = $(\"[data-modal]\");\r\n    var modalsTotal = modals.length;\r\n    for(var i=0; i<modalsTotal; ++i){\r\n        let modal=$(modals[i]).data('modal');\r\n      \r\n      \r\n\r\n        $(modals[i]).on('click',function(event){ \r\n            event.preventDefault();\r\n            console.log(modal);\r\n            // console.log($(modal));\r\n            let orderform = $(modal).find(\".modal1__inner1\");\r\n            let thanksform = $(modal).find(\".modal1__inner2\");\r\n            // console.log(orderform.text());\r\n            // console.log(thanksform.text());\r\n\r\n            $('body').addClass('no-scroll');\r\n            $(modal).addClass('show');\r\n\r\n            orderform.css('display', 'block');\r\n            thanksform.css('display', 'none');\r\n\r\n\r\n        })\r\n    }\r\n    var formClose = $(\"[data-form-close]\");\r\n    var formCloseTotal = formClose.length;\r\n    for(var j=0; j<formCloseTotal; ++j){\r\n\r\n        let fc=$(formClose[j]).text();\r\n\r\n        $(formClose[j]).on('click',function(event){ \r\n            event.preventDefault();\r\n\r\n            console.log('Hello');\r\n            let modalInner1 = $(this).parents('.modal1__inner1');\r\n            let modalInner2=$(this).parents('.modal1').find('.modal1__inner2');\r\n            // console.log(modalInner1);\r\n            // console.log(modalInner2);\r\n            if(modalInner1){\r\n                modalInner1.css('display', 'none');\r\n            }\r\n            if(modalInner2){\r\n                modalInner2.css('display', 'block');\r\n            }\r\n            \r\n        })\r\n    }\r\n   \r\n    $(\".modal1\").on(\"click\",function(){\r\n        let modal = $(this);\r\n\r\n            modalClose(modal);\r\n\r\n    });\r\n    $(\".modal1__inner1, .modal1__inner2\").on(\"click\",function(event){\r\n        event.stopPropagation();\r\n    });\r\n    function modalClose(modal){\r\n        $('body').removeClass('no-scroll');\r\n        modal.removeClass('show'); \r\n    }\r\n\r\n//     $(\"[data-modal]\").on(\"click\",function(event){\r\n//         event.preventDefault();\r\n\r\n//         let modal=$(this).data('modal');\r\n\r\n//         console.log(modal);\r\n\r\n//          $('body').addClass('no-scroll');\r\n//          $(modal).addClass('show');\r\n\r\n        \r\n//          $('#orderform1').css('display', 'block');\r\n//          $('#thanksform1').css('display', 'none');\r\n    \r\n\r\n//     });\r\n//     $(\"[data-form-close]\").on(\"click\",function(event){\r\n//         event.preventDefault();\r\n//         let modalInner1 = $(this).parents('.modal1__inner1');\r\n//         let modalInner2=$('#thanksform1');\r\n       \r\n//         formClose(modalInner1);\r\n//         formOpen(modalInner2);\r\n\r\n//     });\r\n//     function formClose(modal){\r\n//         modal.css('display', 'none');\r\n//     }\r\n//     function formOpen(modal){\r\n//         modal.css('display', 'block');\r\n//     }\r\n//     $(\".modal1\").on(\"click\",function(){\r\n//         let modal = $(this);\r\n\r\n//             modalClose(modal);\r\n\r\n//     });\r\n//     $(\".modal1__inner1, .modal1__inner2\").on(\"click\",function(event){\r\n//         event.stopPropagation();\r\n//     });\r\n//     function modalClose(modal){\r\n//         $('body').removeClass('no-scroll');\r\n//         modal.removeClass('show'); \r\n//     }\r\n\r\n })\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/mask.js":
/*!*******************************!*\
  !*** ./src/assets/js/mask.js ***!
  \*******************************/
/***/ (function() {

eval("$('input[type=\"tel\"]').inputmask({\"mask\": \"+9 (999) 999-9999\"});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mask.js?");

/***/ }),

/***/ "./src/assets/js/navtoggle.js":
/*!************************************!*\
  !*** ./src/assets/js/navtoggle.js ***!
  \************************************/
/***/ (function() {

eval("const showMenu = (toggleId, navId) => {\n    const toggle = document.getElementById(toggleId),\n    nav= document.getElementById(navId),\n   \n    header1 = nav.closest(\"#header1\");\n\n    \n     \n\n    if(toggle && nav){\n        toggle.addEventListener('click', () =>{\n            \n            nav.classList.toggle('show-menu');\n           // console.log('click burger');\n        \n           // header1.classList.toggle('header-white');\n       \n            toggle.classList.toggle('close');\n\n            if(toggle.classList.contains('close')){\n                header1.classList.add('header-white');\n            } else{\n                header1.classList.remove('header-white');\n            }\n            document.getElementById('contactbtn').classList.remove('close');\n            document.getElementById('contactsub').classList.remove('active');\n           \n           \n        })\n    }\n}\nshowMenu('nav-toggle', 'nav-menu');\n\nconst showContact = (contactbtnId, submenuId) => {\n    const contacttoggle = document.getElementById(contactbtnId),\n    submenucontact= document.getElementById(submenuId);\n   \n   // header1 = nav.closest(\"#header1\");\n\n    if(contacttoggle && submenucontact){\n        contacttoggle.addEventListener('click', () =>{\n            \n            // nav.classList.toggle('show-menu');\n            // console.log(contacttoggle);\n            // console.log(submenucontact);\n            //header1.classList.toggle('header-white');\n           \n            contacttoggle.classList.toggle('close');\n            submenucontact.classList.toggle('active');\n\n            \n                document.getElementById('nav-toggle').classList.remove('close');\n                document.getElementById('nav-menu').classList.remove('show-menu');\n           \n            if(contacttoggle.classList.contains('close')){\n                header1.classList.add('header-white');\n            } else{\n                header1.classList.remove('header-white');\n            }\n            \n        })\n    }\n}\nshowContact('contactbtn', 'contactsub');\n\n   /*  envelope/close btn */\n//    $(\"#envelopebtn\").on(\"click\", function(event){\n//     event.preventDefault();\n//   //  let leftBtn = $('#leftbtn');\n    \n//     console.log(header1);\n//     $('#contactsub').toggleClass('active');\n\n//     $('#header1').toggleClass('header-white');\n   \n// });\n\n// let leftBtn = $('#leftbtn');\n//     console.log(leftBtn);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/navtoggle.js?");

/***/ }),

/***/ "./src/assets/js/owl.js":
/*!******************************!*\
  !*** ./src/assets/js/owl.js ***!
  \******************************/
/***/ (function() {

eval("const owl2 = $('.slide2');\n\nowl2.owlCarousel({\n    center:true,\n    loop:true,\n    margin:10,\n    dots: true,\n    autoplay:true,\n    autoplayTimeout:5000,\n    startPosition:1,\n    items: 11,\n    responsive:{\n        0:{\n            margin:30,\n            items: 5\n        },\n      \n        850:{\n            \n            items: 7,\n            \n        },\n        1000:{\n           items: 11,\n           \n        },\n        1269:{\n            items: 11,\n        }\n    }\n\n});\n\nconst owl3 = $('.sliderbottom');\n\nowl3.owlCarousel({\n    center:true,\n    loop:true,\n    margin:10,\n    dots: true,\n    autoplay:true,\n    autoplayTimeout:5000,\n    startPosition:1,\n    items: 1,\n   \n});\n\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/owl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	__webpack_modules__["./src/assets/js/mask.js"]();
/******/ 	__webpack_modules__["./src/assets/js/navtoggle.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/owl.js"]();
/******/ 	
/******/ })()
;