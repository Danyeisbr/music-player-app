import PlayList from "./PlayList";
import Song from "./Song";
import SongTitle from "./SongTitle";
import { useContext } from "react";
import { PlayerContext } from "./PlayerProvider";

const Songs = () => {
  const songsList = useContext(PlayerContext);
  console.log(songsList);

  return (
    <PlayList>
      {songsList.map(({ id, title, author }) => {
        return (
          <Song key={id}>
            <SongTitle data-testid={id} active={false}>
              {title}
            </SongTitle>
            <p>{author}</p>
          </Song>
        );
      })}
    </PlayList>
  );
};

export default Songs;
