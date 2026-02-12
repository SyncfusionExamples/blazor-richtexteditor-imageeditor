// Canvas interop object - manages canvas operations and image format detection
window.canvasInterop = {
    detectedFormat: null
};
// Rich text editor interop object - handles RTE events, file selection, and image data retrieval
window.rteInterop = {
    objRef: null,
     /**
     * Initializes interop by storing .NET ref and setting up file input change handler
     * Reads selected images as data URL and invokes Blazor FileSelected method
     */
    onInitialized: function (objRef) {
        window.rteInterop.objRef = objRef;
        var fileInput = document.getElementById('rte-img-upload');
        if (fileInput) {
            // File input change handler - triggered when user selects an image
            fileInput.onchange = function (event) {
                if (event.target.files && event.target.files.length > 0) {
                    var file = event.target.files[0];
                    // Store original format
                    window.canvasInterop.detectedFormat = file.type;
                    var reader = new FileReader();
                    // Load handler - called when file is read as data URL
                    reader.onload = function (event) {
                        // Invoke Blazor method with image data URL
                        window.rteInterop.objRef.invokeMethodAsync('FileSelected', event.target.result);
                    };
                    reader.readAsDataURL(file);
                    event.target.value = '';
                }
            };
        }
        return true;
    },
    
    /**
     * Programmatically triggers file selection dialog
     * Called when user clicks image upload button in UI
     */
    fileSelect: function () {
        var inputFile = document.getElementById('rte-img-upload');
        if (inputFile) {
            // Trigger file selection dialog
            inputFile.click();
        }
        return true;
    },
     
    /**
     * Retrieves edited image data from Syncfusion Image Editor
     * Creates temporary canvas, converts to data URL in detected format, returns result
     */
    getEditedImageData: function () {
        var imageEditor = document.querySelector('.e-image-editor');
        if (!imageEditor) {
            return '';
        }
        var dataId = imageEditor.getAttribute('data-control-id');
        var instance = null;
         // Get Syncfusion component instance using DOM element or data-control-id
        if (!dataId && window.sfBlazor) {
            instance = window.sfBlazor.getCompInstance(imageEditor);
        } else if (dataId && window.sfBlazor) {
            instance = window.sfBlazor.getCompInstance(dataId);
        }
        // Extract image data from Image Editor and convert to URL
        if (instance && instance.getImageData) {
            var imageData = instance.getImageData();
            if (imageData) {
                // Create temporary canvas to convert ImageData to data URL
                var tempCanvas = document.createElement('canvas');
                tempCanvas.width = imageData.width;
                tempCanvas.height = imageData.height;
                
                var context = tempCanvas.getContext('2d');
                // Place ImageData on canvas
                context.putImageData(imageData, 0, 0);
                
                // Convert canvas to data URL in original format
                if (window.canvasInterop.detectedFormat) {
                    return tempCanvas.toDataURL(window.canvasInterop.detectedFormat);
                } else {
                    return tempCanvas.toDataURL();
                }
            }
        }
        
        // Return empty string on error
        return ''; 
    }
};