<?php
// contact.php - Handle contact form submissions on Hostinger (Shared Hosting)

// -- CORS Headers (if needed, though usually same-origin) --
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// -- 1. Read Input --
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

// Handle preflight options request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['message' => 'Invalid request method']);
    http_response_code(405);
    exit;
}

// -- 2. Validate --
$firstName = $input['firstName'] ?? '';
$lastName = $input['lastName'] ?? '';
$email = $input['email'] ?? '';
$projectType = $input['projectType'] ?? 'General Inquiry';
$messageContent = $input['message'] ?? '';
// Handle simpler form (name only)
if (empty($firstName) && isset($input['name'])) {
    $firstName = $input['name'];
}

if (empty($firstName) || empty($email) || empty($messageContent)) {
    echo json_encode(['message' => 'Missing required fields']);
    http_response_code(400);
    exit;
}

// -- 3. Send Email (using PHP mail() or better, PHPMailer if available) --
// Simple mail() for demonstration. For production/Hostinger, ensure PHP mail is enabled or use SMTP.

$to = 'info@aniveratech.com';  // REPLACE WITH YOUR EMAIL
$subject = "New Project Inquiry from $firstName $lastName";

$email_message = "
<html>
<head>
<title>New Contact Submission</title>
</head>
<body>
<h2>New Contact Submission</h2>
<p><strong>Name:</strong> $firstName $lastName</p>
<p><strong>Email:</strong> $email</p>
<p><strong>Project Type:</strong> $projectType</p>
<p><strong>Message:</strong></p>
<p>$messageContent</p>
</body>
</html>
";

// Headers
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type:text/html;charset=UTF-8' . "\r\n";
$headers .= 'From: Anivera Website <no-reply@aniveratech.com>' . "\r\n";  // Ensure this domain matches hosting
$headers .= "Reply-To: $email" . "\r\n";

// Attempt to send
if (mail($to, $subject, $email_message, $headers)) {
    echo json_encode(['message' => 'Message sent successfully']);
    http_response_code(200);
} else {
    echo json_encode(['message' => 'Failed to send email']);
    http_response_code(500);
}
?>
