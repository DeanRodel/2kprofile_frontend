import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import { useState } from 'react';
import SharePopup from './SharePopup';

const ShareButton = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && (
        <SharePopup setShowPopup={setShowPopup}>
          <div className="flex flex-wrap gap-2">
            <FacebookShareButton url={props.url}>
              <FacebookIcon size={props.iconSize} />
            </FacebookShareButton>
            <EmailShareButton url={props.url}>
              <EmailIcon size={props.iconSize}></EmailIcon>
            </EmailShareButton>
            <InstapaperShareButton url={props.url}>
              <InstapaperIcon size={props.iconSize}></InstapaperIcon>
            </InstapaperShareButton>
            <LineShareButton url={props.url}>
              <LineIcon size={props.iconSize}></LineIcon>
            </LineShareButton>
            <LinkedinShareButton url={props.url}>
              <LinkedinIcon size={props.iconSize}></LinkedinIcon>
            </LinkedinShareButton>
            <PinterestShareButton url={props.url}>
              <PinterestIcon size={props.iconSize}></PinterestIcon>
            </PinterestShareButton>
            <RedditShareButton url={props.url}>
              <RedditIcon size={props.iconSize}></RedditIcon>
            </RedditShareButton>
            <TelegramShareButton url={props.url}>
              <TelegramIcon size={props.iconSize}></TelegramIcon>
            </TelegramShareButton>
            <TumblrShareButton url={props.url}>
              <TumblrIcon size={props.iconSize}></TumblrIcon>
            </TumblrShareButton>
            <TwitterShareButton url={props.url}>
              <TwitterIcon size={props.iconSize}></TwitterIcon>
            </TwitterShareButton>
            <WhatsappShareButton url={props.url}>
              <WhatsappIcon size={props.iconSize}></WhatsappIcon>
            </WhatsappShareButton>
          </div>
        </SharePopup>
      )}
      <button
        className={props.className}
        type={props.type}
        onClick={(e) => {
          // e.preventDefault()
          // e.persist();
          // e.stopPropagation();
          // e.nativeEvent.stopImmediatePropagation();
          setShowPopup(true);
        }}
      >
        <div className=''>
          <svg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>
            <path d='M48 39.26c-2.377 0-4.515 1-6.033 2.596L24.23 33.172c.061-.408.103-.821.103-1.246 0-.414-.04-.818-.098-1.215l17.711-8.589c1.519 1.609 3.667 2.619 6.054 2.619 4.602 0 8.333-3.731 8.333-8.333 0-4.603-3.731-8.333-8.333-8.333s-8.333 3.73-8.333 8.333c0 .414.04.817.098 1.215l-17.711 8.589c-1.519-1.609-3.666-2.619-6.054-2.619-4.603 0-8.333 3.731-8.333 8.333 0 4.603 3.73 8.333 8.333 8.333 2.377 0 4.515-1 6.033-2.596l17.737 8.684c-.061.407-.103.821-.103 1.246 0 4.603 3.731 8.333 8.333 8.333s8.333-3.73 8.333-8.333S52.602 39.26 48 39.26z' />
          </svg>
        </div>
      </button>
    </>
  );
};

export default ShareButton;
