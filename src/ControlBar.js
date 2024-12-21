import Button from './Button';
import BottomBar from './BottomBar';
import BarSongTitle from './BarSongTitle';

const ControlBar = () => {
    return (
      <BottomBar>
        <BarSongTitle title={'title'} author={'author'} data-testid="barTitle"/>
        <div>
          <Button data-testid="previousButton">Previous</Button>
          <Button data-testid="nextButton">Next</Button>
          <Button data-testid="currentModeButton">{'replay mode'}</Button>
        </div>
      </BottomBar>
    );
};

export default ControlBar;