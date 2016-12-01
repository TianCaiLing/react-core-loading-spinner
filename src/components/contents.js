import React from 'react';
import {Spinner}  from '../index';
let Contents = React.createClass({ 
  getInitialState () {
    return {
      show: false,
    };
  },
  
  handleClick() {
    this.setState({
      show:!this.state.show,
    })
  },
  
  render() {
    return(
      <div className="contents">
        <h3 className="content-subhead">Get Started</h3>
        <div className="content pure-u-4-5">
          <div className="pure-g">
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <h4>默认加载效果</h4>
              <div className="loading-demo">
                <Spinner show={true}></Spinner>  
              </div>
              <pre className="highlight javascript"><code>
              {'<Spinner show={true}></Spinner>'}
              </code></pre>
              <h4>改变颜色 <code>color</code> 属性</h4>
              <div className="loading-box">
                <Spinner show={true} color="#3498db"></Spinner>
              </div>
              <pre className="highlight javascript"><code>
              {'<Spinner show={true} color="#3498db"></Spinner>'}
              </code></pre>
              <h4>换一种加载效果 <code>type</code> 属性</h4>
              <div className="loading-box">
                <Spinner type="gif" show={true} color="#3498db"></Spinner>
              </div>
              <pre className="highlight javascript"><code>
              {'<Spinner show={true} type="gif" color="#3498db"></Spinner>'}
              </code></pre>
              <h4>自定义加载效果 <code>children</code> 属性</h4>
              <div className="loading-box">
                <Spinner show={true} color="#3498db" text="数据请求中...">
                  <img width={80} src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif"/>
                </Spinner>
              </div>
              <pre className="highlight javascript"><code>
              {'<Spinner show={true} type="gif" color="#3498db"></Spinner>'}
              </code></pre>
              <h4>使用事件控制加载隐藏 <code>show</code> 属性</h4>
              <button className="pure-button pure-button-primary" onClick={() => {this.handleClick()}}>显示</button>
              
              <button style={{marginLeft:20}} className="pure-button pure-button-primary" onClick={() => {this.handleClick()}}>隐藏</button>
              <div className="loading-box">
                <Spinner type="gif" text={this.state.show?'显示...':'隐藏...'} show={this.state.show} color="#3498db"></Spinner>
              </div>
              <pre className="highlight javascript"><code>
              {'<Spinner show={this.state.show} type="gif" color="#3498db"></Spinner>'}
              </code></pre>
              <h3 style={{paddingTop:40,textAlign:'center'}}>
                <a className="button-xlarge pure-button pure-button-radius" href="https://github.com/JackPu/react-loading-spinner">DOWNLOAD AND DOCUMENT</a>
                </h3>
            </div>
          </div>

        </div>
       
      </div>
    );
  },
  
  handleRes(res) {
    console.log(res);
    this.setState({
      src: res.data.src
    });
  },
  
  handleCropRes(res) {
    this.setState({
      cropArgs:{
        src: 'http://img1.vued.vanthink.cn/vuedff07db9e592f103e0f8108bc633d2663.png',
        x: parseInt(res.data.post.toCropImgX),
        y: parseInt(res.data.post.toCropImgY),
        w: parseInt(res.data.post.toCropImgW),
        h: parseInt(res.data.post.toCropImgH)
      }
    });
  }
});

export default Contents;  