# Blazor Rich Text Editor with Image Editor Integration

[![.NET Version](https://img.shields.io/badge/.NET-10.0-512BD4?logo=dotnet)](https://dotnet.microsoft.com/)
[![Syncfusion](https://img.shields.io/badge/Syncfusion-Blazor-orange)](https://www.syncfusion.com/blazor-components)

## Overview

This project demonstrates a professional integration of **Syncfusion Blazor Rich Text Editor** with **Syncfusion Image Editor** for building modern content editing applications. The sample showcases real-time image editing capabilities directly within the Rich Text Editor editor, allowing users to crop, rotate, apply filters, and annotate images without leaving the editor.

### Key Components

- **Syncfusion Blazor Rich Text Editor**: Enterprise-grade Rich Text Editor editor with comprehensive formatting capabilities
- **Syncfusion Image Editor**: Powerful image manipulation and editing component with professional tools

## Features

- **Rich Text Editing**: Full-featured Rich Text Editor editor with comprehensive formatting tools
- **Integrated Image Editing**: Edit images directly within the editor without external tools
- **Image Manipulation**: Crop, resize, rotate, flip, and apply filters to images
- **Real-time Preview**: See changes instantly as you edit images
- **Multiple Format Support**: Work with JPG, PNG, GIF, and WebP images
- **Annotation Tools**: Add drawings, text, and shapes to images
- **Professional Editing**: Access crop, zoom, filter, and fine-tuning capabilities

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- **.NET 10.0 SDK** or later ([Download](https://dotnet.microsoft.com/download))
- **Visual Studio 2022 (v17.12+)** or **Visual Studio Code** with C# extension
- **Git** for version control ([Download](https://git-scm.com/))
- A modern web browser (Chrome, Edge, Firefox, or Safari)

## Installation

### Step 1: Clone the Repository

```powershell
git clone https://github.com/SyncfusionExamples/blazor-richtexteditor-imageeditor.git
cd blazor-richtexteditor-imageeditor
```

### Step 2: Navigate to Project Directory

```powershell
cd Image_Editor_Integration
```

### Step 3: Restore NuGet Packages

```powershell
dotnet restore
```

This will download all required dependencies including:
- Syncfusion.Blazor.RichTextEditor
- Syncfusion.Blazor.ImageEditor
- Syncfusion.Blazor.Popups
- Syncfusion.Blazor.Themes

### Step 4: Build the Project

```powershell
dotnet build
```

### Step 5: Run the Application

```powershell
dotnet run
```

The application will start and display the URL in the terminal (typically `https://localhost:5001`).

Open your browser and navigate to the displayed URL to see the application in action.

## Usage

### Accessing the Image Editor Integration

1. **Launch the application** and navigate to your browser
2. You'll see the Rich Text Editor with default content and instructions
3. **To add a new image and edit it**:
   - Click the **Image** button in the toolbar
   - Select an image file from your computer
   - Click the **Edit Image** button to open the editor
4. **To edit an existing image**:
   - Click on any image in the editor to select it
   - Click the **Edit Image** button in the toolbar (or use the quick toolbar)
   - The Image Editor will open in a modal dialog
5. **Edit the image** using available tools
6. **Click Insert** to save changes and return to the editor
7. **Click Cancel** to discard changes

### Sample Workflow

1. **Insert an image**: Click toolbar Image button, select image file
2. **Select for editing**: Click on the image in the editor
3. **Edit Image**: Click the `Edit Image` button
4. **Crop**: Use crop tool to adjust image framing
5. **Apply Filter**: Select a filter from available options
6. **Fine-tune**: Adjust brightness and contrast as needed
7. **Save**: Click `Insert` to save edited image
8. **Result**: Image is updated in the editor with your changes

## Project Structure

```
Image_Editor_Integration/
├── Components/
│   ├── Layout/
│   │   ├── MainLayout.razor          # Main application layout
│   │   └── NavMenu.razor             # Navigation menu
│   ├── Pages/
│   │   ├── ImageEditorIntegration.razor  # Main editor page with image editor integration
│   │   └── Error.razor               # Error handling page
│   ├── _Imports.razor                # Global using statements
│   ├── App.razor                     # Root application component
│   └── Routes.razor                  # Routing configuration
├── wwwroot/
│   ├── scripts/
│   │   └── rte-image-editor-interop.js   # JavaScript interop for RTE and Image Editor
│   ├── bootstrap/                    # Bootstrap CSS files
│   └── app.css                       # Custom styles
├── Program.cs                        # Application entry point
├── appsettings.json                  # Application configuration
└── Image_Editor_Integration.csproj   # Project file
├── README.md                         # This file
```
## Step 1: Add SignalR Configuration to Program.cs

After following the Rich Text Editor Getting Started guide, add the SignalR configuration to your `Program.cs` file to handle large image data transmission during image editing:

**Add this line to your Program.cs:**

This line should be added after your existing Syncfusion service registration:

```csharp
builder.Services.AddSyncfusionBlazor();
builder.Services.Configure<HubOptions>(o => o.MaximumReceiveMessageSize = 1024 * 1024);
```

> The `MaximumReceiveMessageSize` configuration allows large image data to be transmitted through SignalR when editing and saving large images. The default value is 32 KB, which may be insufficient for large images.

## Syncfusion License

For production use, you need a valid Syncfusion license.

Register your license in `Program.cs`:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

Visit [Syncfusion Licensing](https://www.syncfusion.com/sales/pricing) for more information.

## Add Stylesheet and Script Resources

The theme stylesheet and script can be accessed from NuGet through Static Web Assets. Include the stylesheet and script references within the `<head>` section of the `App.razor` file.

```html
<!-- Available themes: bootstrap5, material3, fabric, tailwind, fluent, etc. -->
<link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
<script src="_content/Syncfusion.Blazor.Core/scripts/syncfusion-blazor.min.js" type="text/javascript"></script>
```

## Documentation

- [Syncfusion Blazor Rich Text Editor](https://blazor.syncfusion.com/documentation/rich-text-editor/getting-started)
- [Syncfusion Blazor Image Editor](https://blazor.syncfusion.com/documentation/image-editor/getting-started)
- [Syncfusion Blazor Dialog](https://blazor.syncfusion.com/documentation/dialog/getting-started)
- [Blazor Documentation](https://learn.microsoft.com/aspnet/core/blazor/)
- [.NET 10 Release Notes](https://dotnet.microsoft.com/en-us/download)

**Note**: This is a demonstration project. For production use, ensure you have valid licenses for both Syncfusion components and implement appropriate security measures.
