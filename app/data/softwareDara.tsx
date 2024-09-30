import AdbeRdr11010 from '@/app/images/softwares/AdbeRdr11010.png'
import CuteWriter from '@/app/images/softwares/CuteWriter.png'

function generateSnippet(description: string): string {
  const words = description.split(' ')
  return words.slice(0, 15).join(' ') + '...'
}

const softwareDatas = [
    {
      id: 1,
      title: 'Adobe Reader 11 (AdbeRdr11010_en_US.exe): The Essential PDF Tool',
      description: `Adobe Reader 11 (AdbeRdr11010_en_US.exe) is a trusted PDF viewer that lets you easily open, view, and print PDF files. This version is well-suited for those who need a reliable, secure, and easy-to-use tool to handle PDFs, offering features such as:

View and Print PDFs: Maintain high-fidelity document rendering, ensuring accurate visuals and text.
Annotate and Comment: Highlight, add notes, and insert stamps for better document review.
Improved Security: With built-in sandbox technology, your system stays safe from potentially harmful PDFs.
Fill Out Forms: Complete interactive forms directly within the application.
Cloud Integration: Access and share PDFs via Adobe’s Document Cloud for convenience on the go.
System Requirements: Works on Windows XP, Vista, 7, 8, or 10 with at least 512 MB RAM and 320 MB of available space.

Download Adobe Reader 11 (AdbeRdr11010_en_US.exe)
Click the link below to download the Adobe Reader 11 installer and enjoy a hassle-free PDF experience:
`,
      image: AdbeRdr11010,
      slug: "/softwares/AdbeRdr11010_en_US",
      downloadLink: 'https://drive.google.com/file/d/1-rN7OxxJyNG40t1KoJDcz0xDIP6ja6aX/view?usp=sharing', // Replace with actual Google Drive link
      
    },
    {
        id: 2,
        title: 'CuteWriter: An Efficient PDF Printer for Your Document Needs',
        description: `What is CuteWriter?
CuteWriter, commonly known as CutePDF Writer, is a popular software utility that converts any printable document into a PDF format. Unlike standard PDF editors, CuteWriter acts as a virtual printer, allowing you to "print" your documents into PDF format from any Windows application. Whether you're working on a Word document, Excel spreadsheet, or web page, CuteWriter makes the process of generating PDFs simple and intuitive.

Why Choose CuteWriter?
Easy to Use: CuteWriter integrates with your system as a printer, so you can use it like you would use any other printer. Just select "Print" and choose CuteWriter from your printer options to create a PDF.

Free and Lightweight: One of the major benefits of CuteWriter is that it’s completely free for personal and commercial use. It also has a small file size, ensuring that it won't slow down your system.

High Compatibility: CuteWriter is compatible with all versions of Windows and works with virtually any software that supports printing. This makes it a versatile tool for creating PDFs across a wide range of applications.

Customizable Output: With CuteWriter, you can customize the PDF's properties such as document title, subject, and keywords, making it easy to organize and categorize your files.

Secure PDFs: It also supports the creation of encrypted and password-protected PDF files, adding an extra layer of security to your sensitive documents.

How Does CuteWriter Work?
Once installed, CuteWriter appears as a virtual printer in your "Devices and Printers" section. To create a PDF, simply follow these steps:

Open the document you want to convert into a PDF.
Select the "Print" option from the File menu.
Choose CuteWriter as the printer.
Click "Print," and CuteWriter will prompt you to save the file as a PDF.
It’s that simple! CuteWriter handles all the heavy lifting in the background, leaving you with a professional-quality PDF.

Applications of CuteWriter
Business Documents: Convert proposals, invoices, and reports into easily shareable PDFs.
Student Projects: Save essays, research papers, and presentations as PDF files for submission.
Web Pages: Save entire web pages in PDF format for offline reading or archiving.
Whether you're a business professional, student, or casual user, CuteWriter offers a reliable and straightforward way to create PDFs with ease.

Download CuteWriter
Want to give CuteWriter a try? You can download it for free by clicking the button below:
`,
        image:CuteWriter,
        slug: "/softwares/CuteWriter",
        downloadLink: 'https://drive.google.com/file/d/1HhcO95qNCNk0gRCvLhMotZUS5_V7z_ud/view?usp=sharing', // Replace with actual Google Drive link
      },
    //   {
    //     id: 4,
    //     title: 'Software a',
    //     description: 'This is a description of Software B.',
    //     image:'',
    //     slug: "/softwares/softa",
    //     downloadLink: 'https://drive.google.com/your-download-link-2', // Replace with actual Google Drive link
    //   },
    //   {
    //     id: 5,
    //     title: 'Software B',
    //     description: 'This is a description of Software B.',
    //     image:'',
    //     slug: "/softwares/soft",
    //     downloadLink: 'https://drive.google.com/your-download-link-2', // Replace with actual Google Drive link
    //   },
    // Add more software items as needed
  ];

  const  softwareData= softwareDatas.map(article => ({
    ...article,
    snippet: generateSnippet(article.description)
  }))
    
    export default softwareData;