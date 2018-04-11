<!doctype html>
<html>
<head>
	<title></title>
</head>
<body>
	<p><strong>Date</strong> : {{ $contact->created_at }}</a></p>
	<p><strong>Nom complet</strong> : {{ $contact->name }}</a></p>
	<p><strong>Email</strong> : {{ $contact->email }}</p>
	<p><strong>Message</strong> : {{ $contact->message }}<p>
</body>
</html>