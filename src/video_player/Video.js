import Inferno from 'inferno';
import Component from 'inferno-component';
import h from 'inferno-hyperscript';

/**
 * Component for handling Video playing
 * Props: {
 *  src: string,
 *  defaultControls: boolean,  -> if default controls is active, 'playing' will be overriden. Basically saying component is uncontrolled.
 *  onPlay: function, -> function called on play [UNCONTROLLED ONLY]
 *  onPause: function -> function called on pause [UNCONTROLLED ONLY]
 *  onEnd: function -> function called on end of video.
 *  onLoadStart: function -> function fired when data is being searched for in video.
 *  onError: function -> function fired on error with video source.
 *  autoReplay: boolean -> if true, will replay video on end.
 *  playing: boolean, -> Whether or not component is playing [CONTROLLED ONLY]
 *  height: integer,
 *  width: integer,
 *  altText: string -> Alternative text if video not compatible
 * }
 */
class Player extends Component {
    render() {
        return (
            h('video.fio-video', {
                controls: this.props.defaultControls,
                height: this.props.height,
                width: this.props.width,
            }, [
                h('source', {src: this.props.src}),
                this.props.altText || ''
            ])
        );
    }
}
export default Player;