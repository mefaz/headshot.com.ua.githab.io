<?php
// fin@aiss.com.ua
$recepient = "mefaz.ru@gmail.com, ks@ryterna.com.ua, kurt.praga@gmail.com";
$sitename = "vorota.ryterna.com.ua";

$idForm = trim($_POST["idForm"]); 
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$tipvorot = trim($_POST["tipvorot"]);
$wvorot = trim($_POST["wvorot"]);
$hvorot = trim($_POST["hvorot"]);
$auto = trim($_POST["auto"]);
$text = trim($_POST["text"]);
$message = "
Форма: $idForm \n
Имя: $name \n
Телефон: $phone \n
Тип ворот: $tipvorot \n
Ширина: $wvorot \n
Высота: $hvorot \n
Управление: $auto \n
Текст: $text \n
";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");