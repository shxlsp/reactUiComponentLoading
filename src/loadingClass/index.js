import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import './index.css';
/*
    loading         是否展示loading 不传默认展示    boolean
    animation       自定义动画节点                  react
    animationType   动画种类                        cricle
    type            用法                            inline/box/fullscreen
    children        子节点                          react
    tip             提示文字                        string
    boxClass        父元素classname                 string
    size            动画大小                        small/normal/large
*/
class Loading extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderOwnAnimation = ( animationType, size ) => {
        switch (animationType) {
            case 'cricle':
                return <svg viewBox="0 0 1024 1024" 
                            focusable="false" 
                            className={`anticon-cricle ${size&&size||'normal'}-size`}
                            width="1em" height="1em" 
                            fill="currentColor" 
                            aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>
            
            case 'ball-beat':
                return <div className="la-ball-beat la-2x">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
            default:
                return <svg viewBox="0 0 1024 1024" 
                            focusable="false" 
                            className={`anticon-cricle ${size&&size||'normal'}-size`}
                            width="1em" height="1em" 
                            fill="currentColor" 
                            aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>
        }
    }
    
    renderLoading = ( loading, type, children, tip, boxClass, animation, animationType, size ) => {
        let typeBoxClass = 'free-main-loading-inline',
            typeInnerClass = 'inner-inline',
            isShowChildren = false,
            animationBox = animation;
        switch (type) {
            case 'inline':
                typeBoxClass="free-main-loading-inline";
                typeInnerClass = 'inner-inline';
                isShowChildren = false;
                break;
            case 'box':
                typeBoxClass="free-main-loading-box";
                typeInnerClass = 'inner-box';
                isShowChildren = true;
                break;
            case 'fullscreen':
                typeBoxClass="free-main-loading-fullscreen";
                typeInnerClass = 'inner-fullscreen';
                isShowChildren = true;
                break;
            case 'itemrecord':
                typeBoxClass="free-main-loading-item-full";
                typeInnerClass = 'inner-fullscreen';
                isShowChildren = true;
                break;
        }
        if( !animationBox ){
            //没传自定义动画
            animationBox = this.renderOwnAnimation(animationType, size)
        }
        let loadingEl = (
            <div className={`free-main-loading ${typeBoxClass} ${boxClass||''}`}>
                {isShowChildren&&children&&children}
                <div className={`free-main-loading-inner ${typeInnerClass} ${loading?'show-loading':'hide-loading'}`}>
                    {
                        type && type !== 'inline' && tip
                        ?<p className={`tip-box ${size}-text`}>{tip}</p>
                        :null
                    }
                    <div className="animation-box">
                        {animationBox}
                    </div>
                </div>
            </div>
        )
        return loadingEl
    }

    render(){
        const { loading, type, children, tip, boxClass, animation, animationType, size = 'normal' } = this.props;
        return this.renderLoading( loading, type, children, tip, boxClass, animation, animationType, size )
    }
}


export default Loading