import grapesjs from '/node_modules/grapesjs/dist/grapes.min.js';
import grapesjsBlocksBasic from '/node_modules/grapesjs-blocks-basic/dist/index.js';
import grapesjsPresetWebpage from '/node_modules/grapesjs-preset-webpage/dist/index.js';

// import '/node_modules/grapesjs/dist/css/grapes.min.css';

export function createEditor() {
    const editor = grapesjs.init({
        container: '#gjs',

        height: '100vh',
        width: 'auto',

        // Не сохранять автоматически в localStorage
        storageManager: false,

        // Начальная страница
        components: `
            <section class="hero">
                <div class="container">
                    <h1>Hello GrapesJS</h1>
                    <p>
                        Visual page builder based on GrapesJS.
                    </p>
                    <a href="#" class="btn">
                        Get Started
                    </a>
                </div>
            </section>
        `,

        style: `
            * {
                box-sizing: border-box;
            }

            body {
                margin: 0;
                font-family: Arial, sans-serif;
            }

            .hero {
                padding: 100px 30px;
                text-align: center;
                background: #f5f5f5;
            }

            .container {
                max-width: 1100px;
                margin: 0 auto;
            }

            .btn {
                display: inline-block;
                padding: 12px 24px;
                background: #333;
                color: white;
                text-decoration: none;
                border-radius: 6px;
            }
        `,

        plugins: [
            grapesjsBlocksBasic,
            grapesjsPresetWebpage,
        ],

        pluginsOpts: {
            [grapesjsBlocksBasic]: {
                flexGrid: true,
            },

            [grapesjsPresetWebpage]: {
                modalImportLabel: 'Import HTML',
                modalImportContent: 'Paste your HTML/CSS here',
                filestackOpts: null,
            },
        },

        // Canvas
        canvas: {
            styles: [
                'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
            ],
        },

        // Панель блоков
        blockManager: {
            appendTo: '#blocks',
        },

        // Layers
        layerManager: {
            appendTo: '#layers',
        },

        // Style Manager
        styleManager: {
            appendTo: '#styles',

            sectors: [
                {
                    name: 'Dimension',
                    open: false,
                    buildProps: [
                        'width',
                        'height',
                        'min-width',
                        'min-height',
                        'max-width',
                        'max-height',
                        'padding',
                        'margin',
                    ],
                },

                {
                    name: 'Typography',
                    open: false,
                    buildProps: [
                        'font-family',
                        'font-size',
                        'font-weight',
                        'letter-spacing',
                        'color',
                        'line-height',
                        'text-align',
                        'text-decoration',
                        'text-shadow',
                    ],
                },

                {
                    name: 'Decorations',
                    open: false,
                    buildProps: [
                        'background-color',
                        'border',
                        'border-radius',
                        'box-shadow',
                    ],
                },

                {
                    name: 'Flex',
                    open: false,
                    properties: [
                        {
                            name: 'Display',
                            property: 'display',
                        },
                        {
                            name: 'Flex Direction',
                            property: 'flex-direction',
                        },
                        {
                            name: 'Justify',
                            property: 'justify-content',
                        },
                        {
                            name: 'Align',
                            property: 'align-items',
                        },
                        {
                            name: 'Gap',
                            property: 'gap',
                        },
                    ],
                },
            ],
        },

        // Traits — id, class, href и т.д.
        traitManager: {
            appendTo: '#traits',
        },

        // Assets
        assetManager: {
            upload: false,

            assets: [
                {
                    type: 'image',
                    src: 'https://picsum.photos/800/500',
                },
            ],
        },

        // Device Manager
        deviceManager: {
            devices: [
                {
                    id: 'desktop',
                    name: 'Desktop',
                    width: '',
                },
                {
                    id: 'tablet',
                    name: 'Tablet',
                    width: '768px',
                    widthMedia: '992px',
                },
                {
                    id: 'mobile',
                    name: 'Mobile',
                    width: '320px',
                    widthMedia: '480px',
                },
            ],
        },

        // Undo / Redo
        undoManager: {
            trackSelection: true,
        },

        // CSS parser
        cssParser: {
            parserCss: true,
        },

        // Телеметрия выключена
        telemetry: false,
    });

    return editor;
}
