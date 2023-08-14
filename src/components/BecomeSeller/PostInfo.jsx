import InputCom from "../Helpers/InputCom";
import Cherry from 'cherry-markdown';
import {useEffect} from "react";

const cherryConfig = {
    id: 'markdown-container',
    externals: {
        echarts: window.echarts,
        katex: window.katex,
        MathJax: window.MathJax,
    },
    engine: {
        global: {
            urlProcessor(url, srcType) {
                console.log(`url-processor`, url, srcType);
                return url;
            },
        },
        syntax: {
            fontEmphasis: {
                allowWhitespace: true, // 是否允许首尾空格
            },
            mathBlock: {
                engine: 'MathJax', // katex或MathJax
                src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js',
            },
            inlineMath: {
                engine: 'MathJax', // katex或MathJax
            },
            emoji: {
                useUnicode: false,
                customResourceURL: 'https://github.githubassets.com/images/icons/emoji/unicode/${code}.png?v8',
                upperCase: true,
            },
            // toc: {
            //     tocStyle: 'nested'
            // }
            // 'header': {
            //   strict: false
            // }
        },
    },
    toolbars: {
        toolbar: [
            'bold',
            'settings',
            'addPrefix',
        ],
    },
    editor: {
        defaultModel: 'previewOnly',
    },
    callback: {
        onClickPreview: function (e) {
            // const {target} = e;
            // if(target.tagName === 'IMG') {
            //     console.log('click img', target);
            //     const tmp = new Viewer(target, {
            //         button: false,
            //         navbar: false,
            //         title: [1, (image, imageData) => `${image.alt.replace(/#.+$/, '')} (${imageData.naturalWidth} × ${imageData.naturalHeight})`],
            //     });
            //     tmp.show();
            // }
        }
    },
    previewer: {
        // className: 'markdown'
    },
    keydown: [],
    //extensions: [],
};

export default function PostInfo() {
    useEffect(() => {
        if (typeof window !== 'undefined' && !!navigator) {
            var config = Object.assign({}, cherryConfig, {value: '# welcome to cherry editor!'});
            window.cherry = new Cherry(config);
            // const cherryInstance = new Cherry({
            //     id: 'markdown-container',
            //     value: '# welcome to cherry editor!',
            //     toolbars: {
            //         toolbar: [
            //             'bold',
            //             'settings',
            //             'addPrefix',
            //         ],
            //         bubble: [
            //             'bold',
            //             'color',
            //             'addPrefix',
            //         ], // array or false
            //         float: [
            //             'h1',
            //             'code',
            //             'addPrefix',
            //         ], // array or false
            //     },
            // });
        }
    }, [])

    return (
        <div className="flex flex-col">
            <InputCom
                placeholder="Tiêu đề tin đăng"
                label="Tiêu đề tin đăng"
                name="title"
                type="text"
                required={true}
                inputClasses="h-[50px]"
            />
            <div id={'markdown-container'} className="h-[300px] w-full"/>
        </div>
    )
}