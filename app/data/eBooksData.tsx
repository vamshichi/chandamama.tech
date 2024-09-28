import Books from '@/app/images/heroScetion/BOOKS.png'
// import News from '@/app/images/heroScetion/BREAKING NEWS.png'
import WindowsShortcuts from '@/app/images/courses/Mastering Windows 10.png'
import Excel_Keyboard_Shortcuts from '@/app/images/courses/Excel Keyboard Shortcuts.png'

const eBooksData = [
  
    {
      id: 1,
      title: " Mastering Windows 10: Essential Keyboard Shortcuts for Productivity",
      category: "Technology",
      image: WindowsShortcuts,
      content:`Windows 10 comes packed with a variety of keyboard shortcuts designed to streamline your workflow and increase efficiency. These shortcuts provide a faster way to navigate and perform tasks without relying solely on the mouse.

Here are some key Windows 10 shortcuts that every user should know:

General Shortcuts:

1.Ctrl + C / Ctrl + V / Ctrl + X: Copy, Paste, and Cut text or files.
Ctrl + Z / Ctrl + Y: Undo and Redo actions.
Alt + Tab: Quickly switch between open windows.
Windows Key + D: Show or hide the desktop.
File Explorer Shortcuts:

2.Windows Key + E: Open File Explorer.
Alt + P: Toggle the preview pane.
F2: Rename the selected item.
Virtual Desktops:

3.Windows Key + Ctrl + D: Create a new virtual desktop.
Windows Key + Ctrl + F4: Close the current virtual desktop.
Windows Key + Tab: Open Task View to manage virtual desktops.
Window Management:

4.Windows Key + Left/Right Arrow: Snap the current window to the left or right half of the screen.
Windows Key + Up/Down Arrow: Maximize or minimize the current window.
System and Accessibility Shortcuts:

5.Windows Key + L: Lock your PC.
Windows Key + A: Open the Action Center.
Windows Key + I: Open Settings.

Click this link to explore more Excel shortcuts and become an Excel pro!`,
   link: "/ebooks/the-art-of-programming",
      pdfLink: 'https://drive.google.com/file/d/1WaA0qD0xTDc0ieCvbtCJCPkysVdC61Ov/view?usp=sharing',
    },
      {
        id: 2,
        title: "Unlock Your Productivity with Essential Excel Keyboard Shortcuts",
        category: "Technology",
        image: Excel_Keyboard_Shortcuts,
        content: `Microsoft Excel is a powerful tool for managing data, and knowing the right keyboard shortcuts can drastically improve your efficiency. Whether you're navigating through complex spreadsheets or performing calculations, these shortcuts are key to mastering Excel's full potential.

Here are some essential Excel shortcuts every user should know:

Basic Navigation:

Arrow Keys: Move one cell up, down, left, or right.
Ctrl + Arrow Keys: Jump to the edge of the data range in a given direction.
Ctrl + Home / Ctrl + End: Move to the beginning or end of the worksheet.
Editing and Formatting:

Ctrl + C / Ctrl + V / Ctrl + X: Copy, Paste, and Cut selected data.
Ctrl + Z / Ctrl + Y: Undo and Redo actions.
Ctrl + B / Ctrl + I / Ctrl + U: Bold, Italicize, or Underline text.
Ctrl + 1: Open the Format Cells dialog box.
Cell Selection and Manipulation:

Shift + Space: Select an entire row.
Ctrl + Space: Select an entire column.
Ctrl + Shift + +: Insert a new cell, row, or column.
Ctrl + -: Delete the selected cell, row, or column.
Formulas and Functions:

Alt + =: Automatically insert the SUM function.
F4: Repeat the last action or toggle absolute/relative references in formulas.
Data Management:

Ctrl + Shift + L: Apply or remove filters.
Alt + Down Arrow: Open the drop-down menu for filtered data.
Ctrl + T: Convert data into a table.
Worksheet Management:

Ctrl + Page Up / Page Down: Switch between worksheets in a workbook.
Shift + F11: Insert a new worksheet.
Alt + H + O + R: Rename the current worksheet.
These shortcuts are essential for improving your productivity while working with Excel, allowing you to manage data, edit worksheets, and manipulate formulas much more efficiently. Learning these shortcuts can save time and increase the accuracy of your work, especially when dealing with large datasets.

Conclusion:
Mastering Excel keyboard shortcuts can transform the way you work, making it easier to handle complex tasks and large spreadsheets. By integrating these shortcuts into your daily workflow, you can greatly enhance your productivity and efficiency in Excel.

Click this link to explore more Excel shortcuts and become an Excel pro!`,
        link: "/ebooks/fictional-world",
        pdfLink:'https://drive.google.com/file/d/13NNY2IfUMtCyRYo3ZfuHhmJDx5k5prV5/view?usp=sharing',
      },
    // {
    //   id: 3,
    //   title: "Understanding AI",
    //   category: "Non-fiction",
    //   image: Books,
    //   content:"",
    //   link: "/ebooks/understanding-ai"
    // },
    // {
    //     id: 4,
    //     title: "Fictional World",
    //     category: "Fiction",
    //     image: Books,
    //     content :"",
    //     link :"/ebooks/fictional-world",
    // },
  ]

  export default eBooksData;