import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 text-base-300 px-[20%]">
      <div className="flex justify-between gap-3  ">
        <div className="flex flex-col gap-2">
          <h2>Service</h2>
          <p>Contacts</p>
          <p>FAQ</p>
          <p>PLatform Tutorials : Videos</p>
          <p>Economic Calendar</p>
          <p>Forex Calculator</p>
          <p>Affiliate</p>
          <p>Program</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2>offer</h2>
          <p>50% Offer</p>
          <p>Trade and Win</p>
          <p>Contests</p>
          <p>Scooter Giveaway</p>
          <p>Copy Trading</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Legal information</h2>
          <p>Risk Disclosure</p>
          <p>Privacy Policy</p>
          <p>Return Policy</p>
          <p>Language</p>
        </div>
      </div>
      <p>
        {" "}
        © 2023 Okta Markets Incorporated, registered address: 1st Floor,
        Meridian Place, Choc Estate, Castries, Saint Lucia Business reg. no.
        2023-00092
      </p>
      <a className="link-secondary mb-10" href="">
        {" "}
        Support@Rashikfx.com
      </a>
    </div>
  );
};

export default Footer;
