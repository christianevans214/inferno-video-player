import Inferno from 'inferno';
import Component from 'inferno-component';
import Video from './video_player/Video'
import h from 'inferno-hyperscript';
import Logo from './logo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: "https://frameio-application-development.s3-accelerate.amazonaws.com/file_avDnCTiz/transcodes/h264_540.mp4?AWSAccessKeyId=AKIAIRJXUK5UILI6DYOQ&Expires=1484781267&Signature=zvW0OboGkAT96t3AYgiHd%2FmYnEs%3D",
    };
  }

  onClickChangeSrc(evt) {
    this.setState({
      videoSrc: "https://frameio-application-development.s3-accelerate.amazonaws.com/file_IvC8Ymh7/transcodes/h264_540.mp4?AWSAccessKeyId=AKIAIRJXUK5UILI6DYOQ&Expires=1484790523&Signature=4bY2R0aKKRf3lw2KqJchsXTDijk%3D",
    });
  }

  render() {
    return (
      h('div.container', [
        h(Video, {
          src: this.state.videoSrc,
          defaultControls: true,
        }),
        h('button', {
          onClick: this.onClickChangeSrc.bind(this)
        }, 'Plz Click Me')
      ])
    );
  }
}

export default App;
