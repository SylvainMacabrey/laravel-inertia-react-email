<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <h2>{{ $contact['pseudo'] }} est intérressé par l'appartement {{ $property->title }}</h2>
    <p>Réception d'une prise de contact avec les éléments suivants :</p>
    <ul>
      <li><strong>Pseudo</strong> : {{ $contact['pseudo'] }}</li>
      <li><strong>Email</strong> : {{ $contact['email'] }}</li>
      <li><strong>Message</strong> : {{ $contact['message'] }}</li>
      <li><strong>Voir le bien:</strong> : <a href="{{route('property.show', $property->id)}}">Voir</li>
    </ul>
  </body>
</html>
