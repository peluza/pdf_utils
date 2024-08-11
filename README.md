# PDF Utils

This project provides utilities for merging and splitting PDF files. It's built with Next.js version 14.

## Functionality

This project offers the following features:

- **Merge PDFs:** Combine multiple PDF files into a single document.
- **Split PDFs:** Divide a PDF file into multiple smaller files.

## Backend API

This frontend interacts with the `pdf_utils_api` backend, available at [https://github.com/peluza/pdf_utils_api](https://github.com/peluza/pdf_utils_api). Ensure the API is running before using this frontend.

## Environment Variables

- `NEXT_PUBLIC_IP_API=localhost`
- `NEXT_PUBLIC_PORT_API=3002`

These environment variables configure the frontend to connect to the API running on `localhost:3002`.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/peluza/pdf_utils.git](https://github.com/peluza/pdf_utils.git)
   ```
2. **Navigate to the project directory:**
   ```bash
   cd pdf-utils
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set environment variables (if needed):**
   ```bash
   NEXT_PUBLIC_IP_API=localhost
   NEXT_PUBLIC_PORT_API=3002
   ```
5. **Start build project:**
   ```bash
   npm run build
   ```
6. **Start the project:**
   ```bash
   npm run start
   ```
6. **Access the application:**
Open http://localhost:3000 in your web browser.

## Usage
The application will provide a user interface for uploading PDF files and performing merge or split operations.

## Development

This project uses Next.js version 14. You can find more information about Next.js in the official documentation:

- [Next.js Documentation:](https://nextjs.org/docs)

## Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. 

Key improvements:

- **Backend API Link:** Clearly mentions the backend repository and emphasizes the need for it to be running.
- **Environment Variables:** Explains the purpose of the environment variables and how to set them if different values are required.
- **Clearer Instructions:** Streamlined the getting started steps.

Feel free to suggest any further refinements or additions! 