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
 *  onTimeUpdate: function -> function fired when timestamp is updated.
 *  onProgress: function -> function fired onProgress (when data is being loaded)
 *  autoReplay: boolean -> if true, will replay video on end.
 *  playing: boolean, -> Whether or not component is playing [CONTROLLED ONLY]
 *  height: integer,
 *  width: integer,
 *  timeStamp: integer, -> Allows user to set timestamp.
 *  altText: string -> Alternative text if video not compatible
 * }
 */
class BasePlayer extends Component {
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

/**
 * NOTES TO SELF:
 * For an uncontrolled component, or one that uses the defaultControls, it's not necessary to set 'playing' at all
 * because that's all handled in the default control. We instead rely on onPlay, onPause events to tell the outside
 * world what's going on.
 * IF the element is controlled:
 * - We don't need onPlay and onPause because we know when the video is playing from the outside. 
 * - We stil need to know when it ends, at the least, and maybe when it starts loading and whatever.
 * - We have a basic and an advanced way of controlling the video.
 *      - With the 'playing' field. The playing field will allow a user to start and stop the video, but will not allow them to 
 *        set the timestamp of the field. Actually, we could still pass in a timestamp if we wanted to...and set if prop changes.
 *      - By passing in a timestamp. If a timestamp is being passed in
 * 
 */