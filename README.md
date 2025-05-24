# LowTube - YouTube View Filter

A browser extension that filters out low-view videos from YouTube recommendations. Set your minimum view count threshold and enjoy a cleaner YouTube experience with only popular videos in your recommendations.

## Features

- Filter out videos with low view counts from YouTube recommendations
- Customizable minimum view count threshold
- Support for different view count formats (e.g., "1.2M views", "100K views")
- Real-time filtering as you scroll
- Settings persist across browser sessions
- Compatible with both Firefox and Chrome

## Installation

### Firefox

1. Open Firefox and navigate to `about:debugging`
2. Click on "This Firefox" in the left sidebar
3. Click "Load Temporary Add-on..."
4. Navigate to the extension directory and select `manifest.json`

### Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked"
4. Select the extension directory

## Usage

1. Click the extension icon in your browser toolbar
2. Enter your desired minimum view count in the input field
3. Click "Save Settings"
4. Visit YouTube and the extension will automatically filter out videos with fewer views than your specified minimum

## Default Settings

- Default minimum view count: 1,000 views

## Development

### Project Structure

```
lowtube/
├── manifest.json      # Extension configuration
├── popup.html        # Settings interface
├── popup.js          # Settings logic
├── content.js        # Video filtering logic
├── background.js     # Extension initialization
└── icons/           # Extension icons
    ├── 16.png
    ├── 48.png
    └── 128.png
```

### Building from Source

1. Clone the repository
2. Load the extension in your browser using the installation instructions above

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
