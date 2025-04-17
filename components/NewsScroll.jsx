import React from 'react';

const NewsScroll = () => {
  return (
    <div className="flex items-center gap-2 mt-40">
      <span className="bg-primary px-2 py-1 -skew-x-3 text-secondary">FlashNews</span>
      <div className="-skew-x-3 border-2 border-dark p-2 flex-1 text-sm">
            <div className="select-none">
              <marquee behavior="scroll" direction="left">An unbeaten 98 from Alex Carey dragged Australia to victory over New Zealand by three wickets in a thrilling second Test on Monday to give &nbsp; Modern Structures &nbsp; Thinking outside of the box Decoration</marquee>
            </div>
      </div>
    </div>
  );
};

export default NewsScroll;