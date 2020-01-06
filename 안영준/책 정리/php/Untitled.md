<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<title>PHP Operators</title>
</head>

<body>

<?php
	interface Interface01
	{
		
	}
	
	class Class01
	{
	
	}
	
	class Class02 extends Class01 implements Interface01
	{
	
	}
	
	// 어떤 클래스(class)에서 생성된 객체(object)인지를 확인할 때 
	$var_01 = new Class01; // Class01 클래스 객체를 생성함.
	var_dump($var_01 instanceof Class01);
	echo "<br>";
	var_dump($var_01 instanceof Class02);
	echo "<br><br>";
	//부모 클래스(parent class)에서 상속받은 클래스인지를 확인할 때 
	$var_02 = new Class02; // Class02 클래스 객체를 생성함.
	var_dump($var_02 instanceof Class01);
	echo "<br>";
	var_dump($var_02 instanceof Class02);
	echo "<br><br>";
	// 클래스의 인스턴스(instance)인지 아닌지를 확인할 때
	$var_03 = new Class01; // Class01 클래스 객체를 생성함.
	var_dump(!($var_03 instanceof Class02));
	echo "<br><br>";
	/* 인터페이스(interface)로 구현한 클래스의 객체 인스턴스(object instance)인지 아닌지를 확인할 때 */
	$var_04 = new Class02; // Class02 클래스 객체를 생성함.
	var_dump($var_04 instanceof Class02);
	echo "<br>";
	var_dump($var_04 instanceof Interface01);
?>

</body>

</html>