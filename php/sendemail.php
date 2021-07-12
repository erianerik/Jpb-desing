<?php 
//CAPTURA OS VALORES PASSADOS POR URL - HTTP 

$GetParam = filter_input_array (INPUT_POST, FILTER_DEFAULT);
//ARMAZENA OS VALORES RECEBIDOS EM VARIAVEIS LOCAIS

$name =     $_POST['name'];
$email =    $_POST['email'];
$phone =    $_POST['phone'];
$message =  $_POST['message'];

//INFORMAÇÕES DA HOSPEDAGEM PARA ENVIO 
$emailSender = "$email" ;
$emailReceiver = "paulo.barreto@jpbseguranca.com";
$Email_reply = "{$email}";

//CRIANDO EMAU PARA ENVIO 

$emailSubject = "Novo contato pelo site";
$emailContent = "Nome = {$name} \n";
$emailContent .= "Email = {$email} \n";
$emailContent .= "Telefone = {$phone} \n";
$emailContent .= "Mensagem = {$message} \n";

$headerArray = array("from: $emailSender", //Queme está enviando o e-mail no servidor  
"Reply-To:$emailSender", //E-mail para resposta
"Subject: $emailSubject", //Titulo do E-mail
"Return-Path: $emailSender", //E-mail existente no servirdor que envia 
"MIME-Version: 1.0", //Versão utiliza	da
"X-Priority: 3", //Priooridade do email
"Content-Type:text/html; charset=UTF-8" //È o tipo de e-mail , neste caso daria para enviar html
);

$emailHeader = implode("\n", $headerArray);

if (mail($emailReceiver,$emailSubject, $emailContent, $emailHeader)) {
    echo "true";
}else {
    echo "false";
}

?>