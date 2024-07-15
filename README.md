# Node QR Code Generator

## Description

This project is a simple Node.js application that creates QR code images based on user input from a web interface. It's developed as part of a learning exercise while studying "The Complete 2024 Web Development Bootcamp" on Udemy. The application uses the `express` framework for server setup and `qr-image` library to generate QR codes.

## Features

- Web interface for entering text.
- Generates a QR code image from the inputted text.
- Displays the QR code on the same page without reloading.
- Shows a descriptive sentence about the QR code generated.

## Technologies Used

- Node.js
- Express
- QR-image
- AJAX (with jQuery)
- HTML/CSS

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd qr-code-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node app.js
   ```

5. Open a web browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

To generate a QR code:

1. Type the desired text into the input field on the web page.
2. Click the 'Generate' button.
3. View the generated QR code image directly below the form.
4. Read the descriptive sentence that explains what the QR code represents.
