import React from 'react';
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ReleaseTrackHeader from "./ReleaseTrackHeader";
import { toHTML } from "@portabletext/to-html";

export default function ReleaseTrack({ locale, track, trackKey }) {
  const trackName =
    track.title.find((title) => title._key === locale) ||
    track.title.find((title) => title._key === "en");
  const artist =
    track.artist.find((artist) => artist._key === locale) ||
    track.artist.find((artist) => artist._key === "en");
  const description =
    track.description.find((desc) => desc._key === locale) ||
    track.description.find((desc) => desc._key === "en");

  return (
    <Disclosure className="accordion mb-4" key={trackKey} as="div">
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full flex max-w-screen-md mx-auto">
            <ReleaseTrackHeader
              trackNumber={trackKey}
              trackName={trackName}
              artist={artist}
            />
            <ChevronRightIcon 
              className={`transition-transform duration-200 inline-block h-9 w-9 relative top-0.5 justify-self-end shrink-0 ml-2 ${
                open ? 'rotate-90' : ''
              }`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out origin-top"
            enterFrom="transform scale-y-0 opacity-0"
            enterTo="transform scale-y-100 opacity-100"
            leave="transition duration-100 ease-out origin-top"
            leaveFrom="transform scale-y-100 opacity-100"
            leaveTo="transform scale-y-0 opacity-0"
          >
            <Disclosure.Panel className="accordian-body bg-[#18191b] text-white shadow-inner-xl py-4 px-4 mb-4">
              <div className="container max-w-screen-sm mt-2 mx-auto">
                <div
                  className="prose prose-sm prose-release prose-invert"
                  dangerouslySetInnerHTML={{ __html: toHTML(description.value) }}
                />
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}