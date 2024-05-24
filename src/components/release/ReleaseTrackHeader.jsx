export default function ReleaseTrackHeader({ trackNumber, trackName, artist }) {
  return (
    <div className="container max-w-screen-sm mx-auto mb-4 flex content-start items-start px-2 md:px-8">
      <div className="text-xl mr-2 text-[var(--releaseColor)]">
        {trackNumber.toString().padStart(2, "0")}
      </div>
      <div>
        <div className="text-xl grow font-bold text-left select-none">
          {trackName.value}
        </div>

        {artist.value && (
          <>
            <div className="text-sm grow text-left select-none text-white/50 font-extralight">
              {artist.value}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
