<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Création de Profil</title>
    <link rel="stylesheet" href="styles.css">
    <script src="profile.js" defer></script>
    <style>
        body {
            background-color: #fff;
            color: #000;
            font-family: Arial, sans-serif;
        }
        .profile-container {
            width: 50%;
            margin: 0 auto;
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .profile-container h1 {
            text-align: center;
            margin-bottom: 20px;
        }
        .profile-container label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .profile-container input[type="text"], .profile-container input[type="tel"], .profile-container input[type="file"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .profile-container input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .profile-container input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="profile-container">
        <h1>Créer Votre Profil</h1>
        <form id="profileForm">
            <label for="profilePicture">Photo de Profil:</label>
            <input type="file" id="profilePicture" name="profilePicture" accept="image/*"><br><br>
            <label for="fullName">Nom complet:</label>
            <input type="text" id="fullName" name="fullName" required><br><br>
            <label for="job">Travail:</label>
            <input type="text" id="job" name="job"><br><br>
            <label for="location">Lieu de résidence:</label>
            <input type="text" id="location" name="location"><br><br>
            <label for="product">Produit/Service:</label>
            <input type="text" id="product" name="product"><br><br>
            <input type="submit" value="Enregistrer">
        </form>
        <a href="nextpage.html" id="nextPageLink" style="display:none;">Aller à la page suivante</a>
    </div>
    <footer>
        <p>&copy; 2025 Mon Site Web. Tous droits réservés.</p>
        <p>Contactez-nous: <a href="mailto:harisoaonja06@gmail.com">harisoaonja06@gmail.com</a></p>
        <p>Suivez-nous: 
            <a href="https://www.facebook.com/minet" target="_blank">Facebook</a>
        </p>
    </footer>
</body>
</html>
